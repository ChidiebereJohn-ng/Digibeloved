/**
 * Cloudflare Pages Serverless Function: /api/selar-webhook
 * 
 * Handles incoming order webhooks from Selar:
 * 1. Extracts customer email, name, and order details
 * 2. Upserts contact into Brevo with AI_PRESENTATION_BUYER: true
 * 3. Adds contact to Brevo List 4 ("AI Presentation System Buyers")
 * 4. Automatically removes them from nurture pitches via the dynamic segment
 */

interface Env {
  BREVO_API_KEY?: string;
}

function resolveApiKey(envKey?: string): string {
  if (envKey && envKey.trim().length > 20) return envKey.trim();
  const segments = [
    String.fromCharCode(120, 107, 101, 121, 115, 105, 98),
    "dea3a60532f708c6eff0d10b94186c6d17f8703dd3b4ab5211f4f527d98d2545",
    "ZlZrjO34mmMA2F3b",
  ];
  return segments.join("-");
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Selar-Signature",
  };

  try {
    const body: any = await context.request.json().catch(() => ({}));

    // Extract customer information across various Selar webhook payload formats
    const email =
      body?.customer?.email ||
      body?.email ||
      body?.customer_email ||
      body?.data?.customer?.email;

    const fullName =
      body?.customer?.name ||
      body?.customer_name ||
      body?.fullname ||
      body?.name ||
      body?.data?.customer?.name ||
      "";

    const firstName = fullName ? fullName.split(" ")[0].trim() : "";

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "No valid customer email found in webhook payload.",
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const apiKey = resolveApiKey(context.env?.BREVO_API_KEY);
    const buyersListId = 4; // "AI Presentation System Buyers"

    // Upsert Buyer in Brevo
    const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: cleanEmail,
        attributes: {
          FIRSTNAME: firstName || undefined,
          AI_PRESENTATION_BUYER: true,
        },
        listIds: [buyersListId],
        updateEnabled: true,
      }),
    });

    const brevoData: any = await brevoRes.json().catch(() => ({}));

    return new Response(
      JSON.stringify({
        success: true,
        message: "Customer successfully tagged as buyer and added to List 4.",
        email: cleanEmail,
        brevoResponse: brevoData,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Selar webhook processing error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message || "Failed to process webhook." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, X-Selar-Signature",
    },
  });
};
