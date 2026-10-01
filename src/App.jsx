import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import InfrastructureSection from './components/InfrastructureSection';
import MachinerySection from './components/MachinerySection';
import QualitySection from './components/QualitySection';
import ClientsSection from './components/ClientsSection';
import RfqEstimator from './components/RfqEstimator';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';
import './App.css';
import PageLoader from './components/PageLoader';


export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Fixed Navigation */}
      <Navbar />
      {/* <PageLoader /> */}

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        
        <AboutSection />

        <InfrastructureSection />

        <MachinerySection />

        <QualitySection />

        <ClientsSection />

        <RfqEstimator />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <a
          href="https://wa.me/917010707542?text=Hello%20Highlight%20Engineering%20Technology,%20I%20have%20an%20urgent%20machining%20inquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 rounded-full shadow-2xl shadow-emerald-500/30 hover:scale-110 transition-all cursor-pointer flex items-center justify-center group"
          title="Chat directly on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-slate-950" />
        </a>
      </div>

    </div>
  );
}

