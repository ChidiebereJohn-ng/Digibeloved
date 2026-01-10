import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

/**
 * INSTRUCTIONS FOR GEMINI AI:
 * 1. Go to Firebase Console -> Project Settings.
 * 2. Copy the Web App configuration.
 * 3. Replace the placeholder values below.
 */
const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "digibeloved-web.firebaseapp.com",
  projectId: "digibeloved-web",
  storageBucket: "digibeloved-web.appspot.com",
  messagingSenderId: "REPLACE_WITH_ID",
  appId: "REPLACE_WITH_APP_ID",
  measurementId: "REPLACE_WITH_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
export const analytics = getAnalytics(app);

// Export Firestore database for use in Contact.tsx
export const db = getFirestore(app);
