import React from 'react';
import { Cpu, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <header className="pt-32 pb-16 px-4 text-center bg-slate-50 border-b border-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold text-navy mb-4">We Are DigiBeloved.</h1>
        <p className="text-xl md:text-2xl text-gray-500 font-light">Digital Intelligence. Human Application.</p>
      </header>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 mb-20 text-center pt-16">
        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl">
           <h2 className="text-2xl font-bold text-navy mb-6">OUR MISSION</h2>
           <p className="text-xl text-gray-600 leading-relaxed italic">
             "To build an institution, timeless in its relevancy and value, that empowers individuals and organizations through Applied AI."
           </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-slate-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             
             <div>
               <h2 className="text-3xl font-bold text-navy mb-8">The Brand Story</h2>
               <p className="text-gray-600 mb-8 leading-relaxed">
                 The name "DigiBeloved" captures our dual essence. It is the synthesis of technical mastery and human-centric design.
               </p>
               
               <div className="space-y-6">
                 <div className="flex items-start">
                   <div className="bg-white p-3 rounded-lg mr-4 border border-gray-200 shadow-sm">
                     <Cpu className="h-6 w-6 text-navy" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-navy mb-2">The "Digi"</h3>
                     <p className="text-gray-500">Represents our deep expertise in circuitry, code, and artificial intelligence.</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start">
                   <div className="bg-white p-3 rounded-lg mr-4 border border-gray-200 shadow-sm">
                     <Heart className="h-6 w-6 text-navy" />
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-navy mb-2">The "Beloved"</h3>
                     <p className="text-gray-500">Represents our unwavering focus on the human element. Technology must be understandable, practical, and beneficial.</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Team Visual */}
             <div className="relative">
                <img src="https://picsum.photos/seed/team123/800/800" alt="The DigiBeloved team at No 3 Maitama, Abuja" className="rounded-2xl shadow-2xl transition-all duration-700 hover:shadow-3xl" />
                <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-xl shadow-lg hidden md:block">
                  <p className="font-bold text-lg">Maitama, Abuja</p>
                  <p className="text-sm text-accent">HQ Location</p>
                </div>
             </div>

           </div>
        </div>
      </section>

    </div>
  );
};

export default About;