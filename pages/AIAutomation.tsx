import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Plus, 
  Minus,
  Sparkles,
  Zap,
  Repeat
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const AIAutomation: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "AI & Workflow Automation Services",
        "provider": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "url": "https://digibeloved.com"
        },
        "description": "Business process and workflow automation services connecting Google Workspace, APIs, webhooks, and applied AI for organizations.",
        "areaServed": ["Nigeria", "Global"],
        "serviceType": "Process Automation & System Integration"
      }
    ]
  };

  const bottlenecks = [
    { title: "Manual Data Entry", desc: "Re-typing information from Google Forms, WhatsApp, or emails into master spreadsheets and finance sheets." },
    { title: "Weekly Report Prep", desc: "Pulling numbers from multiple tools by hand and compiling them into PDFs or status decks." },
    { title: "Chasing Approvals", desc: "Purchase orders or project requests sitting unapproved in managers' inboxes." },
    { title: "Document Drafting", desc: "Creating agreements, receipts, or certificates manually by editing Word templates one by one." },
    { title: "Missed Follow-Ups", desc: "Leads and client inquiries falling through the cracks without automated reminders." },
    { title: "Inventory Imbalance", desc: "Disconnected retail or branch logs causing delayed dispatches and stockouts." }
  ];

  const methodology = [
    { step: "01", name: "Discover", desc: "Observe the exact tasks draining staff time." },
    { step: "02", name: "Map", desc: "Document data flows and identify friction points." },
    { step: "03", name: "Design", desc: "Architect automated routes with human review gates." },
    { step: "04", name: "Build", desc: "Connect webhooks, APIs, and spreadsheet scripts." },
    { step: "05", name: "Validate", desc: "Test edge cases and error-handling fail-safes." },
    { step: "06", name: "Deploy", desc: "Launch live with zero downtime." },
    { step: "07", name: "Improve", desc: "Provide full team documentation and support." }
  ];

  const faqs = [
    {
      q: "What happens if an automated workflow encounters an error?",
      a: "Every automation we build includes error handling and fail-safe alerts. If an external service is temporarily unreachable, the system safely queues the data and alerts your admin via email or WhatsApp immediately."
    },
    {
      q: "Do we have to buy expensive new software?",
      a: "No. Our approach is to connect and optimize the tools your team already uses every day (Google Sheets, Forms, Excel, Gmail, WhatsApp Business, Slack) before recommending any third-party subscriptions."
    },
    {
      q: "Will non-technical staff be able to use the system?",
      a: "Yes. The automation operates quietly in the background. Staff interact through familiar forms and spreadsheets without touching any code."
    },
    {
      q: "How fast can an automation project be deployed?",
      a: "Targeted single-workflow integrations typically deploy within 5 to 10 business days. Multi-department automations are delivered in phased milestones."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-navy">
      <SchemaScript schema={schema} />

      {/* Hero Section */}
      <section className="bg-white text-navy pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200/80 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-800 mb-6 shadow-xs">
            <Workflow className="w-3.5 h-3.5 text-navy" />
            <span>Process &amp; Workflow Automation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-navy tracking-tight leading-[1.1] mb-6">
            Replace Repetitive Work With Automated Workflows.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            For teams running important processes through Forms, Sheets, Excel, email, documents, approvals, and manual follow-ups.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 mb-10 max-w-2xl mx-auto text-left flex items-start space-x-4 shadow-xs">
            <Clock className="w-6 h-6 text-navy flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-bold text-navy mb-1">
                If your team repeats the same digital steps every week, it can be automated.
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Most operational slowdowns happen because high-value employees act as human glue between disconnected tools. We engineer synchronized systems that eliminate the drag.
              </p>
            </div>
          </div>

          <Link
            to="/contact?service=automation"
            onClick={() => trackCtaClick('Show Us the Workflow - Hero', '/ai-automation')}
            className="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-2xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.35)]"
          >
            <span>Show Us the Workflow</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>

          <div className="mt-8 text-xs font-semibold text-slate-400 flex flex-wrap justify-center items-center gap-4">
            <span>Google Workspace &amp; MS 365</span>
            <span>•</span>
            <span>API &amp; Webhook Integration</span>
            <span>•</span>
            <span>Zero Subscription Bloat</span>
          </div>

        </div>
      </section>

      {/* Before vs After Comparison */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              The Operational Shift
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Manual Routine vs. Automated Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full inline-block mb-4">
                Manual Routine
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">Slow &amp; Error-Prone</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✕</span>
                  <span>Form entries copied manually into Excel.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✕</span>
                  <span>Invoices edited by modifying old Word templates.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✕</span>
                  <span>Managers chased via WhatsApp for sign-off.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">✕</span>
                  <span>Reporting numbers calculated by hand each Friday.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xs">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full inline-block mb-4">
                Automated Pipeline
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">Instant &amp; Auditable</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Form trigger updates sheets, CRM, and databases in seconds.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>PDF invoices generated and emailed automatically.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>1-click approve button on WhatsApp or email.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Live dashboard updates in real time with zero manual work.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Common Bottlenecks We Automate */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Processes We Routinely Automate
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bottlenecks.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:border-slate-300 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-accent mb-3" />
                <h3 className="font-extrabold text-navy text-base mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Step Method */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              How We Engineer Your Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodology.map((m) => (
              <div key={m.step} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                <span className="text-2xl font-extrabold text-slate-300 font-mono block mb-1">{m.step}</span>
                <h3 className="font-bold text-navy text-base mb-1">{m.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Accordion FAQ */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-navy">
                      {faq.q}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-navy border border-slate-200">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Close */}
      <section className="py-20 md:py-28 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Show Us the Repetitive Process. We Will Engineer the System.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-10">
            Tell us which tools you currently use and where tasks slow down. We will provide a clean automation plan.
          </p>
          <Link
            to="/contact?service=automation"
            onClick={() => trackCtaClick('Show Us the Workflow - Final CTA', '/ai-automation')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-2xl font-extrabold text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.35)]"
          >
            <span>Show Us the Workflow</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;
