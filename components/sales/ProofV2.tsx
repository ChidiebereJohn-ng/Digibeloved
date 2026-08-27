import React, { useState } from "react";
import { ArrowRight, FileText, CheckCircle2, Monitor, BookOpen } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";

export default function ProofV2() {
  const { proofCategories, selarCheckoutUrl, hero } = SALES_CONFIG;
  const [activeTab, setActiveTab] = useState(0);

  const current = proofCategories[activeTab];

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    trackSalesEvent("proof_view", { category_id: proofCategories[index].id });
  };

  const handleCtaClick = () => {
    trackSalesEvent("hero_cta_click", { cta_location: "after_proof_section" });
    trackSalesEvent("checkout_click", { cta_location: "after_proof_section" });
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Headline */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest bg-navy px-3 py-1 rounded-full inline-block mb-3">
            Real Proof & Case Studies
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-2">
            Same Content. Completely Different Presentation.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            See how raw, unformatted documents transform into executive-ready slide architecture.
          </p>
        </div>

        {/* Industry Category Tab Selector */}
        <div className="flex overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar border-b border-slate-200">
          {proofCategories.map((cat, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(index)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#07152E] text-accent shadow-sm"
                    : "bg-white text-slate-600 hover:text-navy border border-slate-200/80"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Before / After Split Panel */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 mb-12">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <span className="text-base sm:text-lg font-extrabold text-navy">
              {current.label} Transformation
            </span>
            <span className="text-xs font-mono font-bold text-navy bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              {current.badge}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Raw Input (Before) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>Raw Input Provided</span>
                </div>
                <p className="text-sm text-slate-700 font-serif leading-relaxed mb-4">
                  "{current.rawInput}"
                </p>
              </div>
              <div className="text-[11px] text-slate-400 border-t border-slate-200 pt-3">
                Status: Dense text, difficult to present live
              </div>
            </div>

            {/* Transition Indicator */}
            <div className="lg:col-span-2 flex items-center justify-center py-2 lg:py-0">
              <div className="w-10 h-10 rounded-full bg-[#07152E] text-accent flex items-center justify-center shadow-sm">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            {/* Structured Final Slide (After) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#07152E] text-white rounded-2xl p-5 sm:p-6 border border-white/10 shadow-lg">
              <div>
                <div className="flex items-center justify-between text-xs font-mono font-bold text-accent uppercase tracking-wider mb-3">
                  <div className="flex items-center space-x-1.5">
                    <Monitor className="w-4 h-4 text-accent" />
                    <span>Final Slide Architecture</span>
                  </div>
                  <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded">High Signal</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-sans mb-4">
                  {current.finalSlide}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-xs text-accent font-medium border-t border-white/10 pt-3">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Executive visual rhythm & typographic clarity</span>
              </div>
            </div>

          </div>

        </div>

        {/* Product Proof Highlight */}
        <div className="bg-[#0B1C3D] rounded-3xl p-6 sm:p-10 border border-white/10 text-white shadow-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src="/playbook-cover.png"
                  alt="The AI Presentation Playbook Mockup"
                  width={380}
                  height={500}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:col-span-7 text-left">
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-2 block">
                Visual Manual & Resource Specifications
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                See What the System Can Help You Create
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                Inside the <strong>AI Presentation Playbook</strong>, you get side-by-side illustrated walkthroughs showing raw document inputs beside finalized PowerPoint slide layouts across research, corporate strategy, training modules, petroleum technical summaries, and high-stakes pitch decks.
              </p>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-6">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                  <span>Real slide layout templates with proportional whitespace</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                  <span>Before & after breakdowns for Workflows A, B, C, and D</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                  <span>Multi-AI platform execution guides (ChatGPT, Claude, Gemini, Grok)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Decision Point CTA #2 */}
        <div className="text-center">
          <a
            href={selarCheckoutUrl}
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-base md:text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_8px_20px_rgba(255,209,0,0.2)] group"
          >
            <span>{hero.ctaText}</span>
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-slate-500 mt-2.5 font-medium">
            Instant digital access • Founding launch price: ₦19,900 / $29
          </p>
        </div>

      </div>
    </section>
  );
}
