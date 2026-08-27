import React from "react";
import { Lock, Sparkles, RefreshCw } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";

export default function ContentControlV2() {
  const { contentControl } = SALES_CONFIG;

  const icons = {
    verbatim: Lock,
    refine: Sparkles,
    optimize: RefreshCw,
  };

  return (
    <section className="py-16 md:py-20 bg-slate-50 text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Section Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-3">
          {contentControl.headline}
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-medium mb-10">
          {contentControl.subheadline}
        </p>

        {/* 3 Control Mode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          {contentControl.modes.map((mode) => {
            const Icon = icons[mode.id as keyof typeof icons] || Lock;
            const isVerbatim = mode.id === "verbatim";

            return (
              <div
                key={mode.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                  isVerbatim
                    ? "bg-white border-accent/60 shadow-md ring-1 ring-accent/30"
                    : "bg-white border-slate-200 shadow-xs hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#07152E] text-accent flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    {isVerbatim && (
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-accent bg-navy px-2.5 py-0.5 rounded-full">
                        Zero Rephrasing
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-navy mb-2 tracking-wide">
                    {mode.name}
                  </h3>

                  <p className="text-sm font-bold text-slate-800 mb-3">
                    {mode.tagline}
                  </p>

                  {mode.description && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {mode.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Punchline */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
          {contentControl.closingHeadline}
        </h3>

      </div>
    </section>
  );
}
