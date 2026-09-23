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
  TrendingUp,
  FileCheck2,
  Clock,
  Sparkles
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
      mockupUrl: "digibeloved.com/cases/development-survey-modeling",
      metricBadge: "1,400+ Responses • 0 Objections",
      title: "Multi-State Survey Cleansing, Inferential Modeling & Report-Ready Deliverables",
      problem: "A socio-economic research group gathered 1,400+ survey responses across multiple locations. Inconsistent variable coding, 18% missing entries, and ambiguous question scales delayed final donor reporting with severe compliance risk.",
      approach: "Audited survey instrument against hypotheses, screened outliers, cleaned variable scales, and validated normality and collinearity assumptions prior to test execution.",
      solution: "Conducted parametric and non-parametric testing including Chi-Square contingency analysis, Independent Samples t-tests, and Multiple Linear Regression to isolate predictive factors.",
      deliverables: "Fully coded SPSS (.sav) and Excel datasets, formatted APA publication tables, 8 publication charts, and a 16-page narrative findings report.",
      outcome: "Donor evaluation report submitted 4 days ahead of deadline with zero methodological objections from the review committee.",
      evidence: "Verified dataset audit log and finalized donor documentation approved without revisions."
    },
    {
      id: "cs-automation-1",
      category: "automation",
      categoryLabel: "AI & Workflow Automation",
      mockupUrl: "digibeloved.com/cases/inventory-reconciliation-pipeline",
      metricBadge: "12 Hours → 20 Minutes Weekly",
      title: "Automated Multi-Branch Inventory Reconciliation & Supplier Dispatch Pipeline",
      problem: "A retail distribution team managed daily inventory across three regional stores using manual spreadsheets. Staff spent 12 hours every week copy-pasting receipts, resulting in periodic stockouts and delayed order fulfillment.",
      approach: "Mapped order cycle from store request to warehouse dispatch, identifying duplicate manual entry points and error-prone email handoffs.",
      solution: "Engineered an automated Google Workspace and webhook pipeline linking point-of-sale forms into a master inventory sheet with automated re-order thresholds, WhatsApp supplier alerts, and management summary digests.",
      deliverables: "End-to-end automated pipeline, automated PDF dispatch note generator, fail-safe error alert system, and operational documentation.",
      outcome: "Eliminated manual spreadsheet reconciliation entirely, reduced administrative handling from 12 hours to 20 minutes weekly, and prevented recurring branch stockouts.",
      evidence: "Operational workflow running continuously in production with 100% automated logging."
    },
    {
      id: "cs-software-1",
      category: "software",
      categoryLabel: "Custom Software Development",
      mockupUrl: "digibeloved.com/cases/multi-role-consultancy-portal",
      metricBadge: "100% IP Custody • Zero Per-Seat SaaS",
      title: "Bespoke Multi-Role Operations & Document Management Portal",
      problem: "A professional services consultancy coordinated client engagements across shared Google Drives, fragmented email chains, and manual billing spreadsheets. Client files were frequently misfiled, and monthly SaaS seat licenses were escalating.",
      approach: "Documented user roles (Associates, Partners, External Clients), access privileges, and the document approval lifecycle to define a clean technical architecture.",
      solution: "Architected and engineered a custom web application featuring role-based access control, secure client document vaults, automated milestone tracking, and invoicing records.",
      deliverables: "Complete web application deployed on private infrastructure, full Git source code repository handover, administrative documentation, and admin onboarding training.",
      outcome: "Unified client communication under one branded hub, streamlined document sign-offs, and saved significant recurring monthly SaaS license expenditures.",
      evidence: "Production deployment with full source code custody transferred to client."
    },
    {
      id: "cs-training-1",
      category: "training",
      categoryLabel: "AI Training for Organizations",
      mockupUrl: "digibeloved.com/cases/institutional-ai-workshop",
      metricBadge: "100% Participant Practical Adoption",
      title: "Applied Generative AI Operations Workshop for Institutional Team",
      problem: "A 25-person administrative and research department had individual staff experimenting with random AI tools without standard operating procedures, creating confidentiality risks, inconsistent outputs, and zero measurable time savings.",
      approach: "Conducted a pre-workshop audit of departmental documents (routine memos, quarterly reports, literature reviews) to build customized training scenarios around actual everyday workflows.",
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
    <div className="bg-white min-h-screen text-navy selection:bg-accent selection:text-navy">
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-[#07152E] text-white pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD100_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 mb-8 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white">Documented Outcomes</span>
            <span className="text-slate-500">•</span>
            <span className="text-accent">Zero Fluff</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Real Problems. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white">
              Defensible Results.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Explore how DigiBeloved helps researchers, operations teams, and organizations solve critical analytical, workflow, and software bottlenecks.
          </p>
        </div>
      </section>

      {/* Filter Tabs - Sticky Header */}
      <section className="bg-slate-50 border-b border-slate-200/80 py-4 px-4 sticky top-16 sm:top-20 z-30 backdrop-blur-md bg-slate-50/95">
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

      {/* Case Studies Showcase */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {filteredStudies.map((cs) => (
            <article 
              key={cs.id}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Browser Mockup Top Header */}
              <div className="bg-[#0B1B38] px-6 py-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  <span className="hidden sm:inline-block ml-4 text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                    {cs.mockupUrl}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                    {cs.metricBadge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-12">
                
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-navy text-white px-3.5 py-1.5 rounded-full">
                    {cs.categoryLabel}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1" />
                    Verified Project Record
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-8">
                  {cs.title}
                </h2>

                {/* 4-Step Analysis & Execution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed mb-8">
                  
                  {/* 1. Problem */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80">
                    <div className="flex items-center space-x-2 mb-2 text-xs font-bold uppercase tracking-wider text-red-600">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>1. The Problem</span>
                    </div>
                    <p className="text-slate-600">{cs.problem}</p>
                  </div>

                  {/* 2. Approach */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80">
                    <div className="flex items-center space-x-2 mb-2 text-xs font-bold uppercase tracking-wider text-navy">
                      <span className="w-2 h-2 rounded-full bg-navy" />
                      <span>2. The Approach</span>
                    </div>
                    <p className="text-slate-600">{cs.approach}</p>
                  </div>

                  {/* 3. Solution */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80">
                    <div className="flex items-center space-x-2 mb-2 text-xs font-bold uppercase tracking-wider text-navy">
                      <span className="w-2 h-2 rounded-full bg-navy" />
                      <span>3. Technical Solution</span>
                    </div>
                    <p className="text-slate-600">{cs.solution}</p>
                  </div>

                  {/* 4. Deliverables */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80">
                    <div className="flex items-center space-x-2 mb-2 text-xs font-bold uppercase tracking-wider text-navy">
                      <span className="w-2 h-2 rounded-full bg-navy" />
                      <span>4. Deliverables Handed Over</span>
                    </div>
                    <p className="text-slate-600">{cs.deliverables}</p>
                  </div>

                </div>

                {/* 5. Measured Outcome & 6. Evidence Banner */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/90 rounded-2xl p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-8">
                      <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <span>5. Measured Client Outcome</span>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {cs.outcome}
                      </p>
                    </div>
                    <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-emerald-200 pt-4 md:pt-0 md:pl-6 text-xs text-emerald-900">
                      <strong className="block mb-1 text-emerald-950 font-bold uppercase tracking-wider">6. Verification Evidence:</strong>
                      {cs.evidence}
                    </div>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Final CTA */}
      <section className="py-20 md:py-28 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD100_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block mb-6">
            Solve Your Bottleneck
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Have a Similar Challenge in Your Organization?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about your dataset, current operational bottlenecks, or software vision. We will help scope a practical next step.
          </p>
          <Link
            to="/contact"
            onClick={() => trackCtaClick('Discuss a Project - Case Studies CTA', '/case-studies')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)] group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
