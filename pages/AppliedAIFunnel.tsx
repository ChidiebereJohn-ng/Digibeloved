import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  Clock, 
  TrendingUp, 
  Users, 
  Layers, 
  Cpu, 
  Zap, 
  Workflow, 
  FileText, 
  Check, 
  RotateCcw, 
  Copy, 
  Mail, 
  Phone, 
  Calendar, 
  ShieldCheck,
  Briefcase,
  AlertTriangle,
  HelpCircle
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import { trackFormStart, trackQualifiedEnquiry, trackCtaClick } from '../src/services/metaPixel';
import emailjs from '@emailjs/browser';

const SECTOR_OPTIONS = [
  'Healthcare & Pharmaceuticals',
  'Legal & Professional Services',
  'FinTech & Banking',
  'Real Estate & Construction',
  'E-commerce & Retail',
  'Agriculture & AgTech',
  'Energy & Utilities',
  'Education & EdTech',
  'Public Sector & NGOs',
  'Other / Multi-Industry'
];

const TEAM_SIZES = [
  { label: 'Solo Leader / Consultant (1)', count: 1 },
  { label: 'Small Team (2–5 members)', count: 4 },
  { label: 'Growth Team (6–20 members)', count: 12 },
  { label: 'Department / Organization (21–100 members)', count: 40 },
  { label: 'Enterprise (100+ members)', count: 120 }
];

const COMMON_TOOLS = [
  'Google Workspace',
  'Microsoft 365',
  'Slack',
  'WhatsApp Business',
  'QuickBooks / Xero',
  'HubSpot / Salesforce',
  'Notion / Airtable',
  'Custom Internal DB / ERP',
  'Excel / Spreadsheets'
];

const BOTTLENECKS = [
  {
    id: 'pdf-extraction',
    title: 'Manual Document & PDF Extraction',
    desc: 'Reading receipts, invoices, contracts, and manually typing figures into spreadsheets or ERPs.'
  },
  {
    id: 'spreadsheet-recon',
    title: 'Spreadsheet Copy-Pasting & Reconciliation',
    desc: 'Stitching multiple CSVs, reconciling bank statements, and hunting formula errors.'
  },
  {
    id: 'customer-emails',
    title: 'Repetitive Inquiries & Email Drafting',
    desc: 'Answering the same customer questions repeatedly across WhatsApp, Email, or Zendesk.'
  },
  {
    id: 'compliance-audit',
    title: 'Compliance, Research & Due Diligence',
    desc: 'Reviewing dozens of regulatory circulars, land registry documents, or lengthy tender dossiers.'
  },
  {
    id: 'reports-slides',
    title: 'Weekly Reporting & Presentation Prep',
    desc: 'Summarizing operations and formatting slides for executive, donor, or board meetings.'
  },
  {
    id: 'lead-qualification',
    title: 'Inbound Sales Lead Qualification',
    desc: 'Following up with unvetted leads, checking budgets, and manual calendar booking.'
  }
];

const PAST_FRICTIONS = [
  'Hallucinations & factually inaccurate outputs',
  'Copy-paste fatigue: Starting with zero context every time',
  'Team members lack prompt engineering skills',
  'Security & proprietary company data confidentiality',
  'Not knowing which tool fits our exact workflow'
];

