export type Sector = 
  | 'Healthcare'
  | 'Legal'
  | 'FinTech'
  | 'Real Estate'
  | 'E-commerce'
  | 'Agriculture'
  | 'Energy'
  | 'Education'
  | 'Public Sector';

export type Domain = 
  | 'Marketing & Growth'
  | 'Internal Operations'
  | 'Software Engineering'
  | 'Research & Data Analysis'
  | 'Customer Support';

export type TaskCategory = 
  | 'Automated Due Diligence'
  | 'Invoice & Document Intelligence'
  | 'Autonomous Lead Qualification'
  | 'Predictive Analytics'
  | 'Regulatory Compliance Audit'
  | 'Intelligent Ticket Routing'
  | 'Contract Risk Scoring'
  | 'Inventory Auto-Replenishment'
  | 'Clinical Note Summarization'
  | 'Agronomic Soil & Yield Forecasting';

export type AILevel = 1 | 2 | 3 | 4 | 5;

export interface ImpactMetrics {
  hoursSaved: string;
  roi: string;
  metricHighlight: string;
}

export interface UseCase {
  id: string;
  title: string;
  slug: string;
  sector: Sector;
  domain: Domain;
  task: TaskCategory;
  level: AILevel;
  summary: string;
  depthOfAction: string[];
  impactYielded: ImpactMetrics;
  toolStack: string[];
  status: 'approved' | 'draft';
  featured: boolean;
  createdAt: string;
}

export const SECTORS: Sector[] = [
  'Healthcare',
  'Legal',
  'FinTech',
  'Real Estate',
  'E-commerce',
  'Agriculture',
  'Energy',
  'Education',
  'Public Sector'
];

export const DOMAINS: Domain[] = [
  'Internal Operations',
  'Research & Data Analysis',
  'Marketing & Growth',
  'Customer Support',
  'Software Engineering'
];

export const TASKS: TaskCategory[] = [
  'Invoice & Document Intelligence',
  'Automated Due Diligence',
  'Autonomous Lead Qualification',
  'Predictive Analytics',
  'Contract Risk Scoring',
  'Regulatory Compliance Audit',
  'Intelligent Ticket Routing',
  'Inventory Auto-Replenishment',
  'Clinical Note Summarization',
  'Agronomic Soil & Yield Forecasting'
];

