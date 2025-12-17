import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Target, FileSearch } from 'lucide-react';

const Consultation: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <header className="pt-32 pb-16 px-4 text-center bg-slate-50 border-b border-gray-100">
         <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Strategic AI Implementation.</h1>
         <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
           We guide organizations through the noise. Get a clear roadmap for efficiency and growth.
         </p>
      </header>

      {/* Offerings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-navy shadow-sm transition-all">
             <Target className="h-10 w-10 text-navy mb-6" />
             <h3 className="text-xl font-bold text-navy mb-4">Executive Strategy Sessions</h3>
             <p className="text-gray-600">A deep dive into your business model to identify high-impact AI opportunities.</p>
           </div>
           <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-navy shadow-sm transition-all">
             <Lightbulb className="h-10 w-10 text-navy mb-6" />
             <h3 className="text-xl font-bold text-navy mb-4">Corporate Training Workshops</h3>
             <p className="text-gray-600">Private, in-house training tailored to your company's specific tools and workflows.</p>
           </div>
           <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-navy shadow-sm transition-all">
             <FileSearch className="h-10 w-10 text-navy mb-6" />
             <h3 className="text-xl font-bold text-navy mb-4">Feasibility Studies</h3>
             <p className="text-gray-600">Technical analysis to determine if your AI idea is viable and scalable.</p>
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
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Trusted Authority & Achievements</h2>
              
              <div className="mb-8">
                <h4 className="text-navy font-bold uppercase tracking-wider text-sm mb-2">Global Credentials</h4>
                <p className="text-gray-600">Our team is led by Google Certified Professionals, ensuring that our strategies align with global best practices and standards.</p>
              </div>

              <div className="mb-8">
                <h4 className="text-navy font-bold uppercase tracking-wider text-sm mb-2">Corporate Impact</h4>
                <p className="text-gray-600">We have successfully trained professionals across high-stakes industries, including the Petroleum and Energy sectors.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border-l-4 border-navy shadow-md">
                <h4 className="text-navy font-bold mb-4">Case Study: Petroleum Industry Christian Fellowship International (PICFI)</h4>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li><strong className="text-navy">Engagement:</strong> National Conference Corporate Training.</li>
                  <li><strong className="text-navy">Topic:</strong> "AI Essentials for Working Professionals: From Basics to Practical Applications."</li>
                  <li><strong className="text-navy">Result:</strong> Empowered industry veterans with actionable frameworks to integrate AI into complex energy workflows.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white">
         <Link to="/contact" className="bg-accent text-navy px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-accent/20">
            Book a Consultation Call
         </Link>
      </section>

    </div>
  );
};

export default Consultation;