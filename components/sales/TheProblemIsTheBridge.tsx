import React from "react";
import { AlertCircle, Layers, Type, AlignLeft, EyeOff, LayoutGrid, Compass } from "lucide-react";

export default function TheProblemIsTheBridge() {
  const failureModes = [
    {
      icon: Layers,
      title: "Crowded Slides",
      desc: "Packing every bullet point into one frame, forcing the audience to read a wall of text instead of listening to you.",
    },
    {
      icon: EyeOff,
      title: "Weak Visual Hierarchy",
      desc: "Everything looks equally important, meaning nothing commands focus or communicates a clear takeaway.",
    },
    {
      icon: LayoutGrid,
      title: "Generic Cookie-Cutter Layouts",
      desc: "Relying on tired default templates that dilute your credibility and make high-value insights look pedestrian.",
    },
    {
      icon: AlignLeft,
      title: "Text-Heavy Overload",
      desc: "Treating the slide canvas as a printed document rather than a high-impact visual speaking accompaniment.",
    },
    {
      icon: Type,
      title: "Inconsistent Typography",
      desc: "Mismatched font sizes, random spacing, and undisciplined headers that distract rather than persuade.",
    },
    {
      icon: Compass,
      title: "Lack of Design Direction",
      desc: "Starting without clear principles for whitespace, margins, color restraint, and cognitive pacing.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Large Editorial Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-white px-3 py-1 rounded-md border border-slate-200">
            The Fundamental Gap
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4 leading-tight">
            The Problem Is Not Always Your Content.
          </h2>

          <p className="text-xl sm:text-2xl font-semibold text-slate-600 mb-6">
            It is often the <span className="text-[#0A1F44] border-b-2 border-[#FFD100]">bridge</span> between your content and a professional presentation.
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Good information does not automatically become good slides. Even exceptional ideas, rigorous research, and winning strategies get crippled by familiar slide failure modes.
          </p>
        </div>

        {/* 6 Presentation Failure Modes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {failureModes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-500 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bridge Statement Banner */}
        <div className="bg-[#0A1F44] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-[#FFD100] shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                You don&apos;t need to abandon your content or learn complex graphic design.
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                You simply need a structured system that bridges the gap between what you know and how it is visually communicated.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

