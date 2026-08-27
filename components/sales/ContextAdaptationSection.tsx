import React from "react";
import { GraduationCap, Briefcase, TrendingUp, Sliders } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";

export default function ContextAdaptationSection() {
  const { audienceAdaptations } = SALES_CONFIG;

  const icons = [GraduationCap, Briefcase, TrendingUp];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0A1F44] bg-white px-3 py-1 rounded-md border border-slate-200 shadow-sm">
            Audience Intelligence
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4">
            Same Content. Different Audience. Different Presentation.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Amateur slide makers present the exact same deck to everyone. The DigiBeloved Dynamic Presentation Skill dynamically adapts layout density, cognitive pacing, and typography according to your target viewer:
          </p>
        </div>

        {/* 3 Audience Adaptation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {audienceAdaptations.map((item, idx) => {
            const Icon = icons[idx] || Sliders;
            return (
              <div
                key={item.audience}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0A1F44] text-[#FFD100] flex items-center justify-center mb-4 font-bold shadow">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-slate-500 block mb-1">
                    Audience Target
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {item.audience}
                  </h3>

                  <div className="inline-block bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold px-2.5 py-1 rounded mb-4">
                    Core Objective: {item.objective}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.approach}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                  Dynamic Skill Rule: Adjusted pacing &amp; contrast
                </div>
              </div>
            );
          })}
        </div>

        {/* Context Factors Pill List */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 text-center max-w-3xl mx-auto shadow-sm">
          <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block mb-3">
            Every deck is calibrated across six critical context vectors:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-700">
            <span className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">Target Audience</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">Meeting Objective</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">Tone of Voice</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">Brand Guidelines</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">Content Control Mode</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">Slide Canvas Preference</span>
          </div>
        </div>

      </div>
    </section>
  );
}

