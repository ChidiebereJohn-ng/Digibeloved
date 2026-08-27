import React from "react";
import { SALES_CONFIG } from "../../data/salesConfig";
import { Clock } from "lucide-react";

export default function UrgencySection() {
  const { launchDeadline } = SALES_CONFIG;

  // STRICT RULE: If launchDeadline is null or empty, hide urgency completely.
  // Zero fake countdown timers, zero fake stock scarcity counters.
  if (!launchDeadline || launchDeadline.trim() === "") {
    return null;
  }

  return (
    <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 sm:p-5 text-center mb-8 flex items-center justify-center space-x-3 text-amber-200">
      <Clock className="w-5 h-5 text-[#FFD100] shrink-0" />
      <span className="text-xs sm:text-sm font-semibold">
        Founding Launch Offer ends <strong className="text-white underline decoration-[#FFD100]">{launchDeadline}</strong>.
      </span>
    </div>
  );
}

