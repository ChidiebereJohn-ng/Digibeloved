/**
 * DigiBeloved AI Presentation System - Sales Page Configuration V2
 * 
 * Source of Truth: Conversion Sales Page V2 copy verbatim.
 * All pricing, copy, workflows, FAQs, and Selar direct checkout URL.
 */

export const SALES_CONFIG = {
  // Primary conversion destination (Selar direct checkout)
  selarCheckoutUrl: "https://selar.com/7q8715st85",

  // Pricing configuration
  pricing: {
    launchPriceNgn: "₦19,900",
    launchPriceUsd: "$29",
    displayLaunchPrice: "₦19,900 / $29",
    standardPriceNgn: "₦29,900",
    standardPriceUsd: "$49",
    displayStandardPrice: "₦29,900 / $49",
    priceHeadline: "Founding Launch Price",
    guaranteeDays: 7,
  },

  // Hero Copy (Verbatim V2)
  hero: {
    headline: "Turn Your Content Into Professional PowerPoint Presentations With AI",
    subheadline: "Create better presentations. Work faster. Stay in control of your content.",
    description:
      "Use the DigiBeloved Dynamic Presentation Skill + four practical workflows to turn your content, ideas, visual inspiration, or existing slides into professional presentations using AI.",
    noDesignRequired:
      "No presentation-design background required. No need to depend on another dedicated presentation subscription.",
    priceTag: "Founding Launch Price: ₦19,900 / $29",
    ctaText: "GET THE AI PRESENTATION SYSTEM",
    ctaMicrocopy: "Playbook + Dynamic Skill + Practical Resources",
  },

  // Problem Section (Verbatim V2)
  problem: {
    headline: "You Already Have the Hard Part",
    intro: "You may already have:",
    assets: [
      "Research.",
      "A report.",
      "A business proposal.",
      "Training material.",
      "Lecture notes.",
      "A strategy.",
      "A company profile.",
      "A pitch.",
      "Or an existing PowerPoint presentation.",
    ],
    frustration:
      "The frustrating part is turning that information into slides that actually look professional.",
    stillThinkingAboutIntro: "You still have to think about:",
    stillThinkingAbout: [
      "Structure",
      "Layouts",
      "Typography",
      "Images",
      "Charts",
      "Spacing",
      "Visual hierarchy",
      "Branding",
      "Slide length",
      "Consistency",
    ],
    slogOutcome:
      "And suddenly a presentation that should have taken one hour consumes your evening.",
    pivotHeadline: "Your Content May Not Be the Problem.",
    pivotSubheadline:
      "The problem is often turning it into a professional presentation.",
  },

  // AI Objection & Mechanism (Verbatim V2)
  mechanism: {
    objectionQuestion: "“Can't I Just Ask AI to Make My Slides?”",
    answerIntro: "Yes.",
    genericPromptIntro: "But a generic instruction like:",
    genericPrompt: "“Create a professional PowerPoint from this.”",
    missingContextIntro: "does not tell AI enough about your:",
    missingContext: [
      "Audience.",
      "Objective.",
      "Brand.",
      "Content type.",
      "Visual direction.",
      "Or what it is allowed to change.",
    ],
    consequence:
      "That is why AI-generated presentations can still feel generic, text-heavy, or unsuitable for the people who will actually see them.",
    betterDirectionCallout: "Give AI Better Presentation Direction.",
    workflowHeadline: "The DigiBeloved AI Presentation Workflow",
    equation: {
      step1: "CONTENT",
      step2: "CONTEXT",
      step3: "DYNAMIC PRESENTATION SKILL",
      step4: "AI",
      result: "PROFESSIONAL PRESENTATION WORKFLOW",
    },
    principles: [
      "You provide the information.",
      "The Skill provides professional presentation principles.",
      "AI helps execute.",
      "You review and customize the result.",
    ],
  },

  // Content Control (Verbatim V2)
  contentControl: {
    headline: "And You Control Your Content",
    subheadline: "Choose how much freedom AI receives.",
    modes: [
      {
        id: "verbatim",
        name: "VERBATIM",
        tagline: "Preserve my wording exactly.",
        description:
          "Best when your approved, technical, academic, or sensitive content must remain unchanged.",
      },
      {
        id: "refine",
        name: "REFINE",
        tagline: "Improve clarity while preserving meaning.",
        description:
          "Enhance flow, readability, and executive tone without altering your substantive facts or messaging.",
      },
      {
        id: "optimize",
        name: "OPTIMIZE",
        tagline: "Restructure the content specifically for presentation delivery.",
        description:
          "Transform dense documents into scannable visual slides designed for high-impact spoken delivery.",
      },
    ],
    closingHeadline: "Your Presentation. Your Choice.",
  },

  // Four Workflows (Verbatim V2)
  workflows: [
    {
      id: "workflow-a",
      letter: "A",
      title: "I Already Have My Content",
      flow: "Content → Presentation",
      description:
        "Use your reports, research, proposals, notes, training materials, transcripts, or other content.",
    },
    {
      id: "workflow-b",
      letter: "B",
      title: "I Only Have an Idea",
      flow: "Idea → Research → Review → Presentation",
      description:
        "Research and approve your content first. Then turn it into slides.",
    },
    {
      id: "workflow-c",
      letter: "C",
      title: "I Need Design Inspiration",
      flow: "Inspiration → Design Direction → Original Presentation",
      description:
        "Use professional examples to communicate typography, layout, whitespace, and visual direction without copying another person's design.",
    },
    {
      id: "workflow-d",
      letter: "D",
      title: "I Already Have Slides",
      flow: "Existing Deck → Premium Redesign",
      description:
        "Preserve your content and redesign the presentation—or allow the system to improve both presentation and communication.",
    },
  ],

  // Proof & Case Studies Categories (Verbatim V2)
  proofCategories: [
    {
      id: "academic",
      label: "Research / Academic",
      rawInput: "Dense 14-page whitepaper with unformatted data tables, citations, and dense paragraphs.",
      finalSlide: "Clean 3-panel executive summary slide with visual stat callouts, key takeaway banner, and high typographic contrast.",
      badge: "Workflow A (Verbatim)",
    },
    {
      id: "corporate",
      label: "Corporate Strategy",
      rawInput: "18-point bulleted board memorandum with scattered operational KPI updates.",
      finalSlide: "High-impact quarterly board briefing slide with structured columns, status pills, and bottom-line upfront.",
      badge: "Workflow A (Refine)",
    },
    {
      id: "training",
      label: "Training & Education",
      rawInput: "Raw audio transcript and speaker notes from a 2-hour technical workshop.",
      finalSlide: "Modular 4-step progressive learning slide with visual hierarchy, key takeaways, and scannable visual anchors.",
      badge: "Workflow B (Idea → Slides)",
    },
    {
      id: "technical",
      label: "Technical / Petroleum",
      rawInput: "Field engineering report containing critical rig safety specifications and telemetry figures.",
      finalSlide: "Precision technical overview slide with zero altered specifications, high-legibility tables, and safety badges.",
      badge: "Workflow A (Verbatim)",
    },
    {
      id: "pitch",
      label: "Business / Pitch",
      rawInput: "Unstructured founder notes on market opportunity, customer traction, and revenue projections.",
      finalSlide: "Compelling investor problem-solution spread with bold proof metrics and decisive call-to-action.",
      badge: "Workflow C (Design Direction)",
    },
    {
      id: "redesign",
      label: "Existing Deck Redesign",
      rawInput: "Dated 2018 corporate PowerPoint slide crowded with 12 bullet points and clip art.",
      finalSlide: "Editorial 2026 redesign with generous whitespace, modern typography scale, and focused visual rhythm.",
      badge: "Workflow D (Premium Redesign)",
    },
  ],

  // Offer Stack (Verbatim V2)
  offerStack: [
    {
      number: "1",
      title: "The AI Presentation Playbook",
      description: "Your premium visual, step-by-step guide.",
    },
    {
      number: "2",
      title: "Dynamic Presentation Skill",
      description: "The reusable presentation instruction system.",
    },
    {
      number: "3",
      title: "Quick-Start Prompt & Context Pack",
      description: "Copy, customize, and execute.",
    },
    {
      number: "4",
      title: "Four-Workflow Quick Guide",
      description: "A, B, C, and D available whenever you need them.",
    },
    {
      number: "5",
      title: "Presentation Freelancer Starter Toolkit",
      description:
        "Learn practical ways to package presentation creation and redesign as a professional service.",
    },
  ],

  // Monetization Section (Verbatim V2)
  monetization: {
    headline: "Use It for Yourself — Or Build a Service Around It",
    intro: "Once you understand the workflow, you can apply it to services such as:",
    services: [
      "Presentation redesign.",
      "Content-to-presentation.",
      "Research-to-presentation.",
      "Business presentations.",
      "Training decks.",
      "Academic presentations.",
      "Consultant or agency presentation support.",
    ],
    teachingNote: "The system teaches the workflow and business strategies.",
    incomeDisclaimer: "Income is not guaranteed.",
    manyUsesHeadline: "One System. Many Uses.",
    useCases: [
      "Work",
      "Business",
      "Research",
      "Teaching",
      "Training",
      "Clients",
      "Conferences",
      "Proposals",
    ],
    closingNote:
      "You are not buying another presentation template. You are learning a workflow you can reuse.",
  },

  // Guarantee (Verbatim V2)
  guarantee: {
    headline: "7-Day Implementation Guarantee",
    body: "You should receive the product and resources described on this page. If the purchased product is materially different from what was promised, you cannot access your resources, or DigiBeloved cannot deliver what was purchased, contact us within seven days according to the stated refund policy.",
  },

  // FAQs (Verbatim V2)
  faqs: [
    {
      q: "Do I need to be a designer?",
      a: "No. The Dynamic Skill provides professional presentation principles while you provide the content and context.",
    },
    {
      q: "Can I keep my wording exactly?",
      a: "Yes. Use Verbatim Mode.",
    },
    {
      q: "What if I do not have content?",
      a: "Use Workflow B.",
    },
    {
      q: "What if my presentation already exists?",
      a: "Use Workflow D.",
    },
    {
      q: "Can I use ChatGPT, Gemini, Claude, Grok, or other AI tools?",
      a: "The methodology is portable, although file-generation and editing capabilities vary between platforms.",
    },
    {
      q: "Can I use this for client work?",
      a: "Yes, subject to the product licence and the terms of the AI platforms you use.",
    },
  ],

  // Final Close Copy (Verbatim V2)
  finalClose: {
    headline: "Stop Starting Every Presentation From Scratch.",
    giveContentIntro: "Give your content:",
    giveContentItems: [
      "Better structure.",
      "Better visual direction.",
      "A repeatable workflow.",
    ],
    closingTagline: "Create Better. Work Faster. Stay in Control.",
    ctaText: "GET THE AI PRESENTATION SYSTEM",
    priceTag: "₦19,900 / $29",
  },
};
