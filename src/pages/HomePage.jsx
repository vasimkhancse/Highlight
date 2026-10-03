import React from 'react';
import HomeBannerSlider from '../components/HomeBannerSlider';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import InfrastructureSection from '../components/InfrastructureSection';
import MachinerySection from '../components/MachinerySection';
import QualitySection from '../components/QualitySection';
import ClientsSection from '../components/ClientsSection';
import RfqEstimator from '../components/RfqEstimator';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* 3 Featured Banners on Home Page */}
      <HomeBannerSlider />

      {/* Main Hero & Value Proposition */}
      <Hero />
      
      {/* About The Company Section */}
      <AboutSection />

      {/* Infrastructure & Facility Details */}
      <InfrastructureSection />

      {/* CNC Machinery & Lathes Fleet */}
      <MachinerySection />

      {/* Quality Lab & Metrology Overview */}
      <QualitySection />

      {/* Client List & Sectors */}
      <ClientsSection />

      {/* Instant RFQ / Machining Estimator */}
      <RfqEstimator />

      {/* Contact & Map Section */}
      <ContactSection />
    </main>
  );
}
