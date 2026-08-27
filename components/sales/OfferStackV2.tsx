import React from "react";
import { BookOpen, Cpu, FileSpreadsheet, Compass, Briefcase } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";

export default function OfferStackV2() {
  const { offerStack } = SALES_CONFIG;

  const icons = [BookOpen, Cpu, FileSpreadsheet, Compass, Briefcase];

  return (
    <section className="py-16 md:py-24 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full inline-block mb-3 border border-white/10">
            Everything Included
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Get the Complete DigiBeloved AI Presentation System
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            A cohesive system of manuals, instruction directives, and quick-action tools.
          </p>
        </div>

        {/* 5 Stack Items */}
        <div className="space-y-4 mb-10">
          {offerStack.map((item, index) => {
            const Icon = icons[index] || BookOpen;

            return (
              <div
                key={item.number}
                className="bg-white/5 border border-white/10 hover:border-accent/40 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
              >
                <div className="flex items-start sm:items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-accent flex items-center justify-center flex-shrink-0 font-mono font-bold text-sm">
                    0{item.number}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-white mb-0.5">
                      {item.number}. {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <Icon className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
