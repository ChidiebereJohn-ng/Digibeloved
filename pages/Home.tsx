import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Workflow, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown,
  Layers, 
  Users, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Check,
  TrendingUp,
  Star,
  BookOpen,
  Download,
  Laptop,
  Cpu,
  Zap,
  Lock,
  FileText,
  CheckCheck,
  Wand2,
  Database,
  Building,
  GraduationCap
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeVisualTab, setActiveVisualTab] = useState<'data' | 'automation' | 'software'>('data');

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
      },
      {
        "@type": "WebSite",
        "@id": "https://digibeloved.com/#website",
        "url": "https://digibeloved.com",
        "name": "DigiBeloved",
        "description": "Applied AI, Data Analysis & Custom Software Solutions"
      }
    ]
  };

  const services = [
    {
      icon: BarChart3,
      tag: "Research & Analytics",
      title: "Research & Data Analysis",
      headline: "From raw datasets to defensible results.",
      desc: "Comprehensive cleaning, hypothesis testing, APA publication tables, and plain-English narrative interpretation for scholars, M&E teams, and development researchers.",
      link: "/data-analysis",
      metrics: "100% Defensible • Zero Ghostwriting",
      deliverables: ["SPSS & Excel Datasets", "Regression & ANOVA", "APA Formatted Tables"]
    },
    {
      icon: Workflow,
      tag: "Process Automation",
      title: "AI & Workflow Automation",
      headline: "Replace repetitive manual bottlenecks.",
      desc: "Connect your Forms, Google Sheets, Excel, email, and WhatsApp into automated pipelines with built-in error alerts, audit logs, and zero manual copy-pasting.",
      link: "/ai-automation",
      metrics: "Save 10+ Hours / Week",
      deliverables: ["Instant Webhook Triggers", "WhatsApp Order Alerts", "Human Review Gates"]
    },
    {
      icon: Code2,
      tag: "Software Engineering",
      title: "Custom Software Development",
      headline: "Systems built around how you actually work.",
      desc: "Internal operational portals, executive dashboards, and bespoke web apps. Full source code ownership with zero recurring per-seat monthly SaaS taxes.",
      link: "/custom-software-development",
      metrics: "100% Code Ownership",
      deliverables: ["Role-Based Access Control", "Client & Staff Portals", "Private Server Deployment"]
    },
    {
      icon: GraduationCap,
      tag: "Team Capability",
      title: "Corporate AI Training",
      headline: "Practical AI workflows for your staff.",
      desc: "Customized onsite and virtual B2B Generative AI workshops built around your team's real documents, memos, and operational reporting responsibilities.",
      link: "/ai-training-for-organizations",
      metrics: "Abuja Onsite & Global Virtual",
      deliverables: ["Custom Prompt SOPs", "Data Security Guardrails", "Departmental Workflows"]
    }
  ];

  const whyUsFeatures = [
    {
      icon: Lock,
      title: "100% IP & Asset Ownership",
      desc: "You own all code repositories, databases, models, and outputs completely. Zero per-user SaaS license fees or vendor lock-in."
    },
    {
      icon: ShieldCheck,
      title: "Defensible Empirical Rigor",
      desc: "Statistical analyses and data pipelines engineered to withstand scrutiny from peer reviewers, institutional boards, and donor audits."
    },
    {
      icon: Cpu,
      title: "Fail-Safe Architecture",
      desc: "Automations and software equipped with automated error detection, fallback notifications, and human-in-the-loop validation checkpoints."
    },
    {
      icon: TrendingUp,
      title: "Milestone-Gated Delivery",
      desc: "Transparent scoping with weekly staging environment previews so you test and verify functionality before final production deployment."
    }
  ];

  const products = [
    {
      id: "ai-presentation-system",
      badge: "Playbook + System • ₦19,900 / $29",
      badgeColor: "bg-accent/20 text-accent border-accent/30",
      title: "The AI Presentation System & Playbook",
      desc: "Turn dense documents, research reports, or raw notes into high-impact, professional PowerPoint presentations with 4 repeatable AI workflows.",
      type: "Digital System",
      cta: "View System & Order",
      link: "/ai-presentation-system",
      featured: true,
      hasImage: true,
      imageUrl: "/playbook-cover.png"
    },
    {
      id: "free-blueprint",
      badge: "100% Free Download",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      title: "The AI Presentation Starter Blueprint",
      desc: "Download the concise 4-step framework + copy-paste master prompt to immediately turn complex notes into clean slide decks.",
      type: "Free Guide",
      cta: "Get Free Blueprint",
      link: "/free-blueprint",
      featured: false,
      hasImage: false
    },
    {
      id: "academy-course",
      badge: "Academy Masterclass • ₦10,000",
      badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      title: "Applied AI for Research & Data Analysis",
      desc: "Master Google Gemini & NotebookLM to scan 50+ papers in minutes, extract key themes, and perform no-code data analysis without getting overwhelmed.",
      type: "Hands-on Masterclass",
      cta: "Explore Syllabus",
      link: "/academy/ai-research-data",
      featured: false,
      hasImage: false
    },
    {
      id: "prompt-polisher",
      badge: "Free Interactive Tool",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      title: "The Prompt Polisher Tool",
      desc: "Interactive utility to refine and upgrade basic prompts into structured, highly accurate instructions for ChatGPT, Claude, and Gemini.",
      type: "Online Tool",
      cta: "Launch Prompt Polisher",
      link: "/prompt-polisher",
      featured: false,
      hasImage: false
    }
  ];

  const testimonials = [
    {
      quote: "Our socio-economic development survey had over 1,400 responses across multiple locations. DigiBeloved cleaned the entire dataset, validated our hypotheses, and produced publication-grade APA tables 4 days ahead of our donor reporting deadline with zero objections.",
      name: "Dr. A. Oladipo",
      role: "Lead Research Consultant",
      org: "Development Research Initiative",
      outcomeBadge: "1,400+ Responses Analyzed",
      serviceTag: "Research & Data Analysis"
    },
    {
      quote: "Our dispatch team was losing 12 hours every week manually reconciling store receipts and updating branch inventories. DigiBeloved built an automated webhook pipeline with instant WhatsApp alerts that completely prevented stockouts.",
      name: "Chinedu M.",
      role: "Head of Operations",
      org: "Regional Logistics & Retail Network",
      outcomeBadge: "12 Hours → 20 Mins / Week",
      serviceTag: "Workflow Automation"
    },
    {
      quote: "We were spending a fortune every month on generic client management SaaS tools that did not match how our consulting practice worked. DigiBeloved engineered a custom client portal with full source code handover that paid for itself in months.",
      name: "F. Al-Mansoor",
      role: "Managing Partner",
      org: "Strategic Advisory Firm",
      outcomeBadge: "Zero Per-Seat SaaS Taxes",
      serviceTag: "Custom Software"
    }
  ];

  const faqs = [
    {
      q: "How do I know whether I need Data Analysis, Automation, or Custom Software?",
      a: "If you have collected raw data (surveys, monitoring records, experiments) that needs cleaning and statistical reporting, you need Research & Data Analysis. If your team spends hours each week copying data between spreadsheets, email, or WhatsApp, you need Workflow Automation. If you require a multi-user portal, customer dashboard, or custom business application that you 100% own, you need Custom Software Development. Tell us your objective in our contact form and we will advise the best fit."
    },
    {
      q: "Do we own 100% of the code, data, and deliverables?",
      a: "Yes, absolutely. Upon final project completion, all Git repositories, cleaned datasets, analysis scripts (SPSS, Python, R), and deployment credentials are fully transferred to your custody. You never pay recurring software licensing fees to DigiBeloved."
    },
    {
      q: "How is pricing structured?",
      a: "We operate on transparent project-based pricing tied to verified milestone deliverables. You select your budget bracket in our enquiry form, and we engineer the most practical scope to achieve your outcome without cost overruns."
    },
    {
      q: "Can we purchase your individual products or train our team without a full build?",
      a: "Yes. If you prefer to equip yourself or your team with the skills to execute internally, you can acquire our standalone products (like The AI Presentation System & Playbook) or enroll your organization in our hands-on Corporate AI Training workshops."
    },
    {
      q: "What is your ethical stance on academic research?",
      a: "We provide data cleaning, statistical computation, APA table formatting, chart generation, and objective statistical interpretations. We do not write student theses, ghostwrite dissertations, or falsify data under any circumstances."
    }
  ];

  const techEcosystem = [
    { name: "SPSS Statistics", category: "Statistical Modeling" },
    { name: "Python & Pandas", category: "Data Engineering" },
    { name: "Google Cloud / Workspace", category: "Cloud & APIs" },
    { name: "PostgreSQL", category: "Relational Data" },
    { name: "React & TypeScript", category: "Software Architecture" },
    { name: "WhatsApp Business API", category: "Instant Dispatch" },
    { name: "Meta Business Suite", category: "Conversion Tracking" }
  ];

  return (
    <div className="bg-white min-h-screen text-navy selection:bg-accent selection:text-navy">
      <SchemaScript schema={homeSchema} />

      {/* 1. HERO SECTION (Split Layout with Engaging Visual Showcase as per Senior UI/UX Blueprint) */}
      <section className="relative bg-[#07152E] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Subtle Radial Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD100_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Trust Badge, Headline, Subheadline & Dual CTAs */}
            <div className="lg:col-span-7 text-left">
              
              {/* Trust Badge Line (from wireframe) */}
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 mb-6 backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-white">Applied AI, Data &amp; Custom Software</span>
                <span className="text-slate-500">•</span>
                <span className="text-accent font-medium">Abuja &amp; Global</span>
              </div>

              {/* Main Headline (H1) */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Turn Complex Data &amp; Operations Into <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white">
                  High-Performance Systems.
                </span>
              </h1>

              {/* Crisp Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                We deliver methodologically defensible data analysis for researchers, automated pipelines for lean operations, and bespoke software you 100% own.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <Link
                  to="/contact"
                  onClick={() => trackCtaClick('Discuss Your Project - Hero Left', '/')}
                  className="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-2xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.3)] group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="#products"
                  className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/15 px-7 py-4 rounded-2xl font-bold text-base transition-all"
                >
                  <Sparkles className="w-4 h-4 text-accent mr-2" />
                  <span>Explore Products &amp; Blueprints</span>
                </a>
              </div>

              {/* Trust Micro-Metrics */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-6 border-t border-white/10">
                <span className="flex items-center">
                  <ShieldCheck className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                  <span>100% Defensible Empirical Rigor</span>
                </span>
                <span className="flex items-center">
                  <Check className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                  <span>Zero Per-Seat SaaS Taxes</span>
                </span>
                <span className="flex items-center">
                  <Lock className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                  <span>Full Code &amp; IP Custody</span>
                </span>
              </div>

            </div>

            {/* Right Column: Visual Dashboard / Live System Showcase (The Missing Visual Element from Wireframe!) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-lg bg-[#0B1B38] border border-white/15 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
                
                {/* Browser-style Top Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">
                      digibeloved.com/engine
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5" />
                    Live Production
                  </span>
                </div>

                {/* Interactive Capability Switcher Tabs */}
                <div className="grid grid-cols-3 gap-1 bg-white/5 p-1 rounded-xl mb-4 text-xs font-semibold text-slate-300">
                  <button
                    onClick={() => setActiveVisualTab('data')}
                    className={`py-1.5 px-2 rounded-lg transition-all text-center ${
                      activeVisualTab === 'data' 
                        ? 'bg-accent text-navy font-bold shadow-xs' 
                        : 'hover:text-white'
                    }`}
                  >
                    Data Analysis
                  </button>
                  <button
                    onClick={() => setActiveVisualTab('automation')}
                    className={`py-1.5 px-2 rounded-lg transition-all text-center ${
                      activeVisualTab === 'automation' 
                        ? 'bg-accent text-navy font-bold shadow-xs' 
                        : 'hover:text-white'
                    }`}
                  >
                    Automation
                  </button>
                  <button
                    onClick={() => setActiveVisualTab('software')}
                    className={`py-1.5 px-2 rounded-lg transition-all text-center ${
                      activeVisualTab === 'software' 
                        ? 'bg-accent text-navy font-bold shadow-xs' 
                        : 'hover:text-white'
                    }`}
                  >
                    Software
                  </button>
                </div>

                {/* Tab 1: Data Analysis Visual Simulation */}
                {activeVisualTab === 'data' && (
                  <div className="space-y-3 animate-in fade-in duration-200 text-left">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span className="font-mono">Survey Dataset: Socio-Economic Impact</span>
                        <span className="text-accent font-bold">1,420 Records</span>
                      </div>
                      <div className="space-y-1.5 font-mono text-[11px] text-slate-300">
                        <p className="flex justify-between">
                          <span>Data Screening &amp; Normality:</span>
                          <span className="text-emerald-400">✓ Cleaned (0 Nulls)</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Multiple Linear Regression:</span>
                          <span className="text-emerald-400">F = 42.18, p &lt; 0.001</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Variance Explained (R²):</span>
                          <span className="text-accent font-bold">0.842</span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                          APA
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Publication Tables &amp; Charts</p>
                          <p className="text-[10px] text-slate-400">Ready for review committee</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                        100% Defensible
                      </span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Workflow Automation Visual Simulation */}
                {activeVisualTab === 'automation' && (
                  <div className="space-y-3 animate-in fade-in duration-200 text-left">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                        <span className="font-mono">Multi-Branch Reorder Pipeline</span>
                        <span className="text-emerald-400">Active</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center space-x-2 text-slate-300">
                          <CheckCheck className="w-4 h-4 text-emerald-400" />
                          <span>Branch 03: Stock reorder threshold reached</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-300">
                          <CheckCheck className="w-4 h-4 text-emerald-400" />
                          <span>Automated PO generated in Google Sheets</span>
                        </div>
                        <div className="flex items-center space-x-2 text-accent font-bold">
                          <Zap className="w-4 h-4 text-accent" />
                          <span>WhatsApp Supplier Alert Dispatched (1.2s)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">Manual Spreadsheet Reconciliation</p>
                        <p className="text-[10px] text-slate-400">12 hours weekly reduced to 20 mins</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                        -95% Time
                      </span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Custom Software Visual Simulation */}
                {activeVisualTab === 'software' && (
                  <div className="space-y-3 animate-in fade-in duration-200 text-left">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                        <span className="font-mono">Operations &amp; Client Vault</span>
                        <span className="text-accent font-bold">Custom Build</span>
                      </div>
                      <div className="space-y-2 text-xs text-slate-300">
                        <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                          <span>Client Milestones Portal:</span>
                          <span className="text-emerald-400 font-bold">Live (42 Users)</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                          <span>Monthly Per-Seat Licensing:</span>
                          <span className="text-accent font-bold">$0.00 Forever</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">Full Source Code Handover</p>
                        <p className="text-[10px] text-slate-400">Git repository + documentation</p>
                      </div>
                      <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-md">
                        100% Owned
                      </span>
                    </div>
                  </div>
                )}

                {/* Floating Bottom Social Proof Pill */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center space-x-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent" />
                    ))}
                  </div>
                  <span className="text-slate-400">Verified Client Deliverables</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PARTNERS / TECH STACK & TRUST BAR (from Wireframe: "Partners Section") */}
      <section className="py-10 bg-slate-50 border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Enterprise-Grade Tooling &amp; Technology Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {techEcosystem.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-navy" />
                <span className="text-xs font-bold text-navy">{item.name}</span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">({item.category})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE COMMERCIAL SOLUTIONS (from Wireframe: "Features Section") */}
      <section id="solutions" className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Commercial Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
              Solutions Engineered For You
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              No bloated retainers or generic software. We engineer only what solves your specific operational bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-slate-300 rounded-3xl p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy flex items-center justify-center group-hover:bg-navy group-hover:text-accent transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-navy tracking-tight mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs font-bold text-navy bg-accent/20 border border-accent/30 inline-block px-2 py-0.5 rounded-md mb-3">
                      {item.headline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      {item.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400">
                      {item.metrics}
                    </span>
                    <Link
                      to={item.link}
                      className="inline-flex items-center text-xs font-bold text-navy group-hover:text-accent-hover transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. WHY US SECTION (from Wireframe: "Why Us Section") */}
      <section className="py-20 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-2xs">
              The Strategic Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Why Organizations Choose DigiBeloved
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              We eliminate technical risks, opaque pricing, and perpetual software lock-ins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. PRODUCTS & ACADEMY SPOTLIGHT (Directly Addressing User Request: "I have landing page for my products kind find them") */}
      <section id="products" className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Self-Paced Systems &amp; Tools
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
              Products &amp; Practical Playbooks
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Ready-to-use digital playbooks, free blueprints, and interactive AI utilities to accelerate your individual productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((prod) => (
              <div 
                key={prod.id}
                className={`bg-slate-50 hover:bg-white rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between group ${
                  prod.featured 
                    ? 'border-accent ring-1 ring-accent/30 shadow-md' 
                    : 'border-slate-200/90 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  
                  {/* Visual Preview for Flagship Product */}
                  {prod.hasImage && prod.imageUrl && (
                    <div className="mb-5 rounded-2xl overflow-hidden bg-[#07152E] border border-slate-200 shadow-xs flex items-center justify-center p-3">
                      <img 
                        src={prod.imageUrl} 
                        alt={prod.title}
                        className="w-full h-36 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Badge */}
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border inline-block mb-3 ${prod.badgeColor}`}>
                    {prod.badge}
                  </span>

                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-accent-hover transition-colors">
                    {prod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70">
                  <Link
                    to={prod.link}
                    className="w-full inline-flex items-center justify-center bg-navy hover:bg-navy-light text-white px-4 py-2.5 rounded-xl font-bold text-xs tracking-wide transition-colors group-hover:bg-accent group-hover:text-navy"
                  >
                    <span>{prod.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Banner: Academy Link */}
          <div className="bg-[#07152E] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative text-left">
              <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                DigiBeloved Academy
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Want to Master Practical AI Systems Yourself?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Explore our full suite of individual courses, video walkthroughs, and curated prompt stacks at DigiBeloved Academy.
              </p>
            </div>
            <Link
              to="/academy"
              className="inline-flex items-center justify-center bg-white text-navy hover:bg-accent px-6 py-3.5 rounded-xl font-bold text-sm transition-colors flex-shrink-0"
            >
              <span>Explore Academy Hub</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. REVIEWS & SOCIAL PROOF (from Wireframe: "Review Section") */}
      <section className="py-20 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-2xs">
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Real Experiences. Defensible Outcomes.
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              See how our empirical data analyses, custom automations, and software have unblocked real organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-navy/5 text-navy px-2.5 py-0.5 rounded-full">
                      {item.serviceTag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-navy">{item.name}</h4>
                    <p className="text-[11px] text-slate-500">{item.role}, {item.org}</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-md">
                    {item.outcomeBadge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-sm font-bold text-navy hover:text-accent-hover transition-colors"
            >
              <span>Read Full Documented Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (from Wireframe: "FAQ Section") */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Answers &amp; Clarity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-navy hover:text-navy/80 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. FINAL CONVERSION CTA (from Wireframe: "CTA Section") */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#07152E] text-white rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden shadow-2xl border border-white/10">
          
          {/* Ambient Glow */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD100_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block mb-6">
              Start The Conversation
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Have a Dataset, Workflow, or Software Project?
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10">
              Tell us what you are trying to achieve, what data or systems currently exist, and your target timeline. We will help scope a practical solution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() => trackCtaClick('Discuss Your Project - Final CTA', '/')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-2xl font-extrabold text-base sm:text-lg hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)] group"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/free-blueprint"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-5 rounded-2xl font-bold text-base transition-all"
              >
                <Download className="w-4 h-4 mr-2 text-accent" />
                <span>Download Free Blueprint</span>
              </Link>
            </div>

            <div className="mt-8 text-xs text-slate-400">
              <span>Fast 24h Response</span>
              <span className="mx-2">•</span>
              <span>Transparent Milestone Scoping</span>
              <span className="mx-2">•</span>
              <span>Based in Abuja, Nigeria</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;