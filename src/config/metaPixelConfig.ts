/**
 * Centralized Meta Pixel & Funnel Configuration
 * 
 * Reads META_PIXEL_ID from Vite environment variables (VITE_META_PIXEL_ID)
 * with a fallback to the default production Pixel ID.
 */

export const META_PIXEL_ID: string =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_META_PIXEL_ID) ||
  "1060746866921031";

export const PRODUCT_CONFIG = {
  name: "DigiBeloved AI Presentation System",
  leadMagnetName: "AI Presentation Starter Blueprint",
  priceUSD: 29,
  currency: "USD",
  selarBaseUrl: "https://selar.com/7q8715st85",
};

export const CHEAT_CODES_CONFIG = {
  name: "7 AI Cheat Codes",
  slug: "7-ai-cheat-codes",
  priceNGN: 2500,
  priceUSD: 10,
  currency: "USD",
  selarCheckoutUrl: "https://selar.com/2g2o77678w",
  selarSessionUrl: "https://selar.com/2g2o77678w",
  whatsappSessionUrl: "https://wa.me/2348067628656?text=Hello%20Chukwuemeka,%20I%20just%20purchased%20the%207%20AI%20Cheat%20Codes%20guide%20and%20would%20like%20to%20book%20the%201-on-1%20AI%20Session%20(60%20Minutes).",
};
