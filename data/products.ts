export interface MarketplaceProduct {
  id: string;
  title: string;
  slug: string;
  category: 'Playbooks & Systems' | 'Free Blueprints' | 'Software & Tools' | 'Courses & Masterclasses';
  price: string;
  originalPrice?: string;
  badge: string;
  badgeColor: string;
  shortDesc: string;
  description: string;
  highlights: string[];
  image?: string;
  ctaText: string;
  link: string;
  isExternalLink?: boolean;
  featured?: boolean;
  rating: number;
  ratingCount: number;
}

export const marketplaceProducts: MarketplaceProduct[] = [
  {
    id: "ai-presentation-system",
    title: "The AI Presentation System & Playbook",
    slug: "ai-presentation-system",
    category: "Playbooks & Systems",
    price: "₦19,900 / $29",
    originalPrice: "₦45,000",
    badge: "Bestseller",
    badgeColor: "bg-accent/20 text-navy border-accent/40",
    shortDesc: "Turn dense documents, research reports, and raw ideas into executive PowerPoint slides using 4 repeatable AI workflows.",
    description: "A complete self-paced implementation system designed for consultants, founders, and scholars. Includes copy-paste master prompt structures, slide hierarchy guardrails, and before/after case templates.",
    highlights: [
      "4 End-to-End AI Presentation Workflows",
      "Dynamic Prompt Architecture & Quality Controls",
      "Executive Slide Hierarchy & Layout Templates",
      "7-Day Implementation Money-Back Guarantee"
    ],
    image: "/playbook-cover.png",
    ctaText: "Get Instant Access",
    link: "/ai-presentation-system",
    featured: true,
    rating: 4.9,
    ratingCount: 142
  },
  {
    id: "ai-presentation-starter-blueprint",
    title: "The AI Presentation Starter Blueprint",
    slug: "free-blueprint",
    category: "Free Blueprints",
    price: "FREE",
    badge: "Free Download",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    shortDesc: "The 4-step rapid framework + copy-paste master prompt to turn notes into clean, professional slide decks with AI.",
    description: "A concise 6-page digital starter guide. Learn the core mental models and prompt syntax to stop wasting hours wrestling with blank slide templates.",
    highlights: [
      "The 4 Core Presentation Workflows",
      "Copy-Paste Starter Prompt for ChatGPT & Claude",
      "5 Quick Review Checks for Executive Decks",
      "Instant PDF Download"
    ],
    ctaText: "Download Free Guide",
    link: "/free-blueprint",
    featured: false,
    rating: 4.8,
    ratingCount: 380
  },
  {
    id: "ai-research-data-masterclass",
    title: "Applied AI for Research & Data Analysis",
    slug: "ai-research-data",
    category: "Courses & Masterclasses",
    price: "₦10,000",
    originalPrice: "₦150,000",
    badge: "Specialized Course",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    shortDesc: "Master Google Gemini and NotebookLM to synthesize 50+ papers in minutes and analyze survey data without coding.",
    description: "Hands-on, self-paced masterclass built for postgraduate researchers, academic leads, and M&E analysts. Learn ethical prompt engineering, literature clustering, and grounded statistical synthesis.",
    highlights: [
      "Multi-Paper Scanning with Google NotebookLM",
      "No-Code Qualitative Thematic Extraction",
      "Excel & Google Sheets AI Integration",
      "Official Certificate of Completion"
    ],
    ctaText: "Explore Curriculum",
    link: "/academy/ai-research-data",
    featured: false,
    rating: 4.9,
    ratingCount: 88
  },
  {
    id: "prompt-polisher-tool",
    title: "The Prompt Polisher Utility",
    slug: "prompt-polisher",
    category: "Software & Tools",
    price: "FREE TOOL",
    badge: "Web Utility",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    shortDesc: "Transform raw, conversational thoughts into engineer-grade, high-precision AI prompts for ChatGPT, Claude, and Gemini.",
    description: "Interactive web utility built by DigiBeloved. Automatically applies role clarity, output formatting constraints, and negative prompt guardrails to your everyday prompts.",
    highlights: [
      "Instant Prompt Optimization in Real Time",
      "Role, Constraint & Context Structuring",
      "Supports Research, Business & Operations Prompts",
      "100% Free Online Access"
    ],
    ctaText: "Launch Tool Free",
    link: "/prompt-polisher",
    featured: false,
    rating: 4.7,
    ratingCount: 215
  },
  {
    id: "ai-graphic-design-masterclass",
    title: "AI Graphic Design Masterclass",
    slug: "ai-graphic-design",
    category: "Courses & Masterclasses",
    price: "₦15,000",
    originalPrice: "₦50,000",
    badge: "Enrolling Soon",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    shortDesc: "Create commercial-grade brand graphics, marketing assets, and social visuals using generative image systems.",
    description: "A practical masterclass on Midjourney and open diffusion models. Learn how to maintain brand consistency, precise aspect ratios, and commercial aesthetics without expensive design software.",
    highlights: [
      "Midjourney & Generative Image Workflows",
      "Consistent Brand Styling & Visual Identity",
      "Social Media & Ad Creative Library",
      "Project-Based Portfolio Assets"
    ],
    ctaText: "View Course Details",
    link: "/courses/ai-graphic-design",
    featured: false,
    rating: 4.8,
    ratingCount: 54
  }
];
