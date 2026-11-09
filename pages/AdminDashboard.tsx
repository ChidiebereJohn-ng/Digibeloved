import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  AlertCircle, 
  Edit3, 
  Plus, 
  Trash2, 
  Copy, 
  FileText, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  Search, 
  Filter, 
  RotateCcw, 
  Download, 
  ExternalLink, 
  Eye, 
  Cpu, 
  GitBranch, 
  BookOpen, 
  X, 
  Check, 
  ChevronRight, 
  Zap,
  BarChart3,
  Sliders,
  LogOut,
  FolderSync
} from 'lucide-react';
import { 
  UseCase, 
  SECTORS, 
  DOMAINS, 
  TASKS, 
  Sector, 
  Domain, 
  TaskCategory, 
  AILevel, 
  getStoredUseCases, 
  saveStoredUseCases, 
  resetStoredUseCases 
} from '../data/useCases';

// Default Master PIN
const MASTER_PIN = 'digi2026';
const AUTH_STORAGE_KEY = 'digibeloved_admin_auth';

export const AdminDashboard: React.FC = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true' || 
           localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  });
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  // Active Tab: 'moderation' | 'schematic' | 'system'
  const [activeTab, setActiveTab] = useState<'moderation' | 'schematic' | 'system'>('moderation');

  // Use Cases State
  const [useCases, setUseCases] = useState<UseCase[]>(() => getStoredUseCases());
  const [statusFilter, setStatusFilter] = useState<'all' | 'draft' | 'approved'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sectorFilter, setSectorFilter] = useState<string>('All');
  const [levelFilter, setLevelFilter] = useState<number | 'All'>('All');

  // Notifications / Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modal State for Add / Edit
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingCase, setEditingCase] = useState<UseCase | null>(null);

  // Form State
  const [formTitle, setFormTitle] = useState<string>('');
  const [formSlug, setFormSlug] = useState<string>('');
  const [formSector, setFormSector] = useState<Sector>('FinTech');
  const [formDomain, setFormDomain] = useState<Domain>('Internal Operations');
  const [formTask, setFormTask] = useState<TaskCategory>('Invoice & Document Intelligence');
  const [formLevel, setFormLevel] = useState<AILevel>(3);
  const [formSummary, setFormSummary] = useState<string>('');
  const [formSteps, setFormSteps] = useState<string[]>(['', '', '']);
  const [formHoursSaved, setFormHoursSaved] = useState<string>('');
  const [formRoi, setFormRoi] = useState<string>('');
  const [formHighlight, setFormHighlight] = useState<string>('');
  const [formToolStack, setFormToolStack] = useState<string>('');
  const [formStatus, setFormStatus] = useState<'approved' | 'draft'>('draft');
  const [formFeatured, setFormFeatured] = useState<boolean>(false);

  // Teaching Schematic State
  const [activeGateIndex, setActiveGateIndex] = useState<number>(0);
  const [showTeachingNotes, setShowTeachingNotes] = useState<boolean>(true);

  // Show Toast Helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  // Synchronize storage
  const updateCasesList = (updated: UseCase[]) => {
    setUseCases(updated);
    saveStoredUseCases(updated);
  };

  // PIN Authentication Handler
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === MASTER_PIN || pinInput === '2026') {
      setIsAuthenticated(true);
      setPinError('');
      if (rememberMe) {
        localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      } else {
        sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      }
      showToast('Welcome to DigiBeloved Admin Command Center');
    } else {
      setPinError('Invalid PIN code. Master PIN is digi2026');
      setPinInput('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setPinInput('');
    showToast('Admin session locked');
  };

  // 1-Click Status Toggles
  const handleApproveAndPublish = (id: string) => {
    const updated = useCases.map(item => {
      if (item.id === id) {
        return { ...item, status: 'approved' as const };
      }
      return item;
    });
    updateCasesList(updated);
    showToast('✓ Use Case Approved & Published to Applied AI Hub');
  };

  const handleSendToDraft = (id: string) => {
    const updated = useCases.map(item => {
      if (item.id === id) {
        return { ...item, status: 'draft' as const };
      }
      return item;
    });
    updateCasesList(updated);
    showToast('Moved to Draft queue (Unpublished from live Hub)');
  };

  // Delete Use Case
  const handleDeleteCase = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to permanently delete "${title}"?`)) {
      const updated = useCases.filter(item => item.id !== id);
      updateCasesList(updated);
      showToast('Use Case removed from database');
    }
  };

  // Reset to Factory Default Data
  const handleResetToDefault = () => {
    if (window.confirm('Reset all use cases to factory defaults? Any custom drafts or edits will be refreshed.')) {
      const defaults = resetStoredUseCases();
      setUseCases(defaults);
      showToast('Factory database restored successfully');
    }
  };

  // Open Create Modal
  const handleOpenCreateModal = () => {
    setEditingCase(null);
    setFormTitle('');
    setFormSlug('');
    setFormSector('FinTech');
    setFormDomain('Internal Operations');
    setFormTask('Invoice & Document Intelligence');
    setFormLevel(3);
    setFormSummary('');
    setFormSteps(['Webhook ingests source data payload into ingestion engine', 'Vision/NLP model extracts key entities into normalized JSON schema', 'Automated business logic checks parameters against ERP rules']);
    setFormHoursSaved('20 hrs/week');
    setFormRoi('350% in 60 days');
    setFormHighlight('99.2% automated match accuracy');
    setFormToolStack('Gemini 3 Pro, n8n, PostgreSQL, Webhooks');
    setFormStatus('draft');
    setFormFeatured(false);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEditModal = (item: UseCase) => {
    setEditingCase(item);
    setFormTitle(item.title);
    setFormSlug(item.slug);
    setFormSector(item.sector);
    setFormDomain(item.domain);
    setFormTask(item.task);
    setFormLevel(item.level);
    setFormSummary(item.summary);
    setFormSteps(item.depthOfAction.length > 0 ? item.depthOfAction : ['', '']);
    setFormHoursSaved(item.impactYielded.hoursSaved);
    setFormRoi(item.impactYielded.roi);
    setFormHighlight(item.impactYielded.metricHighlight);
    setFormToolStack(item.toolStack.join(', '));
    setFormStatus(item.status);
    setFormFeatured(item.featured);
    setIsModalOpen(true);
  };

  // Save Modal Form (Create or Edit)
  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      alert('Please enter a Title');
      return;
    }

    const cleanedSteps = formSteps.map(s => s.trim()).filter(Boolean);
    if (cleanedSteps.length === 0) {
      alert('Please provide at least one Depth of Action step');
      return;
    }

    const tools = formToolStack
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const generatedSlug = formSlug.trim() 
      ? formSlug.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
      : formTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    if (editingCase) {
      // Edit existing
      const updated = useCases.map(item => {
        if (item.id === editingCase.id) {
          return {
            ...item,
            title: formTitle.trim(),
            slug: generatedSlug,
            sector: formSector,
            domain: formDomain,
            task: formTask,
            level: formLevel,
            summary: formSummary.trim(),
            depthOfAction: cleanedSteps,
            impactYielded: {
              hoursSaved: formHoursSaved.trim() || 'N/A',
              roi: formRoi.trim() || 'N/A',
              metricHighlight: formHighlight.trim() || 'N/A'
            },
            toolStack: tools.length > 0 ? tools : ['Gemini 3 Pro'],
            status: formStatus,
            featured: formFeatured
          };
        }
        return item;
      });
      updateCasesList(updated);
      showToast(`✓ Updated "${formTitle}" successfully`);
    } else {
      // Add new
      const newCase: UseCase = {
        id: `uc-${formSector.toLowerCase().replace(/[^a-z0-9]+/g, '')}-${Date.now()}`,
        title: formTitle.trim(),
        slug: generatedSlug,
        sector: formSector,
        domain: formDomain,
        task: formTask,
        level: formLevel,
        summary: formSummary.trim() || 'Operational AI implementation framework architected by DigiBeloved.',
        depthOfAction: cleanedSteps,
        impactYielded: {
          hoursSaved: formHoursSaved.trim() || '15+ hrs/week',
          roi: formRoi.trim() || '300% ROI in 90 days',
          metricHighlight: formHighlight.trim() || '98% operational accuracy'
        },
        toolStack: tools.length > 0 ? tools : ['Gemini 3 Pro', 'Antigravity Agent SDK'],
        status: formStatus,
        featured: formFeatured,
        createdAt: new Date().toISOString().split('T')[0]
      };
      updateCasesList([newCase, ...useCases]);
      showToast(`✓ New Use Case added (${formStatus === 'approved' ? 'Published Live' : 'Saved in Draft'})`);
    }

    setIsModalOpen(false);
  };

  // Add Step in Modal
  const handleAddStep = () => {
    setFormSteps([...formSteps, '']);
  };

  // Remove Step in Modal
  const handleRemoveStep = (index: number) => {
    if (formSteps.length <= 1) return;
    setFormSteps(formSteps.filter((_, idx) => idx !== index));
  };

  // Update specific Step in Modal
  const handleStepChange = (index: number, val: string) => {
    const copy = [...formSteps];
    copy[index] = val;
    setFormSteps(copy);
  };

  // Export JSON
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(useCases, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `digibeloved_use_cases_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('JSON database backup exported');
  };

  // Filtered Queue computation
  const filteredCases = useMemo(() => {
    return useCases.filter(item => {
      // Status filter
      if (statusFilter === 'draft' && item.status !== 'draft') return false;
      if (statusFilter === 'approved' && item.status !== 'approved') return false;

      // Sector filter
      if (sectorFilter !== 'All' && item.sector !== sectorFilter) return false;

      // Level filter
      if (levelFilter !== 'All' && item.level !== levelFilter) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSummary = item.summary.toLowerCase().includes(q);
        const matchesTools = item.toolStack.some(t => t.toLowerCase().includes(q));
        const matchesSector = item.sector.toLowerCase().includes(q);
        const matchesTask = item.task.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSummary && !matchesTools && !matchesSector && !matchesTask) return false;
      }

      return true;
    });
  }, [useCases, statusFilter, sectorFilter, levelFilter, searchQuery]);

  // Counts
  const draftCount = useCases.filter(c => c.status === 'draft').length;
  const approvedCount = useCases.filter(c => c.status === 'approved').length;

  // -------------------------------------------------------------
  // MASTER 5 LEVELS TEACHING SCHEMATIC & CURRICULUM GATES DATA
  // -------------------------------------------------------------
  const TEACHING_GATES = [
    {
      gateId: 'gate-1-2',
      fromLevel: 1,
      toLevel: 2,
      gateName: 'Gate 1 → 2: The Context & Grounding Gate',
      subTitle: 'From Ad-hoc Prompt Roulette to Persistent Institutional Memory',
      color: '#3B82F6',
      clientSymptoms: [
        'Team members typing repetitive 500-word context background into ChatGPT every single morning',
        'Inconsistent tone, hallucinated policy facts, and divergent formatting between departments',
        'Zero reusable company knowledge store — answers vanish into individual browser histories',
        'Copy-paste fatigue when transferring unstructured outputs to company tools'
      ],
      consultantCurriculum: [
        {
          step: '1. Institutional Knowledge Vectorization',
          action: 'Extract company SOPs, brand books, past winning proposals, and policy documents into structured RAG chunks.'
        },
        {
          step: '2. System Prompt Engineering & Guardrails',
          action: 'Architect standardized role-instruction prompts with negative constraints ("Never extrapolate tax numbers; strictly cite section 4").'
        },
        {
          step: '3. Custom Workspace Artifacts Deployment',
          action: 'Deploy Claude Projects, Custom GPTs, or NotebookLM pods partitioned by business unit.'
        }
      ],
      clientDeliverable: 'Grounded Enterprise Knowledge Hub & Brand Voice Operating Manual',
      auditMilestone: '100% adherence to company style guide; zero factual hallucinations on verified company policy tests.',
      roiImpact: '7 to 10 hours saved per knowledge worker weekly.'
    },
    {
      gateId: 'gate-2-3',
      fromLevel: 2,
      toLevel: 3,
      gateName: 'Gate 2 → 3: The Pipeline & Determinism Gate',
      subTitle: 'From Manual Window Clicking to Event-Driven Webhooks',
      color: '#0EA5E9',
      clientSymptoms: [
        'Employees love their Custom GPTs, but still copy-paste outputs manually into QuickBooks, HubSpot, or Google Sheets',
        'AI insights arrive too late because human triggers are required during business hours',
        'Manual spreadsheet transcription errors occurring during peak transaction periods',
        'Lack of automated alert routing for critical business discrepancies'
      ],
      consultantCurriculum: [
        {
          step: '1. Event-Driven Webhook Mapping',
          action: 'Identify upstream triggers (email attachments, form webhooks, banking APIs, Stripe charges) to auto-invoke workflows.'
        },
        {
          step: '2. JSON Schema Normalization',
          action: 'Force LLM structured outputs via Pydantic/Zod schemas to guarantee strictly typed database payloads.'
        },
        {
          step: '3. Orchestration Engine Build (n8n / Make / APIs)',
          action: 'Construct resilient webhook loops with automatic retries, fallback routing, and Slack/Teams alerts.'
        }
      ],
      clientDeliverable: '3 Core Production Webhook Pipelines (Invoicing, Inbound Lead Triage, Contract Filing)',
      auditMilestone: 'Zero human touch from invoice receipt to ERP draft posting in under 15 seconds.',
      roiImpact: '20+ hours saved per department weekly; 99% reduction in manual data entry error.'
    },
    {
      gateId: 'gate-3-4',
      fromLevel: 3,
      toLevel: 4,
      gateName: 'Gate 3 → 4: The Agentic & Tool-Calling Gate',
      subTitle: 'From Linear Workflows to Autonomous Subagent Goal Factoring',
      color: '#8B5CF6',
      clientSymptoms: [
        'Deterministic pipelines break down the moment an unexpected PDF format or ambiguous email arrives',
        'Workflows lack multi-step dynamic decision making: they cannot self-correct, browse, or query secondary sources',
        'Complex investigative tasks (due diligence, code reviews, deep research) still require senior human labor',
        'Inability to factor high-level strategic goals into discrete executable sub-tasks'
      ],
      consultantCurriculum: [
        {
          step: '1. Goal Factoring & Supervisor Architecture',
          action: 'Deconstruct macro-objectives into hierarchical supervisor-worker agent graphs using Antigravity Agent SDK / LangGraph.'
        },
        {
          step: '2. Deterministic Tool Calling & Sandboxes',
          action: 'Equip agents with sandboxed Python code execution, web scrapers, database SQL queries, and OCR tools.'
        },
        {
          step: '3. Reflection & Evaluation Loops',
          action: 'Implement critic subagents that grade work against benchmark rubrics and force re-generation if confidence is below 95%.'
        }
      ],
      clientDeliverable: 'Autonomous Multi-Agent Investigation Scout (Legal / FinTech / Software PR Auditor)',
      auditMilestone: 'Agent autonomously executes 5+ tool calls, evaluates edge cases, and produces audited briefing.',
      roiImpact: '4.5x faster project turnaround; replaces 40+ hours of senior analyst investigation per deal.'
    },
    {
      gateId: 'gate-4-5',
      fromLevel: 4,
      toLevel: 5,
      gateName: 'Gate 4 → 5: The Autonomous Ecosystem Gate',
      subTitle: 'From Standalone Agent Pods to Sovereign Enterprise AI OS',
      color: '#FDD412',
      clientSymptoms: [
        'Marketing, Finance, and Support each have disparate agent tools that do not share state or cross-communicate',
        'Executive leadership lacks unified observability, real-time cost telemetry, and deterministic audit trails',
        'Institutional memory remains fragmented across third-party SaaS silos rather than owned enterprise IP',
        'Security & compliance concerns regarding data sovereignty and regulatory governance'
      ],
      consultantCurriculum: [
        {
          step: '1. Sovereign AI Operating System Architecture',
          action: 'Centralize cross-departmental agent harnesses over private Cloudflare Workers / D1 and localized Vector databases.'
        },
        {
          step: '2. Real-Time Telemetry & Enterprise Governance',
          action: 'Deploy executive oversight dashboards tracking token burn, task completion SLAs, human escalation rates, and mathematical safety.'
        },
        {
          step: '3. Self-Evolving Institutional Memory Graph',
          action: 'Construct enterprise knowledge graphs that dynamically ingest operational decisions made across all departments.'
        }
      ],
      clientDeliverable: 'Full Sovereign Enterprise AI Operating System & Executive Governance Console',
      auditMilestone: 'Entire company operating autonomously at 10x throughput with 100% auditable regulatory compliance.',
      roiImpact: '10x operational leverage; multi-million dollar margin expansion and near-zero marginal scaling cost.'
    }
  ];

  // If not authenticated, render PIN entry screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#092755] flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden font-sans">
        {/* Atmosphere */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FDD412]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          
          {/* Logo & Brand Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="w-11 h-11 rounded-2xl bg-[#FDD412] flex items-center justify-center font-black text-[#092755] text-xl shadow-lg shadow-[#FDD412]/20">
                DB
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Digi<span className="text-[#FDD412]">Beloved</span>
              </span>
            </Link>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#FDD412] text-xs font-bold uppercase tracking-widest mt-2">
              <Shield className="w-3.5 h-3.5" />
              <span>Restricted Command Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Admin & Curation Engine
            </h1>
            <p className="text-sm text-slate-300 mt-1.5">
              Enter authorized PIN to access the curation queue and master teaching schematics.
            </p>
          </div>

          {/* PIN Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
            <form onSubmit={handlePinSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Security Access PIN
                </label>
                <div className="relative">
                  <input
                    type="password"
                    maxLength={16}
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    placeholder="Enter Master PIN (e.g. digi2026)"
                    className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#092755] focus:outline-hidden text-base sm:text-lg font-bold text-slate-800 tracking-wider transition-colors placeholder:text-slate-400 placeholder:font-normal"
                    autoFocus
                  />
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>
                {pinError && (
                  <p className="text-xs text-rose-600 font-semibold mt-2 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{pinError}</span>
                  </p>
                )}
              </div>

              {/* Remember me toggle */}
              <div className="flex items-center justify-between text-xs text-slate-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-[#092755] focus:ring-[#092755]"
                  />
                  <span>Remember session on this device</span>
                </label>
                <span className="text-slate-400 text-[11px]">Default: <code className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-mono font-bold">digi2026</code></span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#092755] hover:bg-[#0D3470] text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-[#092755]/25 transition-all transform active:scale-98 cursor-pointer"
              >
                <Unlock className="w-5 h-5 text-[#FDD412]" />
                <span>Unlock Command Center</span>
              </button>
            </form>

            {/* Quick Helper */}
            <div className="mt-6 pt-5 border-t border-slate-100 text-center">
              <Link 
                to="/" 
                className="text-xs font-bold text-slate-500 hover:text-[#092755] transition-colors inline-flex items-center gap-1"
              >
                <span>← Return to Public Website</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // AUTHENTICATED ADMIN DASHBOARD VIEW
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#EEF3FB] text-slate-800 font-sans flex flex-col">
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 animate-bounce sm:animate-none">
          <div className="bg-[#092755] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#FDD412]/40 flex items-center gap-3 text-sm font-bold">
            <Sparkles className="w-4 h-4 text-[#FDD412]" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* TOP EXECUTIVE COMMAND HEADER */}
      <header className="bg-[#092755] text-white sticky top-0 z-40 border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Left Brand & Badge */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-[#FDD412] flex items-center justify-center font-black text-[#092755] text-base shadow-xs">
                DB
              </div>
              <span className="text-xl font-black tracking-tight text-white hidden sm:inline">
                Digi<span className="text-[#FDD412]">Beloved</span>
              </span>
            </Link>

            <div className="h-6 w-px bg-white/20 hidden sm:block" />

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-slate-200">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-[#FDD412]">/admin</span>
              <span className="hidden md:inline text-slate-300">· Curation Engine</span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/applied-ai-hub"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 border border-white/10"
              title="View how verified cases look to public visitors"
            >
              <Eye className="w-3.5 h-3.5 text-[#FDD412]" />
              <span className="hidden sm:inline">Live Public Hub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </Link>

            <button
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 hover:text-rose-200 text-xs font-bold transition-all flex items-center gap-1.5 border border-rose-500/20 cursor-pointer"
              title="Lock admin session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lock Session</span>
            </button>
          </div>

        </div>

        {/* SUBNAV NAVIGATION PILLS */}
        <div className="bg-[#071f43] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-2 py-2.5 no-scrollbar">
            
            <button
              onClick={() => setActiveTab('moderation')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'moderation'
                  ? 'bg-[#FDD412] text-[#092755] shadow-md shadow-[#FDD412]/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Use Case Curation & Queue</span>
              {draftCount > 0 && (
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                  activeTab === 'moderation' ? 'bg-[#092755] text-[#FDD412]' : 'bg-amber-400 text-[#092755]'
                }`}>
                  {draftCount} Drafts
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('schematic')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'schematic'
                  ? 'bg-[#FDD412] text-[#092755] shadow-md shadow-[#FDD412]/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>Master 5 Levels Teaching Schematic</span>
            </button>

            <button
              onClick={() => setActiveTab('system')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeTab === 'system'
                  ? 'bg-[#FDD412] text-[#092755] shadow-md shadow-[#FDD412]/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <FolderSync className="w-4 h-4" />
              <span>Database Sync & JSON Export</span>
            </button>

          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

        {/* ======================================================== */}
        {/* TAB 1: USE CASE CURATION & MODERATION ENGINE            */}
        {/* ======================================================== */}
        {activeTab === 'moderation' && (
          <div className="space-y-8">
            
            {/* Executive Quick Stats Strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Total Repository</span>
                  <Layers className="w-4 h-4 text-[#092755]" />
                </div>
                <div className="text-3xl font-black text-[#092755]">{useCases.length}</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Curated Frameworks</div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Published Live</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-3xl font-black text-emerald-600">{approvedCount}</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Live in Applied AI Hub</div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Drafts Queue</span>
                  <Clock className="w-4 h-4 text-amber-500" />
                </div>
                <div className="text-3xl font-black text-amber-600">{draftCount}</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Awaiting 1-Click Approval</div>
              </div>

              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider">Audit Taxonomy</span>
                  <Sparkles className="w-4 h-4 text-[#FDD412]" />
                </div>
                <div className="text-3xl font-black text-[#092755]">9 Sectors</div>
                <div className="text-xs text-slate-500 font-medium mt-1">5 Business Domains</div>
              </div>

            </div>

            {/* CURATION TOOLBAR: Search, Filters & "Add New Use Case" */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md space-y-4">
              
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                
                {/* Status Toggle Pills (Draft vs Approved vs All) */}
                <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200 self-start">
                  <button
                    onClick={() => setStatusFilter('all')}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                      statusFilter === 'all'
                        ? 'bg-[#092755] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All ({useCases.length})
                  </button>

                  <button
                    onClick={() => setStatusFilter('draft')}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 cursor-pointer ${
                      statusFilter === 'draft'
                        ? 'bg-amber-500 text-[#092755] shadow-xs font-black'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>Draft Queue</span>
                    {draftCount > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full bg-amber-200 text-amber-900 text-[10px] font-black">
                        {draftCount}
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => setStatusFilter('approved')}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 cursor-pointer ${
                      statusFilter === 'approved'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>Approved & Live ({approvedCount})</span>
                  </button>
                </div>

                {/* Primary Action Button */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleOpenCreateModal}
                    className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#092755] hover:bg-[#0D3470] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#092755]/20 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4 text-[#FDD412]" />
                    <span>Add New Use Case</span>
                  </button>
                </div>

              </div>

              {/* Secondary Filter Row: Search & Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                
                {/* Search query input */}
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search title, tool stack, sector..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-[#092755] focus:bg-white transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Sector Filter Dropdown */}
                <div>
                  <select
                    value={sectorFilter}
                    onChange={(e) => setSectorFilter(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:border-[#092755]"
                  >
                    <option value="All">All Sectors ({SECTORS.length})</option>
                    {SECTORS.map(sec => (
                      <option key={sec} value={sec}>{sec}</option>
                    ))}
                  </select>
                </div>

                {/* Level Filter Dropdown */}
                <div>
                  <select
                    value={levelFilter}
                    onChange={(e) => setLevelFilter(e.target.value === 'All' ? 'All' : Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:border-[#092755]"
                  >
                    <option value="All">All AI Levels (1 to 5)</option>
                    <option value={1}>Level 1: Baseline Chatbot User</option>
                    <option value={2}>Level 2: Permanent Context / Grounding</option>
                    <option value={3}>Level 3: Automated Workflow Pipelines</option>
                    <option value={4}>Level 4: Autonomous Agent Manager</option>
                    <option value={5}>Level 5: Sovereign AI Operating System</option>
                  </select>
                </div>

              </div>

            </div>

            {/* USE CASES MODERATION QUEUE CARDS / TABLE */}
            <div className="space-y-4">
              
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-2">
                <span>Displaying {filteredCases.length} of {useCases.length} frameworks</span>
                {(statusFilter !== 'all' || sectorFilter !== 'All' || levelFilter !== 'All' || searchQuery) && (
                  <button
                    onClick={() => {
                      setStatusFilter('all');
                      setSectorFilter('All');
                      setLevelFilter('All');
                      setSearchQuery('');
                    }}
                    className="text-[#092755] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Filters</span>
                  </button>
                )}
              </div>

              {filteredCases.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-xs">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                    <Filter className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-800">No use cases match active filters</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Try relaxing your search terms or switch the status filter from Drafts to All.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {filteredCases.map((item) => {
                    const isDraft = item.status === 'draft';

                    return (
                      <div
                        key={item.id}
                        className={`bg-white rounded-3xl p-5 sm:p-6 border transition-all shadow-xs hover:shadow-md ${
                          isDraft 
                            ? 'border-amber-300/80 bg-amber-50/20' 
                            : 'border-slate-200/80'
                        }`}
                      >
                        {/* Header Row: Badges, Title, & Action Buttons */}
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                          
                          <div className="space-y-2 flex-1">
                            
                            {/* Badges strip */}
                            <div className="flex flex-wrap items-center gap-2">
                              {/* Status Badge */}
                              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                                isDraft 
                                  ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                                  : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              }`}>
                                {isDraft ? (
                                  <>
                                    <Clock className="w-3 h-3" />
                                    <span>Draft / Pending Approval</span>
                                  </>
                                ) : (
                                  <>
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span>Approved & Live in Hub</span>
                                  </>
                                )}
                              </span>

                              {/* AI Level Pill */}
                              <span className="px-2.5 py-1 rounded-full bg-[#092755] text-[#FDD412] text-xs font-black">
                                Level {item.level}
                              </span>

                              {/* Sector Pill */}
                              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                                {item.sector}
                              </span>

                              {/* Domain Pill */}
                              <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                                {item.domain}
                              </span>

                              {item.featured && (
                                <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[11px] font-bold">
                                  ★ Featured
                                </span>
                              )}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-black text-[#092755] tracking-tight">
                              {item.title}
                            </h3>

                            {/* Summary */}
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {item.summary}
                            </p>

                          </div>

                          {/* 1-Click Action Group */}
                          <div className="flex flex-wrap lg:flex-col items-stretch gap-2 shrink-0 lg:w-48">
                            
                            {/* 1-Click Approve or Send to Draft */}
                            {isDraft ? (
                              <button
                                onClick={() => handleApproveAndPublish(item.id)}
                                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                                title="Publish immediately to Applied AI Hub"
                              >
                                <Check className="w-4 h-4 text-white" />
                                <span>Approve & Publish</span>
                              </button>
                            ) : (
                              <button
                                onClick={() => handleSendToDraft(item.id)}
                                className="flex-1 py-2 px-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-amber-300"
                                title="Withdraw from live hub to draft queue"
                              >
                                <Clock className="w-3.5 h-3.5" />
                                <span>Send to Draft</span>
                              </button>
                            )}

                            {/* Edit Metrics / Content */}
                            <button
                              onClick={() => handleOpenEditModal(item)}
                              className="flex-1 py-2 px-3 rounded-xl bg-[#092755] hover:bg-[#0D3470] text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                            >
                              <Edit3 className="w-3.5 h-3.5 text-[#FDD412]" />
                              <span>Edit Details & ROI</span>
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => handleDeleteCase(item.id, item.title)}
                              className="py-1.5 px-2 rounded-xl text-rose-600 hover:bg-rose-50 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>Delete</span>
                            </button>

                          </div>

                        </div>

                        {/* Collapsible / Expandable Details Strip */}
                        <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4">
                          
                          {/* Metrics Pill */}
                          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                              <TrendingUp className="w-3 h-3 text-emerald-600" />
                              <span>Impact Yielded</span>
                            </div>
                            <div className="text-xs font-extrabold text-[#092755]">
                              {item.impactYielded.hoursSaved} · {item.impactYielded.roi}
                            </div>
                            <div className="text-[11px] text-slate-600 font-medium mt-0.5 truncate" title={item.impactYielded.metricHighlight}>
                              {item.impactYielded.metricHighlight}
                            </div>
                          </div>

                          {/* Depth of Action Summary */}
                          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                              <Cpu className="w-3 h-3 text-blue-600" />
                              <span>Depth of Action ({item.depthOfAction.length} Steps)</span>
                            </div>
                            <div className="text-xs text-slate-700 font-medium line-clamp-2">
                              1. {item.depthOfAction[0] || 'Ingest trigger'}
                            </div>
                          </div>

                          {/* Tool Stack */}
                          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                              <Zap className="w-3 h-3 text-[#FDD412]" />
                              <span>Tool Stack</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {item.toolStack.slice(0, 3).map((tool, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-bold text-slate-700">
                                  {tool}
                                </span>
                              ))}
                              {item.toolStack.length > 3 && (
                                <span className="px-1.5 py-0.5 rounded-md bg-slate-200 text-[10px] font-bold text-slate-600">
                                  +{item.toolStack.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                        </div>

                      </div>
                    );
                  })}
                </div>
              )}

            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: MASTER 5 LEVELS TEACHING SCHEMATIC & GATES       */}
        {/* ======================================================== */}
        {activeTab === 'schematic' && (
          <div className="space-y-8">
            
            {/* Schematic Header */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#092755]/10 text-[#092755] text-xs font-black uppercase tracking-widest mb-3">
                <GitBranch className="w-3.5 h-3.5 text-[#092755]" />
                <span>Executive Consultant Curriculum</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#092755] tracking-tight mb-3">
                Master 5 Levels Teaching Schematic & Control
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
                This interactive schematic is DigiBeloved&apos;s proprietary consulting blueprint. It shows exactly how our lead architects diagnose a client&apos;s current operational bottleneck, formulate the curriculum shift, and guide their team through the rigorous <strong className="text-[#092755]">4 Architectural Curriculum Gates</strong> from Level 1 (Chatbot user) to Level 5 (Sovereign AI Operating System).
              </p>

              {/* Action Toolbar */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Consultant View Mode:</span>
                  <button
                    onClick={() => setShowTeachingNotes(!showTeachingNotes)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                      showTeachingNotes ? 'bg-[#092755] text-[#FDD412]' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {showTeachingNotes ? '✓ Teaching Notes Expanded' : 'Show Compact View'}
                  </button>
                </div>

                <div className="text-xs text-slate-500 font-semibold">
                  Source Framework: <strong className="text-slate-800">Numroid 5 Levels of AI &times; DigiBeloved Enterprise SLAs</strong>
                </div>
              </div>
            </div>

            {/* VISUAL ARCHITECTURAL STACK DIAGRAM */}
            <div className="bg-[#092755] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-white/10">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FDD412]/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-[#FDD412]">Architectural Hierarchy</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  The Autonomy & Leverage Gradient
                </h3>
              </div>

              {/* 5-Level Visual Horizontal / Vertical Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative z-10">
                
                {/* Level 1 */}
                <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black text-slate-400">LEVEL 1</div>
                    <div className="text-sm font-black text-white mt-1">Baseline Chatbot</div>
                    <p className="text-[11px] text-slate-300 mt-2 leading-tight">
                      Ad-hoc prompting. Isolated web chats. Copy-paste fatigue.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>Leverage:</span>
                    <span className="text-white">1x</span>
                  </div>
                </div>

                {/* Level 2 */}
                <div className="p-4 rounded-2xl bg-white/[0.08] border border-blue-400/30 hover:border-blue-400/60 transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black text-blue-400">LEVEL 2</div>
                    <div className="text-sm font-black text-white mt-1">Context Grounding</div>
                    <p className="text-[11px] text-slate-300 mt-2 leading-tight">
                      Custom GPTs, system instructions & curated document RAG.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-blue-400">
                    <span>Leverage:</span>
                    <span className="text-white">2.5x</span>
                  </div>
                </div>

                {/* Level 3 */}
                <div className="p-4 rounded-2xl bg-white/[0.1] border border-sky-400/40 hover:border-sky-400/70 transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black text-sky-400">LEVEL 3</div>
                    <div className="text-sm font-black text-white mt-1">Automated Pipelines</div>
                    <p className="text-[11px] text-slate-300 mt-2 leading-tight">
                      Webhook triggers, n8n/Make chains, deterministic JSON.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-sky-400">
                    <span>Leverage:</span>
                    <span className="text-white">5x</span>
                  </div>
                </div>

                {/* Level 4 */}
                <div className="p-4 rounded-2xl bg-white/[0.12] border border-purple-400/40 hover:border-purple-400/70 transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black text-purple-400">LEVEL 4</div>
                    <div className="text-sm font-black text-white mt-1">Agent Manager</div>
                    <p className="text-[11px] text-slate-300 mt-2 leading-tight">
                      Autonomous subagents, function calling & self-correction.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-purple-400">
                    <span>Leverage:</span>
                    <span className="text-white">10x</span>
                  </div>
                </div>

                {/* Level 5 */}
                <div className="p-4 rounded-2xl bg-white/[0.16] border-2 border-[#FDD412] shadow-lg shadow-[#FDD412]/15 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black text-[#FDD412]">LEVEL 5 (APEX)</div>
                    <div className="text-sm font-black text-white mt-1">AI Operating System</div>
                    <p className="text-[11px] text-slate-200 mt-2 leading-tight">
                      Cross-department sovereign agent harness & institutional memory.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-[#FDD412]">
                    <span>Leverage:</span>
                    <span className="text-[#FDD412] font-black">50x+</span>
                  </div>
                </div>

              </div>
            </div>

            {/* INTERACTIVE CURRICULUM TRANSITION GATES */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#092755]">Curriculum Gates</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#092755] mt-0.5">
                    Select Gate to Inspect Consulting Protocols
                  </h3>
                </div>
                <div className="text-xs font-bold text-slate-500">
                  Gate {activeGateIndex + 1} of 4
                </div>
              </div>

              {/* Gate Selector Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                {TEACHING_GATES.map((gate, idx) => {
                  const isActive = activeGateIndex === idx;
                  return (
                    <button
                      key={gate.gateId}
                      onClick={() => setActiveGateIndex(idx)}
                      className={`p-4 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                        isActive
                          ? 'border-[#092755] bg-[#EEF3FB] shadow-md shadow-[#092755]/10'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-black text-[#092755]">Gate {gate.fromLevel} &rarr; {gate.toLevel}</span>
                        {isActive && <CheckCircle2 className="w-4 h-4 text-[#092755]" />}
                      </div>
                      <div className="text-xs font-bold text-slate-800 line-clamp-1">
                        {gate.gateName.split(':')[1]?.trim() || gate.gateName}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                        {gate.subTitle}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE GATE DRILL-DOWN PANEL */}
              {(() => {
                const currentGate = TEACHING_GATES[activeGateIndex];
                return (
                  <div className="rounded-3xl border-2 border-[#092755]/20 bg-gradient-to-b from-white to-[#EEF3FB]/50 p-6 sm:p-8 space-y-6">
                    
                    {/* Gate Title Banner */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#092755] text-[#FDD412] text-xs font-black uppercase tracking-wider mb-2">
                          <GitBranch className="w-3.5 h-3.5" />
                          <span>Architectural Transition Gate {currentGate.fromLevel} &rarr; {currentGate.toLevel}</span>
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-extrabold text-[#092755]">
                          {currentGate.gateName}
                        </h4>
                        <p className="text-sm font-semibold text-slate-600 mt-1">
                          {currentGate.subTitle}
                        </p>
                      </div>

                      <div className="shrink-0 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Projected ROI Impact</div>
                        <div className="text-sm sm:text-base font-black text-emerald-600 mt-0.5">{currentGate.roiImpact}</div>
                      </div>
                    </div>

                    {/* 2-Column Breakdown: Client Symptoms vs Consultant Curriculum */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      
                      {/* Column 1: Client Symptoms & Diagnostic Criteria */}
                      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
                        <div className="flex items-center gap-2 mb-3 text-rose-600">
                          <AlertCircle className="w-5 h-5 shrink-0" />
                          <h5 className="text-sm font-extrabold uppercase tracking-wide text-slate-800">
                            Client Bottlenecks (Level {currentGate.fromLevel} Symptoms)
                          </h5>
                        </div>
                        <p className="text-xs text-slate-500 mb-4">
                          If the client exhibits 2 or more of these symptoms during our initial diagnostic audit, they are locked at Level {currentGate.fromLevel}:
                        </p>
                        <ul className="space-y-2.5">
                          {currentGate.clientSymptoms.map((symptom, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: What DigiBeloved Teaches & Implements */}
                      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
                        <div className="flex items-center gap-2 mb-3 text-[#092755]">
                          <BookOpen className="w-5 h-5 text-[#092755] shrink-0" />
                          <h5 className="text-sm font-extrabold uppercase tracking-wide text-slate-800">
                            The DigiBeloved Curriculum Shift
                          </h5>
                        </div>
                        <p className="text-xs text-slate-500 mb-4">
                          Exact consulting protocols implemented during the client sprint:
                        </p>
                        <div className="space-y-3">
                          {currentGate.consultantCurriculum.map((item, i) => (
                            <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                              <div className="text-xs font-black text-[#092755]">{item.step}</div>
                              <div className="text-xs text-slate-600 mt-1 leading-relaxed">{item.action}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Bottom Deliverable & Audit Milestone */}
                    <div className="bg-[#092755] text-white rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="text-xs font-black uppercase tracking-widest text-[#FDD412]">
                          Certified Client Deliverable
                        </div>
                        <div className="text-base sm:text-lg font-black text-white">
                          {currentGate.clientDeliverable}
                        </div>
                        <div className="text-xs text-slate-300 font-medium">
                          Audit Milestone: {currentGate.auditMilestone}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          const clipboardText = `DigiBeloved Consulting Gate ${currentGate.fromLevel} -> ${currentGate.toLevel}: ${currentGate.gateName}\n\nClient Symptoms:\n${currentGate.clientSymptoms.map(s => `- ${s}`).join('\n')}\n\nCurriculum Shift:\n${currentGate.consultantCurriculum.map(c => `${c.step}: ${c.action}`).join('\n')}\n\nDeliverable: ${currentGate.clientDeliverable}\nMilestone: ${currentGate.auditMilestone}`;
                          navigator.clipboard.writeText(clipboardText);
                          showToast('Gate curriculum notes copied to clipboard');
                        }}
                        className="px-4 py-2.5 rounded-xl bg-[#FDD412] hover:bg-[#ffe043] text-[#092755] font-black text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shrink-0"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Gate Proposal Spec</span>
                      </button>
                    </div>

                  </div>
                );
              })()}

            </div>

          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: SYSTEM HEALTH & BACKUP / JSON EXPORT             */}
        {/* ======================================================== */}
        {activeTab === 'system' && (
          <div className="space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#092755]/10 text-[#092755] text-xs font-black uppercase tracking-widest mb-3">
                <FolderSync className="w-3.5 h-3.5 text-[#092755]" />
                <span>System Persistence & Telemetry</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092755] tracking-tight mb-2">
                Database Synchronization & Backups
              </h2>
              
              <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                All use case moderations, status toggles, edits, and additions are synchronized locally with reactive event triggers. Any changes made here immediately affect the public Applied AI Hub at <code className="bg-slate-100 text-[#092755] px-1.5 py-0.5 rounded font-mono text-xs">/applied-ai-hub</code>.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Export JSON Card */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-black text-[#092755] flex items-center gap-2">
                      <Download className="w-4 h-4 text-[#092755]" />
                      <span>Export Full Database Backup</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Download a structured JSON file containing all {useCases.length} curated enterprise frameworks, metric yields, and execution steps.
                    </p>
                  </div>
                  <button
                    onClick={handleExportJSON}
                    className="mt-5 w-full py-3 rounded-xl bg-[#092755] hover:bg-[#0D3470] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#FDD412]" />
                    <span>Download JSON Backup</span>
                  </button>
                </div>

                {/* Reset to Factory Defaults Card */}
                <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-200 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-black text-rose-900 flex items-center gap-2">
                      <RotateCcw className="w-4 h-4 text-rose-700" />
                      <span>Restore Factory Seed Data</span>
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Reset the local repository back to the original 14 seed frameworks defined in <code className="bg-white text-rose-800 px-1 rounded font-mono">data/useCases.ts</code>. Use this if you wish to clear test edits.
                    </p>
                  </div>
                  <button
                    onClick={handleResetToDefault}
                    className="mt-5 w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 text-white" />
                    <span>Restore Factory Defaults</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

      </main>

      {/* ======================================================== */}
      {/* ADD / EDIT USE CASE MODAL                                */}
      {/* ======================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#092755]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="bg-[#092755] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#FDD412] text-[#092755] flex items-center justify-center font-black text-sm">
                  {editingCase ? <Edit3 className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    {editingCase ? 'Edit Framework & Metrics' : 'Add New Curated Use Case'}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {editingCase ? `Editing: ${editingCase.title}` : 'Expand the enterprise applied AI repository'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleSaveModal} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              
              {/* Title & Slug */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Framework Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Autonomous Invoice Reconciliation Pipeline"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-hidden focus:border-[#092755]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    URL Slug (Optional)
                  </label>
                  <input
                    type="text"
                    value={formSlug}
                    onChange={(e) => setFormSlug(e.target.value)}
                    placeholder="e.g. autonomous-invoice-reconciliation"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 focus:outline-hidden focus:border-[#092755]"
                  />
                </div>
              </div>

              {/* Sector, Domain, Task, Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Sector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Sector
                  </label>
                  <select
                    value={formSector}
                    onChange={(e) => setFormSector(e.target.value as Sector)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:border-[#092755]"
                  >
                    {SECTORS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Domain */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Domain
                  </label>
                  <select
                    value={formDomain}
                    onChange={(e) => setFormDomain(e.target.value as Domain)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:border-[#092755]"
                  >
                    {DOMAINS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* Task */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Task Archetype
                  </label>
                  <select
                    value={formTask}
                    onChange={(e) => setFormTask(e.target.value as TaskCategory)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden focus:border-[#092755]"
                  >
                    {TASKS.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* AI Level */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    AI Level (1 to 5)
                  </label>
                  <select
                    value={formLevel}
                    onChange={(e) => setFormLevel(Number(e.target.value) as AILevel)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-[#092755] bg-blue-50/50 focus:outline-hidden focus:border-[#092755]"
                  >
                    <option value={1}>Level 1: Chatbot</option>
                    <option value={2}>Level 2: Grounding</option>
                    <option value={3}>Level 3: Pipelines</option>
                    <option value={4}>Level 4: Agents</option>
                    <option value={5}>Level 5: AI OS</option>
                  </select>
                </div>

              </div>

              {/* Summary */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Executive Summary
                </label>
                <textarea
                  rows={3}
                  value={formSummary}
                  onChange={(e) => setFormSummary(e.target.value)}
                  placeholder="Summarize the operational problem solved, autonomous architecture, and target business impact..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#092755]"
                />
              </div>

              {/* Depth of Action (Ordered Steps) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Depth of Action (Ordered Execution Steps)
                  </label>
                  <button
                    type="button"
                    onClick={handleAddStep}
                    className="text-xs font-extrabold text-[#092755] hover:text-[#0D3470] flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Step</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {formSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <input
                        type="text"
                        value={step}
                        onChange={(e) => handleStepChange(idx, e.target.value)}
                        placeholder={`Execution step ${idx + 1}...`}
                        className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:border-[#092755]"
                      />
                      {formSteps.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveStep(idx)}
                          className="p-2 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                          title="Remove step"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Yielded Metrics */}
              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-4">
                <div className="text-xs font-bold text-[#092755] uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>Impact Yielded (Verified Metrics)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                      Hours Saved
                    </label>
                    <input
                      type="text"
                      value={formHoursSaved}
                      onChange={(e) => setFormHoursSaved(e.target.value)}
                      placeholder="e.g. 22 hrs/week"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold bg-white focus:outline-hidden focus:border-[#092755]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                      ROI Target
                    </label>
                    <input
                      type="text"
                      value={formRoi}
                      onChange={(e) => setFormRoi(e.target.value)}
                      placeholder="e.g. 380% in 60 days"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold bg-white focus:outline-hidden focus:border-[#092755]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                      Key Metric Highlight
                    </label>
                    <input
                      type="text"
                      value={formHighlight}
                      onChange={(e) => setFormHighlight(e.target.value)}
                      placeholder="e.g. 99.4% automated match accuracy"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold bg-white focus:outline-hidden focus:border-[#092755]"
                    />
                  </div>
                </div>
              </div>

              {/* Tool Stack */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Tool Stack (Comma Separated)
                </label>
                <input
                  type="text"
                  value={formToolStack}
                  onChange={(e) => setFormToolStack(e.target.value)}
                  placeholder="e.g. Gemini 3 Pro, Antigravity Agent SDK, n8n, PostgreSQL"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-hidden focus:border-[#092755]"
                />
              </div>

              {/* Status & Featured Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-extrabold text-slate-800">
                    <input
                      type="radio"
                      name="formStatus"
                      checked={formStatus === 'draft'}
                      onChange={() => setFormStatus('draft')}
                      className="text-amber-500 focus:ring-amber-400"
                    />
                    <span>Save in Draft Queue</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-xs font-extrabold text-emerald-700">
                    <input
                      type="radio"
                      name="formStatus"
                      checked={formStatus === 'approved'}
                      onChange={() => setFormStatus('approved')}
                      className="text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Approve & Publish to Live Hub</span>
                  </label>
                </div>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                  <input
                    type="checkbox"
                    checked={formFeatured}
                    onChange={(e) => setFormFeatured(e.target.checked)}
                    className="rounded text-[#092755] focus:ring-[#092755]"
                  />
                  <span>Mark as Featured</span>
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#092755] hover:bg-[#0D3470] text-white font-extrabold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Check className="w-4 h-4 text-[#FDD412]" />
                  <span>{editingCase ? 'Save Changes' : 'Create Framework'}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* FOOTER BAR */}
      <footer className="bg-white border-t border-slate-200 py-4 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            DigiBeloved Curation Engine &middot; Module 4 Operational Command
          </div>
          <div className="flex items-center gap-3">
            <Link to="/applied-ai-hub" className="hover:text-[#092755] font-bold">Public Hub</Link>
            <span>&middot;</span>
            <Link to="/" className="hover:text-[#092755] font-bold">Main Site</Link>
            <span>&middot;</span>
            <button onClick={handleLogout} className="hover:text-rose-600 font-bold cursor-pointer">Lock</button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AdminDashboard;
