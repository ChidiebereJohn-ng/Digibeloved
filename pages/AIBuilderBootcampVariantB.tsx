import React, { useState, useEffect } from 'react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Users, 
  ExternalLink, 
  ChevronDown, 
  Sparkles, 
  Laptop, 
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Calendar,
  MessageCircle
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const AIBuilderBootcampVariantB: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "You Use AI Every Day. Now Learn to Build With It | DigiBeloved Bootcamp";
    window.scrollTo(0, 0);
  }, []);

  const enrollmentMsg = "Hello, I want to enroll in the DigiBeloved AI Builder Bootcamp for ₦100,000. Please send me payment details.";
  const inquiryMsg = "Hello, I have a question about the DigiBeloved AI Builder Bootcamp before enrolling.";

  const primaryCTAUrl = `https://wa.me/2348067628656?text=${encodeURIComponent(enrollmentMsg)}`;
  const secondaryCTAUrl = `https://wa.me/2348067628656?text=${encodeURIComponent(inquiryMsg)}`;

  const curriculumRows = [
    {
      week: "1",
      ship: "Your first system blueprint",
      detail: "Learn how software is structured and where AI fits into modern system design."
    },
    {
      week: "2",
      ship: "Your AI instruction toolkit",
      detail: "Learn to give AI precise instructions so it builds what you actually want (this skill is called context engineering)."
    },
    {
      week: "3",
      ship: "Project 1: Your first working mini-project",
      detail: "Built inside an agentic coding workspace where AI agents write, test and fix code while you direct them."
    },
    {
      week: "4",
      ship: "Project 2: A live website with its own CMS",
      detail: "Online, fully responsive, and ready to show clients or visitors."
    },
    {
      week: "5",
      ship: "Project 3: A working Android app",
      detail: "Built with AI agents, plus a practical plan for packaging, pricing and selling it."
    },
    {
      week: "6",
      ship: "Project 4: A full-stack AI tool",
      detail: "Connected frontend, backend and database, deployed live on the cloud."
    },
    {
      week: "7",
      ship: "Project 5: Your personal capstone",
      detail: "The project you have always wanted to build, with mentor-guided build sessions through to launch."
    }
  ];

  const faqs = [
    {
      q: "Do I need to know how to code?",
      a: "No. The AI agents handle the syntax. You learn to direct them, check their work, and put the pieces together."
    },
    {
      q: "When does it start?",
      a: "You can join anytime. We form cohorts as people enrol, then confirm your start date and session times after you register."
    },
    {
      q: "Is this live or self-paced?",
      a: "It is guided. You work in a small group with scheduled sessions and weekly mentor reviews, so you stay accountable."
    },
    {
      q: "How much time do I need?",
      a: "About 3 hours a week of guided work. Extra practice helps, but it is not required."
    },
    {
      q: "What do I need to join?",
      a: "A laptop or desktop computer and a stable internet connection. After you register, we send the exact setup list."
    },
    {
      q: "Will I need to pay for other tools?",
      a: "We tell you exactly which tools you need before Week 1, and we start with free options wherever possible. You decide before you spend anything."
    },
    {
      q: "What if I miss a session?",
      a: "Tell us, and we will help you catch up through your weekly mentor review so you don't fall behind."
    },
    {
      q: "How is this different from free government or online programmes?",
      a: "Many programmes teach you about AI. This one has you build and launch five real projects, with a mentor reviewing your work, in a small group that keeps you accountable."
    },
    {
      q: "Can I really build an Android app and a full-stack tool in 7 weeks?",
      a: "Yes, with AI doing the heavy coding. These are focused projects that teach you the full process. They are not enterprise systems."
    },
    {
      q: "Will I get a job or clients after this?",
      a: "We can't promise that, and be careful of anyone who does. You will have live projects, a portfolio, and the skill to pitch real work. Getting clients still takes effort on your side."
    },
    {
      q: "How does the refund work?",
      a: "Attend your Week 1 and Week 2 sessions and submit both builds. If you feel the bootcamp is not delivering what we promised, message us on WhatsApp within 7 days after Week 2 and we will process a 100% refund of your ₦100,000. No argument, no awkward questions."
    },
    {
      q: "Can my company enrol a group?",
      a: "Yes. Message us on WhatsApp or email for corporate cohort pricing and customized schedules."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "DigiBeloved AI Builder Bootcamp (Variant B)",
        "description": "In 7 weeks, at 3 hours a week, learn how to build and launch five real projects with AI. No coding background needed.",
        "provider": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "url": "https://digibeloved.com"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Online, Hybrid",
          "duration": "P7W",
          "offers": {
            "@type": "Offer",
            "price": "100000.00",
            "priceCurrency": "NGN",
            "category": "Paid"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen text-navy font-sans antialiased selection:bg-[#FDD412] selection:text-[#092755]">
      <SchemaScript schema={schema} />

      {/* Trust Strip Top Bar */}
      <div className="bg-[#092755] text-slate-300 text-xs py-2.5 px-4 text-center border-b border-white/10 font-medium tracking-wide">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-slate-300">
          <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#FDD412] mr-1.5 animate-pulse" /> Join anytime</span>
          <span>•</span>
          <span>Small groups</span>
          <span>•</span>
          <span>3 hours a week</span>
          <span>•</span>
          <span>Learn online from anywhere</span>
          <span>•</span>
          <span className="text-emerald-400 font-semibold">100% Refund guarantee</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <header className="relative bg-[#092755] text-white pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-[#092755]/20">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-block bg-white/10 border border-[#FDD412]/30 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#FDD412] uppercase mb-6 shadow-sm">
            DigiBeloved AI Builder Bootcamp
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            You use AI every day. <br />
            <span className="text-[#FDD412]">Now learn to build with it.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-light mb-10 max-w-3xl mx-auto">
            In 7 weeks, at 3 hours a week, you will build and launch five real projects with AI: a live website with a CMS, an Android app, a full-stack AI tool, and a project of your own choice. No coding background needed. A mentor reviews your work every week. Full refund if we don&apos;t deliver.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 max-w-md mx-auto">
            <a
              href={primaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('AI Builder Bootcamp V2 - Hero Enroll', '/ai-builder-bootcamp/v2')}
              className="bg-[#FDD412] text-[#092755] hover:bg-yellow-400 font-extrabold px-8 py-4 rounded-xl text-base transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Reserve My Spot: ₦100,000</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('AI Builder Bootcamp V2 - Hero WhatsApp', '/ai-builder-bootcamp/v2')}
              className="bg-white/10 hover:bg-white hover:text-[#092755] text-white border border-white/20 font-bold px-6 py-4 rounded-xl text-base transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask us a question on WhatsApp</span>
            </a>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            Join anytime · Small groups · 3 hours a week · Learn online from anywhere · Refund guarantee
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. DOES THIS SOUND LIKE YOU?                                              */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-white border border-[#092755]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Diagnostic Self-Check
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight">
              Does this sound like you?
            </h2>
          </div>

          <div className="space-y-4 mb-10">
            {[
              "You use ChatGPT every day, but you can't point to one thing you have actually built with it.",
              "You have watched the \"make money with AI\" videos, and you still have nothing to show a client or an employer.",
              "You have an app or business idea, and the quotes you get from developers are more than you can spend right now.",
              "You can see that people who build with AI are getting ahead, and you don't want to be left watching."
            ].map((point, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#092755]/10 rounded-2xl p-5 sm:p-6 flex items-start space-x-4 shadow-xs"
              >
                <div className="w-7 h-7 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  →
                </div>
                <p className="text-slate-800 text-sm sm:text-base font-semibold leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* The Core Distinction Callout */}
          <div className="bg-[#092755] text-white rounded-3xl p-8 sm:p-10 shadow-lg text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#FDD412] mb-3">
              Using AI and building with AI are two different skills.
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-3">
              <strong>Using AI gets you answers.</strong> Building with AI gets you a product that someone can open, use, and pay for.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              That second skill is what this bootcamp teaches.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY NOW                                                                */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Market Context
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight mb-4">
              Why now
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              The demand for AI skills is not hype. It shows up in employer surveys, in hiring data and in Nigerian government policy.
            </p>
          </div>

          <div className="space-y-6 mb-10 text-left">
            {/* Employers Data */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base sm:text-lg font-bold text-[#092755]">Employers Globally</h3>
                <a
                  href="https://www.weforum.org/reports/the-future-of-jobs-report-2025/digest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-blue-600 hover:underline flex items-center space-x-1"
                >
                  <span>WEF Report</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                The World Economic Forum&apos;s <em>Future of Jobs Report 2025</em> surveyed over 1,000 employers across 55 economies. It ranks AI and big data as the fastest-growing skills through 2030, and <strong>63% of employers name skill gaps as their biggest barrier to change</strong>.
              </p>
            </div>

            {/* Freelance Hiring Data */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base sm:text-lg font-bold text-[#092755]">Freelance Hiring</h3>
                <a
                  href="https://www.entrepreneur.com/business-news/companies-racing-to-hire-workers-in-demand-ai-skills-upwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-blue-600 hover:underline flex items-center space-x-1"
                >
                  <span>Upwork via Entrepreneur</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Upwork&apos;s 2025 report found <strong>demand for AI skills grew 109% year on year</strong> on its marketplace, against 23% for other in-demand skills. <em>(This is US hiring data, so read it as a global signal, not a promise of income in Nigeria).</em>
              </p>
            </div>

            {/* Nigeria Context */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base sm:text-lg font-bold text-[#092755]">Nigeria: 3MTT &amp; National Initiatives</h3>
                <div className="flex space-x-3 text-xs font-mono font-bold text-blue-600">
                  <a href="https://www.vanguardngr.com/?p=2806863" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                    <span>Vanguard</span>
                    <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                  </a>
                  <a href="https://nairametrics.com/2025/08/28/nigerias-bosun-tijani-joins-elon-musk-sam-altman-on-time100-ai-list" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                    <span>TIME100 AI</span>
                    <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                  </a>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                The federal government&apos;s 3 Million Technical Talent (3MTT) programme aims to train three million Nigerians in technical skills. In January 2026 the Minister of Communications, Innovation and Digital Economy, Dr. Bosun Tijani, said 1.8 million people were in its pipeline. He was named to the 2025 TIME100 AI list.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Some of the skills 3MTT teaches are tech-enabled skills that improve existing roles, without involving building technology. <strong>This bootcamp is different: you build and launch the software yourself.</strong>
              </p>
            </div>
          </div>

          <div className="text-center text-xs text-slate-400 font-mono">
            * These figures describe the job market. They do not promise any individual&apos;s income.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT YOU WILL BUILD                                                    */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-24 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-white border border-[#092755]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Tangible Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight mb-3">
              What you will build
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">
              Every week ends with something you can show. Five of these weeks end with a live project.
            </p>
          </div>

          <div className="bg-white border border-[#092755]/15 rounded-3xl overflow-hidden shadow-md mb-8">
            <div className="divide-y divide-slate-100">
              {curriculumRows.map((row, idx) => (
                <div key={idx} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left hover:bg-slate-50/70 transition-colors">
                  <div className="sm:w-24 shrink-0">
                    <span className="text-xs font-mono font-bold uppercase text-[#092755] bg-slate-100 px-3 py-1 rounded-full inline-block">
                      Week {row.week}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#092755] mb-1">
                      {row.ship}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {row.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 font-bold text-sm sm:text-base max-w-2xl mx-auto">
            By Week 7 you leave with a portfolio of live projects, not a folder of notes.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PROJECT IDEAS FOR YOUR CAPSTONE                                        */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight mb-3">
              Project ideas for your capstone
            </h2>
            <p className="text-slate-600 text-base">
              You choose what to build in Week 7. Here are the kinds of projects our builders can pick:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "A website with its own CMS for a small business, church or personal brand",
              "A sales or inventory tracker for a shop",
              "A school, church or community admin tool",
              "A personal finance or budgeting app",
              "An AI assistant that answers common customer questions for a business"
            ].map((idea, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">{idea}</span>
              </div>
            ))}
            <div className="bg-[#092755] text-white rounded-2xl p-5 flex items-center justify-center text-center">
              <span className="text-sm font-bold text-[#FDD412]">Have a different idea? Bring it. The capstone is yours.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHAT CHANGES FOR YOU                                                   */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-left">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight">
              What changes for you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#092755]/10 rounded-2xl p-7 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#092755] bg-slate-100 px-3 py-1 rounded-full mb-3 inline-block">
                  Freelancers &amp; Solopreneurs
                </span>
                <h3 className="text-lg font-bold text-[#092755] mb-2">If you want to freelance:</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You finish with live projects you can show a client. We can&apos;t promise income, and nobody honest can. We promise you will have real work to point to.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#092755]/10 rounded-2xl p-7 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#092755] bg-slate-100 px-3 py-1 rounded-full mb-3 inline-block">
                  Founders &amp; Business Owners
                </span>
                <h3 className="text-lg font-bold text-[#092755] mb-2">If you run a business or have an idea:</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You build your own tool or first version yourself, instead of waiting on a developer you cannot yet afford.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#092755]/10 rounded-2xl p-7 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#092755] bg-slate-100 px-3 py-1 rounded-full mb-3 inline-block">
                  Working Professionals
                </span>
                <h3 className="text-lg font-bold text-[#092755] mb-2">If you are a professional:</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You gain a skill you can use at work to build internal tools, automate tasks, and stay useful as AI changes your industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HOW IT WORKS                                                           */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-slate-100 px-3 py-1.5 rounded-full inline-block mb-3">
              6-Step Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left mb-10">
            {[
              { num: "1", title: "Reserve your spot", desc: "Click Reserve My Spot and complete your payment of ₦100,000." },
              { num: "2", title: "We schedule you", desc: "Cohorts form as people enrol. After you register, we confirm your start date and your weekly session times with you personally." },
              { num: "3", title: "Get set up", desc: "Before Week 1, we send you a simple setup list so your computer and tools are ready." },
              { num: "4", title: "Build weekly", desc: "About 3 hours a week of guided building. Every week you make something real." },
              { num: "5", title: "Get reviewed", desc: "Mentors from DigiBeloved review your work and help you when you get stuck." },
              { num: "6", title: "Launch", desc: "You finish with five live projects, including a capstone you present." }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6">
                <span className="text-xs font-mono font-extrabold text-[#092755] bg-white border border-slate-200 px-2.5 py-1 rounded-md inline-block mb-3">
                  Step {step.num}
                </span>
                <h3 className="text-base font-bold text-[#092755] mb-1.5">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 font-mono text-center max-w-2xl mx-auto">
            You learn alongside other builders, with community support and accountability. Offline hybrid sessions are available on request in Abuja. Companies can ask about corporate cohorts.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. WHO IS BEHIND THIS                                                     */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-left">
          <div className="bg-white border border-[#092755]/10 rounded-3xl p-8 sm:p-10 shadow-sm">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-slate-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Leadership &amp; Faculty
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092755] mb-4">
              Who is behind this
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              DigiBeloved AI Education &amp; Consulting teaches practical AI skills to Nigerians and small businesses.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The bootcamp is led by a practising AI architect who designs and builds websites, apps and AI tools for clients and for his own products. You learn the same methods used on real projects, not classroom exercises.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. OUR GUARANTEE, IN PLAIN WORDS                                          */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-emerald-50 border-2 border-emerald-500/40 rounded-3xl p-8 sm:p-10 shadow-sm text-left">
            <span className="text-xs font-mono font-extrabold uppercase text-emerald-800 bg-emerald-200/70 px-3 py-1 rounded-full mb-3 inline-block">
              100% Risk-Free Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mb-4">
              Our guarantee, in plain words
            </h2>
            <p className="text-sm sm:text-base text-emerald-900 leading-relaxed mb-4">
              We want you to join without worrying about losing your money.
            </p>
            <p className="text-sm sm:text-base text-emerald-900 leading-relaxed font-semibold">
              Attend your Week 1 and Week 2 sessions and submit both builds. If you feel the bootcamp is not delivering what we promised, message us within 7 days after Week 2 and we will refund 100% of your ₦100,000. No argument, no awkward questions.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. THIS IS FOR YOU IF... AND NOT FOR YOU IF...                           */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* For you */}
            <div className="bg-white border-2 border-emerald-500/30 rounded-3xl p-7 shadow-xs">
              <div className="flex items-center space-x-2 text-emerald-700 font-extrabold text-lg mb-4">
                <CheckCircle2 className="w-6 h-6" />
                <span>This is for you if...</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                You will give 3 hours a week for 7 weeks, you want to make things and not just watch videos, and you are willing to ask for help when you are stuck.
              </p>
            </div>

            {/* Not for you */}
            <div className="bg-white border-2 border-rose-500/30 rounded-3xl p-7 shadow-xs">
              <div className="flex items-center space-x-2 text-rose-700 font-extrabold text-lg mb-4">
                <XCircle className="w-6 h-6" />
                <span>This is not for you if...</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                You want money overnight, you will not set aside the weekly time, or you want certificates more than you want working projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. INVESTMENT                                                            */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-[#092755] text-white rounded-3xl p-8 sm:p-12 shadow-xl text-left relative overflow-hidden">
            <span className="text-xs font-mono font-bold text-[#FDD412] uppercase tracking-widest block mb-2">
              Tuition &amp; Inclusions
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-6">
              <span className="text-4xl sm:text-6xl font-black font-mono text-white">
                ₦100,000
              </span>
              <span className="text-sm text-slate-300 font-medium">
                about ₦14,300 a week for 7 weeks
              </span>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl mb-8 space-y-2 text-xs sm:text-sm text-slate-200">
              <div>✓ Full 7-week guided programme</div>
              <div>✓ Mentor reviews of your weekly builds</div>
              <div>✓ Access to the builder community</div>
              <div>✓ Five live deployed projects (including personal capstone)</div>
              <div>✓ 100% money-back guarantee terms apply</div>
            </div>

            <p className="text-xs text-slate-300 mb-6 font-mono">
              After you click Reserve My Spot, you will see how to pay.
            </p>

            <a
              href={primaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('AI Builder Bootcamp V2 - Pricing Reserve', '/ai-builder-bootcamp/v2')}
              className="w-full bg-[#FDD412] text-[#092755] hover:bg-yellow-400 font-extrabold py-4 px-6 rounded-xl text-center text-base transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Reserve My Spot: ₦100,000</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. QUESTIONS PEOPLE ASK BEFORE THEY JOIN                                 */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-white border border-[#092755]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight">
              Questions people ask before they join
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-4.5 font-bold text-sm sm:text-base text-[#092755] flex justify-between items-center transition-colors hover:bg-slate-50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-[#092755]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 py-4 bg-slate-50/50 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FINAL CALL TO ACTION                                                  */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#092755] text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Cohorts form as people enrol, so the best time to join is now.
          </h2>
          <p className="text-base sm:text-lg text-slate-200 mb-8 leading-relaxed">
            In 7 weeks you could still be using AI to chat, or you could have five live projects with your name on them.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href={primaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('AI Builder Bootcamp V2 - Final Reserve', '/ai-builder-bootcamp/v2')}
              className="bg-[#FDD412] text-[#092755] hover:bg-yellow-400 font-extrabold px-8 py-4 rounded-xl text-base transition-all shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Reserve My Spot: ₦100,000</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('AI Builder Bootcamp V2 - Final WhatsApp', '/ai-builder-bootcamp/v2')}
              className="bg-white/10 hover:bg-white hover:text-[#092755] text-white border border-white/20 font-bold px-6 py-4 rounded-xl text-base transition-all flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask us a question on WhatsApp</span>
            </a>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            A real person will reply.
          </div>
        </div>
      </section>

    </div>
  );
};

export default AIBuilderBootcampVariantB;
