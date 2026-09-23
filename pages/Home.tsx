import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Workflow, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Users, 
  FileSpreadsheet, 
  Layers, 
  Building2, 
  GraduationCap, 
  ChevronRight,
  BookOpen,
  Sparkles
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const Home: React.FC = () => {
  // Rich Structured Data: Organization & LocalBusiness
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
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+2348067628656",
          "contactType": "customer service",
          "email": "digibeloved@gmail.com",
          "areaServed": ["NG", "Global"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://digibeloved.com/#website",
        "url": "https://digibeloved.com",
        "name": "DigiBeloved",
        "publisher": {
          "@id": "https://digibeloved.com/#organization"
        }
      }
    ]
  };

  const problemScenarios = [
    {
      title: "Research data is difficult to clean, test, or interpret",
      description: "You finished data collection, but SPSS outputs are ambiguous, deadlines are looming, or reviewers requested methodologically defensible revisions."
    },
    {
      title: "Weekly reports assembled by hand across spreadsheets",
      description: "Team members spend entire mornings copy-pasting numbers from Excel and Forms into presentations and status summaries."
    },
    {
      title: "Information manually moved between tools",
      description: "Data enters via Google Forms, gets pasted into Sheets, emailed to managers, and re-typed into a database with zero synchronization."
    },
    {
      title: "Staff constantly chasing approvals or email follow-ups",
      description: "Critical requests stall in inboxes because there is no automated routing, deadline triggers, or visible status tracking."
    },
    {
      title: "Your organization has outgrown spreadsheets",
      description: "Multiple people edit the same broken workbook, formulas get corrupted, and nobody has a secure, single source of operational truth."
    },
    {
      title: "A vital product or internal tool needs to be built properly",
      description: "You have a validated workflow or client demand, but off-the-shelf software is rigid, bloated, and charges expensive seat licenses."
    }
  ];

  const workSteps = [
    {
      step: "01",
      title: "Understand the Objective",
      description: "We identify the business goal, research hypothesis, or workflow bottleneck before touching any tool or code."
    },
    {
      step: "02",
      title: "Map the Current Workflow & Data",
      description: "We examine the existing datasets, spreadsheets, communication channels, and failure points in detail."
    },
    {
      step: "03",
      title: "Define the Right Solution & Scope",
      description: "We propose a clear scope, defensible methodology, or system architecture with zero technical fluff."
    },
    {
      step: "04",
      title: "Build or Analyze",
      description: "We execute the rigorous statistical analysis, automate the target pipeline, or engineer the custom software."
    },
    {
      step: "05",
      title: "Validate & Review",
      description: "Every dataset is cross-checked, every automated route is error-tested, and every software feature is verified."
    },
    {
      step: "06",
      title: "Deliver, Document & Support",
      description: "We hand over clean report-ready outputs, documented codebases, and ongoing maintenance support."
    }
  ];

  const selectedCaseStudies = [
    {
      category: "Research & Data Analysis",
      title: "Multi-State Survey Cleaning, Inferential Modeling & Defensible Reporting",
      problem: "A development research team had 1,400+ survey responses with missing data, inconsistent coding, and an urgent donor deadline.",
      solution: "Implemented rigorous data cleansing, validated variable scales, ran multivariate regression models, and generated publication-ready APA tables.",
      outcome: "Clean, defensible findings delivered 4 days ahead of deadline with zero supervisor corrections."
    },
    {
      category: "AI & Workflow Automation",
      title: "Automated Multi-Branch Inventory & Re-Order Alert Pipeline",
      problem: "Operations staff spent 12+ hours weekly reconciling inventory sheets across three branches, leading to frequent stockouts.",
      solution: "Engineered an automated Google Workspace & webhook pipeline linking daily form submissions to master inventory with automated WhatsApp & email re-order alerts.",
      outcome: "Eliminated 100% of manual copy-paste errors and cut weekly administrative processing time from 12 hours to 20 minutes."
    },
    {
      category: "Custom Software Development",
      title: "Bespoke Operations & Client Management Portal",
      problem: "A growing consulting firm struggled with fragmented client onboarding, insecure document sharing, and generic CRM clutter.",
      solution: "Designed and deployed a responsive, secure web portal with role-based access control, automated milestone tracking, and client document handover.",
      outcome: "Unified operations across the firm with zero monthly per-seat SaaS subscription fees."
    }
  ];

  const industries = [
    { name: "Research & Higher Education", desc: "Postgraduate scholars, academic faculties, and independent investigators." },
    { name: "NGOs & Development Programs", desc: "M&E teams, public health initiatives, and donor-funded project evaluations." },
    { name: "SMEs & Professional Services", desc: "Agencies, legal, financial, and consultancy teams scaling operations." },
    { name: "Founders & Startups", desc: "Entrepreneurs building MVPs, client portals, and bespoke internal tools." },
    { name: "Public Sector & Institutions", desc: "Departments seeking responsible, practical AI literacy and workflow upgrades." }
  ];

  return (
    <>
      <SchemaScript schema={homeSchema} />

      {/* 1. HERO SECTION (Phase 2) */}
      <section className="relative bg-[#07152E] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-accent mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>Applied AI, Data &amp; Software Solutions</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Data Analysis, AI Automation &amp; Custom Software for Researchers and Organizations.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed mb-10">
            Turn raw data into defensible insights, repetitive processes into automated workflows, and business ideas into production-ready software.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/contact"
              onClick={() => trackCtaClick('Discuss Your Project - Hero', '/')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-base sm:text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.3)]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="#solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-white/15 px-8 py-4 rounded-xl font-bold text-base sm:text-lg tracking-wide transition-all"
            >
              Explore Our Solutions
            </a>
          </div>

          {/* Trust Line */}
          <div className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
            Based in Abuja, Nigeria • Serving clients globally
          </div>

        </div>
      </section>

      {/* 2. THREE PRIMARY DONE-FOR-YOU SERVICES (Phase 3) */}
      <section id="solutions" className="py-20 md:py-28 bg-white text-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
              Done-for-You Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Choose the Outcome You Need
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              We don't sell generic technology hype. We build, analyze, and automate around your specific objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1: Research & Data Analysis */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy text-accent flex items-center justify-center mb-6 shadow-sm">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Research &amp; Analytics
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mb-4">
                  Turn raw data into clear, defensible results.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  For researchers and organizations that need data cleaning, statistical analysis, visualisation, interpretation, and professional reporting.
                </p>
                <ul className="space-y-2 mb-8 text-xs font-medium text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span>Survey &amp; experimental data cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span>Hypothesis testing &amp; statistical modeling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span>Report-ready APA tables &amp; charts</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/data-analysis"
                className="inline-flex items-center text-sm font-bold text-navy hover:text-navy-light group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Data Analysis</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-accent" />
              </Link>
            </div>

            {/* Service 2: AI & Workflow Automation */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy text-accent flex items-center justify-center mb-6 shadow-sm">
                  <Workflow className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Process Automation
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mb-4">
                  Replace repetitive manual work with reliable workflows.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  For teams relying on Forms, Sheets, Excel, email, documents, approvals, reporting, or disconnected systems.
                </p>
                <ul className="space-y-2 mb-8 text-xs font-medium text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span>End-to-end spreadsheet &amp; form automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span>Document generation &amp; approval routing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span>WhatsApp, email &amp; webhook integrations</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/ai-automation"
                className="inline-flex items-center text-sm font-bold text-navy hover:text-navy-light group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Automation</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-accent" />
              </Link>
            </div>

            {/* Service 3: Custom Software Development */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy text-accent flex items-center justify-center mb-6 shadow-sm">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Software Engineering
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mb-4">
                  Build software around the way your organization works.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  For businesses, NGOs, institutions, and founders that need web apps, mobile apps, internal tools, dashboards, portals, or custom digital products.
                </p>
                <ul className="space-y-2 mb-8 text-xs font-medium text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span>Operational portals &amp; custom business tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span>Role-based access &amp; executive dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                    <span>Full code ownership, docs &amp; handover</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/custom-software-development"
                className="inline-flex items-center text-sm font-bold text-navy hover:text-navy-light group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Software Development</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-accent" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PROBLEM RECOGNITION (Phase 4) */}
      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-3">
              Operational Reality
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              If the process is slow, repetitive, unclear, or difficult to scale, there is usually a better system.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {problemScenarios.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-2 h-2 rounded-full bg-accent mb-3"></div>
                  <h3 className="text-base font-bold text-navy mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-navy">Recognize your situation here?</h3>
              <p className="text-sm text-slate-600 mt-1">Tell us what you are dealing with, and we will evaluate the most realistic solution.</p>
            </div>
            <Link
              to="/contact"
              onClick={() => trackCtaClick('Tell Us What You Need - Problem Section', '/')}
              className="inline-flex items-center justify-center bg-navy text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-navy-light transition-all flex-shrink-0"
            >
              <span>Tell Us What You Need</span>
              <ArrowRight className="w-4 h-4 ml-2 text-accent" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. HOW DIGIBELOVED WORKS (Phase 5) */}
      <section className="py-20 md:py-28 bg-white text-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
              Risk Reduction Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Start with the problem. Build only what solves it.
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              We remove project uncertainty through transparent discovery, verified scoping, and continuous validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workSteps.map((step) => (
              <div key={step.step} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 relative">
                <span className="text-3xl font-extrabold text-slate-300 font-mono block mb-3">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. VERIFIED CASE STUDIES & PROOF (Phase 7) */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-3">
                Evidence of Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {selectedCaseStudies.map((cs, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    {cs.category}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-4 leading-snug">
                    {cs.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6 text-xs text-slate-600">
                    <div>
                      <strong className="text-navy block mb-0.5">Problem:</strong>
                      {cs.problem}
                    </div>
                    <div>
                      <strong className="text-navy block mb-0.5">Solution:</strong>
                      {cs.solution}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    Outcome
                  </span>
                  <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                    {cs.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CORPORATE AI TRAINING SECTION (Phase 8) */}
      <section className="py-20 md:py-24 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8">
              <span className="text-xs font-bold text-accent uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block mb-4">
                Organizational Capability Building
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Build Practical AI Capability Inside Your Organization
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Equip your team to use Generative AI productively, responsibly, and in workflows that match the work they actually do.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Workplace Productivity &amp; Operations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Applied AI for Research &amp; Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Executive AI &amp; Strategy Roadmaps</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Data Privacy &amp; Responsible Usage</span>
                </div>
              </div>

              <Link
                to="/ai-training-for-organizations"
                onClick={() => trackCtaClick('Request Corporate AI Training - Homepage', '/')}
                className="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.25)]"
              >
                <span>Request Corporate AI Training</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
              <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">B2B Customized Programs</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                We deliver tailored in-person sessions across Abuja and Nigeria, as well as live virtual interactive training for remote teams globally.
              </p>
              <div className="pt-4 border-t border-white/10 text-xs text-slate-300">
                <strong className="text-white block mb-1">Not a pre-recorded webinar:</strong>
                Real employees bring their real operational documents and learn repeatable workflows they apply immediately.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES / BUYERS */}
      <section className="py-20 md:py-24 bg-white text-navy px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Organizations &amp; Professionals We Partner With
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Tailored engagements designed specifically for each sector's compliance, accuracy, and operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((ind, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
                <h3 className="text-sm font-bold text-navy mb-2">{ind.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOUNDER & TRUST */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-md mb-4 bg-navy">
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
                <div className="mt-3 text-xs text-slate-400">
                  Abuja, Nigeria
                </div>
              </div>

              <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
                <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full inline-block mb-3">
                  Grounding &amp; Philosophy
                </span>
                <h4 className="text-xl font-extrabold text-navy mb-3">
                  "Technology has no value until it simplifies a real person's work."
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  DigiBeloved was founded on a simple principle: bridge the gap between technical capability and everyday operational reality. Rather than selling buzzwords, we work directly with researchers, operations leads, and founders to solve their immediate analytical and software bottlenecks.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700 font-medium">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-bold text-navy block">Data Rigor</span>
                    Methodological correctness
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-bold text-navy block">Software Engineering</span>
                    Production architectures
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-bold text-navy block">Applied Workshops</span>
                    Measurable productivity
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 9. ACADEMY TEASER (Phase 9) */}
      <section className="py-20 md:py-24 bg-white text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
            Individual Learning
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight mb-4">
            Want to Learn the Systems Yourself?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            For scholars, entrepreneurs, and professionals who want step-by-step playbooks, practical skills, and tools they can apply independently to their daily work.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h3 className="font-bold text-navy text-sm mb-1">AI Presentation System</h3>
              <p className="text-xs text-slate-600">Turn your research, report, or notes into executive PowerPoint slides using AI.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h3 className="font-bold text-navy text-sm mb-1">The Prompt Polisher</h3>
              <p className="text-xs text-slate-600">Free utility to transform vague thoughts into engineer-grade AI instructions.</p>
            </div>
          </div>

          <Link
            to="/academy"
            onClick={() => trackCtaClick('Explore DigiBeloved Academy - Teaser', '/')}
            className="inline-flex items-center justify-center bg-navy text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-navy-light transition-all shadow-md"
          >
            <span>Explore DigiBeloved Academy</span>
            <ArrowRight className="w-4 h-4 ml-2 text-accent" />
          </Link>
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA (Phase 6 / Final Close) */}
      <section className="py-20 md:py-28 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Have a Project, Workflow, Dataset, or Team Challenge?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-10">
            Tell us what you are trying to achieve, what currently exists, and your available budget. We will help you define the most practical next step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => trackCtaClick('Discuss Your Project - Final Close', '/')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-xl font-extrabold text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)]"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="mt-6 text-xs text-slate-400">
            Flexible project-based pricing • Clear deliverables • No obligation discovery
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;