import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Workflow, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Minus,
  Layers, 
  Users, 
  Sparkles,
  ExternalLink,
  Laptop,
  Check,
  TrendingUp,
  ShieldCheck,
  Clock,
  BookOpen,
  Zap,
  ShoppingBag,
  Sliders,
  CheckCheck,
  AlertTriangle,
  Flame,
  FileSpreadsheet,
  FileCheck2,
  Lock,
  ChevronRight
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeFrictionTab, setActiveFrictionTab] = useState<'friction' | 'solution'>('solution');
  
  // Interactive 2-Click Project Scoper State
  const [scoperService, setScoperService] = useState<string>('data-analysis');
  const [scoperTimeline, setScoperTimeline] = useState<string>('Within 2-4 weeks');

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://digibeloved.com/#organization",
        "name": "DigiBeloved",
        "url": "https://digibeloved.com",
        "logo": "https://res.cloudinary.com/dn2mgiges/image/upload/v1754587273/DigiBeloved.png",
        "description": "Applied AI, Data Analysis & Custom Software Solutions for researchers, NGOs, and organizations.",
        "founder": {
          "@type": "Person",
          "name": "Chukwuemeka John Chidiebere",
          "jobTitle": "Founder & Applied AI Strategist"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No 3 Maitama",
          "addressLocality": "Abuja",
          "addressCountry": "Nigeria"
        }
      }
    ]
  };

  const handleScoperSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackCtaClick(`2-Click Scoper - ${scoperService}`, '/');
    navigate(`/contact?service=${scoperService}&timeline=${encodeURIComponent(scoperTimeline)}`);
  };

  const workSteps = [
    {
      num: "01",
      title: "Discover & Map",
      desc: "We analyze your exact problem, dataset, or broken operational handoff."
    },
    {
      num: "02",
      title: "Define & Scope",
      desc: "Clear deliverables, validated methodology, and fixed milestones."
    },
    {
      num: "03",
      title: "Build & Validate",
      desc: "Rigorous statistical analysis or clean, reliable software engineering."
    },
    {
      num: "04",
      title: "Deliver & Support",
      desc: "Report-ready outputs, complete documentation, and post-launch support."
    }
  ];

  const featuredProjects = [
    {
      tag: "Research & Data Analysis",
      title: "Multi-State Survey Cleansing & Inferential Modeling",
      client: "Development Research Team",
      problem: "1,400+ survey responses with missing entries and disputed statistical test selection ahead of donor review.",
      outcome: "Delivered fully cleaned dataset, multivariate regression models, and APA tables 4 days ahead of deadline with zero revisions.",
      metric: "100% Defensible Findings",
      link: "/case-studies"
    },
    {
      tag: "Workflow Automation",
      title: "Automated Multi-Branch Inventory & Alert Pipeline",
      client: "Regional Distribution Network",
      problem: "12 hours lost weekly copy-pasting dispatch forms into spreadsheets, resulting in frequent branch stockouts.",
      outcome: "Engineered automated Google Workspace and webhook pipeline with instant WhatsApp re-order alerts.",
      metric: "-90% Administrative Time",
      link: "/case-studies"
    },
    {
      tag: "Custom Software",
      title: "Bespoke Multi-Role Operations & Client Portal",
      client: "Consulting Practice",
      problem: "Fragmented communication across email and drive links, paired with escalating per-seat monthly SaaS licensing fees.",
      outcome: "Custom web portal with role-based access control, secure client vaults, and full source code handover.",
      metric: "$0 Recurring Per-Seat Fees",
      link: "/case-studies"
    }
  ];

  const faqs = [
    {
      q: "How do I know whether I need Data Analysis, Automation, or Custom Software?",
      a: "If you have collected raw data that needs cleaning, statistical validation, and reporting, you need Research & Data Analysis. If your team repeats manual tasks across spreadsheets, email, or WhatsApp, you need Workflow Automation. If you need an owned business portal, executive dashboard, or client hub without per-user subscription fees, you need Custom Software. Tell us your objective and we will recommend the best fit."
    },
    {
      q: "Do we own 100% of the code, data, and deliverables?",
      a: "Yes, completely. All cleaned datasets, statistical scripts, source code repositories, and deployment keys are transferred directly to your organization with full documentation. You retain 100% intellectual property ownership."
    },
    {
      q: "Can we purchase your individual products or train our team instead of a full build?",
      a: "Yes. Visit our Marketplace to access self-paced implementation playbooks and software tools, or request our Corporate AI Training for hands-on team workshops."
    },
    {
      q: "How is pricing structured?",
      a: "We operate on transparent project-based pricing tied to verified milestone deliverables. You select your budget bracket in our enquiry form, and we engineer the most practical scope to achieve your outcome without cost overruns."
    }
  ];

  return (
    <>
      <SchemaScript schema={homeSchema} />

      {/* 1. HERO SECTION */}
      <section className="relative bg-white pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100">
        
        {/* Soft atmospheric gradient accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDD412]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EEF3FB]/70 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#092755_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Outcome-focused copy & CTAs (centered on mobile, left-aligned on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2.5 bg-[#EEF3FB] border border-[#092755]/10 px-4 py-1.5 rounded-full text-xs font-bold text-navy mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FDD412] animate-pulse" aria-hidden="true" />
              <span>Applied AI, Data &amp; Custom Software Solutions</span>
            </div>

            {/* Headline (Option A - recommended for mixed audience) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-navy tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
              Clear results from your data. Less manual work. Software you own.
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal max-w-[60ch] leading-relaxed mb-8 [text-wrap:pretty]">
              DigiBeloved helps researchers, NGOs and growing businesses analyse data properly, automate repetitive tasks, and build the custom tools they need, with full ownership of everything delivered.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-4">
              <Link
                to="/contact"
                onClick={() => trackCtaClick('Get Scoping Feedback in 24 Hours - Hero', '/')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-7 py-4 rounded-xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.35)]"
              >
                <span>Get Scoping Feedback in 24 Hours</span>
                <ArrowRight className="w-4 h-4 ml-2 shrink-0" aria-hidden="true" />
              </Link>
              <a
                href="#how-we-work"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-slate-50 text-navy border border-slate-200 px-6 py-4 rounded-xl font-bold text-base tracking-wide transition-all"
              >
                See How It Works
              </a>
            </div>

            {/* Trust line under buttons */}
            <p className="text-xs sm:text-sm text-slate-600 font-medium flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-navy shrink-0" aria-hidden="true" />
              <span>You own the code, the data and the reports. No lock-in.</span>
            </p>

          </div>

          {/* Right Column: Single clean visual (Before: raw spreadsheet vs After: structured dashboard) */}
          <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none">
            <div
              role="region"
              aria-label="Before and after comparison showing a messy spreadsheet transformed into a structured dashboard and validated analysis output"
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5 text-left"
            >
              
              {/* BEFORE PANEL: Raw Spreadsheet */}
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200/70 px-2.5 py-0.5 rounded-md">
                    <FileSpreadsheet className="w-3.5 h-3.5" aria-hidden="true" />
                    Before: Manual Spreadsheet
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">raw_export_v4_final.xlsx</span>
                </div>

                {/* Mini spreadsheet rows showing real pain points */}
                <div className="border border-slate-200 rounded-lg overflow-hidden text-xs font-mono">
                  <div className="grid grid-cols-12 bg-slate-100 text-slate-600 font-semibold border-b border-slate-200 px-2.5 py-1.5 text-[10px]">
                    <span className="col-span-3">RECORD</span>
                    <span className="col-span-5">STATUS</span>
                    <span className="col-span-4 text-right">SYNC</span>
                  </div>
                  <div className="grid grid-cols-12 items-center px-2.5 py-1.5 border-b border-slate-100 text-slate-600 bg-rose-50/30">
                    <span className="col-span-3 font-semibold text-slate-700">#0418</span>
                    <span className="col-span-5 text-rose-700">#REF! Missing (18%)</span>
                    <span className="col-span-4 text-right text-slate-500">Manual copy</span>
                  </div>
                  <div className="grid grid-cols-12 items-center px-2.5 py-1.5 text-slate-600">
                    <span className="col-span-3 font-semibold text-slate-700">Branch 3</span>
                    <span className="col-span-5 text-slate-600">Unmatched stock row</span>
                    <span className="col-span-4 text-right text-rose-700">12 hrs/wk</span>
                  </div>
                </div>
              </div>

              {/* TRANSITION DIVIDER */}
              <div className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider text-navy py-0.5">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                  Cleaned, Automated &amp; Handed Over
                </span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* AFTER PANEL: Structured Dashboard & Defensible Output */}
              <div className="bg-white border-2 border-navy rounded-xl p-4 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-navy bg-navy/5 border border-navy/15 px-2.5 py-0.5 rounded-md">
                    <BarChart3 className="w-3.5 h-3.5" aria-hidden="true" />
                    After: Validated System &amp; Report
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                    Client-Owned
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mb-3">
                  <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2.5">
                    <div className="text-[11px] text-slate-500 font-medium">Survey Data &amp; Models</div>
                    <div className="text-sm font-extrabold text-navy mt-0.5">1,400+ Records</div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-0.5">Cleaned &amp; APA-ready</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2.5">
                    <div className="text-[11px] text-slate-500 font-medium">Weekly Reconciliation</div>
                    <div className="text-sm font-extrabold text-navy mt-0.5">12h → 20m</div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-0.5">Automated alerts</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 rounded-lg px-3 py-2 border border-slate-200/70">
                  <span className="font-semibold text-navy">Deliverables:</span>
                  <span>Dataset · APA Tables · Live Pipeline · Source Code</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. PROOF STRIP (Labelled Numbers with Visible Sources) */}
      <section aria-label="Verified project metrics" className="bg-[#092755] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        {/* Soft atmospheric gradient accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDD412]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EEF3FB]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
          
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/15 flex flex-col justify-between hover:bg-white/[0.07] transition-all">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#FDD412] font-mono tracking-tight">
                1,400+
              </div>
              <p className="text-sm text-slate-200 font-medium mt-2 leading-snug [text-wrap:pretty]">
                survey records cleaned and modelled in a single research project
              </p>
            </div>
            <Link
              to="/case-studies#cs-data-analysis-1"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4 mt-3 transition-colors"
            >
              <span>Read research case study</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/15 flex flex-col justify-between hover:bg-white/[0.07] transition-all">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#FDD412] font-mono tracking-tight">
                12h → 20m
              </div>
              <p className="text-sm text-slate-200 font-medium mt-2 leading-snug [text-wrap:pretty]">
                weekly stock reconciliation for a multi-branch retailer
              </p>
            </div>
            <Link
              to="/case-studies#cs-automation-1"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4 mt-3 transition-colors"
            >
              <span>Read automation case study</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/15 flex flex-col justify-between hover:bg-white/[0.07] transition-all">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#FDD412] font-mono tracking-tight">
                100%
              </div>
              <p className="text-sm text-slate-200 font-medium mt-2 leading-snug [text-wrap:pretty]">
                source code and data handed over to the client
              </p>
            </div>
            <Link
              to="/case-studies#cs-software-1"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4 mt-3 transition-colors"
            >
              <span>Read software handover case study</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/15 flex flex-col justify-between hover:bg-white/[0.07] transition-all">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#FDD412] font-mono tracking-tight">
                &lt; 24h
              </div>
              <p className="text-sm text-slate-200 font-medium mt-2 leading-snug [text-wrap:pretty]">
                to your first scoping feedback after you submit a brief
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white underline underline-offset-4 mt-3 transition-colors"
            >
              <span>Submit a project brief</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. CORE DONE-FOR-YOU SOLUTIONS (With Embedded UI Mini-Mockups) */}
      <section id="solutions" className="py-20 md:py-28 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-[#092755]/10 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-xs">
              Done-for-You Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
              Built Around Your Exact Goal
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              No bloated retainers or generic software. We engineer only what solves your specific operational bottleneck. Click any solution to enter the full page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. Research & Data Analysis Card with Embedded Statistical Widget */}
            <div className="bg-white border border-[#092755]/10 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Embedded UI Mini-Mockup: Statistical Panel */}
                <div className="mb-6 bg-[#092755] rounded-2xl p-4 text-white font-mono text-[11px] border border-white/10 shadow-inner">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 pb-2 border-b border-white/10">
                    <span>SPSS / Python Model</span>
                    <span className="text-emerald-400 font-bold">n = 1,420</span>
                  </div>
                  <div className="space-y-1 text-slate-300">
                    <div className="flex justify-between">
                      <span>Normality &amp; Scale:</span>
                      <span className="text-emerald-400">Validated ✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Multivariate Regression:</span>
                      <span className="text-accent font-bold">R² = 0.842</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                      <span>Significance:</span>
                      <span className="text-emerald-400">p &lt; 0.001</span>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                    <span>APA Publication Table</span>
                    <span className="text-accent">Output Ready</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center group-hover:bg-navy group-hover:text-accent transition-colors">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    Research &amp; Analytics
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-navy tracking-tight mb-2">
                  Research &amp; Data Analysis
                </h3>
                <p className="text-xs font-bold text-accent bg-navy inline-block px-2.5 py-1 rounded-lg mb-3">
                  Turn raw data into defensible results.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Comprehensive cleaning, hypothesis testing, APA publication tables, and plain-English interpretation for scholars, M&amp;E teams, and NGOs.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  100% Defensible • Zero Ghostwriting
                </span>
                <Link
                  to="/data-analysis"
                  className="inline-flex items-center text-xs font-bold text-navy group-hover:text-accent transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* 2. AI & Workflow Automation Card with Embedded Pipeline Diagram */}
            <div className="bg-white border border-[#092755]/10 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Embedded UI Mini-Mockup: Pipeline Visual */}
                <div className="mb-6 bg-[#092755] rounded-2xl p-4 text-white font-mono text-[11px] border border-white/10 shadow-inner">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 pb-2 border-b border-white/10">
                    <span>Active Webhook Pipeline</span>
                    <span className="text-emerald-400 font-bold">Live 24/7</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[11px]">Google Form Trigger Received</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[11px]">Sync to Master Inventory Sheet</span>
                    </div>
                    <div className="flex items-center space-x-2 text-accent font-bold">
                      <Zap className="w-3 h-3 text-accent flex-shrink-0" />
                      <span className="text-[11px]">WhatsApp Alert Dispatched (1.2s)</span>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Manual Reconciliation:</span>
                    <span className="text-emerald-400 font-bold">0 mins</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center group-hover:bg-navy group-hover:text-accent transition-colors">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    Process Automation
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-navy tracking-tight mb-2">
                  AI &amp; Workflow Automation
                </h3>
                <p className="text-xs font-bold text-accent bg-navy inline-block px-2.5 py-1 rounded-lg mb-3">
                  Replace repetitive manual work.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Connect your Forms, Google Sheets, Excel, email, and WhatsApp into automated pipelines with built-in error alerts and zero manual copy-pasting.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  Save 10+ Hours / Week
                </span>
                <Link
                  to="/ai-automation"
                  className="inline-flex items-center text-xs font-bold text-navy group-hover:text-accent transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* 3. Custom Software Development Card with Embedded Browser Window */}
            <div className="bg-white border border-[#092755]/10 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                {/* Embedded UI Mini-Mockup: Browser Portal */}
                <div className="mb-6 bg-[#092755] rounded-2xl p-4 text-white font-mono text-[11px] border border-white/10 shadow-inner">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 pb-2 border-b border-white/10">
                    <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    </div>
                    <span className="text-[10px] text-slate-400">app.portal.internal</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex justify-between items-center bg-white/5 p-1.5 rounded-lg text-[11px]">
                      <span>Role-Based Access:</span>
                      <span className="text-emerald-400">Admin / Client</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-1.5 rounded-lg text-[11px]">
                      <span>Monthly Per-Seat Fee:</span>
                      <span className="text-accent font-bold">$0.00 Forever</span>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Source Code Handover:</span>
                    <span className="text-accent font-bold">100% Owned</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center group-hover:bg-navy group-hover:text-accent transition-colors">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    Software Engineering
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-navy tracking-tight mb-2">
                  Custom Software Development
                </h3>
                <p className="text-xs font-bold text-accent bg-navy inline-block px-2.5 py-1 rounded-lg mb-3">
                  Software built around how you work.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Internal operational portals, executive dashboards, and bespoke web apps. Full source code ownership with zero recurring per-user SaaS taxes.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  100% Code Ownership
                </span>
                <Link
                  to="/custom-software-development"
                  className="inline-flex items-center text-xs font-bold text-navy group-hover:text-accent transition-colors"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE "FRICTION VS SOLUTION" VISUAL TOGGLE (Cuts copy, maximizes contrast) */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              The Visual Contrast
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
              Before vs. After DigiBeloved
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              See the exact operational transformation when you replace manual friction with an engineered system.
            </p>
          </div>

          {/* Interactive Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              <button
                onClick={() => setActiveFrictionTab('friction')}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeFrictionTab === 'friction'
                    ? 'bg-red-50 text-red-700 shadow-sm border border-red-200'
                    : 'text-slate-600 hover:text-navy'
                }`}
              >
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span>The Operational Friction (Before)</span>
              </button>
              <button
                onClick={() => setActiveFrictionTab('solution')}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeFrictionTab === 'solution'
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>The DigiBeloved Output (After)</span>
              </button>
            </div>
          </div>

          {/* Tab 1: The Friction (Before) */}
          {activeFrictionTab === 'friction' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="bg-red-50/50 border border-red-200/80 rounded-3xl p-7">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-2">01. Research Risk</span>
                <h3 className="text-lg font-bold text-navy mb-2">Dubious Tests &amp; Missing Data</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  18% missing entries and questionable normality assumptions risking rejection by academic or donor committees.
                </p>
                <div className="p-3 bg-white rounded-xl border border-red-200 text-xs text-red-700 font-mono">
                  ✕ Warning: Methodological objection
                </div>
              </div>

              <div className="bg-red-50/50 border border-red-200/80 rounded-3xl p-7">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-2">02. Operational Drag</span>
                <h3 className="text-lg font-bold text-navy mb-2">Spreadsheet Copy-Paste Fatigue</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  12 hours lost every week manually transferring dispatch receipts into sheets, resulting in stockouts and delays.
                </p>
                <div className="p-3 bg-white rounded-xl border border-red-200 text-xs text-red-700 font-mono">
                  ✕ 12 hours wasted weekly
                </div>
              </div>

              <div className="bg-red-50/50 border border-red-200/80 rounded-3xl p-7">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-2">03. Escalating Costs</span>
                <h3 className="text-lg font-bold text-navy mb-2">The Perpetual SaaS Seat Tax</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Monthly software fees increase every time you hire, yet your team is forced to bend to generic templates.
                </p>
                <div className="p-3 bg-white rounded-xl border border-red-200 text-xs text-red-700 font-mono">
                  ✕ $0 equity • Unending fees
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: The DigiBeloved Output (After) */}
          {activeFrictionTab === 'solution' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-3xl p-7">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">01. Defensible Research</span>
                <h3 className="text-lg font-bold text-navy mb-2">Defensible Empirical Report</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Cleaned SPSS/Excel datasets, regression models, and APA publication tables approved 4 days ahead of deadline.
                </p>
                <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-emerald-800 font-mono font-bold flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 flex-shrink-0" />
                  <span>0 Reviewer Objections</span>
                </div>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-3xl p-7">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">02. Automated Pipeline</span>
                <h3 className="text-lg font-bold text-navy mb-2">Automated WhatsApp &amp; Sheets</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Instant webhook pipeline that syncs branch stock levels and dispatches supplier purchase orders in 1.2 seconds.
                </p>
                <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-emerald-800 font-mono font-bold flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 flex-shrink-0" />
                  <span>12h weekly reduced to 20m</span>
                </div>
              </div>

              <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-3xl p-7">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">03. Owned Architecture</span>
                <h3 className="text-lg font-bold text-navy mb-2">100% Owned Custom Web Portal</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Unified client vault with role-based permissions, private server hosting, and zero monthly per-seat licensing fees.
                </p>
                <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-emerald-800 font-mono font-bold flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 flex-shrink-0" />
                  <span>100% Source Code Transfer</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 5. INTERACTIVE 2-CLICK PROJECT SCOPER (Reduces form friction, drives conversion) */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full inline-block mb-3">
              Fast Estimation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Get Scoping Feedback in 24 Hours
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Select your requirements below to instantly start your tailored consultation.
            </p>
          </div>

          <form onSubmit={handleScoperSubmit} className="space-y-8">
            
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. What do you need help with?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { id: 'data-analysis', label: 'Data Analysis', icon: BarChart3 },
                  { id: 'automation', label: 'Workflow Automation', icon: Workflow },
                  { id: 'software', label: 'Custom Software', icon: Code2 },
                  { id: 'training', label: 'Corporate AI Training', icon: Users },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = scoperService === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setScoperService(item.id)}
                      className={`flex items-center space-x-3 p-3.5 rounded-2xl border text-xs sm:text-sm font-bold text-left transition-all ${
                        isSelected 
                          ? 'border-navy bg-navy text-white shadow-sm' 
                          : 'border-slate-200 bg-slate-50 hover:bg-white text-navy'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-accent' : 'text-slate-600'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Target Timeline */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                2. What is your target timeline?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'Urgent: Within 2 weeks', label: 'Urgent (< 2 weeks)' },
                  { id: 'Within 2-4 weeks', label: 'Standard (2 to 4 weeks)' },
                  { id: 'Flexible / Discovery phase', label: 'Flexible / Planning' },
                ].map((t) => {
                  const isSelected = scoperTimeline === t.id;
                  return (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setScoperTimeline(t.id)}
                      className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold text-center transition-all ${
                        isSelected 
                          ? 'border-navy bg-navy text-white shadow-sm' 
                          : 'border-slate-200 bg-slate-50 hover:bg-white text-navy'
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-10 py-4 rounded-xl font-extrabold text-sm sm:text-base hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_8px_20px_rgba(255,209,0,0.3)]"
              >
                <span>Continue to Project Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </form>

        </div>
      </section>

      {/* 6. BUSINESS MARKETPLACE SPOTLIGHT */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Digital Marketplace
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Practical Systems &amp; Playbooks
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                Self-paced digital systems and free blueprints you can access immediately to upgrade your presentations and research.
              </p>
            </div>
            
            <Link
              to="/products"
              className="inline-flex items-center text-sm font-bold text-navy hover:text-accent-hover transition-colors group"
            >
              <span>Browse All Marketplace Products</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* The 7 AI Cheat Codes Playbook */}
            <div className="bg-white border-2 border-accent ring-2 ring-accent/30 rounded-3xl p-8 flex flex-col justify-between shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-wider bg-accent text-navy px-3 py-1 rounded-full shadow-xs">
                    New Release
                  </span>
                  <span className="text-sm font-mono font-black text-navy">
                    ₦2,500 / $10
                  </span>
                </div>

                <div className="mb-4 rounded-xl overflow-hidden bg-[#092755] p-2 flex items-center justify-center">
                  <img
                    src="/cheat-codes-cover.png"
                    alt="7 AI Cheat Codes Playbook"
                    className="h-36 w-auto object-contain rounded-md"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-accent transition-colors">
                  7 AI Cheat Codes Playbook
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  7 copy-paste cheat codes for business owners and job seekers. Save hours every week with free AI tools, then get paid.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">
                  Instant PDF Download
                </span>
                <Link
                  to="/7-ai-cheat-codes"
                  className="inline-flex items-center bg-accent text-navy hover:bg-yellow-400 px-4 py-2 rounded-xl font-black text-xs transition-colors shadow-sm"
                >
                  <span>Get Access</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* The AI Presentation System & Playbook */}
            <div className="bg-[#EEF3FB] border border-[#092755]/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 px-3 py-1 rounded-full text-navy">
                    Bestseller
                  </span>
                  <span className="text-sm font-mono font-extrabold text-navy">
                    ₦19,900 / $29
                  </span>
                </div>

                <div className="mb-4 rounded-xl overflow-hidden bg-[#092755] p-2 flex items-center justify-center">
                  <img
                    src="/playbook-cover.png"
                    alt="The AI Presentation System"
                    className="h-36 w-auto object-contain rounded-md"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-accent transition-colors">
                  The AI Presentation System
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Turn dense documents, research reports, or raw notes into high-impact PowerPoint slides using 4 proven AI workflows.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">
                  Playbook + System
                </span>
                <Link
                  to="/ai-presentation-system"
                  className="inline-flex items-center bg-navy text-white group-hover:bg-accent group-hover:text-navy px-4 py-2 rounded-xl font-bold text-xs transition-colors"
                >
                  <span>View System</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            {/* The AI Presentation Starter Blueprint */}
            <div className="bg-[#EEF3FB] border border-[#092755]/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 px-3 py-1 rounded-full text-navy">
                    Free Guide
                  </span>
                  <span className="text-sm font-mono font-extrabold text-emerald-600">
                    FREE
                  </span>
                </div>

                <div className="mb-4 h-36 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200/80 flex items-center justify-center text-navy">
                  <BookOpen className="w-10 h-10 text-navy" />
                </div>

                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-accent transition-colors">
                  AI Presentation Blueprint
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  The 4-step rapid framework + copy-paste master prompt to immediately turn complex notes into clean slide decks.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">
                  Instant PDF Download
                </span>
                <Link
                  to="/free-blueprint"
                  className="inline-flex items-center bg-navy text-white group-hover:bg-accent group-hover:text-navy px-4 py-2 rounded-xl font-bold text-xs transition-colors"
                >
                  <span>Download Free</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-navy px-8 py-3.5 rounded-2xl font-bold text-sm transition-colors"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              <span>Enter DigiBeloved Marketplace</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 7. HOW WE WORK (Azuro 4-Step Process) */}
      <section id="how-we-work" className="py-20 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
              Start With The Problem. Build Only What Solves It.
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Milestone-driven execution ensuring transparency, predictability, and complete asset custody.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-3xl font-extrabold font-mono text-navy/30 mb-6">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. VERIFIED PROOF & CASE STUDIES (Azuro Browser Frame Style) */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Documented Proof
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Real Client Results.
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center text-sm font-bold text-navy hover:text-accent-hover transition-colors group"
            >
              <span>View All Documented Studies</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((cs, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Browser Mockup Top Bar */}
                <div className="bg-[#0B1B38] px-5 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[160px]">
                    case-study-0{idx + 1}
                  </span>
                </div>

                <div className="p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy bg-white border border-slate-200 px-2.5 py-1 rounded-md mb-4 inline-block">
                      {cs.tag}
                    </span>
                    <h3 className="text-lg font-bold text-navy mb-3 leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 font-semibold">
                      Client: {cs.client}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {cs.outcome}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {cs.metric}
                    </span>
                    <Link
                      to={cs.link}
                      className="text-xs font-bold text-navy hover:underline inline-flex items-center"
                    >
                      <span>Read Study</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CORPORATE AI TRAINING BANNER (Azuro Dark Feature Style) */}
      <section className="py-20 md:py-24 bg-[#092755] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#FDD412]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#EEF3FB]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-accent uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Organizational Capability
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Build Practical AI Capability Inside Your Team
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-xl">
                We design custom B2B Generative AI workshops around your organization's actual reports, spreadsheets, and workflows.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/ai-training-for-organizations"
                  className="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-sm tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all"
                >
                  <span>Request Corporate AI Training</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <span className="text-xs text-slate-400">Onsite in Abuja &amp; Virtual Global Delivery</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8">
              <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
                Customized Onsite &amp; Virtual Workshops
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Delivered onsite in Abuja and throughout Nigeria, as well as live interactive cohorts globally. Employees bring their real operational documents and leave with repeatable workflows.
              </p>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-xs text-slate-400">
                <strong className="text-white block mb-1">Zero Coding Required:</strong>
                Tailored specifically for administrative, operational, research, and managerial teams.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. INTERACTIVE ACCORDION FAQ (Azuro Style) */}
      <section className="py-20 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Clarity &amp; Answers
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="text-base sm:text-lg font-bold text-navy">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-navy">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 11. FINAL CONVERSION CLOSE (Azuro Style) */}
      <section className="py-20 md:py-28 bg-[#092755] text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FDD412]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Have a Project, Workflow, or Dataset Challenge?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-10">
            Tell us what you are trying to achieve, what currently exists, and your available budget. We will help define the most practical next step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => trackCtaClick('Discuss Your Project - Final Close', '/')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-2xl font-extrabold text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.35)]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-5 rounded-2xl font-bold text-base transition-all"
            >
              <span>Visit Marketplace</span>
            </Link>
          </div>
          <div className="mt-6 text-xs text-slate-400">
            Flexible project-based pricing • Fast scoping feedback • Confidential
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;