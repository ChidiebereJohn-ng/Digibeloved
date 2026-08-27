
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";

export default function StickyMobileCta() {
  const { enableStickyMobileCta, pricing, selarCheckoutUrl } = SALES_CONFIG;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enableStickyMobileCta) return;

    const handleScroll = () => {
      // Show after user scrolls beyond the hero (600px threshold)
      const shouldShow = window.scrollY > 600;
      setVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableStickyMobileCta]);

  if (!enableStickyMobileCta || !visible) {
    return null;
  }

  const handleCtaClick = () => {
    trackSalesEvent("checkout_click", {
      ctaLocation: "sticky_mobile_bar",
      url: selarCheckoutUrl,
      price: pricing.displayLaunchPrice,
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A1F44]/95 backdrop-blur-md border-t border-white/15 py-3 px-4 sm:hidden shadow-2xl transition-all duration-300 animate-fade-in-up">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
            Founding Offer
          </span>
          <span className="text-sm font-black text-[#FFD100] tracking-tight">
            {pricing.displayLaunchPrice}
          </span>
        </div>

        <a
          href={selarCheckoutUrl}
          onClick={handleCtaClick}
          className="inline-flex items-center space-x-1.5 bg-[#FFD100] hover:bg-yellow-400 text-[#0A1F44] font-black text-xs px-4 py-2.5 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer"
        >
          <span>Get the AI Presentation System</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

