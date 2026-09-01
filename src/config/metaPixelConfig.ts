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
