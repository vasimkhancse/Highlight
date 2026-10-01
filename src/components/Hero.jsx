import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Layers, 
  FileSpreadsheet, 
  PhoneCall,
  Gauge
} from 'lucide-react';
import { COMPANY_INFO, VMC_SPECIFICATIONS } from '../data/companyData';

export default function Hero({ onOpenRfqModal }) {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950 bg-grid-pattern border-b border-slate-800/80">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Value Props & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>COIMBATORE PRECISION MACHINE SHOP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] uppercase">
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">CNC Machining</span>, VMC Milling & Lathe Solutions
            </h1>

            {/* Subtitle from PDF content */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              We are a team of qualified professionals with proficient technical background. We undertake all kinds of challenging projects with precise planning, rigid quality standards, timely delivery, and optimum pricing.
            </p>

            {/* Key feature pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 bg-slate-900/80 border border-slate-800 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Vetrimach V650 VMC</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 bg-slate-900/80 border border-slate-800 rounded-lg p-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Heavy Lathes (UK / USA)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 bg-slate-900/80 border border-slate-800 rounded-lg p-2.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mitutoyo Metrology</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#estimator"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all uppercase tracking-wide cursor-pointer"
              >
                <span>Request Machining Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#machinery"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-amber-500/50 font-semibold text-sm sm:text-base transition-all cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>Explore Machinery</span>
              </a>
            </div>

            {/* Contact quick strip */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-900">
              <div className="flex items-center space-x-1.5">
                <span className="text-slate-500">Facility Location:</span>
                <span className="text-slate-300 font-medium">Bharathi St, Chinnavedampatti, Coimbatore</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-emerald-400 font-medium">Open for Batch Production & Prototyping</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with High-Res VMC & Lathe Machine */}
          <div className="lg:col-span-5 relative">
            
            {/* Glow backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative glass-panel rounded-2xl p-4 sm:p-6 border border-slate-700/80 shadow-2xl bg-slate-900/90 overflow-hidden">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2 font-semibold">VETRIMACH V650 CNC</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  TATA TAL M/c
                </span>
              </div>

              {/* Machine Image Container */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950/80 border border-slate-800 p-2 group">
                <img 
                  src="/assets/vmc-machine-hq.png" 
                  alt="Vetrimach V650 CNC Milling Machine"
                  className="w-full h-56 sm:h-64 object-contain mx-auto filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Overlay Badge */}
                {/* <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-left">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Spindle Power</p>
                  <p className="text-xs font-bold text-amber-400 font-mono">10,000 RPM | 12/16 kW</p>
                </div>

                <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-right">
                  <p className="text-[10px] text-slate-400 font-mono">Bed Size</p>
                  <p className="text-xs font-bold text-white font-mono">1200 × 650 mm</p>
                </div> */}
              </div>

              {/* Card Specs Grid */}
              <div className="grid grid-cols-3 gap-2.5 mt-4 pt-1">
                <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 text-center">
                  <span className="block text-[10px] uppercase text-slate-500 font-mono">ATC Capacity</span>
                  <span className="text-sm font-bold text-white font-mono">20 Pockets</span>
                </div>
                <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 text-center">
                  <span className="block text-[10px] uppercase text-slate-500 font-mono">X/Y/Z Travel</span>
                  <span className="text-sm font-bold text-amber-400 font-mono">1050/650mm</span>
                </div>
                <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 text-center">
                  <span className="block text-[10px] uppercase text-slate-500 font-mono">Lathe Swing</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">Up to 1050mm</span>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">View Complete Machine Details</span>
                <a href="#machinery" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center space-x-1">
                  <span>Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Key Metric Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-10 border-t border-slate-800/80">
          
          <div className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/40 transition-all text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Facility Space</span>
              <Layers className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white font-heading">1,100 <span className="text-sm font-normal text-amber-400">Sq.ft</span></p>
            <p className="text-xs text-slate-400 mt-1">Dedicated Precision Machine Shop</p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/40 transition-all text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">VMC Spindle</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white font-heading">10,000 <span className="text-sm font-normal text-amber-400">RPM</span></p>
            <p className="text-xs text-slate-400 mt-1">Vetrimach V650 CNC (TAL)</p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/40 transition-all text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Lathe Bed Length</span>
              <Gauge className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white font-heading">1,500 <span className="text-sm font-normal text-emerald-400">mm</span></p>
            <p className="text-xs text-slate-400 mt-1">Heavy DSG & Lodge Shipley Lathes</p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/40 transition-all text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Metrology Rigor</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-black text-white font-heading">12+ <span className="text-sm font-normal text-emerald-400">Instruments</span></p>
            <p className="text-xs text-slate-400 mt-1">Mitutoyo, Insize & Baker Gauges</p>
          </div>

        </div>

      </div>
    </section>
  );
}
