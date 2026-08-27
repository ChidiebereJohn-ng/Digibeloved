import React, { useEffect } from "react";
import SalesHeader from "../components/sales/SalesHeader";
import SalesHero from "../components/sales/SalesHero";
import TrustStrip from "../components/sales/TrustStrip";
import ProblemSection from "../components/sales/ProblemSection";
import TheProblemIsTheBridge from "../components/sales/TheProblemIsTheBridge";
import AIObjectionSection from "../components/sales/AIObjectionSection";
import DynamicSkillSection from "../components/sales/DynamicSkillSection";
import ContentControlSection from "../components/sales/ContentControlSection";
import WorkflowsSection from "../components/sales/WorkflowsSection";
import BeforeAfterProof from "../components/sales/BeforeAfterProof";
import ContextAdaptationSection from "../components/sales/ContextAdaptationSection";
import NonDesignerSection from "../components/sales/NonDesignerSection";
import UseCasesSection from "../components/sales/UseCasesSection";
import OfferStackSection from "../components/sales/OfferStackSection";
import BenefitsSection from "../components/sales/BenefitsSection";
import OptionComparisonSection from "../components/sales/OptionComparisonSection";
import WhoItIsForSection from "../components/sales/WhoItIsForSection";
import FounderAuthoritySection from "../components/sales/FounderAuthoritySection";
import ProductProofSection from "../components/sales/ProductProofSection";
import SocialProofSection from "../components/sales/SocialProofSection";
import MonetizationSection from "../components/sales/MonetizationSection";
import PricingSection from "../components/sales/PricingSection";
import UrgencySection from "../components/sales/UrgencySection";
import GuaranteeSection from "../components/sales/GuaranteeSection";
import FAQSection from "../components/sales/FAQSection";
import FinalCloseSection from "../components/sales/FinalCloseSection";
import MinimalFooter from "../components/sales/MinimalFooter";
import StickyMobileCta from "../components/sales/StickyMobileCta";
import { trackSalesEvent } from "../src/salesAnalytics";

const AIPresentationSystem: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = "DigiBeloved AI Presentation System | Turn Content Into Professional Slides";

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Turn raw documents, research, and ideas into professional PowerPoint presentations using AI. Master the Dynamic Presentation Skill and four practical workflows."
    );

    // Scroll to top on load
    window.scrollTo(0, 0);

    // Analytics event
    trackSalesEvent("sales_page_view");
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-accent selection:text-navy">
      {/* 1. Minimal Header */}
      <SalesHeader />

      {/* 2. Above The Fold Hero Section */}
      <SalesHero />

      {/* 3. Core Input Trust Strip */}
      <TrustStrip />

      {/* 4. Problem Contrast Section */}
      <ProblemSection />

      {/* 5. Six Presentation Failure Modes */}
      <TheProblemIsTheBridge />

      {/* 6. Addressing The Generic AI Prompt Objection */}
      <AIObjectionSection />

      {/* 7. The Proprietary Solution: Dynamic Presentation Skill */}
      <DynamicSkillSection />

      {/* 8. Content Control: Verbatim, Refine, Optimize */}
      <ContentControlSection />

      {/* 9. The Four Comprehensive Workflows */}
      <WorkflowsSection />

      {/* 10. Visual Transformation Proof & Case Studies */}
      <BeforeAfterProof />

      {/* 11. Context Adaptation Across Audiences */}
      <ContextAdaptationSection />

      {/* 12. Knowledge Transfer for Non-Designers */}
      <NonDesignerSection />

      {/* 13. Day-to-Day Contextual Scenarios */}
      <UseCasesSection />

      {/* 14. Full Stack Product Offer Breakdown */}
      <OfferStackSection />

      {/* 15. Six Transformational Benefits */}
      <BenefitsSection />

      {/* 16. Objective Option Comparison Matrix */}
      <OptionComparisonSection />

      {/* 17. Ten Audience Profiles */}
      <WhoItIsForSection />

      {/* 18. Founder Authority & Institutional Origin */}
      <FounderAuthoritySection />

      {/* 19. Product Proof & Look Inside */}
      <ProductProofSection />

      {/* 20. Social Proof (Hidden until verified) */}
      <SocialProofSection />

      {/* 21. Commercial Monetization Paths & Disclaimers */}
      <MonetizationSection />

      {/* 22. Founding Launch Offer & Pricing */}
      <PricingSection />

      {/* 23. Real Urgency Deadline (Conditional) */}
      <UrgencySection />

      {/* 24. 7-Day Implementation Guarantee */}
      <GuaranteeSection />

      {/* 25. Detailed FAQ Accordion */}
      <FAQSection />

      {/* 26. Final Close & P.S. */}
      <FinalCloseSection />

      {/* 27. Minimal Trust & Legal Footer */}
      <MinimalFooter />

      {/* 28. Floating Sticky Mobile Purchase CTA */}
      <StickyMobileCta />
    </div>
  );
};

export default AIPresentationSystem;
