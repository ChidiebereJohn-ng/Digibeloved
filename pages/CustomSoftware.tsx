import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Database, 
  Users, 
  KeyRound, 
  Server, 
  Laptop, 
  Smartphone,
  FileCode2,
  FileCheck2
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const CustomSoftware: React.FC = () => {
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
      title: "Internal Business Tools & Portals",
      desc: "Centralized systems that replace chaotic spreadsheets, allowing employees across departments to collaborate with assigned permissions."
    },
    {
      title: "Client & Stakeholder Portals",
      desc: "Secure web environments where clients can track project progress, submit briefs, upload files, and access invoices without back-and-forth emails."
    },
    {
      title: "Operational & Executive Dashboards",
      desc: "Live visibility platforms aggregating metrics across your sales, inventory, and field activities into decision-ready charts."
    },
    {
      title: "Custom SaaS & MVP Development",
      desc: "Production-ready digital products built for founders who need to launch a validated application into the market cleanly and reliably."
    }
  ];

  const riskReductionSteps = [
    {
      title: "Milestone-Based Scoping",
      desc: "We define precise technical deliverables and approval gates before writing code, preventing scope creep and surprise costs."
    },
    {
      title: "Live Staging Previews",
      desc: "You test the application in a private staging environment at every milestone, giving your feedback before features are finalized."
    },
    {
      title: "Complete IP & Code Ownership",
      desc: "You own all code repositories, database assets, and deployment keys. No vendor lock-in."
    },
    {
      title: "Documentation & Handover",
      desc: "We deliver full architectural documentation and admin onboarding sessions so your team is fully empowered."
    },
    {
      title: "Post-Launch Warranty",
      desc: "Every deployment includes a dedicated bug-fix warranty and ongoing support options to ensure smooth operational adoption."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-navy">
      <SchemaScript schema={schema} />

      {/* Hero Section */}
      <section className="bg-[#07152E] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-accent mb-6">
            <Code2 className="w-3.5 h-3.5" />
            <span>Custom Software Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Custom Software Built Around the Way Your Organization Works
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            For businesses, NGOs, institutions, and founders that have outgrown spreadsheets, generic tools, or disconnected systems.
          </p>

          {/* Problem Hook Box */}
          <div className="bg-white/5 border border-accent/30 rounded-2xl p-5 sm:p-6 mb-10 max-w-2xl mx-auto text-left flex items-start space-x-4">
            <Layers className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base font-bold text-white mb-1">
                Generic tools force you to adapt to their workflow. We build systems that match yours.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When spreadsheets break, off-the-shelf software charges exorbitant per-user subscription fees, and third-party tools don't talk to each other, custom software provides an owned, scalable foundation.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact?service=software"
              onClick={() => trackCtaClick('Discuss Your Software Project - Hero', '/custom-software-development')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.3)]"
            >
              <span>Discuss Your Software Project</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="mt-8 text-xs text-slate-400 flex flex-wrap justify-center items-center gap-4">
            <span>Full Source Code Ownership</span>
            <span>•</span>
            <span>Zero Per-Seat SaaS Taxes</span>
            <span>•</span>
            <span>Reliable Architecture</span>
          </div>

        </div>
      </section>

      {/* Why Bespoke Software Wins */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
              The Strategic Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Why Custom Development Outperforms Generic SaaS
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Solve the exact organizational problem without paying unending monthly licensing fees for features you never use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80">
              <KeyRound className="w-8 h-8 text-navy mb-4" />
              <h3 className="text-lg font-bold text-navy mb-2">100% Workflow Fit</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The software adapts to your actual business rules, terminology, approval steps, and user roles—not the other way around.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80">
              <Server className="w-8 h-8 text-navy mb-4" />
              <h3 className="text-lg font-bold text-navy mb-2">Predictable Economics</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Add 50 or 500 team members without seeing your monthly software bill multiply. You pay for the build, not per seat.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80">
              <FileCode2 className="w-8 h-8 text-navy mb-4" />
              <h3 className="text-lg font-bold text-navy mb-2">Complete Asset Ownership</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your data, database, source code, and intellectual property remain permanently in your custody, stored on your private infrastructure.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-3">
              Application Types
            </span>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              Systems We Architect &amp; Build
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              From internal administrative hubs to full-featured client portals, we build production software designed for high reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareSolutions.map((sol, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-2.5 h-2.5 rounded-full bg-accent mb-3"></div>
                  <h3 className="text-xl font-bold text-navy mb-3">{sol.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{sol.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-navy">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" />
                  <span>Custom scope, database &amp; role security included</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We De-Risk Software Projects */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
              Risk Reduction
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              How We Eliminate Development Risk
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              The number one fear with custom software is cost overruns and abandoned code. Here is how we guarantee delivery.
            </p>
          </div>

          <div className="space-y-4">
            {riskReductionSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-navy text-base mb-1">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">How long does a typical custom software build take?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Focused internal tools and operational portals generally take 3 to 6 weeks from technical scoping to deployment. Larger multi-portal systems are delivered in milestone sprints.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">Can the software integrate with our existing database or spreadsheets?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes. We can migrate legacy data or connect live to your existing SQL databases, REST APIs, or Google Sheets so you never lose historical records.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">How is pricing structured?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We operate on flexible project-based pricing tied to verified milestone deliverables. Share your requirements and available budget in the enquiry form, and we will recommend the most practical scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to Build Software Around the Way You Actually Work?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Tell us about your organization's workflow, core users, and must-have capabilities. We will help scope a high-performance build.
          </p>
          <Link
            to="/contact?service=software"
            onClick={() => trackCtaClick('Discuss Your Software Project - Final CTA', '/custom-software-development')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-xl font-extrabold text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)]"
          >
            <span>Discuss Your Software Project</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftware;
