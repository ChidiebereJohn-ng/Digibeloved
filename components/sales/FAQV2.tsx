import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { trackSalesEvent } from "../../src/salesAnalytics";

export default function FAQV2() {
  const { faqs } = SALES_CONFIG;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackSalesEvent("faq_open", { faq_question: faqs[index].q });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Headline */}
        <div className="text-left md:text-center mb-12">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest bg-navy px-3 py-1 rounded-full inline-block mb-3">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Semantic FAQ Accordion List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-extrabold text-base sm:text-lg text-navy hover:text-slate-800 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transform transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-navy" : ""
                    }`}
                  />
                </button>

                {/* Content rendered in DOM for SEO/crawlers */}
                <div
                  className={`px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 font-normal leading-relaxed border-t border-slate-200/50 ${
                    isOpen ? "block" : "hidden md:hidden"
                  }`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