export const USE_CASES: UseCase[] = [
  {
    id: 'uc-fintech-invoice-recon',
    title: 'Autonomous Multi-Bank Invoice Reconciliation Pipeline',
    slug: 'autonomous-invoice-reconciliation',
    sector: 'FinTech',
    domain: 'Internal Operations',
    task: 'Invoice & Document Intelligence',
    level: 3,
    summary: 'Automates end-to-end receipt extraction, bank statement cross-matching, and ledger posting across disparate currency accounts without manual spreadsheet stitching.',
    depthOfAction: [
      'Webhook ingests daily multi-currency bank statements (PDF, CSV) from banking APIs and email inboxes',
      'Vision LLM extracts vendor, invoice number, line items, and tax breakdown into normalized JSON schema',
      'Automated reconciliation engine cross-checks transactions against ERP database with fuzzy matching rules',
      'Discrepancies >0.05% automatically trigger a flagged Slack/Email alert with side-by-side transaction audit diff',
      'Matched settlements generate one-click journal entry approvals straight to accounting software'
    ],
    impactYielded: {
      hoursSaved: '22 hrs/week',
      roi: '380% within 60 days',
      metricHighlight: '99.4% automated match accuracy across 1,800+ monthly invoices'
    },
    toolStack: ['Gemini 3 Pro', 'n8n', 'PostgreSQL', 'QuickBooks API', 'Slack Webhooks'],
    status: 'approved',
    featured: true,
    createdAt: '2026-10-15'
  },
  {
    id: 'uc-legal-contract-audit',
    title: 'Cross-Jurisdictional Contract Risk & Indemnity Scoring Agent',
    slug: 'contract-risk-indemnity-scoring',
    sector: 'Legal',
    domain: 'Internal Operations',
    task: 'Contract Risk Scoring',
    level: 4,
    summary: 'Reads commercial Master Service Agreements (MSAs), scores non-standard indemnity clauses, flags regulatory liabilities, and generates attorney redline markups.',
    depthOfAction: [
      'Document ingest pipeline breaks incoming NDAs and MSAs into discrete semantic clause vectors',
      'RAG system benchmarks clauses against company approved clause playbook and local statutory standards',
      'Subagent evaluates uncapped liability, non-compete reasonableness, and breach cure windows',
      'Generates automated DOCX redline with highlighted suggestions and executive risk rating (Low/Med/High)',
      'Submits structured risk appraisal to General Counsel dashboard prior to partner signature'
    ],
    impactYielded: {
      hoursSaved: '14 hrs/contract',
      roi: '4.5x turnaround acceleration',
      metricHighlight: '85% reduction in first-pass legal review turnaround time'
    },
    toolStack: ['Claude 3.7 Sonnet', 'Antigravity Agent SDK', 'ChromaDB', 'Python', 'Docx Engine'],
    status: 'approved',
    featured: true,
    createdAt: '2026-10-20'
  },
  {
    id: 'uc-health-clinical-summaries',
    title: 'HIPAA/NDPR-Compliant Clinical Note & Patient History Synthesizer',
    slug: 'clinical-note-patient-history-synthesizer',
    sector: 'Healthcare',
    domain: 'Internal Operations',
    task: 'Clinical Note Summarization',
    level: 2,
    summary: 'Converts unstructured physician consultations, lab reports, and vitals history into structured EHR records with zero cross-patient data leakage.',
    depthOfAction: [
      'Secure audio transcription converts physician-patient consultation into localized verbatim text',
      'Clinical prompt framework isolates symptoms, differential diagnoses, prescribed medications, and dosage',
      'Local PII redaction layer anonymizes identifying markers before LLM contextualization',
      'Generates standard SOAP (Subjective, Objective, Assessment, Plan) format ready for doctor sign-off',
      'Syncs validated clinical notes into hospital EMR database via secure REST API'
    ],
    impactYielded: {
      hoursSaved: '2.5 hrs/physician/day',
      roi: 'Zero burnout overtime',
      metricHighlight: '100% compliant SOAP notes generated in under 45 seconds per consult'
    },
    toolStack: ['Gemini 3 Pro', 'Whisper V3', 'Dockerized FastAPI', 'Local Vector Context'],
    status: 'approved',
    featured: true,
    createdAt: '2026-10-25'
  },
  {
    id: 'uc-realestate-due-diligence',
    title: 'Autonomous Land Title & Property Due Diligence Scout',
    slug: 'land-title-property-due-diligence',
    sector: 'Real Estate',
    domain: 'Research & Data Analysis',
    task: 'Automated Due Diligence',
    level: 4,
    summary: 'Autonomously aggregates registry filings, cadastre maps, zoning laws, and dispute litigation history into a unified investment risk dossier for acquisitions.',
    depthOfAction: [
      'User inputs parcel coordinates, survey plan number, or developer registered title code',
      'Agent orchestrates web scrapers & public registry databases to pull title ownership chains',
      'Computer vision inspector validates surveyor stamp signatures and beacon boundary coordinates',
      'Subagent queries public court judgment registers for pending lis pendens or encumbrances',
      'Synthesizes multi-page acquisition investment memo with verified risk checklist and land valuation benchmarks'
    ],
    impactYielded: {
      hoursSaved: '18 hrs/deal',
      roi: '₦4.2M prevented in disputed land risk',
      metricHighlight: 'From 7-day manual search to 90-minute comprehensive dossier'
    },
    toolStack: ['Antigravity Agent SDK', 'Playwright', 'Gemini 3 Pro', 'PostgreSQL', 'Mapbox API'],
    status: 'approved',
    featured: true,
    createdAt: '2026-10-28'
  },
  {
    id: 'uc-ecommerce-inventory-autopilot',
    title: 'Predictive Stock Depletion & Multi-Branch Auto-Replenishment',
    slug: 'predictive-stock-depletion-replenishment',
    sector: 'E-commerce',
    domain: 'Internal Operations',
    task: 'Inventory Auto-Replenishment',
    level: 3,
    summary: 'Forecasts stock-out dates across nationwide distribution warehouses using sales velocity and seasonal lead times, auto-dispatching vendor Purchase Orders.',
    depthOfAction: [
      'Pulls hourly SKU sales logs from Shopify/WooCommerce and brick-and-mortar POS endpoints',
      'Time-series forecasting model predicts stock depletion curves factoring 14-day vendor lead delays',
      'Triggers automated re-order thresholds when branch inventory falls below safety cushion',
      'Drafts customized Purchase Order emails to verified suppliers with price-lock confirmation',
      'Logs fulfillment status into operational dashboard and pings store managers via WhatsApp Business API'
    ],
    impactYielded: {
      hoursSaved: '16 hrs/week',
      roi: '22% reduction in dead inventory',
      metricHighlight: 'Zero unexpected stock-outs across 320 high-velocity SKUs'
    },
    toolStack: ['Python StatsModels', 'Make', 'Shopify GraphQL', 'WhatsApp Business API', 'Supabase'],
    status: 'approved',
    featured: true,
    createdAt: '2026-11-01'
  },
  {
    id: 'uc-marketing-lead-qualification',
    title: 'Autonomous Inbound Lead Qualification & Meeting Booking Agent',
    slug: 'autonomous-inbound-lead-qualification',
    sector: 'FinTech',
    domain: 'Marketing & Growth',
    task: 'Autonomous Lead Qualification',
    level: 4,
    summary: 'Screens incoming enterprise B2B inquiries on WhatsApp and Web, verifies corporate email domains, scores budget intent, and books qualified meetings into executive calendars.',
    depthOfAction: [
      'Ingests incoming lead form submissions and WhatsApp chat starts within 3 seconds',
      'Scrapes prospect company website, LinkedIn profile, and funding status to enrich lead profile',
      'Interactive conversational agent asks 3 contextual budget and timeline qualification questions',
      'Dispatches Cal.com scheduling link with pre-assigned executive availability if qualification score >80',
      'Syncs complete conversation history and CRM lead stage into HubSpot with intent tags'
    ],
    impactYielded: {
      hoursSaved: '20 hrs/sales rep/week',
      roi: '3.4x inbound pipeline velocity',
      metricHighlight: 'Sub-60-second response time with 68% calendar booking conversion rate'
    },
    toolStack: ['Claude 3.7', 'Cal.com API', 'HubSpot Webhooks', 'WhatsApp Cloud API', 'Cloudflare Workers'],
    status: 'approved',
    featured: true,
    createdAt: '2026-11-02'
  },
  {
    id: 'uc-agric-yield-forecasting',
    title: 'Satellite Remote Sensing & Agronomic Soil Yield Forecaster',
    slug: 'satellite-remote-sensing-yield-forecaster',
    sector: 'Agriculture',
    domain: 'Research & Data Analysis',
    task: 'Agronomic Soil & Yield Forecasting',
    level: 3,
    summary: 'Combines Sentinel-2 NDVI satellite imagery, weather telemetry, and historical harvest yields to provide actionable farm cluster harvest and irrigation forecasts.',
    depthOfAction: [
      'Fetches multispectral satellite bands (NDVI, NDRE) for mapped farm polygon geofences weekly',
      'Merges open meteorological rainfall records and ground soil sensor telemetry into tabular series',
      'Predictive model forecasts harvest tonnage and pinpoints moisture-stressed cultivation zones',
      'Translates technical agronomic reports into simple SMS/audio advisories in regional dialects',
      'Presents aggregated cooperative yield benchmarks to commercial aggregators and lenders'
    ],
    impactYielded: {
      hoursSaved: '35 hrs/harvest cycle',
      roi: '19% average harvest yield boost',
      metricHighlight: 'Proactive early warning of crop stress 14 days before visible leaf yellowing'
    },
    toolStack: ['Copernicus Sentinel API', 'Python GeoPandas', 'XGBoost', 'Gemini 3 Pro', 'Twilio SMS'],
    status: 'approved',
    featured: false,
    createdAt: '2026-11-03'
  },
  {
    id: 'uc-support-ticket-routing',
    title: 'Intelligent Enterprise Multi-Channel Ticket Classification & Triage',
    slug: 'intelligent-ticket-classification-triage',
    sector: 'E-commerce',
    domain: 'Customer Support',
    task: 'Intelligent Ticket Routing',
    level: 3,
    summary: 'Categorizes incoming support requests by urgency, sentiment, and technical domain, auto-drafting responses from knowledge bases or routing directly to tier-3 engineers.',
    depthOfAction: [
      'Captures inbound tickets from Zendesk, Freshdesk, Email, and WhatsApp into unified queue',
      'Evaluates customer sentiment, churn probability, and issue severity via semantic classifier',
      'For tier-1 queries (returns, tracking), auto-generates validated responses with instant order lookup',
      'For complex technical edge cases, assigns priority tag and routes directly to the on-call engineer',
      'Feeds weekly unresolved query clusters back to product management as bug prioritization inputs'
    ],
    impactYielded: {
      hoursSaved: '28 hrs/week/agent',
      roi: '72% first-contact resolution',
      metricHighlight: 'Average first response time slashed from 4 hours down to 2 minutes'
    },
    toolStack: ['Gemini 3 Pro', 'Zendesk API', 'n8n', 'Elasticsearch', 'Slack Alerts'],
    status: 'approved',
    featured: false,
    createdAt: '2026-11-04'
  },
  {
    id: 'uc-public-regulatory-compliance',
    title: 'Autonomous Regulatory Compliance & Statutory Policy Auditor',
    slug: 'autonomous-regulatory-compliance-auditor',
    sector: 'Public Sector',
    domain: 'Internal Operations',
    task: 'Regulatory Compliance Audit',
    level: 4,
    summary: 'Monitors evolving national gazettes, circulars, and tax mandates, comparing them against operational company policies and generating remediation gap reports.',
    depthOfAction: [
      'Scrapes official government gazettes, regulatory agency portals, and tax authority updates weekly',
      'Vectorizes statutory decrees and cross-analyzes them against the organization internal SOP library',
      'Detects policy discrepancies, expiring operational licenses, and newly mandated reporting thresholds',
      'Drafts executive briefing memo detailing required SOP amendments and compliance deadlines',
      'Logs compliance audit trail for external oversight boards with traceable regulatory citations'
    ],
    impactYielded: {
      hoursSaved: '40 hrs/month',
      roi: 'Zero non-compliance penalty fees',
      metricHighlight: 'Continuous real-time compliance posture across 6 regulatory frameworks'
    },
    toolStack: ['Antigravity Agent SDK', 'Gemini 3 Pro', 'Qdrant Vector DB', 'Python', 'Docx Reports'],
    status: 'approved',
    featured: false,
    createdAt: '2026-11-05'
  },
  {
    id: 'uc-energy-predictive-maintenance',
    title: 'Industrial Generator & Grid Telemetry Predictive Maintenance',
    slug: 'grid-telemetry-predictive-maintenance',
    sector: 'Energy',
    domain: 'Research & Data Analysis',
    task: 'Predictive Analytics',
    level: 4,
    summary: 'Monitors real-time vibration, temperature, and fuel consumption telemetry across distributed microgrids to predict mechanical failures before catastrophic shutdowns.',
    depthOfAction: [
      'Ingests MQTT/Modbus sensor streams from commercial generators and solar inverter telemetry',
      'Detects subtle anomalous harmonic vibrations and temperature delta spikes using ML models',
      'Correlates equipment wear curves against manufacturer service hour specifications',
      'Auto-generates field maintenance work orders with specified replacement parts list',
      'Sends dispatch coordinates and urgency level to field technician mobile apps'
    ],
    impactYielded: {
      hoursSaved: '45 hrs downtime/facility',
      roi: '₦12M equipment replacement savings',
      metricHighlight: '91% accurate early failure detection 72 hours prior to mechanical breakdown'
    },
    toolStack: ['MQTT Broker', 'Python Scikit-Learn', 'InfluxDB', 'Gemini 3 Pro', 'Grafana'],
    status: 'approved',
    featured: false,
    createdAt: '2026-11-06'
  },
  {
    id: 'uc-education-curriculum-engine',
    title: 'Adaptive Personalized Curriculum & Quiz Generation Engine',
    slug: 'adaptive-curriculum-quiz-engine',
    sector: 'Education',
    domain: 'Internal Operations',
    task: 'Predictive Analytics',
    level: 2,
    summary: 'Dynamically generates tailored curriculum modules, interactive quizzes, and diagnostic remediation paths calibrated to individual student comprehension baselines.',
    depthOfAction: [
      'Ingests official syllabus learning objectives and course reference textbooks',
      'Analyzes individual student pre-test performance to map concept mastery and knowledge deficits',
      'Generates modular lecture notes, real-world practical examples, and tiered-difficulty problem sets',
      'Scores student responses in real time with constructive pedagogical feedback',
      'Outputs weekly instructor analytics showing class-wide comprehension distribution'
    ],
    impactYielded: {
      hoursSaved: '12 hrs/course module',
      roi: '34% increase in student pass rates',
      metricHighlight: 'Over 2,400 tailored practice questions generated with zero hallucinated facts'
    },
    toolStack: ['Gemini 3 Pro', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'KaTeX Engine'],
    status: 'approved',
    featured: false,
    createdAt: '2026-11-07'
  },
  {
    id: 'uc-software-agentic-devops',
    title: 'Autonomous Code Review & Security Vulnerability Remediation Agent',
    slug: 'autonomous-code-review-security-remediation',
    sector: 'FinTech',
    domain: 'Software Engineering',
    task: 'Automated Due Diligence',
    level: 5,
    summary: 'Evaluates GitHub pull requests, runs static security analysis, detects OWASP vulnerabilities, generates patched unit tests, and drafts PR approvals.',
    depthOfAction: [
      'GitHub webhook triggers containerized agent whenever a pull request is opened or updated',
      'Agent inspects diff syntax trees, dependencies, and environment variable references',
      'Evaluates code for SQL injections, auth bypasses, and unhandled promise rejections',
      'Auto-generates regression test cases and drafts suggested code patches directly into GitHub PR comments',
      'Approves deployment if test suite coverage meets policy and zero critical security advisories exist'
    ],
    impactYielded: {
      hoursSaved: '15 hrs/sprint/engineer',
      roi: '99.8% clean build deployment rate',
      metricHighlight: 'Zero critical security vulnerabilities leaked to production across 140+ releases'
    },
    toolStack: ['Antigravity Agent SDK', 'Gemini 3 Pro', 'GitHub Actions', 'Docker', 'SonarQube API'],
    status: 'approved',
    featured: true,
    createdAt: '2026-11-08'
  }
];
