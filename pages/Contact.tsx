import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import emailjs from '@emailjs/browser';
import { db } from '../src/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { trackFormStart, trackQualifiedEnquiry } from '../src/services/metaPixel';

const budgetOptions = [
  "Below ₦50,000",
  "₦50,000–₦100,000",
  "₦100,000–₦250,000",
  "₦250,000–₦500,000",
  "₦500,000–₦1,000,000",
  "₦1,000,000+",
  "International / USD budget",
  "Not sure — recommend a budget"
];

const Contact: React.FC = () => {
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // General Information
    name: '',
    email: '',
    organization: '',
    country: 'Nigeria',
    service: 'data-analysis', // data-analysis, automation, software, training
    goal: '',
    currentStatus: '',
    desiredOutput: '',
    timeline: 'Within 2-4 weeks',
    budget: '₦100,000–₦250,000',
    additionalDetails: '',

    // Data Analysis Specific
    researchType: '',
    datasetStatus: 'Raw collected data ready for cleaning',
    sampleSize: '',
    analysisDeadline: '',

    // Automation Specific
    currentTools: '',
    frequencyVolume: '',
    biggestBottleneck: '',

    // Software Specific
    coreUsers: '',
    mustHaveFeatures: '',
    requiredIntegrations: '',

    // Training Specific
    participantCount: '',
    participantRoles: '',
    currentAiSkill: 'Beginner to Intermediate',
    preferredFormat: 'Onsite in Abuja / Nigeria'
  });

  // Read URL query parameters to pre-select service
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      if (['data-analysis', 'automation', 'software', 'training'].includes(serviceParam)) {
        setFormData(prev => ({ ...prev, service: serviceParam }));
      }
    }
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      trackFormStart("Client Qualification Brief", formData.service);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save detailed brief to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        submittedAt: serverTimestamp(),
        createdAt: serverTimestamp(),
      });

      // 2. Send Email via EmailJS
      const serviceId = 'service_4vy4fmg';
      const templateId = 'template_2cccsyp';
      const publicKey = 'cf0WzKgyDjGSK7run';

      const emailPayload = {
        from_name: formData.name,
        from_email: formData.email,
        organization: formData.organization,
        country: formData.country,
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        message: `
Objective: ${formData.goal}
Current Process: ${formData.currentStatus}
Desired Output: ${formData.desiredOutput}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Country: ${formData.country}
Specific Details:
${formData.service === 'data-analysis' ? `Research Type: ${formData.researchType} | Sample Size: ${formData.sampleSize} | Status: ${formData.datasetStatus}` : ''}
${formData.service === 'automation' ? `Tools: ${formData.currentTools} | Volume: ${formData.frequencyVolume} | Bottleneck: ${formData.biggestBottleneck}` : ''}
${formData.service === 'software' ? `Core Users: ${formData.coreUsers} | Features: ${formData.mustHaveFeatures} | Integrations: ${formData.requiredIntegrations}` : ''}
${formData.service === 'training' ? `Participants: ${formData.participantCount} | Roles: ${formData.participantRoles} | Format: ${formData.preferredFormat}` : ''}
Notes: ${formData.additionalDetails}
        `
      };

      await emailjs.send(serviceId, templateId, emailPayload, publicKey);

      // 3. Track conversion event in Meta Pixel
      trackQualifiedEnquiry({
        service: formData.service,
        budget: formData.budget,
        organization: formData.organization,
        country: formData.country
      });

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Error submitting project brief: ", error);
      alert('There was an issue submitting your brief. Please email us directly at digibeloved@gmail.com or WhatsApp +2348067628656');
    } finally {
      setIsSubmitting(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DigiBeloved",
    "image": "https://res.cloudinary.com/dn2mgiges/image/upload/v1754587273/DigiBeloved.png",
    "telephone": "+2348067628656",
    "email": "digibeloved@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No 3 Maitama",
      "addressLocality": "Abuja",
      "addressCountry": "Nigeria"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <div className="bg-white min-h-screen text-navy">
      <SchemaScript schema={schema} />

      {/* Header */}
      <section className="bg-[#07152E] text-white pt-20 pb-20 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFD100_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 mb-8 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white">Project Scoping &amp; Quotes</span>
            <span className="text-slate-500">•</span>
            <span className="text-accent">24h Response</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Let's Discuss Your Project <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-white">
              or Request a Quote
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Tell us what you are trying to achieve, what currently exists, and your available budget. We will recommend the most practical next step.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Success Banner */}
        {submitted ? (
          <div className="max-w-2xl mx-auto bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center my-12 shadow-sm animate-in fade-in duration-300">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Project Brief Received
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Thank you, <strong>{formData.name}</strong>. We have received your requirements for <strong>{formData.service}</strong>. Our team will review your objectives and respond via email within 24 business hours with scoping feedback.
            </p>
            <div className="p-4 bg-white rounded-xl border border-emerald-100 text-xs text-slate-600 mb-6">
              Need immediate assistance? Message us on WhatsApp:{' '}
              <a href="https://wa.me/2348067628656" className="text-navy font-bold underline ml-1">
                +2348067628656
              </a>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  organization: '',
                  country: 'Nigeria',
                  service: 'data-analysis',
                  goal: '',
                  currentStatus: '',
                  desiredOutput: '',
                  timeline: 'Within 2-4 weeks',
                  budget: '₦100,000–₦250,000',
                  additionalDetails: '',
                  researchType: '',
                  datasetStatus: 'Raw collected data ready for cleaning',
                  sampleSize: '',
                  analysisDeadline: '',
                  currentTools: '',
                  frequencyVolume: '',
                  biggestBottleneck: '',
                  coreUsers: '',
                  mustHaveFeatures: '',
                  requiredIntegrations: '',
                  participantCount: '',
                  participantRoles: '',
                  currentAiSkill: 'Beginner to Intermediate',
                  preferredFormat: 'Onsite in Abuja / Nigeria'
                });
              }}
              className="inline-block bg-navy text-white text-xs font-bold px-6 py-3 rounded-lg hover:bg-navy-light transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Contact Info */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Pricing Guidance */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
                <span className="text-xs font-bold text-navy uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full inline-block mb-3">
                  Pricing Guidance
                </span>
                <h3 className="text-lg font-extrabold text-navy mb-3">
                  Flexible Project-Based Pricing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Every engagement is scoped around the problem, complexity, deliverables, timeline, and required level of support.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-l-2 border-accent pl-3">
                  If you already have a budget in mind, share it with us. We will recommend what can realistically be delivered within it.
                </p>
              </div>

              {/* Contact Data */}
              <div className="bg-navy text-white rounded-3xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-accent mb-6">
                  Official Communication
                </h3>
                
                <div className="space-y-6 text-xs sm:text-sm">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-white">Headquarters</strong>
                      <span className="text-slate-300">No 3 Maitama, Abuja, Nigeria.</span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-white">Telephone / WhatsApp</strong>
                      <a href="tel:+2348067628656" className="text-slate-300 hover:text-white transition-colors">
                        +2348067628656
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-white">Direct Email</strong>
                      <a href="mailto:digibeloved@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                        digibeloved@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-white">Business Hours</strong>
                      <span className="text-slate-300">Monday - Friday: 9:00 AM – 5:00 PM (WAT)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-accent inline mr-1" />
                  <span>All shared research, proprietary data, and project briefs remain confidential.</span>
                </div>
              </div>

            </div>

            {/* Dynamic Qualified Intake Form */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-navy tracking-tight mb-2">
                  Project Scoping Brief
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Please complete the details below so we can evaluate your requirements thoroughly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                  >
                    <option value="data-analysis">Research &amp; Data Analysis (Done-for-You)</option>
                    <option value="automation">AI &amp; Workflow Automation (Done-for-You)</option>
                    <option value="software">Custom Software Development (Done-for-You)</option>
                    <option value="training">AI Training for Organizations (Team Capability)</option>
                  </select>
                </div>

                {/* 2. General Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g., Dr. Amina Bello / David Okafor"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Work / Primary Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g., amina@institution.org"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="organization" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Organization / Institution <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      placeholder="e.g., University / NGO / Company Name"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      placeholder="e.g., Nigeria, United Kingdom, USA"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                    />
                  </div>
                </div>

                {/* 3. Core Project Scope */}
                <div>
                  <label htmlFor="goal" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                    What are you trying to achieve? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    rows={3}
                    required
                    placeholder="Briefly state your core objective or the primary outcome you need..."
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                  />
                </div>

                <div>
                  <label htmlFor="currentStatus" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                    What currently exists / how is this handled today? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="currentStatus"
                    name="currentStatus"
                    rows={2}
                    required
                    placeholder="e.g., We have 500 completed Google Form responses / We do this manually across Excel / We have no system currently..."
                    value={formData.currentStatus}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                  />
                </div>

                <div>
                  <label htmlFor="desiredOutput" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                    Desired Outputs / Deliverables <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="desiredOutput"
                    name="desiredOutput"
                    required
                    placeholder="e.g., APA Tables & Findings / Automated Workflow / Internal Web Portal / 2-Day Workshop"
                    value={formData.desiredOutput}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                  />
                </div>

                {/* 4. DYNAMIC SERVICE-SPECIFIC FIELDS */}
                
                {/* Data Analysis Fields */}
                {formData.service === 'data-analysis' && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                    <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                      Research &amp; Data Specifics
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="researchType" className="block text-xs font-medium text-slate-700 mb-1">
                          Research Type (e.g. M&amp;E, Academic, Survey, Clinical)
                        </label>
                        <input
                          type="text"
                          id="researchType"
                          name="researchType"
                          placeholder="e.g., Public Health M&E Study"
                          value={formData.researchType}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="sampleSize" className="block text-xs font-medium text-slate-700 mb-1">
                          Approximate Sample Size (N)
                        </label>
                        <input
                          type="text"
                          id="sampleSize"
                          name="sampleSize"
                          placeholder="e.g., 450 respondents"
                          value={formData.sampleSize}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="datasetStatus" className="block text-xs font-medium text-slate-700 mb-1">
                        Current Dataset Status
                      </label>
                      <select
                        id="datasetStatus"
                        name="datasetStatus"
                        value={formData.datasetStatus}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                      >
                        <option value="Raw collected data ready for cleaning">Raw collected data ready for cleaning</option>
                        <option value="Data collection currently in progress">Data collection currently in progress</option>
                        <option value="Partially cleaned with questions on test selection">Partially cleaned with questions on test selection</option>
                        <option value="Supervisor requested corrections / re-analysis">Supervisor requested corrections / re-analysis</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Automation Fields */}
                {formData.service === 'automation' && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                    <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                      Workflow &amp; Operations Specifics
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="currentTools" className="block text-xs font-medium text-slate-700 mb-1">
                          Tools Currently Used
                        </label>
                        <input
                          type="text"
                          id="currentTools"
                          name="currentTools"
                          placeholder="e.g., Google Sheets, Forms, WhatsApp, Excel"
                          value={formData.currentTools}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="frequencyVolume" className="block text-xs font-medium text-slate-700 mb-1">
                          Frequency &amp; Volume
                        </label>
                        <input
                          type="text"
                          id="frequencyVolume"
                          name="frequencyVolume"
                          placeholder="e.g., 50 transactions daily / 4 reports weekly"
                          value={formData.frequencyVolume}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="biggestBottleneck" className="block text-xs font-medium text-slate-700 mb-1">
                        Where does the process break or slow down most?
                      </label>
                      <input
                        type="text"
                        id="biggestBottleneck"
                        name="biggestBottleneck"
                        placeholder="e.g., Waiting for manager approval / manual copy paste errors"
                        value={formData.biggestBottleneck}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                      />
                    </div>
                  </div>
                )}

                {/* Software Fields */}
                {formData.service === 'software' && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                    <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                      Custom Software Specifications
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="coreUsers" className="block text-xs font-medium text-slate-700 mb-1">
                          Who will use this system? (Roles)
                        </label>
                        <input
                          type="text"
                          id="coreUsers"
                          name="coreUsers"
                          placeholder="e.g., Internal Staff, Admin, External Clients"
                          value={formData.coreUsers}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="requiredIntegrations" className="block text-xs font-medium text-slate-700 mb-1">
                          Required Integrations
                        </label>
                        <input
                          type="text"
                          id="requiredIntegrations"
                          name="requiredIntegrations"
                          placeholder="e.g., Payment gateway, SMS, Legacy Database"
                          value={formData.requiredIntegrations}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="mustHaveFeatures" className="block text-xs font-medium text-slate-700 mb-1">
                        Must-Have Capabilities
                      </label>
                      <input
                        type="text"
                        id="mustHaveFeatures"
                        name="mustHaveFeatures"
                        placeholder="e.g., Document upload vault, approval dashboard, audit log"
                        value={formData.mustHaveFeatures}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                      />
                    </div>
                  </div>
                )}

                {/* Corporate Training Fields */}
                {formData.service === 'training' && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                    <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                      Organizational Training Specifications
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="participantCount" className="block text-xs font-medium text-slate-700 mb-1">
                          Number of Participants
                        </label>
                        <input
                          type="text"
                          id="participantCount"
                          name="participantCount"
                          placeholder="e.g., 15 staff members"
                          value={formData.participantCount}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="participantRoles" className="block text-xs font-medium text-slate-700 mb-1">
                          Staff Roles / Departments
                        </label>
                        <input
                          type="text"
                          id="participantRoles"
                          name="participantRoles"
                          placeholder="e.g., M&E team, Operations, Administrative leads"
                          value={formData.participantRoles}
                          onChange={handleChange}
                          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="preferredFormat" className="block text-xs font-medium text-slate-700 mb-1">
                        Preferred Delivery Format
                      </label>
                      <select
                        id="preferredFormat"
                        name="preferredFormat"
                        value={formData.preferredFormat}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-navy"
                      >
                        <option value="Onsite in Abuja / Nigeria">Onsite in Abuja / Nigeria</option>
                        <option value="Live Virtual Interactive Cohort">Live Virtual Interactive Cohort</option>
                        <option value="Hybrid (Onsite + Virtual follow-ups)">Hybrid (Onsite + Virtual follow-ups)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* 5. Timeline & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="timeline" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Timeline / Deadline <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                    >
                      <option value="Urgent (within 7 days)">Urgent (within 7 days)</option>
                      <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="Planning for next quarter">Planning for next quarter</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Available Budget <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Details */}
                <div>
                  <label htmlFor="additionalDetails" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                    Additional Context or File Link (Google Drive / Brief)
                  </label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    rows={3}
                    placeholder="Paste a link to your brief, dataset outline, or add any extra questions here..."
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-navy font-extrabold py-4 px-6 rounded-xl hover:bg-yellow-400 active:scale-[0.99] transition-all shadow-[0_10px_25px_rgba(255,209,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Evaluating & Submitting Brief...' : 'Submit Project Brief for Scoping'}</span>
                </button>

                <p className="text-center text-[11px] text-slate-500">
                  By submitting, you agree to receive follow-up scoping communications. Your information is protected under strict privacy protocols.
                </p>

              </form>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Contact;