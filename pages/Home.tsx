import React from 'react';
import { Link } from 'react-router-dom';
import { Code, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import PortfolioGrid from '../components/PortfolioGrid';

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

      {/* Trust/Stats Bar */}
      <section className="bg-navy border-b border-white/10 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Professionals Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">Corporate Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">AI Availability</div>
            </div>
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

      {/* Featured: Trending Course & Tool */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Featured Course Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="bg-navy p-2 text-center text-white text-sm font-bold tracking-widest uppercase">
                Trending Now
              </div>
              <div className="p-8 md:p-12">
                <div className="text-accent font-bold text-sm mb-2 uppercase tracking-wide">New Release</div>
                <h3 className="text-3xl font-bold text-navy mb-4">Applied AI for Research</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Stop reading PDFs one by one. Learn the "Google Secret" to processing 50 papers in minutes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Master NotebookLM & Gemini
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Data Analysis without Coding
                  </li>
                </ul>
                <Link to="/services/training/ai-research-data" className="inline-flex items-center justify-center w-full bg-navy text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy-light transition-colors shadow-lg">
                  View Curriculum <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Free Tool Teaser */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-navy mb-6">
                  Tools to make you <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-blue-600">Smarter, Faster.</span>
                </h2>
                <p className="text-xl text-gray-600 font-light mb-8">
                  You don't always need a paid course to start. Try our free AI utilities designed to fix your workflow instantly.
                </p>

                <Link to="/tools/prompt-polisher" className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-accent hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-navy group-hover:text-accent transition-colors">The Prompt Polisher</h4>
                    <div className="bg-navy/5 p-2 rounded-full group-hover:bg-accent/10">
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-accent" />
                    </div>
                  </div>
                  <p className="text-gray-500">
                    Turn vauge ideas into professional engineer-grade prompts for ChatGPT & Midjourney.
                    <span className="ml-2 text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Free</span>
                  </p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <PortfolioGrid />

      {/* Tri-Sector Overview (Bento Grid Style) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy">Our Core Pillars</h2>
          </div>
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