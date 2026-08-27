import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Download, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import SalesHeader from "../components/sales/SalesHeader";
import MinimalFooter from "../components/sales/MinimalFooter";

export default function BlueprintThankYou() {
  const [firstName, setFirstName] = useState("Friend");

  useEffect(() => {
    const savedName = sessionStorage.getItem("subscriber_first_name");
    if (savedName) {
      setFirstName(savedName);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-accent selection:text-navy flex flex-col justify-between">
      <SalesHeader />

      <main className="flex-1 py-14 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Success Check Badge */}
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-4">
            You're All Set, {firstName}!
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl mx-auto mb-8">
            Your <strong>AI Presentation Starter Blueprint</strong> has been dispatched to your email inbox. Please check your inbox (or promotions/spam folder just in case).
          </p>

          {/* Instant PDF Download Card */}
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md mb-12 text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-14 bg-[#07152E] rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                  <Download className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-navy">
                    Instant Download
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Don't want to wait for the email? Download your PDF directly here.
                  </p>
                </div>
              </div>

              <a
                href="/assets/ai-presentation-starter-blueprint.pdf"
                download="DigiBeloved-AI-Presentation-Starter-Blueprint.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-navy text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span>Download PDF</span>
                <Download className="ml-2 w-4 h-4 text-accent" />
              </a>
            </div>
          </div>

          {/* Bridge / Next Step to Full System */}
          <div className="bg-[#07152E] text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-accent uppercase tracking-wider mb-4 border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Logical Step</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Ready for the Complete Presentation System?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                The Starter Blueprint gives you the conceptual blueprint. The <strong>DigiBeloved AI Presentation System</strong> gives you the entire execution engine:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 mb-8">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2.5 flex-shrink-0" />
                  <span>The Complete AI Presentation Playbook (Step-by-step visual manual)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2.5 flex-shrink-0" />
                  <span>Dynamic Presentation Skill (The copy-paste reusable prompt directive)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2.5 flex-shrink-0" />
                  <span>Prompt &amp; Context Pack + Four-Workflow Quick Reference Guide</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2.5 flex-shrink-0" />
                  <span>Presentation Freelancer Starter Toolkit for commercial client decks</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/ai-presentation-system"
                  className="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.25)] group"
                >
                  <span>Explore The Full AI Presentation System</span>
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <span className="text-xs font-mono font-bold text-accent text-center sm:text-left">
                  Founding Price: ₦19,900 / $29
                </span>
              </div>
            </div>
          </div>

        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
