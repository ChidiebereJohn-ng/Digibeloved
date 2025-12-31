import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Database, RefreshCw, ChevronRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import SchemaScript from '../components/SchemaScript';

const DigitalSolutions: React.FC = () => {

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Enterprise Software Development & AI Automation",
        "provider": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "sameAs": "https://digibeloved.com"
        },
        "areaServed": "Nigeria",
        "description": "Custom software development, internal business tools, and AI agent integration for Nigerian enterprises."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does custom software development cost in Nigeria?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Costs vary by complexity, but DigiBeloved focuses on ROI. Whether it's a ₦5M operational tool or a ₦50M enterprise platform, our goal is to ensure the software pays for itself through efficiency gains within 12 months."
            }
          },
          {
            "@type": "Question",
            "name": "Can you integrate AI agents into my existing business website?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We don't just build new apps; we modernize legacy systems. We can embed AI customer support agents, automated booking bots, and data processing engines directly into your current infrastructure."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build mobile apps for Android and iOS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We build cross-platform mobile solutions that run flawlessly on both Android and iOS devices, ensuring you reach your entire audience without paying for two separate development teams."
            }
          }
        ]
      }
    ]
  };

  // Mock data for the "Fintech Dashboard" visualization
  const chartData = [
    { name: 'Mon', engagement: 400 },
    { name: 'Tue', engagement: 300 },
    { name: 'Wed', engagement: 600 },
    { name: 'Thu', engagement: 800 },
    { name: 'Fri', engagement: 500 },
    { name: 'Sat', engagement: 900 },
    { name: 'Sun', engagement: 1000 },
  ];

  return (
    <div className="bg-white min-h-screen">
      <SchemaScript schema={schema} />
      <article>
        {/* Header */}
        <header className="relative pt-32 pb-20 px-4 text-center overflow-hidden bg-slate-50 border-b border-gray-100">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">We Don't Just Write Code.<br />We Build <span className="text-accent">Automated Empires</span>.</h1>
            <p className="text-xl text-gray-600 font-light mt-6">
              Stop building simple "websites." Start building <strong>Intelligent Digital Infrastructure</strong>.
              Production-ready web apps, mobile solutions, and trusted AI agents that work while you sleep.
            </p>
          </div>
        </header>

        {/* Core Services */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-navy group">
              <Layers className="h-8 w-8 text-navy mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-xl font-bold text-navy mb-3">Custom Enterprise Software</h3>
              <p className="text-gray-600">Internal tools, CRM portals, and inventory systems designed to eliminate manual data entry.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-navy group">
              <Database className="h-8 w-8 text-navy mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-xl font-bold text-navy mb-3">AI Agent Integration</h3>
              <p className="text-gray-600">Deploy "Digital Employees" (Chatbots & Agents) to handle customer support and operations 24/7.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-navy group">
              <RefreshCw className="h-8 w-8 text-navy mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-xl font-bold text-navy mb-3">Legacy Modernization</h3>
              <p className="text-gray-600">Don't scrap your old system. We upgrade it with modern APIs and AI capabilities.</p>
            </div>
          </div>
        </section>

        {/* Portfolio & Track Record */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy mb-12 border-b border-gray-200 pb-4 inline-block">Success Stories</h2>

            <div className="space-y-20">

              {/* Project A */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-navy font-bold tracking-widest uppercase text-sm mb-2 block bg-accent/20 inline-block px-2 py-1 rounded">Project A</span>
                  <h3 className="text-3xl font-bold text-navy mb-6">The E-Commerce Scaler</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-gray-500 text-sm uppercase mb-1 font-semibold">Challenge</h4>
                      <p className="text-navy">A Nigerian retail brand struggled with manual inventory tracking across 3 locations.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-gray-500 text-sm uppercase mb-1 font-semibold">Solution</h4>
                      <p className="text-navy">We built a centralized Management System with <strong>AI demand forecasting</strong>.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl font-bold text-navy">40%</div>
                      <div className="text-gray-600">reduction in <br />stockouts.</div>
                    </div>
                  </div>
                </div>
                <div className="h-[400px] bg-white rounded-2xl p-4 overflow-hidden relative shadow-xl border border-gray-100">
                  {/* Abstract representation of E-commerce dashboard */}
                  <img src="https://picsum.photos/seed/dashboard1/600/400" alt="E-commerce Dashboard Mockup" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute bottom-8 right-8 bg-navy text-white px-4 py-2 font-bold rounded-lg shadow-lg">AI Demand Forecast Active</div>
                </div>
              </div>

              {/* Project B */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                <div className="lg:order-2">
                  <span className="text-navy font-bold tracking-widest uppercase text-sm mb-2 block bg-accent/20 inline-block px-2 py-1 rounded">Project B</span>
                  <h3 className="text-3xl font-bold text-navy mb-6">The Fintech Dashboard</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-gray-500 text-sm uppercase mb-1 font-semibold">Challenge</h4>
                      <p className="text-navy">Data visualization for complex financial sets was slow and confusing.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h4 className="text-gray-500 text-sm uppercase mb-1 font-semibold">Solution</h4>
                      <p className="text-navy">A React-based mobile app with real-time processing and instant alerts.</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl font-bold text-navy">200%</div>
                      <div className="text-gray-600">increase in <br />User Engagement.</div>
                    </div>
                  </div>
                </div>

                {/* Visual Chart Component */}
                <div className="lg:order-1 h-[400px] bg-white rounded-2xl p-6 flex flex-col shadow-xl border border-gray-100">
                  <h4 className="text-navy mb-4 font-semibold">Real-time Engagement Metric</h4>
                  <div className="flex-grow">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorEngage" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0D244F" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#0D244F" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', color: '#0D244F' }} />
                        <Area type="monotone" dataKey="engagement" stroke="#0D244F" fillOpacity={1} fill="url(#colorEngage)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy mb-10 text-center">Common Questions about Software</h2>
            <div className="space-y-6">
              <div className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-navy mb-2">How much does custom software development cost in Nigeria?</h3>
                <p className="text-gray-600">We prioritize ROI. While costs vary based on complexity, we focus on building solutions that pay for themselves through efficiency. Contact us for a scoped quote.</p>
              </div>
              <div className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-navy mb-2">Can you integrate AI agents into my existing business website?</h3>
                <p className="text-gray-600">Yes. We specialize in modernizing legacy systems by embedding AI agents that handle support and data processing alongside your existing stack.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-50 text-center border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy mb-8">Have a project in mind?</h2>
            <Link to="/contact" className="inline-block bg-accent text-navy px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-accent/20">
              Request a Technical Proposal
            </Link>
          </div>
        </section>

      </article>
    </div>
  );
};

export default DigitalSolutions;