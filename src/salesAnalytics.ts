/**
 * Direct-Response Sales Page Conversion Tracking
 * 
 * Safe semantic event dispatcher for dataLayer (GTM), gtag (GA4), and fbq (Meta Pixel).
 * Emits zero errors if tracking scripts are not installed.
 */

import {
  trackViewContent,
  trackSelarCheckoutClick,
} from "./services/metaPixel";

export type SalesEventName =
  | "sales_page_view"
  | "hero_cta_click"
  | "checkout_click"
  | "faq_open"
  | "pricing_view"
  | "before_after_interaction"
  | "workflow_view"
  | "sticky_mobile_cta_click";

export interface SalesEventPayload {
  cta_location?: string;
  workflow_id?: string;
  faq_question?: string;
  price_variant?: string;
  [key: string]: unknown;
}

export function trackSalesEvent(
  eventName: SalesEventName,
  payload: SalesEventPayload = {}
): void {
  if (typeof window === "undefined") return;

  const eventData = {
    event: eventName,
    page_name: "ai_presentation_system_sales_page",
    timestamp: new Date().toISOString(),
    ...payload,
  };

  try {
    // 1. Google Tag Manager / dataLayer
    const win = window as unknown as {
      dataLayer?: Array<Record<string, unknown>>;
      gtag?: (command: string, event: string, params?: Record<string, unknown>) => void;
      fbq?: (command: string, event: string, params?: Record<string, unknown>) => void;
    };

    if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push(eventData);
    }

    // 2. Google Analytics 4 (gtag.js)
    if (typeof win.gtag === "function") {
      win.gtag("event", eventName, payload as Record<string, unknown>);
    }

    // 3. Meta Pixel (via centralized service)
    if (
      eventName === "checkout_click" ||
      eventName === "hero_cta_click" ||
      eventName === "sticky_mobile_cta_click"
    ) {
      trackSelarCheckoutClick(payload.cta_location || eventName);
    } else if (eventName === "sales_page_view") {
      trackViewContent();
    }

    // Also record semantic event to fbq if available
    if (typeof win.fbq === "function") {
      win.fbq("trackCustom", eventName, payload as Record<string, unknown>);
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.debug("[Sales Analytics]", eventName, error);
    }
  }
}
