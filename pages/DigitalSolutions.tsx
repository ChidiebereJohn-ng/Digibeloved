import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Database, RefreshCw, ChevronRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const DigitalSolutions: React.FC = () => {

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
      <article>
        {/* Header */}
        <header className="relative pt-32 pb-20 px-4 text-center overflow-hidden bg-slate-50 border-b border-gray-100">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
           <div className="relative z-10 max-w-4xl mx-auto">
             <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">We Build Your Digital Infrastructure.</h1>
             <p className="text-xl text-gray-600 font-light">From concept to code. Production-ready web apps, mobile solutions, and autonomous AI agents.</p>
           </div>
        </header>

        {/* Core Services */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-navy">
              <Layers className="h-8 w-8 text-navy mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Custom Web & Mobile Development</h3>
              <p className="text-gray-600">Scalable, secure, and user-centric applications tailored to your market.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-navy">
              <Database className="h-8 w-8 text-navy mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">AI Agent Integration</h3>
              <p className="text-gray-600">Automated customer support and internal operation bots that work 24/7.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-navy">
              <RefreshCw className="h-8 w-8 text-navy mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Legacy Modernization</h3>
              <p className="text-gray-600">Upgrading your existing systems to modern, AI-ready architectures.</p>
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
                        <p className="text-navy">A retail client struggled with manual inventory tracking.</p>
                     </div>
                     <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-gray-500 text-sm uppercase mb-1 font-semibold">Solution</h4>
                        <p className="text-navy">Custom web-app with AI demand forecasting.</p>
                     </div>
                     <div className="flex items-center space-x-4">
                        <div className="text-4xl font-bold text-navy">40%</div>
                        <div className="text-gray-600">reduction in <br/>stockouts.</div>
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
                        <p className="text-navy">Data visualization for complex financial sets.</p>
                     </div>
                     <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-gray-500 text-sm uppercase mb-1 font-semibold">Solution</h4>
                        <p className="text-navy">React-based mobile app with real-time processing.</p>
                     </div>
                     <div className="flex items-center space-x-4">
                        <div className="text-4xl font-bold text-navy">200%</div>
                        <div className="text-gray-600">increase in <br/>User Engagement.</div>
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
                            <stop offset="5%" stopColor="#0D244F" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#0D244F" stopOpacity={0}/>
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

        {/* CTA */}
        <section className="py-20 bg-white text-center border-t border-gray-100">
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