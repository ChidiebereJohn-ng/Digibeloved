
import React, { useState } from "react";
import { trackSalesEvent } from "../../src/salesAnalytics";
import { Check, X } from "lucide-react";

interface CaseStudyExample {
  id: string;
  category: string;
  title: string;
  rawTextSummary: string;
  beforeFlaws: string[];
  afterWins: string[];
  beforeImagePlaceholder: string;
  afterImagePlaceholder: string;
}

const CASE_STUDIES: CaseStudyExample[] = [
  {
    id: "corporate",
    category: "Corporate & Strategy",
    title: "Q3 Enterprise Operational Efficiency Review",
    rawTextSummary:
      "A 14-page board briefing detailing three business-unit bottlenecks, headcount reallocation plans, and target cost-reduction milestones.",
    beforeFlaws: [
      "12 cramped bullet points on a single gray background",
      "No clear focal point or primary takeaway metric",
      "Pie chart with 9 unlabelled micro-slices",
    ],
    afterWins: [
      "Executive summary callout card with bottom-line takeaway",
      "3-column clean operational milestone grid with scannable metrics",
      "Disciplined navy & yellow hierarchy guiding decision-makers in 5 seconds",
    ],
    beforeImagePlaceholder: "/assets/cases/corporate-before.webp",
    afterImagePlaceholder: "/assets/cases/corporate-after.webp",
  },
  {
    id: "academic",
    category: "Academic & Research",
    title: "Postgraduate Epidemiological Data Analysis",
    rawTextSummary:
      "A complex clinical trial study summarizing cohort variations, statistical p-values, and institutional recommendations.",
    beforeFlaws: [
      "Complete paragraphs copied verbatim into slide body",
      "Illegible raw statistical tables copied directly from paper",
      "Audience reads slides instead of listening to presenter",
    ],
    afterWins: [
      "Verbatim Mode maintained exact clinical terminology",
      "Key methodology phases organized as a progressive horizontal flow",
      "High-contrast statistical callout highlights primary significance",
    ],
    beforeImagePlaceholder: "/assets/cases/academic-before.webp",
    afterImagePlaceholder: "/assets/cases/academic-after.webp",
  },
  {
    id: "technical",
    category: "Petroleum & Technical",
    title: "Deepwater Asset Integrity & Maintenance Schedule",
    rawTextSummary:
      "Engineering specifications and risk matrix for offshore platform pipeline inspections and safety compliance audits.",
    beforeFlaws: [
      "Dense wall of engineering jargon without visual pacing",
      "Monochrome technical schematics with unreadable labels",
      "Lack of risk severity differentiation",
    ],
    afterWins: [
      "Categorized inspection phases with clear status badges",
      "Structured risk prioritization matrix using visual weight",
      "Engineering precision preserved without visual clutter",
    ],
    beforeImagePlaceholder: "/assets/cases/technical-before.webp",
    afterImagePlaceholder: "/assets/cases/technical-after.webp",
  },
  {
    id: "training",
    category: "Training & Workshops",
    title: "Executive Leadership Coaching Framework",
    rawTextSummary:
      "A 4-part mental model for cross-functional communication, conflict resolution, and performance management.",
    beforeFlaws: [
      "Generic template shapes with stock handshake photography",
      "Disjointed cognitive progression across 18 scattered slides",
      "Participants overwhelmed by excessive note-taking requirements",
    ],
    afterWins: [
      "Clean 4-quadrant cognitive scaffold for easy concept retention",
      "Conversational prompts separated clearly from reference text",
      "High visual authority suitable for premium corporate workshops",
    ],
    beforeImagePlaceholder: "/assets/cases/training-before.webp",
    afterImagePlaceholder: "/assets/cases/training-after.webp",
  },
  {
    id: "pitch",
    category: "Pitch & Business Development",
    title: "Seed Stage B2B Enterprise Software Pitch",
    rawTextSummary:
      "A 12-slide commercial investment deck detailing market problem, proprietary solution, TAM calculation, and commercial traction.",
    beforeFlaws: [
      "Cluttered problem statement with no emotional urgency",
      "Weak competitive comparison matrix",
      "Generic financial projection graphs",
    ],
    afterWins: [
      "Clear, punchy narrative problem-solution bridge",
      "Bold traction metric callout driving investor confidence",
      "Sleek editorial aesthetic separating the founder from amateur decks",
    ],
    beforeImagePlaceholder: "/assets/cases/pitch-before.webp",
    afterImagePlaceholder: "/assets/cases/pitch-after.webp",
  },
];

