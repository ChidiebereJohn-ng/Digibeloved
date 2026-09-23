import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Workflow, 
  Code2, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Case Studies & Client Outcomes | DigiBeloved",
        "url": "https://digibeloved.com/case-studies",
        "description": "Verified case studies demonstrating real client outcomes in research data analysis, workflow automation, custom software, and organizational AI training.",
        "publisher": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "url": "https://digibeloved.com"
        }
      }
    ]
  };

  const caseStudies = [
    {
      id: "cs-data-analysis-1",
      category: "data-analysis",
      categoryLabel: "Research & Data Analysis",
      title: "Multi-State Survey Cleansing, Inferential Modeling & Report-Ready Outputs",
      problem: "A socio-economic development research group gathered 1,400+ survey responses across multiple locations. Inconsistent variable coding, 18% missing entries, and ambiguous question scales delayed final donor reporting. An upcoming evaluation deadline created severe risk of project non-compliance.",
      approach: "We audited the survey instrument against stated research hypotheses, screened outliers, cleaned variable scales, and validated normality and collinearity assumptions prior to test execution.",
      solution: "Conducted parametric and non-parametric testing including Chi-Square contingency analysis, Independent Samples t-tests, and Multiple Linear Regression to isolate primary predictive factors.",
      deliverables: "Fully coded SPSS (.sav) and Excel datasets, formatted APA publication tables, 8 high-resolution charts, and a 16-page defensible narrative findings report.",
      outcome: "Donor evaluation report submitted 4 days ahead of deadline with zero methodological objections from the review committee.",
      evidence: "Verified dataset audit log and finalized donor documentation approved without revisions."
    },
    {
      id: "cs-automation-1",
      category: "automation",
      categoryLabel: "AI & Workflow Automation",
      title: "Automated Multi-Branch Inventory Reconciliation & Supplier Alert Pipeline",
      problem: "An expanding retail distribution team was managing daily inventory across three regional stores using manual spreadsheets. Staff spent an estimated 12 hours every week copy-pasting dispatch receipts, resulting in periodic stockouts and delayed customer order fulfillment.",
      approach: "We mapped the full order cycle from store request to warehouse dispatch, identifying duplicate data-entry steps and error-prone email handoffs.",
      solution: "Engineered an automated Google Workspace and webhook pipeline linking point-of-sale forms directly into a centralized master inventory sheet with automated re-order thresholds, WhatsApp supplier alerts, and management summary emails.",
      deliverables: "End-to-end automated pipeline, automated PDF dispatch note generator, fail-safe error alert system, and operational documentation.",
      outcome: "Eliminated manual spreadsheet reconciliation entirely, reduced administrative handling time from 12 hours to 20 minutes weekly, and prevented recurring branch stockouts.",
      evidence: "Operational workflow running continuously in production with 100% automated logging."
    },
    {
      id: "cs-software-1",
      category: "software",
      categoryLabel: "Custom Software Development",
      title: "Bespoke Multi-Role Operations & Document Management Portal",
      problem: "A professional services consultancy was coordinating client engagements across shared Google Drives, fragmented email chains, and manual billing spreadsheets. Client documents were frequently misfiled, and monthly SaaS seat licenses were becoming unsustainable.",
      approach: "We documented user roles (Associates, Partners, External Clients), access privileges, and the core document approval lifecycle to define a clean technical architecture.",
      solution: "Architected and engineered a custom web application featuring role-based access control, secure client document vaults, automated milestone tracking, and invoicing records.",
      deliverables: "Complete web application deployed on private infrastructure, full Git source code repository handover, administrative documentation, and admin onboarding training.",
      outcome: "Unified client communication under one branded hub, streamlined document sign-offs, and saved significant recurring monthly SaaS license expenditures.",
      evidence: "Production deployment with full source code custody transferred to client."
    },
    {
      id: "cs-training-1",
      category: "training",
      categoryLabel: "AI Training for Organizations",
      title: "Applied Generative AI Operations Workshop for Institutional Team",
      problem: "A 25-person administrative and research department had individual staff experimenting with random AI tools without standard operating procedures, creating confidentiality risks, inconsistent outputs, and zero measurable time savings.",
      approach: "We conducted a pre-workshop audit of departmental documents (routine memos, quarterly reports, literature reviews) to build customized training scenarios around actual everyday workflows.",
      solution: "Delivered an intensive 2-day hands-on workshop focused on structured document synthesis, data security guardrails, responsible citations, and repeatable administrative prompt architectures.",
      deliverables: "Customized departmental prompt handbook, AI usage security policy guidelines, recorded walkthroughs, and practical workflow templates.",
      outcome: "100% of participants demonstrated successful execution of their target departmental workflow during hands-on evaluation, with official corporate adoption of safe AI guidelines.",
      evidence: "Documented workshop deliverables, custom SOP handbook, and participant evaluation scores."
    }
  ];

  const filteredStudies = activeTab === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeTab);

  return (
    <div className="bg-white min-h-screen text-navy">
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-[#07152E] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-6">
            Documented Client Outcomes
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Real Problems. Disciplined Execution. Defensible Results.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Explore how DigiBeloved helps researchers, operations teams, and organizations solve critical analytical, workflow, and software bottlenecks.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-slate-50 border-b border-slate-200/80 py-4 px-4 sticky top-20 z-30">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'all' 
                ? 'bg-navy text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:text-navy border border-slate-200'
            }`}
          >
            All Case Studies
          </button>
          <button
            onClick={() => setActiveTab('data-analysis')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'data-analysis' 
                ? 'bg-navy text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:text-navy border border-slate-200'
            }`}
          >
            Research &amp; Data Analysis
          </button>
          <button
            onClick={() => setActiveTab('automation')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'automation' 
                ? 'bg-navy text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:text-navy border border-slate-200'
            }`}
          >
            AI &amp; Workflow Automation
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'software' 
                ? 'bg-navy text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:text-navy border border-slate-200'
            }`}
          >
            Custom Software
          </button>
          <button
            onClick={() => setActiveTab('training')}
            className={`px-4 py-2 rounded-xl transition-all ${
              activeTab === 'training' 
                ? 'bg-navy text-white shadow-sm' 
                : 'bg-white text-slate-600 hover:text-navy border border-slate-200'
            }`}
          >
            Corporate AI Training
          </button>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {filteredStudies.map((cs) => (
            <article 
              key={cs.id}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider bg-navy text-accent px-3 py-1 rounded-md">
                  {cs.categoryLabel}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Verified Project Record
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-8">
                {cs.title}
              </h2>

              {/* 6-Part Structured Format: Problem -> Approach -> Solution -> Deliverables -> Outcome -> Evidence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed mb-8">
                
                {/* 1. Problem */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                    1. The Problem
                  </span>
                  <p className="text-slate-700">{cs.problem}</p>
                </div>

                {/* 2. Approach */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy block mb-1">
                    2. The Approach
                  </span>
                  <p className="text-slate-700">{cs.approach}</p>
                </div>

                {/* 3. Solution */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy block mb-1">
                    3. The Solution
                  </span>
                  <p className="text-slate-700">{cs.solution}</p>
                </div>

                {/* 4. Deliverables */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy block mb-1">
                    4. Deliverables Handed Over
                  </span>
                  <p className="text-slate-700">{cs.deliverables}</p>
                </div>

              </div>

              {/* 5. Outcome & 6. Evidence Banner */}
              <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                      5. Measured Outcome
                    </span>
                    <p className="text-base font-bold text-slate-900 leading-snug">
                      {cs.outcome}
                    </p>
                  </div>
                  <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-emerald-200/60 pt-4 md:pt-0 md:pl-6 text-xs text-emerald-900">
                    <strong className="block mb-0.5 text-emerald-950 font-bold">6. Evidence:</strong>
                    {cs.evidence}
                  </div>
                </div>
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Prompt */}
      <section className="py-20 md:py-24 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Have a Similar Challenge in Your Organization?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Tell us about your dataset, current operational workflow, or software idea. We will help scope a practical next step.
          </p>
          <Link
            to="/contact"
            onClick={() => trackCtaClick('Discuss a Project - Case Studies CTA', '/case-studies')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-xl font-extrabold text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
