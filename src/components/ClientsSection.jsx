import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  ArrowUpRight, 
  Sparkles,
  Handshake,
  Award
} from 'lucide-react';
import { CLIENTS } from '../data/companyData';

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-slate-950 relative overflow-hidden border-b border-slate-800">
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Handshake className="w-3.5 h-3.5" />
            <span>Trusted Industry Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Our Valued <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Customers & Clients</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Leading engineering, automation, and manufacturing enterprises in Coimbatore and across India rely on Highlight Engineering Technology for precision CNC execution.
          </p>
        </div>

        {/* Client Cards Grid (Exact 7 Companies from Page 4 of PDF) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between group hover:-translate-y-1 text-left relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:bg-amber-500/10 transition-colors"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                    <Building2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Client #0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {client.name}
                </h3>
                
                <p className="text-xs text-slate-400 mt-2">
                  {client.sector}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono font-medium text-emerald-400 flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{client.badge}</span>
                </span>
                <span className="text-xs text-slate-500 font-mono">Active Account</span>
              </div>
            </div>
          ))}

          {/* New Partnership Callout Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/30 flex flex-col justify-between text-left group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Join Our Client Network</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Partner with us for precision CNC milling, custom tooling, turning jobs, and scheduled batch manufacturing.
              </p>
            </div>
            
            <a
              href="#contact"
              className="mt-6 inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
            >
              <span>Initiate Vendor Onboarding</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Client Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
          <div className="p-3">
            <span className="block text-2xl sm:text-3xl font-black text-white font-mono">100%</span>
            <span className="text-xs text-slate-400">Tolerance Adherence</span>
          </div>
          <div className="p-3">
            <span className="block text-2xl sm:text-3xl font-black text-amber-400 font-mono">Zero</span>
            <span className="text-xs text-slate-400">Delayed Dispatch Tolerance</span>
          </div>
          <div className="p-3">
            <span className="block text-2xl sm:text-3xl font-black text-white font-mono">Optimum</span>
            <span className="text-xs text-slate-400">Transparent Job Pricing</span>
          </div>
          <div className="p-3">
            <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono">7+ Tier 1</span>
            <span className="text-xs text-slate-400">Industrial Partners</span>
          </div>
        </div>

      </div>
    </section>
  );
}
