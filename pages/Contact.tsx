import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SchemaScript from '../components/SchemaScript';
import emailjs from '@emailjs/browser';
import { db } from '../src/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    interest: 'Training',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save to Firestore (Database Record)
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // 2. Send Email via EmailJS
      const serviceId = 'service_4vy4fmg';
      const templateId = 'template_2cccsyp';
      const publicKey = 'cf0WzKgyDjGSK7run';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          organization: formData.organization,
          interest: formData.interest,
          message: formData.message,
        },
        publicKey
      );

      alert('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', organization: '', email: '', interest: 'Training', message: '' });
    } catch (error) {
      console.error("Error sending message: ", error);
      alert('Error sending message. Please try again or email us directly at digibeloved@gmail.com');
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
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-white min-h-screen pt-20">

        {/* Header */}
        <div className="text-center py-16 px-4 bg-slate-50 border-b border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Let’s Build Your Future.</h1>
          <p className="text-xl text-gray-600">Visit us in Maitama or reach out digitally.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl">

            {/* Contact Data & Map */}
            <div className="p-10 bg-navy text-white">
              <h3 className="text-2xl font-bold text-accent mb-8">Official Contact Data</h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Address</h4>
                    <p className="text-gray-300">No 3 Maitama, Abuja, Nigeria.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <a href="tel:+2348067628656" className="text-gray-300 hover:text-white transition-colors">+2348067628656</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <a href="mailto:digibeloved@gmail.com" className="text-gray-300 hover:text-white transition-colors">digibeloved@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Hours</h4>
                    <p className="text-gray-300">Monday - Friday, 9:00 AM - 5:00 PM.</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 h-64 bg-navy-light/50 rounded-xl overflow-hidden relative border border-white/10">
                <img src="https://picsum.photos/seed/map/600/400" alt="Map showing DigiBeloved office location in Abuja" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white text-navy px-4 py-2 rounded shadow-lg text-sm font-bold">Google Maps Embed Placeholder</div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="p-10 bg-white">
              <h3 className="text-2xl font-bold text-navy mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Area of Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                  >
                    <option value="Training">Applied AI Training</option>
                    <option value="Dev">Custom Development</option>
                    <option value="Consulting">Consulting & Strategy</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg px-4 py-3 text-navy focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-navy font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;