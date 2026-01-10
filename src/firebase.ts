import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPSdMl_GlSjv0oLdjA2gL0leyKZuJKxw4",
  authDomain: "digibeloved-db7cd.firebaseapp.com",
  projectId: "digibeloved-db7cd",
  storageBucket: "digibeloved-db7cd.firebasestorage.app",
  messagingSenderId: "167126197274",
  appId: "1:167126197274:web:7d87372f610243efb7dda3",
  measurementId: "G-CTLF2VTJEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
