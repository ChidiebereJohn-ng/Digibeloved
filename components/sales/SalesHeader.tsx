import React from "react";

export default function SalesHeader() {
  return (
    <header className="w-full bg-[#0A1F44] border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Minimal Brand Identifier */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.jpg"
            alt="DigiBeloved Logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded object-contain"
          />
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tight text-lg leading-tight">
              DigiBeloved
            </span>
            <span className="text-white/60 text-xs tracking-wider uppercase font-medium">
              AI Education &amp; Consulting
            </span>
          </div>
        </div>

        {/* Subtle Trust Badge */}
        <div className="hidden sm:flex items-center space-x-2 text-white/70 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Official Product Release</span>
        </div>
      </div>
    </header>
  );
}

