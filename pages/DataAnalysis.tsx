import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Database, 
  Plus, 
  Minus,
  FileCheck2,
  AlertCircle,
  FileSpreadsheet
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const DataAnalysis: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Professional Research & Data Analysis Services",
        "provider": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "url": "https://digibeloved.com"
        },
        "description": "Professional statistical data analysis, survey cleaning, modeling, and publication-ready reporting for researchers and organizations in Nigeria and globally.",
        "areaServed": ["Nigeria", "Global"],
        "serviceType": "Research & Statistical Analysis"
      }
    ]
  };

  const capabilities = [
    {
      title: "Descriptive & Normality Analysis",
      desc: "Variable frequencies, percentages, standard deviations, distributions, and cross-tabulations."
    },
    {
      title: "Inferential Hypothesis Testing",
      desc: "Chi-Square, t-tests, One-Way & Two-Way ANOVA/MANOVA, and non-parametric tests (Mann-Whitney, Wilcoxon)."
    },
    {
      title: "Regression & Predictive Models",
      desc: "Linear, Multiple, Logistic, and Hierarchical Regression to evaluate predictor effects and test hypotheses."
    },
    {
      title: "Instrument Scale & Reliability",
      desc: "Cronbach's alpha internal consistency checks, Exploratory Factor Analysis (EFA), and validity testing."
    },
    {
      title: "M&E Survey Evaluations",
      desc: "Baseline vs. endline evaluations, donor indicator tracking, and gap analysis for NGO projects."
    },
    {
      title: "Publication-Grade Visualisation",
      desc: "High-resolution charts, correlation matrices, and distribution plots formatted for journals or executive decks."
    }
  ];

  const steps = [
    { num: "01", title: "Data Audit & Scope", desc: "We review your raw data and research questions to confirm data structure and needed tests." },
    { num: "02", title: "Methodology Check", desc: "We verify assumption tests (normality, collinearity) before executing statistical models." },
    { num: "03", title: "Cleaning & Execution", desc: "We handle missing values, code scales, screen outliers, and run verified tests." },
    { num: "04", title: "Interpretation & APA Tables", desc: "Results are formatted into publication-ready APA tables with clear narrative findings." },
    { num: "05", title: "Delivery & Q&A", desc: "We walk you through the results so you are 100% confident during your defense or review." }
  ];

  const faqs = [
    {
      q: "Does DigiBeloved write academic dissertations or theses?",
      a: "No. DigiBeloved provides statistical data analysis, data cleaning, methodology consultation, data visualization, and analytical interpretation. We do not write academic papers for students. You conduct and own your research; we ensure your numerical analysis is accurate, defensible, and clearly explained."
    },
    {
      q: "What data formats can I send?",
      a: "We accept Excel (.xlsx, .xls), CSV, SPSS (.sav), Google Sheets, and survey exports from KoboToolbox, ODK, Google Forms, and Qualtrics."
    },
    {
      q: "How do you protect data confidentiality?",
      a: "All datasets are handled under strict confidentiality. We sign Non-Disclosure Agreements (NDAs) on request, scrub personally identifiable information (PII) before analysis, and never share or publish your proprietary data."
    },
    {
      q: "What exact deliverables do I receive?",
      a: "You receive the fully cleaned/coded dataset, analytical output files, publication-ready APA tables, high-resolution visual charts, and a detailed narrative findings report explaining every p-value and coefficient."
    },
    {
      q: "What is your turnaround time?",
      a: "Standard engagements take 3 to 7 business days depending on dataset cleanliness and model complexity. Expedited delivery is available for urgent deadlines."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-navy">
      <SchemaScript schema={schema} />

      {/* Hero Section */}
      <section className="bg-white text-navy pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200/80 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-800 mb-6 shadow-xs">
            <BarChart3 className="w-3.5 h-3.5 text-navy" />
            <span>Research &amp; Statistical Analysis</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-navy tracking-tight leading-[1.1] mb-6">
            From Raw Data to Defensible Results.
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Accurate statistical analysis, publication-grade APA tables, and plain-English interpretation for researchers, M&amp;E teams, and organizations.
          </p>

          {/* Problem Hook Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 mb-10 max-w-2xl mx-auto text-left flex items-start space-x-4 shadow-xs">
            <AlertCircle className="w-6 h-6 text-navy flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-sm font-bold text-navy mb-1">
                You collected the data. Now the analysis must be correct.
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Flawed test selection or confusing SPSS output can stall a thesis defense, donor report, or journal submission. We make your empirical findings bulletproof.
              </p>
            </div>
          </div>

          <Link
            to="/contact?service=data-analysis"
            onClick={() => trackCtaClick('Request Data Analysis Quote - Hero', '/data-analysis')}
            className="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-2xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.35)]"
          >
            <span>Request Data Analysis Quote</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>

          <div className="mt-8 text-xs font-semibold text-slate-400 flex flex-wrap justify-center items-center gap-4">
            <span>Rigorous Methodology</span>
            <span>•</span>
            <span>Strict NDAs</span>
            <span>•</span>
            <span>Zero Ghostwriting</span>
          </div>

        </div>
      </section>

      {/* Input vs Output Bento Grid */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Clear Handover
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              What You Provide &amp; What You Receive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-navy mb-4">What You Can Send Us</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-navy mr-2.5 flex-shrink-0 mt-0.5" />
                  <span>Raw survey exports (Google Forms, Kobo, ODK, Qualtrics).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-navy mr-2.5 flex-shrink-0 mt-0.5" />
                  <span>Spreadsheets in Excel (.xlsx, .xls) or CSV format.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-navy mr-2.5 flex-shrink-0 mt-0.5" />
                  <span>SPSS datasets (.sav) or previous outputs requiring review.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-navy mr-2.5 flex-shrink-0 mt-0.5" />
                  <span>Research questions, hypotheses, or questionnaire templates.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-navy mb-4">What We Deliver</h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean, Coded Dataset:</strong> Structured and verified variables.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>APA Tables:</strong> Formatted to copy directly into Word or LaTeX.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>Defensible Findings:</strong> Plain-English interpretations of all test stats.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span><strong>High-Resolution Charts:</strong> Ready for presentation or publishing.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Analytical Methodologies (Clean 6-Card Grid) */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-slate-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Statistical Methodologies We Cover
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:border-slate-300 transition-colors">
                <h3 className="font-extrabold text-navy text-base mb-2">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              The Analytical Engagement
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map((st) => (
              <div key={st.num} className="bg-white p-6 rounded-2xl border border-slate-200/90 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 shadow-xs">
                <span className="text-2xl font-extrabold text-slate-300 font-mono sm:w-10">
                  {st.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-extrabold text-navy text-base mb-0.5">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Boundary & Privacy Guarantee */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 flex items-start space-x-4">
          <ShieldCheck className="w-8 h-8 text-navy flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-extrabold text-navy mb-1">
              Zero Ghostwriting &amp; Absolute Data Confidentiality
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              DigiBeloved is a research analytics and consulting service. We do not write student theses, literature reviews, or academic assignments. We provide valid statistical analysis, data cleaning, and findings interpretation. Your proprietary data is never shared, published, or sold.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Accordion FAQ */}
      <section className="py-20 md:py-24 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-navy">
                      {faq.q}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-navy">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Close */}
      <section className="py-20 md:py-28 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to Turn Your Data Into Defensible Results?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-10">
            Tell us about your research objectives, dataset status, and timeline. We will provide a scoped quotation within 24 hours.
          </p>
          <Link
            to="/contact?service=data-analysis"
            onClick={() => trackCtaClick('Request Data Analysis Quote - Final CTA', '/data-analysis')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-2xl font-extrabold text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.98] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.35)]"
          >
            <span>Request Data Analysis Quote</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DataAnalysis;
