import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  ChevronDown, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Download, 
  Smartphone, 
  Laptop, 
  ShieldCheck, 
  Briefcase, 
  UserCheck, 
  Zap, 
  Layers, 
  AlertCircle, 
  XCircle, 
  MessageSquare, 
  Mic, 
  Users, 
  BarChart, 
  HelpCircle, 
  Search, 
  FileSearch, 
  Camera, 
  Check
} from "lucide-react";
import { 
  captureAndPersistUtmParams, 
  buildTrackedUrl, 
  trackPageView, 
  trackCheatCodesViewContent, 
  trackCheatCodesCheckoutClick,
  CHEAT_CODES_CONFIG 
} from "../src/services/metaPixel";

export default function CheatCodesSalesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [checkoutUrl, setCheckoutUrl] = useState<string>(CHEAT_CODES_CONFIG.selarCheckoutUrl);

  useEffect(() => {
    // 1. Set Page Title & Meta Description
    document.title = "7 AI Cheat Codes: Save Hours Every Week & Get Paid | DigiBeloved";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "7 copy-paste AI cheat codes for business owners and job seekers. Save hours every week with free AI tools, then get paid to solve problems for others."
    );

    // 2. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://digibeloved.com/7-ai-cheat-codes");

    // 3. Schema.org Product structured data
    const scriptId = "product-schema-cheat-codes";
    let schemaScript = document.getElementById(scriptId);
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = scriptId;
      schemaScript.setAttribute("type", "application/ld+json");
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "7 AI Cheat Codes Playbook",
        "image": "https://digibeloved.com/cheat-codes-cover.png",
        "description": "7 copy-paste cheat codes for business owners and job seekers. Save hours every week with free AI tools, then get paid to solve problems for others.",
        "brand": {
          "@type": "Brand",
          "name": "DigiBeloved"
        },
        "offers": {
          "@type": "Offer",
          "url": CHEAT_CODES_CONFIG.selarCheckoutUrl,
          "priceCurrency": "USD",
          "price": "10",
          "availability": "https://schema.org/InStock"
        }
      });
      document.head.appendChild(schemaScript);
    }

    // 4. Capture & Persist UTMs across the page
    captureAndPersistUtmParams();

    // 5. Fire Meta Pixel Events on load
    trackPageView("/7-ai-cheat-codes");
    trackCheatCodesViewContent();

    // 6. Build tracked checkout destination
    setCheckoutUrl(buildTrackedUrl(CHEAT_CODES_CONFIG.selarCheckoutUrl));

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = (ctaLocation: string) => {
    trackCheatCodesCheckoutClick(ctaLocation);
    const finalUrl = buildTrackedUrl(CHEAT_CODES_CONFIG.selarCheckoutUrl);
    window.location.href = finalUrl;
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // The 7 Cheat Codes Cards Data (Part 3)
  const cheatCodes = [
    {
      number: "01",
      title: "Stop Typing, Start Talking",
      desc: "Turn a rambling voice note into a clean proposal or email.",
      icon: Mic,
      timeSaved: "Saves 45 mins per proposal",
      paidService: "Voice-note to client proposal formatting"
    },
    {
      number: "02",
      title: "The $2/Day Meeting Assistant",
      desc: "Turn a meeting recording into a to-do list and a follow-up message.",
      icon: Users,
      timeSaved: "Saves 1 hour per meeting",
      paidService: "Executive meeting minutes & action tracker"
    },
    {
      number: "03",
      title: "Show Me, Don't Tell Me",
      desc: "Turn messy numbers into charts anyone can read.",
      icon: BarChart,
      timeSaved: "Saves 2 hours of spreadsheet torture",
      paidService: "SME sales dashboards & visual reporting"
    },
    {
      number: "04",
      title: "Make AI Interview You",
      desc: "Get great results without writing a perfect prompt.",
      icon: HelpCircle,
      timeSaved: "Eliminates blank-screen guesswork",
      paidService: "Custom prompt crafting & AI interview prep"
    },
    {
      number: "05",
      title: "Stop Asking for Compliments",
      desc: "Find the holes in your idea before the market does.",
      icon: Search,
      timeSaved: "Prevents expensive business mistakes",
      paidService: "Idea stress-testing & pitch deck auditing"
    },
    {
      number: "06",
      title: "Drag, Drop, and Test",
      desc: "Understand any confusing document in plain English.",
      icon: FileSearch,
      timeSaved: "Decodes 40-page PDFs in 3 minutes",
      paidService: "Document summarization & contract briefs"
    },
    {
      number: "07",
      title: "Give AI Eyes",
      desc: "Turn photos of handwriting and receipts into clean lists.",
      icon: Camera,
      timeSaved: "Eliminates manual receipt re-typing",
      paidService: "Receipt bookkeeping & digitizing records"
    }
  ];

  // FAQ Data (Part 3)
  const faqs = [
    {
      q: "Do I need to pay for AI tools?",
      a: "No. The guide works with free tools like ChatGPT and Claude. Free plans can have limits, and the book tells you when."
    },
    {
      q: "Do I need to be good with computers?",
      a: "No. Every step is click-by-click, with a screen guide so you never get lost."
    },
    {
      q: "Will I get the file straight away?",
      a: "Yes. You get instant access right after payment. The download link is also sent directly to your email by Selar."
    },
    {
      q: "Can I pay in naira or dollars?",
      a: "Yes. N2,500 in Nigeria, $10 elsewhere, selectable directly at Selar checkout."
    },
    {
      q: "Will this make me money?",
      a: "It will save you time. The guide also shows services people already pay for, but what you earn depends on the work you do and the people you reach. We make no income promises."
    },
    {
      q: "What if the AI tools change?",
      a: "They do change often. The ideas and messages still work, and the buttons may move a little."
    },
    {
      q: "Can I get help doing it?",
      a: "Yes. After you buy, you can book a one-on-one one-hour session with me to build your AI workflow together."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#092755] font-poppins selection:bg-[#FDD412] selection:text-[#092755] pb-24 md:pb-0">
      
      {/* =========================================================================
          TOP HEADER: DigiBeloved Logo (Minimal, high-trust, distraction-free)
         ========================================================================= */}
      <header className="w-full bg-[#092755] border-b border-white/10 py-3.5 px-4 sm:px-6 sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.jpg"
              alt="DigiBeloved Logo"
              width={34}
              height={34}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded object-contain border border-white/20"
            />
            <div className="flex flex-col">
              <span className="text-white font-black tracking-tight text-base sm:text-lg leading-tight">
                DigiBeloved
              </span>
              <span className="text-slate-300 text-[10px] sm:text-xs tracking-wider uppercase font-semibold">
                AI Education &amp; Consulting
              </span>
            </div>
          </Link>

          <div className="flex items-center space-x-2 text-xs font-semibold text-[#FDD412] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">20-Page Action Guide</span>
            <span className="sm:hidden">Instant PDF</span>
          </div>
        </div>
      </header>

      {/* =========================================================================
          1. HERO (Top of the page)
         ========================================================================= */}
      <section className="bg-gradient-to-b from-[#092755] via-[#092755] to-[#0d3470] text-white pt-10 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Soft atmospheric gradient accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDD412]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EEF3FB]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Hero Copy (Left) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Urgency / Format Pill */}
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-[#FDD412]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#FDD412]">
              <span className="w-2 h-2 rounded-full bg-[#FDD412] animate-pulse" />
              <span>THE 7 AI CHEAT CODES ACTION GUIDE</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Save Hours Every Week With AI. Then Get Paid to Solve Problems for Others.
            </h1>

            {/* Subhead */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              7 copy-paste cheat codes for business owners and job seekers. No coding. No tech words. Just step-by-step screens you can follow today.
            </p>

            {/* Bullets under the subhead */}
            <div className="space-y-2.5 max-w-md mx-auto lg:mx-0 text-left pt-2">
              <div className="flex items-center space-x-3 text-sm sm:text-base font-semibold text-white">
                <CheckCircle2 className="w-5 h-5 text-[#FDD412] flex-shrink-0" />
                <span>Instant PDF download after payment</span>
              </div>
              <div className="flex items-center space-x-3 text-sm sm:text-base font-semibold text-white">
                <CheckCircle2 className="w-5 h-5 text-[#FDD412] flex-shrink-0" />
                <span>Works with free AI tools</span>
              </div>
              <div className="flex items-center space-x-3 text-sm sm:text-base font-semibold text-white">
                <CheckCircle2 className="w-5 h-5 text-[#FDD412] flex-shrink-0" />
                <span>Read it on your phone or laptop</span>
              </div>
            </div>

            {/* Hero CTA Button */}
            <div className="pt-4 space-y-2.5">
              <button
                type="button"
                onClick={() => handleCheckout("Hero Section")}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#FDD412] hover:bg-yellow-400 text-[#092755] font-black px-8 py-4 sm:py-4.5 rounded-2xl shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-base sm:text-lg group"
              >
                <span>GET INSTANT ACCESS: N2,500 / $10</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Under the button (small) */}
              <p className="text-xs text-slate-300 font-medium">
                Secure checkout on Selar. Pay in naira or dollars.
              </p>
            </div>
          </div>

          {/* Hero Book Cover 3D Mockup (Right) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group perspective-[1200px]">
              
              {/* Soft ground shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/40 blur-xl rounded-full" />

              {/* 3D Book Container */}
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 ease-out transform group-hover:rotate-y-[-6deg] group-hover:scale-105"
                style={{
                  transform: "rotateY(-12deg) rotateX(4deg)",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Book Spine Simulation Highlight on left edge */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/40 via-white/20 to-transparent z-20 pointer-events-none" />

                {/* Gloss Sheen Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-10 pointer-events-none opacity-60" />

                {/* The actual product cover image */}
                <img
                  src="/cheat-codes-cover.png"
                  alt="7 AI Cheat Codes Playbook Cover - DigiBeloved"
                  width={420}
                  height={420}
                  loading="eager"
                  fetchPriority="high"
                  className="w-72 sm:w-80 md:w-96 h-auto object-cover rounded-xl border border-white/20 block"
                />
              </div>

              {/* Micro badge under mockup */}
              <div className="mt-6 flex items-center justify-center space-x-2 text-xs font-semibold text-slate-300">
                <Smartphone className="w-4 h-4 text-[#FDD412]" />
                <span>Mobile &amp; Laptop Optimized PDF</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. THE PROBLEM
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center space-x-2 bg-rose-50 text-rose-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>The Reality Check</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight leading-tight">
            You are busy. And you know it.
          </h2>

          <div className="prose prose-lg text-slate-700 space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              You write the same emails again and again. Your meetings end with nobody sure who does what. Your sales are in a notebook, or a messy Excel sheet you avoid opening.
            </p>

            <div className="bg-[#EEF3FB] border-l-4 border-[#092755] p-5 rounded-r-2xl my-6">
              <p className="font-semibold text-[#092755] m-0">
                Meanwhile, people around you are doing in minutes what takes you hours. Same free tools. Same phone. The only difference is they know where to click and what to paste.
              </p>
            </div>

            <p className="font-bold text-slate-900">
              That gap costs you time every single week. And it keeps growing.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. THE SHIFT
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#EEF3FB] border-b border-slate-200/60">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center space-x-2 bg-[#092755] text-[#FDD412] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>A Simpler Way</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight leading-tight">
            You do not need to learn "prompt writing".
          </h2>

          <div className="prose prose-lg text-slate-700 space-y-5 text-base sm:text-lg leading-relaxed">
            <p>
              There is a simpler way. You copy a ready-made message, paste it into a free AI tool, and get the result. That is it.
            </p>
            <p className="font-semibold text-[#092755]">
              This guide gives you seven of them, each with a screen guide so you never get lost.
            </p>
          </div>

          {/* 3-Step Visual Mechanism */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#092755] text-[#FDD412] font-black flex items-center justify-center mx-auto text-sm">
                1
              </div>
              <h3 className="font-bold text-sm text-[#092755]">Copy</h3>
              <p className="text-xs text-slate-600">Pick the exact pre-written cheat code message.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#092755] text-[#FDD412] font-black flex items-center justify-center mx-auto text-sm">
                2
              </div>
              <h3 className="font-bold text-sm text-[#092755]">Paste</h3>
              <p className="text-xs text-slate-600">Paste it into free ChatGPT or Claude on your phone or PC.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#092755] text-[#FDD412] font-black flex items-center justify-center mx-auto text-sm">
                3
              </div>
              <h3 className="font-bold text-sm text-[#092755]">Done</h3>
              <p className="text-xs text-slate-600">Get clean proposals, charts, or minutes in seconds.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. WHAT IS INSIDE (The 7 Cheat Codes Cards)
         ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#092755] bg-[#FDD412]/30 px-3 py-1 rounded-full">
              Full Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight leading-tight">
              7 cheat codes. 7 time-savers. 7 ways to get paid.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Each cheat code comes with click-by-click screenshots, exact copy-paste prompts, and two real monetizable service angles.
            </p>
          </div>

          {/* Cards Grid in Brand Navy & Yellow */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {cheatCodes.map((code) => {
              const IconComp = code.icon;
              return (
                <div
                  key={code.number}
                  className="bg-[#092755] text-white rounded-2xl p-6 sm:p-7 border border-[#092755] shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Number Badge & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FDD412] text-[#092755] font-black text-base shadow-sm">
                        {code.number}
                      </span>
                      <div className="flex items-center space-x-1 text-slate-300 text-xs font-medium bg-white/10 px-3 py-1 rounded-full">
                        <IconComp className="w-3.5 h-3.5 text-[#FDD412]" />
                        <span>Cheat Code #{code.number}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FDD412] transition-colors">
                      {code.title}
                    </h3>

                    {/* Exact copy description from Part 3 */}
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                      {code.desc}
                    </p>
                  </div>

                  {/* Micro Footer tags */}
                  <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs">
                    <div className="flex items-center text-[#FDD412] font-semibold">
                      <Zap className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                      <span>{code.timeSaved}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Briefcase className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-slate-400" />
                      <span><strong>Get Paid Idea:</strong> {code.paidService}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section CTA */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => handleCheckout("Cheat Codes Grid")}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#092755] hover:bg-[#0d3470] text-[#FDD412] font-black px-8 py-4 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] text-base"
            >
              <span>GET INSTANT ACCESS: N2,500 / $10</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-slate-500 mt-2">
              Secure checkout on Selar. Pay in naira or dollars.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. TWO PATHS: PICK YOURS
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#EEF3FB] border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#092755] bg-white px-3 py-1 rounded-full border border-slate-200">
              Target Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight leading-tight">
              Whether you run a business or want one, there is a cheat code for you.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Path 1: For Business Owners */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#092755] text-[#FDD412] flex items-center justify-center mb-5">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Path 1
                </span>
                <h3 className="text-2xl font-bold text-[#092755] mb-4">
                  For Business Owners
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  Get hours back every week. Faster proposals. Clearer sales numbers. Fewer missed follow-ups. Safer decisions on quotes and contracts.
                </p>

                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>Send polished proposals in 10 minutes instead of stalling for days.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>Stop manually summarizing meetings and chasing staff for action points.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>Understand supplier agreements and dense PDFs without calling an expensive lawyer first.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#EEF3FB] rounded-xl p-3 text-xs font-semibold text-[#092755] text-center">
                Outcome: 5 to 10 hours saved every single week
              </div>
            </div>

            {/* Path 2: For Job Seekers */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FDD412] text-[#092755] flex items-center justify-center mb-5 font-black">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Path 2
                </span>
                <h3 className="text-2xl font-bold text-[#092755] mb-4">
                  For Job Seekers
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  Learn a skill clients and employers can see. Every chapter shows you one service people already pay for, like meeting notes, voice note to email, CV reviews and shop dashboards.
                </p>

                <ul className="space-y-3 text-sm text-slate-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>Offer executive meeting transcription &amp; minutes as a remote freelance service.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>Help local shop owners visualize their weekly sales from paper ledgers.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>Rewrite CVs with targeted AI interview questions to help job candidates get hired.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#092755] text-[#FDD412] rounded-xl p-3 text-xs font-semibold text-center">
                Outcome: Real, tangible services you can charge for immediately
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. WHAT YOU GET
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#092755] bg-[#FDD412]/30 px-3 py-1 rounded-full">
              Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight leading-tight">
              What you get
            </h2>
          </div>

          {/* Deliverables Card */}
          <div className="bg-[#EEF3FB] border border-[#092755]/15 rounded-3xl p-6 sm:p-10 text-left space-y-4 shadow-sm">
            
            <div className="space-y-3.5">
              <div className="flex items-start space-x-3.5">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg font-bold text-[#092755]">
                  The 20-page action guide, 7 AI Cheat Codes (PDF)
                </span>
              </div>

              <div className="flex items-start space-x-3.5">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg font-medium text-slate-800">
                  7 screen guides, so you always know where to click
                </span>
              </div>

              <div className="flex items-start space-x-3.5">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg font-medium text-slate-800">
                  7 copy-paste messages, ready to use
                </span>
              </div>

              <div className="flex items-start space-x-3.5">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg font-medium text-slate-800">
                  7 "Get Paid For It" ideas, one for business owners and one for job seekers each
                </span>
              </div>

              <div className="flex items-start space-x-3.5">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg font-medium text-slate-800">
                  Your first paid job in 3 steps
                </span>
              </div>

              <div className="flex items-start space-x-3.5">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg font-bold text-emerald-700">
                  Instant download. Yours to keep.
                </span>
              </div>
            </div>

          </div>

          {/* Button */}
          <div className="space-y-2.5">
            <button
              type="button"
              onClick={() => handleCheckout("What You Get Section")}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#FDD412] hover:bg-yellow-400 text-[#092755] font-black px-8 py-4 sm:py-4.5 rounded-2xl shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.98] text-base sm:text-lg"
            >
              <span>GET INSTANT ACCESS: N2,500 / $10</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-slate-500 font-medium">
              Secure checkout on Selar. Pay in naira or dollars.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. WHO THIS IS FOR, AND WHO IT IS NOT FOR
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#EEF3FB] border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#092755] bg-white px-3 py-1 rounded-full border border-slate-200">
              Clear Filter
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight leading-tight">
              Who this is for, and who it is not for
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* For You If */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/30 shadow-xs space-y-4">
              <div className="inline-flex items-center space-x-2 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>For You If</span>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-700">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>You run a small business and want hours back every week.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>You are looking for work and want a proven skill to offer paying clients.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>You have heard about AI but do not know where to start without feeling overwhelmed.</span>
                </div>
              </div>
            </div>

            {/* Not For You If */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-500/20 shadow-xs space-y-4">
              <div className="inline-flex items-center space-x-2 text-rose-700 bg-rose-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <XCircle className="w-3.5 h-3.5" />
                <span>Not For You If</span>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-700">
                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>You want a get-rich-quick scheme. AI does not pay anyone by itself.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>These cheat codes save you time. Then you use that time and skill to help people who will pay you.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>You are looking for theoretical AI textbooks rather than practical, copy-paste shortcuts.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          8. ABOUT THE GUIDE AUTHOR
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-[#092755] text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            
            {/* Author Avatar / Badge */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#FDD412] text-[#092755] font-black flex flex-col items-center justify-center flex-shrink-0 shadow-md">
              <span className="text-3xl font-extrabold">C</span>
              <span className="text-[10px] uppercase font-bold tracking-wider">Author</span>
            </div>

            {/* Author Bio */}
            <div className="space-y-3 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FDD412] bg-white/10 px-3 py-1 rounded-full">
                Meet the Guide Author
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Chukwuemeka
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Written by Chukwuemeka, an AI consultant at <strong>DigiBeloved AI Education &amp; Consulting</strong>, who helps Nigerian business owners and job seekers use AI in plain English.
              </p>
              <p className="text-xs text-slate-300 pt-1">
                Based in Abuja, Nigeria. Passionate about turning complex AI tools into practical, income-generating skills for Africans.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          9. GUARANTEE
         ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#EEF3FB] border-b border-slate-200/60">
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 text-center space-y-4 shadow-sm">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-2">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              Risk-Free Guarantee
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092755] tracking-tight">
              7-Day Time-Saver Guarantee
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-medium">
              Try the first cheat code today. If it does not save you time, email <a href="mailto:digibeloved@gmail.com" className="text-[#092755] font-bold underline">digibeloved@gmail.com</a> within 7 days and get your money back.
            </p>

            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Selar handles checkout securely. If you need any assistance with your purchase, our support team is available to assist you immediately.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          10. FAQ (Accordion)
         ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#092755] bg-[#FDD412]/30 px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 bg-slate-50/70 hover:bg-slate-100/70 flex items-center justify-between transition-colors duration-150"
                  >
                    <span className="font-bold text-[#092755] text-base sm:text-lg pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "transform rotate-180 text-[#092755]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 sm:p-6 bg-white border-t border-slate-100 text-slate-700 text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          11. FINAL CALL TO ACTION
         ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#092755] text-white text-center relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FDD412]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          
          <span className="text-xs font-bold uppercase tracking-wider text-[#092755] bg-[#FDD412] px-3.5 py-1.5 rounded-full inline-block">
            Start Tonight
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Pick one cheat code. Do it tonight.
          </h2>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            One working example will show you more than any video. Get the guide now, run your first cheat code in 10 minutes, and see the time come back.
          </p>

          <div className="pt-2 space-y-3">
            <button
              type="button"
              onClick={() => handleCheckout("Final CTA Section")}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#FDD412] hover:bg-yellow-400 text-[#092755] font-black px-8 py-4 sm:py-5 rounded-2xl shadow-2xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] text-base sm:text-lg group"
            >
              <span>GET INSTANT ACCESS: N2,500 / $10</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-xs text-slate-300">
              Secure checkout on Selar. Pay in naira or dollars.
            </p>
          </div>

          {/* P.S. note */}
          <div className="mt-8 pt-6 border-t border-white/10 text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            <strong className="text-[#FDD412]">P.S.</strong> Not ready to do it alone? Add the one-hour, one-on-one session after checkout and we build it together.
          </div>

        </div>
      </section>

      {/* =========================================================================
          12. FOOTER SMALL PRINT (Every page requirement)
         ========================================================================= */}
      <footer className="bg-[#092755] text-slate-400 py-10 px-4 sm:px-6 border-t border-white/10 text-xs text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FDD412]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          
          <div className="flex items-center justify-center space-x-2 text-white font-bold text-sm mb-2">
            <img
              src="/logo.jpg"
              alt="DigiBeloved"
              width={24}
              height={24}
              className="w-5 h-5 rounded object-contain"
            />
            <span>DigiBeloved AI Education &amp; Consulting</span>
          </div>

          {/* Mandatory small print */}
          <p className="leading-relaxed max-w-2xl mx-auto text-slate-400">
            Earning ideas are examples, not promises. Results depend on your work and who you reach. AI tools change often, so always check results before you send, sign or pay. This guide is not affiliated with any AI company.
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 font-medium pt-2">
            <Link to="/privacy" className="hover:text-white underline">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white underline">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white underline">Contact Us</Link>
            <span>•</span>
            <span>&copy; {new Date().getFullYear()} DigiBeloved. All rights reserved.</span>
          </div>

        </div>
      </footer>

      {/* =========================================================================
          STICKY BOTTOM BUTTON ON MOBILE
         ========================================================================= */}
      <aside 
        aria-label="Mobile Checkout Action"
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#092755]/95 backdrop-blur-md p-3 border-t border-white/10 sm:hidden shadow-2xl transition-transform"
      >
        <button
          type="button"
          onClick={() => handleCheckout("Sticky Mobile Button")}
          className="w-full bg-[#FDD412] hover:bg-yellow-400 text-[#092755] font-black py-3.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-md active:scale-95 transition-transform"
        >
          <span>GET INSTANT ACCESS: N2,500 / $10</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </aside>

    </div>
  );
}
