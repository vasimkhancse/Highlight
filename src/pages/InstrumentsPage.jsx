import React, { useState, useMemo, useEffect } from 'react';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  SlidersHorizontal, 
  Gauge, 
  Maximize2, 
  FileCheck, 
  Phone, 
  MessageSquare, 
  ExternalLink,
  X 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { INSTRUMENTS_AND_GAUGES } from '../data/companyData';

export default function InstrumentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMake, setSelectedMake] = useState('All');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'
  const [activeModalInstrument, setActiveModalInstrument] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const categories = [
    'All', 
    'Surface Metrology', 
    'Calipers', 
    'Thread Gauges', 
    'Height & Depth', 
    'Dial Gauges', 
    'Plug Gauges'
  ];

  const makes = [
    'All',
    'MITUTOYO',
    'INSIZE',
    'BAKER',
    'MICRON',
    'RRP',
    'HIP',
    'SMG',
    'SUCCESS'
  ];

  const filteredInstruments = useMemo(() => {
    return INSTRUMENTS_AND_GAUGES.filter(item => {
      const q = searchTerm.toLowerCase();
      const matchesSearch = 
        item.item.toLowerCase().includes(q) ||
        item.make.toLowerCase().includes(q) ||
        item.model.toLowerCase().includes(q) ||
        item.rangeSize.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.usage && item.usage.toLowerCase().includes(q)) ||
        (item.accuracy && item.accuracy.toLowerCase().includes(q));
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesMake = selectedMake === 'All' || item.make.toUpperCase() === selectedMake.toUpperCase();

      return matchesSearch && matchesCategory && matchesMake;
    });
  }, [searchTerm, selectedCategory, selectedMake]);

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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      
      {/* Hero Header Section (Starts cleanly below fixed navbar) */}
      <section className="relative pt-32 sm:pt-36 pb-12 sm:pb-16 overflow-hidden border-b border-slate-800 bg-slate-950 bg-grid-pattern">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Metrology Quality Assurance Laboratory</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              List of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">Instruments & Gauges</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              At <strong className="text-white">Highlight Engineering Technology</strong>, zero-defect manufacturing is backed by world-standard inspection equipment. We maintain high-precision instruments from Japan's Mitutoyo, Insize, Baker, Micron, and RRP Granite Standards to inspect every micro-machined batch with traceable accuracy.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-left">
                <span className="block text-[10px] font-mono uppercase text-slate-400">Total Gauges</span>
                <span className="text-lg font-black text-white font-mono">12+ Units</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-left">
                <span className="block text-[10px] font-mono uppercase text-slate-400">Highest Precision</span>
                <span className="text-lg font-black text-amber-400 font-mono">0.001 mm (1µm)</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-left">
                <span className="block text-[10px] font-mono uppercase text-slate-400">Surface Table</span>
                <span className="text-lg font-black text-emerald-400 font-mono">1600×1000mm</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl text-left">
                <span className="block text-[10px] font-mono uppercase text-slate-400">Calibration</span>
                <span className="text-lg font-black text-cyan-400 font-mono">100% Traceable</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Filter & Instruments Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search and Filter Control Center */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 mb-8 shadow-2xl backdrop-blur-md">
          
          <div className="space-y-4">
            
            {/* Top row: Search input + View switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, make (Mitutoyo, Insize, Baker...), model, range, or part..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer ${
                    viewMode === 'cards'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Card View</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer ${
                    viewMode === 'table'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Technical Table</span>
                </button>
              </div>

            </div>

            {/* Filter by Category */}
            <div>
              <span className="block text-[11px] font-mono uppercase text-slate-400 mb-2 font-semibold">
                Filter By Category:
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Brand / Make */}
            <div className="pt-2 border-t border-slate-800/80">
              <span className="block text-[11px] font-mono uppercase text-slate-400 mb-2 font-semibold">
                Filter By Make / Manufacturer:
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {makes.map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMake(m)}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                      selectedMake === m
                        ? 'bg-amber-500 text-slate-950 font-bold shadow'
                        : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Results Info Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400 px-1">
          <div>
            Showing <strong className="text-amber-400 font-mono">{filteredInstruments.length}</strong> of {INSTRUMENTS_AND_GAUGES.length} calibrated instruments
            {(selectedCategory !== 'All' || selectedMake !== 'All' || searchTerm) && (
              <span className="ml-2 text-slate-500">
                (Filtered by {selectedCategory !== 'All' ? `category: ${selectedCategory}` : ''} {selectedMake !== 'All' ? `make: ${selectedMake}` : ''} {searchTerm ? `keyword: "${searchTerm}"` : ''})
              </span>
            )}
          </div>
          {(selectedCategory !== 'All' || selectedMake !== 'All' || searchTerm) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedMake('All');
                setSearchTerm('');
              }}
              className="text-amber-400 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* VIEW 1: DETAILED CARDS VIEW */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInstruments.map((inst) => (
              <div
                key={inst.id || inst.sNo}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-1"
              >
                {/* Card Top Header */}
                <div className="p-5 border-b border-slate-800/80 bg-slate-950/60">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      S.NO # {String(inst.sNo).padStart(2, '0')}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${getMakeBadgeColor(inst.make)}`}>
                      {inst.make}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {inst.item}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mt-1 text-xs text-slate-400 font-mono">
                    <span>Model: <strong className="text-slate-300">{inst.model}</strong></span>
                    <span>•</span>
                    <span className="text-emerald-400">{inst.category}</span>
                  </div>
                </div>

                {/* Card Specs Body */}
                <div className="p-5 space-y-4 flex-1 text-left">
                  
                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 font-mono text-xs">
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase">Measuring Range</span>
                      <span className="font-bold text-amber-400">{inst.rangeSize}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase">Accuracy / Fit</span>
                      <span className="font-bold text-emerald-400">{inst.accuracy || 'Master Class'}</span>
                    </div>
                    {inst.leastCount && (
                      <div className="col-span-2 pt-1.5 border-t border-slate-800/80">
                        <span className="text-[10px] text-slate-500 uppercase mr-1">Least Count:</span>
                        <span className="font-bold text-white">{inst.leastCount}</span>
                      </div>
                    )}
                  </div>

                  {/* Usage / Application Description */}
                  <div>
                    <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold mb-1">
                      Inspection Scope & Purpose:
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {inst.usage}
                    </p>
                  </div>

                  {/* Inspected Parts Tags */}
                  {inst.inspectedParts && (
                    <div>
                      <h4 className="text-[10px] font-mono text-slate-400 uppercase font-semibold mb-1.5">
                        Typical Workpieces Inspected:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {inst.inspectedParts.map((part, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-[10px] text-slate-300"
                          >
                            {part}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Calibration status chip */}
                  <div className="flex items-center space-x-1.5 text-[11px] text-emerald-400 font-mono bg-emerald-500/5 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{inst.calibrationStatus || 'Calibrated Master Standard'}</span>
                  </div>

                </div>

                {/* Card Bottom CTA */}
                <div className="p-4 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalInstrument(inst)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>View Full Metrology Spec</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/917010707542?text=Hello%20Highlight%20Engineering,%20I%20have%20an%20inquiry%20regarding%20machining%20inspection%20with%20${encodeURIComponent(inst.item)}%20(${encodeURIComponent(inst.make)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-400 transition-colors"
                    title="Inquire about this instrument"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* VIEW 2: COMPREHENSIVE TECHNICAL TABLE VIEW */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-slate-300 font-mono border-b border-slate-800">
                  <th className="py-4 px-4 font-bold text-amber-400 w-16">S.No</th>
                  <th className="py-4 px-4 font-bold text-white">Item Description / Instrument</th>
                  <th className="py-4 px-4 font-bold text-emerald-400">Make</th>
                  <th className="py-4 px-4 font-bold text-slate-300">Model</th>
                  <th className="py-4 px-4 font-bold text-amber-300">Range / Size</th>
                  <th className="py-4 px-4 font-bold text-cyan-300">Accuracy / Fit</th>
                  <th className="py-4 px-4 font-bold text-slate-400">Category</th>
                  <th className="py-4 px-4 font-bold text-slate-400 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {filteredInstruments.map((inst) => (
                  <tr 
                    key={inst.id || inst.sNo}
                    className="hover:bg-slate-900/60 transition-colors group cursor-pointer"
                    onClick={() => setActiveModalInstrument(inst)}
                  >
                    <td className="py-3.5 px-4 font-bold text-slate-500 group-hover:text-amber-400">
                      {String(inst.sNo).padStart(2, '0')}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-white font-sans">
                      <div>
                        <span>{inst.item}</span>
                        <p className="text-[11px] text-slate-400 font-normal font-sans line-clamp-1 mt-0.5">
                          {inst.usage}
                        </p>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold font-mono border ${getMakeBadgeColor(inst.make)}`}>
                        {inst.make}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 font-mono">
                      {inst.model}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-amber-300 font-mono">
                      {inst.rangeSize}
                    </td>
                    <td className="py-3.5 px-4 text-cyan-300 font-mono text-xs">
                      {inst.accuracy || 'Class Standard'}
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
          </div>
        )}

        {filteredInstruments.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400">
            <Gauge className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-200">No Instruments Found</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any instruments matching "{searchTerm}". Try clearing your filters or search terms.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedMake('All');
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Quality Lab Facility Gallery Strip */}
        <div className="mt-16 rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs font-mono uppercase">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Metrology Environment Standards</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                Calibrated Datum & Rigid Quality Assurance
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our metrology workspace is equipped with heavy Jinan granite surface plates ensuring vibration isolation and zero thermal expansion distortion during coordinate measurement.
              </p>
              
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Periodic calibration traceable to national standards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% First-Article Inspection & Batch sampling reports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Go / No-Go thread & plug verification on every production run</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-2">
                <img
                  src="/assets/instruments-left.png"
                  alt="Quality Calipers and Surface Table"
                  className="w-full h-40 object-contain mx-auto"
                />
                <p className="text-[10px] font-mono text-slate-400 text-center mt-2">Granite Table & Digital Calipers</p>
              </div>

              <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-2">
                <img
                  src="/assets/instruments-right.png"
                  alt="Mitutoyo Bore Gauges and Micrometers"
                  className="w-full h-40 object-contain mx-auto"
                />
                <p className="text-[10px] font-mono text-slate-400 text-center mt-2">Mitutoyo Bore Dials & Thread Gauges</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA for RFQ / Inspection Quote */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-emerald-500/10 border border-slate-800 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white uppercase">
            Need Precision Machined Components Inspected To Micro-Tolerances?
          </h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Contact our engineering team with your 2D drawings / 3D CAD files. We ensure guaranteed tolerance compliance with full inspection certificates.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/#estimator"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 uppercase tracking-wide cursor-pointer"
            >
              <span>Get Instant Machining Quote</span>
              <ExternalLink className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/917010707542?text=Hello%20Highlight%20Engineering,%20I%20have%20drawings%20for%20machining%20with%20critical%20tolerances.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 uppercase tracking-wide cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Rajesh Kumar: +91 70107 07542</span>
            </a>
          </div>
        </div>

      </section>

      {/* FIXED METROLOGY SPECIFICATION MODAL POPUP */}
      {activeModalInstrument && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-hidden animate-in fade-in duration-200"
          onClick={() => setActiveModalInstrument(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[88vh] sm:max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* FIXED MODAL HEADER (Always Visible at Top) */}
            <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-900/95 shrink-0 flex items-start justify-between gap-3">
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

            {/* FIXED MODAL FOOTER (Always Visible at Bottom) */}
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

    </div>
  );
}
