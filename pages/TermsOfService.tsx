import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileCheck, ShieldAlert, Award, AlertCircle } from "lucide-react";

const TermsOfService: React.FC = () => {
  useEffect(() => {
    document.title = "Terms of Service | DigiBeloved";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#092755] font-poppins selection:bg-[#FDD412] selection:text-[#092755]">
      {/* Header Banner */}
      <section className="bg-[#092755] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-[#FDD412] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Last updated: October 2026. Please read these terms carefully before accessing DigiBeloved products, playbooks, coaching sessions, and software services.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-slate-700 leading-relaxed space-y-10 text-sm sm:text-base">
        
        {/* Core summary */}
        <div className="bg-[#EEF3FB] border border-[#092755]/15 rounded-2xl p-6 sm:p-8 space-y-3">
          <h2 className="text-lg font-bold text-[#092755] flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            Overview of Terms
          </h2>
          <p className="text-sm text-slate-700">
            By purchasing digital guides (such as <em>7 AI Cheat Codes</em>), registering for masterclasses, or engaging our consulting services, you agree to be bound by these Terms of Service. All digital materials are for your personal or internal business implementation.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            1. Digital Products Delivery &amp; Access
          </h2>
          <p>
            Upon successful payment via Selar, you will receive immediate access to download your digital product (such as the 20-page <em>7 AI Cheat Codes Playbook</em> in PDF format). A secure download link is also sent to the email address provided at checkout.
          </p>
          <p>
            You are responsible for providing an accurate and active email address during checkout so Selar can deliver your files promptly.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            2. Intellectual Property &amp; License
          </h2>
          <p>
            All content, including cheat code prompts, step-by-step screen workflows, presentation playbooks, design assets, and video guides, are the copyrighted intellectual property of DigiBeloved.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li><strong>Permitted:</strong> You may use the prompts, templates, and workflows for your personal projects, your internal business operations, or to provide services to your paying clients.</li>
            <li><strong>Prohibited:</strong> You may not resell, redistribute, publically upload, republish, or bundle the actual guide files, PDF text, or instructional materials to third parties without prior written consent.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            3. 1-on-1 Coaching &amp; Live Implementation Sessions
          </h2>
          <p>
            For coaching sessions (such as the 60-Minute 1-on-1 AI Workflow or Service Session):
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>Sessions are conducted online (via Google Meet / Zoom).</li>
            <li>Appointments must be booked through the provided booking calendar link following checkout.</li>
            <li>Rescheduling requires at least 24 hours notice. Due to limited weekly client slots, missed appointments without notice are non-refundable.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            4. Guarantee &amp; Refund Policy
          </h2>
          <p>
            We take pride in delivering exceptionally practical, actionable education. For the <em>7 AI Cheat Codes Playbook</em>, we offer a <strong>7-Day Time-Saver Guarantee</strong>:
          </p>
          <p>
            Try the first cheat code within 7 days of purchase. If it does not save you time, simply email us at <a href="mailto:digibeloved@gmail.com" className="text-[#092755] font-bold underline">digibeloved@gmail.com</a> with your Selar receipt within 7 calendar days of purchase, and we will issue a full refund.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            5. Earnings &amp; Results Disclaimer
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900 space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>Earnings Disclaimer</span>
            </div>
            <p>
              Earning ideas, client service suggestions, and business models shown in our guides and on this website are illustrative examples, not promises or guarantees of income. What you earn depends entirely on your own effort, the market you target, your communication, and who you reach. DigiBeloved makes no income promises or get-rich-quick claims.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            6. Third-Party AI Tools Disclaimer
          </h2>
          <p>
            The cheat codes demonstrate the use of third-party artificial intelligence tools (such as ChatGPT, Claude, etc.). AI models and web interfaces are updated frequently by their respective makers. While the underlying prompt strategies and mental frameworks remain consistent, user interface buttons and features may shift slightly over time.
          </p>
          <p>
            DigiBeloved is an independent education and consulting firm and is not affiliated with, endorsed by, or sponsored by OpenAI, Anthropic, Google, or Microsoft.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#092755]">
            7. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These Terms shall be governed and interpreted in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Abuja, Federal Capital Territory, Nigeria.
          </p>
        </section>

        {/* Small Print Footer Banner */}
        <div className="pt-8 border-t border-slate-200 text-xs text-slate-500 leading-relaxed bg-slate-50 p-4 rounded-xl">
          <p className="font-semibold text-slate-600 mb-1">Important Notice &amp; Disclaimer:</p>
          <p>
            Earning ideas are examples, not promises. Results depend on your work and who you reach. AI tools change often, so always check results before you send, sign or pay. This guide is not affiliated with any AI company.
          </p>
        </div>

      </main>
    </div>
  );
};

export default TermsOfService;
