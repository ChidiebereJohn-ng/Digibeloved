import React from "react";
import { ArrowRight, FileText, Lightbulb, Compass, RotateCcw } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";

export default function WorkflowsV2() {
  const { workflows } = SALES_CONFIG;

  const icons = {
    "workflow-a": FileText,
    "workflow-b": Lightbulb,
    "workflow-c": Compass,
    "workflow-d": RotateCcw,
  };

  const handleWorkflowClick = (id: string) => {
    trackSalesEvent("workflow_view", { workflow_id: id });
  };

  return (
    <section className="py-16 md:py-24 bg-white text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest bg-navy px-3 py-1 rounded-full inline-block mb-3">
            Operational Blueprint
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            Four Workflows. Choose Your Situation.
          </h2>
        </div>

        {/* 4 Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {workflows.map((wf) => {
            const Icon = icons[wf.id as keyof typeof icons] || FileText;

            return (
              <div
                key={wf.id}
                onClick={() => handleWorkflowClick(wf.id)}
                className="bg-slate-50 border border-slate-200/80 hover:border-slate-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Workflow Letter & Flow Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="w-9 h-9 rounded-xl bg-[#07152E] text-accent font-extrabold text-lg flex items-center justify-center font-mono">
                        {wf.letter}
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-navy">
                        {wf.title}
                      </h3>
                    </div>
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-navy transition-colors" />
                  </div>

                  {/* Flow Arrow Strip */}
                  <div className="bg-white border border-slate-200 px-3.5 py-2 rounded-lg font-mono text-xs font-bold text-slate-800 mb-4 inline-flex items-center space-x-2">
                    <span>{wf.flow}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {wf.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
