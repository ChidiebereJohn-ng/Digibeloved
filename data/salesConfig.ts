/**
 * Central Configuration & Content for the DigiBeloved AI Presentation System Sales Page
 * 
 * All prices, copy, workflows, FAQs, and checkout destinations are centralized here.
 * Future ad-angles or pricing adjustments can be made directly in this file.
 */

export const SALES_CONFIG = {
  // Primary conversion destination (Selar direct checkout)
  selarCheckoutUrl: "https://selar.com/7q8715st85",

  // Pricing configuration
  pricing: {
    localLaunchPrice: "₦19,900",
    internationalLaunchPrice: "$29",
    localStandardPrice: "₦29,900",
    internationalStandardPrice: "$49",
    displayLaunchPrice: "₦19,900 / $29",
    displayStandardPrice: "₦29,900 / $49",
    priceNote: "Founding Launch Price: ₦19,900 / $29",
    guaranteeText: "7-Day Implementation Guarantee Included",
  },

  // Launch deadline (Set to real ISO date string or human date e.g. "October 15, 2026", or null to hide completely)
  launchDeadline: null as string | null,

  // Feature toggles
  enableStickyMobileCta: true,
  enableTestimonials: false, // Set to true only when verified real testimonials are added below

  // Default master hero copy (ad-angle: Master Positioning)
  heroCopy: {
    eyebrow: "For professionals, entrepreneurs, researchers, trainers & freelancers",
    headline: "Turn Your Content Into Professional PowerPoint Presentations With AI",
    supportingHeadline: "Without depending on another dedicated presentation subscription.",
    subtext:
      "Use a reusable Dynamic Presentation Skill and four practical workflows to turn your content, ideas, visual inspiration, or existing slides into professional presentations using AI.",
    benefitLine: "Create better presentations. Work faster. Stay in control of your content.",
    primaryCtaText: "Get the AI Presentation System",
    supportingCtaMicrocopy: "Playbook + Dynamic Skill + Execution Resources",
    priceBadge: "Founding Launch Offer: ₦19,900 / $29",
    microTrust: "Premium Playbook + Dynamic Skill + Practical Resources",
  },

  // Trust Strip concept items
  trustStrip: [
    { label: "Existing Content", step: "Raw documents, reports & notes" },
    { label: "Research / Ideas", step: "Unstructured knowledge & topics" },
    { label: "Visual Inspiration", step: "Design principles & aesthetic direction" },
    { label: "Existing Decks", step: "Outdated or crowded slide files" },
  ],

  // Content Control Options
  contentControlModes: [
    {
      id: "verbatim",
      name: "VERBATIM",
      tagline: "Preserve my wording exactly.",
      description:
        "Engineered for approved, technical, academic, institutional, policy, regulatory, or sensitive content where phrasing cannot be altered.",
      badge: "Zero Rephrasing",
    },
    {
      id: "refine",
      name: "REFINE",
      tagline: "Improve clarity while preserving meaning.",
      description:
        "Ideal for rough notes, spoken transcripts, and drafts that need crisp, professional executive polish without altering factual points.",
      badge: "Clarity Polish",
    },
    {
      id: "optimize",
      name: "OPTIMIZE",
      tagline: "Restructure specifically for presentation delivery.",
      description:
        "Transforms dense text into structured presentation architecture: clear takeaways, scannable hierarchies, and spoken-delivery flow.",
      badge: "Full Presentation Flow",
    },
  ],

  // Four Workflows
  workflows: [
    {
      id: "workflow-a",
      letter: "Workflow A",
      badge: "Direct Conversion",
      title: "I ALREADY HAVE MY CONTENT",
      flow: "Content → Presentation",
      description:
        "Take existing reports, research papers, articles, business proposals, lecture notes, transcripts, or training manuals and turn them directly into slide architecture.",
      mechanism: "Content + Context + Dynamic Skill → Presentation",
      keyHighlight: "Choose Verbatim, Refine, or Optimize mode.",
      practicalTip:
        "No need to rewrite your document first. The Skill extracts the hierarchy while preserving your authority.",
    },
    {
      id: "workflow-b",
      letter: "Workflow B",
      badge: "Idea to Outline",
      title: "I HAVE THE IDEA — BUT NOT THE CONTENT",
      flow: "Idea → Research → Review → Approved Content → Presentation",
      description:
        "When starting with only a topic or loose concept, use AI to research and structure your thinking, review and approve the substantive text, and only then generate presentation slides.",
      mechanism: "Topic + Research Prompting → Substantive Review → Presentation Skill → Deck",
      keyHighlight: "Get the content right before designing it.",
      practicalTip:
        "Prevents the common mistake of asking AI to jump straight from a single sentence to slides without factual grounding.",
    },
    {
      id: "workflow-c",
      letter: "Workflow C",
      badge: "Design Direction",
      title: "I HAVE THE CONTENT — BUT NEED VISUAL DIRECTION",
      flow: "Inspiration → Design Direction → Original Presentation",
      description:
        "Use aesthetic references, premium editorial layouts, or brand standards to establish visual rhythm, typography scale, whitespace balance, and layout hierarchy for your slides.",
      mechanism: "Raw Data + Design Inspiration → Style Rules → Dynamic Skill Execution",
      keyHighlight: "Use visual principles. Do not copy proprietary designs.",
      practicalTip:
        "Teaches how to deconstruct high-end editorial designs and apply their spacing and typography rules natively.",
    },
    {
      id: "workflow-d",
      letter: "Workflow D",
      badge: "Premium Overhaul",
      title: "I ALREADY HAVE A PRESENTATION",
      flow: "Existing Deck → Premium Redesign",
      description:
        "Take an existing, crowded, or dated PowerPoint deck and transform it into a clean, modern, executive-ready presentation.",
      mechanism: "Legacy Slides → Extraction + Restructure → Dynamic Skill → Premium Deck",
      keyHighlight: "Two distinct paths: Design-Only (preserve every word) vs. Redesign + Improve (elevate communication).",
      practicalTip:
        "The highest-demand workflow for corporate teams, agencies, and consultants modernizing legacy slide decks.",
    },
  ],

  // Audience Adaptation Cases
  audienceAdaptations: [
    {
      audience: "Students / Learners",
      objective: "Teach & Retain",
      approach: "Step-by-step cognitive scaffolding, clear concept definitions, visual metaphors, and digestible takeaways.",
    },
    {
      audience: "C-Suite & Executives",
      objective: "Inform & Decide",
      approach: "Bottom-line upfront (BLUF), high signal-to-noise ratio, strategic risk/reward metrics, and minimal slide clutter.",
    },
    {
      audience: "Investors & Partners",
      objective: "Persuade & Fund",
      approach: "Traction-focused narrative, bold proof metrics, competitive differentiation, and decisive calls to action.",
    },
  ],

  // Core Product + Resource Stack
  offerStack: {
    core: {
      title: "THE AI PRESENTATION PLAYBOOK",
      subtitle: "The Master Editorial Guide (Digital Manual)",
      description:
        "A comprehensive, highly illustrated direct-response playbook detailing the four core presentation workflows, prompt structures, side-by-side comparisons, worked examples, troubleshooting guides, multi-AI workflows, and commercial delivery principles.",
      highlights: [
        "Complete step-by-step breakdown of Workflows A, B, C, and D",
        "Visual before/after case studies with layout breakdowns",
        "Multi-AI platform guidance (ChatGPT, Claude, Gemini, Grok)",
        "Troubleshooting distorted hierarchies, wordy slides, and weak layouts",
        "Clear guidelines for commercial presentation service packaging",
      ],
    },
    skill: {
      title: "DYNAMIC PRESENTATION SKILL",
      subtitle: "The Core Reusable Instruction Engine",
      description:
        "A proprietary, adaptable presentation instruction system that instructs any modern AI model to think and structure like an editorial presentation art director before generating slides.",
      highlights: [
        "Adapts dynamically across audience, objective, brand, and layout constraints",
        "Includes Verbatim, Refine, and Optimize execution switches",
        "Portable across AI platforms without requiring proprietary software subscriptions",
        "Reusable indefinitely across all future personal or commercial projects",
      ],
    },
    resources: [
      {
        number: "Resource 01",
        title: "Quick-Start Prompt & Context Pack",
        benefit: "Never wonder what to type.",
        description:
          "Ready-to-use prompt cards and context-framing templates engineered for instant execution across reports, training, proposals, and pitches.",
      },
      {
        number: "Resource 02",
        title: "Four-Workflow Quick-Reference Guide",
        benefit: "Choose A, B, C, or D and execute immediately.",
        description:
          "A condensed desktop reference sheet allowing you to select your exact situation and follow the workflow steps without flipping through the entire playbook.",
      },
      {
        number: "Resource 03",
        title: "Presentation Freelancer Starter Toolkit",
        benefit: "Learn practical ways to package this capability into a paid service.",
        description:
          "A practical commercial guide covering service pricing models, client intake scopes, deliverable checklists, and positioning strategies. (Explicit disclosure: No earnings are guaranteed; income depends entirely on individual execution and market conditions).",
      },
    ],
  },

  // Transformational Benefits
  benefits: [
    {
      title: "CREATE FASTER",
      description: "Drastically reduce the manual labor and formatting friction between raw ideas and your first usable slide deck.",
    },
    {
      title: "PRESENT BETTER",
      description: "Give valuable thoughts the visual authority, scannability, and typographic hierarchy they deserve.",
    },
    {
      title: "STAY IN CONTROL",
      description: "Choose exactly what AI can touch and what must be preserved word-for-word with Verbatim, Refine, and Optimize modes.",
    },
    {
      title: "REUSE THE SYSTEM",
      description: "Own an asset-independent methodology that works for you project after project, deck after deck.",
    },
    {
      title: "ADAPT EVERYWHERE",
      description: "Effortlessly recalibrate the same core content for students, corporate boards, conference keynotes, or investors.",
    },
    {
      title: "BUILD A COMMERCIAL SKILL",
      description: "Learn how to offer presentation redesigns and deck structuring as an in-demand, high-value consulting service.",
    },
  ],

  // Objective Comparison Matrix
  comparisons: [
    {
      method: "Manual PowerPoint",
      control: "100% manual control",
      speed: "Hours or days of slide building",
      learningCurve: "Requires manual graphic design proficiency",
      cost: "Time-intensive; recurring personal fatigue",
      bestFor: "Small one-off slide tweaks",
    },
    {
      method: "Hiring a Slide Designer",
      control: "Subject to designer interpretation",
      speed: "Multi-day revision cycles",
      learningCurve: "Requires extensive briefing and oversight",
      cost: "High recurring fees ($200–$1,000+ per deck)",
      bestFor: "Occasional high-budget corporate milestones",
    },
    {
      method: "Dedicated AI Slide Platforms",
      control: "Locked into rigid platform templates",
      speed: "Fast initial output",
      learningCurve: "Platform-dependent interface",
      cost: "Recurring monthly subscriptions ($15–$30/mo)",
      bestFor: "Quick generic presentations without strict corporate branding",
    },
    {
      method: "DigiBeloved AI Presentation System",
      control: "Total control (Verbatim / Refine / Optimize)",
      speed: "Rapid workflow from raw text to structured deck",
      learningCurve: "Systematic, reusable 4-workflow framework",
      cost: "One-time founding investment (₦19,900 / $29)",
      bestFor: "Professionals who want a reusable, platform-agnostic workflow",
      isHighlight: true,
    },
  ],

  // Target Audiences
  audiences: [
    "Corporate Professionals",
    "Entrepreneurs & Founders",
    "Strategy Consultants",
    "Corporate Trainers & Coaches",
    "Digital Freelancers & Agencies",
    "Researchers & Scientists",
    "Postgraduate Scholars",
    "Lecturers & Educators",
    "Business Development Teams",
    "Keynote & Seminar Speakers",
  ],

  // Real-World Scenarios
  useCases: [
    {
      day: "Monday Morning",
      scenario: "You receive a dense 20-page research report that leadership needs presented by 3 PM.",
      solution: "Workflow A — Feed the raw report into the Dynamic Skill in Refine mode. Receive structured slide architecture in minutes.",
    },
    {
      day: "Wednesday Afternoon",
      scenario: "Your company's existing flagship deck looks cluttered, heavy, and visually outdated.",
      solution: "Workflow D — Apply the Premium Redesign workflow in Design-Only mode to preserve every approved word while transforming the layout.",
    },
    {
      day: "Thursday Pitch",
      scenario: "You have an innovative service concept in your head, but haven't written out slide copy.",
      solution: "Workflow B — Use the research & structuring prompts to get substantive content approved first before formatting slides.",
    },
    {
      day: "Friday Client Delivery",
      scenario: "A client wants a modern, magazine-quality visual direction rather than default bullet points.",
      solution: "Workflow C — Use visual inspiration principles to dictate typography scales, whitespace, and clean data callouts.",
    },
  ],

  // Monetization Paths
  monetizationPaths: [
    { title: "Presentation Redesign", desc: "Modernize outdated or cluttered slides for corporate clients." },
    { title: "Content-to-Presentation", desc: "Turn whitepapers, articles, and reports into executive decks." },
    { title: "Research-to-Presentation", desc: "Structure academic or market research into conference-ready slides." },
    { title: "Executive Pitch Decks", desc: "Help founders and leaders present strategic proposals cleanly." },
    { title: "Training Deck Structuring", desc: "Help coaches and educators package multi-module course slides." },
    { title: "Agency Presentation Partner", desc: "Provide rapid presentation production for marketing teams." },
  ],

  // FAQ Accordion Data
  faqs: [
    {
      q: "Is this a course?",
      a: "No. This is not a video course that demands 20 hours of passive watching. It is primarily a premium, highly illustrated practical playbook supported by a reusable Dynamic Presentation Skill, ready-to-use prompt cards, quick-reference sheets, and freelancer execution tools designed for immediate implementation.",
    },
    {
      q: "Do I need Microsoft PowerPoint?",
      a: "The methodology teaches foundational presentation architecture, visual hierarchy, and layout structure that translates across PowerPoint, Keynote, Google Slides, or any modern presentation tool. While PowerPoint is ideal for generating and editing traditional .pptx files, the system itself is not locked to a single desktop application.",
    },
    {
      q: "Do I need Gamma or a specific presentation subscription?",
      a: "No. You do not need another dedicated presentation subscription. The system is intentionally designed as an asset-independent workflow that works using the AI assistants you already have access to (such as ChatGPT, Claude, Gemini, or Grok).",
    },
    {
      q: "Does this mean I will never manually edit a presentation?",
      a: "No. AI significantly accelerates structure, layout, typography guidance, and draft generation, but your personal judgment, factual review, and final styling touches remain essential. The system eliminates the blank-page struggle and formatting slog, leaving you in full command of the final output.",
    },
    {
      q: "Can I use my exact wording without AI changing it?",
      a: "Yes. You simply select Verbatim Mode. This instructs the Dynamic Skill and AI to maintain every sentence and approved terminology exactly as provided, focusing exclusively on visual layout, typography scale, whitespace, and slide distribution.",
    },
    {
      q: "What if I do not have content written yet?",
      a: "You use Workflow B (Idea → Research → Review → Approved Content → Presentation). This guides you through researching and solidifying the substantive content first, reviewing it for accuracy, and only then generating slides.",
    },
    {
      q: "What if I already have an existing slide deck that just looks bad?",
      a: "You use Workflow D (Existing Deck → Premium Redesign). You can choose between Design-Only (preserving every word while upgrading the visuals) or Redesign + Improve (sharpening communication while preserving the core meaning).",
    },
    {
      q: "Can I use ChatGPT, Gemini, Claude, Grok, or another AI?",
      a: "Yes. The Dynamic Presentation Skill and prompt frameworks are portable across major modern AI models. While specific export plugins and file-handling features vary by platform, the structural methodology functions across all leading LLMs.",
    },
    {
      q: "Will this make me a professional graphic designer overnight?",
      a: "No. It will not replace years of formal design school overnight. However, it transfers proven editorial presentation principles—hierarchy, typography, contrast, whitespace, and narrative pacing—directly into your workflow so your presentations look intentional, polished, and executive-ready.",
    },
    {
      q: "Can I use this workflow for client work or paid services?",
      a: "Yes, subject to our standard product license and the terms of your AI platform. You can freely use the workflows and Dynamic Skill to create, redesign, and deliver presentations for paying clients.",
    },
    {
      q: "Is freelance income guaranteed?",
      a: "No. The Presentation Freelancer Starter Toolkit shares practical business frameworks, packaging options, and positioning strategies. Actual commercial earnings depend on your personal execution, portfolio quality, client acquisition, and market conditions. No earnings are guaranteed.",
    },
  ],

  // Real Testimonials (Empty at launch; component remains cleanly hidden until verified entries exist)
  testimonials: [] as Array<{
    name: string;
    role: string;
    country: string;
    quote: string;
    avatarUrl?: string;
    result?: string;
  }>,
};
