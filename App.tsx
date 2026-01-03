import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesHub from './pages/ServicesHub';
import DigitalSolutions from './pages/DigitalSolutions';
import Training from './pages/Training';
import Consultation from './pages/Consultation';
import About from './pages/About';
import Contact from './pages/Contact';
import PromptPolisher from './pages/PromptPolisher';

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
        <Route path="/services/consulting" element={<Layout><Consultation /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/tools/prompt-polisher" element={<Layout><PromptPolisher /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;