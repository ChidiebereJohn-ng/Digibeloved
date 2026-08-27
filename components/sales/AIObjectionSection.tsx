import React from "react";
import { MessageSquareCode, ArrowDown } from "lucide-react";

export default function AIObjectionSection() {
  const genericFlaws = [
    "Over-reliant on generic 3-bullet-point structures",
    "Fails to recognize executive vs. academic hierarchy",
    "Hallucinates design elements or arbitrary slide count",
    "Summarizes away your most critical technical nuances",
    "Creates flat, monotonous reading decks instead of presentation aids",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            The Obvious Objection
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-6">
            &ldquo;Can&apos;t I Just Ask AI to Make the Presentation?&rdquo;
          </h2>

          <div className="text-xl sm:text-2xl font-bold text-[#0A1F44] mb-4">
            The honest answer is: <span className="text-emerald-600">Yes.</span>
          </div>

          <p className="prose-editorial text-base sm:text-lg text-slate-600 leading-relaxed">
            You can open ChatGPT, Claude, or Gemini right now and type: <em>&ldquo;Create a 10-slide PowerPoint on my report.&rdquo;</em>
          </p>
        </div>

        {/* Why generic prompts disappoint */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-12">
          <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center space-x-2">
            <MessageSquareCode className="w-5 h-5 text-amber-500" />
            <span>What happens when you use generic prompts:</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Generic prompts produce generic output. Without architectural presentation rules, AI defaults to predictable textbook summaries:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {genericFlaws.map((flaw) => (
              <div
                key={flaw}
                className="bg-white border border-slate-200/80 rounded-xl p-3.5 flex items-start space-x-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  {flaw}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* The Decisive Transition Statement */}
        <div className="text-center py-6">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#0A1F44] text-[#FFD100] mb-4">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1F44] tracking-tight max-w-2xl mx-auto leading-snug">
            AI may be powerful â€” but it still needs <span className="underline decoration-[#FFD100] decoration-4 underline-offset-4">good direction</span>.
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mt-3">
            To get executive-ready slides, the AI model must be instructed by someoneâ€”or somethingâ€”that understands professional presentation design principles.
          </p>
        </div>

      </div>
    </section>
  );
}

