import React, { useState, useMemo, useEffect } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  CheckCircle, 
  CheckCircle2,
  Layers, 
  Sliders, 
  Gauge, 
  Maximize, 
  Maximize2,
  FileCheck,
  X,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { INSTRUMENTS_AND_GAUGES } from '../data/companyData';

export default function QualitySection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalInstrument, setActiveModalInstrument] = useState(null);

  // Handle ESC key to close modal & lock background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalInstrument(null);
      }
    };

    if (activeModalInstrument) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalInstrument]);

  const categories = ['All', 'Calipers', 'Thread Gauges', 'Height & Depth', 'Dial Gauges', 'Surface Metrology', 'Plug Gauges'];

  const filteredInstruments = useMemo(() => {
    return INSTRUMENTS_AND_GAUGES.filter(item => {
      const q = searchTerm.toLowerCase();
      const matchesSearch = 
        item.item.toLowerCase().includes(q) ||
        item.make.toLowerCase().includes(q) ||
        item.model.toLowerCase().includes(q) ||
        item.rangeSize.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getMakeBadgeColor = (make) => {
    switch (make.toUpperCase()) {
      case 'MITUTOYO':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'INSIZE':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'BAKER':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'MICRON':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'RRP':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

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
            Every machined part is thoroughly inspected on calibrated instruments including Japan's Mitutoyo, Insize, Baker, and Micron master gauges. Click any instrument row to inspect metrology details.
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
                <th className="py-4 px-4 font-bold text-slate-400 w-16 text-center">Photo</th>
                <th className="py-4 px-4 font-bold text-white">Item Description / Specification</th>
                <th className="py-4 px-4 font-bold text-emerald-400">Make</th>
                <th className="py-4 px-4 font-bold text-slate-300">Model</th>
                <th className="py-4 px-4 font-bold text-amber-300">Range / Size (MM)</th>
                <th className="py-4 px-4 font-bold text-slate-400">Category</th>
                <th className="py-4 px-4 font-bold text-slate-400 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {filteredInstruments.map((inst) => (
                <tr 
                  key={inst.id || inst.sNo}
                  className="hover:bg-slate-900/80 transition-colors group cursor-pointer"
                  onClick={() => setActiveModalInstrument(inst)}
                >
                  <td className="py-3.5 px-4 font-bold text-slate-500 group-hover:text-amber-400">
                    {String(inst.sNo).padStart(2, '0')}
                  </td>
                  <td className="py-2 px-4 text-center">
                    {inst.image ? (
                      <div className="w-11 h-11 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 mx-auto group-hover:border-amber-500/60 transition-colors">
                        <img 
                          src={inst.image} 
                          alt={inst.item} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600 mx-auto">
                        <Gauge className="w-4 h-4" />
                      </div>
                    )}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-white font-sans">
                    <div className="flex flex-col">
                      <span className="group-hover:text-amber-400 transition-colors">{inst.item}</span>
                      {inst.usage && (
                        <p className="text-[11px] text-slate-400 font-normal font-sans line-clamp-1 mt-0.5">
                          {inst.usage}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getMakeBadgeColor(inst.make)}`}>
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
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalInstrument(inst);
                      }}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 text-xs font-sans transition-colors cursor-pointer"
                    >
                      Inspect
                    </button>
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
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all cursor-pointer"
          >
            <span>Open Dedicated Instruments & Gauges Page</span>
            <Maximize className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

      </div>

      {/* METROLOGY SPECIFICATION MODAL POPUP FOR QUALITY SECTION */}
      {activeModalInstrument && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-in fade-in duration-200"
          onClick={() => setActiveModalInstrument(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[88vh] sm:max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* FIXED MODAL HEADER */}
            <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-900/95 shrink-0 flex items-start justify-between gap-3 text-left">
              <div className="min-w-0 flex-1">
                <div className="flex items-center space-x-2 mb-1.5 flex-wrap gap-y-1">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${getMakeBadgeColor(activeModalInstrument.make)}`}>
                    {activeModalInstrument.make}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    {activeModalInstrument.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    S.No #{String(activeModalInstrument.sNo).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                  {activeModalInstrument.item}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Model Code: <strong className="text-slate-300">{activeModalInstrument.model}</strong>
                </p>
              </div>

              {/* Close Button Top */}
              <button
                onClick={() => setActiveModalInstrument(null)}
                className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors shrink-0 cursor-pointer"
                title="Close modal (Esc)"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* SCROLLABLE MODAL BODY */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 sm:space-y-5 text-left">
              
              {/* Instrument High-Res Metrology Image */}
              {activeModalInstrument.image && (
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group">
                  <img
                    src={activeModalInstrument.image}
                    alt={activeModalInstrument.item}
                    className="w-full h-56 sm:h-72 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                    <span className="px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-amber-400 font-bold border border-slate-700/80">
                      Range: {activeModalInstrument.rangeSize}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-950/90 backdrop-blur-md text-emerald-400 font-bold border border-emerald-800/80">
                      {activeModalInstrument.accuracy || 'Calibrated Master'}
                    </span>
                  </div>
                </div>
              )}

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-[10px] text-slate-500 uppercase">Measuring Range / Size</span>
                  <span className="text-sm font-bold text-amber-400">{activeModalInstrument.rangeSize}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-[10px] text-slate-500 uppercase">Accuracy Standard</span>
                  <span className="text-sm font-bold text-emerald-400">{activeModalInstrument.accuracy || 'Class Standard'}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-[10px] text-slate-500 uppercase">Least Count / Resolution</span>
                  <span className="text-sm font-bold text-white">{activeModalInstrument.leastCount || 'Limit Go / No-Go'}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-[10px] text-slate-500 uppercase">Construction / Material</span>
                  <span className="text-sm font-bold text-cyan-300 truncate">{activeModalInstrument.material || 'Hardened Tool Steel'}</span>
                </div>
              </div>

              {/* Scope & Detailed Features */}
              <div className="space-y-3.5 text-xs">
                <div>
                  <h4 className="font-mono text-slate-400 uppercase font-semibold mb-1">
                    Primary Metrology Application:
                  </h4>
                  <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    {activeModalInstrument.usage}
                  </p>
                </div>

                {activeModalInstrument.features && (
                  <div>
                    <h4 className="font-mono text-slate-400 uppercase font-semibold mb-1.5">
                      Engineering Characteristics:
                    </h4>
                    <ul className="space-y-1.5">
                      {activeModalInstrument.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeModalInstrument.inspectedParts && (
                  <div>
                    <h4 className="font-mono text-slate-400 uppercase font-semibold mb-1.5">
                      Typical Machined Workpieces Inspected:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeModalInstrument.inspectedParts.map((part, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs text-amber-300 font-mono"
                        >
                          {part}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* FIXED MODAL FOOTER */}
            <div className="p-3.5 sm:p-5 border-t border-slate-800 bg-slate-950 shrink-0 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-400 font-mono">
                Calibration: <strong className="text-emerald-400">{activeModalInstrument.calibrationStatus || 'Certified Traceable'}</strong>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={`https://wa.me/917010707542?text=Hello%20Highlight%20Engineering,%20I%20want%20to%20confirm%20tolerance%20inspection%20for%20${encodeURIComponent(activeModalInstrument.item)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-xs flex items-center space-x-1.5 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>
                
                {/* Close Button Down */}
                <button
                  onClick={() => setActiveModalInstrument(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs cursor-pointer border border-slate-700"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

