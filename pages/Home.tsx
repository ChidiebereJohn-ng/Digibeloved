import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  ChevronRight,
  Sparkles,
  ExternalLink,
  Laptop,
  Check,
  TrendingUp,
  ShieldCheck,
  Clock
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const services = [
    {
      icon: BarChart3,
      tag: "Research & Analytics",
      title: "Research & Data Analysis",
      headline: "Turn raw data into defensible results.",
      desc: "Comprehensive cleaning, hypothesis testing, APA publication tables, and plain-English interpretation for scholars, M&E teams, and NGOs.",
      link: "/data-analysis",
      cta: "Explore Data Analysis",
      metrics: "100% Defensible • Zero Ghostwriting"
    },
    {
      icon: Workflow,
      tag: "Process Automation",
      title: "AI & Workflow Automation",
      headline: "Replace repetitive manual work.",
      desc: "Connect your Forms, Google Sheets, Excel, email, and WhatsApp into automated pipelines with built-in error alerts and zero manual copy-pasting.",
      link: "/ai-automation",
      cta: "Explore Automation",
      metrics: "Save 10+ Hours / Week"
    },
    {
      icon: Code2,
      tag: "Software Engineering",
      title: "Custom Software Development",
      headline: "Software built around how you work.",
      desc: "Internal operational portals, executive dashboards, and bespoke web apps. Full source code ownership with zero recurring per-user SaaS taxes.",
      link: "/custom-software-development",
      cta: "Explore Software",
      metrics: "100% Code Ownership"
    }
  ];

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
      q: "What makes DigiBeloved different from typical software or AI agencies?",
      a: "We start strictly from your business or research problem—not technical hype or buzzwords. Whether delivering statistically defensible research data, automating a manual spreadsheet bottleneck, or building custom software, we focus exclusively on measurable outcomes and permanent asset ownership."
    },
    {
      q: "Does DigiBeloved provide academic ghostwriting?",
      a: "No. We provide rigorous statistical analysis, data cleaning, methodology consultation, visualization, and analytical interpretation. We ensure your empirical results are methodologically valid and defensible. You conduct and own your intellectual research."
    },
    {
      q: "How does your pricing work?",
      a: "We operate on flexible project-based pricing scoped around your specific requirements, complexity, timeline, and available budget. We do not publish rigid fee tables or lock you into expensive per-seat licenses."
    },
    {
      q: "Where is your team based, and do you work with international clients?",
      a: "DigiBeloved is headquartered in Maitama, Abuja, Nigeria. We serve clients locally across Nigeria through onsite workshops and meetings, and globally across the UK, US, Canada, and Africa through secure digital collaboration."
    },
    {
      q: "How do we get started on a project?",
      a: "Click 'Discuss a Project' to share a brief overview of your objective, current process, and available budget. We review your requirements and provide a clear, actionable scoping recommendation within 24 hours."
    }
  ];

  return (
    <>
      <SchemaScript schema={homeSchema} />

      {/* 1. AZURO-STYLE HIGH-IMPACT HERO */}
      <section className="relative bg-white text-navy pt-16 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          
          {/* Status pill badge with pulsing dot */}
          <div className="inline-flex items-center space-x-2.5 bg-slate-50 border border-slate-200/80 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-800 mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Applied AI, Data &amp; Custom Software Solutions</span>
          </div>

          {/* Punchy, Bold H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-navy tracking-tight leading-[1.08] mb-6">
            Data Analysis, AI Automation &amp; Custom Software.
          </h1>

          {/* Crisp 1-sentence value statement */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed mb-10">
            We help researchers and organizations turn raw data into defensible insights, repetitive tasks into automated workflows, and business ideas into production software.
          </p>

          {/* Sleek dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              to="/contact"
              onClick={() => trackCtaClick('Discuss Your Project - Hero', '/')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-2xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.35)]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="#solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200/80 px-8 py-4 rounded-2xl font-bold text-base tracking-wide transition-all shadow-xs"
            >
              Explore Our Solutions
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-slate-500 pt-6 border-t border-slate-100">
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mr-2" />
              Methodologically Defensible
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-emerald-600 mr-2" />
              100% Code &amp; Data Ownership
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-navy mr-2"></span>
              Based in Abuja • Serving Globally
            </span>
          </div>

        </div>
      </section>

      {/* 2. CORE DONE-FOR-YOU SOLUTIONS (Azuro 3-Card Bento) */}
      <section id="solutions" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Done-for-You Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
              Built Around Your Exact Goal
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              No bloated retainers or generic software. We engineer only what solves your specific operational bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-navy/5 text-navy flex items-center justify-center group-hover:bg-navy group-hover:text-accent transition-colors duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-navy tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-bold text-accent bg-navy inline-block px-2.5 py-1 rounded-lg mb-4">
                      {item.headline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-8">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      {item.metrics}
                    </span>
                    <Link
                      to={item.link}
                      className="inline-flex items-center text-sm font-bold text-navy group-hover:text-accent transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. PROBLEM RECOGNITION (Azuro Clean Visual Bento) */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Operational Reality
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              If the process is slow, repetitive, or difficult to scale, there is a better system.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Messy or Disputed Research Data",
                desc: "Data collection is finished, but SPSS outputs are ambiguous, or review boards demand verified statistical models."
              },
              {
                title: "Manual Weekly Report Assembly",
                desc: "Valuable employees lose mornings copy-pasting numbers between spreadsheets, emails, and slide summaries."
              },
              {
                title: "Information Trapped in Spreadsheets",
                desc: "Teams have outgrown Excel. Multiple people edit corrupted files with zero centralized data visibility."
              },
              {
                title: "Chasing Approvals & Follow-Ups",
                desc: "Critical invoices and internal requests stall in inboxes because there is no automated status trigger."
              },
              {
                title: "Escalating Per-User SaaS Taxes",
                desc: "Generic off-the-shelf software charges expensive per-seat monthly fees without fitting your actual workflow."
              },
              {
                title: "Need for a Production MVP or Tool",
                desc: "You have a proven workflow or client demand, but lack the dedicated engineering team to build it cleanly."
              }
            ].map((p, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-7 hover:border-slate-300 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-accent mb-4" />
                <h3 className="text-base font-bold text-navy mb-2 leading-snug">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">Recognize your challenge here?</h3>
              <p className="text-slate-300 text-sm mt-1">Tell us what currently exists. We will evaluate the most practical next step.</p>
            </div>
            <Link
              to="/contact"
              onClick={() => trackCtaClick('Tell Us What You Need - Problem Banner', '/')}
              className="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-sm hover:bg-yellow-400 transition-all flex-shrink-0"
            >
              <span>Tell Us What You Need</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. HOW WE WORK (Azuro 4-Step Linear Roadmap) */}
      <section className="py-20 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Risk Reduction Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Start with the problem. Build only what solves it.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workSteps.map((step) => (
              <div key={step.num} className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-7 shadow-xs">
                <span className="text-3xl font-extrabold text-slate-300 font-mono block mb-3">
                  {step.num}
                </span>
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

      {/* 5. VISUAL SHOWCASE CASE STUDIES (Azuro Mockup Showcase) */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Selected Proof
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
                Real Outcomes. Documented Evidence.
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-navy hover:text-navy-light"
            >
              <span>View All Case Studies</span>
              <ChevronRight className="w-4 h-4 ml-1 text-accent" />
            </Link>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Browser Mockup Header Bar */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/80">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span className="ml-3 text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                      {proj.client}
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider bg-navy text-accent px-3 py-1 rounded-full">
                    {proj.tag}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-4">
                      {proj.title}
                    </h3>
                    <div className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                      <p><strong className="text-navy">Problem:</strong> {proj.problem}</p>
                      <p><strong className="text-navy">Solution:</strong> {proj.outcome}</p>
                    </div>
                    <Link
                      to={proj.link}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-navy hover:underline"
                    >
                      <span>Read Case Study Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>

                  <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Verified Result
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-navy mb-1">
                      {proj.metric}
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      Verified in Production
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CORPORATE AI TRAINING (Azuro Dark High-Contrast Feature) */}
      <section className="py-20 md:py-28 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-accent uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Organizational Capability Building
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Build Practical AI Capability Inside Your Organization.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Equip your team to use Generative AI productively, responsibly, and in workflows that match the work they actually do—not generic prompts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-xs sm:text-sm">
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Workplace Productivity &amp; Operations</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Applied AI for Research &amp; Analysis</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Executive AI &amp; Strategy Roadmaps</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Corporate Data Privacy &amp; Governance</span>
                </div>
              </div>

              <Link
                to="/ai-training-for-organizations"
                onClick={() => trackCtaClick('Request Corporate AI Training - Home Feature', '/')}
                className="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-2xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.3)]"
              >
                <span>Request Corporate AI Training</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 text-left">
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

      {/* 7. FOUNDER CREDIBILITY & TRUST */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-4 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto mb-4 bg-navy">
                  <img
                    src="https://res.cloudinary.com/dn2mgiges/image/upload/v1754587273/DigiBeloved.png"
                    alt="Chukwuemeka John Chidiebere"
                    className="w-full h-full object-cover p-3"
                  />
                </div>
                <h3 className="text-lg font-bold text-navy">Chukwuemeka John Chidiebere</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  Founder / Applied AI Strategist
                </p>
                <span className="text-xs text-slate-400 block mt-1">Abuja, Nigeria</span>
              </div>

              <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
                <h4 className="text-xl sm:text-2xl font-extrabold text-navy mb-3">
                  "Technology has no value until it simplifies a real person's work."
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  We don't sell buzzwords. We partner with research leads, operations managers, and founders to eliminate the analytical and digital roadblocks holding them back.
                </p>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-navy block font-bold text-sm">Research</strong>
                    <span>Valid statistical tests</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-navy block font-bold text-sm">Automation</strong>
                    <span>Resilient pipelines</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-navy block font-bold text-sm">Software</strong>
                    <span>100% Code custody</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE ACCORDION FAQ (Azuro Style) */}
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

      {/* 9. ACADEMY TEASER */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full inline-block mb-3">
            Individual Mastery
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
            Want to Learn the Systems Yourself?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
            Explore step-by-step playbooks, courses, and utilities for scholars and professionals in the DigiBeloved Academy.
          </p>
          <Link
            to="/academy"
            className="inline-flex items-center text-sm font-bold text-navy hover:underline"
          >
            <span>Explore DigiBeloved Academy</span>
            <ArrowRight className="w-4 h-4 ml-1.5 text-accent" />
          </Link>
        </div>
      </section>

      {/* 10. FINAL CONVERSION CLOSE */}
      <section className="py-20 md:py-28 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Have a Project, Workflow, or Dataset Challenge?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-10">
            Tell us what you are trying to achieve, what currently exists, and your available budget. We will help define the most practical next step.
          </p>
          <Link
            to="/contact"
            onClick={() => trackCtaClick('Discuss Your Project - Final Close', '/')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-2xl font-extrabold text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.35)]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <div className="mt-6 text-xs text-slate-400">
            Flexible project-based pricing • Fast scoping feedback • Confidential
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;