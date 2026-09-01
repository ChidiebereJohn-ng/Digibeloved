/**
 * DigiBeloved Meta Pixel & Funnel Analytics Engine
 * 
 * Centralized tracking service providing:
 * 1. Global PageView tracking
 * 2. Lead event (fired STRICTLY after verified server success)
 * 3. BlueprintDownload custom event (fired on PDF link click)
 * 4. ViewContent event (on /ai-presentation-system with content_name)
 * 5. SelarCheckoutClick custom event (fired before outbound navigation to Selar)
 * 6. UTM & fbclid parameter persistence across funnel and outbound checkout
 * 7. Development-only debug logging (no console noise in production)
 * 
 * NOTE: Purchase tracking is handled exclusively by Selar.
 */

import { META_PIXEL_ID, PRODUCT_CONFIG } from "../config/metaPixelConfig";

export { META_PIXEL_ID, PRODUCT_CONFIG };

const UTM_STORAGE_KEY = "digibeloved_utm_params";

/**
 * 1. UTM & Ad Identifier Persistence Engine
 */
export function captureAndPersistUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "fbclid",
      "gclid",
      "ttclid",
      "ref",
    ];

    const currentParams: Record<string, string> = {};
    let hasNewParams = false;

    utmKeys.forEach((key) => {
      const val = searchParams.get(key);
      if (val) {
        currentParams[key] = val;
        hasNewParams = true;
      }
    });

    if (hasNewParams) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(currentParams));
      if (import.meta.env.DEV) {
        console.log("[Meta Pixel Debug] Captured UTMs:", currentParams);
      }
      return currentParams;
    }

    // Retrieve existing preserved params
    const saved = sessionStorage.getItem(UTM_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn("[Meta Pixel Debug] Failed to capture UTM params:", err);
    }
    return {};
  }
}

/**
 * Append preserved UTM parameters to any target URL
 */
export function buildTrackedUrl(targetUrl: string): string {
  if (typeof window === "undefined") return targetUrl;

  try {
    const saved = sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!saved) return targetUrl;

    const utmParams: Record<string, string> = JSON.parse(saved);
    if (Object.keys(utmParams).length === 0) return targetUrl;

    const url = new URL(targetUrl, window.location.origin);
    Object.entries(utmParams).forEach(([k, v]) => {
      if (!url.searchParams.has(k)) {
        url.searchParams.set(k, v);
      }
    });

    return url.toString();
  } catch {
    return targetUrl;
  }
}

/**
 * Internal safe caller for window.fbq
 */
function callFbq(
  action: "track" | "trackCustom",
  eventName: string,
  payload?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;

  try {
    const win = window as any;
    if (typeof win.fbq === "function") {
      if (payload) {
        win.fbq(action, eventName, payload);
      } else {
        win.fbq(action, eventName);
      }

      if (import.meta.env.DEV) {
        console.log(`[Meta Pixel Debug] fbq('${action}', '${eventName}')`, payload || {});
      }
    } else if (import.meta.env.DEV) {
      console.warn(`[Meta Pixel Debug] window.fbq not loaded. Event: ${eventName}`, payload);
    }
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error(`[Meta Pixel Debug] Error executing ${eventName}:`, err);
    }
  }
}

/**
 * 2. Event: PageView
 * Fired normally on route change and initial load.
 */
export function trackPageView(path?: string): void {
  callFbq("track", "PageView", path ? { path } : undefined);
}

/**
 * 3. Event: Lead
 * Fired ONLY after a verified successful submission of the AI Presentation Blueprint lead form.
 * Never fired on mere button click.
 */
export function trackLead(payload: { email?: string; firstName?: string } = {}): void {
  callFbq("track", "Lead", {
    content_name: PRODUCT_CONFIG.leadMagnetName,
    content_category: "Lead Magnet",
    ...payload,
  });
}

/**
 * 4. Custom Event: BlueprintDownload
 * Fired when subscriber clicks the free Blueprint PDF download link.
 */
export function trackBlueprintDownload(payload: Record<string, unknown> = {}): void {
  callFbq("trackCustom", "BlueprintDownload", {
    content_name: PRODUCT_CONFIG.leadMagnetName,
    file_type: "PDF",
    download_url: "https://digibeloved.com/assets/ai-presentation-starter-blueprint.pdf",
    ...payload,
  });
}

/**
 * 5. Event: ViewContent
 * Fired on /ai-presentation-system sales page.
 */
export function trackViewContent(payload: Record<string, unknown> = {}): void {
  callFbq("track", "ViewContent", {
    content_name: PRODUCT_CONFIG.name,
    content_type: "product",
    value: PRODUCT_CONFIG.priceUSD,
    currency: PRODUCT_CONFIG.currency,
    ...payload,
  });
}

/**
 * 6. Custom Event: SelarCheckoutClick
 * Fired immediately before navigating from our sales page to Selar.
 * Also triggers InitiateCheckout for standard ad optimization.
 */
export function trackSelarCheckoutClick(ctaLocation: string = "unknown"): void {
  // Custom event as explicitly requested
  callFbq("trackCustom", "SelarCheckoutClick", {
    content_name: PRODUCT_CONFIG.name,
    cta_location: ctaLocation,
    value: PRODUCT_CONFIG.priceUSD,
    currency: PRODUCT_CONFIG.currency,
    destination: PRODUCT_CONFIG.selarBaseUrl,
  });

  // Standard InitiateCheckout event
  callFbq("track", "InitiateCheckout", {
    content_name: PRODUCT_CONFIG.name,
    content_type: "product",
    value: PRODUCT_CONFIG.priceUSD,
    currency: PRODUCT_CONFIG.currency,
  });
}
