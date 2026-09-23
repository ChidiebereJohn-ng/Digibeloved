import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Search, 
  Sparkles, 
  Download, 
  BookOpen, 
  ShieldCheck, 
  Zap, 
  Filter,
  Layers,
  ExternalLink
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { marketplaceProducts, MarketplaceProduct } from '../data/products';
import { trackCtaClick } from '../src/services/metaPixel';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Playbooks & Systems',
    'Free Blueprints',
    'Software & Tools',
    'Courses & Masterclasses'
  ];

  const filteredProducts = marketplaceProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "DigiBeloved Digital Products & Business Marketplace",
        "url": "https://digibeloved.com/products",
        "description": "Browse DigiBeloved practical AI systems, presentation playbooks, free blueprints, and software utilities built for professionals, researchers, and founders.",
        "publisher": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "url": "https://digibeloved.com"
        }
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen text-navy selection:bg-accent selection:text-navy">
      <SchemaScript schema={schema} />

      {/* Hero Header Section */}
      <section className="bg-[#07152E] text-white pt-20 pb-20 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD100_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Micro-Pill Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 mb-8 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white">Business Marketplace</span>
            <span className="text-slate-500">•</span>
            <span className="text-accent">Systems, Playbooks &amp; Tools</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Practical AI Systems &amp; <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white">
              Digital Products
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Self-paced implementation systems, free blueprints, and automated software utilities engineered to turn complex workflows into fast, repeatable outcomes.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search playbooks, tools, or courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 pl-12 pr-4 py-3.5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/15 transition-all backdrop-blur-xs"
            />
          </div>

        </div>
      </section>

      {/* Category Filter Tabs Bar */}
      <section className="bg-slate-50 border-b border-slate-200/80 py-4 px-4 sticky top-16 sm:top-20 z-30 backdrop-blur-md bg-slate-50/95">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-navy text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-navy border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Marketplace Catalog Grid */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy">
                {selectedCategory === 'All' ? 'All Digital Products' : selectedCategory}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Showing {filteredProducts.length} verified {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            
            <div className="text-xs text-slate-500 hidden sm:flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1" />
              <span>Instant Digital Delivery</span>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200 p-8">
              <Sparkles className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-navy mb-1">No products found</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Try adjusting your search query or switching to another category.
              </p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="bg-navy text-white px-4 py-2 rounded-xl text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className={`bg-white border rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group ${
                    prod.featured 
                      ? 'border-accent ring-1 ring-accent/30 shadow-md' 
                      : 'border-slate-200/90 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div>
                    
                    {/* Visual Asset if exists */}
                    {prod.image ? (
                      <div className="mb-6 rounded-2xl overflow-hidden bg-[#07152E] border border-slate-100 p-3 flex items-center justify-center">
                        <img 
                          src={prod.image} 
                          alt={prod.title}
                          className="w-full h-44 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="mb-6 h-28 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-400">
                        <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center">
                          <BookOpen className="w-6 h-6" />
                        </div>
                      </div>
                    )}

                    {/* Top Row: Category & Price Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${prod.badgeColor}`}>
                        {prod.badge}
                      </span>
                      <div className="text-right">
                        <span className="text-sm sm:text-base font-extrabold text-navy block leading-none">
                          {prod.price}
                        </span>
                        {prod.originalPrice && (
                          <span className="text-[10px] text-slate-400 line-through">
                            {prod.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Ratings */}
                    <div className="flex items-center space-x-1.5 mb-3 text-xs">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-slate-700">{prod.rating}</span>
                      <span className="text-slate-400 text-[11px]">({prod.ratingCount})</span>
                    </div>

                    <h3 className="text-xl font-extrabold text-navy tracking-tight mb-2 group-hover:text-accent-hover transition-colors">
                      {prod.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {prod.shortDesc}
                    </p>

                    {/* Deliverables / Highlights list */}
                    <div className="space-y-2 mb-8 pt-4 border-t border-slate-100">
                      {prod.highlights.map((h, i) => (
                        <div key={i} className="flex items-start text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to={prod.link}
                      onClick={() => trackCtaClick(`Marketplace - ${prod.title}`, '/products')}
                      className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xs ${
                        prod.featured
                          ? 'bg-accent text-navy hover:bg-yellow-400 active:scale-[0.98]'
                          : 'bg-navy text-white hover:bg-navy-light'
                      }`}
                    >
                      <span>{prod.ctaText}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h4 className="text-sm font-bold text-navy mb-1">Instant Digital Access</h4>
            <p className="text-xs text-slate-600">Immediate download and checkout delivery right after access confirmation.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <Zap className="w-8 h-8 text-accent mx-auto mb-3" />
            <h4 className="text-sm font-bold text-navy mb-1">Production Tested</h4>
            <p className="text-xs text-slate-600">Every playbook, prompt, and system is grounded in real operational client projects.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <Lock className="w-8 h-8 text-navy mx-auto mb-3" />
            <h4 className="text-sm font-bold text-navy mb-1">7-Day Guarantee</h4>
            <p className="text-xs text-slate-600">100% money-back implementation guarantee on our flagship presentation system.</p>
          </div>
        </div>
      </section>

      {/* Bottom Service Upsell Banner */}
      <section className="py-20 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block mb-6">
            Custom Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Need a Solution Built Specifically for Your Team?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto">
            Beyond our self-paced playbooks, we build custom data analyses, automated pipelines, and bespoke business software.
          </p>
          <Link
            to="/contact"
            onClick={() => trackCtaClick('Discuss a Project - Products Footer', '/products')}
            className="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-bold text-base hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.3)]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Products;
