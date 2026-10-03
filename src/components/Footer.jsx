import React from 'react';
import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  MessageCircle, 
  Heart, 
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 text-left">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/20">
                <img 
                  src="/assets/logo.png" 
                  alt="Highlight Engineering Logo" 
                  className="w-full h-full object-cover rounded-[7px] bg-amber-100"
                />
              </div>
              <div>
                <h3 className="text-base font-black text-white uppercase font-heading">
                  Highlight <span className="text-amber-500">Engineering</span>
                </h3>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Technology • Coimbatore
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              We are a team of qualified professionals with proficient technical background undertaking precision CNC VMC milling, heavy-duty lathe turning, and strict metrology quality assurance.
            </p>

            <div className="pt-2 flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>GST: <strong>{COMPANY_INFO.gstin}</strong></span>
              </span>
            </div>
          </div>

          {/* Col 2: Machinery & Capabilities */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              Machinery & Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-white transition-colors flex items-center space-x-1.5">
                <ChevronRight className="w-3 h-3 text-amber-500" />
                <span>Vetrimach V650 CNC Milling (TAL)</span>
              </li>
              <li className="hover:text-white transition-colors flex items-center space-x-1.5">
                <ChevronRight className="w-3 h-3 text-amber-500" />
                <span>DSG 25 Heavy Lathe (1500mm Bed)</span>
              </li>
              <li className="hover:text-white transition-colors flex items-center space-x-1.5">
                <ChevronRight className="w-3 h-3 text-amber-500" />
                <span>DSG 17 Precision Lathe (UK)</span>
              </li>
              <li className="hover:text-white transition-colors flex items-center space-x-1.5">
                <ChevronRight className="w-3 h-3 text-amber-500" />
                <span>Lodge & Shipley LS 54 Lathe (USA)</span>
              </li>
              <li className="hover:text-white transition-colors flex items-center space-x-1.5">
                <ChevronRight className="w-3 h-3 text-amber-500" />
                <span>Mitutoyo & Insize Metrology Lab</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="/#about" className="hover:text-amber-400 transition-colors">About Company</a></li>
              <li><a href="/#infrastructure" className="hover:text-amber-400 transition-colors">Facility & Staff</a></li>
              <li><a href="/#machinery" className="hover:text-amber-400 transition-colors">Machinery Specs</a></li>
              <li><a href="/instruments" className="hover:text-amber-400 transition-colors"><span>Instruments & Gauges</span></a></li>
              <li><a href="/#quality" className="hover:text-amber-400 transition-colors">Quality Lab Summary</a></li>
              <li><a href="/#clients" className="hover:text-amber-400 transition-colors">Client Portfolio</a></li>
              <li><a href="/#estimator" className="hover:text-amber-400 transition-colors">RFQ Cost Estimator</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Brochure */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Bharathi St, Chinnavedampatti, Coimbatore - 641049</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+917010707542" className="hover:text-amber-400 font-mono">+91 70107 07542</a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 font-mono truncate">{COMPANY_INFO.email}</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Highlight Engineering Technology. All rights reserved.</p>
          
          <div className="flex items-center space-x-4">
            <span className="font-mono">Coimbatore, Tamil Nadu</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors flex items-center space-x-1 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-mono font-semibold">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
