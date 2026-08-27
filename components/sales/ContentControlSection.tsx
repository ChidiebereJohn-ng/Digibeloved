import React from "react";
import { Lock, Sliders, Zap, CheckCircle2 } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";

export default function ContentControlSection() {
  const { contentControlModes } = SALES_CONFIG;

  const modeIcons = {
    verbatim: Lock,
    refine: Sliders,
    optimize: Zap,
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            Total Authority Over Text
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4">
            And You Remain in Control
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            One of the biggest frustrations with generative AI is unpredictable rewriting. The DigiBeloved Dynamic Presentation Skill gives you three explicit, production-tested control switches:
          </p>
        </div>

        {/* 3 Control Mode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {contentControlModes.map((mode) => {
            const Icon = modeIcons[mode.id as keyof typeof modeIcons] || Sliders;
            return (
              <div
                key={mode.id}
                className="bg-slate-50 border border-slate-200 hover:border-[#0A1F44] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#0A1F44] text-[#FFD100] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded">
                      {mode.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0A1F44] mb-1">
                    {mode.name}
                  </h3>

                  <p className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-1 mb-4 inline-block">
                    &ldquo;{mode.tagline}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {mode.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Enforced via Dynamic Skill directive</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Tag */}
        <div className="text-center">
          <div className="inline-block bg-[#0A1F44] text-white px-8 py-3 rounded-xl font-black text-lg sm:text-xl tracking-tight shadow">
            Your Presentation. Your Choice.
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            No mode is universally superior â€” choose the exact level of intervention required for your document.
          </p>
        </div>

      </div>
    </section>
  );
}

