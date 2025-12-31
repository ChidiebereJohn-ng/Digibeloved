import React from 'react';
import { Link } from 'react-router-dom';
import { Code, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import SchemaScript from '../components/SchemaScript';

const Home: React.FC = () => {
  // Schema for Home Page: Organization
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DigiBeloved",
    "url": "https://digibeloved.com",
    "logo": "https://res.cloudinary.com/dn2mgiges/image/upload/v1754587273/DigiBeloved.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2348067628656",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No 3 Maitama",
      "addressLocality": "Abuja",
      "addressCountry": "Nigeria"
    }
  };

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background - Simulating Video Loop with High Quality Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/digibeloved-office/1920/1080"
            alt="DigiBeloved experts applying AI strategies in a modern Abuja office"
            className="w-full h-full object-cover"
          />
          {/* Navy Blue Overlay - Kept for Hero Contrast */}
          <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
            The Bridge Between <br />
            <span className="text-accent">Digital Intelligence</span> and <br />
            Human Potential.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-100 font-light leading-relaxed drop-shadow-md">
            We don't just teach the future; we build it. Expert Applied AI training, custom software development, and strategic consulting.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-accent text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,209,0,0.3)]"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/services/solutions"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-navy transition-all"
            >
              View Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition - White Background */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            Moving Beyond Theory.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Technology is useless if it cannot be applied. At DigiBeloved, we eliminate the complexity. Whether you need a custom app built from scratch or a roadmap to integrate AI into your workforce, we focus on one metric: <span className="text-navy font-bold bg-accent/20 px-1 rounded">Tangible Results</span>.
          </p>
        </div>
      </section>

      {/* Tri-Sector Overview (Bento Grid Style) - Light Gray Background */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link to="/services/solutions" className="group relative glass-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="bg-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-300">
                <Code className="h-7 w-7 text-navy group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Digital Solutions</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Enterprise-grade web and mobile applications built to automate your operations.
              </p>
              <div className="flex items-center text-navy font-bold group-hover:translate-x-2 transition-transform">
                See How We Build <ArrowRight className="ml-2 h-4 w-4 text-accent" />
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/services/training" className="group relative glass-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="bg-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-300">
                <GraduationCap className="h-7 w-7 text-navy group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Applied AI Training</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Structured workshops and masterclasses designed to upskill professionals and teams.
              </p>
              <div className="flex items-center text-navy font-bold group-hover:translate-x-2 transition-transform">
                Start Learning <ArrowRight className="ml-2 h-4 w-4 text-accent" />
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/services/consulting" className="group relative glass-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="bg-navy/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy transition-colors duration-300">
                <Briefcase className="h-7 w-7 text-navy group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Strategy & Consulting</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Corporate roadmaps for AI integration and digital transformation.
              </p>
              <div className="flex items-center text-navy font-bold group-hover:translate-x-2 transition-transform">
                Consult with Us <ArrowRight className="ml-2 h-4 w-4 text-accent" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;