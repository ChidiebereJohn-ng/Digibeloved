import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, Users, Building2 } from 'lucide-react';

const ServicesHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">How Can We Empower You Today?</h1>
          <p className="text-xl text-gray-500 font-medium">Select your path.</p>
        </div>

        {/* Segmentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Paths Column */}
          <div className="space-y-6">
            
            {/* Business Leaders */}
            <Link to="/services/solutions" className="block group">
              <div className="glass-card p-8 rounded-2xl border border-gray-100 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white">
                <div className="flex items-start">
                  <div className="p-3 bg-navy/5 rounded-lg mr-4 text-navy group-hover:bg-navy group-hover:text-accent transition-colors">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">For Business Leaders</h3>
                    <p className="text-gray-500 mb-4 text-sm uppercase tracking-wide font-semibold">Custom Software & Strategy</p>
                    <p className="text-gray-700 font-medium italic">"I need a product built or a system automated."</p>
                  </div>
                  <div className="ml-auto flex items-center h-full">
                    <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Professionals */}
            <Link to="/services/training" className="block group">
              <div className="glass-card p-8 rounded-2xl border border-gray-100 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white">
                <div className="flex items-start">
                  <div className="p-3 bg-navy/5 rounded-lg mr-4 text-navy group-hover:bg-navy group-hover:text-accent transition-colors">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">For Professionals & Creators</h3>
                    <p className="text-gray-500 mb-4 text-sm uppercase tracking-wide font-semibold">Applied AI Training</p>
                    <p className="text-gray-700 font-medium italic">"I need to upgrade my skills and career."</p>
                  </div>
                  <div className="ml-auto flex items-center h-full">
                    <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Institutions */}
            <Link to="/services/consulting" className="block group">
              <div className="glass-card p-8 rounded-2xl border border-gray-100 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white">
                <div className="flex items-start">
                  <div className="p-3 bg-navy/5 rounded-lg mr-4 text-navy group-hover:bg-navy group-hover:text-accent transition-colors">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">For Institutions</h3>
                    <p className="text-gray-500 mb-4 text-sm uppercase tracking-wide font-semibold">Corporate Workshops</p>
                    <p className="text-gray-700 font-medium italic">"I need to train my staff."</p>
                  </div>
                  <div className="ml-auto flex items-center h-full">
                    <ArrowRight className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </Link>

          </div>

          {/* Visual Column - Split Layout Simulation */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden hidden lg:block shadow-2xl">
             <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden">
                <img src="https://picsum.photos/seed/coding/800/600" alt="Developer Coding" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl tracking-widest uppercase border-2 border-white px-4 py-2">Build</span>
                </div>
             </div>
             <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden">
                <img src="https://picsum.photos/seed/workshop/800/600" alt="Speaker Leading Workshop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl tracking-widest uppercase border-2 border-white px-4 py-2">Learn</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesHub;