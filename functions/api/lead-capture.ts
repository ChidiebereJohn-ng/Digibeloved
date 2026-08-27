/**
 * Cloudflare Pages Serverless Function: /api/lead-capture
 * 
 * Handles lead capture for the DigiBeloved AI Presentation Starter Blueprint:
 * 1. Upserts contact into Brevo with FIRSTNAME
 * 2. Adds contact to Brevo List 3 ("AI Presentation Blueprint Leads")
 * 3. Triggers transactional delivery of Template 1 ("AI Presentation Blueprint Delivery")
 */

interface Env {
  BREVO_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const body: any = await context.request.json();
    const email = body?.email?.trim().toLowerCase();
    const firstName = body?.firstName?.trim() || "";

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ success: false, error: "A valid email address is required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Read API key securely from Cloudflare Pages Environment variable
    const apiKey = context.env.BREVO_API_KEY;
    if (!apiKey) {
      console.warn("BREVO_API_KEY is not set in Cloudflare Pages environment variables.");
      return new Response(
        JSON.stringify({
          success: false,
          error: "BREVO_API_KEY is not set in Cloudflare Pages environment variables.",
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const listId = 3; // "AI Presentation Blueprint Leads"
    const templateId = 1; // "AI Presentation Blueprint Delivery"

    // 1. Upsert Contact in Brevo
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: firstName || undefined,
        },
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    // 2. Trigger Transactional Email via Brevo SMTP API
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: [{ email: email, name: firstName || undefined }],
        templateId: templateId,
        params: {
          FIRSTNAME: firstName || "there",
        },
      }),
    });

    const emailData: any = await emailRes.json().catch(() => ({}));

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully subscribed and delivery email dispatched.",
        messageId: emailData?.messageId,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Lead capture error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message || "Failed to process subscription." }),
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
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
