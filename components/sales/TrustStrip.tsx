import React from "react";
import { ArrowRight } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";

export default function TrustStrip() {
  const { trustStrip } = SALES_CONFIG;

  return (
    <section className="bg-slate-900 border-y border-white/10 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Use-case steps */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-slate-300 font-medium">
          {trustStrip.map((item, idx) => (
            <React.Fragment key={item.label}>
              <div className="flex items-center space-x-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD100]" />
                <span className="text-white font-semibold">{item.label}</span>
              </div>
              {idx < trustStrip.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Transition conclusion */}
        <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#FFD100] tracking-wide text-center md:text-right">
          <span className="text-slate-400 font-normal">Unified by:</span>
          <span>One Reusable AI Presentation Workflow</span>
        </div>

      </div>
    </section>
  );
}

