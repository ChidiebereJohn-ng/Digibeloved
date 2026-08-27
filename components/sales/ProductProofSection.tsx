import React from "react";
import { BookOpen, Layers, Terminal, CheckCircle2 } from "lucide-react";

export default function ProductProofSection() {
  const proofItems = [
    {
      icon: BookOpen,
      badge: "PLAYBOOK SPREADS",
      title: "Illustrated Step-by-Step Walkthroughs",
      desc: "Inside pages featuring full visual breakdowns of slide pacing, typographical scaling, and hierarchy rules.",
      assetPlaceholder: "/assets/proof/playbook-interior-spreads.webp",
      caption: "High-resolution editorial spreads from Chapter 3: Dynamic Slide Architecture.",
    },
    {
      icon: Terminal,
      badge: "DYNAMIC SKILL DIRECTIVE",
      title: "The Actual Instruction Framework",
      desc: "Inspect the exact modular markdown instructions that give AI models precise presentation intelligence.",
      assetPlaceholder: "/assets/proof/dynamic-skill-spec.webp",
      caption: "The proprietary Dynamic Presentation Skill syntax and parameter switches.",
    },
    {
      icon: Layers,
      badge: "WORKFLOW WORKED EXAMPLES",
      title: "Real Case Transformations",
      desc: "Side-by-side prompt executions showing raw text input directly through to finished PowerPoint slides.",
      assetPlaceholder: "/assets/proof/workflow-execution-sample.webp",
      caption: "End-to-end execution of Workflow A (Document to Executive Presentation).",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0A1F44] bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            Tangible Deliverables
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4">
            See the System in Action
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We don&apos;t rely on vague promises or fabricated hype. Here is an authentic preview of what is inside the DigiBeloved AI Presentation System:
          </p>
        </div>

        {/* 3 Proof Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {proofItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.badge}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-[#0A1F44] transition-all"
              >
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#0A1F44] mb-3">
                    <Icon className="w-4 h-4 text-[#0A1F44]" />
                    <span>{item.badge}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Simulated Visual Preview & Asset Placeholder */}
                  {/* DEVELOPER ASSET TODO: Replace below container with real screenshot image from: {item.assetPlaceholder} */}
                  <div className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-6 text-center text-xs text-slate-500 font-mono mb-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#0A1F44] flex items-center justify-center mx-auto mb-2 font-bold">
                      ðŸ“„
                    </div>
                    <span className="font-bold text-slate-800 block text-[11px] mb-1">
                      [Placeholder: {item.assetPlaceholder}]
                    </span>
                    <span className="text-[10px] text-slate-400 block">
                      {item.caption}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-emerald-700 font-medium flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Full digital asset included</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-500 italic max-w-xl mx-auto">
          Every screenshot, framework, and prompt card inside the playbook was created from real production workflows tested with executives, clients, and learners.
        </p>

      </div>
    </section>
  );
}

