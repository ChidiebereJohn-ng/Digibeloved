import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesHub from './pages/ServicesHub';
import DigitalSolutions from './pages/DigitalSolutions';
import Training from './pages/Training';
import CourseDetail from './pages/CourseDetail';
import Consultation from './pages/Consultation';
import About from './pages/About';
import Contact from './pages/Contact';
import PromptPolisher from './pages/PromptPolisher';
import Blog from './pages/Blog';
import AISkillStackPost from './pages/AISkillStackPost';
import AIGraphicDesignCourse from './pages/AIGraphicDesignCourse';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><ServicesHub /></Layout>} />
        <Route path="/services/solutions" element={<Layout><DigitalSolutions /></Layout>} />
        <Route path="/services/training" element={<Layout><Training /></Layout>} />
        <Route path="/services/training/:id" element={<Layout><CourseDetail /></Layout>} /> {/* Added new route */}
        <Route path="/services/consulting" element={<Layout><Consultation /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/tools/prompt-polisher" element={<Layout><PromptPolisher /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/ai-skill-stack-2026" element={<Layout><AISkillStackPost /></Layout>} />
        <Route path="/courses/ai-graphic-design" element={<Layout><AIGraphicDesignCourse /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;