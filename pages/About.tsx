import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Heart, 
  ShieldCheck, 
  BarChart3, 
  Workflow, 
  Code2, 
  GraduationCap, 
  ArrowRight,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const About: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About DigiBeloved",
    "url": "https://digibeloved.com/about",
    "description": "Learn about DigiBeloved, our applied AI philosophy, founder Chukwuemeka John Chidiebere, and our headquarters in Abuja, Nigeria.",
    "publisher": {
      "@type": "Organization",
      "name": "DigiBeloved",
      "url": "https://digibeloved.com"
    }
  };

  return (
    <div className="bg-white min-h-screen text-navy">
      <SchemaScript schema={schema} />

      {/* Header */}
      <section className="bg-[#07152E] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Our Purpose &amp; Philosophy
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            We Are DigiBeloved.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Applied AI, Data &amp; Software Solutions. We build systems, analyze data, and educate teams to make technology actually work for people.
          </p>
        </div>
      </section>

      {/* Master Brand Promise & Mission */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-4">
            Master Brand Promise
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight leading-snug mb-6">
            "Turn data, repetitive work, and software ideas into practical solutions that improve how you work."
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We reject the idea that artificial intelligence and digital technology should be treated as mere spectacle. If an algorithm does not deliver defensible statistical certainty, if an automation does not save real operational hours, or if software forces employees into clunky workarounds, it is not serving its purpose.
          </p>
        </div>
      </section>

      {/* The Brand Dual Essence */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              The Synthesis Behind Our Name
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Why DigiBeloved bridges technical rigor and human application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy text-accent flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">The "Digi"</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Represents our foundational technical discipline: mathematical rigor in statistical analysis, clean scalable software architecture, resilient API integrations, and practical prompt engineering.
                </p>
              </div>
              <div className="text-xs font-bold text-navy bg-slate-50 p-3 rounded-xl border border-slate-100">
                Precision • Architecture • Methodological Integrity
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy text-accent flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">The "Beloved"</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Represents our commitment to the human element. Technology must be understandable to non-technical stakeholders, respect user privacy, and relieve people of exhausting, repetitive drudgery.
                </p>
              </div>
              <div className="text-xs font-bold text-navy bg-slate-50 p-3 rounded-xl border border-slate-100">
                Usability • Empathy • Human Empowerment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-4 text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto mb-4 bg-navy">
                  <img
                    src="https://res.cloudinary.com/dn2mgiges/image/upload/v1754587273/DigiBeloved.png"
                    alt="Chukwuemeka John Chidiebere"
                    className="w-full h-full object-cover p-3"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy">Chukwuemeka John Chidiebere</h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                  Founder &amp; Applied AI Strategist
                </p>
                <div className="flex items-center justify-center text-xs text-slate-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  <span>Abuja, Nigeria</span>
                </div>
              </div>

              <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
                <h4 className="text-2xl font-extrabold text-navy mb-4">
                  Engineering Practical Solutions That Matter
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Chukwuemeka leads DigiBeloved with a focus on delivering verifiable client outcomes across data science, process automation, software engineering, and applied Generative AI capability building.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  His work spans assisting research institutions and postgraduate scholars with defensible statistical analysis, architecting custom web systems for growing businesses, and delivering hands-on Generative AI workshops that transform how organizational teams operate.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-navy block mb-0.5">Research Rigor</strong>
                    Methodologically valid analysis &amp; defensible reporting.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-navy block mb-0.5">Software Fit</strong>
                    Bespoke web applications built around real workflows.
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <strong className="text-navy block mb-0.5">AI Capability</strong>
                    Hands-on training focused on everyday departmental tasks.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Location & Global Service */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-3">
                Presence &amp; Reach
              </span>
              <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-4">
                Headquartered in Abuja. Delivering Worldwide.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Our physical headquarters is in Maitama, Abuja, Nigeria, placing us at the diplomatic and organizational heart of the country. From here, we deliver onsite consultations and workshops locally, while operating secure digital delivery pipelines for clients across the United Kingdom, United States, Canada, and Africa.
              </p>
              <div className="space-y-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" />
                  <span>Physical Address: No 3 Maitama, Abuja, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" />
                  <span>Encrypted digital collaboration &amp; secure file transfer</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2" />
                  <span>Multi-currency invoicing: Nigerian Naira (NGN) &amp; USD</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-md">
              <img
                src="/digibeloved_hq.png"
                alt="DigiBeloved Headquarters in Maitama, Abuja"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Let's Discuss How We Can Improve How You Work
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Tell us about your organization's challenges, data, or upcoming project.
          </p>
          <Link
            to="/contact"
            onClick={() => trackCtaClick('Discuss Your Project - About Page', '/about')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-xl font-extrabold text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;