export default function BeforeAfterProof() {
  const [activeCase, setActiveCase] = useState<CaseStudyExample>(CASE_STUDIES[0]);

  const handleSelectCase = (cs: CaseStudyExample) => {
    setActiveCase(cs);
    trackSalesEvent("before_after_interaction", { caseId: cs.id });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            Visual Proof
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4">
            Same Content. Completely Different Presentation.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The difference between an amateur slide and an executive presentation isn&apos;t the informationâ€”it is the visual architecture. Explore how raw content transforms across industries:
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CASE_STUDIES.map((cs) => {
            const isActive = cs.id === activeCase.id;
            return (
              <button
                key={cs.id}
                onClick={() => handleSelectCase(cs)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0A1F44] text-[#FFD100] shadow-md scale-105"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {cs.category}
              </button>
            );
          })}
        </div>

        {/* Active Case Study Showcase */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-sm">
          
          <div className="mb-6">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Case Study Scenario
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0A1F44]">
              {activeCase.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 italic">
              Raw Source: {activeCase.rawTextSummary}
            </p>
          </div>

          {/* Comparison Split Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* BEFORE (Amateur / Legacy) */}
            <div className="bg-white border-2 border-red-200/80 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-red-100 pb-3 mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 flex items-center space-x-1">
                    <X className="w-4 h-4 text-red-500" />
                    <span>Before (Default Manual Slides)</span>
                  </span>
                  <span className="text-[10px] bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded">
                    Fails to Engage
                  </span>
                </div>

                {/* Simulated Visual Representation & Asset Placeholder */}
                {/* DEVELOPER ASSET TODO: Insert high-res slide comparison screenshot at: {activeCase.beforeImagePlaceholder} */}
                <div className="bg-slate-100 border border-dashed border-slate-300 rounded-xl p-6 text-center text-xs text-slate-500 mb-4 font-mono">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center mx-auto mb-2 font-bold">
                    âœ•
                  </div>
                  <span className="font-bold text-slate-700 block mb-1">
                    [Image Placeholder: {activeCase.beforeImagePlaceholder}]
                  </span>
                  <span>Unstructured bullet points, poor contrast, zero visual focal points</span>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider">
                    Common Pitfalls Observed:
                  </span>
                  {activeCase.beforeFlaws.map((flaw) => (
                    <div key={flaw} className="flex items-start space-x-2">
                      <span className="text-red-500 font-bold">â€¢</span>
                      <span>{flaw}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AFTER (DigiBeloved Dynamic Skill Redesign) */}
            <div className="bg-white border-2 border-emerald-500/80 rounded-2xl p-5 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between border-b border-emerald-100 pb-3 mb-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 flex items-center space-x-1">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>After (Dynamic Skill Execution)</span>
                  </span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded">
                    Executive Authority
                  </span>
                </div>

                {/* Simulated Visual Representation & Asset Placeholder */}
                {/* DEVELOPER ASSET TODO: Insert high-res slide comparison screenshot at: {activeCase.afterImagePlaceholder} */}
                <div className="bg-[#0A1F44] border border-white/10 text-white rounded-xl p-6 text-center text-xs mb-4 shadow-md">
                  <div className="w-8 h-8 rounded-full bg-[#FFD100] text-[#0A1F44] flex items-center justify-center mx-auto mb-2 font-black">
                    âœ“
                  </div>
                  <span className="font-bold text-[#FFD100] block mb-1">
                    [Image Placeholder: {activeCase.afterImagePlaceholder}]
                  </span>
                  <span className="text-slate-300">
                    Restructured slide architecture, editorial spacing, decisive visual takeaway
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <span className="font-bold text-[#0A1F44] block text-[11px] uppercase tracking-wider">
                    Transformation Highlights:
                  </span>
                  {activeCase.afterWins.map((win) => (
                    <div key={win} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-800">{win}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

