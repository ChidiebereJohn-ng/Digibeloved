import React from "react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { Star } from "lucide-react";

export default function OptionComparisonSection() {
  const { comparisons } = SALES_CONFIG;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-sm">
            Objective Evaluation
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4">
            You Have More Than One Way to Create a Presentation
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every approach has its legitimate role. Here is an honest, balanced comparison of the major ways professionals build slides today:
          </p>
        </div>

        {/* 4 Cards Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {comparisons.map((c) => {
            const isHighlight = c.isHighlight;
            return (
              <div
                key={c.method}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all ${
                  isHighlight
                    ? "bg-[#0A1F44] text-white border-2 border-[#FFD100] shadow-xl relative"
                    : "bg-white border border-slate-200 text-slate-900 shadow-sm"
                }`}
              >
                <div>
                  {isHighlight && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FFD100] text-[#0A1F44] font-black text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Reusable Framework</span>
                    </div>
                  )}

                  <h3
                    className={`text-lg font-black tracking-tight mb-4 ${
                      isHighlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {c.method}
                  </h3>

                  <div className="space-y-4 text-xs">
                    <div>
                      <span
                        className={`font-mono uppercase text-[10px] tracking-wider block mb-0.5 ${
                          isHighlight ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Content Control
                      </span>
                      <p className="font-semibold">{c.control}</p>
                    </div>

                    <div>
                      <span
                        className={`font-mono uppercase text-[10px] tracking-wider block mb-0.5 ${
                          isHighlight ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Speed / Effort
                      </span>
                      <p className="font-semibold">{c.speed}</p>
                    </div>

                    <div>
                      <span
                        className={`font-mono uppercase text-[10px] tracking-wider block mb-0.5 ${
                          isHighlight ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Cost Profile
                      </span>
                      <p className="font-semibold">{c.cost}</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`mt-6 pt-4 border-t text-xs ${
                    isHighlight
                      ? "border-white/15 text-slate-200"
                      : "border-slate-100 text-slate-600"
                  }`}
                >
                  <span className="font-bold block mb-1">Best suited for:</span>
                  <p className="italic">{c.bestFor}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          *No single approach is right for every situation. The DigiBeloved system provides a reusable, asset-independent capability you own outright.
        </p>

      </div>
    </section>
  );
}

