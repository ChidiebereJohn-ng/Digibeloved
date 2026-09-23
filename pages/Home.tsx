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
  Sparkles,
  ExternalLink,
  Laptop,
  Check,
  TrendingUp,
  ShieldCheck,
  Clock,
  BookOpen,
  Zap,
  ShoppingBag
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

  const marketplaceSpotlight = [
    {
      title: "The AI Presentation System & Playbook",
      price: "₦19,900 / $29",
      badge: "Bestseller",
      desc: "Turn dense documents, research reports, or raw notes into high-impact PowerPoint slides using 4 proven AI workflows.",
      link: "/ai-presentation-system",
      cta: "View System",
      hasCover: true
    },
    {
      title: "The AI Presentation Starter Blueprint",
      price: "FREE",
      badge: "Free Download",
      desc: "The 4-step rapid framework + copy-paste master prompt to immediately turn complex notes into clean slide decks.",
      link: "/free-blueprint",
      cta: "Download Free",
      hasCover: false
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

      {/* 1. AZURO DIGITAL STYLE HERO SECTION */}
      <section className="relative bg-white pt-16 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#07152E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          
          {/* Status pill badge with pulsing dot */}
          <div className="inline-flex items-center space-x-2.5 bg-slate-50 border border-slate-200/80 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-800 mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
              Explore Solutions
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
              <span className="w-2 h-2 rounded-full bg-navy mr-2" />
              Based in Abuja • Serving Globally
            </span>
          </div>

        </div>
      </section>

      {/* 2. CORE DONE-FOR-YOU SOLUTIONS (Azuro 3-Card Bento) */}
      <section id="solutions" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
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

      {/* 3. BUSINESS MARKETPLACE SPOTLIGHT (Azuro Clean Visual Cards) */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {marketplaceSpotlight.map((prod, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 px-3 py-1 rounded-full text-navy">
                      {prod.badge}
                    </span>
                    <span className="text-sm font-mono font-extrabold text-navy">
                      {prod.price}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-accent-hover transition-colors">
                    {prod.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Instant Digital Access
                  </span>
                  <Link
                    to={prod.link}
                    className="inline-flex items-center bg-navy text-white group-hover:bg-accent group-hover:text-navy px-5 py-2.5 rounded-xl font-bold text-xs transition-colors"
                  >
                    <span>{prod.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
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

      {/* 4. PROBLEM RECOGNITION (Azuro Clean Visual Bento) */}
      <section className="py-20 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Operational Reality
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              If the process is slow, repetitive, or unclear, there is a better system.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs flex items-start space-x-5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                01
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  Uncertain Statistical Methodology
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Surveys collected, but your team is unsure which tests satisfy normality, multicollinearity, or reviewer scrutiny.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs flex items-start space-x-5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                02
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  Spreadsheet Copy-Paste Fatigue
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Hours lost every week transferring receipts, dispatch notes, and numbers between forms, Sheets, and messaging apps.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs flex items-start space-x-5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                03
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  SaaS Subscription Trap
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Paying escalating monthly per-user fees for generic software that forces your team to bend to rigid external templates.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs flex items-start space-x-5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                04
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  Superficial AI Adoption
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Staff experimenting with random chatbot prompts without standard operating procedures, creating confidentiality risks.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. HOW WE WORK (Azuro 4-Step Process) */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
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
                className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 hover:bg-white hover:shadow-lg transition-all duration-200"
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

      {/* 6. VERIFIED PROOF & CASE STUDIES (Azuro Browser Frame Style) */}
      <section className="py-20 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
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
                className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy bg-slate-100 px-2.5 py-1 rounded-md mb-4 inline-block">
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

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
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

      {/* 7. CORPORATE AI TRAINING BANNER (Azuro Dark Feature Style) */}
      <section className="py-20 md:py-24 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        
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

      {/* 9. FINAL CONVERSION CLOSE (Azuro Style) */}
      <section className="py-20 md:py-28 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
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