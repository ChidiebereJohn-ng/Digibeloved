import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Building2, 
  Briefcase, 
  TrendingUp, 
  HelpCircle 
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';
import AppliedAIHubSection from '../components/AppliedAIHubSection';

const AppliedAIHub: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "Applied AI Hub — Verified Sector & Task Frameworks | DigiBeloved",
        "url": "https://digibeloved.com/applied-ai-hub",
        "description": "Production-grade applied AI and autonomous agent frameworks across 9 sectors, 5 business domains, and verified operational tasks with explicit depth of action and ROI metrics.",
        "publisher": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "url": "https://digibeloved.com"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SchemaScript schema={schema} />

      {/* Hero Banner */}
      <section className="bg-[#092755] text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Atmospheric Glow Meshes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FDD412]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FDD412] text-xs font-black tracking-widest uppercase mb-5 backdrop-blur-sm shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Enterprise Repository</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white mb-6">
            The Applied <span className="text-[#FDD412]">AI Hub</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-200 font-normal max-w-3xl mx-auto leading-relaxed mb-8">
            Filter production-ready autonomous workflows, subagent architectures, and deterministic data pipelines categorized across our 3-tier taxonomy: <strong className="text-white">Sector</strong>, <strong className="text-white">Domain</strong>, and <strong className="text-white">Task</strong>.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-[#FDD412]">9</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Industry Sectors</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-[#FDD412]">5</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Business Domains</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-[#FDD412]">10+</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Core Task Archetypes</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-[#FDD412]">100%</div>
              <div className="text-xs text-slate-300 font-medium mt-1">Verified Implementations</div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Interactive Matrix Section */}
      <AppliedAIHubSection initialLimit={0} showFullHeading={false} />

      {/* Bottom Custom Consultation Callout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto bg-[#092755] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FDD412]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FDD412] text-xs font-black tracking-widest uppercase mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>Bespoke Engineering</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Need a Custom AI Pipeline for Your Unique Workflow?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              If your organization operates with proprietary databases, niche compliance mandates, or custom software APIs, DigiBeloved architects and deploys custom subagent harnesses tailored to your exact stack.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() => trackCtaClick('Discuss Implementation - Hub Page', '/applied-ai-hub')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#FDD412] hover:bg-yellow-400 text-[#092755] font-black px-8 py-4 rounded-xl text-base shadow-lg shadow-[#FDD412]/20 active:scale-[0.98] transition-all"
              >
                <span>Discuss Your Custom Solution</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/ai-training-for-organizations"
                onClick={() => trackCtaClick('Explore AI Training - Hub Page', '/applied-ai-hub')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl text-base border border-white/15 transition-all"
              >
                <span>Team AI Training</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AppliedAIHub;
