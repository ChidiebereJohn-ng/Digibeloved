import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Target, FileSearch } from 'lucide-react';

import SchemaScript from '../components/SchemaScript';

const Consultation: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "AI Strategy & Consulting",
        "provider": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "sameAs": "https://digibeloved.com"
        },
        "areaServed": "Africa",
        "description": "Strategic AI roadblocks, feasibility studies, and digital transformation consulting for Nigerian organizations."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does a company start adopting AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The first step is NOT buying software. It is a 'Feasibility Audit.' DigiBeloved analyzes your current workflows to identify high-impact, low-risk opportunities for automation before you spend a Naira on development."
            }
          },
          {
            "@type": "Question",
            "name": "Why do we need an AI consultant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most AI projects fail due to lack of strategy, not technology. An AI consultant ensures your investment aligns with business goals, navigates ethical risks, and trains your team to actually USE the technology."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      <SchemaScript schema={schema} />

      {/* Header */}
      <header className="pt-32 pb-16 px-4 text-center bg-slate-50 border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Your Corporate <span className="text-accent bg-navy px-2">AI Roadmap</span>.</h1>
        <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto mt-6">
          Don't just "buy AI tools." Build a coherent strategy. <br />
          We guide organizations through the noise to find clarity, efficiency, and growth.
        </p>
      </header>

      {/* Offerings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-navy shadow-sm transition-all group">
            <Target className="h-10 w-10 text-navy mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-navy mb-4">Executive Strategy Sessions</h3>
            <p className="text-gray-600">Private boarding-room sessions to align your leadership team on the realities and opportunities of AI.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-navy shadow-sm transition-all group">
            <Lightbulb className="h-10 w-10 text-navy mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-navy mb-4">The "AI Audit"</h3>
            <p className="text-gray-600">We map your entire workflow to find the "Hidden 20%"—the repetitive tasks costing you millions annually.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-navy shadow-sm transition-all group">
            <FileSearch className="h-10 w-10 text-navy mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-navy mb-4">Feasibility Studies</h3>
            <p className="text-gray-600">Before you build, we validate. Technical analysis to ensure your AI idea is viable, scalable, and secure.</p>
          </div>
        </div>
      </section>

      {/* Case Study / Authority */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/boardroom/800/600" alt="Strategic AI consultation session for corporate clients" className="w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy to-transparent p-8">
                <p className="text-white font-bold text-lg">"Strategy before Software."</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Trusted Authority & Achievements</h2>

              <div className="mb-8">
                <h4 className="text-navy font-bold uppercase tracking-wider text-sm mb-2 flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Global Credentials
                </h4>
                <p className="text-gray-600">Our team acts as a bridge to global best practices. We don't just know what's happening in Silicon Valley; we know how to apply it in Abuja.</p>
              </div>

              <div className="mb-8">
                <h4 className="text-navy font-bold uppercase tracking-wider text-sm mb-2 flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                  Specialized Industry Experience
                </h4>
                <p className="text-gray-600">From Energy to Finance, we understand the specific compliance and operational challenges of high-stakes Nigerian industries.</p>
              </div>

              <div className="bg-white p-8 rounded-xl border-l-4 border-navy shadow-lg mt-8">
                <h4 className="text-navy font-bold mb-4 text-lg">Case Study: Petroleum Industry Christian Fellowship International (PICFI)</h4>
                <ul className="space-y-4 text-gray-700 text-sm">
                  <li className="flex gap-3"><strong className="text-navy min-w-[80px]">Goal:</strong> <span>Demystify AI for senior industry veterans.</span></li>
                  <li className="flex gap-3"><strong className="text-navy min-w-[80px]">Action:</strong> <span>Delivered "AI Essentials for Professionals"—a high-impact keynote and workshop.</span></li>
                  <li className="flex gap-3"><strong className="text-navy min-w-[80px]">Result:</strong> <span>Leaders left with 3 immediate implementation frameworks for their respective departments.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Questions Leaders Ask Us</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-navy mb-2">How does a company start adopting AI?</h3>
              <p className="text-gray-600">The first step is a 'Feasibility Audit.' We analyze your current workflows to identify high-impact, low-risk opportunities for automation.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-lg text-navy mb-2">Why do we need an AI consultant?</h3>
              <p className="text-gray-600">Most AI projects fail due to lack of strategy. We ensure your investment aligns with business goals and navigate data privacy risks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-slate-50 border-t border-gray-200">
        <Link to="/contact" className="bg-accent text-navy px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-accent/20">
          Book a Strategy Session
        </Link>
      </section>

    </div>
  );
};
export default Consultation;