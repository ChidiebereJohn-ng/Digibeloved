import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Download, ArrowRight } from 'lucide-react';
import SchemaScript from '../components/SchemaScript';

const Training: React.FC = () => {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Applied AI for Business",
    "description": "Turn AI into your best employee. Reclaim 10+ hours a week.",
    "provider": {
      "@type": "Organization",
      "name": "DigiBeloved",
      "sameAs": "https://digibeloved.com"
    }
  };

  const CourseCard: React.FC<{title: string, promise: string, outcome: string}> = ({ title, promise, outcome }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-navy hover:shadow-lg transition-all hover:translate-y-[-4px] group h-full flex flex-col shadow-sm">
      <h4 className="text-xl font-bold text-navy mb-3 group-hover:text-navy-light transition-colors">{title}</h4>
      <p className="text-gray-600 text-sm mb-4 flex-grow italic">"{promise}"</p>
      <div className="mt-auto pt-4 border-t border-gray-100">
        <span className="text-xs text-navy uppercase font-bold tracking-wider block mb-1">Key Outcome</span>
        <p className="text-navy font-medium flex items-start">
           <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
           {outcome}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-slate-50 min-h-screen">
        
        {/* Header */}
        <header className="py-24 px-4 text-center bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">The DigiBeloved Academy.</h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Practical. Interactive. Result-Oriented. <br/>Stop guessing and start mastering.
            </p>
          </div>
        </header>

        {/* Media Placeholder: Classroom */}
        <div className="w-full h-96 relative overflow-hidden">
             <img src="https://picsum.photos/seed/class/1920/600" alt="Hands-on Applied AI training session in Abuja" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                 <span className="glass px-8 py-4 rounded-full text-navy font-bold backdrop-blur-md bg-white/80">Live Workshops in Abuja</span>
             </div>
        </div>

        {/* Catalog */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          <div className="space-y-16">
            
            {/* Tier 1 */}
            <div>
              <div className="flex items-center mb-8">
                <span className="bg-navy text-white font-bold px-3 py-1 rounded text-sm mr-4">TIER 1</span>
                <h3 className="text-2xl font-bold text-navy">FOR BUSINESS & OPERATIONS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CourseCard 
                  title="Applied AI for Business"
                  promise="Turn AI into your best employee. Reclaim 10+ hours a week."
                  outcome="Build a 'Business Autopilot System.'"
                />
                <CourseCard 
                  title="Applied AI for Agency & Consultancy"
                  promise="Scale service delivery. Stop trading time for money."
                  outcome="Create a 'Client Delivery Automation' pipeline."
                />
              </div>
            </div>

            {/* Tier 2 */}
            <div>
              <div className="flex items-center mb-8">
                <span className="bg-navy text-white font-bold px-3 py-1 rounded text-sm mr-4">TIER 2</span>
                <h3 className="text-2xl font-bold text-navy">FOR CREATORS & MARKETERS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CourseCard 
                  title="Applied AI for Content Creation"
                  promise="The 'Infinite Content' Engine. Quality at scale."
                  outcome="Build a repurposing pipeline that turns 1 idea into 20 assets."
                />
              </div>
            </div>

            {/* Tier 3 */}
            <div>
              <div className="flex items-center mb-8">
                <span className="bg-navy text-white font-bold px-3 py-1 rounded text-sm mr-4">TIER 3</span>
                <h3 className="text-2xl font-bold text-navy">FOR BUILDERS & TECHNICAL MINDS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CourseCard 
                  title="Applied AI for Building Digital Solutions"
                  promise="You don't need a CTO. You need AI."
                  outcome="Launch a live web app without writing code yourself."
                />
                <CourseCard 
                  title="Masters in Generative AI"
                  promise="Total Command. The comprehensive deep-dive into LLMs, strategy, and ethics."
                  outcome="Capstone 'Masterpiece' solution."
                />
              </div>
            </div>

            {/* Tier 4 */}
            <div>
              <div className="flex items-center mb-8">
                <span className="bg-navy text-white font-bold px-3 py-1 rounded text-sm mr-4">TIER 4</span>
                <h3 className="text-2xl font-bold text-navy">SPECIALIZED</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CourseCard 
                  title="Applied AI for Educators"
                  promise="Personalize learning. Automate grading. Inspire minds."
                  outcome="Design an interactive AI course module."
                />
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy mb-10">Ready to master the future?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="flex items-center justify-center px-8 py-4 border border-navy text-navy rounded-full font-bold hover:bg-navy hover:text-white transition-colors">
                <Download className="mr-2 h-5 w-5" /> Download Course Brochure
              </button>
              <Link to="/contact" className="flex items-center justify-center px-8 py-4 bg-accent text-navy rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg">
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Training;