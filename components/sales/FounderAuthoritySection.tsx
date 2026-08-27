import React from "react";
import { Building2, Compass } from "lucide-react";

export default function FounderAuthoritySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            
            {/* Founder / Institution Visual Box */}
            {/* DEVELOPER ASSET TODO: If a verified founder headshot is supplied, insert at `/assets/founder.webp` and replace the brand icon below */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#0A1F44] border-2 border-[#FFD100] flex flex-col items-center justify-center text-center p-3 text-white shrink-0 shadow-md">
              <img
                src="/logo.jpg"
                alt="DigiBeloved Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded object-contain mb-1"
              />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFD100]">
                DigiBeloved
              </span>
              <span className="text-[9px] text-slate-300">Applied AI</span>
            </div>

            {/* Editorial Story */}
            <div className="space-y-4 text-center sm:text-left">
              <div className="inline-block bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-600 px-2.5 py-1 rounded">
                Why We Built This
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0A1F44] tracking-tight">
                Behind the DigiBeloved AI Presentation System
              </h3>

              <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
                <p>
                  At DigiBeloved (based in Maitama, Abuja), our mandate is <strong>Applied AI</strong>â€”taking artificial intelligence out of theoretical hype and transforming it into reliable, everyday execution systems.
                </p>
                <p>
                  Working across corporate strategy, executive consulting, and workforce training, we repeatedly witnessed the exact same bottleneck: highly capable professionals with brilliant insights spending 6 to 12 hours manually fighting slide templates, alignment tools, and generic bullet points.
                </p>
                <p>
                  When they tried standard AI tools, the results were often generic, crowded, and lacked the visual discipline needed for real boardrooms or conferences.
                </p>
                <p className="text-slate-900 font-semibold">
                  We engineered the Dynamic Presentation Skill and four core workflows to bridge that exact gap. It embeds our editorial standards, cognitive pacing rules, and layout constraints into a reusable methodology you can use whenever you need to present.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center space-x-1.5">
                  <Building2 className="w-4 h-4 text-[#0A1F44]" />
                  <span>No 3 Maitama, Abuja</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Compass className="w-4 h-4 text-[#0A1F44]" />
                  <span>Applied AI Education &amp; Consulting</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

