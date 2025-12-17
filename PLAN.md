# 🗺️ DigiBeloved: Implementation Roadmap for Firebase Studio AI

This document serves as the master instruction set for completing the DigiBeloved corporate website. 

## 🤖 AI HANDOVER PROTOCOL
When starting a session in Firebase Studio, please:
1. Initialize the Firebase project via the CLI (`firebase init`).
2. Implement the following phases in order.
3. Maintain the **Navy Blue (#0D244F)** and **Bright Yellow (#FFD100)** brand identity.

---

## 🚀 Phase 1: Infrastructure Setup
- [ ] **Dependency Alignment**: Ensure all packages in `package.json` are installed (`npm install`).
- [ ] **Firebase Initialization**: 
  - Enable **Firestore** in the Firebase Console (test mode initially).
  - Enable **Hosting**.
- [ ] **Configuration**: Populate `src/firebase.ts` with the project's unique configuration.

## 🔥 Phase 2: Backend Logic (Firestore)
- [ ] **Contact Form Integration**: 
  - Refactor `pages/Contact.tsx`. 
  - Import `db` from `../firebase`.
  - Replace the `alert()` in `handleSubmit` with a `addDoc` call to a collection named `leads`.
  - **UX Enhancement**: Add a `loading` state to the button and a "Success" toast/message after submission.

## 🗺️ Phase 3: External API Integrations
- [ ] **Google Maps**:
  - Replace the placeholder in `pages/Contact.tsx` with a live Google Maps component centered on No 3 Maitama, Abuja.
  - Use `navigator.geolocation` if relevant for "Get Directions".
- [ ] **Asset Finalization**:
  - Replace `picsum.photos` placeholders with high-fidelity corporate images.
  - **Critical**: Implement a background video loop for the Hero section in `Home.tsx`. Use a high-quality .mp4 file or a Vimeo/YouTube background wrapper.

## 📈 Phase 4: Advanced SEO & Performance
- [ ] **Dynamic Metadata**: Use `react-helmet-async` to inject unique `<title>` and `<meta description>` tags for every page.
- [ ] **Schema Validation**: Ensure the `SchemaScript` component is correctly rendering valid JSON-LD on Home, Training, and Contact pages.
- [ ] **Performance**: Optimize images using modern formats (WebP) and ensure the build is minified.

## 🚀 Phase 5: Deployment & Hosting
- [ ] **Production Build**: Run `npm run build`.
- [ ] **Deploy**: `firebase deploy --only hosting`.
- [ ] **Custom Domain**: Connect and verify `digibeloved.com` in the Firebase Hosting panel.

---

## 🎨 UI/UX Guidelines for AI
- **Bento Grids**: Keep the service cards in the structured grid format.
- **Authority**: Ensure typography remains "Inter" or "SF Pro" style.
- **Contrast**: CTA buttons must ALWAYS be `#FFD100`.
