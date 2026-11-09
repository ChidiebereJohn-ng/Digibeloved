import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Users, 
  Code, 
  Laptop, 
  Smartphone, 
  Database, 
  Rocket, 
  HelpCircle, 
  Sparkles,
  ExternalLink,
  Layers,
  Monitor,
  CheckCircle2,
  AlertCircle,
  Eye,
  RefreshCw,
  Sliders,
  ChevronDown,
  Building,
  HeartPulse,
  ShoppingBag,
  Scale,
  Palette
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

// --- DATA STRUCTURES ---

interface CategoryTemplate {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  headline: (name: string) => string;
  subhead: string;
  metrics: string[];
  features: string[];
}

const CATEGORY_TEMPLATES: Record<string, CategoryTemplate> = {
  consulting: {
    id: 'consulting',
    label: 'Professional Consulting',
    icon: Building,
    tagline: 'Strategic Advisory & Operations',
    headline: (name) => `Strategic Solutions Engineered for Growth at ${name}`,
    subhead: 'We partner with forward-thinking leaders to optimize workflows, modernize operations, and drive measurable revenue expansion.',
    metrics: ['98% Retention Rate', '4.2x Average ROI', 'Zero Overhead Bloat'],
    features: ['Operational Systems Audit', 'Custom Growth Frameworks', 'Executive Performance Dashboard']
  },
  healthcare: {
    id: 'healthcare',
    label: 'Healthcare & Medical Clinic',
    icon: HeartPulse,
    tagline: 'Patient-First Clinical Care',
    headline: (name) => `Compassionate Care & Trusted Medicine at ${name}`,
    subhead: 'Book appointments online, consult verified specialists, and access your personal medical records in a secure, digital portal.',
    metrics: ['15-Min Avg Response', 'Certified Specialists', '100% HIPAA/Privacy Compliant'],
    features: ['Instant Online Booking', 'Patient Portal & Lab Records', 'Direct WhatsApp Doctor Triage']
  },
  retail: {
    id: 'retail',
    label: 'Retail & E-commerce Store',
    icon: ShoppingBag,
    tagline: 'Premium Products & Fast Logistics',
    headline: (name) => `Curated Quality Delivered to Your Doorstep by ${name}`,
    subhead: 'Explore our latest collection of verified essentials. Seamless checkout, real-time tracking, and express nationwide delivery.',
    metrics: ['24-Hour Dispatch', '100% Quality Guarantee', 'Flexible Paystack Checkout'],
    features: ['Live Inventory Counter', 'Paystack Multi-Currency Gateway', 'Automated WhatsApp Order Alerts']
  },
  legal: {
    id: 'legal',
    label: 'Legal & Advisory Firm',
    icon: Scale,
    tagline: 'Corporate Law & Regulatory Compliance',
    headline: (name) => `Defensible Legal Counsel with ${name}`,
    subhead: 'Guiding corporate organizations, founders, and private clients through complex regulatory frameworks and commercial transactions.',
    metrics: ['10+ Years Practice', 'Top Tier Bar Advocates', 'Strict Confidentiality'],
    features: ['Encrypted Client Brief Room', 'Contract Risk Evaluation', 'Retainer Advisory Portals']
  },
  agency: {
    id: 'agency',
    label: 'Creative Design & Tech Agency',
    icon: Palette,
    tagline: 'Design, Branding & Digital Products',
    headline: (name) => `We Build Digital Products People Love at ${name}`,
    subhead: 'From brand identity to custom web applications, we turn ambitious ideas into market-ready digital experiences.',
    metrics: ['35+ Digital Launches', 'Award-Winning UI/UX', 'Full Source Code Ownership'],
    features: ['Bespoke Brand Systems', 'Mobile-First Web Design', 'Search Engine & AI Optimization']
  }
};

const COLOR_THEMES = [
  { id: 'navy', label: 'Executive Navy & Gold', primary: '#092755', accent: '#FDD412', text: '#ffffff', badgeBg: 'rgba(253, 212, 18, 0.15)', badgeText: '#092755' },
  { id: 'emerald', label: 'Emerald Forest', primary: '#064e3b', accent: '#34d399', text: '#ffffff', badgeBg: 'rgba(52, 211, 153, 0.15)', badgeText: '#064e3b' },
  { id: 'indigo', label: 'Royal Indigo', primary: '#312e81', accent: '#a5b4fc', text: '#ffffff', badgeBg: 'rgba(165, 180, 252, 0.2)', badgeText: '#312e81' },
  { id: 'crimson', label: 'Modern Crimson', primary: '#881337', accent: '#fda4af', text: '#ffffff', badgeBg: 'rgba(253, 164, 175, 0.2)', badgeText: '#881337' },
  { id: 'slate', label: 'Tech Minimalist', primary: '#0f172a', accent: '#38bdf8', text: '#ffffff', badgeBg: 'rgba(56, 189, 248, 0.15)', badgeText: '#0f172a' }
];

