import React from 'react';
import { analytics } from '../src/firebase';
import { logEvent } from "firebase/analytics";
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Download, ArrowRight } from 'lucide-react';
import SchemaScript from '../components/SchemaScript';

const Training: React.FC = () => {

  const handleEnrollClick = () => {
    if (analytics) {
      logEvent(analytics, 'begin_checkout', {
        value: 0,
        currency: 'NGN',
        items: [{
          item_id: 'training_general',
          item_name: 'General Training Enrollment'
        }]
      });
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "Applied AI for Business",
        "description": "Turn AI into your best employee. Reclaim 10+ hours a week.",
        "provider": {
          "@type": "Organization",
          "name": "DigiBeloved",
          "sameAs": "https://digibeloved.com"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who offers applied AI training for corporate teams in Abuja?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DigiBeloved serves as the premier provider of Applied AI training for corporate teams in Abuja. We specialize in practical, hands-on workshops designed to upskill workforces in automation, generative AI, and digital efficiency."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer onsite corporate training in Nigeria?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, DigiBeloved offers both onsite corporate training at your office location in Abuja (and across Nigeria) and live sessions at our dedicated training hub."
            }
          },
          {
            "@type": "Question",
            "name": "What is the curriculum for the Applied AI Business course?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our curriculum focuses on 'Business Autopilot Systems'. It covers automating routine tasks, integrating AI into customer service, and using data analysis tools to make faster decisions."
            }
          }
        ]
      }
    ]
  };

  const CourseCard: React.FC<{ title: string, promise: string, outcome: string }> = ({ title, promise, outcome }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-navy hover:shadow-lg transition-all hover:translate-y-[-4px] group h-full flex flex-col shadow-sm">
      <h4 className="text-xl font-bold text-navy mb-3 group-hover:text-navy-light transition-colors">{title}</h4>
      <p className="text-gray-600 text-sm mb-4 flex-grow italic">"{promise}"</p>
      <div className="mt-auto pt-4 border-t border-gray-100">
        <span className="text-xs text-navy uppercase font-bold tracking-wider block mb-1">Key Outcome</span>
        <p className="text-navy font-medium flex items-start">
          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
          {outcome}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-slate-50 min-h-screen">

        {/* Header */}
        <header className="py-24 px-4 text-center bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">The DigiBeloved Academy.</h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              The #1 destination for <strong>Applied AI Training in Abuja</strong>. <br />
              Practical. Interactive. Result-Oriented. Stop guessing and start mastering.
            </p>
          </div>
        </header>

        {/* Media Placeholder: Classroom */}
        <div className="w-full h-96 relative overflow-hidden">
          <img src="https://picsum.photos/seed/class/1920/600" alt="Hands-on Applied AI training session in Abuja" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
            <span className="glass px-8 py-4 rounded-full text-navy font-bold backdrop-blur-md bg-white/80">
              Join our next Workshop in Maitama, Abuja
            </span>
          </div>
        </div>

        {/* Catalog */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="space-y-16">

            {/* Tier 1 */}
            <div>
              <div className="flex items-center mb-8">
                <span className="bg-navy text-white font-bold px-3 py-1 rounded text-sm mr-4">TIER 1</span>
                <h3 className="text-2xl font-bold text-navy">FOR BUSINESS & OPERATIONS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/services/training/ai-research-data" className="block h-full cursor-pointer hover:no-underline">
                  <CourseCard
                    title="Applied AI for Research & Data Analysis"
                    promise="Stop Reading PDF Files One By One. It Is A Waste Of Your Time."
                    outcome="Read 50 Papers In Minutes & Analyze Data Without Coding."
                  />
                </Link>
                <CourseCard
                  title="Applied AI for Agency & Consultancy"
                  promise="Scale service delivery. Stop trading time for money."
                  outcome="Create a 'Client Delivery Automation' pipeline."
                />
              </div>
            </div>

            {/* Tier 2 */}
            <div>
              <div className="flex items-center mb-8">
                <span className="bg-navy text-white font-bold px-3 py-1 rounded text-sm mr-4">TIER 2</span>
                <h3 className="text-2xl font-bold text-navy">FOR CREATORS & MARKETERS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CourseCard
                  title="Applied AI for Content Creation"
                  promise="The 'Infinite Content' Engine. Quality at scale."
                  outcome="Build a repurposing pipeline that turns 1 idea into 20 assets."
                />
                <Link to="/courses/ai-graphic-design" className="block h-full cursor-pointer hover:no-underline">
                  <CourseCard
                    title="AI Powered Graphic Design"
                    promise="Designers who ignore AI will be replaced."
                    outcome="Create professional ads and brand visuals in minutes using Firefly & Gemini."
                  />
                </Link>
              </div>
            </div>

            {/* Tier 3 */}
            <div>
              <div className="flex items-center mb-8">
                <span className="bg-navy text-white font-bold px-3 py-1 rounded text-sm mr-4">TIER 3</span>
                <h3 className="text-2xl font-bold text-navy">FOR BUILDERS & TECHNICAL MINDS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CourseCard
                  title="Applied AI for Building Digital Solutions"
                  promise="You don't need a CTO. You need AI."
                  outcome="Launch a live web app without writing code yourself."
                />
                <CourseCard
                  title="Masters in Generative AI"
                  promise="Total Command. The comprehensive deep-dive into LLMs, strategy, and ethics."
                  outcome="Capstone 'Masterpiece' solution."
                />
              </div>
            </div>

            {/* Tier 4 */}
            <div>
              <div className="flex items-center mb-8">
                <span className="bg-navy text-white font-bold px-3 py-1 rounded text-sm mr-4">TIER 4</span>
                <h3 className="text-2xl font-bold text-navy">SPECIALIZED</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CourseCard
                  title="Applied AI for Educators"
                  promise="Personalize learning. Automate grading. Inspire minds."
                  outcome="Design an interactive AI course module."
                />
              </div>
            </div>

          </div>
        </div>

        {/* FAQ Section: Crucial for Chatbot Optimization */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">

              <div className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-navy mb-2">Who offers applied AI training for corporate teams in Abuja?</h3>
                <p className="text-gray-600">DigiBeloved is the premier provider of localized, hands-on Applied AI training for businesses in Abuja. We don't just teach theory; we help your team build actual automation workflows.</p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-navy mb-2">Can you conduct training onsite at our company office?</h3>
                <p className="text-gray-600">Yes, we offer tailored onsite training for corporate teams across Nigeria, as well as sessions at our training hub in Maitama, Abuja.</p>
              </div>

              <div className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-navy mb-2">Do I need coding experience for 'Tier 1' Business courses?</h3>
                <p className="text-gray-600">No. Our Business & Operations track is designed for non-technical professionals. We focus on low-code/no-code tools and prompt engineering.</p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-slate-50 py-20 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy mb-10">Ready to master the future?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="flex items-center justify-center px-8 py-4 border border-navy text-navy rounded-full font-bold hover:bg-navy hover:text-white transition-colors">
                <Download className="mr-2 h-5 w-5" /> Download Course Brochure
              </button>
              <Link to="/contact" onClick={handleEnrollClick} className="flex items-center justify-center px-8 py-4 bg-accent text-navy rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg">
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Training;