import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  Zap, 
  Layers, 
  Bot, 
  Workflow, 
  Database, 
  ShieldCheck, 
  Check, 
  HelpCircle,
  RotateCcw,
  ExternalLink
} from 'lucide-react';

interface AILevelData {
  level: number;
  label: string;
  name: string;
  tagline: string;
  paradigm: string;
  whatYouCanBuild: string[];
  toolStack: string[];
  bottleneck: string;
  breakthrough: string;
  accentColor: string;
}

const AI_LEVELS: AILevelData[] = [
  {
    level: 1,
    label: 'Level 1',
    name: 'The Baseline Chatbot User',
    tagline: 'Ad-hoc Prompting & Isolated Answers',
    paradigm: 'Single-turn prompt engineering in ChatGPT, Claude, or Gemini web apps. Zero persistence, zero automated handoffs.',
    whatYouCanBuild: [
      'Ad-hoc blog post and email drafts',
      'One-off meeting summaries from pasted transcripts',
      'Basic formula generation and grammar corrections',
      'Isolated brainstorming and conceptual ideation'
    ],
    toolStack: ['ChatGPT Plus', 'Claude Web', 'Google Gemini', 'Perplexity'],
    bottleneck: 'Copy-paste fatigue: Every interaction starts from zero context, requiring re-explaining background information repeatedly.',
    breakthrough: 'Unlocking Level 2: Grounding your AI in persistent brand voice, reusable system prompts, and curated knowledge stores.',
    accentColor: '#64748B'
  },
  {
    level: 2,
    label: 'Level 2',
    name: 'Permanent Memory & Context Grounding',
    tagline: 'Custom GPTs, System Prompts & Grounded RAG',
    paradigm: 'AI grounded with domain knowledge bases, specialized system instructions, and structured templates.',
    whatYouCanBuild: [
      'Company-specific Custom GPTs and Project Artifacts',
      'Standardized proposal and contract first-pass generation',
      'Brand-voice compliant customer response assistants',
      'Curated internal document question-and-answering assistants'
    ],
    toolStack: ['Custom GPTs', 'Claude Projects', 'NotebookLM', 'Notion AI', 'Custom System Prompts'],
    bottleneck: 'Human-in-the-loop manual triggers: You still have to manually open the window, click generate, and manually move the output.',
    breakthrough: 'Unlocking Level 3: Connecting AI directly to webhooks, forms, emails, and business software pipelines.',
    accentColor: '#3B82F6'
  },
  {
    level: 3,
    label: 'Level 3',
    name: 'Automated Workflow Pipelines',
    tagline: 'Deterministic Multi-Step Automation Chains',
    paradigm: 'Event-driven webhook pipelines (n8n, Make, Zapier). Systems trigger, transform, and sync AI outputs automatically.',
    whatYouCanBuild: [
      'Instant invoice data extraction and ERP ledger posting',
      'Multi-channel customer enquiry classification and routing',
      'Automated new client onboarding document generation',
      'E-commerce stock depletion forecasts and auto-replenishment'
    ],
    toolStack: ['n8n', 'Make.com', 'Zapier', 'PostgreSQL', 'Webhooks & REST APIs', 'Gemini Flash'],
    bottleneck: 'Rigid failure paths: If an API payload differs or an edge case occurs, deterministic workflows break without adaptive reasoning.',
    breakthrough: 'Unlocking Level 4: Deploying autonomous agents that inspect outputs, make dynamic decisions, and self-correct.',
    accentColor: '#0EA5E9'
  },
  {
    level: 4,
    label: 'Level 4',
    name: 'The AI Agent Manager',
    tagline: 'Autonomous Subagents, Tool Calling & Self-Correction',
    paradigm: 'Multi-agent architectures where supervisor agents delegate sub-tasks, execute code, browse the web, and verify outputs.',
    whatYouCanBuild: [
      'Autonomous B2B inbound lead enrichment and meeting booking',
      'Comprehensive land title & legal due diligence investigation scouts',
      'Automated pull request code review and security regression testing',
      'Multi-source competitive market intelligence monitors'
    ],
    toolStack: ['Claude 3.7 Sonnet', 'Gemini 3 Pro', 'Antigravity Agent SDK', 'LangGraph', 'Vector DBs (Qdrant/Pinecone)'],
    bottleneck: 'Siloed agent pods: Agents operate within individual teams but lack shared enterprise memory and company-wide coordination.',
    breakthrough: 'Unlocking Level 5: Architecting a unified, full-stack AI Operating System spanning cross-departmental operations.',
    accentColor: '#8B5CF6'
  },
  {
    level: 5,
    label: 'Level 5',
    name: 'The AI Operating System',
    tagline: 'Autonomous Business Harnesses & Enterprise Memory',
    paradigm: 'Continuous, sovereign AI fabric woven into every department. Proactive execution, automated governance, and self-evolving institutional intelligence.',
    whatYouCanBuild: [
      'Self-orchestrating sales, fulfillment, and accounting operations',
      'Proactive business risk forecasting and executive scenario modeling',
      'Autonomous software development and self-healing cloud infrastructure',
      'Institutional knowledge graph updated in real time from daily team work'
    ],
    toolStack: ['Custom Agent SDKs', 'Gemini 3 Pro / Deep Think', 'Distributed RAG', 'Cloudflare Workers / D1', 'Enterprise SLAs'],
    bottleneck: 'Governance & Alignment: Ensuring autonomous operations stay compliant, mathematically grounded, and aligned with human strategy.',
    breakthrough: 'Ultimate Operational Leverage: The business operates at 10x throughput with near-zero marginal operational cost.',
    accentColor: '#FDD412'
  }
];

