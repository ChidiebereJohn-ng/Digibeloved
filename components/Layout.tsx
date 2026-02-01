import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/services/solutions' },
    { name: 'Training', path: '/services/training' },
    { name: 'Consulting', path: '/services/consulting' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Tools', path: '/tools/prompt-polisher' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-navy font-sans selection:bg-accent selection:text-navy">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="https://res.cloudinary.com/dn2mgiges/image/upload/v1754587273/DigiBeloved.png"
                alt="DigiBeloved"
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-2xl font-bold tracking-tight text-navy group-hover:text-navy-light transition-colors">
                DigiBeloved
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-navy-light ${isActive(link.path) ? 'text-navy font-bold border-b-2 border-accent' : 'text-gray-600'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent text-navy px-5 py-2.5 rounded-md font-bold text-sm hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-yellow-500/20"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-navy hover:text-navy-light p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                    ? 'bg-navy/5 text-navy font-bold'
                    : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-accent text-navy px-5 py-3 rounded-md font-bold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy border-t border-white/5 mt-auto text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://res.cloudinary.com/dn2mgiges/image/upload/v1754587273/DigiBeloved.png"
                  alt="DigiBeloved"
                  className="h-8 w-auto object-contain"
                />
                <span className="text-xl font-bold text-white">DigiBeloved</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Building a timeless institution that empowers individuals and organizations through Applied AI.
              </p>
              <div className="text-sm text-gray-400">
                <p>Intelligence, Applied.</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent tracking-wider uppercase mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/services/solutions" className="text-gray-400 hover:text-white transition-colors">Digital Solutions</Link></li>
                <li><Link to="/services/training" className="text-gray-400 hover:text-white transition-colors">Applied AI Training</Link></li>
                <li><Link to="/services/consulting" className="text-gray-400 hover:text-white transition-colors">Strategy & Consulting</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent tracking-wider uppercase mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start">
                  <span className="block">No 3 Maitama, Abuja, Nigeria.</span>
                </li>
                <li>
                  <a href="tel:+2348067628656" className="hover:text-white transition-colors">+2348067628656</a>
                </li>
                <li>
                  <a href="mailto:digibeloved@gmail.com" className="hover:text-white transition-colors">digibeloved@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-500">
              &copy; {new Date().getFullYear()} DigiBeloved. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2348067628656"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center transition-transform duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-16 h-16 drop-shadow-lg"
        />
        <span className="absolute right-full mr-4 bg-white text-navy px-3 py-1 rounded shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default Layout;