import React, { useState } from 'react';
import { 
  Cpu, 
  Settings, 
  RotateCw, 
  Zap, 
  Maximize2, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Sliders,
  Flame,
  Info
} from 'lucide-react';
import { VMC_SPECIFICATIONS, LATHE_FLEET } from '../data/companyData';

export default function MachinerySection({ onOpenRfqModal }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'vmc', 'lathes'
  const [selectedLathe, setSelectedLathe] = useState(LATHE_FLEET[0]);

  return (
    <section id="machinery" className="py-20 bg-slate-950 relative overflow-hidden border-b border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span>Machining Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            High-Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Machinery & Fleet</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Our workshop hosts high-specification CNC Vertical Machining and heavy-duty international lathes capable of achieving tight tolerances across complex geometries.
          </p>

          {/* Navigation Filter Tabs */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Machinery
            </button>
            <button
              onClick={() => setActiveTab('vmc')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'vmc'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              VMC Milling Centre
            </button>
            <button
              onClick={() => setActiveTab('lathes')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'lathes'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Centre Lathes Fleet
            </button>
          </div>
        </div>

        {/* 1. VERTICAL MACHINING CENTRE (VMC) - Page 6 */}
        {(activeTab === 'all' || activeTab === 'vmc') && (
          <div className="mb-16 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl">
            
            {/* Header pill */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
              <div className="text-left">
                <div className="flex items-center space-x-3 mb-1">
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {VMC_SPECIFICATIONS.brandBadge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Serial: {VMC_SPECIFICATIONS.modelNumber}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  {VMC_SPECIFICATIONS.title}
                </h3>
                <p className="text-amber-400 font-mono text-sm font-semibold mt-0.5">
                  MAKE : {VMC_SPECIFICATIONS.make}
                </p>
              </div>

              <a
                href="#estimator"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-all shadow-md"
              >
                <span>Book VMC Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* VMC Machine High-Res Image Showcase */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-2xl bg-slate-950 border border-slate-800/80 p-4 sm:p-6 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent opacity-50"></div>
                  
                  <img 
                    src={VMC_SPECIFICATIONS.image}
                    alt="Vetrimach V650 CNC Milling Machine"
                    className="w-full h-72 sm:h-80 object-contain mx-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges on image */}
                  {/* <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 text-left">
                    <span className="text-[10px] text-slate-400 block font-mono">TATA / TAL Group</span>
                    <span className="text-xs font-bold text-white">Vetrimach V-650</span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">Spindle Power</span>
                    <span className="text-xs font-bold text-amber-400 font-mono">12 / 16 kW</span>
                  </div> */}
                </div>

                <p className="text-[11px] text-slate-500 text-center mt-2 font-mono">
                  * Official high-precision VMC deployed at Highlight Engineering Technology
                </p>
              </div>

              {/* VMC Technical Specifications Sheet */}
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* Axis Travel & Bed Size Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Bed Size Card */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex items-center space-x-2 text-slate-400 mb-3">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-white">Bed Size (Working Area)</h4>
                    </div>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between py-1 border-b border-slate-800/80">
                        <span className="text-slate-400">X-Axis Bed</span>
                        <span className="text-white font-bold">{VMC_SPECIFICATIONS.bedSize.xAxis}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800/80">
                        <span className="text-slate-400">Y-Axis Bed</span>
                        <span className="text-white font-bold">{VMC_SPECIFICATIONS.bedSize.yAxis}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-400">Z-Axis Bed</span>
                        <span className="text-white font-bold">{VMC_SPECIFICATIONS.bedSize.zAxis}</span>
                      </div>
                    </div>
                  </div>

                  {/* Axis Travel Card */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="flex items-center space-x-2 text-slate-400 mb-3">
                      <Sliders className="w-4 h-4 text-emerald-400" />
                      <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-white">Axis Travel (Stroke)</h4>
                    </div>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between py-1 border-b border-slate-800/80">
                        <span className="text-slate-400">X-Axis Travel</span>
                        <span className="text-emerald-400 font-bold">{VMC_SPECIFICATIONS.travel.xAxis}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-800/80">
                        <span className="text-slate-400">Y-Axis Travel</span>
                        <span className="text-emerald-400 font-bold">{VMC_SPECIFICATIONS.travel.yAxis}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-400">Z-Axis Travel</span>
                        <span className="text-emerald-400 font-bold">{VMC_SPECIFICATIONS.travel.zAxis}</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Spindle & ATC Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <RotateCw className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                    <span className="block text-[10px] uppercase text-slate-400 font-mono">Spindle RPM</span>
                    <span className="text-base sm:text-lg font-black text-white font-mono">{VMC_SPECIFICATIONS.spindleRpm}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <Zap className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                    <span className="block text-[10px] uppercase text-slate-400 font-mono">Spindle Power</span>
                    <span className="text-base sm:text-lg font-black text-white font-mono">{VMC_SPECIFICATIONS.spindlePower}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <Cpu className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                    <span className="block text-[10px] uppercase text-slate-400 font-mono">Tool ATC Pocket</span>
                    <span className="text-base sm:text-lg font-black text-white font-mono">{VMC_SPECIFICATIONS.toolPocket}</span>
                  </div>
                </div>

                {/* Highlights list */}
                <div className="space-y-2 pt-2">
                  {VMC_SPECIFICATIONS.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>
        )}

        {/* 2. CENTRE LATHES FLEET - Page 7 */}
        {(activeTab === 'all' || activeTab === 'lathes') && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-2xl">
            
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
              <div className="text-left">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  UK & USA Heavy-Duty Fleet
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mt-2">
                  Centre Lathe Machinery Fleet
                </h3>
                <p className="text-slate-400 text-sm mt-0.5">
                  High-capacity industrial lathes capable of turning jobs up to 1,500 mm length and 1,050 mm swing diameter.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>3 High Precision Heavy Lathes</span>
              </div>
            </div>

            {/* Lathe Machine Real Photo Banner */}
            <div className="mb-8 rounded-2xl bg-slate-950 border border-slate-800/80 p-4 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-emerald-500/5"></div>
              <img 
                src="/assets/lathe-machine-hq.png" 
                alt="Highlight Engineering Heavy Centre Lathe Machinery" 
                className="w-full h-48 sm:h-64 sm:object-contain mx-auto filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-102 transition-transform duration-500"
              />
              {/* <div className="absolute bottom-3 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-left">
                <span className="text-[10px] text-slate-400 font-mono">Fleet Capability</span>
                <span className="text-xs font-bold text-white block">DSG (UK) & LODGE & SHIPLEY (USA)</span>
              </div> */}
            </div>

            {/* Interactive Lathe Specifications Table (From Page 7) */}
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/80">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900/90 text-slate-300 font-mono border-b border-slate-800">
                    <th className="py-3.5 px-4 font-bold text-amber-400">S.No</th>
                    <th className="py-3.5 px-4 font-bold text-white">Model</th>
                    <th className="py-3.5 px-4 font-bold text-white">Make / Origin</th>
                    <th className="py-3.5 px-4 font-bold text-amber-300">Chuck Size</th>
                    <th className="py-3.5 px-4 font-bold text-amber-300">Center Height</th>
                    <th className="py-3.5 px-4 font-bold text-emerald-400">Length of Job</th>
                    <th className="py-3.5 px-4 font-bold text-emerald-400">Swing Dia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {LATHE_FLEET.map((lathe) => (
                    <tr 
                      key={lathe.id}
                      className="hover:bg-slate-900/60 transition-colors group cursor-pointer"
                      onClick={() => setSelectedLathe(lathe)}
                    >
                      <td className="py-4 px-4 font-bold text-slate-400 group-hover:text-amber-400">
                        0{lathe.sNo}
                      </td>
                      <td className="py-4 px-4 font-bold text-white">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                            {lathe.model}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-slate-300 font-sans font-semibold">
                        {lathe.make}
                      </td>
                      <td className="py-4 px-4 text-slate-200">
                        {lathe.chuckSize}
                      </td>
                      <td className="py-4 px-4 text-slate-200">
                        {lathe.centerHeight}
                      </td>
                      <td className="py-4 px-4 font-bold text-emerald-400">
                        {lathe.lengthOfJob}
                      </td>
                      <td className="py-4 px-4 font-bold text-emerald-400">
                        {lathe.swingDia}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick summary note */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span>* High rigidity spindle bearings suitable for alloy steels, cast iron, SS and non-ferrous shafts</span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
