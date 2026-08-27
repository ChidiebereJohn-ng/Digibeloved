
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";

export default function FAQSection() {
  const { faqs } = SALES_CONFIG;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleFAQ = (idx: number, question: string) => {
    const isOpening = openIndex !== idx;
    setOpenIndex(isOpening ? idx : null);
    if (isOpening) {
      trackSalesEvent("faq_open", { faqQuestion: question });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
            Frequently Asked Questions
          </span>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0A1F44] mt-4 mb-4">
            Clear Answers to Common Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Everything you need to know about the system, software compatibility, and commercial usage:
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={faq.q}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleFAQ(idx, faq.q)}
                  className="w-full text-left p-5 sm:p-6 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-[#0A1F44] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#0A1F44] text-white border-[#0A1F44]" : "text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="p-5 sm:p-6 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 animate-fade-in-up"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

