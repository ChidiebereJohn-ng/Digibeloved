import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown,
  Users, 
  Briefcase, 
  Building,
  ShieldCheck,
  Zap,
  Lock,
  XCircle,
  FileText,
  BarChart3,
  Cpu
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const CorporateAITraining: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "Practical Generative AI Training for Organizations",
        "provider": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "url": "https://digibeloved.com"
        },
        "description": "Customized B2B Generative AI workshops and employee productivity training designed around real operational workflows for corporate and institutional teams.",
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["Onsite", "Online"],
          "location": "Abuja, Nigeria & Global Virtual Delivery"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is this different from generic ChatGPT courses or webinars?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generic classes teach random prompts and novelty demos. DigiBeloved corporate training is built around your organization's actual documents, reports, and workflows. Employees learn structured, repeatable processes they immediately use in their day-to-day job."
            }
          },
          {
            "@type": "Question",
            "name": "Will non-technical employees be able to follow along?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our curriculum requires zero coding knowledge. We teach through practical mental models, visual workflows, and guided hands-on exercises tailored to administrative, research, and operational staff."
            }
          },
          {
            "@type": "Question",
            "name": "How do you address company confidentiality and data privacy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Data privacy and responsible AI governance are central to our training. We teach employees strict guidelines on what data can and cannot be inputted into public AI tools, how to configure privacy toggles, and how to safely utilize enterprise AI solutions."
            }
          }
        ]
      }
    ]
  };

  const programs = [
    {
      tag: "Operations & Admin",
      title: "Generative AI for Workplace Productivity",
      desc: "For operations, HR, marketing, and administrative teams. Streamline report drafting, memo composition, email synthesis, and meeting documentation without losing human tone.",
      focus: ["Structured prompt frameworks", "Document synthesis & summarization", "Meeting action extraction", "Email & communication workflows"]
    },
    {
      tag: "Research & Analytics",
      title: "Applied AI for Research & Data Teams",
      desc: "For research leads, M&E officers, and policy analysts. Accelerate literature reviews, synthesize multi-document findings, and structure survey analysis safely.",
      focus: ["Literature scanning with NotebookLM", "Qualitative thematic extraction", "Validating AI numerical calculations", "Ethical citation & verification"]
    },
    {
      tag: "Process Automation",
      title: "AI Automation for Business Operations",
      desc: "For team managers and process leads. Combine AI with spreadsheets, forms, and email to automate status updates, approval alerts, and client follow-ups.",
      focus: ["Connecting AI with Sheets & Excel", "Automated email parsing", "Template generation at scale", "Human-in-the-loop review gates"]
    },
    {
      tag: "Leadership",
      title: "AI Strategy & Governance for Executives",
      desc: "For C-suite, directors, and department heads. Separate AI hype from high-ROI operational opportunities, evaluate vendor solutions, and set internal data security policies.",
      focus: ["Assessing AI operational ROI", "Data governance & corporate security", "Workforce transformation roadmaps", "Procurement & vendor evaluation"]
    }
  ];

  const deliveryOptions = [
    {
      icon: Building,
      title: "Onsite Intensive Labs",
      location: "Abuja, Lagos & Across Nigeria",
      desc: "Full-day or half-day interactive workshops conducted directly at your office or retreat venue with guided hands-on exercises."
    },
    {
      icon: Users,
      title: "Virtual Interactive Cohorts",
      location: "Global Distributed Teams",
      desc: "Live, screen-share workshops for hybrid or distributed teams globally, with recorded walkthroughs and real-time exercise feedback."
    },
    {
      icon: Briefcase,
      title: "Executive Strategy Briefings",
      location: "Boardroom & Leadership Teams",
      desc: "Condensed, high-impact sessions for leadership to align on operational priorities, risk management, and vendor procurement policies."
    }
  ];

  const faqs = [
    {
      q: "How is this different from generic ChatGPT courses or webinars?",
      a: "Generic classes teach random prompts, poem writing, and novelty demos. DigiBeloved corporate training is built around your organization's actual documents, reports, and workflows. Employees learn structured, repeatable processes they immediately apply to their daily responsibilities."
    },
    {
      q: "Will non-technical staff be able to follow along comfortably?",
      a: "Yes, 100%. Our curriculum requires zero coding knowledge. We teach through intuitive mental models, visual workflows, and step-by-step hands-on exercises tailored specifically for administrative, operational, and research staff."
    },
    {
      q: "Can we use our actual company documents during the training exercises?",
      a: "Yes. Under mutual Non-Disclosure Agreements (NDAs), we design training exercises around your real document structures, reports, and templates so employees see immediate relevance to their job."
    },
    {
      q: "How do you address company confidentiality and data privacy?",
      a: "Data privacy and responsible AI governance are central to every session. We instruct staff on what data can and cannot be inputted into public AI tools, how to configure privacy toggles, and how to safely utilize enterprise AI solutions."
    },
    {
      q: "What is the recommended cohort size?",
      a: "For optimal hands-on interaction and exercise feedback, we recommend cohort sizes of 10 to 30 participants per session. Larger organizations can schedule consecutive departmental cohorts."
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
            <span className="text-white">Corporate Capability Building</span>
            <span className="text-slate-500">•</span>
            <span className="text-accent">Onsite &amp; Virtual Global Delivery</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Practical AI Training Built <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white">
              Around Your Team's Work
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Help your employees use Generative AI productively, responsibly, and in real operational workflows — not just memorize novelty prompts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact?service=training"
              onClick={() => trackCtaClick('Request Corporate AI Training - Hero', '/ai-training-for-organizations')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-2xl font-bold text-base hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.25)] group"
            >
              <span>Request Corporate AI Training</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/15 px-8 py-4 rounded-2xl font-semibold text-base transition-all"
            >
              <span>View Training Case Study</span>
            </Link>
          </div>

          {/* Value Props Row */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Zero Coding Required</p>
                <p className="text-slate-400 text-xs">Tailored for non-technical staff</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Real Workplace Workflows</p>
                <p className="text-slate-400 text-xs">Trained on actual team documents</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold">Strict Data Privacy</p>
                <p className="text-slate-400 text-xs">Prevent confidential leaks</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison: Generic Seminars vs DigiBeloved Training */}
      <section className="py-20 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-2xs">
              The Corporate Reality
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Why Most AI Workshops Fail To Produce ROI
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Organizations waste training budgets when sessions are disconnected from actual departmental responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Generic Seminar Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-red-200/70 shadow-2xs relative">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-full mb-6">
                <XCircle className="w-3.5 h-3.5" />
                <span>Generic Prompt Seminars</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                What Fails to Stick
              </h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3 mt-0.5">✕</span>
                  <span><strong>Theoretical prompt tricks:</strong> Writing poems or generating images that have zero connection to daily tasks.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3 mt-0.5">✕</span>
                  <span><strong>Jargon overload:</strong> Non-technical administrative staff feel intimidated and disengage.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3 mt-0.5">✕</span>
                  <span><strong>Data security risks:</strong> Employees accidentally copy-paste proprietary client data into public models.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-3 mt-0.5">✕</span>
                  <span><strong>No follow-through:</strong> Tools are abandoned within a week of the workshop ending.</span>
                </li>
              </ul>
            </div>

            {/* DigiBeloved Training Card */}
            <div className="bg-[#07152E] text-white p-8 sm:p-10 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-accent uppercase tracking-wider bg-white/10 border border-white/15 px-3 py-1 rounded-full mb-6">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>The DigiBeloved Method</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Workflow-Anchored Training
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Document-based exercises:</strong> Staff learn using their team's real memos, spreadsheets, and reporting templates.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Intuitive mental models:</strong> Accessible, step-by-step guidance tailored for non-technical employees.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Strict governance:</strong> Clear corporate SOPs, privacy toggles, and safe usage guardrails established on day one.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Documented SOPs:</strong> Participants leave with tailored prompt handbooks and recorded walkthroughs.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Workshop Modules - Azuro Style Bento Grid */}
      <section className="py-20 md:py-28 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Curriculum Tracks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Tailored Programs for Your Departments
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Customized around your industry, team sizes, current skill levels, and operational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 hover:bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 hover:border-slate-300 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy bg-white border border-slate-200 px-3 py-1 rounded-full">
                      {prog.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-accent-hover transition-colors">
                    {prog.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {prog.desc}
                  </p>

                  <div className="space-y-2 mb-8">
                    {prog.focus.map((item, fi) => (
                      <div key={fi} className="flex items-center text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/70 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    Interactive Hands-On Lab
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

      {/* Delivery Formats */}
      <section className="py-20 md:py-28 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3 shadow-2xs">
              Delivery Options
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Flexible Formats for Any Team
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Designed to fit your corporate schedule without causing operational downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-2xs text-center flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-navy/5 border border-navy/10 flex items-center justify-center text-navy mx-auto mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-accent-hover uppercase tracking-wider block mb-1">
                      {opt.location}
                    </span>
                    <h3 className="text-lg font-bold text-navy mb-3">
                      {opt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {opt.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-navy">
                    Customized Cohorts
                  </div>
                </div>
              );
            })}
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
            Equip Your Organization
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Build Practical AI Capability Inside Your Team
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
            Tell us about your team size, participant roles, and target operational outcomes. We will prepare a tailored proposal and syllabus.
          </p>
          <Link
            to="/contact?service=training"
            onClick={() => trackCtaClick('Request Corporate AI Training - Final CTA', '/ai-training-for-organizations')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)] group"
          >
            <span>Request Corporate AI Training</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CorporateAITraining;
