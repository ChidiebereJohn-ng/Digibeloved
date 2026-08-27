import React from "react";
import { Link } from "react-router-dom";

export default function MinimalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#07152E] text-slate-400 py-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Brand & Copyright */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.jpg"
            alt="DigiBeloved Logo"
            width={24}
            height={24}
            className="w-6 h-6 rounded object-contain"
          />
          <span>&copy; {currentYear} DigiBeloved. All rights reserved.</span>
        </div>

        {/* Minimal Legal / Trust Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
          <Link
            href="/contact"
            className="hover:text-white transition-colors"
          >
            Contact Support
          </Link>
          <a
            href="#pricing"
            className="hover:text-white transition-colors"
          >
            Refund Policy
          </a>
          <span className="text-slate-600">â€¢</span>
          <span className="text-slate-500">Maitama, Abuja, Nigeria</span>
        </div>

      </div>
    </footer>
  );
}