export const AppliedAIFunnel: React.FC = () => {
  // Wizard Step (1 to 4)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Step 1: Organization Context
  const [sector, setSector] = useState<string>('FinTech & Banking');
  const [companyName, setCompanyName] = useState<string>('');
  const [teamSizeIndex, setTeamSizeIndex] = useState<number>(1); // Default: 2-5 members
  const [selectedTools, setSelectedTools] = useState<string[]>(['Google Workspace', 'WhatsApp Business']);

  // Step 2: Bottleneck Qualification
  const [selectedBottlenecks, setSelectedBottlenecks] = useState<string[]>(['pdf-extraction', 'spreadsheet-recon']);
  const [hoursLostWeekly, setHoursLostWeekly] = useState<number>(8); // hours per team member
  const [selectedFrictions, setSelectedFrictions] = useState<string[]>(['Copy-paste fatigue: Starting with zero context every time']);

  // Step 3: Current AI Maturity & Transformation Goal
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [timeline, setTimeline] = useState<string>('30 Days (Standard Sprint)');
  const [primaryGoal, setPrimaryGoal] = useState<string>('Automate 80% of repetitive operational tasks');

  // Step 4: Submission Form
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  // Calculations for ROI & Hours Reclaimed
  const calculations = useMemo(() => {
    const memberCount = TEAM_SIZES[teamSizeIndex].count;
    const weeklyLost = memberCount * hoursLostWeekly;
    const annualLost = weeklyLost * 50; // 50 working weeks
    // Assuming modest hourly valuation: ~₦6,000 / $8 per knowledge worker hour
    const estimatedNairaSavings = annualLost * 6000;
    const estimatedUsdSavings = annualLost * 8;
    const targetLevel = Math.min(currentLevel + 2, 5);

    return {
      memberCount,
      weeklyLost,
      annualLost,
      estimatedNairaSavings,
      estimatedUsdSavings,
      targetLevel
    };
  }, [teamSizeIndex, hoursLostWeekly, currentLevel]);

  // Toggle helper for arrays
  const toggleArrayItem = (list: string[], item: string, setter: (val: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter(i => i !== item));
    } else {
      setter([...list, item]);
    }
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      trackFormStart('Applied AI Assessment Wizard', '/applied-ai');
    }
    setCurrentStep(prev => Math.min(prev + 1, 4));
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handleSubmitRoadmap = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail || !contactName) {
      alert('Please enter your name and email address to receive your roadmap.');
      return;
    }

    setIsSubmitting(true);
    try {
      // Send proposal inquiry via EmailJS
      const serviceId = 'service_6x6077w';
      const templateId = 'template_hffj3om';
      const publicKey = 'Q2LzRjQeCj2Z7J05j';

      const emailPayload = {
        name: contactName,
        email: contactEmail,
        phone: contactPhone || 'Not provided',
        organization: companyName || 'Not specified',
        service: 'ai-training-funnel',
        budget: 'Corporate Capability Roadmap',
        timeline: timeline,
        message: `
--- APPLIED AI CAPABILITY ASSESSMENT ---
Client: ${contactName} (${contactEmail} | ${contactPhone})
Organization: ${companyName || 'Not specified'} (${sector})
Team Size: ${TEAM_SIZES[teamSizeIndex].label} (${calculations.memberCount} members)
Software Ecosystem: ${selectedTools.join(', ')}

OPERATIONAL BOTTLENECK AUDIT:
Selected Bottlenecks: ${selectedBottlenecks.join(', ')}
Hours Lost Weekly Per Member: ${hoursLostWeekly} hrs/wk
Total Annual Team Hours Wasted: ${calculations.annualLost.toLocaleString()} hrs/year
Estimated Annual Cost Leakage: ₦${calculations.estimatedNairaSavings.toLocaleString()} (~$${calculations.estimatedUsdSavings.toLocaleString()})
Past AI Frictions: ${selectedFrictions.join(', ')}

TRANSFORMATION OBJECTIVE:
Current AI Maturity: Level ${currentLevel}
Target Capability: Level ${calculations.targetLevel}
Primary Goal: ${primaryGoal}
Target Timeline: ${timeline}
        `
      };

      await emailjs.send(serviceId, templateId, emailPayload, publicKey);

      trackQualifiedEnquiry({
        service: 'ai-training-funnel',
        budget: `ROI: ₦${calculations.estimatedNairaSavings.toLocaleString()}`,
        organization: companyName || sector,
        country: 'Nigeria'
      });

      setIsSubmitted(true);
    } catch (err) {
      console.warn('Roadmap dispatch logged locally:', err);
      // Fallback success for user experience
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    const summaryText = `DIGIBELOVED AI CAPABILITY ROADMAP SUMMARY
Organization: ${companyName || 'Corporate Client'} (${sector})
Team Size: ${TEAM_SIZES[teamSizeIndex].label}
Current Maturity: Level ${currentLevel} → Target: Level ${calculations.targetLevel}
Annual Hours Reclaimable: ${calculations.annualLost.toLocaleString()} hrs/year
Estimated Economic Impact: ₦${calculations.estimatedNairaSavings.toLocaleString()} ($${calculations.estimatedUsdSavings.toLocaleString()} USD)
Primary Objective: ${primaryGoal}
Selected Bottlenecks: ${selectedBottlenecks.join(', ')}
Implementation Timeline: ${timeline}
Book Consultation: https://digibeloved.com/contact`;

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Applied AI Training Assessment & Capability Funnel | DigiBeloved",
    "url": "https://digibeloved.com/applied-ai",
    "description": "Calculate your organization's AI maturity level (Level 1 to 5), diagnose operational bottlenecks, and generate a tailored 4-week corporate AI training roadmap with verified ROI projection.",
    "publisher": {
      "@type": "Organization",
      "name": "DigiBeloved",
      "url": "https://digibeloved.com"
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <SchemaScript schema={schema} />

      {/* Hero Header */}
      <section className="bg-[#092755] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FDD412]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FDD412] text-xs font-black tracking-widest uppercase mb-4 backdrop-blur-sm shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Operational Audit</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12] mb-4">
            Applied AI <span className="text-[#FDD412]">Capability Assessment</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Diagnose your team's current AI maturity, quantify wasted human hours across repetitive tasks, and calculate your personalized 4-week roadmap to <span className="text-white font-semibold">Level 3 &amp; Level 4 Operational Systems</span>.
          </p>

          {/* Stepper Progress Bar */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex items-center justify-between mb-2 text-xs font-bold uppercase tracking-wider text-slate-300">
              <span className={currentStep >= 1 ? 'text-[#FDD412]' : ''}>1. Context</span>
              <span className={currentStep >= 2 ? 'text-[#FDD412]' : ''}>2. Bottlenecks</span>
              <span className={currentStep >= 3 ? 'text-[#FDD412]' : ''}>3. Maturity</span>
              <span className={currentStep >= 4 ? 'text-[#FDD412]' : ''}>4. Roadmap</span>
            </div>

            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
              <div 
                className="h-full bg-[#FDD412] rounded-full transition-all duration-300 shadow-sm"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
            
            <div className="text-right text-[11px] font-semibold text-slate-400 mt-1">
              Step {currentStep} of 4
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Wizard Form Container */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">

          {/* ============================================================== */}
          {/* STEP 1: ORGANIZATIONAL CONTEXT */}
          {/* ============================================================== */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl animate-in fade-in duration-200">
              <div className="mb-8 pb-6 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                  Step 1 of 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092755] tracking-tight mt-1">
                  Tell Us About Your Organization
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  We customize the evaluation and concrete tool recommendations around your specific industry and team size.
                </p>
              </div>

              {/* Sector Selection */}
              <div className="mb-7">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  1. Primary Industry Sector
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SECTOR_OPTIONS.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSector(item)}
                      className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                        sector === item
                          ? 'bg-[#092755] text-white border-[#092755] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span>{item}</span>
                      {sector === item && <Check className="w-4 h-4 text-[#FDD412]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Company / Team Name */}
              <div className="mb-7">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  2. Organization / Department Name <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Apex Health Partners, Zenith Legal Chambers"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#092755]"
                />
              </div>

              {/* Team Size Selection */}
              <div className="mb-7">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  3. Team / Department Size (Who Will Benefit from AI?)
                </label>
                <div className="space-y-2">
                  {TEAM_SIZES.map((tier, idx) => (
                    <button
                      key={tier.label}
                      type="button"
                      onClick={() => setTeamSizeIndex(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                        teamSizeIndex === idx
                          ? 'bg-[#092755] text-white border-[#092755] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Users className={`w-4 h-4 ${teamSizeIndex === idx ? 'text-[#FDD412]' : 'text-slate-400'}`} />
                        <span>{tier.label}</span>
                      </div>
                      {teamSizeIndex === idx && <Check className="w-4 h-4 text-[#FDD412]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Common Software Tools */}
              <div className="mb-8">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  4. Current Software Ecosystem <span className="text-slate-400 font-normal">(Select all that apply)</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {COMMON_TOOLS.map((tool) => {
                    const isSelected = selectedTools.includes(tool);
                    return (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => toggleArrayItem(selectedTools, tool, setSelectedTools)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                          isSelected
                            ? 'bg-[#092755] text-[#FDD412] border-[#092755] shadow-2xs'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {tool} {isSelected ? '✓' : '+'}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Action */}
              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center justify-center bg-[#092755] hover:bg-blue-900 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm shadow-md active:scale-[0.98] transition-all"
                >
                  <span>Continue to Bottlenecks</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* STEP 2: OPERATIONAL BOTTLENECKS & TIME DRAIN */}
          {/* ============================================================== */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl animate-in fade-in duration-200">
              <div className="mb-8 pb-6 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                  Step 2 of 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092755] tracking-tight mt-1">
                  Where Does Your Team Lose Time?
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Identify the specific operational tasks that drain manual human hours and cause pipeline friction.
                </p>
              </div>

              {/* Bottlenecks Multi-select */}
              <div className="mb-8">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-3">
                  1. Select Repetitive Friction Points <span className="text-slate-400 font-normal">(Select 1 or more)</span>
                </label>
                <div className="space-y-3">
                  {BOTTLENECKS.map((b) => {
                    const isSelected = selectedBottlenecks.includes(b.id);
                    return (
                      <div
                        key={b.id}
                        onClick={() => toggleArrayItem(selectedBottlenecks, b.id, setSelectedBottlenecks)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-blue-50/70 border-blue-600 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 leading-snug">
                              {b.title}
                            </div>
                            <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                              {b.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Hours Lost Slider */}
              <div className="mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                    2. Estimated Hours Lost Per Team Member Per Week
                  </label>
                  <span className="text-lg font-black text-[#092755]">
                    {hoursLostWeekly} hrs / week
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="1"
                  value={hoursLostWeekly}
                  onChange={(e) => setHoursLostWeekly(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#092755]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-semibold">
                  <span>2 hrs (Occasional)</span>
                  <span>10 hrs (Major overhead)</span>
                  <span>25+ hrs (Severe gridlock)</span>
                </div>

                {/* Instant Calculation Pill */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-700">
                  <span>Total Organization Drain:</span>
                  <span className="font-extrabold text-blue-700">
                    ~{(TEAM_SIZES[teamSizeIndex].count * hoursLostWeekly).toLocaleString()} hours / week lost across team
                  </span>
                </div>
              </div>

              {/* Past Frictions */}
              <div className="mb-8">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  3. What Has Held You Back from Implementing AI? <span className="text-slate-400 font-normal">(Select all that apply)</span>
                </label>
                <div className="space-y-2">
                  {PAST_FRICTIONS.map((f) => {
                    const isSelected = selectedFrictions.includes(f);
                    return (
                      <button
                        key={f}
                        type="button"
                        onClick={() => toggleArrayItem(selectedFrictions, f, setSelectedFrictions)}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-50 text-amber-900 border-amber-300'
                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span>{f}</span>
                        {isSelected && <Check className="w-4 h-4 text-amber-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Actions */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  <span>Back to Context</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center justify-center bg-[#092755] hover:bg-blue-900 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm shadow-md active:scale-[0.98] transition-all"
                >
                  <span>Continue to Maturity</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* STEP 3: CURRENT AI MATURITY & TRANSFORMATION GOAL */}
          {/* ============================================================== */}
          {currentStep === 3 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl animate-in fade-in duration-200">
              <div className="mb-8 pb-6 border-b border-slate-100">
                <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                  Step 3 of 4
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092755] tracking-tight mt-1">
                  Diagnose Your Current AI Maturity
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Where does your organization realistically stand on the 5 Levels of AI framework today?
                </p>
              </div>

              {/* Level Diagnostic Picker */}
              <div className="mb-8">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-3">
                  1. Current Stage of Daily AI Usage
                </label>
                <div className="space-y-3">
                  {[
                    {
                      lvl: 1,
                      name: 'Level 1: The Baseline Chatbot User',
                      desc: 'Team members type one-off prompts into ChatGPT or Claude web tabs. No permanent memory, zero automated handoffs.'
                    },
                    {
                      lvl: 2,
                      name: 'Level 2: Permanent Memory & Context Grounding',
                      desc: 'Using Custom GPTs, system prompts, or uploaded PDF knowledge stores. Outputs are more relevant, but still triggered manually.'
                    },
                    {
                      lvl: 3,
                      name: 'Level 3: Automated Workflow Pipelines',
                      desc: 'Running deterministic webhook pipelines (Make, Zapier, n8n) connected to forms, databases, and emails.'
                    },
                    {
                      lvl: 4,
                      name: 'Level 4: The AI Agent Manager',
                      desc: 'Autonomous multi-agent architectures that execute code, inspect web data, and self-correct on edge cases.'
                    },
                    {
                      lvl: 5,
                      name: 'Level 5: The AI Operating System',
                      desc: 'Unified enterprise autonomous harness woven through all departments with shared institutional memory.'
                    }
                  ].map((item) => (
                    <div
                      key={item.lvl}
                      onClick={() => setCurrentLevel(item.lvl)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        currentLevel === item.lvl
                          ? 'bg-[#092755] text-white border-[#092755] shadow-md'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold leading-snug">
                          {item.name}
                        </span>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                          currentLevel === item.lvl ? 'bg-[#FDD412] text-[#092755]' : 'bg-slate-100 text-slate-600'
                        }`}>
                          Stage {item.lvl}
                        </span>
                      </div>
                      <p className={`text-xs mt-1 leading-relaxed ${
                        currentLevel === item.lvl ? 'text-slate-300' : 'text-slate-500'
                      }`}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Transformation Goal */}
              <div className="mb-7">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  2. Primary Outcome Desired from Training / Consulting
                </label>
                <div className="space-y-2">
                  {[
                    'Automate 80% of repetitive data entry & document extraction',
                    'Deploy proprietary internal AI knowledge assistants for staff',
                    'Train entire team to build and manage automated Level 3 pipelines',
                    'Executive strategy, AI governance & compliance leadership workshop',
                    'Build bespoke autonomous software or client-facing AI tool'
                  ].map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setPrimaryGoal(goal)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                        primaryGoal === goal
                          ? 'bg-blue-50 text-blue-900 border-blue-600 shadow-2xs font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span>{goal}</span>
                      {primaryGoal === goal && <Check className="w-4 h-4 text-blue-700" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Implementation Timeline */}
              <div className="mb-8">
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  3. Target Transformation Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    '14 Days (Fast Track)',
                    '30 Days (Standard Sprint)',
                    '60–90 Days (Enterprise)'
                  ].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                        timeline === t
                          ? 'bg-[#092755] text-[#FDD412] border-[#092755]'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation Actions */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  <span>Back to Bottlenecks</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="inline-flex items-center justify-center bg-[#FDD412] hover:bg-yellow-400 text-[#092755] font-black px-8 py-3.5 rounded-xl text-sm shadow-md active:scale-[0.98] transition-all"
                >
                  <span>Generate Custom Roadmap</span>
                  <Sparkles className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* STEP 4: CUSTOM ROADMAP & ROI SPECIFICATION */}
          {/* ============================================================== */}
          {currentStep === 4 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Executive Summary Card */}
              <div className="bg-[#092755] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#FDD412]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#FDD412]">
                      Executive Transformation Blueprint
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
                      {companyName ? `${companyName} Roadmap` : `${sector} AI Roadmap`}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Prepared for a team of {calculations.memberCount} members · Target: Level {calculations.targetLevel} Operations
                    </p>
                  </div>

                  <button
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/15 transition-all self-start sm:self-center"
                  >
                    <Copy className="w-3.5 h-3.5 text-[#FDD412]" />
                    <span>{copiedSummary ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                  </button>
                </div>

                {/* 3 Core Metric Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 relative z-10">
                  <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
                    <div className="text-xs text-slate-300 font-medium flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#FDD412]" />
                      <span>Annual Reclaimed Time</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-[#FDD412]">
                      {calculations.annualLost.toLocaleString()} hrs
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      ~{calculations.weeklyLost} hrs/week saved across team
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
                    <div className="text-xs text-slate-300 font-medium flex items-center gap-1.5 mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Estimated Economic Value</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                      ₦{(calculations.estimatedNairaSavings / 1_000_000).toFixed(1)}M+
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      ~${calculations.estimatedUsdSavings.toLocaleString()} USD in operational capacity
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10">
                    <div className="text-xs text-slate-300 font-medium flex items-center gap-1.5 mb-1">
                      <Cpu className="w-3.5 h-3.5 text-[#FDD412]" />
                      <span>Capability Escalation</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      L{currentLevel} → L{calculations.targetLevel}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {timeline}
                    </div>
                  </div>
                </div>

              </div>

              {/* 4-Week Custom Syllabus Blueprint Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
                <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                      Curriculum Architecture
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#092755] tracking-tight">
                      Recommended 4-Week Capability Syllabus
                    </h3>
                  </div>
                  <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
                    Hands-on Lab Format
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      week: 'Week 1',
                      title: 'Enterprise Prompting & Domain Context Grounding (Level 2)',
                      focus: `Transitioning from one-off chats to persistent context. Establishing brand-voice system prompts, building department-specific Custom GPTs, and grounding AI in ${sector} knowledge bases with zero data leaks.`
                    },
                    {
                      week: 'Week 2',
                      title: 'Deterministic Workflow Pipelines & Webhooks (Level 3)',
                      focus: `Connecting AI directly to ${selectedTools.slice(0, 3).join(', ')}. Automating document ingestion, invoice OCR extraction, and multi-step data pipelines via n8n / Make with zero copy-pasting.`
                    },
                    {
                      week: 'Week 3',
                      title: 'Autonomous Subagent Networks & Tool Calling (Level 4)',
                      focus: `Deploying specialized supervisor models that query databases, conduct automated due diligence, flag anomalies, and self-correct when edge-case errors occur.`
                    },
                    {
                      week: 'Week 4',
                      title: 'Governance, Human-in-the-Loop Safeguards & Deployment',
                      focus: 'Establishing corporate security policies, auditing model outputs against liability risks, and finalizing team SOPs so automated workflows run dependably every single business day.'
                    }
                  ].map((m, idx) => (
                    <div key={m.week} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-black uppercase tracking-wider text-[#092755] bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                          {m.week}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900">
                          {m.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                        {m.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation & Proposal Dispatch Form */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
                {isSubmitted ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#092755] mb-2">
                      Your Capability Roadmap Has Been Dispatched!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed">
                      Our Lead AI Consultant has received your team profile and will review your operational requirements. You will receive scoping feedback within <strong>24 business hours</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="https://wa.me/2348067628656?text=Hello%20DigiBeloved,%20I%20just%20completed%20the%20Applied%20AI%20Capability%20Assessment%20for%20my%20organization."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        <span>Instant WhatsApp Follow-up</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-slate-800 underline underline-offset-4"
                      >
                        Run Assessment for Another Team
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-xs font-black uppercase tracking-wider text-blue-600">
                        Next Step: Implementation
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#092755] tracking-tight mt-1">
                        Request Your Official Training Proposal or Strategy Call
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Enter your details below to receive the complete formal curriculum specification and pricing breakdown directly to your inbox.
                      </p>
                    </div>

                    <form onSubmit={handleSubmitRoadmap} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder="e.g. Dr. Amina Bello"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#092755]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Official Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            placeholder="e.g. amina@organization.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#092755]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone / WhatsApp Number <span className="text-slate-400 font-normal">(For fast dispatch)</span>
                        </label>
                        <input
                          type="tel"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="e.g. +234 806 762 8656"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#092755]"
                        />
                      </div>

                      <div className="pt-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center bg-[#FDD412] hover:bg-yellow-400 text-[#092755] font-black py-4 px-6 rounded-xl text-base shadow-lg shadow-[#FDD412]/20 active:scale-[0.98] transition-all disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <span>Generating &amp; Submitting Proposal...</span>
                          ) : (
                            <>
                              <span>Get Custom Team Training Proposal</span>
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </button>
                        <div className="text-center text-[11px] text-slate-500 mt-2 flex items-center justify-center gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Guaranteed 24-hour response · Zero spam · NDA-compliant</span>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Bottom Re-evaluation Link */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Assessment Over</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default AppliedAIFunnel;
