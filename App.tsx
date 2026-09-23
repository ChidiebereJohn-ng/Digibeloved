import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DataAnalysis from './pages/DataAnalysis';
import AIAutomation from './pages/AIAutomation';
import CustomSoftware from './pages/CustomSoftware';
import CorporateAITraining from './pages/CorporateAITraining';
import Academy from './pages/Academy';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AISkillStackPost from './pages/AISkillStackPost';
import PromptPolisher from './pages/PromptPolisher';
import CourseDetail from './pages/CourseDetail';
import AIGraphicDesignCourse from './pages/AIGraphicDesignCourse';
import AIPresentationSystem from './pages/AIPresentationSystem';
import FreeBlueprint from './pages/FreeBlueprint';
import BlueprintThankYou from './pages/BlueprintThankYou';
import Products from './pages/Products';

import {
  captureAndPersistUtmParams,
  trackPageView,
} from './src/services/metaPixel';

// Scroll to top, capture UTMs, and fire PageView on route change
const NavigationTracker = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);

    // 1. Capture and persist UTMs / fbclid across the funnel
    captureAndPersistUtmParams();

    // 2. Track SPA route change in Meta Pixel
    trackPageView(pathname);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavigationTracker />
      <Routes>
        {/* Primary Repositioned Core Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        
        {/* Done-for-You Money Pages */}
        <Route path="/data-analysis" element={<Layout><DataAnalysis /></Layout>} />
        <Route path="/ai-automation" element={<Layout><AIAutomation /></Layout>} />
        <Route path="/custom-software-development" element={<Layout><CustomSoftware /></Layout>} />
        
        {/* Organizational Capability */}
        <Route path="/ai-training-for-organizations" element={<Layout><CorporateAITraining /></Layout>} />
        
        {/* Individual Learning & Proof */}
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/academy" element={<Layout><Academy /></Layout>} />
        <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
        <Route path="/case-studies/:id" element={<Layout><CaseStudies /></Layout>} />
        
        {/* Conversion & Authority */}
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/book" element={<Layout><Contact /></Layout>} />
        <Route path="/insights" element={<Layout><Blog /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/ai-skill-stack-2026" element={<Layout><AISkillStackPost /></Layout>} />
        
        {/* Utilities & Individual Courses */}
        <Route path="/tools/prompt-polisher" element={<Layout><PromptPolisher /></Layout>} />
        <Route path="/prompt-polisher" element={<Layout><PromptPolisher /></Layout>} />
        <Route path="/courses/ai-graphic-design" element={<Layout><AIGraphicDesignCourse /></Layout>} />
        <Route path="/services/training/:id" element={<Layout><CourseDetail /></Layout>} />
        <Route path="/academy/:id" element={<Layout><CourseDetail /></Layout>} />
        
        {/* Preserved High-Converting Lead Funnels */}
        <Route path="/ai-presentation-system" element={<AIPresentationSystem />} />
        <Route path="/free-blueprint" element={<FreeBlueprint />} />
        <Route path="/free-blueprint/thank-you" element={<BlueprintThankYou />} />

        {/* Backwards-Compatible Legacy Redirects */}
        <Route path="/services" element={<Navigate to="/" replace />} />
        <Route path="/services/solutions" element={<Navigate to="/custom-software-development" replace />} />
        <Route path="/services/training" element={<Navigate to="/ai-training-for-organizations" replace />} />
        <Route path="/services/consulting" element={<Navigate to="/contact" replace />} />
        
        {/* Catch-all Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;