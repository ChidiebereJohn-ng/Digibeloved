
import React from "react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from "lucide-react";

export default function SalesHero() {
  const { heroCopy, selarCheckoutUrl } = SALES_CONFIG;

  const handleCtaClick = () => {
    trackSalesEvent("hero_cta_click", {
      ctaLocation: "hero",
      url: selarCheckoutUrl,
      price: SALES_CONFIG.pricing.displayLaunchPrice,
    });
    trackSalesEvent("checkout_click", {
      ctaLocation: "hero",
      url: selarCheckoutUrl,
    });
  };

  return (
    <section className="relative bg-[#0A1F44] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background radial rhythm */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A3A6E_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct-Response Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-[#FFD100] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD100]" />
              <span>{heroCopy.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              {heroCopy.headline}
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-medium text-[#FFD100] mb-5 leading-snug">
              {heroCopy.supportingHeadline}
            </p>

            {/* Subheadline / Descriptive Lead */}
            <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed max-w-xl">
              {heroCopy.subtext}
            </p>

            {/* Benefit Line */}
            <div className="flex items-center space-x-2 text-sm sm:text-base font-semibold text-white/90 mb-8">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{heroCopy.benefitLine}</span>
            </div>

            {/* Primary Action Stack */}
            <div className="w-full sm:w-auto flex flex-col items-start gap-3">
              <a
                href={selarCheckoutUrl}
                onClick={handleCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#FFD100] hover:bg-yellow-400 text-[#0A1F44] font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-yellow-400/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>{heroCopy.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              {/* Pricing & Guarantee Sub-note */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-300 font-medium pt-1">
                <span className="text-[#FFD100] font-bold">{heroCopy.priceBadge}</span>
                <span className="text-slate-400">â€¢</span>
                <span className="flex items-center space-x-1 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Instant Selar Delivery</span>
                </span>
              </div>

              {/* Supporting Microcopy */}
              <p className="text-xs text-slate-400 tracking-wide pt-1">
                {heroCopy.supportingCtaMicrocopy}
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Product Mockup Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Product Visual Mockup Container */}
              <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-white/15 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                
                {/* Visual Header Tag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-[#FFD100]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      DigiBeloved Publication
                    </span>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold px-2 py-0.5 rounded">
                    Complete System
                  </span>
                </div>

                {/* Simulated Editorial Book & Skill Preview */}
                {/* DEVELOPER ASSET TODO: Replace below with actual `/assets/playbook-cover.webp` and `/assets/playbook-pages.webp` when high-res 3D product renders are available */}
                <div className="relative bg-gradient-to-br from-[#0D244F] to-[#0A1F44] border-2 border-[#FFD100]/40 rounded-xl p-6 text-white shadow-xl overflow-hidden mb-4">
                  {/* Subtle Spine Accent */}
                  <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-[#FFD100]" />
                  
                  <div className="pl-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#FFD100] font-bold block mb-1">
                      MASTER WORKFLOW MANUAL
                    </span>
                    <h3 className="text-xl font-extrabold tracking-tight text-white leading-snug mb-2">
                      The AI Presentation Playbook
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Four practical workflows, prompt frameworks, worked examples, and editorial design rules.
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[11px] bg-white/5 border border-white/10 rounded-lg p-2.5">
                      <div>
                        <span className="text-slate-400 block text-[10px]">INCLUDED CORE</span>
                        <span className="font-semibold text-white">Dynamic Skill Engine</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">FORMAT</span>
                        <span className="font-semibold text-white">Digital Playbook + Pack</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-resource Cards Stack */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-2.5 text-slate-200">
                    <span className="font-medium text-slate-200">âš¡ Dynamic Presentation Skill Document</span>
                    <span className="text-[10px] text-[#FFD100] font-bold">INCLUDED</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-2.5 text-slate-200">
                    <span className="font-medium text-slate-200">ðŸ“‹ Quick-Start Prompt &amp; Context Pack</span>
                    <span className="text-[10px] text-[#FFD100] font-bold">INCLUDED</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-2.5 text-slate-200">
                    <span className="font-medium text-slate-200">ðŸ’¼ Presentation Freelancer Starter Toolkit</span>
                    <span className="text-[10px] text-[#FFD100] font-bold">INCLUDED</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Single-user commercial license</span>
                  <span className="text-slate-300 font-medium">Instant PDF &amp; Resource Access</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

