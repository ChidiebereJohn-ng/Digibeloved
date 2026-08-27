import React from "react";
import { ArrowRight, Check, ShieldCheck, Zap } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";

export default function PricingGuaranteeV2() {
  const { pricing, selarCheckoutUrl, hero, guarantee } = SALES_CONFIG;

  const inclusions = [
    "AI Presentation Playbook",
    "Dynamic Presentation Skill",
    "Prompt & Context Pack",
    "Four Workflow Quick Guide",
    "Freelancer Starter Toolkit",
  ];

  const handleCtaClick = () => {
    trackSalesEvent("pricing_view");
    trackSalesEvent("hero_cta_click", { cta_location: "pricing_card" });
    trackSalesEvent("checkout_click", { cta_location: "pricing_card" });
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50 text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-3xl mx-auto">
        
        {/* Main Pricing Box */}
        <div className="bg-white rounded-3xl border-2 border-accent shadow-2xl p-6 sm:p-10 mb-12 relative overflow-hidden">
          {/* Top accent badge */}
          <div className="absolute top-0 right-0 bg-accent text-navy text-[11px] font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-xs">
            {pricing.priceHeadline}
          </div>

          <div className="text-left mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
              Get the DigiBeloved AI Presentation System
            </h2>
            <p className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">
              You receive:
            </p>

            {/* Inclusions Checklist */}
            <div className="space-y-2.5 mb-8">
              {inclusions.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm sm:text-base font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-accent text-navy flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Price Numbers */}
            <div className="border-t border-slate-100 pt-6 mb-6">
              <div className="flex items-baseline space-x-3 mb-1">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy font-sans tracking-tight">
                  {pricing.displayLaunchPrice}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-accent bg-[#07152E] inline-block px-3 py-1 rounded-md mb-2">
                {pricing.priceHeadline}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                Planned standard price: <strong className="line-through text-slate-400">{pricing.displayStandardPrice}</strong>
              </p>
            </div>

            {/* Primary Purchase CTA */}
            <a
              href={selarCheckoutUrl}
              onClick={handleCtaClick}
              className="w-full inline-flex items-center justify-center bg-accent text-navy py-4 sm:py-5 px-6 rounded-xl font-extrabold text-base sm:text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.3)] group mb-3"
            >
              <span>{hero.ctaText}</span>
              <ArrowRight className="ml-2.5 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-center text-xs text-slate-500 font-medium">
              Secure checkout hosted on Selar • Instant digital file delivery
            </p>
          </div>
        </div>

        {/* 7-Day Implementation Guarantee */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-left shadow-xs flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-navy flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-navy mb-2">
              {guarantee.headline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              {guarantee.body}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
