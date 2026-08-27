import React from "react";
import { UserCheck, Bot, Layers, CheckCircle2 } from "lucide-react";

export default function NonDesignerSection() {
  const embeddedRules = [
    { title: "Visual Hierarchy", desc: "Guiding eye flow from headline to supporting evidence" },
    { title: "Whitespace Discipline", desc: "Allowing cognitive breathing room without empty clutter" },
    { title: "Typographic Scale", desc: "Disciplined heading-to-body ratios for rapid scannability" },
    { title: "Intentional Color Restraint", desc: "Using accent colors solely for high-priority calls to attention" },
    { title: "Data & Chart Framing", desc: "Transforming dense numbers into single, decisive takeaways" },
    { title: "Paced Narrative Flow", desc: "Ensuring slide-to-slide logical progression" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Large Editorial Statement */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            Democratizing Executive Design
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-6 leading-tight">
            You Don&apos;t Need to Become a Professional Presentation Designer First.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            You shouldn&apos;t have to spend years studying graphic arts, grid mathematics, or typography theory just to deliver your ideas effectively. The Dynamic Skill embeds these principles directly into your prompt environment:
          </p>
        </div>

        {/* Illustrated Knowledge Transfer Equation */}
        <div className="bg-[#0A1F44] text-white rounded-3xl p-8 sm:p-10 shadow-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFD100] block text-center mb-6">
            The Three-Pillar Synergy
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Pillar 1: YOU */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 text-center flex flex-col items-center justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/20 text-[#FFD100] flex items-center justify-center mb-3">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-1">
                  Pillar 01
                </span>
                <h3 className="text-lg font-black text-white mb-2">
                  Subject Expertise
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your raw research, industry knowledge, proposals, lectures, and strategic vision.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 w-full text-xs font-bold text-[#FFD100]">
                Provided by YOU
              </div>
            </div>

            {/* Pillar 2: SKILL */}
            <div className="bg-gradient-to-b from-[#162D5A] to-[#0D244F] border-2 border-[#FFD100] rounded-2xl p-6 text-center flex flex-col items-center justify-between shadow-lg">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFD100] text-[#0A1F44] flex items-center justify-center mb-3">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#FFD100] font-bold block mb-1">
                  Pillar 02
                </span>
                <h3 className="text-lg font-black text-white mb-2">
                  Presentation Intelligence
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Proven editorial art direction, cognitive pacing, slide architecture, and contrast rules.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 w-full text-xs font-bold text-white">
                Embedded in the SKILL
              </div>
            </div>

            {/* Pillar 3: AI */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 text-center flex flex-col items-center justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-1">
                  Pillar 03
                </span>
                <h3 className="text-lg font-black text-white mb-2">
                  Execution Assistance
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rapid generation, structural drafting, layout scaffolding, and file formatting.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 w-full text-xs font-bold text-emerald-400">
                Executed via AI
              </div>
            </div>

          </div>
        </div>

        {/* 6 Embedded Design Rules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {embeddedRules.map((rule) => (
            <div
              key={rule.title}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start space-x-3"
            >
              <CheckCircle2 className="w-4 h-4 text-[#0A1F44] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-0.5">
                  {rule.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

