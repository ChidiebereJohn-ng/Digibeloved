
import React from "react";
import { ArrowRight } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";

export default function FinalCloseSection() {
  const { selarCheckoutUrl, heroCopy, pricing } = SALES_CONFIG;

  const handleCtaClick = () => {
    trackSalesEvent("hero_cta_click", {
      ctaLocation: "final_close_section",
      url: selarCheckoutUrl,
      price: pricing.displayLaunchPrice,
    });
    trackSalesEvent("checkout_click", {
      ctaLocation: "final_close_section",
      url: selarCheckoutUrl,
    });
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Contrast Choice */}
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-slate-400 block mb-3">
            THE FINAL DECISION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            You Can Keep Building Every Presentation From Scratch.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-6 font-mono text-sm">
            Blank slide. Template hunting. Alignment tweaks. Formatting cleanups. Revisions. Repeat every single time you need to present.
          </p>

          <div className="text-xl sm:text-2xl font-black text-slate-400 my-6">
            â€” OR â€”
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#FFD100] tracking-tight mb-6">
            Learn One Reusable Workflow.
          </h3>

          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl text-sm sm:text-base font-bold text-slate-200 mb-6">
            <span>Your Content</span>
            <span className="text-[#FFD100]">+</span>
            <span>Your Context</span>
            <span className="text-[#FFD100]">+</span>
            <span>Professional Presentation Principles</span>
            <span className="text-[#FFD100]">+</span>
            <span>AI</span>
          </div>

          <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Create Better. Work Faster. Stay in Control.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="mb-16">
          <a
            href={selarCheckoutUrl}
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center space-x-3 bg-[#FFD100] hover:bg-yellow-400 text-[#0A1F44] font-black text-lg sm:text-xl py-5 px-10 rounded-2xl shadow-2xl hover:shadow-yellow-400/20 transition-all transform hover:scale-105 cursor-pointer"
          >
            <span>{heroCopy.primaryCtaText}</span>
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="flex items-center justify-center space-x-3 text-xs text-slate-400 mt-4">
            <span className="text-[#FFD100] font-bold">{pricing.displayLaunchPrice} Founding Launch Price</span>
            <span>â€¢</span>
            <span>Instant Digital Access via Selar</span>
          </div>
        </div>

        {/* P.S. Statement (Section 36) */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-7 sm:p-9 text-left max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFD100] block mb-2">
            P.S. FROM DIGIBELOVED
          </span>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
            You probably do not need another folder full of presentation templates or another collection of random AI prompts. You need a workflow you understand well enough to reuse whenever you have something worth presenting. That is what the DigiBeloved AI Presentation System is designed to give you.
          </p>

          <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Ready to get started?</span>
            <a
              href={selarCheckoutUrl}
              onClick={handleCtaClick}
              className="text-xs font-bold text-[#FFD100] hover:underline flex items-center space-x-1"
            >
              <span>Get the System Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

