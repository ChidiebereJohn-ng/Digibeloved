import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Calendar, Clock, Video, ArrowRight, ShieldCheck, Sparkles, BookOpen, MessageCircle } from "lucide-react";
import { 
  trackPurchaseOnce, 
  CHEAT_CODES_CONFIG,
  trackCtaClick
} from "../src/services/metaPixel";

const ThankYou: React.FC = () => {
  const [purchaseTracked, setPurchaseTracked] = useState<boolean>(false);

  useEffect(() => {
    // 1. Page Title
    document.title = "Order Confirmed | DigiBeloved";

    // 2. Set strict noindex, nofollow for search engines
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", "noindex, nofollow");

    // 3. Fire Meta Purchase event ONLY ONCE per visit / session
    const fired = trackPurchaseOnce({
      value: CHEAT_CODES_CONFIG.priceUSD, // $10
      currency: CHEAT_CODES_CONFIG.currency,
      content_name: CHEAT_CODES_CONFIG.name,
    });
    setPurchaseTracked(fired);

    // 4. Scroll to top
    window.scrollTo(0, 0);

    return () => {
      // Revert robots meta on unmount
      if (robotsMeta) {
        robotsMeta.setAttribute("content", "index, follow");
      }
    };
  }, []);

  const handleWhatsAppCtaClick = () => {
    trackCtaClick("Book 1-on-1 Session WhatsApp", "/thank-you");
  };

  return (
    <div className="min-h-screen bg-[#EEF3FB] text-[#092755] font-poppins selection:bg-[#FDD412] selection:text-[#092755]">
      
      {/* Top Header */}
      <header className="w-full bg-[#092755] border-b border-white/10 py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.jpg"
              alt="DigiBeloved Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded object-contain"
            />
            <span className="text-white font-bold tracking-tight text-lg">
              DigiBeloved
            </span>
          </Link>
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Order Confirmed</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        
        {/* Success Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 mb-8 text-center sm:text-left">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto sm:mx-0 mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="inline-block bg-[#092755]/5 text-[#092755] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Payment Successful
          </span>

          {/* Part 4 Headline */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#092755] tracking-tight leading-tight mb-4">
            You are in. Check your email for your guide.
          </h1>

          {/* Part 4 Body */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
            Your payment went through. Your download link is in your Selar email. Open the book and start with Cheat Code #1. It takes about 10 minutes.
          </p>

          <div className="bg-[#EEF3FB] border border-[#092755]/10 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#092755] flex-shrink-0 mt-0.5" />
            <div className="text-sm text-slate-700">
              <strong className="text-[#092755]">What to do right now:</strong>
              <p className="mt-0.5 text-xs sm:text-sm text-slate-600">
                1. Check your email inbox (and Promotions/Spam folder) for a receipt from <strong>Selar</strong>.<br />
                2. Click the download button in the email to save your 20-page <em>7 AI Cheat Codes Playbook (PDF)</em>.<br />
                3. Open Cheat Code #1 on your phone or laptop and run the voice-note prompt today.
              </p>
            </div>
          </div>
        </div>

        {/* Part 4 Offer: The 1-on-1 Session Upsell Card */}
        <div className="bg-[#092755] text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden border border-[#FDD412]/30">
          
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDD412]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-[#FDD412] text-[#092755] text-xs font-extrabold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Post-Checkout Upgrade</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-4">
              Want me to build it with you?
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
              One-on-one, 60 minutes, online. Business owners: we build one AI workflow for your business. Job seekers: we rewrite your CV, practise interview answers and set up your first AI-powered service.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm">
              <div className="flex items-center space-x-2.5 bg-white/5 rounded-xl p-3 border border-white/10">
                <Clock className="w-4 h-4 text-[#FDD412] flex-shrink-0" />
                <span>60 Minutes, Live Online</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-white/5 rounded-xl p-3 border border-white/10">
                <Video className="w-4 h-4 text-[#FDD412] flex-shrink-0" />
                <span>Hands-on Screen Sharing</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-white/5 rounded-xl p-3 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#FDD412] flex-shrink-0" />
                <span>Leave with Workflow Built</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-white/5 rounded-xl p-3 border border-white/10">
                <Calendar className="w-4 h-4 text-[#FDD412] flex-shrink-0" />
                <span>Direct WhatsApp Booking</span>
              </div>
            </div>

            {/* Price tag */}
            <div className="mb-6 p-4 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-300 block">Session Investment:</span>
                <span className="text-xl sm:text-2xl font-black text-[#FDD412]">
                  N20,000 in Nigeria • $50 elsewhere
                </span>
              </div>
              <span className="text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded-md">
                Limited slots each week
              </span>
            </div>

            {/* Button: BOOK MY SESSION (Directs to WhatsApp +2348067628656) */}
            <div className="space-y-3 text-center sm:text-left">
              <a
                href={CHEAT_CODES_CONFIG.whatsappSessionUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#FDD412] hover:bg-yellow-400 text-[#092755] font-black px-8 py-4 rounded-2xl shadow-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] text-base"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-5 h-5 flex-shrink-0"
                />
                <span>BOOK MY SESSION</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <p className="text-xs text-slate-300">
                Direct WhatsApp chat with Chukwuemeka (+2348067628656) to confirm your slot.
              </p>

              {/* Decline link */}
              <div>
                <Link
                  to="/"
                  className="inline-block text-xs text-slate-400 hover:text-white underline pt-2 transition-colors"
                >
                  No thanks, I will start with the book.
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Small Print Footer Banner */}
        <div className="mt-12 text-center text-xs text-slate-500 leading-relaxed bg-white border border-slate-200/80 p-5 rounded-2xl">
          <p className="font-semibold text-slate-600 mb-1">Notice &amp; Disclaimer:</p>
          <p className="mb-3">
            Earning ideas are examples, not promises. Results depend on your work and who you reach. AI tools change often, so always check results before you send, sign or pay. This guide is not affiliated with any AI company.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 font-medium">
            <Link to="/privacy" className="hover:text-[#092755] underline">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#092755] underline">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#092755] underline">Customer Support</Link>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ThankYou;
