import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  CheckCircle, 
  Layers, 
  Sliders, 
  Gauge, 
  Maximize, 
  FileCheck
} from 'lucide-react';
import { INSTRUMENTS_AND_GAUGES } from '../data/companyData';

export default function QualitySection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Calipers', 'Thread Gauges', 'Height & Depth', 'Dial Gauges', 'Surface Metrology', 'Plug Gauges'];

  const filteredInstruments = useMemo(() => {
    return INSTRUMENTS_AND_GAUGES.filter(item => {
      const matchesSearch = 
        item.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.rangeSize.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="quality" className="py-20 bg-slate-900/60 relative overflow-hidden border-b border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Quality Assurance & Metrology Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            List of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-amber-500">Instruments & Gauges</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Every machined part is thoroughly inspected on calibrated instruments including Japan's Mitutoyo, Insize, Baker, and Micron master gauges.
          </p>
        </div>

        {/* Instruments Showcase Images (From Page 8 of PDF) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-6 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">Surface & Calipers Metrology</span>
              <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-300">RRP, INSIZE</span>
            </div>
            <div className="h-56 sm:h-62 flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/50 p-2">
              <img 
                src="/assets/instruments-left.png" 
                alt="Highlight Engineering Quality Gauges & Calipers" 
                className="max-h-full max-w-full object filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-xs text-slate-400 mt-4 text-left">
              Includes Granite Surface Table (1600x1000x200mm), Digital Calipers, Height Gauges & Angle Protractors.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-6 flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Micrometers, Dials & Thread Gauges</span>
              <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-300">MITUTOYO, BAKER</span>
            </div>
            <div className="h-56 sm:h-62 flex items-center justify-center overflow-hidden rounded-xl bg-slate-900/50 p-2">
              <img 
                src="/assets/instruments-right.png" 
                alt="Mitutoyo Bore Dials, Depth Verniers and Gauges" 
                className="max-h-full max-w-full object filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-xs text-slate-400 mt-4 text-left">
              Equipped with Mitutoyo Digital Micrometers, Bore Dial Indicators (up to 250mm), and Slip Gauge Block Sets.
            </p>
          </div>

        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 sm:p-6 mb-8 shadow-xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search instrument, make (e.g. Mitutoyo, Insize, Baker), size..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Complete Interactive Instruments Table (Exact Page 8 Data) */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900/90 text-slate-300 font-mono border-b border-slate-800">
                <th className="py-4 px-4 font-bold text-amber-400 w-16">S.No</th>
                <th className="py-4 px-4 font-bold text-white">Item Description / Specification</th>
                <th className="py-4 px-4 font-bold text-emerald-400">Make</th>
                <th className="py-4 px-4 font-bold text-slate-300">Model</th>
                <th className="py-4 px-4 font-bold text-amber-300">Range / Size (MM)</th>
                <th className="py-4 px-4 font-bold text-slate-400">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {filteredInstruments.map((inst) => (
                <tr 
                  key={inst.sNo}
                  className="hover:bg-slate-900/60 transition-colors group"
                >
                  <td className="py-3.5 px-4 font-bold text-slate-500 group-hover:text-amber-400">
                    {String(inst.sNo).padStart(2, '0')}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-white font-sans">
                    <div className="flex items-center space-x-2">
                      <span>{inst.item}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-emerald-300 border border-slate-700">
                      {inst.make}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">
                    {inst.model}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-amber-300">
                    {inst.rangeSize}
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 font-sans text-xs">
                    {inst.category}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredInstruments.length === 0 && (
            <div className="p-8 text-center text-slate-400 text-sm">
              No instruments match "{searchTerm}". Try clearing search or selecting "All".
            </div>
          )}
        </div>

        {/* Quality commitment footnote & Separate Route CTA */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 p-5 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-xl">
          <div className="flex items-center space-x-2 text-emerald-400">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span className="font-semibold">All master gauges are periodically calibrated against traceable standards.</span>
          </div>
          <a
            href="/instruments"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all"
          >
            <span>Open Dedicated Instruments & Gauges Page</span>
            <Maximize className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
