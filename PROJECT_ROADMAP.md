# DigiBeloved: AI Consulting & Education — Master Architecture & Handover Blueprint

> **Status**: Module 1 Complete · Ready for Modules 2 & 3  
> **Codebase Root**: `c:\Users\User\Desktop\Digibeloved\digibeloved-next`  
> **Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Cloudflare Pages/Workers, Google GenAI SDK (Gemini 3 Pro)

---

## 1. Core Brand & Positioning
- **Brand Identity**: DigiBeloved — AI Consulting & Education firm.
- **Geographic Footprint**: Based in Abuja, Nigeria · Serving Clients & Organizations Globally.
- **Master Value Proposition**: Turn AI curiosity and potential into operational reality: architecting custom agent workflows, building production-grade digital solutions, and training leaders from baseline chatbots to full AI operating systems.
- **Core Revenue Channels**:
  1. **Applied AI Training & Interactive Guides**: Custom curriculum generated via Gemini 3 Pro + Karpathy-style interactive guides (Freemium: Section A free $\to$ Paystack gate $\to$ Sections B, C, D).
  2. **1-on-1 Consultations & Hybrid Masterclasses**:
     - Online: Cal.com free booking + Paystack payment + Google Meet auto-link.
     - Offline: ₦150,000 Package (5 in-person sessions in Abuja + 5 online masterclass sessions + training contract/SLA).
  3. **Custom Digital Solutions (B2B)**: AI Agents, Web Apps, Mobile Apps, and Enterprise Data Analysis/Research.
  4. **Digital Products / Marketplace**: Pre-built tools, prompts, and frameworks.

---

## 2. Completed Work: Module 1 (Design System, Rebrand & Anatomy Brain)
- [x] **Global Layout & Navigation (`src/app/layout.tsx`)**:
  - Rebranded metadata: *"DigiBeloved | AI Consulting & Education"*.
  - Desktop navigation updated: `Applied AI Hub`, `5 Levels of AI`, `Applied AI Training`, `Custom Solutions`, `Marketplace`.
  - Direct CTA linking to `/applied-ai` assessment funnel.
- [x] **Mobile Drawer Navigation (`src/components/MobileMenu.tsx`)**:
  - Mobile-first drawer menu with quick navigation links, responsive layout, and *"Start AI Assessment →"* CTA.
- [x] **The Anatomy Brain Hero Component (`src/components/AnatomyBrainHero.tsx`)**:
  - Inspired by `annnguyentt/anatomy-reveal-skill` (geometry-first, vector/canvas isometric math, <25KB bundle, 60fps on mobile).
  - Dual Mode: **"Assemble Engine"** $\longleftrightarrow$ **"Dissect Anatomy"** (separates 5 cognitive layers along the isometric axis).
  - Real-time touch/mouse 3D drag rotation with synaptic electrical firing pulses and layer highlight inspection (L1 to L5).
- [x] **Homepage Hero Section (`src/app/page.tsx`)**:
  - Updated hero copy, trust metrics, anchor scrolls (`#ai-levels`, `#applied-ai-hub`, `#solutions`, `#marketplace`).
- [x] **Build Verification**: `npm run build` compiled cleanly with 0 TypeScript/Turbopack errors across all 18 routes.

---

## 3. Next Milestone: Modules 2 & 3

### Module 2: The 5 Levels of AI (Mastery Showcase & Video)
- **Component**: `src/components/AILevelsShowcase.tsx` on homepage at `#ai-levels`.
- **The 5 Levels (from Numroid's framework)**:
  1. **Level 1: The Baseline Chatbot User** — Prompting ChatGPT/Claude, zero persistence.
  2. **Level 2: Permanent Memory & Context** — Custom GPTs, system prompts, knowledge grounding/RAG.
  3. **Level 3: Automated Workflow Pipelines** — Multi-step webhook chains via Make, Zapier, n8n.
  4. **Level 4: The AI Agent Manager** — Autonomous subagents, function calling, tool use, supervisor models.
  5. **Level 5: The AI Operating System** — End-to-end autonomous business harnesses, custom Agent SDK architectures.
- **Features**:
  - Embedded responsive player for the Numroid YouTube video (`https://youtu.be/oJVZVyv_4Mo`).
  - Interactive mobile stepper letting visitors tap each level, see *"What you can build"*, *"Tools required"*, and self-diagnose where they currently stand.
  - Conversion bridge: *"Ready to advance to the next level? Calculate your roadmap →"* linking to `/applied-ai`.

### Module 3: Applied AI Hub (Sector | Domain | Tasks)
- **Component & Page**: Hub section on homepage (`#applied-ai-hub`) or dedicated hub at `src/app/applied-ai-hub/page.tsx`.
- **Three-Tier Taxonomy**:
  - **Sectors**: Healthcare, Legal, FinTech, Real Estate, E-commerce, Agriculture, Energy, Education, Public Sector.
  - **Domains**: Marketing & Growth, Internal Operations, Software Engineering, Research & Data Analysis, Customer Support.
  - **Tasks**: Automated Due Diligence, Invoice & Document Intelligence, Autonomous Lead Qualification, Predictive Analytics.
- **Presentation Cards**:
  - Optimized for mobile clarity.
  - Explicit metrics on every card:
    - **Depth of Action**: Exact execution steps the AI takes.
    - **Impact Yielded**: Hours saved, error reduction %, ROI.
    - **Required Tool Stack**: e.g. Gemini 3 Pro, n8n, Antigravity SDK.
- **Curated / Persistent Data**: Stored cleanly in `src/data/use-cases.json` or Cloudflare D1/Firestore with preparation for the `/admin` moderation approval pipeline.

---

## 4. Subsequent Modules (Roadmap)
- **Module 4**: `/admin` Command Center & Curation Engine (Draft review, 1-click approve, master 5 Levels teaching schematic).
- **Module 5**: Applied AI Training Funnel at `/applied-ai` (Bottleneck qualification + Goal Factoring multi-step wizard).
- **Module 6**: Custom Solution Engine (Gemini 3 Pro + user prompt template $\to$ bespoke curriculum generation).
- **Module 7**: Karpathy-Style Interactive Guide + Paystack Paywall + Cal.com 150K Hybrid Consultation Booking.
