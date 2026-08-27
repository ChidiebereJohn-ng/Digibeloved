import React from "react";
import { ArrowRight, AlertTriangle, Briefcase } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";

export default function MonetizationSection() {
  const { monetizationPaths } = SALES_CONFIG;

  const progressionSteps = [
    "Learn System",
    "Practice Workflows",
    "Build Portfolio",
    "Package Offer",
    "Acquire Clients",
    "Deliver Decks",
    "Gather Reviews",
    "Earn Repeat Work",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-sm">
            Commercial Application
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4">
            Once You Can Use the System, You Can Also Learn How to Package the Capability as a Service.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            High-value presentation design is one of the most consistently outsourced tasks in business. The Presentation Freelancer Starter Toolkit teaches you how to turn this workflow into an in-demand commercial offering:
          </p>
        </div>

        {/* 6 Potential Service Paths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {monetizationPaths.map((path) => (
            <div
              key={path.title}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-[#0A1F44] transition-colors"
            >
              <Briefcase className="w-5 h-5 text-[#0A1F44] mb-2" />
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                {path.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {path.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 8-Step Service Progression Ribbon */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-10">
          <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 block mb-4 text-center">
            The Freelancer Commercial Progression
          </span>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold text-slate-800">
            {progressionSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg text-center">
                  <span className="text-[#0A1F44] mr-1">{idx + 1}.</span> {step}
                </span>
                {idx < progressionSteps.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-slate-400 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Explicit Disclosure Box (Non-negotiable) */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6 text-xs sm:text-sm text-amber-900 flex items-start space-x-3.5 shadow-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-amber-950">
              Important Earnings &amp; Commercial Disclosure:
            </h4>
            <p className="leading-relaxed text-amber-900/90 text-xs">
              The DigiBeloved AI Presentation System teaches practical workflows, design frameworks, and packaging strategies. Actual financial earnings depend entirely on individual execution, marketing effort, portfolio quality, client acquisition, and market conditions. <strong>No specific income or client revenue is guaranteed.</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

