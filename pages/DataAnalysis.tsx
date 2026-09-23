import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  HelpCircle, 
  ArrowRight, 
  Database, 
  Table, 
  LineChart, 
  Lock, 
  AlertCircle,
  FileCheck2
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackCtaClick } from '../src/services/metaPixel';

const DataAnalysis: React.FC = () => {
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
        "description": "Professional statistical data analysis, cleaning, visualization, and report-ready interpretation for researchers, NGOs, and organizations in Nigeria and globally.",
        "areaServed": ["Nigeria", "Global"],
        "serviceType": "Research & Statistical Analysis"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does DigiBeloved write academic dissertations or theses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. DigiBeloved provides statistical data analysis, methodology consultation, data visualization, and analytical interpretation. We do not engage in academic ghostwriting. You collect and own your research; we ensure your statistical analysis is accurate, defensible, and clearly explained."
            }
          },
          {
            "@type": "Question",
            "name": "What formats can I submit my dataset in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept raw data in Excel (.xlsx, .xls), CSV, SPSS (.sav), Google Sheets, KoboToolbox, ODK, Google Forms exports, and database dumps."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure data confidentiality?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every dataset is protected under strict confidentiality protocols. We sign Non-Disclosure Agreements (NDAs) upon request, remove personally identifiable information (PII) before analysis, and securely purge files after project handover."
            }
          },
          {
            "@type": "Question",
            "name": "What deliverables do I receive?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You receive the cleaned and coded dataset, raw analytical outputs, professional publication-ready APA tables and charts, and a detailed written interpretation explaining what every coefficient, p-value, and finding means in plain, defensible terms."
            }
          }
        ]
      }
    ]
  };

  const capabilities = [
    {
      title: "Descriptive & Exploratory Analysis",
      desc: "Frequencies, percentages, central tendencies, standard deviations, normality tests, and cross-tabulations."
    },
    {
      title: "Inferential Statistical Testing",
      desc: "Parametric and non-parametric tests: Chi-Square, Independent/Paired t-tests, One-Way and Two-Way ANOVA/MANOVA, Wilcoxon, Mann-Whitney."
    },
    {
      title: "Regression & Predictive Modeling",
      desc: "Linear, Multiple, Logistic, and Hierarchical Regression to test hypotheses, relationships, and predictor impacts."
    },
    {
      title: "Factor & Reliability Analysis",
      desc: "Cronbach's alpha reliability checks, Exploratory Factor Analysis (EFA), and scale validation for survey instruments."
    },
    {
      title: "Survey & Monitoring & Evaluation (M&E)",
      desc: "Baseline vs. endline evaluations, indicator tracking, gap analysis, and donor-compliant analytical reporting."
    },
    {
      title: "High-Resolution Visualisation",
      desc: "Publication-grade charts, correlation matrices, heatmaps, and distribution plots formatted for journals or executive decks."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Data Audit & Scope Review",
      desc: "You send your dataset, research questions, or objectives. We inspect data structure, completeness, and required tests."
    },
    {
      num: "02",
      title: "Methodological Validation",
      desc: "We confirm the right statistical models to ensure hypotheses and test assumptions (normality, collinearity) are satisfied."
    },
    {
      num: "03",
      title: "Cleaning, Coding & Execution",
      desc: "We screen for outliers, handle missing values, code variables, and run the verified statistical tests."
    },
    {
      num: "04",
      title: "Interpretation & Formatting",
      desc: "Outputs are translated into publication-ready APA tables, high-res charts, and comprehensive narrative interpretations."
    },
    {
      num: "05",
      title: "Delivery & Q&A Review",
      desc: "We deliver complete files and remain available to walk you through findings or assist with supervisor/donor queries."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-navy">
      <SchemaScript schema={schema} />

      {/* Hero Section */}
      <section className="bg-[#07152E] text-white pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-accent mb-6">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Research &amp; Data Analysis Services</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Professional Research &amp; Data Analysis — From Raw Data to Defensible Results
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
            For researchers, research teams, NGOs, and organizations that need accurate analysis, clear interpretation, visualisations, and report-ready outputs.
          </p>

          {/* Problem Hook Box */}
          <div className="bg-white/5 border border-accent/30 rounded-2xl p-5 sm:p-6 mb-10 max-w-2xl mx-auto text-left flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base font-bold text-white mb-1">
                You collected the data. Now the analysis must be correct.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether facing a critical thesis defense, a journal peer-review, or a donor reporting deadline, flawed statistical methods or superficial interpretation can derail months of hard work. We ensure your results are methodologically bulletproof.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact?service=data-analysis"
              onClick={() => trackCtaClick('Request Data Analysis Quote - Hero', '/data-analysis')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-base tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.3)]"
            >
              <span>Request Data Analysis Quote</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="mt-8 text-xs text-slate-400 flex flex-wrap justify-center items-center gap-4">
            <span>Rigorous Methodology</span>
            <span>•</span>
            <span>Strict Confidentiality &amp; NDAs</span>
            <span>•</span>
            <span>Zero Ghostwriting</span>
          </div>

        </div>
      </section>

      {/* Who This Is For & Problems Solved */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Who This Is For */}
            <div>
              <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
                Who This Is For
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-6">
                Designed for Decision-Makers and Scholars Who Need Certainty
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-navy text-base mb-1">Institutional Research &amp; M&amp;E Teams</h3>
                  <p>Program leads, NGOs, development agencies, and public health investigators who require rigorous statistical backing for stakeholder and donor reports.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-navy text-base mb-1">Postgraduate &amp; Independent Researchers</h3>
                  <p>MSc, PhD, and academic scholars who have finished data gathering and need valid statistical testing, clear tables, and confidence defending findings before supervisors or review boards.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-navy text-base mb-1">Organizations &amp; Survey Leaders</h3>
                  <p>Businesses and consulting firms that have conducted customer, market, or operational surveys and need them transformed into actionable insights.</p>
                </div>
              </div>
            </div>

            {/* Problems We Solve */}
            <div>
              <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
                The Frustrations We Remove
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-6">
                Common Data Pitfalls We Resolve
              </h2>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Messy or Uncoded Data:</strong> Handling missing values, negative worded items, inverted scales, and inconsistent naming.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Uncertain Statistical Selection:</strong> Selecting the exact test (parametric vs. non-parametric) that fits your distribution and hypothesis type.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Supervisor Rejections:</strong> Fixing previous analyses where supervisors flagged improper models or missing assumption checks.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Cryptic Software Outputs:</strong> Translating overwhelming statistical printouts into plain, defensible English conclusions.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Deadline Pressure:</strong> Delivering verified, publication-grade results fast so you never miss a submission or defense date.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* What You Can Send Us & What We Deliver */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              A Complete, Transparent Handover
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              You provide the raw data; we return structured, publication-grade deliverables ready for your report or thesis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Input */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-6 h-6 text-navy" />
                <h3 className="text-xl font-bold text-navy">What You Can Send Us</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 mr-2.5 flex-shrink-0"></div>
                  <span>Raw survey exports (Google Forms, KoboToolbox, ODK, SurveyMonkey, Qualtrics).</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 mr-2.5 flex-shrink-0"></div>
                  <span>Spreadsheets in Microsoft Excel (.xlsx, .xls) or CSV format.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 mr-2.5 flex-shrink-0"></div>
                  <span>SPSS datasets (.sav) or existing outputs requiring verification or re-analysis.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 mr-2.5 flex-shrink-0"></div>
                  <span>Your study objectives, research questions, hypotheses, or questionnaire template.</span>
                </li>
              </ul>
            </div>

            {/* Output */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center space-x-3 mb-6">
                <FileCheck2 className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-navy">What We Deliver</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-2.5 flex-shrink-0"></div>
                  <span><strong>Clean, Coded Dataset:</strong> Fully structured, labelled, and documented dataset files.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-2.5 flex-shrink-0"></div>
                  <span><strong>APA-Formatted Tables:</strong> Ready to paste directly into Microsoft Word or LaTeX.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-2.5 flex-shrink-0"></div>
                  <span><strong>Defensible Narrative Interpretation:</strong> Clear explanations of what every p-value, mean, regression coefficient, and test stat means.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-2.5 flex-shrink-0"></div>
                  <span><strong>High-Resolution Charts:</strong> Clean charts formatted for publication or stakeholder presentation.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Analytical Capabilities */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-navy/5 px-3 py-1 rounded-full inline-block mb-3">
              Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              Statistical &amp; Analytical Methodologies
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              We apply the correct statistical procedures demanded by academic journals, review committees, and institutional donors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="font-bold text-navy text-base mb-2">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-3">
              Step-by-Step
            </span>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              How the Data Engagement Works
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map((st) => (
              <div key={st.num} className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <span className="text-2xl font-extrabold text-slate-300 font-mono sm:w-12">
                  {st.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-navy text-base mb-1">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Boundary & Confidentiality */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10">
          <div className="flex items-start space-x-4">
            <ShieldCheck className="w-8 h-8 text-navy flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-extrabold text-navy mb-2">
                Our Ethical Boundary &amp; Confidentiality Guarantee
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                <strong>Zero Ghostwriting:</strong> DigiBeloved is an analytical and statistical consulting service. We do not write dissertations, theses, or assignments for students. You conduct the literature review and discussion; we ensure your numerical analysis, statistical tests, visualizations, and empirical findings are accurate, reproducible, and defensible.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Strict Data Privacy:</strong> Your raw data is protected under non-disclosure protocols. We never share, publish, or monetize your research datasets or proprietary organizational data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">Do you provide revision support if my supervisor asks questions?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes. If your supervisor or review committee requests clarifications or adjustments regarding the specific statistical procedures we performed within the agreed scope, we support you with explanations and adjustments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">How fast can analysis be completed?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Standard turnarounds range from 3 to 7 business days depending on dataset size, cleanliness, and the complexity of required models. Expedited turnarounds are available for time-sensitive deadlines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-navy mb-2">How is pricing determined?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We operate on flexible project-based pricing based on the state of your data, the number of hypotheses/tests, and the level of reporting required. Tell us your budget in the enquiry form, and we will scope an appropriate plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to Turn Your Data Into Defensible Results?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Tell us about your research objective, dataset status, and timeline. We will review your requirements and provide a clear quote.
          </p>
          <Link
            to="/contact?service=data-analysis"
            onClick={() => trackCtaClick('Request Data Analysis Quote - Final CTA', '/data-analysis')}
            className="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-xl font-extrabold text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)]"
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
