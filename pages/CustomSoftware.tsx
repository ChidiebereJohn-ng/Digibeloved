import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Server, 
  FileCode2,
  ChevronDown,
  LayoutGrid,
  ShieldCheck,
  Zap,
  Users,
  Database,
  Lock,
  Boxes,
  XCircle
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const CustomSoftware: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Custom Software Development Services",
        "provider": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "url": "https://digibeloved.com"
        },
        "description": "Custom web application development, internal portals, and bespoke business software for organizations, NGOs, and founders in Nigeria and globally.",
        "areaServed": ["Nigeria", "Global"],
        "serviceType": "Custom Software Engineering"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do we own the software code after project completion?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 100%. Upon project completion and final payment, full intellectual property (IP), source code repository access, and database credentials are transferred directly to your organization with complete documentation."
            }
          },
          {
            "@type": "Question",
            "name": "Why build custom software instead of paying for an existing SaaS tool?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Off-the-shelf software charges perpetual per-user monthly subscription fees that escalate as your team grows, and forces your team to bend their operational workflow to fit rigid templates. Custom software gives you zero per-seat licensing fees, total control over data privacy, and a system built exactly around how you work."
            }
          },
          {
            "@type": "Question",
            "name": "What happens after the software is launched?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide a post-launch warranty period for all new builds to fix any issues, along with optional ongoing maintenance and feature iteration support."
            }
          }
        ]
      }
    ]
  };

  const softwareSolutions = [
    {
      tag: "Operations",
      title: "Internal Tools & Operations Portals",
      desc: "Centralized systems that replace chaotic spreadsheets, giving departments unified workflows, granular role permissions, and zero data leakage.",
      metrics: "Zero spreadsheet errors • Multi-role access"
    },
    {
      tag: "Client Experience",
      title: "Client & Stakeholder Portals",
      desc: "Secure, branded web portals where clients submit briefs, upload sensitive files, review milestones, and view invoices without back-and-forth email chains.",
      metrics: "Self-service tracking • Secure file custody"
    },
    {
      tag: "Business Intelligence",
      title: "Executive & Operational Dashboards",
      desc: "Live visibility platforms aggregating cross-departmental data from sales, inventory, and field activities into decision-ready charts.",
      metrics: "Real-time sync • Granular metrics"
    },
    {
      tag: "Product Engineering",
      title: "Custom Web Applications & MVPs",
      desc: "Production-ready web applications built for founders and organizations needing a validated, scalable digital product delivered on time.",
      metrics: "Modern React/Node stack • Scalable architecture"
    }
  ];

  const deliverySteps = [
    {
      step: "01",
      title: "Workflow Mapping & Architecture",
      desc: "We analyze your exact operational processes, user roles, data models, and integration points to create a zero-ambiguity technical specification."
    },
    {
      step: "02",
      title: "Interactive Prototype & UX Review",
      desc: "We design click-through wireframes and visual UI components so your team verifies every user journey before a single line of backend code is written."
    },
    {
      step: "03",
      title: "Sprint Milestones & Private Staging",
      desc: "We build in rapid 2-week sprints, deploying to an isolated staging environment where your team can test real features with dummy data."
    },
    {
      step: "04",
      title: "Rigorous QA, Security & Deployment",
      desc: "Automated regression testing, database stress validation, and role-based penetration checks before production rollout on your private servers."
    },
    {
      step: "05",
      title: "Full IP Handover & Launch Warranty",
      desc: "Complete Git repository transfer, deployment credentials, architecture manuals, admin staff training, and an included bug-fix warranty period."
    }
  ];

  const faqs = [
    {
      q: "Do we own 100% of the code and intellectual property?",
      a: "Yes, completely. Upon project handover, all Git repositories, cloud deployment credentials, database schemas, and intellectual property belong strictly to your organization. There are zero licensing lock-ins or recurring royalty charges."
    },
    {
      q: "Why build custom software instead of paying for off-the-shelf SaaS?",
      a: "Off-the-shelf software charges perpetual per-user monthly subscription fees that escalate as your team expands, while forcing your organization to compromise its workflows to fit someone else's rigid template. Custom software gives you zero per-seat licensing fees, total control over data privacy, and a system built exactly around how you work."
    },
    {
      q: "Can the software integrate with our existing database or spreadsheets?",
      a: "Yes. We can migrate legacy data or connect live to your existing SQL databases, REST APIs, or Google Sheets so you never lose historical records."
    },
    {
      q: "How long does a typical custom software build take?",
      a: "Focused internal tools and operational portals generally take 3 to 6 weeks from technical scoping to production deployment. Larger multi-portal systems are delivered in milestone sprints."
    },
    {
      q: "How is pricing structured?",
      a: "We operate on transparent project-based pricing tied to verified milestone deliverables. Share your requirements and available budget in the enquiry form, and we will recommend the most practical scope."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-navy selection:bg-accent selection:text-navy">
      <SchemaScript schema={schema} />

      {/* Hero Section */}
      <section className="bg-[#07152E] text-white pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD100_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Micro-Pill Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 mb-8 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white">Done-for-You Engineering</span>
            <span className="text-slate-500">•</span>
            <span className="text-accent">Zero Per-Seat SaaS Taxes</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Software Built Around <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white">
              How You Actually Work
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Replace fragile spreadsheets and escalating monthly subscriptions with custom web apps, client portals, and internal tools built to your exact specifications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact?service=software"
              onClick={() => trackCtaClick('Discuss Your Software Project - Hero', '/custom-software-development')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-2xl font-bold text-base hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.25)] group"
            >
              <span>Discuss Your Software Project</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-2xl font-semibold text-base transition-all"
            >
              <span>View Client Case Studies</span>
            </Link>
          </div>

          {/* Value Props Row */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">100% IP &amp; Code Ownership</p>
                <p className="text-slate-400 text-xs">Full Git repo handover</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Zero Per-Seat Fees</p>
                <p className="text-slate-400 text-xs">Add 50 or 500 team members</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Post-Launch Warranty</p>
                <p className="text-slate-400 text-xs">Included bug-fix coverage</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison: SaaS vs Custom Software */}
      <section className="py-20 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-2xs">
              The Strategic Decision
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Why Bespoke Outperforms Off-The-Shelf SaaS
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Generic software forces you to adapt your business rules to someone else's templates while billing you monthly for seats you barely use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Generic SaaS Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-red-200/70 shadow-2xs relative">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-full mb-6">
                <XCircle className="w-3.5 h-3.5" />
                <span>The SaaS Trap</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                Off-the-Shelf Subscriptions
              </h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3 mt-0.5">✕</span>
                  <span><strong>Escalating costs:</strong> Monthly fees double and triple every time you hire new employees.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3 mt-0.5">✕</span>
                  <span><strong>Rigid templates:</strong> You must contort your operations to match the vendor's pre-built workflows.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3 mt-0.5">✕</span>
                  <span><strong>Zero asset equity:</strong> Cancel your subscription and you lose complete access to the software.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3 mt-0.5">✕</span>
                  <span><strong>Vendor lock-in:</strong> Feature requests sit ignored in public forums for years.</span>
                </li>
              </ul>
            </div>

            {/* Custom Software Card */}
            <div className="bg-[#07152E] text-white p-8 sm:p-10 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-accent uppercase tracking-wider bg-white/10 border border-white/15 px-3 py-1 rounded-full mb-6">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>The DigiBeloved Approach</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Custom Software You 100% Own
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Predictable investment:</strong> One-time build cost with zero monthly per-seat licensing fees.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>100% workflow fit:</strong> Built strictly around your team's real operational steps, approval hierarchies, and metrics.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Full IP ownership:</strong> All source code, database architectures, and deployment keys are transferred to you.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Complete privacy:</strong> Deployed on your private servers with guaranteed institutional data custody.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* What We Build - Azuro Style Bento Grid */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Application Types
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Systems We Architect &amp; Deploy
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Engineered with clean code, robust relational databases, and airtight role-based security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareSolutions.map((sol, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 hover:bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 hover:border-slate-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy bg-white border border-slate-200 px-3 py-1 rounded-full">
                      {sol.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-accent-hover transition-colors">
                    {sol.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-8">
                    {sol.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {sol.metrics}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5-Step Delivery Process */}
      <section className="py-20 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-2xs">
              Delivery Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              How We De-Risk Your Software Build
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Milestone-gated execution so you retain full control over timeline, budget, and functionality at every step.
            </p>
          </div>

          <div className="space-y-4">
            {deliverySteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-slate-300 transition-all"
              >
                <div className="flex items-start sm:items-center space-x-5">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-navy/30 flex-shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive FAQ Accordion */}
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

      {/* Dark High-Contrast Final CTA */}
      <section className="py-20 md:py-28 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD100_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block mb-6">
            Get an Actionable Proposal
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to Build Software Tailored to Your Workflows?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about your organization's operational challenges, core user roles, and desired launch timeline. We will help scope a high-performance build.
          </p>
          <Link
            to="/contact?service=software"
            onClick={() => trackCtaClick('Discuss Your Software Project - Final CTA', '/custom-software-development')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)] group"
          >
            <span>Discuss Your Software Project</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CustomSoftware;
