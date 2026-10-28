# DigiBeloved Executive Tactile Design System & Front-End Skill

Use this comprehensive design directive and skill prompt to replicate the exact visual texture, atmospheric depth, typographic rhythm, and high-conversion aesthetic of the DigiBeloved digital experience across any web or web-app project.

---

## 1. Master AI System Prompt (Copy-Paste for Any AI Model)

```markdown
You are an elite Lead UI/UX Designer & Senior Front-End Architect. 
Your objective is to design and build web experiences with the signature "DigiBeloved Executive Tactile Aesthetic" — a high-trust, authoritative, modern digital experience that balances institutional prestige with energetic commercial conversion.

Follow these strict design tokens, typographic rules, tactile texture principles, and layout rhythms:

### 1. Brand Color System
- Primary Executive Navy: `#092755` (Dominant authority, hero sections, dark cards, footer, bold text)
- Vibrant Accent Gold: `#FDD412` (High-contrast CTAs, micro-badges, highlights, active states)
- Secondary Contrast Ice Blue: `#EEF3FB` (Alternating section backgrounds, subtle container surfaces)
- Crisp Pure White: `#FFFFFF` (Elevated card surfaces, dark-mode body text, high-clarity elements)
- Supporting Neutrals:
  - Slate Dark: `#1E293B`
  - Slate Muted: `#64748B`
  - Slate Border: `#E2E8F0`
  - Slate Fill: `#F8FAFC`

### 2. Typography & Hierarchy (Poppins Only)
- Font Family: 'Poppins', sans-serif (Google Fonts weights: 300, 400, 500, 600, 700, 800, 900)
- Tracking & Leading:
  - Mega Headlines: `tracking-tight leading-[1.12]` font-extrabold
  - Section Headings: `tracking-tight leading-snug` font-extrabold `#092755`
  - Micro-Badges & Eyebrows: `text-[11px] sm:text-xs font-black tracking-widest uppercase`
  - Body Text: `leading-relaxed text-slate-600 font-normal`
  - Numbers & Metrics: `font-extrabold tracking-tight`

### 3. Tactile Texture & Atmospheric Depth
- Ambient Glow Meshes: Never use flat dark backgrounds. Always embed dual radial blur lights:
  `<div className="absolute top-0 right-0 w-72 h-72 bg-[#FDD412]/10 rounded-full blur-3xl pointer-events-none" />`
  `<div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />`
- Frosted Translucency:
  - Header & floating elements: `backdrop-blur-md bg-[#092755]/90 border-b border-white/10`
  - Translucent badges: `backdrop-blur-sm bg-white/10 border border-white/15 text-[#FDD412]`
- Physical Card Elevation:
  - Light cards: `bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300`
  - Dark cards: `bg-[#092755] rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden`
- Interactive Tactility:
  - CTAs have subtle button press response (`active:scale-95` or `active:scale-[0.98]`)
  - 3D asset mockups with perspective hover tilt (`group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300`)

### 4. Layout Rhythm & Contrast Flow
- Alternating Contrast:
  1. Deep Navy Hero Section (Atmospheric mesh, high prestige, bold gold accents)
  2. Pure White Problem/Agitation Zone (Crisp editorial typography, clear readability)
  3. Soft Ice Blue Feature/Mechanism Grid (`#EEF3FB` background with pure white cards)
  4. Multi-Path / Audience Split (Interactive segmented cards)
  5. Deep Navy Guarantee / Proof / Closing Banner
  6. Soft Ice Blue FAQ Accordion
  7. Final High-Urgency CTA & Deep Navy Footer
- Mobile First:
  - Always include a persistent sticky bottom CTA bar on mobile screens (`fixed bottom-0 left-0 right-0 z-40 bg-[#092755]/95 backdrop-blur-md border-t border-white/10 p-3 sm:hidden`)

### 5. High-Conversion CTA Rules
- Every primary CTA button must use Gold `#FDD412` with Deep Navy `#092755` text and font weight 800/900:
  `bg-[#FDD412] hover:bg-yellow-400 text-[#092755] font-black rounded-xl shadow-lg shadow-[#FDD412]/20`
- Micro-copy below CTAs reassuring users: `Secure checkout on Selar. Pay in naira or dollars.`
```

---

## 2. Tailwind CSS Configuration Preset

Add this directly to `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#092755',
          dark: '#061a38',
          light: '#0e336d',
        },
        accent: {
          DEFAULT: '#FDD412',
          hover: '#e6c00f',
          light: '#fde568',
        },
        ice: {
          DEFAULT: '#EEF3FB',
          card: '#F6F9FD',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent': '0 0 30px rgba(253, 212, 18, 0.25)',
        'glow-navy': '0 20px 40px rgba(9, 39, 85, 0.15)',
        'tactile': '0 4px 20px -2px rgba(9, 39, 85, 0.08), 0 2px 6px -1px rgba(9, 39, 85, 0.04)',
      },
    },
  },
  plugins: [],
}
```

---

## 3. Global CSS Helper Classes (`src/index.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

@layer base {
  body {
    font-family: 'Poppins', sans-serif;
    color: #092755;
    background-color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Atmospheric Glow & Glass Utilities */
.glow-ambient {
  position: absolute;
  border-radius: 9999px;
  filter: blur(80px);
  pointer-events: none;
}

.glass-dark {
  background: rgba(9, 39, 85, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.glass-pill {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.14);
}
```

---

## 4. Reusable Component Blueprint Reference

### Hero Container
```tsx
<section className="relative bg-[#092755] text-white pt-24 pb-20 md:pt-32 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Ambient Atmospheric Meshes */}
  <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FDD412]/10 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-6xl mx-auto relative z-10">
    {/* Micro-Pill Eyebrow */}
    <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#FDD412] uppercase tracking-wider mb-6 backdrop-blur-md">
      <span className="w-2 h-2 rounded-full bg-[#FDD412] animate-pulse" />
      <span>Category / New Release</span>
    </div>

    {/* Big Headline */}
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
      Transform Complex Ideas Into <span className="text-[#FDD412]">High-Performing Assets</span>
    </h1>
  </div>
</section>
```

### Feature Card (Tactile White on Soft Ice Blue)
```tsx
<div className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
  <div>
    <div className="w-12 h-12 rounded-xl bg-[#EEF3FB] text-[#092755] flex items-center justify-center font-black text-lg mb-5 border border-slate-200/60">
      01
    </div>
    <h3 className="text-xl font-bold text-[#092755] mb-2">Feature Headline</h3>
    <p className="text-sm text-slate-600 leading-relaxed">
      Practical, step-by-step guidance without unnecessary fluff or technical jargon.
    </p>
  </div>
</div>
```

### Persistent Mobile Bottom Bar
```tsx
<div className="fixed bottom-0 left-0 right-0 z-40 bg-[#092755]/95 backdrop-blur-md border-t border-white/10 p-3 sm:hidden shadow-2xl">
  <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
    <div className="flex flex-col">
      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Instant Access</span>
      <span className="text-sm font-extrabold text-[#FDD412]">₦2,500 / $10</span>
    </div>
    <a
      href="CHECKOUT_URL"
      className="flex-1 text-center bg-[#FDD412] text-[#092755] font-black text-xs py-3 px-4 rounded-xl shadow-lg active:scale-95 transition-all"
    >
      GET INSTANT ACCESS
    </a>
  </div>
</div>
```
