import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, Clock, Users, Sparkles, MessageSquare, Code, Laptop, Smartphone, Database, Rocket } from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const problemStats = [
  {
    metric: "🔥 Doubled Year-Over-Year",
    detail: "Demand for AI skills on Upwork more than doubled globally in 2025.",
  },
  {
    metric: "📊 90% vs 9% Gap",
    detail: "90% of organizations use AI, but only 9% have teams who can build custom solutions with it.",
  },
  {
    metric: "💼 Universal Integration",
    detail: "AI is now embedded in finance, healthcare, retail, logistics, and education sectors.",
  },
  {
    metric: "🚀 12 Million New Jobs",
    detail: "12 million new technical builder roles are being created—going exclusively to builders.",
  },
];

const curriculum = [
  {
    week: "WEEK 1",
    icon: Laptop,
    title: "Introduction to Software Engineering & System Design",
    subtitle: "Stop thinking like a user. Start thinking like a builder.",
    items: [
      "How software systems work and why architecture matters",
      "Where AI fits in modern software design",
      "The mindset shift: consumer to creator",
    ],
  },
  {
    week: "WEEK 2",
    icon: Code,
    title: "Context Engineering & Foundations of Software Design",
    subtitle: "The skill most AI users will never learn.",
    items: [
      "What Context Engineering is and why it's a software builder's superpower",
      "How to instruct AI precisely to build exactly what you want",
      "Foundations of software structure and design thinking",
    ],
  },
  {
    week: "WEEK 3",
    icon: Sparkles,
    title: "Exploring the Agentic IDE",
    subtitle: "Your new workspace. Your unfair advantage.",
    items: [
      "Setting up and navigating an Agentic Coding Environment",
      "Using AI agents to write, test, and debug code automatically",
      "Building and launching your first functional mini-project",
    ],
  },
  {
    week: "WEEK 4",
    icon: Database,
    title: "Build Your First Real Project",
    subtitle: "AI-Native Websites & Custom CMS—live on the internet.",
    items: [
      "Building a fully functional, AI-optimized website from scratch",
      "Integrating a custom Content Management System (CMS)",
      "Deploying the project live, client-ready, and optimized for search bots",
    ],
  },
  {
    week: "WEEK 5",
    icon: Smartphone,
    title: "Android Apps & Monetization Strategy",
    subtitle: "Build an app. Sell an app.",
    items: [
      "Building a working Android application using AI agent tools",
      "Packaging, pricing, and positioning it for target markets",
      "Monetization frameworks for African and global application stores",
    ],
  },
  {
    week: "WEEK 6",
    icon: Rocket,
    title: "Complete Full-Stack AI-Native Solution",
    subtitle: "Build something that solves a real problem, end to end.",
    items: [
      "Full-stack development connecting frontend, backend, database, and AI",
      "Deploying a live working cloud product the world can use immediately",
    ],
  },
  {
    week: "WEEK 7",
    icon: Users,
    title: "Capstone Project (Your Choice)",
    subtitle: "Build what you've always wanted to build.",
    items: [
      "Developing a custom project of choice (app, website, tool, or AI agent)",
      "Mentorship-guided build sessions through to completion",
      "Presenting, launching, and monetizing your custom solution",
    ],
  },
];

const inclusions = [
  "7 weeks of structured, project-based learning",
  "Cohort experience—progress alongside other active builders",
  "DigiBeloved Community access—peer support & accountability",
  "Direct mentorship from the DigiBeloved engineering team",
  "Online access—learn and build from anywhere in the world",
  "Offline hybrid sessions available on request in Abuja",
  "3 hours a week requirement—no burnout, structured timeline",
  "Every week you ship a real, working project live",
  "Full refund guarantee—we deliver or you get your money back",
];

