import React from "react";
import { CheckCircle2, Clock, Layers } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";

export default function ProblemV2() {
  const { problem } = SALES_CONFIG;

  return (
    <section className="py-16 md:py-20 bg-slate-50 text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Section Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-6">
          {problem.headline}
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg font-medium text-slate-700 mb-4">
          {problem.intro}
        </p>

        {/* Existing Assets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {problem.assets.map((asset, index) => (
            <div
              key={index}
              className="flex items-center space-x-2.5 bg-white p-3 rounded-lg border border-slate-200/80 shadow-xs text-sm font-medium text-slate-800"
            >
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
              <span>{asset}</span>
            </div>
          ))}
        </div>

        {/* The Frustration Callout */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <p className="text-base sm:text-lg font-bold text-navy leading-snug mb-4">
            {problem.frustration}
          </p>

          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">
            {problem.stillThinkingAboutIntro}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {problem.stillThinkingAbout.map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
              >
                <Layers className="w-3 h-3 text-slate-400 mr-1.5" />
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-sm text-red-600 font-medium bg-red-50 p-3.5 rounded-xl border border-red-100">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span>{problem.slogOutcome}</span>
          </div>
        </div>

        {/* Pivot Highlight */}
        <div className="border-l-4 border-accent pl-5 py-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-navy leading-snug mb-1">
            {problem.pivotHeadline}
          </h3>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            {problem.pivotSubheadline}
          </p>
        </div>

      </div>
    </section>
  );
}
