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
- [ ] **Asset Finalization**:
  - Replace `picsum.photos` placeholders with high-fidelity corporate images.
  - **Critical**: Implement a background video loop for the Hero section in `Home.tsx`. 

## 🚀 Phase 5: Deployment & Hosting (Terminal Commands)
1. **Prepare Build**:
   ```bash
   npm run build
   ```
2. **Login (if prompted)**:
   ```bash
   firebase login
   ```
3. **Deploy to Spark Plan**:
   ```bash
   firebase deploy --only hosting
   ```
4. **View Live Site**:
   The terminal will provide a "Hosting URL" (e.g., `https://digibeloved-web.web.app`).

---

## 🎨 UI/UX Guidelines for AI
- **Bento Grids**: Keep the service cards in the structured grid format.
- **Authority**: Ensure typography remains "Inter" or "SF Pro" style.
- **Contrast**: CTA buttons must ALWAYS be `#FFD100`.
