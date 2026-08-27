import React from "react";
import { Calendar } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";

export default function UseCasesSection() {
  const { useCases } = SALES_CONFIG;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0A1F44] bg-white px-3 py-1 rounded-md border border-slate-200 shadow-sm">
            Real-World Scenarios
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4">
            Imagine Being Able to Use This Whenever You Need a Presentation
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Instead of dreading presentation deadlines, picture having a reliable, structured system for every common workday scenario:
          </p>
        </div>

        {/* 4 Contextual Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {useCases.map((uc) => (
            <div
              key={uc.day}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-[#0A1F44] transition-colors"
            >
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#0A1F44] bg-slate-100 px-3 py-1.5 rounded-lg w-fit mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{uc.day}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">
                  {uc.scenario}
                </h3>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50 rounded-xl p-3 text-xs sm:text-sm font-medium text-slate-700">
                <span className="text-emerald-700 font-bold block mb-0.5">
                  The Systematic Fix:
                </span>
                <span>{uc.solution}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Concept */}
        <div className="text-center">
          <div className="inline-block bg-[#0A1F44] text-[#FFD100] px-8 py-3 rounded-xl font-black text-lg sm:text-xl tracking-tight shadow">
            One System. Different Situations.
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Never start from scratch or hunt through irrelevant slide templates again.
          </p>
        </div>

      </div>
    </section>
  );
}

