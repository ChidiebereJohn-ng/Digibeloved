
import React from "react";
import { ArrowRight, FileCheck, Lightbulb, Compass, RefreshCw, CheckCircle2 } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";

export default function WorkflowsSection() {
  const { workflows, selarCheckoutUrl, heroCopy } = SALES_CONFIG;

  const workflowIcons = {
    "workflow-a": FileCheck,
    "workflow-b": Lightbulb,
    "workflow-c": Compass,
    "workflow-d": RefreshCw,
  };

  const handleCtaClick = () => {
    trackSalesEvent("hero_cta_click", {
      ctaLocation: "workflows_section",
      url: selarCheckoutUrl,
    });
    trackSalesEvent("checkout_click", {
      ctaLocation: "workflows_section",
      url: selarCheckoutUrl,
    });
  };

  const handleWorkflowView = (id: string) => {
    trackSalesEvent(
      id === "workflow-a"
        ? "workflow_a_view"
        : id === "workflow-b"
        ? "workflow_b_view"
        : id === "workflow-c"
        ? "workflow_c_view"
        : "workflow_d_view",
      { workflowId: id }
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#0A1F44] bg-white px-3 py-1 rounded-md border border-slate-200 shadow-sm">
            Proven Frameworks
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4">
            Four Workflows. Four Real Presentation Problems.
          </h2>

          <p className="text-lg sm:text-xl font-medium text-slate-600">
            Choose the path that matches where you are right now.
          </p>
        </div>

        {/* 4 In-Depth Editorial Panels */}
        <div className="space-y-8 mb-16">
          {workflows.map((wf) => {
            const Icon = workflowIcons[wf.id as keyof typeof workflowIcons] || FileCheck;
            const isFeatured = wf.id === "workflow-d"; // Workflow D gets strong demonstration emphasis

            return (
              <div
                key={wf.id}
                onMouseEnter={() => handleWorkflowView(wf.id)}
                className={`rounded-3xl border transition-all ${
                  isFeatured
                    ? "bg-white border-[#0A1F44] shadow-xl ring-2 ring-[#FFD100]/50 p-7 sm:p-9"
                    : "bg-white border-slate-200/90 shadow-sm p-6 sm:p-8"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                  <div className="flex items-center space-x-3">
                    <span className="w-10 h-10 rounded-xl bg-[#0A1F44] text-[#FFD100] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-extrabold text-[#0A1F44] uppercase tracking-wider">
                          {wf.letter}
                        </span>
                        <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {wf.badge}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {wf.title}
                      </h3>
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-1 text-xs font-mono font-bold bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg">
                    <span>{wf.flow}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  {wf.description}
                </p>

                {/* Workflow Architecture Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 mb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 block mb-1">
                      Execution Mechanism
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">
                      {wf.mechanism}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 block mb-1">
                      Key Principle
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#0A1F44]">
                      {wf.keyHighlight}
                    </p>
                  </div>
                </div>

                {/* Practical Tip */}
                <div className="flex items-start space-x-2 text-xs sm:text-sm text-slate-600 italic">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{wf.practicalTip}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-Page Strategic CTA */}
        <div className="bg-[#0A1F44] text-white rounded-3xl p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Master All Four Workflows Inside the System
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Never get stuck wondering how to approach a presentation again. The AI Presentation Playbook details exact prompt structures, screenshots, and step-by-step instructions for each workflow.
            </p>
            <a
              href={selarCheckoutUrl}
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center space-x-3 bg-[#FFD100] hover:bg-yellow-400 text-[#0A1F44] font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              <span>{heroCopy.primaryCtaText}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs text-slate-400 mt-3 font-medium">
              Founding Launch Offer: â‚¦19,900 / $29 â€¢ Reusable Across All Projects
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

