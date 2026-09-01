import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import SalesHeader from "../components/sales/SalesHeader";
import MinimalFooter from "../components/sales/MinimalFooter";
import { trackLead } from "../src/services/metaPixel";

export default function FreeBlueprint() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Submit to Cloudflare Pages Functions API (/api/lead-capture)
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data?.success === false) {
        throw new Error(data?.error || "Submission failed. Please try again.");
      }

      // 2. Fire Meta Pixel 'Lead' event ONLY after verified successful server response
      trackLead({ firstName, email });

      // Store subscriber's first name for thank you page personalization
      sessionStorage.setItem("subscriber_first_name", firstName || "Friend");

      // Redirect to thank you page
      navigate("/free-blueprint/thank-you");
    } catch (err: any) {
      console.error("Submission error:", err);
      setError(err.message || "Failed to submit form. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-accent selection:text-navy flex flex-col justify-between">
      <SalesHeader />

      <main className="flex-1 py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Visual & Value */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-[#07152E] text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free Downloadable Guide</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy tracking-tight leading-[1.15] mb-4">
                The AI Presentation Starter Blueprint
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Discover the 4 repeatable workflows to transform dense reports, research, notes, or existing slides into clean, professional PowerPoint presentations using AI.
              </p>

              {/* What's Inside Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    <strong>01 &amp; 02: Context Engine:</strong> How to feed AI your exact Audience, Objective, Tone, Brand, and Content Control mode (Verbatim / Refine / Optimize).
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    <strong>03: Copy-Paste Starter Prompt:</strong> Ready-to-use master prompt with pre-generation quality guardrails.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    <strong>04: Quick Review Checklist:</strong> 5 essential checks for slide clarity, hierarchy, and accuracy.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    <strong>05: 5 Quick-Fix Prompts:</strong> Rapid fixes for <em>Too Much Text</em>, <em>Generic Design</em>, <em>AI Changed Content</em>, and <em>Too Casual</em>.
                  </span>
                </div>
              </div>

              {/* Mockup Preview */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-16 h-20 bg-[#07152E] rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                  <img
                    src="/playbook-cover.png"
                    alt="DigiBeloved AI Presentation Playbook"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-navy block">Official DigiBeloved Publication</span>
                  <span className="text-xs text-slate-500">100% Free digital download • Instant access</span>
                </div>
              </div>

            </div>

            {/* Right Column: Lead Capture Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#07152E] text-white p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 text-left">
                    Get Instant Access
                  </h2>
                  <p className="text-sm text-slate-300 font-light mb-6 text-left">
                    Where should we send your free Blueprint PDF?
                  </p>

                  {error && (
                    <div className="mb-4 p-3 bg-red-900/50 border border-red-500/50 rounded-xl text-red-200 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="e.g. Chidiebere"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="e.g. alex@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-accent text-navy py-4 px-6 rounded-xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.25)] flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mt-2"
                    >
                      {loading ? (
                        <span>Sending Blueprint...</span>
                      ) : (
                        <>
                          <span>Send Me the Free Blueprint</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center space-x-2 text-slate-400 text-xs pt-2">
                      <ShieldCheck className="w-4 h-4 text-accent" />
                      <span>Zero spam. Unsubscribe at any time with 1-click.</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <MinimalFooter />
    </div>
  );
}