const targetAudience = [
  "You have an idea but don't know how to write raw code to build it.",
  "You want to freelance or get hired in tech without a Computer Science degree.",
  "You're an entrepreneur who wants to build and launch your own tools rapidly.",
  "You're a professional who wants to remain relevant in an AI-dominated economy.",
  "You want to monetize software solutions without relying on expensive developers.",
  "You're a student seeking a practical, sellable tech skill over theoretical papers.",
];

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. This bootcamp is built specifically for complete beginners. The AI agents handle syntax and compilation—you learn to direct, orchestrate, and assemble the software systems.",
  },
  {
    q: "Is this live or self-paced?",
    a: "It is a cohort-based program. We start together, progress as a group, and collaborate over the 7-week curriculum to keep everyone accountable.",
  },
  {
    q: "How much time do I need per week?",
    a: "Just 3 hours per week. That is less time than most people spend scrolling. At the end of these 3 weekly hours, you will have built and shipped actual software.",
  },
  {
    q: "What will I actually build?",
    a: "You will build live AI-optimized websites, custom content management systems, fully working Android apps, a full-stack integrated database application, and a personal capstone project.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "We offer a 100% money-back guarantee. If we don't deliver on the promises of this bootcamp, you get a full refund. No arguments.",
  },
  {
    q: "Is mentorship really included?",
    a: "Yes. You get direct access to the DigiBeloved engineering team for code reviews, architectural advice, and troubleshooting throughout the 7 weeks.",
  },
  {
    q: "Can my organization enroll a group?",
    a: "Yes, we support corporate cohorts. Contact us via email or WhatsApp for custom enterprise and group pricing.",
  },
];

