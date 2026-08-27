import React from "react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { CheckCircle2 } from "lucide-react";

export default function WhoItIsForSection() {
  const { audiences } = SALES_CONFIG;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            Target Audience
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4">
            Built for People Who Have Something Worth Presenting
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The DigiBeloved AI Presentation System is specifically tailored for knowledge workers and domain specialists who already possess valuable subject matter:
          </p>
        </div>

        {/* 10 Clean Editorial Grid Items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {audiences.map((aud) => (
            <div
              key={aud}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center flex flex-col items-center justify-center hover:border-[#0A1F44] transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-2 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                {aud}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 italic max-w-2xl mx-auto">
          If your professional or academic credibility depends on delivering clear, persuasive, and visually disciplined slide decks, this system was created for you.
        </p>

      </div>
    </section>
  );
}

