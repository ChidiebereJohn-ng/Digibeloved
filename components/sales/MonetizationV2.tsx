import React from "react";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";

export default function MonetizationV2() {
  const { monetization } = SALES_CONFIG;

  return (
    <section className="py-16 md:py-20 bg-white text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Commercial Service Application */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-3">
            {monetization.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium mb-6">
            {monetization.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {monetization.services.map((service, index) => (
              <div
                key={index}
                className="flex items-center space-x-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/70 text-sm font-semibold text-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-600 font-normal mb-3">
            {monetization.teachingNote}
          </p>

          {/* Income Disclaimer Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-1.5 rounded-lg text-xs font-bold">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
            <span>{monetization.incomeDisclaimer}</span>
          </div>
        </div>

        <hr className="border-slate-200 my-10" />

        {/* One System. Many Uses. */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-4">
            {monetization.manyUsesHeadline}
          </h2>

          <p className="text-sm sm:text-base font-semibold text-slate-700 mb-4">
            Use it for:
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
            {monetization.useCases.map((useCase, index) => (
              <span
                key={index}
                className="bg-[#07152E] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold tracking-wide shadow-xs"
              >
                {useCase}
              </span>
            ))}
          </div>

          <p className="text-base sm:text-lg font-bold text-navy border-l-4 border-accent pl-4 py-1 leading-relaxed">
            {monetization.closingNote}
          </p>
        </div>

      </div>
    </section>
  );
}
