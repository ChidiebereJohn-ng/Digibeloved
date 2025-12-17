# DigiBeloved - Intelligence, Applied.

## 🏢 Brand Identity
**DigiBeloved** is an institution dedicated to **Applied AI**. Based in No 3 Maitama, Abuja, Nigeria, we bridge the gap between complex digital intelligence and practical human application.

### Visual Language
- **Primary Color**: Navy Blue (`#0D244F`) - Represents "Digi" (Tech/Logic).
- **Accent Color**: Bright Yellow (`#FFD100`) - High-priority CTAs.
- **Aesthetic**: Minimalist, Professional, "Bento Grid" layouts.

## 🛠️ Technical Stack (Target Environment)
- **Framework**: React 18 (Vite)
- **Language**: TypeScript
- **Database**: Firebase Firestore
- **Hosting**: Firebase Hosting (Spark Plan)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts

## 📁 Folder Structure (Post-Migration)
The AI should ensure the project follows this standard React structure:
```text
/
├── public/              # Static assets (logo, hero video)
├── src/
│   ├── components/      # Layout.tsx, SchemaScript.tsx
│   ├── pages/           # Home, Services, Training, Contact, etc.
│   ├── firebase.ts      # Firebase config and exports
│   ├── types.ts         # TS Interfaces
│   ├── App.tsx          # Router
│   └── index.tsx        # Entry point
├── package.json         # Scripts and Dependencies
└── PLAN.md              # Active task tracking
```

## 📝 Instructions for Firebase Studio
1. **Source Control**: This repo is intended to be linked to GitHub.
2. **Environment Variables**: Use `.env` files for API keys (Google Maps, etc.).
3. **Database Security**: Configure Firestore rules to allow `write` for the contact form collection.
