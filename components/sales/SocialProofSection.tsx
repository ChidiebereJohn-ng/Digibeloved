import React from "react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { Quote } from "lucide-react";

export default function SocialProofSection() {
  const { testimonials, enableTestimonials } = SALES_CONFIG;

  // STRICT ANTI-FABRICATION RULE:
  // If no verified testimonials are supplied in config.ts, this component renders null.
  if (!enableTestimonials || !testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 bg-white px-3 py-1 rounded-md border border-slate-200">
            Real Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1F44] mt-4 mb-4">
            Verified Experiences
          </h2>
          <p className="text-base text-slate-600">
            What professionals say about implementing the DigiBeloved AI Presentation System:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#FFD100] mb-3" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#0A1F44] text-[#FFD100] font-bold flex items-center justify-center text-xs">
                    {t.name.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-slate-500">
                    {t.role} â€¢ {t.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

