import React, { useState } from 'react';
import {
  CheckCircle,
  Target,
  Clock,
  Cpu,
  ShieldAlert,
  Sparkles,
  Building2,
  Award,
  ZoomIn
} from 'lucide-react';
import { COMPANY_INFO, CORE_PILLARS } from '../data/companyData';

export default function AboutSection() {
  const [showImageZoom, setShowImageZoom] = useState(false);

  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden border-b border-slate-900">

      {/* Decorative background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>About The Company</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Engineering Precision With <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Commitment & Integrity</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Founded with a dedicated mission to deliver world-class CNC machining and lathe turnings with micro-level quality standards right here in Coimbatore, Tamil Nadu.
          </p>
        </div>

        {/* 2-Column Overview with Real Facility Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Facility Real Photo Card (from Page 3 of PDF) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="/assets/facility-hq.png"
                alt="Highlight Engineering Technology Machine Shop Facility"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

              {/* Tag / Badge */}
              {/* <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-800 flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white font-heading uppercase">Machine Shop Facility View</span>
              </div> */}

              {/* Zoom Trigger */}
              {/* <button
                onClick={() => setShowImageZoom(true)}
                className="absolute top-4 right-4 p-2 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-700/60 transition-colors"
                title="View Large"
              >
                <ZoomIn className="w-4 h-4" />
              </button> */}

              {/* Bottom Card Content */}
              {/* <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Chinnavedampatti Machine Shop</h3>
                    <p className="text-xs text-slate-400">1100 Sq.ft Fully Equipped Manufacturing Facility</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded">
                    Active Facility
                  </span>
                </div>
              </div> */}
            </div>

            {/* Quick footnote */}
            <p className="text-[11px] text-slate-500 text-center mt-2 font-mono">
              * Official workshop facility of Highlight Engineering Technology, Coimbatore
            </p>
          </div>

          {/* Right Column: Mission & Core PDF Statements */}
          <div className="lg:col-span-6 space-y-6 text-left">

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                Our Mission & Quality Philosophy
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At <strong className="text-white">HIGHLIGHT ENGINEERING TECHNOLOGY</strong>, we endeavor to achieve unconditional customer satisfaction through unmatched precision machining, rigorous delivery scheduling, and optimum transparent pricing.
              </p>
            </div>

            {/* Core PDF Bullet Points Styled */}
            <div className="space-y-3.5">

              <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Proficient Technical Team</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    We are a team of qualified professionals with rich technical backgrounds capable of undertaking all kinds of challenging precision projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Precise Planning & Adherence</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    We thoroughly understand customer requirements and adhere to precise planning and execution with firm emphasis on quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Timely Delivery at Optimum Cost</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Zero compromises on delivery commitments while maintaining the most competitive pricing structure in the industry.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">State-of-the-Art Infrastructure</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Equipped with modern CNC Milling VMC, heavy-duty centre lathes, and well-trained operators for flawless batch production.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Modal for full size facility photo */}
      {showImageZoom && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowImageZoom(false)}
        >
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl p-2">
            <img
              src="/assets/facility-hq.png"
              alt="Highlight Engineering Technology Machine Shop Facility"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="p-4 flex items-center justify-between text-slate-300 text-sm">
              <span className="font-semibold text-white">Highlight Engineering Technology - Machine Shop Facility</span>
              <button
                onClick={() => setShowImageZoom(false)}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded text-xs"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
