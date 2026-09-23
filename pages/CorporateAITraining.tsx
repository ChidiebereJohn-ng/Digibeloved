import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  BookOpen, 
  BarChart3, 
  Workflow, 
  Sparkles,
  Lock,
  Building
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const CorporateAITraining: React.FC = () => {
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
      title: "Generative AI for Workplace Productivity",
      desc: "For operations, HR, marketing, and administrative teams. Streamline report drafting, memo composition, email synthesis, and meeting documentation without sacrificing brand voice.",
      topics: ["Structured prompt frameworks", "Document synthesis & summarization", "Meeting action-item extraction", "Email & communication workflows"]
    },
    {
      title: "Applied AI for Research & Data Analysis",
      desc: "For research leads, M&E officers, and policy analysts. Accelerate literature reviews, synthesize multi-document findings, and structure survey analysis safely.",
      topics: ["Deep literature scanning with NotebookLM", "Qualitative thematic extraction", "Validating AI numerical calculations", "Ethical citation & source verification"]
    },
    {
      title: "AI Automation for Business Operations",
      desc: "For team managers and process leads. Combine AI with spreadsheets, forms, and email to automate status updates, approval alerts, and client follow-ups.",
      topics: ["Connecting AI with Google Sheets & Excel", "Automated email parsing", "Template generation at scale", "Human-in-the-loop review gates"]
    },
    {
      title: "AI Strategy for Executives & Decision Makers",
      desc: "For C-suite, directors, and department heads. Separate AI hype from high-ROI operational opportunities, evaluate vendor solutions, and set internal governance policies.",
      topics: ["Assessing AI operational ROI", "Data governance & corporate security", "Workforce transformation roadmaps", "Procurement & vendor evaluation"]
    }
  ];

  return (
    <div className="bg-white min-h-screen text-navy">
      <SchemaScript schema={schema} />

      {/* Hero Section */}
      <section className="bg-[#07152E] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-accent mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Organizational Capability Building</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Practical Generative AI Training Built Around Your Team's Work
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            Help your employees use AI productively, responsibly, and in real workflows — not just learn prompts.
          </p>

          {/* Problem Hook Box */}
          <div className="bg-white/5 border border-accent/30 rounded-2xl p-5 sm:p-6 mb-10 max-w-2xl mx-auto text-left flex items-start space-x-4">
            <Users className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base font-bold text-white mb-1">
                Your employees are already experimenting with AI. Now give them structured direction.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Without organizational guidance, employees use AI superficially, risk leaking confidential company data, or abandon tools after receiving generic outputs. We build internal capability tailored directly to your team's everyday tasks.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact?service=training"
              onClick={() => trackCtaClick('Request Corporate AI Training - Hero', '/ai-training-for-organizations')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.3)]"
            >
              <span>Request Corporate AI Training</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="mt-8 text-xs text-slate-400 flex flex-wrap justify-center items-center gap-4">
            <span>Onsite in Abuja &amp; Nigeria</span>
            <span>•</span>
            <span>Virtual Global Interactive Cohorts</span>
            <span>•</span>
            <span>Role-Specific Exercises</span>
          </div>

        </div>
      </section>

      {/* The Problem with Generic AI Training */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
              The Corporate Reality
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Why Most Corporate AI Workshops Fail
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Organizations waste training budgets when sessions are disconnected from actual departmental responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80">
              <span className="text-red-500 font-bold text-lg block mb-2">01. Theoretical Prompt Demos</span>
              <h3 className="font-bold text-navy text-base mb-2">Cool Tricks, Zero Application</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trainers demonstrate writing poems or generating novelty images, leaving staff with zero clarity on how to draft a compliance memo or verify donor figures.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80">
              <span className="text-red-500 font-bold text-lg block mb-2">02. Non-Technical Staff Left Behind</span>
              <h3 className="font-bold text-navy text-base mb-2">Jargon Overload</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sessions packed with technical terminology intimidate administrative and operational employees, reducing adoption rather than empowering them.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80">
              <span className="text-red-500 font-bold text-lg block mb-2">03. Ignored Privacy &amp; Governance</span>
              <h3 className="font-bold text-navy text-base mb-2">Severe Compliance Risks</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Staff copy-paste sensitive customer lists, proprietary proposals, or financial statements into public LLMs without understanding security implications.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Training Modules */}
      <section className="py-20 md:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-3">
              Workshop Curriculum
            </span>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              Tailored Programs for Your Organization
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              We customize the curriculum around your industry, team sizes, current skill levels, and target operational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((prog, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">{prog.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{prog.desc}</p>
                  
                  <span className="text-xs font-bold text-navy uppercase tracking-wider block mb-3">Key Focus Areas:</span>
                  <ul className="space-y-2 mb-6">
                    {prog.topics.map((t, ti) => (
                      <li key={ti} className="flex items-center text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>Interactive Hands-On Lab</span>
                  <span className="text-accent bg-navy px-2.5 py-1 rounded-md">B2B Customized</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Flexible Delivery Options
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Designed to fit your corporate schedule without causing operational downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Building className="w-8 h-8 text-navy mx-auto mb-3" />
              <h3 className="font-bold text-navy text-base mb-2">Onsite Intensive Workshops</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full-day or half-day practical labs at your company facility in Abuja or across Nigeria.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Users className="w-8 h-8 text-navy mx-auto mb-3" />
              <h3 className="font-bold text-navy text-base mb-2">Virtual Interactive Cohorts</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Live, screen-share workshops for hybrid or distributed teams globally across multiple time zones.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Briefcase className="w-8 h-8 text-navy mx-auto mb-3" />
              <h3 className="font-bold text-navy text-base mb-2">Executive Strategy Briefings</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Condensed, high-impact sessions for leadership teams to establish policy and prioritize investment.
              </p>
            </div>
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
              <h3 className="text-base font-bold text-navy mb-2">What is the ideal group size for an organizational workshop?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                For optimal hands-on interaction and exercise feedback, we recommend cohort sizes of 10 to 30 participants per workshop session. Larger organizations can schedule consecutive departmental sessions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">Can we use our actual company documents during the training?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes. Under mutual Non-Disclosure Agreements, we design training exercises around your real document structures, reports, and templates so employees see immediate, undeniable relevance to their job.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">How do we get started?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Submit an enquiry stating your team size, participant roles, and desired operational outcomes. We will arrange a brief scoping call to propose a tailored workshop outline and quote.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Build Practical AI Capability Inside Your Organization
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Tell us about your team size, participant roles, and target outcomes. We will prepare a customized proposal.
          </p>
          <Link
            to="/contact?service=training"
            onClick={() => trackCtaClick('Request Corporate AI Training - Final CTA', '/ai-training-for-organizations')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-xl font-extrabold text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)]"
          >
            <span>Request Corporate AI Training</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CorporateAITraining;
