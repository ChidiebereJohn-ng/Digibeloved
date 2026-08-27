
import React from "react";
import { ArrowRight, BookOpen, Layers, FileText, CheckCircle2 } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";

export default function OfferStackSection() {
  const { offerStack, selarCheckoutUrl, heroCopy, pricing } = SALES_CONFIG;

  const handleCtaClick = () => {
    trackSalesEvent("hero_cta_click", {
      ctaLocation: "offer_stack_section",
      url: selarCheckoutUrl,
      price: pricing.displayLaunchPrice,
    });
    trackSalesEvent("checkout_click", {
      ctaLocation: "offer_stack_section",
      url: selarCheckoutUrl,
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A1F44] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background visual texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A3A6E_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0A1F44] bg-[#FFD100] px-3.5 py-1.5 rounded-full inline-block mb-4 shadow">
            The Complete Bundle
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Get the Complete DigiBeloved AI Presentation System
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Everything you need to master presentation art direction, automate slide architecture, and execute four practical workflows.
          </p>
        </div>

        {/* Product Stack Grid */}
        <div className="space-y-6 mb-16">
          
          {/* 1. Core Product: The Playbook */}
          <div className="bg-slate-900/90 border-2 border-[#FFD100]/60 rounded-3xl p-7 sm:p-9 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div className="flex items-center space-x-3">
                <span className="w-12 h-12 rounded-2xl bg-[#FFD100] text-[#0A1F44] flex items-center justify-center font-black shadow-md">
                  <BookOpen className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FFD100] font-bold block mb-0.5">
                    CORE ASSET
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {offerStack.core.title}
                  </h3>
                </div>
              </div>
              <span className="bg-white/10 border border-white/20 text-slate-200 text-xs font-semibold px-3 py-1 rounded-full self-start md:self-auto">
                {offerStack.core.subtitle}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {offerStack.core.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/5 rounded-2xl p-5 border border-white/10">
              {offerStack.core.highlights.map((point) => (
                <div key={point} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD100] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Included Tool: Dynamic Presentation Skill */}
          <div className="bg-slate-900/80 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center space-x-3">
                <span className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                    INCLUDED TOOL
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {offerStack.skill.title}
                  </h3>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                {offerStack.skill.subtitle}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {offerStack.skill.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {offerStack.skill.highlights.map((hl) => (
                <div key={hl} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Supporting Execution Resources (3 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerStack.resources.map((res) => (
              <div
                key={res.number}
                className="bg-slate-900/70 border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span>{res.number}</span>
                    <FileText className="w-4 h-4 text-[#FFD100]" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {res.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#FFD100] mb-3">
                    &ldquo;{res.benefit}&rdquo;
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {res.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-slate-400">
                  Included with System
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Big CTA Banner 4 */}
        <div className="bg-gradient-to-r from-slate-900 to-[#162D5A] border-2 border-[#FFD100] rounded-3xl p-8 sm:p-10 text-center shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFD100] font-bold block mb-1">
              ALL-IN-ONE SYSTEM
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Playbook + Dynamic Skill + 3 Execution Resources
            </h3>
            <div className="flex items-baseline justify-center space-x-3 mb-6">
              <span className="text-3xl sm:text-4xl font-black text-[#FFD100]">
                {pricing.displayLaunchPrice}
              </span>
              <span className="text-sm text-slate-400 line-through">
                {pricing.displayStandardPrice}
              </span>
            </div>

            <a
              href={selarCheckoutUrl}
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center space-x-3 bg-[#FFD100] hover:bg-yellow-400 text-[#0A1F44] font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              <span>{heroCopy.primaryCtaText}</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 mt-4">
              <span>âœ“ Instant Digital Download</span>
              <span>âœ“ Portable Across Any AI</span>
              <span>âœ“ 7-Day Implementation Guarantee</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

