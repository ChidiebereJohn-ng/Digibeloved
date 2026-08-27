import React from "react";
import { AlertCircle, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";

export default function MechanismV2() {
  const { mechanism } = SALES_CONFIG;

  return (
    <section className="py-16 md:py-24 bg-white text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Objection Block */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">
            {mechanism.objectionQuestion}
          </h2>

          <p className="text-lg font-bold text-navy mb-3">
            {mechanism.answerIntro}
          </p>

          <p className="text-base text-slate-700 font-medium mb-3">
            {mechanism.genericPromptIntro}
          </p>

          {/* Generic Prompt Quote */}
          <blockquote className="bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-xl font-mono text-sm sm:text-base text-slate-800 italic mb-5">
            {mechanism.genericPrompt}
          </blockquote>

          <p className="text-base text-slate-700 font-medium mb-3">
            {mechanism.missingContextIntro}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
            {mechanism.missingContext.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70"
              >
                <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-base text-slate-600 leading-relaxed mb-6">
            {mechanism.consequence}
          </p>

          <div className="inline-block bg-[#07152E] text-accent px-4 py-2 rounded-lg font-bold text-sm sm:text-base tracking-wide">
            {mechanism.betterDirectionCallout}
          </div>
        </div>

        <hr className="border-slate-200 my-12" />

        {/* The New Mechanism / Workflow Equation */}
        <div>
          <h3 className="text-xs font-mono font-bold text-accent uppercase tracking-widest bg-navy inline-block px-3 py-1 rounded-full mb-4">
            The Proprietary System
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-8">
            {mechanism.workflowHeadline}
          </h2>

          {/* Editorial Visual Equation Box */}
          <div className="bg-[#07152E] text-white p-6 sm:p-10 rounded-2xl border border-white/10 shadow-xl mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center items-center">
              
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-mono mb-1">01</span>
                <span className="text-sm sm:text-base font-extrabold text-white">{mechanism.equation.step1}</span>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-mono mb-1">02</span>
                <span className="text-sm sm:text-base font-extrabold text-white">{mechanism.equation.step2}</span>
              </div>

              <div className="bg-accent/10 p-4 rounded-xl border border-accent/40 shadow-inner">
                <span className="text-xs text-accent uppercase tracking-wider block font-mono mb-1">03 Key</span>
                <span className="text-sm sm:text-base font-extrabold text-accent">{mechanism.equation.step3}</span>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-wider block font-mono mb-1">04</span>
                <span className="text-sm sm:text-base font-extrabold text-white">{mechanism.equation.step4}</span>
              </div>

            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <span className="text-xs text-slate-400 uppercase tracking-widest block font-mono mb-1">Equals</span>
              <span className="text-base sm:text-xl md:text-2xl font-extrabold text-white tracking-wide">
                = {mechanism.equation.result}
              </span>
            </div>
          </div>

          {/* 4 Core Principles Checklist */}
          <div className="space-y-3">
            {mechanism.principles.map((principle, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg font-bold text-navy leading-snug">
                  {principle}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
