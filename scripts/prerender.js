import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const indexPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("dist/index.html not found! Run vite build first.");
  process.exit(1);
}

let template = fs.readFileSync(indexPath, "utf-8");

// Metadata to inject
const title = "Turn Your Content Into Professional PowerPoint Presentations With AI | DigiBeloved";
const description = "Use the DigiBeloved Dynamic Presentation Skill + four practical workflows to turn your content, ideas, visual inspiration, or existing slides into professional presentations using AI.";
const canonical = "https://digibeloved.com/ai-presentation-system";
const image = "https://digibeloved.com/playbook-cover.png";
const selarUrl = "https://selar.com/7q8715st85";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "DigiBeloved AI Presentation System",
  "image": image,
  "description": description,
  "brand": {
    "@type": "Brand",
    "name": "DigiBeloved"
  },
  "offers": {
    "@type": "Offer",
    "url": selarUrl,
    "priceCurrency": "USD",
    "price": "29",
    "availability": "https://schema.org/InStock"
  }
};

// 1. Replace Title
template = template.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

// 2. Replace or Insert Meta Description
template = template.replace(/<meta\s+name=["']description["'][\s\S]*?>/i, `<meta name="description" content="${description}" />`);

// 3. Replace or Insert Canonical
if (template.includes('<link rel="canonical"')) {
  template = template.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonical}" />`);
} else {
  template = template.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n</head>`);
}

// 4. Inject OpenGraph & JSON-LD
const extraHead = `
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:type" content="product" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
  <script type="application/ld+json">${JSON.stringify(productJsonLd)}</script>
`;
template = template.replace('</head>', `${extraHead}\n</head>`);

// 5. Complete Semantic Crawlable Server-Rendered HTML content
const staticContent = `
<div class="min-h-screen bg-white text-navy font-sans antialiased selection:bg-accent selection:text-navy">
  <!-- Minimal Header -->
  <header class="w-full bg-[#0A1F44] border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <img src="/logo.jpg" alt="DigiBeloved Logo" width="32" height="32" class="w-8 h-8 rounded object-contain" />
        <div class="flex flex-col">
          <span class="text-white font-bold tracking-tight text-lg leading-tight">DigiBeloved</span>
          <span class="text-white/60 text-xs tracking-wider uppercase font-medium">AI Education &amp; Consulting</span>
        </div>
      </div>
      <div class="hidden sm:flex items-center space-x-2 text-white/70 text-xs">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span>Official Product Release</span>
      </div>
    </div>
  </header>

  <!-- 1. Hero Section -->
  <section class="relative bg-[#07152E] text-white pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="relative max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div class="lg:col-span-7 text-left">
          <div class="inline-flex items-center space-x-2 bg-white/10 border border-accent/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-accent mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>Founding Launch Price: ₦19,900 / $29</span>
          </div>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
            Turn Your Content Into Professional PowerPoint Presentations With AI
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl font-medium text-accent leading-snug mb-5">
            Create better presentations. Work faster. Stay in control of your content.
          </p>
          <p class="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-6">
            Use the DigiBeloved Dynamic Presentation Skill + four practical workflows to turn your content, ideas, visual inspiration, or existing slides into professional presentations using AI.
          </p>
          <p class="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-8 border-l-2 border-accent/40 pl-3">
            No presentation-design background required. No need to depend on another dedicated presentation subscription.
          </p>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
            <a href="${selarUrl}" class="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-base md:text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.25)]">
              <span>GET THE AI PRESENTATION SYSTEM</span>
            </a>
          </div>
          <div class="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span class="font-semibold text-slate-300">Playbook + Dynamic Skill + Practical Resources</span>
            <span class="hidden sm:inline text-slate-600">•</span>
            <span>7-Day Implementation Guarantee</span>
          </div>
        </div>
        <div class="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            <img src="/playbook-cover.png" alt="The AI Presentation Playbook by DigiBeloved - Cover" width="600" height="800" class="w-full h-auto rounded-2xl shadow-2xl border border-white/10" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 2. Problem Section -->
  <section class="py-16 md:py-20 bg-slate-50 text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
    <div class="max-w-4xl mx-auto text-left">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-6">
        You Already Have the Hard Part
      </h2>
      <p class="text-base sm:text-lg font-medium text-slate-700 mb-4">You may already have:</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        <div class="bg-white p-3 rounded-lg border border-slate-200/80 text-sm font-medium text-slate-800">Research.</div>
        <div class="bg-white p-3 rounded-lg border border-slate-200/80 text-sm font-medium text-slate-800">A report.</div>
        <div class="bg-white p-3 rounded-lg border border-slate-200/80 text-sm font-medium text-slate-800">A business proposal.</div>
        <div class="bg-white p-3 rounded-lg border border-slate-200/80 text-sm font-medium text-slate-800">Training material.</div>
        <div class="bg-white p-3 rounded-lg border border-slate-200/80 text-sm font-medium text-slate-800">Lecture notes.</div>
        <div class="bg-white p-3 rounded-lg border border-slate-200/80 text-sm font-medium text-slate-800">A strategy.</div>
        <div class="bg-white p-3 rounded-lg border border-slate-200/80 text-sm font-medium text-slate-800">A company profile.</div>
        <div class="bg-white p-3 rounded-lg border border-slate-200/80 text-sm font-medium text-slate-800">A pitch.</div>
        <div class="bg-white p-3 rounded-lg border border-slate-200/80 text-sm font-medium text-slate-800">Or an existing PowerPoint presentation.</div>
      </div>
      <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <p class="text-base sm:text-lg font-bold text-navy leading-snug mb-4">
          The frustrating part is turning that information into slides that actually look professional.
        </p>
        <p class="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-3">You still have to think about:</p>
        <div class="flex flex-wrap gap-2 mb-5">
          <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Structure</span>
          <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Layouts</span>
          <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Typography</span>
          <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Images</span>
          <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Charts</span>
          <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Spacing</span>
          <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Visual hierarchy</span>
          <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Branding</span>
          <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Slide length</span>
          <span class="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Consistency</span>
        </div>
        <div class="text-sm text-red-600 font-medium bg-red-50 p-3.5 rounded-xl border border-red-100">
          And suddenly a presentation that should have taken one hour consumes your evening.
        </div>
      </div>
      <div class="border-l-4 border-accent pl-5 py-2">
        <h3 class="text-xl sm:text-2xl font-extrabold text-navy leading-snug mb-1">
          Your Content May Not Be the Problem.
        </h3>
        <p class="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
          The problem is often turning it into a professional presentation.
        </p>
      </div>
    </div>
  </section>

  <!-- 3. AI Objection & Mechanism -->
  <section class="py-16 md:py-24 bg-white text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-100">
    <div class="max-w-4xl mx-auto text-left">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">
        “Can't I Just Ask AI to Make My Slides?”
      </h2>
      <p class="text-lg font-bold text-navy mb-3">Yes.</p>
      <p class="text-base text-slate-700 font-medium mb-3">But a generic instruction like:</p>
      <blockquote class="bg-slate-50 border-l-4 border-slate-400 p-4 rounded-r-xl font-mono text-sm sm:text-base text-slate-800 italic mb-5">
        “Create a professional PowerPoint from this.”
      </blockquote>
      <p class="text-base text-slate-700 font-medium mb-3">does not tell AI enough about your:</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
        <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 font-medium text-sm">Audience.</div>
        <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 font-medium text-sm">Objective.</div>
        <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 font-medium text-sm">Brand.</div>
        <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 font-medium text-sm">Content type.</div>
        <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 font-medium text-sm">Visual direction.</div>
        <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200/70 font-medium text-sm">Or what it is allowed to change.</div>
      </div>
      <p class="text-base text-slate-600 leading-relaxed mb-6">
        That is why AI-generated presentations can still feel generic, text-heavy, or unsuitable for the people who will actually see them.
      </p>
      <div class="inline-block bg-[#07152E] text-accent px-4 py-2 rounded-lg font-bold text-sm sm:text-base tracking-wide mb-12">
        Give AI Better Presentation Direction.
      </div>
      <hr class="border-slate-200 my-10" />
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-8">
        The DigiBeloved AI Presentation Workflow
      </h2>
      <div class="bg-[#07152E] text-white p-6 sm:p-10 rounded-2xl border border-white/10 shadow-xl mb-8">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
          <div class="bg-white/5 p-4 rounded-xl border border-white/10 font-bold">CONTENT</div>
          <div class="bg-white/5 p-4 rounded-xl border border-white/10 font-bold">CONTEXT</div>
          <div class="bg-accent/10 p-4 rounded-xl border border-accent/40 font-bold text-accent">DYNAMIC PRESENTATION SKILL</div>
          <div class="bg-white/5 p-4 rounded-xl border border-white/10 font-bold">AI</div>
        </div>
        <div class="mt-6 pt-6 border-t border-white/10 text-center font-extrabold text-lg sm:text-2xl text-white">
          = PROFESSIONAL PRESENTATION WORKFLOW
        </div>
      </div>
      <div class="space-y-3 font-bold text-base sm:text-lg text-navy">
        <p>• You provide the information.</p>
        <p>• The Skill provides professional presentation principles.</p>
        <p>• AI helps execute.</p>
        <p>• You review and customize the result.</p>
      </div>
    </div>
  </section>

  <!-- 4. Content Control -->
  <section class="py-16 md:py-20 bg-slate-50 text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-3">
        And You Control Your Content
      </h2>
      <p class="text-base sm:text-lg text-slate-600 font-medium mb-10">Choose how much freedom AI receives.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
        <div class="p-6 rounded-2xl bg-white border border-accent/60 shadow-md">
          <h3 class="text-xl font-extrabold text-navy mb-2">VERBATIM</h3>
          <p class="text-sm font-bold text-slate-800 mb-3">Preserve my wording exactly.</p>
          <p class="text-xs sm:text-sm text-slate-600">Best when your approved, technical, academic, or sensitive content must remain unchanged.</p>
        </div>
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h3 class="text-xl font-extrabold text-navy mb-2">REFINE</h3>
          <p class="text-sm font-bold text-slate-800 mb-3">Improve clarity while preserving meaning.</p>
          <p class="text-xs sm:text-sm text-slate-600">Enhance flow, readability, and executive tone without altering your substantive facts or messaging.</p>
        </div>
        <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h3 class="text-xl font-extrabold text-navy mb-2">OPTIMIZE</h3>
          <p class="text-sm font-bold text-slate-800 mb-3">Restructure the content specifically for presentation delivery.</p>
          <p class="text-xs sm:text-sm text-slate-600">Transform dense documents into scannable visual slides designed for high-impact spoken delivery.</p>
        </div>
      </div>
      <h3 class="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">Your Presentation. Your Choice.</h3>
    </div>
  </section>

  <!-- 5. Four Workflows A–D -->
  <section class="py-16 md:py-24 bg-white text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-100">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy text-center mb-12">
        Four Workflows. Choose Your Situation.
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h3 class="text-xl font-extrabold text-navy mb-2">A — I Already Have My Content</h3>
          <p class="font-mono text-xs font-bold text-slate-800 bg-white px-3 py-1.5 rounded-md inline-block mb-3 border">Content → Presentation</p>
          <p class="text-sm text-slate-600">Use your reports, research, proposals, notes, training materials, transcripts, or other content.</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h3 class="text-xl font-extrabold text-navy mb-2">B — I Only Have an Idea</h3>
          <p class="font-mono text-xs font-bold text-slate-800 bg-white px-3 py-1.5 rounded-md inline-block mb-3 border">Idea → Research → Review → Presentation</p>
          <p class="text-sm text-slate-600">Research and approve your content first. Then turn it into slides.</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h3 class="text-xl font-extrabold text-navy mb-2">C — I Need Design Inspiration</h3>
          <p class="font-mono text-xs font-bold text-slate-800 bg-white px-3 py-1.5 rounded-md inline-block mb-3 border">Inspiration → Design Direction → Original Presentation</p>
          <p class="text-sm text-slate-600">Use professional examples to communicate typography, layout, whitespace, and visual direction without copying another person's design.</p>
        </div>
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h3 class="text-xl font-extrabold text-navy mb-2">D — I Already Have Slides</h3>
          <p class="font-mono text-xs font-bold text-slate-800 bg-white px-3 py-1.5 rounded-md inline-block mb-3 border">Existing Deck → Premium Redesign</p>
          <p class="text-sm text-slate-600">Preserve your content and redesign the presentation—or allow the system to improve both presentation and communication.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. Proof Section -->
  <section class="py-16 md:py-24 bg-slate-50 text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-200">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">
        Same Content. Completely Different Presentation.
      </h2>
      <h3 class="text-xl sm:text-2xl font-extrabold text-slate-700 mb-10">
        See What the System Can Help You Create
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left mb-10">
        <div class="bg-white p-4 rounded-xl border border-slate-200 font-bold text-sm">1. Research / Academic</div>
        <div class="bg-white p-4 rounded-xl border border-slate-200 font-bold text-sm">2. Corporate Strategy</div>
        <div class="bg-white p-4 rounded-xl border border-slate-200 font-bold text-sm">3. Training & Education</div>
        <div class="bg-white p-4 rounded-xl border border-slate-200 font-bold text-sm">4. Technical / Petroleum</div>
        <div class="bg-white p-4 rounded-xl border border-slate-200 font-bold text-sm">5. Business / Pitch</div>
        <div class="bg-white p-4 rounded-xl border border-slate-200 font-bold text-sm">6. Existing Deck Redesign</div>
      </div>
      <div class="mb-10">
        <a href="${selarUrl}" class="inline-flex items-center justify-center bg-accent text-navy px-8 py-4 rounded-xl font-extrabold text-base md:text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_8px_20px_rgba(255,209,0,0.2)]">
          <span>GET THE AI PRESENTATION SYSTEM</span>
        </a>
      </div>
    </div>
  </section>

  <!-- 7. Offer Stack Section -->
  <section class="py-16 md:py-24 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 border-b border-white/10">
    <div class="max-w-4xl mx-auto text-left">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-8 text-center">
        Get the Complete DigiBeloved AI Presentation System
      </h2>
      <div class="space-y-4">
        <div class="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 class="text-lg font-extrabold text-white">1. The AI Presentation Playbook</h3>
          <p class="text-sm text-slate-300">Your premium visual, step-by-step guide.</p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 class="text-lg font-extrabold text-white">2. Dynamic Presentation Skill</h3>
          <p class="text-sm text-slate-300">The reusable presentation instruction system.</p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 class="text-lg font-extrabold text-white">3. Quick-Start Prompt &amp; Context Pack</h3>
          <p class="text-sm text-slate-300">Copy, customize, and execute.</p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 class="text-lg font-extrabold text-white">4. Four-Workflow Quick Guide</h3>
          <p class="text-sm text-slate-300">A, B, C, and D available whenever you need them.</p>
        </div>
        <div class="bg-white/5 border border-white/10 rounded-2xl p-5">
          <h3 class="text-lg font-extrabold text-white">5. Presentation Freelancer Starter Toolkit</h3>
          <p class="text-sm text-slate-300">Learn practical ways to package presentation creation and redesign as a professional service.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. Short Monetization Section -->
  <section class="py-16 md:py-20 bg-white text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-200/70">
    <div class="max-w-4xl mx-auto text-left">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">
        Use It for Yourself — Or Build a Service Around It
      </h2>
      <p class="text-base font-medium text-slate-700 mb-4">
        Once you understand the workflow, you can apply it to services such as:
      </p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-semibold text-slate-800 mb-6">
        <li>• Presentation redesign.</li>
        <li>• Content-to-presentation.</li>
        <li>• Research-to-presentation.</li>
        <li>• Business presentations.</li>
        <li>• Training decks.</li>
        <li>• Academic presentations.</li>
        <li>• Consultant or agency presentation support.</li>
      </ul>
      <p class="text-sm text-slate-600 mb-2">The system teaches the workflow and business strategies.</p>
      <p class="text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200 inline-block px-3 py-1 rounded-md mb-10">
        Income is not guaranteed.
      </p>
      <hr class="border-slate-200 my-8" />
      <h2 class="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-4">
        One System. Many Uses.
      </h2>
      <p class="text-sm font-semibold text-slate-700 mb-4">Use it for:</p>
      <div class="flex flex-wrap gap-2 mb-6">
        <span class="bg-[#07152E] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold">Work</span>
        <span class="bg-[#07152E] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold">Business</span>
        <span class="bg-[#07152E] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold">Research</span>
        <span class="bg-[#07152E] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold">Teaching</span>
        <span class="bg-[#07152E] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold">Training</span>
        <span class="bg-[#07152E] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold">Clients</span>
        <span class="bg-[#07152E] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold">Conferences</span>
        <span class="bg-[#07152E] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold">Proposals</span>
      </div>
      <p class="text-base font-bold text-navy border-l-4 border-accent pl-4 py-1">
        You are not buying another presentation template. You are learning a workflow you can reuse.
      </p>
    </div>
  </section>

  <!-- 9. Pricing + Guarantee -->
  <section id="pricing" class="py-16 md:py-24 bg-slate-50 text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-200">
    <div class="max-w-3xl mx-auto">
      <div class="bg-white rounded-3xl border-2 border-accent shadow-2xl p-6 sm:p-10 mb-12 text-left">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
          Get the DigiBeloved AI Presentation System
        </h2>
        <p class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4">You receive:</p>
        <ul class="space-y-2 mb-6 text-sm sm:text-base font-semibold text-slate-800">
          <li>✓ AI Presentation Playbook</li>
          <li>✓ Dynamic Presentation Skill</li>
          <li>✓ Prompt &amp; Context Pack</li>
          <li>✓ Four Workflow Quick Guide</li>
          <li>✓ Freelancer Starter Toolkit</li>
        </ul>
        <div class="border-t border-slate-100 pt-6 mb-6">
          <div class="text-3xl sm:text-5xl font-extrabold text-navy font-sans tracking-tight mb-1">
            ₦19,900 / $29
          </div>
          <p class="text-xs sm:text-sm font-bold text-accent bg-[#07152E] inline-block px-3 py-1 rounded-md mb-2">
            Founding Launch Price
          </p>
          <p class="text-xs sm:text-sm text-slate-500">Planned standard price: <strong class="line-through">₦29,900 / $49</strong></p>
        </div>
        <a href="${selarUrl}" class="w-full inline-flex items-center justify-center bg-accent text-navy py-4 px-6 rounded-xl font-extrabold text-base sm:text-lg tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.3)] mb-3">
          <span>GET THE AI PRESENTATION SYSTEM</span>
        </a>
      </div>
      <div class="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-left shadow-xs">
        <h3 class="text-lg sm:text-xl font-extrabold text-navy mb-2">7-Day Implementation Guarantee</h3>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          You should receive the product and resources described on this page. If the purchased product is materially different from what was promised, you cannot access your resources, or DigiBeloved cannot deliver what was purchased, contact us within seven days according to the stated refund policy.
        </p>
      </div>
    </div>
  </section>

  <!-- 10. FAQ -->
  <section class="py-16 md:py-24 bg-white text-navy px-4 sm:px-6 lg:px-8 border-b border-slate-100">
    <div class="max-w-3xl mx-auto text-left">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div class="space-y-6">
        <div class="border-b border-slate-200 pb-4">
          <h3 class="text-base sm:text-lg font-bold text-navy mb-1">Do I need to be a designer?</h3>
          <p class="text-sm sm:text-base text-slate-600">No. The Dynamic Skill provides professional presentation principles while you provide the content and context.</p>
        </div>
        <div class="border-b border-slate-200 pb-4">
          <h3 class="text-base sm:text-lg font-bold text-navy mb-1">Can I keep my wording exactly?</h3>
          <p class="text-sm sm:text-base text-slate-600">Yes. Use <strong>Verbatim Mode</strong>.</p>
        </div>
        <div class="border-b border-slate-200 pb-4">
          <h3 class="text-base sm:text-lg font-bold text-navy mb-1">What if I do not have content?</h3>
          <p class="text-sm sm:text-base text-slate-600">Use <strong>Workflow B</strong>.</p>
        </div>
        <div class="border-b border-slate-200 pb-4">
          <h3 class="text-base sm:text-lg font-bold text-navy mb-1">What if my presentation already exists?</h3>
          <p class="text-sm sm:text-base text-slate-600">Use <strong>Workflow D</strong>.</p>
        </div>
        <div class="border-b border-slate-200 pb-4">
          <h3 class="text-base sm:text-lg font-bold text-navy mb-1">Can I use ChatGPT, Gemini, Claude, Grok, or other AI tools?</h3>
          <p class="text-sm sm:text-base text-slate-600">The methodology is portable, although file-generation and editing capabilities vary between platforms.</p>
        </div>
        <div>
          <h3 class="text-base sm:text-lg font-bold text-navy mb-1">Can I use this for client work?</h3>
          <p class="text-sm sm:text-base text-slate-600">Yes, subject to the product licence and the terms of the AI platforms you use.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 11. Final Close -->
  <section class="py-20 md:py-28 bg-[#07152E] text-white px-4 sm:px-6 lg:px-8 text-center">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
        Stop Starting Every Presentation From Scratch.
      </h2>
      <div class="inline-block text-left bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
        <p class="text-sm sm:text-base font-semibold text-slate-300 mb-3">Give your content:</p>
        <p class="text-base sm:text-lg font-bold text-accent mb-1">• Better structure.</p>
        <p class="text-base sm:text-lg font-bold text-accent mb-1">• Better visual direction.</p>
        <p class="text-base sm:text-lg font-bold text-accent">• A repeatable workflow.</p>
      </div>
      <p class="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-8">
        Create Better. Work Faster. Stay in Control.
      </p>
      <div class="flex flex-col items-center justify-center gap-3">
        <a href="${selarUrl}" class="inline-flex items-center justify-center bg-accent text-navy px-10 py-5 rounded-xl font-extrabold text-lg sm:text-xl tracking-wide hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_12px_30px_rgba(255,209,0,0.3)]">
          <span>GET THE AI PRESENTATION SYSTEM</span>
        </a>
        <span class="text-sm font-bold text-accent font-mono">₦19,900 / $29</span>
      </div>
    </div>
  </section>

  <!-- Minimal Footer -->
  <footer class="w-full bg-[#07152E] text-slate-400 py-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
      <div class="flex items-center space-x-2">
        <img src="/logo.jpg" alt="DigiBeloved Logo" width="24" height="24" class="w-6 h-6 rounded object-contain" />
        <span>&copy; ${new Date().getFullYear()} DigiBeloved. All rights reserved.</span>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-5 text-slate-400">
        <a href="/contact" class="hover:text-white">Privacy Policy</a>
        <span>•</span>
        <a href="/contact" class="hover:text-white">Terms</a>
        <span>•</span>
        <a href="#pricing" class="hover:text-white">Refund Policy</a>
        <span>•</span>
        <a href="/contact" class="hover:text-white">Support</a>
      </div>
    </div>
  </footer>
</div>
`;

// Inject into template root for /ai-presentation-system
const finalHtml = template.replace('<div id="root"></div>', `<div id="root">${staticContent}</div>`);

// Output destination 1: dist/ai-presentation-system/index.html
const targetDir = path.join(distDir, "ai-presentation-system");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}
fs.writeFileSync(path.join(targetDir, "index.html"), finalHtml, "utf-8");

// Output destination 2: dist/ai-presentation-system.html
fs.writeFileSync(path.join(distDir, "ai-presentation-system.html"), finalHtml, "utf-8");

// Output destination 3: dist/free-blueprint/index.html
const bpDir = path.join(distDir, "free-blueprint");
if (!fs.existsSync(bpDir)) {
  fs.mkdirSync(bpDir, { recursive: true });
}
fs.writeFileSync(path.join(bpDir, "index.html"), template, "utf-8");

// Output destination 4: dist/free-blueprint/thank-you/index.html
const tyDir = path.join(bpDir, "thank-you");
if (!fs.existsSync(tyDir)) {
  fs.mkdirSync(tyDir, { recursive: true });
}
fs.writeFileSync(path.join(tyDir, "index.html"), template, "utf-8");

// Output destination 5: dist/404.html (Cloudflare Pages SPA fallback)
fs.writeFileSync(path.join(distDir, "404.html"), fs.readFileSync(indexPath, "utf-8"), "utf-8");

console.log("Successfully pre-rendered static HTML for /ai-presentation-system, /free-blueprint, and /free-blueprint/thank-you!");
