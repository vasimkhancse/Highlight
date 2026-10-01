import React, { useState } from 'react';
import { 
  Calculator, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  FileCheck,
  RotateCcw,
  Zap,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/companyData';

export default function RfqEstimator() {
  const [material, setMaterial] = useState('Aluminum 6061 / 7075');
  const [operation, setOperation] = useState('VMC 3-Axis Milling (Vetrimach V650)');
  const [quantity, setQuantity] = useState(25);
  const [tolerance, setTolerance] = useState('± 0.02 mm (Precision Engineering)');
  const [leadTimeNeeded, setLeadTimeNeeded] = useState('Standard (5-7 Days)');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const materials = [
    'Aluminum 6061 / 7075',
    'Stainless Steel (SS 304 / 316 / 410)',
    'Mild Steel / Carbon (EN8 / EN19 / EN24)',
    'Brass / Bronze / Copper Alloys',
    'Engineering Plastics (Delrin / Nylon / PTFE)',
    'Cast Iron / Die & Tool Steels'
  ];

  const operations = [
    'VMC 3-Axis Milling (Vetrimach V650)',
    'Heavy Centre Lathe Turning (DSG / Lodge Shipley)',
    'Combined VMC Milling + Lathe Turning',
    'Rapid Precision Prototype / Tooling',
    'Custom Fixture & Jig Machining'
  ];

  const tolerances = [
    '± 0.05 mm (General Engineering)',
    '± 0.02 mm (Precision Engineering)',
    '± 0.005 mm (High Precision Metrology Checked)'
  ];

  const handleCalculateAndSend = (channel) => {
    // Trigger confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log(e);
    }

    setSubmitted(true);

    const message = `*NEW RFQ INQUIRY - HIGHLIGHT ENGINEERING TECHNOLOGY*%0A` +
      `---------------------------------------%0A` +
      `*Client:* ${clientName || 'Valued Customer'}%0A` +
      `*Company:* ${clientCompany || 'N/A'}%0A` +
      `*Phone:* ${clientPhone || 'N/A'}%0A%0A` +
      `*Machining Details:*%0A` +
      `• *Material:* ${material}%0A` +
      `• *Operation:* ${operation}%0A` +
      `• *Batch Quantity:* ${quantity} Units%0A` +
      `• *Tolerance:* ${tolerance}%0A` +
      `• *Lead Time:* ${leadTimeNeeded}%0A` +
      `• *Job Notes:* ${jobDescription || 'Standard requirements as per drawing'}%0A` +
      `---------------------------------------%0A` +
      `Please provide quotation & production schedule.`;

    if (channel === 'whatsapp') {
      window.open(`https://wa.me/917010707542?text=${message}`, '_blank');
    } else {
      window.location.href = `mailto:${COMPANY_INFO.email}?subject=Machining Quote Request - ${encodeURIComponent(clientCompany || clientName || 'Component RFQ')}&body=${message.replace(/%0A/g, '%0D%0A').replace(/\*/g, '')}`;
    }
  };

  return (
    <section id="estimator" className="py-20 bg-slate-950 relative overflow-hidden border-b border-slate-800">
      
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive RFQ & Cost Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Instant Machining <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Quote & Requirement Builder</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Select your component material, machining operation, batch volume and required tolerance to generate an immediate direct quote request for our Coimbatore engineering team.
          </p>
        </div>

        {/* 2-Column RFQ Generator Form & Live Summary Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Selection Grid */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 text-left shadow-2xl">
            
            {/* 1. Material Choice */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                1. Select Raw Material Grade
              </label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
              >
                {materials.map((m) => (
                  <option key={m} value={m} className="bg-slate-950 text-white py-1">
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Machining Operation */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                2. Machining Process & Machine Selection
              </label>
              <select
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
              >
                {operations.map((op) => (
                  <option key={op} value={op} className="bg-slate-950 text-white py-1">
                    {op}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Batch Quantity Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  3. Batch Quantity (Units / Pieces)
                </label>
                <span className="text-sm font-mono font-bold text-amber-400 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                  {quantity} Units
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="500"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>1 (Prototype)</span>
                <span>50 (Small Batch)</span>
                <span>200 (Production)</span>
                <span>500+ (High Volume)</span>
              </div>
            </div>

            {/* 4. Tolerance Level */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2">
                4. Inspection Tolerance Requirement
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {tolerances.map((tol) => (
                  <button
                    key={tol}
                    type="button"
                    onClick={() => setTolerance(tol)}
                    className={`p-3 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer ${
                      tolerance === tol
                        ? 'bg-amber-500/20 border-2 border-amber-500 text-amber-300'
                        : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {tol}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Contact Details for Quote */}
            <div className="pt-4 border-t border-slate-800/80 space-y-4">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                5. Your Contact & Company Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name / Designation *"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                <input
                  type="tel"
                  placeholder="Mobile / WhatsApp Number *"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-500 sm:col-span-2"
                />
              </div>

              <textarea
                placeholder="Job description, component drawing notes, surface finish or special requirements..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                rows={2}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>

          </div>

          {/* Right: Real-time Live Summary & Instant Dispatch Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6 text-left shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                  <FileCheck className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-heading">RFQ Specification Summary</h3>
                  <span className="text-[10px] font-mono text-slate-400">Direct Route to Technical Lead</span>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                Ready
              </span>
            </div>

            {/* Spec breakdown items */}
            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">Material:</span>
                <span className="text-white font-semibold text-right max-w-[200px] truncate">{material}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">Machine Process:</span>
                <span className="text-amber-400 font-semibold text-right max-w-[200px] truncate">{operation}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">Quantity:</span>
                <span className="text-white font-bold">{quantity} Pcs</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">Tolerance Class:</span>
                <span className="text-emerald-400 font-semibold">{tolerance.split('(')[0]}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">Facility Assignment:</span>
                <span className="text-slate-300">Chinnavedampatti Shop</span>
              </div>
            </div>

            {/* Quality badge reminder */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-400 flex items-start space-x-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Quotes are reviewed by our CAD/CAM Designer & Technical Partners within 2 business hours.</span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => handleCalculateAndSend('whatsapp')}
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all cursor-pointer uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send RFQ via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => handleCalculateAndSend('email')}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all cursor-pointer uppercase tracking-wider"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
                <span>Send RFQ via Official Email</span>
              </button>
            </div>

            {/* Direct Phone contact */}
            <div className="pt-2 text-center text-xs text-slate-500">
              <span>Or speak directly: </span>
              <a href="tel:+917010707542" className="text-amber-400 font-semibold hover:underline">
                Rajesh (+91 70107 07542)
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
