import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Building,
  User,
  Copy,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function ContactSection() {
  const [copiedGst, setCopiedGst] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const copyGstin = () => {
    navigator.clipboard.writeText(COMPANY_INFO.gstin);
    setCopiedGst(true);
    setTimeout(() => setCopiedGst(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Create WhatsApp or mailto
    const text = `*Website Contact Inquiry - HIGHLIGHT ENGINEERING TECHNOLOGY*%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject}%0A` +
      `*Message:* ${formData.message}`;

    window.open(`https://wa.me/917010707542?text=${text}`, '_blank');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/60 relative overflow-hidden border-b border-slate-800">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Connect With <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Our Machine Shop</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Reach out to our leadership team directly for custom drawing evaluations, machining feasibility studies, or facility visits.
          </p>
        </div>

        {/* 2-Column Contact Info & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Official PDF Credentials & Contacts */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Leadership Contact Cards (Page 9 of PDF) */}
            <div className="grid grid-cols-1 gap-4">
              
              {/* Partner 1: Rajesh Kumar */}
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-amber-500/50 transition-all shadow-xl group">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                      RK
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                        RAJESH KUMAR.R
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">Managing Partner / Operations</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-amber-300">
                    Primary Contact
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href="tel:+917010707542"
                    className="inline-flex items-center space-x-2 text-sm font-mono font-bold text-slate-200 hover:text-amber-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>+91 70107 07542</span>
                  </a>

                  <a
                    href="https://wa.me/917010707542?text=Hello%20Mr.%20Rajesh%20Kumar,%20I%20would%20like%20to%20discuss%20a%20machining%20project%20at%20Highlight%20Engineering."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Partner 2: Ramesh T */}
              <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-amber-500/50 transition-all shadow-xl group">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                      RT
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                        RAMESH.T
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">Managing Partner / Client Relations</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-amber-300">
                    Partner
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href="tel:+919884835774"
                    className="inline-flex items-center space-x-2 text-sm font-mono font-bold text-slate-200 hover:text-amber-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>+91 98848 35774</span>
                  </a>

                  <a
                    href="https://wa.me/919884835774?text=Hello%20Mr.%20Ramesh,%20I%20would%20like%20to%20discuss%20a%20machining%20project%20at%20Highlight%20Engineering."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Address & GSTIN Box */}
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
              
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider">
                    Machine Shop Address
                  </h4>
                  <p className="text-sm font-semibold text-white mt-1 leading-snug">
                    NO: 137 / 1A 2A, NO: 50/2, Bharathi Street,<br />
                    Chinnavedampatti, Coimbatore - 641049,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 pt-3 border-t border-slate-800/80">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider">
                    Official Email
                  </h4>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="text-sm font-mono text-amber-400 hover:underline mt-0.5 block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* GSTIN with One-Click Copy */}
              <div className="flex items-start space-x-3 pt-3 border-t border-slate-800/80">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider">
                    GSTIN Registration
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm font-mono font-bold text-white bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      {COMPANY_INFO.gstin}
                    </span>
                    <button
                      onClick={copyGstin}
                      className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors flex items-center space-x-1"
                      title="Copy GSTIN"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedGst ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Send Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 text-left shadow-2xl">
            
            <div className="border-b border-slate-800 pb-4 mb-6">
              <h3 className="text-xl font-bold text-white uppercase font-heading">
                Direct Machine Shop Inquiry
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill the form below to send an urgent query directly to Rajesh Kumar & Ramesh.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Inquiry Initialized!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your inquiry message has been formatted. Our engineering team at Chinnavedampatti will respond immediately.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Precision Components Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. purchase@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                    Subject / Project Requirement *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. VMC Milling for 500 pcs Aluminum Flanges"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-400 mb-1.5">
                    Requirement Details / Technical Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Mention quantities, material specifications, delivery deadlines, or drawing reference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Inquiry to Management</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
