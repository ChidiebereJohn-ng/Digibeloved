# The Tactile-Atmospheric UI Master Prompt
### Universal Design System & Visual Texture Directive (Palette- & Architecture-Agnostic)

Use this prompt on **any future project** regardless of the brand colors, industry, or layout structure. It directs the AI to engineer that exact high-end, tangible, polished "feel" onto any custom color palette and architecture you choose.

---

```markdown
Act as a Principal Design Technologist and World-Class Front-End Craftsperson. 
Your primary goal is to produce a website that possesses the "Tactile-Atmospheric Craft Aesthetic" — a sensory, high-trust, physical digital feel that combines institutional authority with modern software elegance (similar to Linear, Apple, and bespoke editorial fintech).

Regardless of what color palette, fonts, or layout architecture this project uses, you MUST enforce the following physical texture, lighting, tactile, and typographic craftsmanship rules:

---

### 1. Volumetric Lighting & Atmospheric Texture (Kill Flatness)
- Never allow large sections or backgrounds to exist as flat, sterile solid colors.
- Ambient Light Fields: On deep/dark sections, always embed dual diffused radial light meshes in the background:
  - Top corner: `<div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--accent-color)]/10 rounded-full blur-3xl pointer-events-none" />`
  - Opposite corner: `<div className="absolute bottom-10 left-10 w-80 h-80 bg-[var(--ambient-color)]/10 rounded-full blur-3xl pointer-events-none" />`
- Optical Noise / Depth: If dark, use subtle glow diffusion. If light, use a delicate, tinted surface background (5% tint) so pure white foreground cards pop forward with real dimension.

---

### 2. Physicality, Micro-Borders & Tangible Elevation
- Hairline Light-Catching Borders: Every card, modal, or container must have a 1px border that catches light:
  - On dark surfaces: `border border-white/10` or `border-white/15` (gives a milled glass edge).
  - On light surfaces: `border border-slate-200/80` (never harsh dark outlines; soft, crisp boundary).
- Multi-Layered Drop Shadows:
  - Rest state: `shadow-sm` or `shadow-md` for natural groundedness.
  - Hover state: Lift slightly with `hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out`.
- Restrained Glassmorphism:
  - Floating navbars and sticky elements: `backdrop-blur-md bg-[surface-color]/90 border-b border-white/10`.
  - Micro-eyebrow pills: `backdrop-blur-sm bg-white/10 border border-white/15 text-[accent]`.

---

### 3. Typographic Texture & Hierarchy Rhythm
- High-Contrast Scale:
  - Large display headlines: tight tracking (`tracking-tight`), compact leading (`leading-[1.12]` to `leading-[1.2]`), and heavyweight typography (`font-extrabold` or `font-black`).
  - Micro-badges / Eyebrows: Ultra-crisp, small (`text-[10px]` to `text-xs`), bold/black weight, uppercase, wide letter-spacing (`tracking-widest`), often accented by a live glowing indicator dot.
  - Editorial Body: Generous, comfortable reading height (`leading-relaxed`), medium-contrast neutral text (not stark pure black, but a rich slate/charcoal) so the eye flows effortlessly.

---

### 4. Digital Tangibility (Make Digital Assets Feel Physical)
- Turn abstract digital products (guides, SaaS platforms, services, reports) into tangible artifacts:
  - Use 3D CSS perspective containers or realistic product mockups.
  - Give assets layered drop shadows (`shadow-2xl`) and interactive micro-tilts on container hover (`group-hover:scale-105 group-hover:-rotate-1 transition-all duration-300`).
  - Frame dashboards and software previews in clean browser or device viewports with authentic top-bar controls.

---

### 5. Interactive Tactility & Micro-Haptics
- Buttons must feel physical:
  - Prominent primary CTA button with high-contrast text and a subtle, colored glow shadow (`shadow-lg shadow-[accent]/25`).
  - Active press response: `active:scale-[0.98]` or `active:scale-95` to give a tactile click feedback.
  - Smooth micro-transitions on all interactive states (`transition-all duration-200 ease-out`).
- Persistent Mobile Touchpoint: On mobile screens, always dock a persistent, compact bottom bar in the natural thumb-zone with micro-pricing and an immediate action button (`fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md`).

---

### 6. Alternating Surface Cadence
- Structure page sections in a rhythmic cadence of contrast:
  1. High-prestige, atmospheric dark hero (establishes gravity and cinematic mood).
  2. Crisp, breathable light editorial surface (for effortless readability and proof).
  3. Soft-tinted surface with pure-white elevated cards (creates a physical grid feel).
  4. High-contrast anchor closing section (brings the user back to focused decision-making).

---

Execute all implementations using clean, accessible, mobile-first Tailwind CSS and modern component architecture.
```
