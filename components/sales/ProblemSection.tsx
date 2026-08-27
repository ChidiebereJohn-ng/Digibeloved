import React from "react";
import { Check, X, FileText, Sparkles } from "lucide-react";

export default function ProblemSection() {
  const contentAssets = [
    "Original research papers & data",
    "Detailed client proposals",
    "In-depth market reports",
    "Comprehensive training notes",
    "Academic lectures & outlines",
    "Corporate strategy documents",
    "Institutional policies & briefs",
    "Existing PowerPoint decks",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        
        <span className="text-xs uppercase tracking-widest font-bold text-[#0A1F44] bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
          The Presentation Dilemma
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-6">
          You Already Have the Hard Part
        </h2>

        <div className="prose-editorial text-base sm:text-lg text-slate-600 leading-relaxed space-y-4 mb-12">
          <p>
            For many professionals, researchers, and consultants, the hardest part of any presentation should be{" "}
            <strong className="text-slate-900">having something substantive worth saying</strong>.
          </p>
          <p>
            You likely already have the deep knowledge, the data, or the raw documentation:
          </p>
        </div>

        {/* Existing Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14 text-left">
          {contentAssets.map((asset) => (
            <div
              key={asset}
              className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-start space-x-2.5 shadow-sm hover:border-[#0A1F44]/30 transition-colors"
            >
              <FileText className="w-4 h-4 text-[#0A1F44] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                {asset}
              </span>
            </div>
          ))}
        </div>

        <p className="text-base sm:text-lg text-slate-700 font-medium mb-8">
          Yet turning that information into an engaging, executive-ready presentation creates a whole second job.
        </p>

        {/* Comparison: Traditional vs DigiBeloved Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Traditional Workflow Card */}
          <div className="bg-slate-50 border border-red-200 rounded-2xl p-6 sm:p-7 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded">
                The Traditional Slog
              </span>
              <span className="text-xs text-red-500 font-semibold">Hours to Days</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-3">
              7-Step Manual Friction
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-slate-600 font-mono">
              <div className="flex items-center space-x-2 text-slate-800">
                <span className="text-red-500 font-bold">1.</span>
                <span>Raw Content</span>
              </div>
              <div className="flex items-center space-x-2 pl-4 text-slate-500">
                <span>â†“ Manual Outline Structure</span>
              </div>
              <div className="flex items-center space-x-2 pl-4 text-slate-500">
                <span>â†“ Hunting for Templates</span>
              </div>
              <div className="flex items-center space-x-2 pl-4 text-slate-500">
                <span>â†“ Tedious Slide-by-Slide Layout</span>
              </div>
              <div className="flex items-center space-x-2 pl-4 text-slate-500">
                <span>â†“ Image Searching &amp; Sizing</span>
              </div>
              <div className="flex items-center space-x-2 pl-4 text-slate-500">
                <span>â†“ Inconsistent Formatting Cleanup</span>
              </div>
              <div className="flex items-center space-x-2 pl-4 text-slate-500">
                <span>â†“ Endless Manual Revisions</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-900 font-bold pt-2 border-t border-slate-200">
                <X className="w-4 h-4 text-red-500 shrink-0" />
                <span>Exhausting, Inefficient Presentation Delivery</span>
              </div>
            </div>
          </div>

          {/* The Systematic Skill Workflow */}
          <div className="bg-[#0A1F44] text-white border-2 border-[#FFD100]/40 rounded-2xl p-6 sm:p-7 relative shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A1F44] bg-[#FFD100] px-2.5 py-1 rounded">
                The Systematic Approach
              </span>
              <span className="text-xs text-emerald-400 font-semibold">Fast &amp; Intentional</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
              <span>Dynamic Presentation Flow</span>
              <Sparkles className="w-4 h-4 text-[#FFD100]" />
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-200">
              <div className="bg-white/10 rounded-lg p-3 border border-white/10 font-medium">
                <strong className="text-[#FFD100]">Input:</strong> Content + Context + Dynamic Presentation Skill
              </div>
              <div className="flex items-center justify-center text-slate-400 text-xs">
                â†“ AI executes structure &amp; editorial typography
              </div>
              <div className="bg-white/10 rounded-lg p-3 border border-white/10 font-medium">
                <strong className="text-emerald-400">Human Review:</strong> Strategic customization &amp; domain verification
              </div>
              <div className="flex items-center justify-center text-slate-400 text-xs">
                â†“ Final delivery
              </div>
              <div className="flex items-center space-x-2 text-white font-bold pt-2 border-t border-white/10">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Authoritative, Structured Professional Presentation</span>
              </div>
            </div>
            
            <p className="text-[11px] text-slate-300 mt-4 italic">
              *Never implies zero human review. Your judgment is elevated while the manual production friction is eliminated.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

