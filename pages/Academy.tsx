import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  FileText, 
  Download, 
  Laptop, 
  Wrench,
  ExternalLink
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const Academy: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "name": "DigiBeloved Academy",
        "url": "https://digibeloved.com/academy",
        "description": "Practical AI training, step-by-step playbooks, and applied skill resources for individuals, scholars, and professionals.",
        "parentOrganization": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "url": "https://digibeloved.com"
        }
      }
    ]
  };

  const learningTracks = [
    {
      title: "The AI Presentation System",
      badge: "Official Product",
      desc: "Turn your raw content, reports, proposals, or lecture notes into executive-ready PowerPoint presentations using the Dynamic Presentation Skill and 4 reusable workflows.",
      features: [
        "The complete AI Presentation Playbook (PDF)",
        "Dynamic Presentation Skill prompt architecture",
        "Verbatim, Refine, and Optimize content control modes",
        "Freelance starter toolkit for presentation services"
      ],
      link: "/ai-presentation-system",
      cta: "Explore AI Presentation System"
    },
    {
      title: "Applied AI for Research & Data Synthesis",
      badge: "Specialized Course",
      desc: "Master NotebookLM, Gemini, and structured prompt engineering to process dozens of academic papers, extract thematic findings, and synthesize research in minutes.",
      features: [
        "Multi-paper synthesis with Google NotebookLM",
        "Thematic coding without coding knowledge",
        "Methodology verification & literature mapping",
        "Ethical citation & academic integrity rules"
      ],
      link: "/services/training/ai-research-data",
      cta: "View Curriculum"
    },
    {
      title: "AI Graphic Design Masterclass",
      badge: "Skill Course",
      desc: "Create commercial-grade brand graphics, marketing assets, and social visuals using generative image systems without expensive subscriptions.",
      features: [
        "Midjourney & modern diffusion models",
        "Consistent brand styling & typography",
        "Commercial prompt crafting library",
        "Hands-on asset packaging"
      ],
      link: "/courses/ai-graphic-design",
      cta: "Explore Graphic Design Course"
    }
  ];

  const freeUtilities = [
    {
      title: "Free AI Presentation Starter Blueprint",
      desc: "A concise 6-page guide showing the core formula to convert messy notes into clean slide layouts.",
      link: "/free-blueprint",
      cta: "Download Free Blueprint"
    },
    {
      title: "The Prompt Polisher",
      desc: "Our free interactive utility that refines vague thoughts into engineer-grade AI instructions for ChatGPT and Claude.",
      link: "/tools/prompt-polisher",
      cta: "Try the Prompt Polisher"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-navy">
      <SchemaScript schema={schema} />

      {/* Hero Section */}
      <section className="bg-[#07152E] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-accent mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>DigiBeloved Academy — Individual Learning</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Practical AI Skills You Can Apply Immediately
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            Step-by-step playbooks, practical skills, and structured courses designed to make you faster, smarter, and more capable in your daily work.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 mb-10 max-w-2xl mx-auto text-left flex items-start space-x-4">
            <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base font-bold text-white mb-1">
                Learn the workflows behind real results.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe true capability doesn't come from memorizing prompts—it comes from mastering repeatable systems that you control completely.
              </p>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-slate-400">
            Looking to train an organization or company team?{' '}
            <Link to="/ai-training-for-organizations" className="text-accent underline font-bold ml-1 hover:text-yellow-300">
              View Corporate AI Training &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* Featured Playbooks & Courses */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
              Playbooks &amp; Masterclasses
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Featured Academy Resources
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Engineered for professionals, independent scholars, freelancers, and entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningTracks.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-navy text-accent px-2.5 py-1 rounded-md">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                  
                  <span className="text-xs font-bold text-navy uppercase tracking-wider block mb-3">What You Receive:</span>
                  <ul className="space-y-2 mb-8">
                    {item.features.map((f, fi) => (
                      <li key={fi} className="flex items-start text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={item.link}
                  onClick={() => trackCtaClick(`Academy - ${item.title}`, '/academy')}
                  className="w-full inline-flex items-center justify-center bg-navy text-white py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm hover:bg-navy-light transition-all shadow-sm"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-accent" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Free Utilities & Starter Blueprints */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-3">
              Zero Cost
            </span>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              Free Practical Utilities
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Experience the DigiBeloved methodology right now with our free tools and guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {freeUtilities.map((tool, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{tool.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{tool.desc}</p>
                </div>
                <Link
                  to={tool.link}
                  onClick={() => trackCtaClick(`Free Utility - ${tool.title}`, '/academy')}
                  className="inline-flex items-center text-sm font-bold text-navy hover:text-navy-light"
                >
                  <span>{tool.cta}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-accent" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom B2B Re-Route Guardrail */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-extrabold text-navy mb-2">
            Looking for Done-for-You Solutions or Corporate Training?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            If you need DigiBeloved to handle your research data analysis, automate an operational pipeline, engineer custom software, or train your company staff, explore our professional services.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold">
            <Link to="/data-analysis" className="bg-white border border-slate-200 text-navy px-4 py-2.5 rounded-lg hover:border-navy transition-colors">
              Research Data Analysis
            </Link>
            <Link to="/ai-automation" className="bg-white border border-slate-200 text-navy px-4 py-2.5 rounded-lg hover:border-navy transition-colors">
              Workflow Automation
            </Link>
            <Link to="/custom-software-development" className="bg-white border border-slate-200 text-navy px-4 py-2.5 rounded-lg hover:border-navy transition-colors">
              Custom Software
            </Link>
            <Link to="/ai-training-for-organizations" className="bg-navy text-accent px-4 py-2.5 rounded-lg hover:bg-navy-light transition-colors">
              Corporate AI Training
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
