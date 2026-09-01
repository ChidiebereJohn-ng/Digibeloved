import React from "react";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";
import { buildTrackedUrl } from "../../src/services/metaPixel";

export default function HeroV2() {
  const { hero, selarCheckoutUrl } = SALES_CONFIG;

  const handleCtaClick = () => {
    trackSalesEvent("hero_cta_click", { cta_location: "hero_above_fold" });
    trackSalesEvent("checkout_click", { cta_location: "hero_above_fold" });
  };

  return (
    <section className="relative bg-[#07152E] text-white pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle editorial ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/10 via-accent/5 to-transparent pointer-events-none blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Value & Primary CTA */}
          <div className="lg:col-span-7 text-left">
            
            {/* Price Announcement Pill */}
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-accent/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-accent mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{hero.priceTag}</span>
            </div>

            {/* Main Headline (H1) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              {hero.headline}
            </h1>

            {/* Subheadline (H2) */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-accent leading-snug mb-5">
              {hero.subheadline}
            </p>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
              {hero.description}
            </p>

            {/* Micro Objection Killer */}
            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-8 border-l-2 border-accent/40 pl-3">
              {hero.noDesignRequired}
            </p>

            {/* Primary Action Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
              <a
                href={buildTrackedUrl(selarCheckoutUrl)}
                onClick={handleCtaClick}
                className="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-base md:text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.25)] group"
              >
                <span>{hero.ctaText}</span>
                <ArrowRight className="ml-2.5 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Microcopy & Trust Indicator */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">{hero.ctaMicrocopy}</span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-accent mr-1" />
                7-Day Implementation Guarantee
              </span>
            </div>

          </div>

          {/* Right Column: Real Product Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Glow backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent/20 to-blue-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
              
              {/* Product Cover Asset */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B1C3D]">
                <img
                  src="/playbook-cover.png"
                  alt="The AI Presentation Playbook by DigiBeloved - Cover"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-300"
                  loading="eager"
                />
              </div>

              {/* Founding Offer Sticker */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-accent text-navy px-4 py-2 rounded-xl font-extrabold text-xs sm:text-sm shadow-xl border border-navy/20 flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-navy fill-navy" />
                <span>₦19,900 / $29</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