const AIBuilderBootcamp: React.FC = () => {
  useEffect(() => {
    document.title = "AI Builder Bootcamp | Build Real Software With AI | DigiBeloved";
    window.scrollTo(0, 0);
  }, []);

  const enrollmentMsg = "Hello, I want to enroll in the DigiBeloved AI Builder Bootcamp for ₦100,000. Please send me payment details.";
  const inquiryMsg = "Hello, I have a question about the DigiBeloved AI Builder Bootcamp before enrolling.";

  const primaryCTAUrl = `https://wa.me/2348067628656?text=${encodeURIComponent(enrollmentMsg)}`;
  const secondaryCTAUrl = `https://wa.me/2348067628656?text=${encodeURIComponent(inquiryMsg)}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "DigiBeloved AI Builder Bootcamp: Build Real Software With AI",
        "description": "A 7-week cohort-based bootcamp teaching non-programmers to build websites, Android apps, and full-stack software using AI agents and Context Engineering.",
        "provider": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "sameAs": "https://digibeloved.com"
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
    <main className="bg-white min-h-screen text-navy antialiased">
      <SchemaScript schema={schema} />

      {/* Freshness Timestamp & Category Header */}
      <div className="bg-[#092755] border-b border-white/10 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono tracking-wider gap-2">
          <div>
            <span>CATEGORY: </span>
            <span className="text-accent font-bold">
              NON-TECHNICAL AI SOFTWARE DEVELOPMENT TRAINING
            </span>
          </div>
          <div>
            <span>LAST UPDATED: </span>
            <time dateTime="2026-05-27" className="text-accent font-bold">
              Cohort 2026
            </time>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <header className="relative bg-[#092755] text-white pt-24 pb-20 overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy block */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-block bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6">
                Now Enrolling — Next Cohort
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Learn to Build Real Software With AI —{" "}
                <span className="text-accent">No Coding Required</span>.
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-xl">
                In 7 weeks, devoting just 3 hours per week, you will go from complete beginner to someone who can engineer, build, and launch web apps, Android apps, and custom AI tools.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={primaryCTAUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick('AI Builder Bootcamp - Hero Enroll', '/ai-builder-bootcamp')}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-emerald-500 transition-all text-center transform hover:scale-[1.01] shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                >
                  Reserve My Spot — ₦100,000
                </a>
                <a
                  href={secondaryCTAUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick('AI Builder Bootcamp - Hero Inquiry', '/ai-builder-bootcamp')}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-base hover:bg-white hover:text-navy transition-all text-center"
                >
                  Talk to Us First
                </a>
              </div>

              <div className="flex items-center space-x-6 text-xs text-slate-300 font-mono">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5 text-accent" /> 3 hrs/week</span>
                <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-400" /> 100% Refund Guarantee</span>
              </div>
            </div>

            {/* Right Big Four Table block */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[#101F42]/90 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                <h3 className="text-sm font-mono tracking-widest text-accent uppercase mb-4 text-center border-b border-white/10 pb-2">
                  THE BIG FOUR OVERVIEW
                </h3>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-slate-400 block mb-1 uppercase font-bold text-[10px]">1. WHAT IS IT?</span>
                    <span className="text-white font-sans font-semibold">7-Week Cohort AI Builder Bootcamp</span>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-slate-400 block mb-1 uppercase font-bold text-[10px]">2. WHO IS IT FOR?</span>
                    <span className="text-white font-sans font-semibold">Beginners &amp; Professionals seeking to build</span>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-slate-400 block mb-1 uppercase font-bold text-[10px]">3. WHAT COST?</span>
                    <span className="text-accent font-sans font-bold">₦100,000 (100% Refund Policy)</span>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-slate-400 block mb-1 uppercase font-bold text-[10px]">4. HOW IT WORKS</span>
                    <span className="text-white font-sans font-semibold">Register → Cohort → Build → Launch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. THE PROBLEM (Industry Stats) */}
      <section className="py-24 bg-[#EEF3FB] border-b border-[#092755]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4 leading-tight">
              The World Has Changed. <br /> Most People Haven't Caught Up Yet.
            </h2>
            <p className="text-slate-600 text-base">
              Everyone is talking about AI. Very few actually know how to build software and systems with it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problemStats.map((stat, i) => (
              <div
                key={i}
                className="bg-white border border-[#092755]/10 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-navy text-lg font-extrabold mb-3">{stat.metric}</div>
                <p className="text-slate-600 text-xs leading-relaxed">{stat.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#092755]/10 rounded-2xl p-8 max-w-4xl mx-auto text-center shadow-sm">
            <p className="text-base sm:text-lg text-navy font-medium leading-relaxed max-w-3xl mx-auto">
              Most people are using AI merely as a chatbot. Very few know how to build with it. The builders are the ones getting hired, landing high-ticket clients, and launching products. DigiBeloved puts you on the building side.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CURRICULUM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Comprehensive Syllabus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
              7 Weeks. Real Projects. Real Skills.
            </h2>
            <p className="text-slate-600 text-base">
              Every week you build and deploy something. Nothing is theoretical.
            </p>
          </div>

          {/* Timeline / Week-by-Week Accordion Grid */}
          <div className="space-y-6">
            {curriculum.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/40 transition-all hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 pb-3 mb-4 gap-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-navy text-accent flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold font-mono text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full mr-2">
                          {item.week}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-navy inline">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 italic">
                      {item.subtitle}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                    {item.items.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHAT'S INCLUDED */}
      <section className="py-24 bg-[#092755] text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2 block">
              COHORT FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              This Is Not Just a Course. This Is a Complete Builder System.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((inc, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start space-x-3 hover:bg-white/[0.08] transition-all"
              >
                <Check className="w-5 h-5 text-accent mr-1 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 leading-relaxed font-semibold">
                  {inc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO IT'S FOR */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
              You Don't Need to Code. You Need to Want to Build.
            </h2>
            <p className="text-slate-600 text-base">
              This curriculum is designed specifically for creators, founders, and ambitious professionals.
            </p>
          </div>

          <div className="space-y-4">
            {targetAudience.map((target, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center space-x-4"
              >
                <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <p className="text-slate-800 text-sm font-semibold">{target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF (Testimonials & Citations) */}
      <section className="py-24 bg-[#EEF3FB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-navy font-bold text-xs uppercase tracking-widest mb-2 block">
              TESTIMONIALS &amp; REAL RESULTS
            </span>
            <h2 className="text-3xl font-extrabold text-navy">
              Real People. Real Builds. Real Results.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-[#092755]/10 p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                "I came in knowing nothing about software. By Week 4 I had a live website with a CMS running. By Week 7 I had my first paying client. DigiBeloved changed my career trajectory completely."
              </p>
              <div className="font-mono text-xs text-slate-500">
                — <span className="font-bold text-navy">Adaeze O., Lagos</span> | Freelance AI Developer
              </div>
            </div>

            <div className="bg-white border border-[#092755]/10 p-8 rounded-2xl shadow-sm flex flex-col justify-between">
              <p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                "I thought this would be theory with no practice. Every single week we built something real. The mentorship made all the difference."
              </p>
              <div className="font-mono text-xs text-slate-500">
                — <span className="font-bold text-navy">Emeka T., Abuja</span> | Founder, TechStartNG
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING TABLE */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy mb-4">
              One Investment. A Lifetime of Building.
            </h2>
            <p className="text-slate-600 text-sm">
              Clear, transparent pricing. No surprise fees.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm mb-8">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#092755] text-white text-xs border-b border-slate-200 font-mono">
                  <th className="p-4 uppercase font-bold tracking-wider">Plan</th>
                  <th className="p-4 uppercase font-bold tracking-wider">What's Included</th>
                  <th className="p-4 uppercase font-bold tracking-wider">Price (NGN)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                <tr>
                  <td className="p-4 font-bold text-navy text-sm font-sans">
                    DigiBeloved AI Builder Bootcamp
                  </td>
                  <td className="p-4 space-y-1.5 text-xs leading-relaxed font-medium">
                    <div>• Full 7-week cohort experience</div>
                    <div>• Access to developer community</div>
                    <div>• 1-on-1 mentorship &amp; code reviews</div>
                    <div>• 5 live deployed projects</div>
                  </td>
                  <td className="p-4 font-extrabold text-navy text-base font-mono">
                    ₦100,000
                  </td>
                </tr>
                <tr className="bg-slate-50/70">
                  <td className="p-4 font-bold text-slate-600">Time Commitment</td>
                  <td className="p-4 font-medium">3 hours per week</td>
                  <td className="p-4 font-medium">7 weeks duration</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-600">Refund Guarantee</td>
                  <td className="p-4 text-emerald-600 font-bold">Full 100% money back if undelivered</td>
                  <td className="p-4 text-emerald-600 font-bold">✅ 100% Risk-Free</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center text-xs text-slate-500 font-mono">
            * Offline/in-person cohort available on request in Abuja. Contact us for corporate cohorts.
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Answers to common queries about the bootcamp.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm"
              >
                <h3 className="font-bold text-base text-navy mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#092755] rounded-[32px] p-8 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                The Future Belongs to Those Who Build It.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-10 leading-relaxed">
                Every week you wait, someone else is learning to build the solution you've been thinking about. The tools exist. The opportunity is real. ₦100,000. 3 hours a week. 7 weeks.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <a
                  href={primaryCTAUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick('AI Builder Bootcamp - Final Enroll', '/ai-builder-bootcamp')}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-emerald-500 transition-all text-center transform hover:scale-[1.01] shadow-lg"
                >
                  Reserve My Spot — ₦100,000
                </a>
                <a
                  href={secondaryCTAUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCtaClick('AI Builder Bootcamp - Final Inquiry', '/ai-builder-bootcamp')}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-base hover:bg-white hover:text-navy transition-all text-center"
                >
                  I Have a Question First
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="text-[11px] text-slate-400 font-mono flex justify-center items-center space-x-3">
                <span>🔒 Secure Enrollment</span>
                <span>•</span>
                <span>✅ Refund Guaranteed</span>
                <span>•</span>
                <span>🌍 Available Globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AIBuilderBootcamp;
