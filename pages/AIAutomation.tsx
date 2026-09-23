import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  RefreshCw, 
  Clock, 
  FileSpreadsheet, 
  Mail, 
  MessageSquare, 
  Layers, 
  ShieldCheck, 
  Zap,
  Sparkles
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const AIAutomation: React.FC = () => {
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
        "description": "Business process and workflow automation services using Google Workspace, APIs, webhooks, and applied AI for organizations in Nigeria and globally.",
        "areaServed": ["Nigeria", "Global"],
        "serviceType": "Process Automation & System Integration"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What happens if an automated workflow breaks or encounters an error?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We build every workflow with automated error handling and notifications. If an unexpected input occurs, the system logs the incident, sends an immediate alert to your designated admin via email or WhatsApp, and holds the transaction safely without losing data."
            }
          },
          {
            "@type": "Question",
            "name": "Do we have to switch to expensive new software?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Our approach is to connect and optimize the tools your team already uses every day—such as Google Sheets, Excel, Forms, Gmail, WhatsApp Business, Slack, and existing databases—before recommending new platforms."
            }
          },
          {
            "@type": "Question",
            "name": "Will our non-technical staff be able to use the automated system?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We design automations that work silently in the background. Staff continue interacting through familiar interfaces (like submitting a simple form or checking a clean spreadsheet) without needing to understand technical scripts."
            }
          }
        ]
      }
    ]
  };

  const manualBottlenecks = [
    {
      title: "Data Re-Entry & Copy-Pasting",
      desc: "Manually re-typing information from Google Forms, WhatsApp messages, or emails into master spreadsheets and accounting records."
    },
    {
      title: "Weekly & Monthly Report Assembly",
      desc: "Spending hours pulling numbers from disparate files, calculating totals by hand, and pasting them into summary PDFs or slides."
    },
    {
      title: "Multi-Step Approval Chasing",
      desc: "Stalled invoices, purchase orders, or travel requests waiting for managers to check their inbox and manually reply."
    },
    {
      title: "Client Onboarding & Document Generation",
      desc: "Creating agreements, receipts, certificates, or welcome packets by manually editing templates one by one."
    },
    {
      title: "Missed Inquiries & Follow-Ups",
      desc: "Leads, customer requests, or project milestones slipping through the cracks due to lack of automatic status triggers."
    },
    {
      title: "Inventory & Order Reconciliation",
      desc: "Disconnected sales channels leading to delayed dispatch, overselling, and inventory discrepancies between branches."
    }
  ];

  const methodology = [
    { step: "01", name: "Discover", desc: "We interview your operations team to observe the exact tasks that consume their time." },
    { step: "02", name: "Map", desc: "We document the flow of data from initial input to final destination, highlighting friction points." },
    { step: "03", name: "Design", desc: "We architect a streamlined automated pipeline with fail-safes and human approval checkpoints." },
    { step: "04", name: "Build", desc: "We configure the integrations, scripts, API webhooks, and AI data extractors." },
    { step: "05", name: "Validate", desc: "We run edge-case tests, simulating errors and messy inputs to guarantee stability." },
    { step: "06", name: "Deploy", desc: "We launch the workflow in your live environment with zero downtime." },
    { step: "07", name: "Improve", desc: "We monitor performance, refine logic, and ensure staff comfort through full documentation." }
  ];

  return (
    <div className="bg-white min-h-screen text-navy">
      <SchemaScript schema={schema} />

      {/* Hero Section */}
      <section className="bg-[#07152E] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-accent mb-6">
            <Workflow className="w-3.5 h-3.5" />
            <span>Workflow &amp; Process Automation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Replace Repetitive Work With Reliable Automated Workflows
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            For teams running important processes through Forms, Sheets, Excel, email, documents, approvals, and manual follow-ups.
          </p>

          {/* Problem Hook Box */}
          <div className="bg-white/5 border border-accent/30 rounded-2xl p-5 sm:p-6 mb-10 max-w-2xl mx-auto text-left flex items-start space-x-4">
            <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base font-bold text-white mb-1">
                If your team repeats the same digital steps every day or every week, part of that workflow can probably be improved.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Most operational slowdowns aren't caused by lack of effort—they happen because valuable staff spend half their week acting as human glue between disconnected spreadsheets, inboxes, and forms.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact?service=automation"
              onClick={() => trackCtaClick('Show Us the Workflow - Hero', '/ai-automation')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.3)]"
            >
              <span>Show Us the Workflow</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="mt-8 text-xs text-slate-400 flex flex-wrap justify-center items-center gap-4">
            <span>Google Workspace &amp; MS 365</span>
            <span>•</span>
            <span>API &amp; Webhook Integration</span>
            <span>•</span>
            <span>Zero Subscription Bloat</span>
          </div>

        </div>
      </section>

      {/* The Transformation: Before vs After */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
              The Operational Shift
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Before Automation vs. After Automation
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              See what changes when repetitive manual handoffs are converted into a synchronized digital workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Before */}
            <div className="bg-red-50/50 border border-red-200/80 rounded-2xl p-8 text-left">
              <div className="inline-block bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                The Traditional Manual Process
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Fragmented, Slow &amp; Error-Prone
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2.5">✕</span>
                  <span>Customer fills form; staff must notice the email notification.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2.5">✕</span>
                  <span>Data is copy-pasted into an Excel sheet, introducing typing mistakes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2.5">✕</span>
                  <span>Staff drafts customized agreement or invoice by altering old Word docs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2.5">✕</span>
                  <span>Manager is chased via WhatsApp for manual sign-off.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2.5">✕</span>
                  <span>Status is invisible until Friday's manual reporting meeting.</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-8 text-left">
              <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                The DigiBeloved Automated System
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Synchronized, Instant &amp; Auditable
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Submission triggers instant schema validation and centralized logging.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Spreadsheets, CRM, and accounting records update concurrently.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>PDF agreement is generated automatically from validated data.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Manager receives a 1-click approve button on WhatsApp or email.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Live dashboard updates in real time with zero staff intervention.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Bottlenecks We Automate */}
      <section className="py-20 md:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-3">
              Common Use Cases
            </span>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              Processes We Routinely Automate
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              We look for tasks that are digital, repeatable, and rules-based, replacing manual friction with predictable automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manualBottlenecks.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-accent mb-3"></div>
                <h3 className="font-bold text-navy text-base mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology: Discover -> Map -> Design -> Build -> Validate -> Deploy -> Improve */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
              Execution Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              How We Engineer Your Automated System
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              A disciplined, engineering-backed approach to ensure nothing breaks in production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m) => (
              <div key={m.step} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 relative">
                <span className="text-2xl font-extrabold text-slate-300 font-mono block mb-2">{m.step}</span>
                <h3 className="font-bold text-navy text-base mb-1">{m.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reliability & Security */}
      <section className="py-16 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="flex items-start space-x-4">
            <ShieldCheck className="w-8 h-8 text-navy flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-extrabold text-navy mb-2">
                Built for Reliability, Failover &amp; Security
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                Automations shouldn't be fragile black boxes. Every workflow we configure includes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-navy block mb-0.5">Automated Error Alerts:</strong>
                  Instant notification if a third-party service is temporarily down.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-navy block mb-0.5">Audit Trails:</strong>
                  Every automated action is logged with timestamp and transaction ID.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-navy block mb-0.5">Human-in-the-Loop Checkpoints:</strong>
                  Critical financial or sensitive decisions require human approval before dispatch.
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-navy block mb-0.5">Zero Data Exposure:</strong>
                  Credentials and API keys are stored in encrypted environments, never hardcoded.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">Can you connect WhatsApp Business to our spreadsheets?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes. We regularly connect official WhatsApp Business APIs to Google Sheets, CRMs, or internal tools to send automated payment receipts, order notifications, and status alerts.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">How long does an automation project take to launch?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Focused workflows (such as form-to-document or notification pipelines) typically deploy within 5 to 10 business days. Larger multi-system orchestrations are delivered in phased milestones.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">What if our process changes in the future?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We document every workflow cleanly so your internal team understands the logic. We also provide handover documentation and ongoing support packages for adjustments as your team scales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Show Us the Repetitive Process. We Will Engineer the System.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Describe the tools you currently use, where the bottlenecks occur, and your timeline. We will help map the most reliable automated solution.
          </p>
          <Link
            to="/contact?service=automation"
            onClick={() => trackCtaClick('Show Us the Workflow - Final CTA', '/ai-automation')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-xl font-extrabold text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)]"
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