const AIBuilderBootcamp: React.FC = () => {
  useEffect(() => {
    document.title = "AI Builder Bootcamp Nigeria | Build Apps Without Coding — DigiBeloved";
    window.scrollTo(0, 0);
  }, []);

  // WhatsApp Enrollment & Inquiry Links
  const enrollmentMsg = "Hello, I want to enroll in the DigiBeloved AI Builder Bootcamp for ₦100,000. Please send me payment details.";
  const inquiryMsg = "Hello, I have a question about the DigiBeloved AI Builder Bootcamp before enrolling.";

  const primaryCTAUrl = `https://wa.me/2348067628656?text=${encodeURIComponent(enrollmentMsg)}`;
  const secondaryCTAUrl = `https://wa.me/2348067628656?text=${encodeURIComponent(inquiryMsg)}`;

  // Interactive Showcase State
  const [activeTab, setActiveTab] = useState<'website' | 'android' | 'dashboard' | 'aitool'>('website');
  const [businessName, setBusinessName] = useState('Apex Innovations');
  const [selectedCategory, setSelectedCategory] = useState<string>('consulting');
  const [selectedThemeId, setSelectedThemeId] = useState<string>('navy');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  // FAQ open states
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeTheme = COLOR_THEMES.find(t => t.id === selectedThemeId) || COLOR_THEMES[0];
  const activeTemplate = CATEGORY_TEMPLATES[selectedCategory] || CATEGORY_TEMPLATES['consulting'];

  const curriculumWeeks = [
    {
      week: "WEEK 1",
      title: "Understand How Software Works",
      tagline: "From using technology to understanding how it's built.",
      description: "Before you create software, you'll learn how websites, apps, and digital systems work.",
      learnings: [
        "How websites and mobile apps work",
        "The main parts of a software application",
        "How to turn a problem into a software idea",
        "How AI can help you plan and build digital products",
        "How to break a large project into manageable steps"
      ],
      activity: "Plan your first software idea and draw a simple map of how it will work.",
      outcome: "A clear project idea and a simple plan for building it."
    },
    {
      week: "WEEK 2",
      title: "Learn How to Give AI Better Instructions",
      tagline: "The better you guide AI, the better the software you can build.",
      description: "AI works best when it understands what you're trying to achieve. You'll learn Context Engineering: giving AI the right requirements, examples, and instructions.",
      learnings: [
        "How to explain your software idea to AI",
        "How to write clear instructions for AI builders",
        "How to describe app features and user needs",
        "How to plan software screens and workflows",
        "How to review and improve AI-generated results"
      ],
      activity: "Turn your project idea into a structured set of instructions an AI development tool can follow.",
      outcome: "A practical software-building plan you can reuse and improve."
    },
    {
      week: "WEEK 3",
      title: "Meet Your AI Software Building Assistant",
      tagline: "Learn to build with AI-powered development tools.",
      description: "You don't have to write every line of code yourself. Modern AI development environments can help generate, explain, test, and improve software.",
      learnings: [
        "How to set up an AI-powered development workspace",
        "How to ask AI to build software features",
        "How to review the results",
        "How to find and fix common errors",
        "How to test whether your software works"
      ],
      activity: "Build and test your first simple, functional application.",
      outcome: "Your first working mini-application."
    },
    {
      week: "WEEK 4",
      title: "Build and Launch a Professional Website",
      tagline: "Create a website you can actually use or show to a client.",
      description: "Learn how to create a modern website using AI-assisted development tools and make it easy to update content without breaking code.",
      learnings: [
        "How to design modern website pages",
        "How to create responsive mobile-friendly layouts",
        "How to add pages, forms, and useful features",
        "How to manage website content with a CMS",
        "How to improve basic search visibility and accessibility",
        "How to publish your website online"
      ],
      activity: "Build and publish a professional website with a simple content management system.",
      outcome: "A live website you can share with others."
    },
    {
      week: "WEEK 5",
      title: "Build Your First Android App",
      tagline: "Turn an everyday problem into a mobile application.",
      description: "Learn how AI can help you create an Android application prototype without beginning with traditional app development.",
      learnings: [
        "How mobile applications work",
        "How to plan your app's features",
        "How to create app screens and interactions",
        "How to test your Android application",
        "How to prepare an app for distribution",
        "How to identify potential customers and pricing opportunities"
      ],
      activity: "Build and test a functional Android app prototype.",
      outcome: "A working Android application prototype and a basic monetization plan.",
      note: "*Publishing to app stores may require separate accounts, developer fees, approvals, and compliance steps."
    },
    {
      week: "WEEK 6",
      title: "Build a Complete Web Application",
      tagline: "Go beyond a website. Create software that actually does something.",
      description: "Connect different parts of software: where users register, submit information, and securely access saved records.",
      learnings: [
        "How the visible part of an app interacts with data",
        "How applications store and retrieve information",
        "How to connect an app to a database",
        "How to add user interactions and useful features",
        "How to integrate an appropriate AI capability",
        "How to test, troubleshoot, and publish your application"
      ],
      activity: "Build a working web application with a database and useful interactive features.",
      outcome: "A functional full-stack application deployed online."
    },
    {
      week: "WEEK 7",
      title: "Build Something of Your Own (Capstone)",
      tagline: "Your idea. Your project. Your next step.",
      description: "Choose a real problem you want to solve and develop your own custom software project with mentorship and practical guidance.",
      learnings: [
        "Refine your idea and define essential user flows",
        "Plan the important features and data architecture",
        "Build and test your solution end-to-end",
        "Prepare your project for launch",
        "Present what you've created to peers and mentors",
        "Explore how to improve, package, or monetize it"
      ],
      activity: "Develop a custom business site, mobile app, client management tool, booking app, or custom AI utility.",
      outcome: "A working capstone project and a practical plan for what to do next."
    }
  ];

  const faqs = [
    {
      q: "1. Do I need to know how to code?",
      a: "No. This programme is designed for beginners. You'll use AI-powered tools to help create software while learning how applications work, how to give AI useful instructions, and how to test and improve what you build."
    },
    {
      q: "2. Do I need a Computer Science degree?",
      a: "No. You don't need a computer science degree or previous software development experience. You do need a willingness to learn, practise, and solve problems."
    },
    {
      q: "3. Is the programme live or self-paced?",
      a: "It is a structured cohort-based programme. Learners progress together through seven weeks of training, practical exercises, and guided projects to maintain momentum and accountability."
    },
    {
      q: "4. How much time do I need each week?",
      a: "The programme includes approximately three hours of guided learning per week. You should also plan for independent practice and project work outside the guided sessions. The amount of additional time will depend on your experience and chosen projects."
    },
    {
      q: "5. What will I actually build?",
      a: "You'll practise building professional websites, an Android app prototype, a database-connected web application, and a custom capstone project of your choice. The focus is on building functional projects rather than simply watching demonstrations."
    },
    {
      q: "6. Do I need a laptop?",
      a: "Yes. A working laptop or desktop computer (Windows, macOS, or Linux) with a modern web browser and a stable internet connection is required to run the development workspaces and participate in practical sessions."
    },
    {
      q: "7. Will I have to pay for other software or tools?",
      a: "Many modern AI development platforms and tools offer generous free tiers that are more than sufficient for the bootcamp projects. Any optional third-party costs (such as custom domain registration or specialized cloud hosting) will be clearly disclosed in advance."
    },
    {
      q: "8. Will my Android app be available on the Play Store?",
      a: "You'll learn to develop and test an Android application and understand the process of preparing it for distribution. Publishing on the Google Play Store requires compliance with Google's policies, a one-time Google Play Developer fee ($25 charged directly by Google), and app approval."
    },
    {
      q: "9. Can I make money with the skills?",
      a: "The skills can help you explore opportunities such as website development, digital products, freelance services, and business automation. However, the training does not guarantee employment, clients, or specific earnings. Your results depend on your effort and market demand."
    },
    {
      q: "10. Will I receive mentorship?",
      a: "Yes. Mentorship, project feedback, and troubleshooting guidance are included directly with the DigiBeloved engineering and training team throughout the programme."
    },
    {
      q: "11. Can I join from outside Abuja?",
      a: "Yes! The programme is conducted live online for participants across Nigeria and globally. In-person hybrid workshop arrangements in Abuja are also available on request."
    },
    {
      q: "12. Can my company enroll a team?",
      a: "Yes. DigiBeloved supports corporate and group training cohorts. Contact our team to discuss customized team schedules and organizational training requirements."
    },
    {
      q: "13. What is the refund policy?",
      a: "DigiBeloved offers a programme delivery commitment: we are committed to delivering the training, mentorship, and project guidance described. If DigiBeloved fails to deliver an eligible part of the scheduled programme, you may request a refund in line with our published delivery guarantee terms."
    },
    {
      q: "14. When does the next cohort start?",
      a: "Cohort admission is currently open for the 2026 intake. Once you initiate your enrollment via WhatsApp, our team will provide the exact cohort orientation schedule and your onboarding access."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "DigiBeloved AI Builder Bootcamp: Build Real Websites, Mobile Apps & AI Tools",
        "description": "Learn how to use AI to turn your ideas into working websites, mobile apps, and business tools in 7 weeks without prior coding experience.",
        "provider": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "url": "https://digibeloved.com"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Online, Hybrid",
          "duration": "P7W",
          "offers": {
            "@type": "Offer",
            "price": "100000.00",
            "priceCurrency": "NGN",
            "category": "Paid"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen text-navy font-sans antialiased selection:bg-[#FDD412] selection:text-[#092755]">
      <SchemaScript schema={schema} />

      {/* Trust Banner / Freshness Tag */}
      <div className="bg-[#092755] text-slate-300 text-xs py-2.5 px-4 text-center border-b border-white/10 font-medium tracking-wide flex items-center justify-center space-x-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FDD412] animate-pulse" />
        <span>Programme: 2026 Cohort • AI-Assisted Software Development for Beginners • Enrollment Open</span>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1 — HERO                                                          */}
      {/* ========================================================================= */}
      <header className="relative bg-[#092755] text-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden border-b border-[#092755]/20">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-[#FDD412]/30 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#FDD412] uppercase mb-6 shadow-sm">
            <span>NOW ENROLLING — NEXT COHORT</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15] max-w-4xl mx-auto">
            Build Real Websites, Mobile Apps &amp; AI Tools —{" "}
            <span className="text-[#FDD412] block sm:inline">Even If You Can&apos;t Code.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-slate-200 font-semibold mb-6 max-w-2xl mx-auto leading-relaxed">
            Your ideas deserve to become real products.
          </p>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            In just 7 weeks, learn how to use AI to turn your ideas into working websites, mobile apps, and useful business tools. No programming experience required.
          </p>

          {/* Programme Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10 text-left text-xs sm:text-sm text-slate-200">
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 p-3 rounded-xl">
              <Check className="w-4 h-4 text-[#FDD412] shrink-0" />
              <span>7 weeks hands-on learning</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 p-3 rounded-xl">
              <Clock className="w-4 h-4 text-[#FDD412] shrink-0" />
              <span>3 hours guided training / week</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 p-3 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-[#FDD412] shrink-0" />
              <span>Beginner-friendly (zero coding)</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 p-3 rounded-xl">
              <Rocket className="w-4 h-4 text-[#FDD412] shrink-0" />
              <span>Real projects, not just theory</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 p-3 rounded-xl">
              <Users className="w-4 h-4 text-[#FDD412] shrink-0" />
              <span>Live mentorship &amp; community</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 p-3 rounded-xl">
              <Laptop className="w-4 h-4 text-[#FDD412] shrink-0" />
              <span>Online + Abuja hybrid options</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 max-w-md mx-auto">
            <a
              href={primaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('AI Builder Bootcamp - Hero Enroll', '/ai-builder-bootcamp')}
              className="bg-[#FDD412] text-[#092755] hover:bg-yellow-400 font-extrabold px-8 py-4 rounded-xl text-base transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Reserve My Spot — ₦100,000</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('AI Builder Bootcamp - Hero Speak Team', '/ai-builder-bootcamp')}
              className="bg-white/10 hover:bg-white hover:text-[#092755] text-white border border-white/20 font-bold px-6 py-4 rounded-xl text-base transition-all flex items-center justify-center"
            >
              <span>Speak With Our Team</span>
            </a>
          </div>

          {/* Trust Microcopy */}
          <div className="text-xs text-slate-400 font-mono flex items-center justify-center space-x-3">
            <span>🔒 Secure Enrollment</span>
            <span>•</span>
            <span>🤝 Mentorship Included</span>
            <span>•</span>
            <span>🛡️ Refund Policy Applies</span>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* TASK: INTERACTIVE PROJECT SHOWCASE ("See What You Can Learn to Build")      */}
      {/* ========================================================================= */}
      <section id="project-showcase" className="py-20 md:py-28 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-white border border-[#092755]/10 px-3.5 py-1.5 rounded-full mb-3 inline-block shadow-2xs">
              Interactive Builder Preview
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092755] tracking-tight">
              See What You Can Learn to Build
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Below are the 4 core digital product categories taught across the 7 weeks. Test our interactive business website simulator below to see how dynamic software components fit together.
            </p>
          </div>

          {/* Project Category Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {[
              { id: 'website', label: '1. Professional Website', week: 'Week 4', icon: Monitor },
              { id: 'android', label: '2. Android Application', week: 'Week 5', icon: Smartphone },
              { id: 'dashboard', label: '3. Business Tool', week: 'Week 6', icon: Database },
              { id: 'aitool', label: '4. Custom AI Tool', week: 'Week 7', icon: Sparkles },
            ].map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                    isActive
                      ? 'bg-[#092755] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#FDD412]' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20 text-[#FDD412]' : 'bg-slate-100 text-slate-500'}`}>
                    {tab.week}
                  </span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: INTERACTIVE BUSINESS WEBSITE SIMULATOR */}
          {activeTab === 'website' && (
            <div className="bg-white border border-[#092755]/15 rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                
                {/* Control Panel (Inputs) */}
                <div className="w-full lg:w-4/12 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
                  <div className="flex items-center space-x-2 border-b border-slate-200 pb-3">
                    <Sliders className="w-4 h-4 text-[#092755]" />
                    <h3 className="text-sm font-extrabold text-[#092755] uppercase tracking-wider">
                      Website Customizer
                    </h3>
                  </div>

                  {/* Input 1: Business Name */}
                  <div>
                    <label htmlFor="biz-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                      1. Enter Business Name:
                    </label>
                    <input
                      id="biz-name"
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Apex Innovations"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-navy font-semibold focus:outline-none focus:ring-2 focus:ring-[#092755]"
                    />
                  </div>

                  {/* Input 2: Category Selector */}
                  <div>
                    <label htmlFor="biz-cat" className="block text-xs font-bold text-slate-700 mb-1.5">
                      2. Choose Industry Sector:
                    </label>
                    <div className="space-y-1.5">
                      {Object.values(CATEGORY_TEMPLATES).map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                            selectedCategory === cat.id
                              ? 'bg-[#092755] text-white'
                              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                          }`}
                        >
                          <span>{cat.label}</span>
                          {selectedCategory === cat.id && <Check className="w-3.5 h-3.5 text-[#FDD412]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input 3: Color Theme Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      3. Select Brand Colour:
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {COLOR_THEMES.map((theme) => (
                        <button
                          key={theme.id}
                          type="button"
                          onClick={() => setSelectedThemeId(theme.id)}
                          style={{ backgroundColor: theme.primary }}
                          title={theme.label}
                          className={`h-9 rounded-xl border-2 transition-transform ${
                            selectedThemeId === theme.id ? 'border-[#FDD412] scale-110 shadow-md ring-2 ring-[#092755]/20' : 'border-transparent opacity-80 hover:opacity-100'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono mt-1 block">
                      Theme: {activeTheme.label}
                    </span>
                  </div>

                  {/* Device Toggle */}
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Viewport Simulation:</span>
                    <div className="flex bg-slate-200 rounded-lg p-0.5">
                      <button
                        type="button"
                        onClick={() => setDeviceView('desktop')}
                        className={`px-2.5 py-1 rounded text-[11px] font-bold ${deviceView === 'desktop' ? 'bg-white text-navy shadow-xs' : 'text-slate-600'}`}
                      >
                        Desktop
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeviceView('mobile')}
                        className={`px-2.5 py-1 rounded text-[11px] font-bold ${deviceView === 'mobile' ? 'bg-white text-navy shadow-xs' : 'text-slate-600'}`}
                      >
                        Mobile
                      </button>
                    </div>
                  </div>

                  {/* Disclaimer Label */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-900 leading-snug">
                    <strong className="block mb-0.5">Demonstration Notice:</strong>
                    This preview renders predefined components to show how modern software structures are assembled. In Week 4, you will build live client-ready websites.
                  </div>
                </div>

                {/* Interactive Simulated Device Frame */}
                <div className="w-full lg:w-8/12 flex justify-center">
                  <div
                    className={`w-full transition-all duration-300 rounded-2xl border border-slate-300 overflow-hidden shadow-2xl bg-white ${
                      deviceView === 'mobile' ? 'max-w-[360px]' : 'max-w-full'
                    }`}
                  >
                    {/* Browser Chrome Header */}
                    <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center space-x-2">
                      <div className="flex space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                      </div>
                      <div className="bg-white border border-slate-200 text-slate-500 text-[10px] font-mono px-3 py-1 rounded-md flex-1 text-center truncate">
                        https://www.{businessName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'mybrand'}.com
                      </div>
                      <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        Live Preview
                      </span>
                    </div>

                    {/* Simulated Website Content */}
                    <div className="p-0">
                      {/* Sub-Nav */}
                      <div
                        style={{ backgroundColor: activeTheme.primary }}
                        className="px-6 py-4 flex items-center justify-between text-white"
                      >
                        <div className="flex items-center space-x-2 font-extrabold text-sm sm:text-base tracking-tight">
                          <span
                            style={{ backgroundColor: activeTheme.accent, color: activeTheme.primary }}
                            className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs"
                          >
                            {businessName.charAt(0) || 'A'}
                          </span>
                          <span className="truncate max-w-[180px]">{businessName || 'Your Business'}</span>
                        </div>
                        <div className="hidden sm:flex space-x-4 text-xs font-medium text-slate-300">
                          <span>Services</span>
                          <span>About</span>
                          <span>Outcomes</span>
                          <span style={{ color: activeTheme.accent }}>Contact</span>
                        </div>
                      </div>

                      {/* Sub-Hero */}
                      <div className="p-6 sm:p-10 bg-gradient-to-b from-slate-50 to-white text-left">
                        <div
                          style={{ backgroundColor: activeTheme.badgeBg, color: activeTheme.badgeText }}
                          className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                        >
                          {activeTemplate.tagline}
                        </div>
                        
                        <h4 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight mb-3 leading-snug">
                          {activeTemplate.headline(businessName || 'Your Brand')}
                        </h4>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-xl">
                          {activeTemplate.subhead}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-2.5 mb-8">
                          <button
                            type="button"
                            style={{ backgroundColor: activeTheme.primary, color: activeTheme.text }}
                            className="px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs"
                          >
                            Explore Our Services
                          </button>
                          <button
                            type="button"
                            className="px-4 py-2.5 rounded-xl font-bold text-xs border border-slate-300 text-slate-700 bg-white"
                          >
                            Book Consultation
                          </button>
                        </div>

                        {/* Metrics Bar */}
                        <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-100 text-left">
                          {activeTemplate.metrics.map((m, i) => (
                            <div key={i}>
                              <span className="text-[10px] sm:text-xs font-bold text-navy block">{m}</span>
                              <span className="text-[9px] text-slate-400 font-mono">Verified System</span>
                            </div>
                          ))}
                        </div>

                        {/* Features Pill List */}
                        <div className="mt-6 space-y-2">
                          <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                            Core Capabilities:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {activeTemplate.features.map((f, i) => (
                              <div key={i} className="bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl text-[11px] font-medium text-slate-700 flex items-center space-x-1.5">
                                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: ANDROID APPLICATION SHOWCASE */}
          {activeTab === 'android' && (
            <div className="bg-white border border-[#092755]/15 rounded-3xl p-8 sm:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-left space-y-4">
                  <span className="text-xs font-mono font-bold uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    Week 5 Project • Android App Architecture
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#092755]">
                    Build &amp; Test Functional Mobile Applications
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Learn how AI can help you create an Android application without beginning with traditional coding. In Week 5, you build working screens, configure buttons and state, and test the app live on a device or emulator.
                  </p>
                  
                  <div className="space-y-2 pt-2">
                    <div className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Screen Layouts &amp; Navigation:</strong> Design clean mobile interfaces optimized for phones and tablets.</span>
                    </div>
                    <div className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>State &amp; Input Collection:</strong> Collect user forms, validate details, and trigger actions.</span>
                    </div>
                    <div className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Packaging &amp; Distribution Steps:</strong> Understand signing, APK/bundle creation, and store requirements.</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 font-mono">
                    *Prototype demonstration project. In the bootcamp, you assemble and test actual Android components.
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-[280px] bg-[#09152F] rounded-[36px] p-4 border-4 border-slate-800 shadow-2xl text-white">
                    <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-4" />
                    <div className="space-y-3 font-sans text-left">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                        <span className="font-bold text-[#FDD412]">ParcelTracker App</span>
                        <span className="text-[10px] text-emerald-400">Online</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1">
                        <span className="text-[10px] text-slate-400 block font-mono">Active Shipment</span>
                        <span className="text-xs font-bold text-white block">Abuja → Lagos Central</span>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-2">
                          <div className="bg-[#FDD412] h-full w-3/4" />
                        </div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/10 space-y-1.5">
                        <span className="text-[10px] text-slate-400 block font-mono">Recent Updates</span>
                        <div className="text-[11px] text-slate-200">• Dispatch Cleared Garki (10:14 AM)</div>
                        <div className="text-[11px] text-slate-200">• In Transit via Cargo Node 04</div>
                      </div>
                      <button type="button" className="w-full py-2.5 bg-[#FDD412] text-[#092755] font-extrabold text-xs rounded-xl mt-4">
                        Send Customer WhatsApp Alert
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BUSINESS MANAGEMENT TOOL SHOWCASE */}
          {activeTab === 'dashboard' && (
            <div className="bg-white border border-[#092755]/15 rounded-3xl p-8 sm:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 text-left space-y-4">
                  <span className="text-xs font-mono font-bold uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                    Week 6 Project • Full-Stack Database Integration
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#092755]">
                    Build Applications That Collect, Store &amp; Sync Records
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Go beyond static web pages. Create software that connects to a database: where users register, submit operational data, filter inventory records, and view metrics in real time.
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Cloud Database Connection:</strong> Link frontend forms to PostgreSQL/Supabase to store client data safely.</span>
                    </div>
                    <div className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Role-Based Access:</strong> Configure separate views for administrators, employees, and clients.</span>
                    </div>
                    <div className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Search &amp; Filter Pipelines:</strong> Allow fast searching of orders, invoices, and contact briefs.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  {/* Mock Operations Dashboard Panel */}
                  <div className="bg-[#09152F] rounded-2xl p-5 border border-white/10 text-white font-mono text-xs shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <span className="text-[#FDD412] font-bold">Portal Database Engine</span>
                      <span className="text-emerald-400">PostgreSQL Live Sync</span>
                    </div>
                    <div className="space-y-2 font-sans">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-white block">Client Brief #1042</span>
                          <span className="text-[10px] text-slate-400 font-mono">Emeka Agro Enterprises</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                          Validated ✓
                        </span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-white block">Invoice Reconciled #890</span>
                          <span className="text-[10px] text-slate-400 font-mono">₦450,000 • Paystack Cleared</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                          Auto-Archived
                        </span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-white block">WhatsApp Lead Auto-Assigned</span>
                          <span className="text-[10px] text-slate-400 font-mono">Dr. Hassan Dental • Abuja</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">
                          In Progress
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CUSTOM AI TOOL SHOWCASE */}
          {activeTab === 'aitool' && (
            <div className="bg-white border border-[#092755]/15 rounded-3xl p-8 sm:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 text-left space-y-4">
                  <span className="text-xs font-mono font-bold uppercase text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                    Week 7 Capstone • AI-Powered Utilities
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#092755]">
                    Build Tools That Integrate AI Capabilities Directly
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Learn how to connect software interfaces directly to AI models like Google Gemini or Claude. You can build tools that summarize documents, extract insights from messy receipts, or automatically draft customer proposals.
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Prompt Architecture &amp; System Framing:</strong> Direct AI models with strict constraints so they produce reliable, structured outputs.</span>
                    </div>
                    <div className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>API Integration:</strong> Connect AI models into clean web UI buttons with real-time response rendering.</span>
                    </div>
                    <div className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Personal Capstone Launch:</strong> Choose a problem that matters to you and build a solution under mentor review.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-[#09152F] rounded-2xl p-5 border border-white/10 text-white text-xs shadow-xl space-y-3 font-mono">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-[#FDD412] font-bold">Proposal Auto-Draft Engine</span>
                      <span className="text-[10px] text-purple-400">Gemini 3 Integration</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-[11px] text-slate-300">
                      <span className="text-slate-400 block text-[9px] uppercase font-bold">Raw Input Brief:</span>
                      &quot;Client needs a 4-page clinic site with booking bot and staff directory in Wuse II Abuja.&quot;
                    </div>
                    <div className="bg-[#FDD412]/10 border border-[#FDD412]/30 p-3 rounded-xl text-[11px] text-[#FDD412]">
                      <span className="text-white block text-[9px] uppercase font-bold">AI Structured Deliverable:</span>
                      ✓ Scoped 4 Pages &bull; Integrated WhatsApp Triage &bull; ₦350,000 Milestones Spec Generated
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section Call to Action */}
          <div className="mt-14 text-center">
            <a
              href={primaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('AI Builder Bootcamp - Showcase Enroll', '/ai-builder-bootcamp')}
              className="inline-flex items-center bg-[#092755] text-white hover:bg-[#0e336d] font-extrabold px-8 py-4 rounded-xl text-base transition-all transform hover:scale-[1.01] shadow-lg space-x-2"
            >
              <span>Learn to Build Projects Like These — Enroll for ₦100,000</span>
              <ArrowRight className="w-4 h-4 text-[#FDD412]" />
            </a>
            <p className="text-xs text-slate-500 font-mono mt-2.5">
              Hands-on guidance &bull; 7 weeks &bull; 3 hours per week &bull; Beginner friendly
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — THE BIG FOUR                                                  */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-slate-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Essential Summary
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight">
              Everything You Need to Know at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 01. What is it? */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:border-[#092755]/30 transition-all">
              <span className="text-xs font-mono font-bold text-[#092755] bg-white border border-slate-200 px-2.5 py-1 rounded-md inline-block mb-3">
                01. What is it?
              </span>
              <h3 className="text-xl font-bold text-[#092755] mb-2">
                A 7-Week AI Software Building Bootcamp
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn how to create real software using AI-powered development tools, without starting with traditional coding.
              </p>
            </div>

            {/* 02. Who is it for? */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:border-[#092755]/30 transition-all">
              <span className="text-xs font-mono font-bold text-[#092755] bg-white border border-slate-200 px-2.5 py-1 rounded-md inline-block mb-3">
                02. Who is it for?
              </span>
              <h3 className="text-xl font-bold text-[#092755] mb-2">
                Beginners, Entrepreneurs &amp; Ambitious Professionals
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you are a student, business owner, working professional, or aspiring freelancer, you can start here.
              </p>
            </div>

            {/* 03. How much does it cost? */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:border-[#092755]/30 transition-all">
              <span className="text-xs font-mono font-bold text-[#092755] bg-white border border-slate-200 px-2.5 py-1 rounded-md inline-block mb-3">
                03. How much does it cost?
              </span>
              <h3 className="text-xl font-bold text-[#092755] mb-2">
                ₦100,000 — Complete Programme
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your enrollment covers the seven-week training, guided projects, mentorship, and community access.
              </p>
            </div>

            {/* 04. How does it work? */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:border-[#092755]/30 transition-all">
              <span className="text-xs font-mono font-bold text-[#092755] bg-white border border-slate-200 px-2.5 py-1 rounded-md inline-block mb-3">
                04. How does it work?
              </span>
              <h3 className="text-xl font-bold text-[#092755] mb-2">
                Learn → Build → Test → Launch
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Follow practical lessons, create working projects, and build the confidence to bring your own ideas to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — PROBLEM & OPPORTUNITY                                         */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-left">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092755] tracking-tight">
              You Have Ideas. Now You Can Learn to Build Them.
            </h2>
          </div>

          <div className="bg-white border border-[#092755]/10 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p>
              Think about that website you&apos;ve always wanted to create.
            </p>
            <p>
              Or the mobile app that could solve a problem in your community.
            </p>
            <p>
              Maybe it&apos;s a business tool that could save hours of work every week.
            </p>
            <p className="text-slate-500 font-light">
              Until recently, building these solutions usually meant learning to code for months or paying someone else to develop them.
            </p>

            <div className="py-4 border-y border-slate-100">
              <h3 className="text-xl sm:text-2xl font-bold text-[#092755] mb-2">
                AI is changing how software gets built.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Today, AI-powered development tools can help you write code, create layouts, connect databases, fix errors, and turn ideas into functional applications.
              </p>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                But there is an important difference between using AI to ask questions and knowing how to use AI to build something useful.
              </p>
              <p className="text-[#092755] font-bold text-sm sm:text-base mt-2">
                That&apos;s the skill you&apos;ll develop here.
              </p>
            </div>

            <div className="pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#092755] mb-3">
                Don&apos;t Just Use AI. Learn to Build With It.
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-4">
                The DigiBeloved AI Builder Bootcamp teaches you how to take an idea, plan a solution, guide AI development tools, and create real software. You won&apos;t just watch videos about AI.
              </p>
              <p className="text-slate-600 text-sm sm:text-base mb-6">
                You&apos;ll work on practical projects, understand how your applications function, and learn how to improve what you&apos;ve built.
              </p>
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-sm font-semibold">
                You don&apos;t need to become a traditional programmer before you can start building. You need the right tools, clear guidance, practical skills, and consistent practice.
              </div>
            </div>

            <div className="pt-4 text-center">
              <a
                href={primaryCTAUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick('AI Builder Bootcamp - Problem CTA', '/ai-builder-bootcamp')}
                className="inline-flex items-center bg-[#092755] text-white hover:bg-[#0e336d] font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-md space-x-2"
              >
                <span>I Want to Start Building</span>
                <ArrowRight className="w-4 h-4 text-[#FDD412]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — WHAT YOU WILL BE ABLE TO DO                                   */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Capabilities Acquired
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092755] tracking-tight">
              Imagine What You Could Create in 7 Weeks
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
              By the end of the bootcamp, you&apos;ll have practised the skills needed to create useful digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* 1. Build Professional Websites */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-[#092755]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#092755] text-[#FDD412] flex items-center justify-center font-bold mb-4">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#092755] mb-2">Build Professional Websites</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Create modern, responsive websites for your business, personal brand, or potential clients.
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Learn how to make your website easy to update and easier for people and search engines to discover.
                </p>
              </div>
            </div>

            {/* 2. Create Mobile Applications */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-[#092755]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#092755] text-[#FDD412] flex items-center justify-center font-bold mb-4">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#092755] mb-2">Create Mobile Applications</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Learn how to use AI-powered tools to develop and test Android applications that solve everyday problems.
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Understand the steps involved in preparing an app for release and distribution.
                </p>
              </div>
            </div>

            {/* 3. Build Business Tools */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-[#092755]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#092755] text-[#FDD412] flex items-center justify-center font-bold mb-4">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#092755] mb-2">Build Business Tools</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Create applications that collect information, save records, and help people manage everyday business operations.
                </p>
              </div>
            </div>

            {/* 4. Work With AI Development Agents */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-[#092755]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#092755] text-[#FDD412] flex items-center justify-center font-bold mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#092755] mb-2">Work With AI Development Agents</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Learn how to give AI clear instructions, review its work, test applications, and troubleshoot the results.
                </p>
              </div>
            </div>

            {/* 5. Launch Your Own Digital Product */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-[#092755]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#092755] text-[#FDD412] flex items-center justify-center font-bold mb-4">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#092755] mb-2">Launch Your Own Digital Product</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Take an idea from concept to working prototype and learn how to make it available to real users on the internet.
                </p>
              </div>
            </div>

            {/* 6. Explore Ways to Earn From Your Skills */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-[#092755]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#092755] text-[#FDD412] flex items-center justify-center font-bold mb-4">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#092755] mb-2">Explore Ways to Earn</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Learn how to identify customer problems, package software solutions, approach potential clients, and price your services.
                </p>
              </div>
            </div>
          </div>

          {/* Important Notice Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
            <strong className="text-navy font-bold">Important Notice:</strong> The bootcamp provides practical training and guidance. Employment, income, client acquisition, and business success depend on individual effort, market demand, and other factors.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — CURRICULUM                                                    */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-white border border-[#092755]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Detailed Syllabus
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092755] tracking-tight">
              7 Weeks. Practical Lessons. Real Projects.
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
              From Your First Idea to Your Own Software Project. Each week introduces a new set of skills and practical activities. You learn by doing.
            </p>
          </div>

          <div className="space-y-6">
            {curriculumWeeks.map((week, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 hover:border-[#092755]/40 transition-all shadow-sm"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-4 mb-4 gap-2">
                  <div>
                    <span className="text-xs font-mono font-extrabold text-[#092755] bg-[#FDD412] px-3 py-1 rounded-full mr-3 inline-block shadow-2xs">
                      {week.week}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#092755] inline">
                      {week.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500 italic">
                    {week.tagline}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {week.description}
                </p>

                {/* What you'll learn */}
                <div className="mb-6">
                  <span className="text-xs font-bold font-mono text-[#092755] uppercase tracking-wider block mb-2">
                    What you&apos;ll learn:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {week.learnings.map((l, i) => (
                      <div key={i} className="flex items-start text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                        <span>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical activity & outcome */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                    <span className="font-bold text-[#092755] block mb-1">Practical Activity:</span>
                    <span className="text-slate-600">{week.activity}</span>
                  </div>
                  <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/60">
                    <span className="font-bold text-emerald-900 block mb-1">Your Outcome:</span>
                    <span className="text-emerald-800 font-semibold">{week.outcome}</span>
                  </div>
                </div>

                {week.note && (
                  <p className="text-[11px] text-slate-400 font-mono mt-3 italic">
                    {week.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6 — HOW THE TRAINING WORKS                                        */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight">
              You Won&apos;t Be Learning Alone.
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
              Building software for the first time can feel overwhelming. That&apos;s why this programme combines structured lessons, hands-on projects, mentorship, and community support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-12">
            {[
              { step: 'Step 1', title: 'Enroll', desc: 'Reserve your place in the next cohort and receive your onboarding information.' },
              { step: 'Step 2', title: 'Learn With Guidance', desc: 'Attend structured training sessions and follow practical demonstrations.' },
              { step: 'Step 3', title: 'Build Your Projects', desc: 'Apply what you learn to real software projects using AI development tools.' },
              { step: 'Step 4', title: 'Get Feedback', desc: 'Ask questions, troubleshoot problems, and receive guidance from the training team.' },
              { step: 'Step 5', title: 'Launch & Keep Improving', desc: 'Share your projects, present your capstone, and develop a plan for continuing.' },
            ].map((s, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between text-left">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#092755] bg-white border border-slate-200 px-2 py-0.5 rounded block w-max mb-2">
                    {s.step}
                  </span>
                  <h3 className="text-base font-bold text-[#092755] mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={primaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('AI Builder Bootcamp - How It Works Join', '/ai-builder-bootcamp')}
              className="inline-flex items-center bg-[#FDD412] text-[#092755] hover:bg-yellow-400 font-extrabold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md space-x-2"
            >
              <span>Join the Next Cohort — ₦100,000</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7 — WHAT'S INCLUDED                                               */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#092755] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FDD412] uppercase bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Full Programme Inclusions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              More Than Lessons. You Get a Practical Learning Experience.
            </h2>
            <p className="text-slate-300 mt-3 text-base sm:text-lg">
              Everything included with your ₦100,000 enrollment:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "7 Weeks of Structured Training",
                desc: "A step-by-step learning experience designed to take you from beginner concepts to practical software development."
              },
              {
                title: "Guided Software Projects",
                desc: "Hands-on activities involving websites, Android apps, AI development tools, and complete web applications."
              },
              {
                title: "Direct Mentorship",
                desc: "Get practical advice, feedback, and help when you encounter technical challenges."
              },
              {
                title: "Project Reviews",
                desc: "Learn how to identify weaknesses, improve functionality, and make your applications more reliable."
              },
              {
                title: "DigiBeloved Builder Community",
                desc: "Connect with other learners, exchange ideas, ask questions, and stay accountable."
              },
              {
                title: "Practical Business Guidance",
                desc: "Learn how to identify problems worth solving, package services, and explore ways to commercialize software."
              },
              {
                title: "Learn From Anywhere",
                desc: "Participate online, with hybrid training options available on request in Abuja."
              },
              {
                title: "Beginner-Friendly Teaching",
                desc: "We explain concepts in simple language and help you understand the purpose behind what you're building."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left flex items-start space-x-3.5 hover:bg-white/[0.08] transition-all">
                <Check className="w-5 h-5 text-[#FDD412] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8 — WHO SHOULD JOIN?                                              */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Ideal Participant Profile
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight">
              You Don&apos;t Need a Computer Science Degree to Start.
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
              This programme is designed for people who want practical software-building skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
            {[
              {
                title: "Entrepreneurs & Business Owners",
                desc: "You want to create websites, apps, or internal business tools without depending entirely on outside developers."
              },
              {
                title: "Students & Recent Graduates",
                desc: "You want a practical digital skill, real projects, and a stronger foundation for future opportunities."
              },
              {
                title: "Freelancers & Tech Aspirants",
                desc: "You want to learn how to create useful digital solutions and explore opportunities to offer them as services."
              },
              {
                title: "Working Professionals",
                desc: "You want to use AI to solve problems, automate processes, and become more effective in your work."
              },
              {
                title: "Creators and Innovators",
                desc: "You have an idea for a product or platform and want to build a working version."
              },
              {
                title: "Complete Beginners",
                desc: "You are interested in technology but have never written code or developed software before."
              }
            ].map((p, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#092755] mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-center text-xs sm:text-sm text-emerald-900 font-semibold max-w-2xl mx-auto">
            If you have an idea, a problem to solve, or a willingness to learn, this bootcamp is designed to help you get started.
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10 — BUSINESS AND CAREER OPPORTUNITIES                            */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-left">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-white border border-[#092755]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Practical Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight">
              Learn a Skill You Can Put to Work.
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto text-center">
              Building software with AI is not only about creating apps. It&apos;s about learning how to use technology to solve problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Website Development Services",
                desc: "Create websites for businesses, professionals, and organizations."
              },
              {
                title: "Custom Business Tools",
                desc: "Build simple applications that help organizations manage information or everyday tasks."
              },
              {
                title: "Digital Product Development",
                desc: "Develop your own software product and explore how to offer it to users."
              },
              {
                title: "AI-Assisted Freelancing",
                desc: "Use your project portfolio as a starting point for exploring relevant freelance opportunities."
              },
              {
                title: "Business Automation",
                desc: "Create useful workflows and tools that reduce repetitive manual work."
              },
              {
                title: "Personal & Professional Projects",
                desc: "Build tools that help you work more effectively or solve problems in your community."
              }
            ].map((opp, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <h3 className="text-base font-bold text-[#092755] mb-2">{opp.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{opp.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 font-mono text-center max-w-2xl mx-auto">
            Your results will depend on the quality of your work, continued learning, customer demand, and effort. The goal is to help you move from having ideas to having the practical skills to build and improve them.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11 — AUTHENTIC DEMONSTRATIONS & TEAM COMMITMENT                   */}
      {/* (Per Instructions: Replaced fabricated student claims with authentic      */}
      {/* demonstrations by the DigiBeloved training team)                           */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-slate-100 px-3 py-1.5 rounded-full inline-block mb-3">
            Instructional Quality
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight mb-4">
            Authentic Demonstrations. Real Engineering Standards.
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto mb-10">
            We do not publish unverified student claims. Every workflow, website, and mobile app in this curriculum is tested, built, and demonstrated by the DigiBeloved engineering team in Abuja.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mb-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🔍</span>
              <h3 className="text-sm font-bold text-navy mb-1.5">Verified Architecture</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Workflows are built with production-grade tooling: React, Node, Tailwind, and verified Gemini &amp; Claude APIs.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">🤝</span>
              <h3 className="text-sm font-bold text-navy mb-1.5">Direct Code Reviews</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Weekly office hours and line-by-line review of your project instructions and code with DigiBeloved engineers.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <span className="text-2xl mb-2 block">📍</span>
              <h3 className="text-sm font-bold text-navy mb-1.5">Physical Hub Access</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Headquartered at Maitama, Abuja. Hybrid options and in-person consultations available throughout the cohort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12 — PRICING                                                      */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#EEF3FB] border-b border-[#092755]/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-white border border-[#092755]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#092755] tracking-tight mb-3">
            Invest in the Skills to Build Your Own Software.
          </h2>
          <p className="text-slate-600 text-base mb-10">
            One programme. Practical training. Guided projects. Mentorship.
          </p>

          {/* Pricing Card */}
          <div className="bg-white border-2 border-[#092755] rounded-3xl p-8 sm:p-12 shadow-2xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#092755] text-[#FDD412] text-[10px] font-mono font-bold uppercase tracking-wider py-1.5 px-6 rounded-bl-2xl">
              2026 Cohort
            </div>

            <div className="border-b border-slate-100 pb-6 mb-6">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                DIGIBELOVED AI BUILDER BOOTCAMP
              </span>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl sm:text-6xl font-black text-[#092755] font-mono">
                  ₦100,000
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium">
                  Complete 7-Week Programme
                </span>
              </div>
            </div>

            <h3 className="text-sm font-bold font-mono text-[#092755] uppercase tracking-wider mb-4">
              Your Enrollment Includes:
            </h3>

            <div className="space-y-3 mb-8 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center space-x-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full 7-week training experience</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>3 hours of guided sessions per week</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hands-on software-building activities</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Website development project with CMS</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Android app development project prototype</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Complete web application with database</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Personal capstone project launch</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct mentorship and project feedback</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Access to the DigiBeloved builder community</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Practical guidance on launching and commercializing software</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <a
                href={primaryCTAUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick('AI Builder Bootcamp - Pricing Enroll', '/ai-builder-bootcamp')}
                className="flex-1 bg-[#092755] text-white hover:bg-[#0e336d] font-bold py-4 px-6 rounded-xl text-center text-sm transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <span>Enroll Now — ₦100,000</span>
                <ArrowRight className="w-4 h-4 text-[#FDD412]" />
              </a>
              <a
                href={secondaryCTAUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick('AI Builder Bootcamp - Pricing Ask Question', '/ai-builder-bootcamp')}
                className="bg-slate-100 hover:bg-slate-200 text-[#092755] font-bold py-4 px-6 rounded-xl text-center text-sm transition-all"
              >
                <span>Ask a Question Before Enrolling</span>
              </a>
            </div>

            {/* Disclosures & Commitment */}
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-500 leading-relaxed font-sans">
              <p>
                <strong>Important information:</strong> Some development tools, hosting services, domains, or app-store services may have separate costs. Any required or optional third-party expenses will be clearly communicated before enrollment.
              </p>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-slate-700">
                <strong className="block text-[#092755] mb-1">Our Delivery Commitment:</strong>
                We&apos;re committed to delivering the training, mentorship, and learning experience described on this page. If DigiBeloved fails to deliver an eligible part of the programme, you may request a refund in line with the published refund policy.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 13 — FREQUENTLY ASKED QUESTIONS                                   */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#092755] uppercase bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092755] tracking-tight">
              Have Questions? We&apos;ve Got Answers.
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Clear, transparent answers about curriculum, requirements, and participation.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-4.5 bg-slate-50/70 hover:bg-slate-100/70 font-bold text-sm sm:text-base text-[#092755] flex justify-between items-center transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-[#092755]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 py-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 14 — FINAL CALL TO ACTION                                         */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#092755] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Your Next Big Idea Doesn&apos;t Have to Remain Just an Idea.
          </h2>

          <div className="text-slate-300 text-sm sm:text-base space-y-2 mb-8 leading-relaxed font-light">
            <p>That website you&apos;ve been thinking about.</p>
            <p>That mobile app you wish existed.</p>
            <p>That tool that could make work easier for you or your business.</p>
          </div>

          <p className="text-base sm:text-lg text-white font-medium mb-10 max-w-xl mx-auto leading-relaxed">
            You can start learning how to build them. You don&apos;t need years of programming experience to begin. You need a practical starting point, the right tools, guidance, and a willingness to practise.
          </p>

          <div className="p-6 bg-white/5 border border-white/10 rounded-3xl mb-10 max-w-lg mx-auto">
            <h3 className="text-lg font-bold text-[#FDD412] mb-1">
              Join the DigiBeloved AI Builder Bootcamp
            </h3>
            <span className="text-xs text-slate-300 block mb-3">7 Weeks • Practical Skills • Real Projects</span>
            <span className="text-2xl sm:text-3xl font-black font-mono text-white block">
              Programme Fee: ₦100,000
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 max-w-md mx-auto">
            <a
              href={primaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('AI Builder Bootcamp - Final CTA Enroll', '/ai-builder-bootcamp')}
              className="bg-[#FDD412] text-[#092755] hover:bg-yellow-400 font-extrabold px-8 py-4 rounded-xl text-base transition-all transform hover:scale-[1.02] shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Yes, I Want to Build — Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryCTAUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick('AI Builder Bootcamp - Final CTA Question', '/ai-builder-bootcamp')}
              className="bg-white/10 hover:bg-white hover:text-[#092755] text-white border border-white/20 font-bold px-6 py-4 rounded-xl text-base transition-all flex items-center justify-center"
            >
              <span>I Have a Question First</span>
            </a>
          </div>

          <div className="text-xs text-slate-400 font-mono space-x-3">
            <span>Secure Enrollment</span>
            <span>•</span>
            <span>Online Learning</span>
            <span>•</span>
            <span>Mentorship Included</span>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-xs text-slate-400">
            <span className="font-extrabold tracking-widest uppercase text-white block mb-1">
              DIGIBELOVED — AI EDUCATION &amp; CONSULTING
            </span>
            <span className="italic">Helping people turn ideas into useful digital solutions.</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AIBuilderBootcamp;
