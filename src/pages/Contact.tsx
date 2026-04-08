import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-navy py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Schedule a consultation with our legal experts. We are here to assist you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Information */}
            <div className="lg:w-1/3 space-y-10">
              <div>
                <h2 className="font-serif text-3xl font-bold text-navy mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1">Office Address</h3>
                      <p className="text-gray-600">Plot 23891, Sesase Road<br />Gaborone, Botswana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1">Phone</h3>
                      <p className="text-gray-600">+267 390 0000<br />+267 700 0000 (WhatsApp)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1">Email</h3>
                      <p className="text-gray-600">info@serimalegal.co.bw<br />consult@serimalegal.co.bw</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 08:00 - 17:00<br />Weekends & Public Holidays: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-100 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-navy mb-6">Send an Inquiry</h2>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-md mb-6">
                  <h3 className="font-bold text-lg mb-2">Message Sent Successfully</h3>
                  <p>Thank you for reaching out to Serima Legal Practice. One of our attorneys will contact you shortly.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-navy focus:border-navy outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-navy focus:border-navy outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-navy focus:border-navy outline-none transition-colors"
                      placeholder="+267 700 0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Area of Interest *</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-navy focus:border-navy outline-none transition-colors bg-white"
                    >
                      <option value="" disabled>Select a practice area</option>
                      <option value="Conveyancing">Conveyancing & Property</option>
                      <option value="Corporate">Corporate & Commercial</option>
                      <option value="Litigation">Civil Litigation</option>
                      <option value="Labour">Labour & Employment</option>
                      <option value="Other">Other Legal Matter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-navy focus:border-navy outline-none transition-colors resize-none"
                    placeholder="Briefly describe your legal inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-navy hover:bg-navy-light text-white font-bold py-4 px-8 rounded-md transition-colors flex justify-center items-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Please note: Submitting this form does not establish an attorney-client relationship. Do not send confidential information through this form.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200">
        {/* Using a placeholder map since we can't easily embed a real interactive Google Map without an API key, but we can use an iframe to a generic location or a static image. */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118944.59757656627!2d25.84511514335937!3d-24.64639999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb914d255a91a9b%3A0x63102377b5a864d!2sGaborone%2C%20Botswana!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </section>
    </div>
  );
}