interface QuizAnswer {
  questionId: number;
  selectedOptionIndex: number;
}

export const AILevelsShowcase: React.FC = () => {
  const [activeLevelIndex, setActiveLevelIndex] = useState<number>(0);
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<number, number>>({});
  const [assessedLevel, setAssessedLevel] = useState<number | null>(null);

  const activeLevel = AI_LEVELS[activeLevelIndex];

  // 3-step diagnostic assessment questions
  const quizQuestions = [
    {
      id: 1,
      title: 'How does your team currently interact with AI models?',
      options: [
        { label: 'We type prompts directly into ChatGPT/Claude web apps for one-off drafts', level: 1 },
        { label: 'We use Custom GPTs or persistent system prompts with uploaded PDFs/docs', level: 2 },
        { label: 'We run automated webhooks (Zapier, Make, n8n) connected to forms or sheets', level: 3 },
        { label: 'We run autonomous agents that call tools, browse data, and self-correct', level: 4 },
        { label: 'We have an integrated AI operating system orchestrating multiple business units', level: 5 }
      ]
    },
    {
      id: 2,
      title: 'Where does your organizational data live during AI execution?',
      options: [
        { label: 'Nowhere permanently — we copy-paste snippets into chat windows manually', level: 1 },
        { label: 'In static knowledge bases, shared drive docs, or Custom GPT uploads', level: 2 },
        { label: 'In databases or CRMs synced deterministically via automated workflows', level: 3 },
        { label: 'In searchable vector databases with dynamic retrieval (RAG) and function calls', level: 4 },
        { label: 'In a real-time sovereign enterprise knowledge graph across all company systems', level: 5 }
      ]
    },
    {
      id: 3,
      title: 'What happens when an automated business process encounters an edge case?',
      options: [
        { label: 'There is no automation — a human handles every single step manually', level: 1 },
        { label: 'A human prompts the AI again with new instructions to fix the error', level: 2 },
        { label: 'The automation breaks or errors out and sends a failure notification', level: 3 },
        { label: 'An agent inspects the error, generates alternative plans, and retries autonomously', level: 4 },
        { label: 'The AI operating system self-heals, flags anomaly telemetry, and logs audit reports', level: 5 }
      ]
    }
  ];

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    const updated = { ...assessmentAnswers, [questionId]: optionIndex };
    setAssessmentAnswers(updated);

    // If all 3 questions answered, compute average level
    if (Object.keys(updated).length === 3) {
      const q1 = quizQuestions[0].options[updated[1]].level;
      const q2 = quizQuestions[1].options[updated[2]].level;
      const q3 = quizQuestions[2].options[updated[3]].level;
      const calculated = Math.round((q1 + q2 + q3) / 3);
      setAssessedLevel(calculated);
      setActiveLevelIndex(calculated - 1);
    }
  };

  const handleResetQuiz = () => {
    setAssessmentAnswers({});
    setAssessedLevel(null);
  };

  return (
    <section aria-label="The 5 Levels of AI Mastery" className="bg-[#092755] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Atmospheric Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FDD412]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FDD412] text-xs font-black tracking-widest uppercase mb-4 backdrop-blur-sm shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational AI Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white mb-5">
            The 5 Levels of <span className="text-[#FDD412]">AI Mastery</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Most individuals and teams are trapped at <span className="text-white font-semibold">Level 1</span> — prompting chatbots one question at a time. Discover how forward-thinking organizations escalate to <span className="text-[#FDD412] font-semibold">Level 5 Autonomous Systems</span>.
          </p>
        </div>

        {/* THE 5 LEVELS STEPPER */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#FDD412]">
                Interactive Roadmap
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Inspect Each Evolutionary Stage
              </h3>
            </div>
            <button
              onClick={() => setShowAssessment(!showAssessment)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl border border-white/15 transition-all shadow-xs"
            >
              <HelpCircle className="w-4 h-4 text-[#FDD412]" />
              <span>{showAssessment ? 'Hide Diagnostic' : 'Diagnose Your Level'}</span>
            </button>
          </div>

          {/* Stepper Navigation: Mobile Horizontal Scroll, Desktop Connected Nodes */}
          <div className="mb-8">
            <div className="grid grid-cols-5 gap-2 sm:gap-3 p-1.5 sm:p-2 bg-white/[0.04] border border-white/10 rounded-2xl backdrop-blur-sm">
              {AI_LEVELS.map((lvl, index) => {
                const isActive = activeLevelIndex === index;
                const isCompleted = activeLevelIndex > index;

                return (
                  <button
                    key={lvl.level}
                    onClick={() => setActiveLevelIndex(index)}
                    className={`flex flex-col items-center justify-center py-3 px-2 sm:px-3 rounded-xl transition-all duration-200 text-center relative ${
                      isActive
                        ? 'bg-[#FDD412] text-[#092755] font-black shadow-lg shadow-[#FDD412]/20 scale-[1.02]'
                        : isCompleted
                        ? 'bg-white/10 text-white hover:bg-white/15'
                        : 'bg-transparent text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-1 mb-1">
                      <span className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-wider ${
                        isActive ? 'text-[#092755]' : 'text-slate-300'
                      }`}>
                        L{lvl.level}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#092755] animate-ping" />
                      )}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold truncate w-full hidden md:block">
                      {lvl.name.replace('The ', '')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Level Inspector Card */}
          <div className="bg-white rounded-3xl text-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-200 relative overflow-hidden transition-all duration-300">
            {/* Top Badge & Level Title */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#092755] text-[#FDD412] text-xs font-black tracking-widest uppercase mb-2">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{activeLevel.label} Architecture</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-[#092755] tracking-tight">
                  {activeLevel.name}
                </h4>
                <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
                  {activeLevel.tagline}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-3 rounded-2xl shrink-0">
                <div className="text-right">
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    Operational Depth
                  </div>
                  <div className="text-base font-extrabold text-[#092755]">
                    Stage {activeLevel.level} of 5
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#092755] text-[#FDD412] flex items-center justify-center font-black text-lg shadow-sm">
                  {activeLevel.level * 20}%
                </div>
              </div>
            </div>

            {/* Core Paradigm Description */}
            <div className="py-6 border-b border-slate-100">
              <h5 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                Core Operating Paradigm
              </h5>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {activeLevel.paradigm}
              </p>
            </div>

            {/* Two-Column Breakdown: What You Can Build + Tool Stack */}
            <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-slate-100">
              
              {/* Left: What You Can Build */}
              <div className="lg:col-span-7">
                <h5 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#092755]" />
                  <span>Concrete Capabilities You Can Deploy</span>
                </h5>
                <ul className="space-y-3">
                  {activeLevel.whatYouCanBuild.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Required Tool Stack */}
              <div className="lg:col-span-5">
                <h5 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#092755]" />
                  <span>Required Tool Stack &amp; Infrastructure</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeLevel.toolStack.map((tool, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200/80 shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Bottleneck Warning Box */}
                <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm">
                  <div className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>The Bottleneck at {activeLevel.label}:</span>
                  </div>
                  <p className="text-amber-800 leading-relaxed">
                    {activeLevel.bottleneck}
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Breakthrough & Action Bridge */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-600">
                <span className="font-bold text-[#092755]">The Advancement Unlock: </span>
                <span>{activeLevel.breakthrough}</span>
              </div>

              <Link
                to="/ai-training-for-organizations"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#092755] hover:bg-[#0d3470] text-white px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.98] shrink-0"
              >
                <span>Bridge to Level {Math.min(activeLevel.level + 1, 5)}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. DIAGNOSTIC SELF-ASSESSMENT WIZARD */}
        {showAssessment && (
          <div className="mb-16 bg-white/[0.05] border border-white/15 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-md relative overflow-hidden transition-all duration-300">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#FDD412]">
                  Quick Self-Assessment
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Where Does Your Organization Stand?
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Answer 3 diagnostic questions to calculate your current AI maturity tier and get an actionable upgrade roadmap.
                </p>
              </div>

              {assessedLevel && (
                <button
                  onClick={handleResetQuiz}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white underline underline-offset-4"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Diagnostic</span>
                </button>
              )}
            </div>

            {/* Questions Grid */}
            <div className="space-y-8">
              {quizQuestions.map((q, qIdx) => (
                <div key={q.id} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FDD412] text-[#092755] text-xs font-black flex items-center justify-center shrink-0">
                      {qIdx + 1}
                    </span>
                    <span>{q.title}</span>
                  </h4>

                  <div className="grid grid-cols-1 gap-2.5">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = assessmentAnswers[q.id] === optIdx;

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-[#FDD412] text-[#092755] font-bold border-[#FDD412] shadow-md'
                              : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-[#092755] bg-[#092755]' : 'border-white/40'
                            }`}>
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#FDD412]" />}
                            </span>
                            <span>{opt.label}</span>
                          </div>
                          <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            isSelected ? 'bg-[#092755]/10 text-[#092755]' : 'bg-white/10 text-slate-300'
                          }`}>
                            L{opt.level}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Diagnostic Result Card */}
            {assessedLevel && (
              <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#FDD412] text-[#092755] shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-[#092755]/70 mb-1">
                      Diagnostic Calculation Complete
                    </div>
                    <h4 className="text-2xl sm:text-3xl font-black tracking-tight">
                      Your Organization is at Level {assessedLevel}: {AI_LEVELS[assessedLevel - 1].name}
                    </h4>
                    <p className="text-sm font-medium text-[#092755]/85 mt-2 max-w-2xl leading-relaxed">
                      {AI_LEVELS[assessedLevel - 1].bottleneck} Advancing to Level {Math.min(assessedLevel + 1, 5)} will unlock automated pipelines, verified accuracy, and significant operational hours.
                    </p>
                  </div>

                  <div className="shrink-0 flex flex-col gap-2">
                    <Link
                      to="/ai-training-for-organizations"
                      className="inline-flex items-center justify-center bg-[#092755] hover:bg-slate-900 text-white font-extrabold px-6 py-4 rounded-xl text-sm shadow-xl active:scale-[0.98] transition-all"
                    >
                      <span>Get Custom Training Roadmap</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <span className="text-[11px] text-center text-[#092755]/75 font-semibold">
                      Includes 1-on-1 team capability audit
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Fast Action Prompt */}
        {!showAssessment && (
          <div className="text-center pt-4">
            <button
              onClick={() => setShowAssessment(true)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FDD412] hover:text-yellow-300 transition-colors"
            >
              <span>Take the 60-Second AI Maturity Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default AILevelsShowcase;
