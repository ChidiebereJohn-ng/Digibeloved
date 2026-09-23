import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  BarChart3, 
  Workflow, 
  Code2, 
  GraduationCap, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { trackCtaClick } from '../src/services/metaPixel';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(true);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  }, [location.pathname]);

  const solutionLinks = [
    {
      name: 'Research & Data Analysis',
      path: '/data-analysis',
      icon: BarChart3,
      badge: 'Done-for-You',
      description: 'Turn raw data into defensible results, statistics, and reports.'
    },
    {
      name: 'AI & Workflow Automation',
      path: '/ai-automation',
      icon: Workflow,
      badge: 'Done-for-You',
      description: 'Replace repetitive manual tasks with reliable automated systems.'
    },
    {
      name: 'Custom Software Development',
      path: '/custom-software-development',
      icon: Code2,
      badge: 'Done-for-You',
      description: 'Web apps, portals, internal tools, and AI-native products.'
    },
    {
      name: 'AI Training for Organizations',
      path: '/ai-training-for-organizations',
      icon: GraduationCap,
      badge: 'Team Capability',
      description: 'Hands-on Generative AI workshops built around real employee workflows.'
    }
  ];

  const isSolutionsActive = solutionLinks.some(s => location.pathname === s.path);

  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans antialiased selection:bg-accent selection:text-navy">
      {/* Top Banner / Trust bar */}
      <div className="bg-[#07152E] text-slate-300 text-xs py-1.5 px-4 text-center border-b border-white/5 font-medium tracking-wide">
        <span>Based in Abuja, Nigeria • Serving clients globally</span>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="https://res.cloudinary.com/dn2mgiges/image/upload/v1754587273/DigiBeloved.png"
                alt="DigiBeloved"
                className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-navy leading-none">
                  DigiBeloved
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">
                  Applied AI &amp; Software
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1 lg:space-x-2 items-center">
              
              {/* Solutions Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  aria-expanded={isSolutionsOpen}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isSolutionsActive
                      ? 'text-navy font-bold bg-slate-50'
                      : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180 text-navy' : 'text-slate-400'}`} />
                </button>

                {isSolutionsOpen && (
                  <div 
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                    className="absolute left-0 mt-2 w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-3 py-1.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Our Commercial Solutions
                    </div>
                    {solutionLinks.map((item) => {
                      const Icon = item.icon;
                      const isCurrent = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsSolutionsOpen(false)}
                          className={`flex items-start p-3 rounded-xl transition-all ${
                            isCurrent ? 'bg-slate-50' : 'hover:bg-slate-50'
                          }`}
                        >
                          <div className="p-2 rounded-lg bg-navy/5 text-navy mr-3 mt-0.5 group-hover:bg-navy group-hover:text-accent transition-colors">
                            <Icon className="w-5 h-5 text-navy" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-navy leading-snug">{item.name}</span>
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Case Studies */}
              <Link
                to="/case-studies"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname === '/case-studies'
                    ? 'text-navy font-bold bg-slate-50'
                    : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                }`}
              >
                Case Studies
              </Link>

              {/* Products & Marketplace */}
              <Link
                to="/products"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1.5 ${
                  location.pathname === '/products' || location.pathname === '/ai-presentation-system' || location.pathname === '/free-blueprint'
                    ? 'text-navy font-bold bg-slate-50'
                    : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                }`}
              >
                <span>Products</span>
                <span className="text-[10px] font-extrabold uppercase bg-accent text-navy px-1.5 py-0.2 rounded-md">New</span>
              </Link>

              {/* Insights */}
              <Link
                to="/insights"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname.startsWith('/insights') || location.pathname.startsWith('/blog')
                    ? 'text-navy font-bold bg-slate-50'
                    : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                }`}
              >
                Insights
              </Link>

              {/* Academy */}
              <Link
                to="/academy"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname === '/academy'
                    ? 'text-navy font-bold bg-slate-50'
                    : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                }`}
              >
                Academy
              </Link>

              {/* About */}
              <Link
                to="/about"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname === '/about'
                    ? 'text-navy font-bold bg-slate-50'
                    : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                }`}
              >
                About
              </Link>

              {/* Primary Action Button */}
              <div className="pl-2">
                <Link
                  to="/contact"
                  onClick={() => trackCtaClick('Discuss a Project - Header', location.pathname)}
                  className="inline-flex items-center justify-center bg-accent text-navy px-5 py-2.5 rounded-xl font-extrabold text-sm hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_4px_14px_rgba(255,209,0,0.35)]"
                >
                  Discuss a Project
                </Link>
              </div>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-navy p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-2">
              
              {/* Mobile Solutions Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold text-navy bg-slate-50"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileSolutionsOpen && (
                  <div className="pl-2 mt-1 space-y-1">
                    {solutionLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-xs font-semibold ${
                          location.pathname === item.path
                            ? 'text-navy font-bold bg-accent/20'
                            : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-bold text-navy">{item.name}</div>
                        <div className="text-[11px] text-slate-500 font-normal">{item.badge}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-navy hover:bg-slate-50"
              >
                Case Studies
              </Link>

              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-navy hover:bg-slate-50"
              >
                <span>Products Marketplace</span>
                <span className="text-[10px] font-extrabold uppercase bg-accent text-navy px-2 py-0.5 rounded-md">New</span>
              </Link>

              <Link
                to="/insights"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-navy hover:bg-slate-50"
              >
                Insights
              </Link>

              <Link
                to="/academy"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-navy hover:bg-slate-50"
              >
                Academy (Individual Learning)
              </Link>

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-navy hover:bg-slate-50"
              >
                About
              </Link>

              <div className="pt-3">
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                    trackCtaClick('Discuss a Project - Mobile Header', location.pathname);
                  }}
                  className="block w-full text-center bg-accent text-navy py-3 px-4 rounded-xl font-extrabold text-sm shadow-md"
                >
                  Discuss a Project
                </Link>
              </div>

            </div>
          </div>
        )}
      </nav>

      {/* Main Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Comprehensive Footer */}
      <footer className="bg-[#07152E] text-slate-300 border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <img
                  src="https://res.cloudinary.com/dn2mgiges/image/upload/v1754587273/DigiBeloved.png"
                  alt="DigiBeloved"
                  className="h-8 w-auto object-contain"
                />
                <span className="text-2xl font-extrabold text-white tracking-tight">DigiBeloved</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                Applied AI, Data &amp; Software Solutions. We help researchers and organizations turn raw data into defensible results, repetitive work into automated systems, and ideas into production-ready software.
              </p>
              <div className="inline-block text-xs font-semibold text-accent bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
                Based in Abuja, Nigeria • Serving clients globally
              </div>
            </div>

            {/* Done-for-You Solutions */}
            <div>
              <h3 className="text-xs font-bold text-accent tracking-wider uppercase mb-4">
                Done-for-You Solutions
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/data-analysis" className="hover:text-white transition-colors">
                    Research &amp; Data Analysis
                  </Link>
                </li>
                <li>
                  <Link to="/ai-automation" className="hover:text-white transition-colors">
                    AI &amp; Workflow Automation
                  </Link>
                </li>
                <li>
                  <Link to="/custom-software-development" className="hover:text-white transition-colors">
                    Custom Software Development
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">
                    Verified Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Organizational & Learning */}
            <div>
              <h3 className="text-xs font-bold text-accent tracking-wider uppercase mb-4">
                Capability &amp; Learning
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/ai-training-for-organizations" className="hover:text-white transition-colors">
                    AI Training for Organizations
                  </Link>
                </li>
                <li>
                  <Link to="/academy" className="hover:text-white transition-colors">
                    DigiBeloved Academy
                  </Link>
                </li>
                <li>
                  <Link to="/ai-presentation-system" className="hover:text-white transition-colors">
                    AI Presentation System
                  </Link>
                </li>
                <li>
                  <Link to="/tools/prompt-polisher" className="hover:text-white transition-colors">
                    The Prompt Polisher
                  </Link>
                </li>
                <li>
                  <Link to="/insights" className="hover:text-white transition-colors">
                    Insights &amp; Articles
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Location */}
            <div>
              <h3 className="text-xs font-bold text-accent tracking-wider uppercase mb-4">
                Headquarters
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li className="text-slate-300">
                  No 3 Maitama, Abuja, Nigeria.
                </li>
                <li>
                  <a href="tel:+2348067628656" className="hover:text-white transition-colors font-medium">
                    +2348067628656
                  </a>
                </li>
                <li>
                  <a href="mailto:digibeloved@gmail.com" className="hover:text-white transition-colors font-medium">
                    digibeloved@gmail.com
                  </a>
                </li>
                <li className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-xs font-bold text-accent hover:underline"
                  >
                    <span>Send a Project Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} DigiBeloved. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center space-x-6 text-slate-400">
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick-Chat */}
      <a
        href="https://wa.me/2348067628656?text=Hello%20DigiBeloved,%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCtaClick('WhatsApp Floating Button', location.pathname)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center transition-transform duration-300 hover:scale-110 group focus:outline-none"
        aria-label="Chat directly with DigiBeloved on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Chat"
          className="w-14 h-14 sm:w-16 sm:h-16 drop-shadow-xl"
        />
        <span className="absolute right-full mr-3 bg-white text-navy px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block border border-slate-100">
          Chat with an Expert
        </span>
      </a>
    </div>
  );
};

export default Layout;