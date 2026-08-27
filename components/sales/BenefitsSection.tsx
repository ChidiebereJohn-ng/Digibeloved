import React from "react";
import { Zap, Sparkles, Sliders, Repeat, Globe, DollarSign } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";

export default function BenefitsSection() {
  const { benefits } = SALES_CONFIG;

  const benefitIcons = [Zap, Sparkles, Sliders, Repeat, Globe, DollarSign];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            Real Transformation
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4">
            What Changes After You Learn the System?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            This isn&apos;t about learning novelty AI tricks. It is about permanently transforming how you go from thoughts and data to high-stakes visual communication:
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = benefitIcons[idx] || Sparkles;
            return (
              <div
                key={b.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#0A1F44] transition-all hover:shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0A1F44] text-[#FFD100] flex items-center justify-center mb-4 font-bold shadow">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Operational Advantage 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

