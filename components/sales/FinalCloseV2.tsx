import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";
import { buildTrackedUrl } from "../../src/services/metaPixel";

export default function FinalCloseV2() {
  const { finalClose, selarCheckoutUrl } = SALES_CONFIG;

  const handleCtaClick = () => {
    trackSalesEvent("hero_cta_click", { cta_location: "final_close" });
    trackSalesEvent("checkout_click", { cta_location: "final_close" });
  };

  return (
    <section className="py-20 md:py-28 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
          {finalClose.headline}
        </h2>

        {/* Give your content list */}
        <div className="inline-block text-left bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mb-10 shadow-lg">
          <p className="text-sm sm:text-base font-semibold text-slate-300 mb-4">
            {finalClose.giveContentIntro}
          </p>
          <div className="space-y-3">
            {finalClose.giveContentItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 text-base sm:text-lg font-bold text-accent">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-tight">
          {finalClose.closingTagline}
        </p>

        {/* Final CTA Button */}
        <div className="flex flex-col items-center justify-center gap-3 mb-4">
          <a
            href={buildTrackedUrl(selarCheckoutUrl)}
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-xl font-extrabold text-lg sm:text-xl tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)] group"
          >
            <span>{finalClose.ctaText}</span>
            <ArrowRight className="ml-3 h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="text-sm font-bold text-accent font-mono tracking-wider">
            {finalClose.priceTag}
          </span>
        </div>

        <p className="text-xs text-slate-400 font-light mt-3">
          Instant digital access • Playbook + Dynamic Skill + 3 Execution Resources
        </p>

      </div>
    </section>
  );
}
