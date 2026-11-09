import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, 
  Search, 
  RotateCcw, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  Clock, 
  Cpu, 
  Building2, 
  Briefcase,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { 
  USE_CASES, 
  getStoredUseCases,
  SECTORS, 
  DOMAINS, 
  TASKS, 
  Sector, 
  Domain, 
  TaskCategory, 
  UseCase 
} from '../data/useCases';

interface AppliedAIHubSectionProps {
  initialLimit?: number;
  showFullHeading?: boolean;
}

export const AppliedAIHubSection: React.FC<AppliedAIHubSectionProps> = ({ 
  initialLimit = 6,
  showFullHeading = true 
}) => {
  const [allCases, setAllCases] = useState<UseCase[]>(() => getStoredUseCases());
  const [selectedSector, setSelectedSector] = useState<Sector | 'All'>('All');
  const [selectedDomain, setSelectedDomain] = useState<Domain | 'All'>('All');
  const [selectedTask, setSelectedTask] = useState<TaskCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLevelFilter, setActiveLevelFilter] = useState<number | 'All'>('All');

  useEffect(() => {
    const handleSync = (e: any) => {
      if (e.detail) {
        setAllCases(e.detail);
      } else {
        setAllCases(getStoredUseCases());
      }
    };
    window.addEventListener('digibeloved:use_cases_updated', handleSync);
    return () => window.removeEventListener('digibeloved:use_cases_updated', handleSync);
  }, []);

  // Filter use cases (only show approved in public hub)
  const filteredUseCases = useMemo(() => {
    return allCases.filter((item) => {
      if (item.status !== 'approved') return false;
      // Sector filter
      if (selectedSector !== 'All' && item.sector !== selectedSector) return false;
      // Domain filter
      if (selectedDomain !== 'All' && item.domain !== selectedDomain) return false;
      // Task filter
      if (selectedTask !== 'All' && item.task !== selectedTask) return false;
      // Level filter
      if (activeLevelFilter !== 'All' && item.level !== activeLevelFilter) return false;
      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesSummary = item.summary.toLowerCase().includes(query);
        const matchesTools = item.toolStack.some(t => t.toLowerCase().includes(query));
        const matchesSteps = item.depthOfAction.some(s => s.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSummary && !matchesTools && !matchesSteps) return false;
      }
      return true;
    });
  }, [allCases, selectedSector, selectedDomain, selectedTask, activeLevelFilter, searchQuery]);

  const hasActiveFilters = 
    selectedSector !== 'All' || 
    selectedDomain !== 'All' || 
    selectedTask !== 'All' || 
    activeLevelFilter !== 'All' || 
    searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setSelectedSector('All');
    setSelectedDomain('All');
    setSelectedTask('All');
    setActiveLevelFilter('All');
    setSearchQuery('');
  };

  const displayedUseCases = initialLimit ? filteredUseCases.slice(0, initialLimit) : filteredUseCases;

  return (
    <section 
      id="applied-ai-hub" 
      aria-label="Applied AI Hub & Use Case Matrix" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EEF3FB] text-slate-800 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#092755]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#FDD412]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        {showFullHeading && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#092755]/10 border border-[#092755]/15 text-[#092755] text-xs font-black tracking-widest uppercase mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#092755]" />
              <span>Applied AI Knowledge Base</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#092755] mb-4">
              The Applied <span className="text-blue-700">AI Hub</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Explore production-grade operational AI use cases filtered across our 3-tier taxonomy: <strong className="text-slate-800">Sector</strong>, <strong className="text-slate-800">Domain</strong>, and <strong className="text-slate-800">Task</strong> — featuring verified depth of action, tool stacks, and measurable ROI.
            </p>
          </div>
        )}

        {/* 3-TIER TAXONOMY FILTER BAR */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-5 sm:p-7 mb-10">
          
          {/* Top Search + Filter Header */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search use cases by task, keyword, tool (e.g. 'n8n', 'invoice', 'due diligence')..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#092755] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Level Quick Select */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap mr-1">
                AI Level:
              </span>
              {(['All', 1, 2, 3, 4, 5] as const).map((lvl) => {
                const isActive = activeLevelFilter === lvl;
                return (
                  <button
                    key={String(lvl)}
                    onClick={() => setActiveLevelFilter(lvl)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-[#092755] text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {lvl === 'All' ? 'All' : `L${lvl}`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tier 1: Sector Pills */}
          <div className="pt-4 pb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>1. Filter by Sector / Industry:</span>
              </span>
              {selectedSector !== 'All' && (
                <button
                  onClick={() => setSelectedSector('All')}
                  className="text-[11px] text-blue-600 hover:underline font-semibold"
                >
                  Reset Sector
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <button
                onClick={() => setSelectedSector('All')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedSector === 'All'
                    ? 'bg-[#092755] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Sectors
              </button>
              {SECTORS.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedSector === sector
                      ? 'bg-[#092755] text-[#FDD412] font-bold shadow-2xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* Tier 2: Domain Pills */}
          <div className="pt-3 pb-3 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                <span>2. Filter by Business Domain:</span>
              </span>
              {selectedDomain !== 'All' && (
                <button
                  onClick={() => setSelectedDomain('All')}
                  className="text-[11px] text-blue-600 hover:underline font-semibold"
                >
                  Reset Domain
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <button
                onClick={() => setSelectedDomain('All')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedDomain === 'All'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Domains
              </button>
              {DOMAINS.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedDomain === domain
                      ? 'bg-blue-600 text-white font-bold shadow-2xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {/* Tier 3: Task Category Pills */}
          <div className="pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>3. Filter by Task Type:</span>
              </span>
              {selectedTask !== 'All' && (
                <button
                  onClick={() => setSelectedTask('All')}
                  className="text-[11px] text-blue-600 hover:underline font-semibold"
                >
                  Reset Task
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <button
                onClick={() => setSelectedTask('All')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedTask === 'All'
                    ? 'bg-slate-700 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Tasks
              </button>
              {TASKS.map((task) => (
                <button
                  key={task}
                  onClick={() => setSelectedTask(task)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedTask === task
                      ? 'bg-slate-700 text-white font-bold shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {task}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary & Reset */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong className="text-slate-800">{filteredUseCases.length}</strong> matching verified use cases
            </span>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 font-bold text-[#092755] hover:text-blue-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* USE CASE CARDS GRID */}
        {filteredUseCases.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-xl mx-auto">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              No matching use cases found
            </h3>
            <p className="text-sm text-slate-500 mb-5">
              Try loosening your filters or resetting your search term.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 bg-[#092755] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:bg-[#0d3470]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {displayedUseCases.map((useCase) => (
              <div
                key={useCase.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top Banner */}
                <div className="p-6 pb-4">
                  
                  {/* Category Pills */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-100">
                        {useCase.sector}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                        {useCase.domain}
                      </span>
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-wider bg-[#092755] text-[#FDD412] px-2.5 py-1 rounded-md shadow-2xs">
                      Level {useCase.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#092755] tracking-tight group-hover:text-blue-700 transition-colors leading-snug mb-2.5">
                    {useCase.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {useCase.summary}
                  </p>

                  {/* 1. Depth of Action: Step-by-Step Execution Sequence */}
                  <div className="mb-5 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#092755]" />
                      <span>Depth of Action: Autonomous Flow</span>
                    </div>
                    <ol className="space-y-2">
                      {useCase.depthOfAction.slice(0, 3).map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <span className="w-4 h-4 rounded-full bg-[#092755] text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-snug">{step}</span>
                        </li>
                      ))}
                      {useCase.depthOfAction.length > 3 && (
                        <li className="text-[11px] text-slate-400 font-semibold pl-6">
                          + {useCase.depthOfAction.length - 3} more automated verification steps
                        </li>
                      )}
                    </ol>
                  </div>

                  {/* 2. Impact Yielded: Metrics Highlight */}
                  <div className="mb-5 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60">
                    <div className="text-[10px] font-black uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-amber-600" />
                      <span>Impact Yielded</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>{useCase.impactYielded.hoursSaved}</span>
                      </span>
                      <span>{useCase.impactYielded.roi}</span>
                    </div>
                    <p className="text-[11px] text-amber-800/90 leading-tight">
                      {useCase.impactYielded.metricHighlight}
                    </p>
                  </div>

                  {/* 3. Tool Stack Badges */}
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2">
                      Tool Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {useCase.toolStack.map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Bottom CTA */}
                <div className="p-6 pt-4 border-t border-slate-100 bg-slate-50/50">
                  <Link
                    to={`/contact?useCase=${encodeURIComponent(useCase.title)}`}
                    className="w-full inline-flex items-center justify-center bg-[#092755] hover:bg-blue-900 text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all shadow-xs active:scale-[0.98] group/btn"
                  >
                    <span>Implement This Solution</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner to Full Dedicated Hub */}
        {initialLimit && filteredUseCases.length > initialLimit && (
          <div className="text-center pt-2">
            <Link
              to="/applied-ai-hub"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-[#092755] border border-slate-300 hover:border-slate-400 font-bold px-8 py-4 rounded-2xl text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <span>Explore All {USE_CASES.length} Solutions in Applied AI Hub</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default AppliedAIHubSection;
