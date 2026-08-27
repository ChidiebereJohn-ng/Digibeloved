
import React from "react";
import { ArrowRight, Layers, Sparkles, SlidersHorizontal } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";

export default function DynamicSkillSection() {
  const { selarCheckoutUrl, heroCopy } = SALES_CONFIG;

  const skillParameters = [
    "Audience Profile",
    "Primary Objective",
    "Content Domain",
    "Structural Framing",
    "Layout Architecture",
    "Typography Scale",
    "Visual Hierarchy",
    "Brand Color Restraint",
    "Data & Chart Callouts",
    "Narrative Flow",
  ];

  const handleCtaClick = () => {
    trackSalesEvent("hero_cta_click", {
      ctaLocation: "dynamic_skill_section",
      url: selarCheckoutUrl,
    });
    trackSalesEvent("checkout_click", {
      ctaLocation: "dynamic_skill_section",
      url: selarCheckoutUrl,
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A1F44] text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Reveal Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0A1F44] bg-[#FFD100] px-3.5 py-1.5 rounded-full inline-block mb-4 shadow">
            The Engine
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            DigiBeloved Dynamic Presentation Skill
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The Dynamic Skill is a reusable instruction system that injects editorial art direction, cognitive pacing, and design intelligence directly into your AI model before it touches your content.
          </p>
        </div>

        {/* Diagram Flow */}
        <div className="bg-slate-900/90 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl mb-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* 1. The Inputs Grid (Col 4) */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FFD100] mb-3">
                <SlidersHorizontal className="w-4 h-4" />
                <span>10 Dynamic Directional Inputs</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] sm:text-xs">
                {skillParameters.map((param) => (
                  <div
                    key={param}
                    className="bg-white/5 border border-white/10 rounded-lg p-2 text-slate-300 font-medium flex items-center space-x-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD100] shrink-0" />
                    <span className="truncate">{param}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transition Arrow 1 */}
            <div className="lg:col-span-1 flex justify-center text-slate-400">
              <ArrowRight className="w-6 h-6 hidden lg:block text-[#FFD100]" />
              <span className="lg:hidden text-xs font-mono text-slate-400">â†“ Fed into Skill</span>
            </div>

            {/* 2. The Dynamic Skill Core (Col 4) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#0D244F] to-[#162D5A] border-2 border-[#FFD100] rounded-2xl p-6 text-center shadow-xl relative">
              <div className="inline-flex p-3 rounded-xl bg-[#FFD100] text-[#0A1F44] mb-3">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Dynamic Presentation Skill
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed mb-4">
                Enforces visual hierarchy, cognitive load balancing, whitespace rules, and delivery modes.
              </p>
              <div className="bg-white/10 rounded-lg py-1.5 px-3 text-[11px] font-mono text-[#FFD100]">
                Portability: ChatGPT â€¢ Claude â€¢ Gemini
              </div>
            </div>

            {/* Transition Arrow 2 */}
            <div className="lg:col-span-1 flex justify-center text-slate-400">
              <ArrowRight className="w-6 h-6 hidden lg:block text-[#FFD100]" />
              <span className="lg:hidden text-xs font-mono text-slate-400">â†“ Generates</span>
            </div>

            {/* 3. Output (Col 2) */}
            <div className="lg:col-span-2 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 text-center">
              <Sparkles className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <span className="text-xs font-bold text-emerald-300 block mb-1">
                Output
              </span>
              <span className="text-xs text-slate-200 leading-tight block">
                Executive Presentation Architecture
              </span>
            </div>

          </div>
        </div>

        {/* Big Hero Equation Statement (Section 16) */}
        <div className="border-t border-white/10 pt-16 text-center">
          
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight mb-8">
            <span className="text-[#FFD100]">CONTENT</span>
            <span className="text-slate-400">+</span>
            <span className="text-[#FFD100]">CONTEXT</span>
            <span className="text-slate-400">+</span>
            <span className="text-[#FFD100]">DYNAMIC SKILL</span>
            <span className="text-slate-400">+</span>
            <span className="text-white">AI</span>
            <span className="text-slate-400 block sm:inline w-full sm:w-auto mt-2 sm:mt-0">
              =
            </span>
            <span className="bg-white/10 border border-white/20 text-emerald-400 px-4 py-1.5 rounded-xl block sm:inline">
              PROFESSIONAL PRESENTATION WORKFLOW
            </span>
          </div>

          <div className="max-w-2xl mx-auto space-y-2 text-sm sm:text-base text-slate-300 font-medium leading-relaxed mb-8">
            <p>You provide the raw information.</p>
            <p>The Dynamic Skill provides proven presentation direction.</p>
            <p>AI assists production and rapid layout execution.</p>
            <p className="text-[#FFD100] font-semibold">
              You review, refine, and customize the final output.
            </p>
          </div>

          {/* Strategic CTA 2 */}
          <div className="flex flex-col items-center gap-3">
            <a
              href={selarCheckoutUrl}
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center space-x-3 bg-[#FFD100] hover:bg-yellow-400 text-[#0A1F44] font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              <span>{heroCopy.primaryCtaText}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-xs text-slate-400">
              Founding Launch Offer: â‚¦19,900 / $29 â€¢ Instant Access
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

