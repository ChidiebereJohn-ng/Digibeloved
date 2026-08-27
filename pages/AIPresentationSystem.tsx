import React, { useEffect } from "react";
import SalesHeader from "../components/sales/SalesHeader";
import HeroV2 from "../components/sales/HeroV2";
import ProblemV2 from "../components/sales/ProblemV2";
import MechanismV2 from "../components/sales/MechanismV2";
import ContentControlV2 from "../components/sales/ContentControlV2";
import WorkflowsV2 from "../components/sales/WorkflowsV2";
import ProofV2 from "../components/sales/ProofV2";
import OfferStackV2 from "../components/sales/OfferStackV2";
import MonetizationV2 from "../components/sales/MonetizationV2";
import PricingGuaranteeV2 from "../components/sales/PricingGuaranteeV2";
import FAQV2 from "../components/sales/FAQV2";
import FinalCloseV2 from "../components/sales/FinalCloseV2";
import MinimalFooter from "../components/sales/MinimalFooter";
import StickyMobileCta from "../components/sales/StickyMobileCta";
import { trackSalesEvent } from "../src/salesAnalytics";

const AIPresentationSystem: React.FC = () => {
  useEffect(() => {
    // 1. Page Title
    document.title =
      "Turn Your Content Into Professional PowerPoint Presentations With AI | DigiBeloved";

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Use the DigiBeloved Dynamic Presentation Skill + four practical workflows to turn your content, ideas, visual inspiration, or existing slides into professional presentations using AI."
    );

    // 3. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://digibeloved.com/ai-presentation-system");

    // 4. Schema.org Product Structured Data
    const scriptId = "product-schema-ai-presentation";
    let schemaScript = document.getElementById(scriptId);
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = scriptId;
      schemaScript.setAttribute("type", "application/ld+json");
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "DigiBeloved AI Presentation System",
        image: "https://digibeloved.com/playbook-cover.png",
        description:
          "Use the DigiBeloved Dynamic Presentation Skill + four practical workflows to turn your content, ideas, visual inspiration, or existing slides into professional presentations using AI.",
        brand: {
          "@type": "Brand",
          name: "DigiBeloved",
        },
        offers: {
          "@type": "Offer",
          url: "https://selar.com/7q8715st85",
          priceCurrency: "USD",
          price: "29",
          availability: "https://schema.org/InStock",
        },
      });
      document.head.appendChild(schemaScript);
    }

    // Scroll to top on load
    window.scrollTo(0, 0);

    // Analytics: track sales page view
    trackSalesEvent("sales_page_view");
  }, []);

  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-accent selection:text-navy">
      {/* Minimal Brand Identifier (Zero Navigation) */}
      <SalesHeader />

      {/* 1. Hero (Above the Fold) */}
      <HeroV2 />

      {/* 2. Problem: You Already Have the Hard Part */}
      <ProblemV2 />

      {/* 3. AI / New Mechanism: Can't I Just Ask AI? + The Equation */}
      <MechanismV2 />

      {/* 4. Content Control: Verbatim / Refine / Optimize */}
      <ContentControlV2 />

      {/* 5. Four Workflows A–D */}
      <WorkflowsV2 />

      {/* 6. Before/After and Product Proof (+ Mid-Page CTA) */}
      <ProofV2 />

      {/* 7. Offer Stack: 5 Core Deliverables */}
      <OfferStackV2 />

      {/* 8. Short Monetization Section: Commercial Services & Many Uses */}
      <MonetizationV2 />

      {/* 9. Pricing (₦19,900 / $29) + 7-Day Implementation Guarantee */}
      <PricingGuaranteeV2 />

      {/* 10. Frequently Asked Questions */}
      <FAQV2 />

      {/* 11. Final Close & Primary CTA */}
      <FinalCloseV2 />

      {/* Minimal Legal Footer */}
      <MinimalFooter />

      {/* Restrained Sticky Mobile Purchase CTA */}
      <StickyMobileCta />
    </div>
  );
};

export default AIPresentationSystem;
