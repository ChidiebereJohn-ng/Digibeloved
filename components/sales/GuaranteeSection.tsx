import React from "react";
import { ShieldCheck, Mail, CheckCircle2 } from "lucide-react";

export default function GuaranteeSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-3xl mx-auto">
        
        <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-10 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
          
          {/* Badge Icon */}
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
            <ShieldCheck className="w-8 h-8" />
          </div>

          {/* Guarantee Copy */}
          <div className="space-y-3 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
              Risk-Reversal Commitment
            </span>

            <h3 className="text-2xl font-black text-[#0A1F44] tracking-tight">
              7-Day Implementation Guarantee
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We stand fully behind the quality and architectural precision of the DigiBeloved AI Presentation System. You should receive exactly what was promised.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If the system materials are materially different from what was described, or if you encounter any technical difficulty accessing your purchased digital assets, simply contact our support team within 7 days of purchase. We will immediately assist in resolving the issue or provide a resolution in accordance with our stated refund policy.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-[11px] text-slate-500">
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Transparent terms</span>
              </span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>Dedicated support response</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

