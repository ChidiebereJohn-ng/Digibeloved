import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, FileText, CheckCircle2, ArrowRight } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "Privacy Policy | DigiBeloved";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#092755] font-poppins selection:bg-[#FDD412] selection:text-[#092755]">
      {/* Header Banner */}
      <section className="bg-[#092755] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-[#FDD412] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy &amp; Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Last updated: October 2026. Your privacy is paramount. Here is exactly how DigiBeloved collects, protects, and respects your data.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-slate-700 leading-relaxed space-y-10 text-sm sm:text-base">
        
        {/* Quick Highlights */}
        <div className="bg-[#EEF3FB] border border-[#092755]/15 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-[#092755] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            Our Core Privacy Commitments
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• We do not sell, rent, or trade your personal information to third parties.</li>
            <li>• All digital product payments are processed securely through Selar. We never store or see your credit/debit card details.</li>
            <li>• We use standard analytics (Meta Pixel) to improve our educational content and measure campaign effectiveness.</li>
            <li>• You can request deletion of your contact data at any time by emailing us.</li>
          </ul>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            1. Information We Collect
          </h2>
          <p>
            When you visit DigiBeloved (digibeloved.com) or interact with our digital products, services, and educational resources, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>
              <strong>Directly Provided Information:</strong> Your name, email address, phone number, and answers submitted when requesting a consultation, booking a 1-on-1 session, downloading a blueprint, or contacting us.
            </li>
            <li>
              <strong>Order &amp; Purchase Data:</strong> When you purchase digital products (such as the <em>7 AI Cheat Codes Playbook</em> or coaching sessions) through Selar, Selar collects billing details and provides us with your order confirmation details (name, email, order ID, and product purchased) so we can fulfill your order and provide customer support.
            </li>
            <li>
              <strong>Automated Usage Data:</strong> Standard analytics parameters such as device type, browser, IP address, pages visited, time spent, referral sources, and advertising campaign tags (UTM parameters).
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            2. How We Use Your Information
          </h2>
          <p>We use collected data solely for legitimate business and educational purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>To deliver purchased digital guides, action templates, and course materials.</li>
            <li>To schedule and conduct 1-on-1 coaching sessions and client consulting projects.</li>
            <li>To send order receipts, product updates, and customer support communications.</li>
            <li>To monitor website speed, prevent fraudulent activity, and ensure reliable server uptime.</li>
            <li>To evaluate advertising campaign performance via the Meta Pixel.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            3. Payment Processing &amp; Third Parties
          </h2>
          <p>
            We partner with trusted third-party platforms to run our services:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>
              <strong>Selar (selar.co):</strong> Digital product checkout, multi-currency processing (Naira, USD, GBP, etc.), and file delivery. Selar operates under PCI-DSS compliance and industry-standard bank-grade encryption.
            </li>
            <li>
              <strong>Meta (Facebook/Instagram Pixel):</strong> Used for tracking page visits and advertising conversion metrics (such as InitiateCheckout and PageView).
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            4. Cookies and Tracking Technologies
          </h2>
          <p>
            We use essential cookies and analytics tags to preserve session parameters (such as campaign tracking identifiers so you receive the correct offer) and understand how visitors navigate our site. You can disable cookies at any time through your browser settings.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            5. Data Retention &amp; Your Rights
          </h2>
          <p>
            We retain your customer order records only as long as necessary for tax, legal, and operational purposes. You have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>Request a copy of the personal information we hold about you.</li>
            <li>Request correction or deletion of your personal data from our mailing records.</li>
            <li>Unsubscribe at any time from informational emails via the one-click link at the bottom of any email.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            6. Contact DigiBeloved
          </h2>
          <p>
            If you have any questions or wish to exercise your data rights, please contact us:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm space-y-1 font-medium text-slate-800">
            <p><strong>DigiBeloved AI Education &amp; Consulting</strong></p>
            <p>Email: <a href="mailto:digibeloved@gmail.com" className="text-[#092755] font-bold underline">digibeloved@gmail.com</a></p>
            <p>Phone / WhatsApp: <a href="tel:+2348067628656" className="text-[#092755] font-bold underline">+2348067628656</a></p>
            <p>Headquarters: No 3 Maitama, Abuja, Nigeria.</p>
          </div>
        </section>

        {/* Small Print Footer Banner */}
        <div className="pt-8 border-t border-slate-200 text-xs text-slate-500 leading-relaxed bg-slate-50 p-4 rounded-xl">
          <p className="font-semibold text-slate-600 mb-1">Important Notice &amp; Disclaimer:</p>
          <p>
            Earning ideas are examples, not promises. Results depend on your work and who you reach. AI tools change often, so always check results before you send, sign or pay. This guide and website are not affiliated with, endorsed by, or sponsored by any AI company or third-party tool provider.
          </p>
        </div>

      </main>
    </div>
  );
};

export default PrivacyPolicy;
