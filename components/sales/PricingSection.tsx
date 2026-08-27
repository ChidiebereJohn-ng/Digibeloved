
import React, { useEffect } from "react";
import { ArrowRight, Check, ShieldCheck, Download, Sparkles, Star } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";
import UrgencySection from "./UrgencySection";

export default function PricingSection() {
  const { pricing, selarCheckoutUrl, heroCopy } = SALES_CONFIG;

  useEffect(() => {
    trackSalesEvent("pricing_view", {
      price: pricing.displayLaunchPrice,
    });
  }, [pricing.displayLaunchPrice]);

  const handleCheckoutClick = () => {
    trackSalesEvent("checkout_click", {
      ctaLocation: "pricing_section",
      url: selarCheckoutUrl,
      price: pricing.displayLaunchPrice,
    });
  };

  const inclusions = [
    "The AI Presentation Playbook (Master Illustrated Digital Manual)",
    "Dynamic Presentation Skill Document (Reusable across ChatGPT, Claude & Gemini)",
    "Quick-Start Prompt & Context Pack (Ready-to-use prompt cards)",
    "Four-Workflow Quick-Reference Guide (Condensed execution sheet)",
    "Presentation Freelancer Starter Toolkit (Commercial service framework)",
    "Verbatim, Refine & Optimize Execution Instructions",
    "7-Day Implementation Guarantee",
    "Lifetime Reusable Personal & Commercial System License",
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1F44] text-white border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0A1F44] bg-[#FFD100] px-3.5 py-1.5 rounded-full inline-block mb-3 shadow">
            Founding Member Access
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
            One Investment. One System. Yours to Keep.
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            No recurring monthly subscriptions. Instant access upon checkout via Selar.
          </p>
        </div>

        {/* Urgency notice if configured */}
        <UrgencySection />

        {/* Main Pricing Offer Card */}
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-[#0D244F] border-2 border-[#FFD100] rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          
          {/* Top Pill */}
          <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#FFD100] text-[#0A1F44] font-black text-xs tracking-wider uppercase px-4 py-1 rounded-full shadow-lg flex items-center space-x-1.5">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Founding Launch Price</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-white/10 pb-8 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFD100] font-bold block mb-1">
                COMPLETE SYSTEM BUNDLE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                DigiBeloved AI Presentation System
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Playbook + Dynamic Skill + 3 Execution Resources
              </p>
            </div>

            <div className="text-left md:text-right">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl sm:text-5xl font-black text-[#FFD100] tracking-tight">
                  {pricing.displayLaunchPrice}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400 mt-1 md:justify-end">
                <span>Standard Planned Price:</span>
                <span className="line-through text-slate-500 font-semibold">
                  {pricing.displayStandardPrice}
                </span>
              </div>
              <span className="text-[11px] text-emerald-400 font-bold block mt-1">
                Save over 35% during founding launch
              </span>
            </div>
          </div>

          {/* Feature Inclusions List */}
          <div className="space-y-3 mb-10">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-400 block mb-2">
              Everything Included With Your Access:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {inclusions.map((item) => (
                <div
                  key={item}
                  className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <Check className="w-4 h-4 text-[#FFD100] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={selarCheckoutUrl}
              onClick={handleCheckoutClick}
              className="w-full text-center inline-flex items-center justify-center space-x-3 bg-[#FFD100] hover:bg-yellow-400 text-[#0A1F44] font-black text-lg sm:text-xl py-5 px-8 rounded-2xl shadow-2xl hover:shadow-yellow-400/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>{heroCopy.primaryCtaText}</span>
              <ArrowRight className="w-6 h-6" />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300 pt-2">
              <span className="flex items-center space-x-1.5">
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Instant Digital Access</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Selar Secure Checkout</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-[#FFD100]" />
                <span>Nigerian &amp; International Cards Accepted</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

