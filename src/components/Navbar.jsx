import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Infrastructure', href: '#infrastructure', isRoute: false },
    { name: 'Machinery', href: '#machinery', isRoute: false },
    { name: 'Instruments & Gauges', href: '/instruments', isRoute: true },
    { name: 'Quality Lab', href: '#quality', isRoute: false },
    { name: 'Clients', href: '#clients', isRoute: false },
    { name: 'Cost Estimator', href: '#estimator', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false }
  ];

  const handleNavClick = (e, link) => {
    setMobileMenuOpen(false);

    if (link.isRoute) {
      return;
    }

    e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/' + link.href);
      return;
    }

    const element = document.querySelector(link.href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = (e) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar with contact info & GST */}
      <div className="bg-slate-950/90 border-b border-slate-800/80 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-400">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Chinnavedampatti, Coimbatore - 641049</span>
            </div>
            <div className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_INFO.email}</span>
            </div>
            <div className="flex items-center space-x-1 text-slate-500 border-l border-slate-800 pl-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>GSTIN: <strong className="text-slate-300 font-mono">{COMPANY_INFO.gstin}</strong></span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${COMPANY_INFO.contacts[0].mobile}`} 
              className="flex items-center space-x-1 hover:text-amber-400 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{COMPANY_INFO.contacts[0].name.split(' ')[0]}: {COMPANY_INFO.contacts[0].mobile}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`tel:${COMPANY_INFO.contacts[1].mobile}`} 
              className="flex items-center space-x-1 hover:text-amber-400 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>{COMPANY_INFO.contacts[1].name.split(' ')[0]}: {COMPANY_INFO.contacts[1].mobile}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/40 py-2.5' 
          : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-900 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Company Name */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/assets/logo.png" 
                alt="Highlight Engineering Logo" 
                className="w-full h-full object-cover rounded-[7px] bg-amber-100"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase font-heading">
                Highlight <span className="text-amber-500">Engineering</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase font-semibold">
                Technology • Machine Shop
              </span>
            </div>
          </Link>

          {/* Desktop Links (Normal consistent styling for all items) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isCurrentRoute = link.isRoute && location.pathname === link.href;
              return link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isCurrentRoute
                      ? 'text-amber-400 bg-slate-900/90 font-semibold'
                      : 'text-slate-300 hover:text-amber-400 hover:bg-slate-900/60'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900/60 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={(e) => handleNavClick(e, { href: '#estimator', isRoute: false })}
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all cursor-pointer uppercase tracking-wider"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get Instant Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white lg:hidden rounded-lg hover:bg-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isCurrentRoute = link.isRoute && location.pathname === link.href;
              return link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                    isCurrentRoute
                      ? 'text-amber-400 bg-slate-900 font-semibold'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900 rounded-lg"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2.5">
            <a
              href={`https://wa.me/917010707542?text=Hello%20Highlight%20Engineering%20Technology,%20I%20would%20like%20to%20request%20a%20machining%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Quick WhatsApp Enquiry</span>
            </a>
          </div>

          <div className="pt-2 text-center text-xs text-slate-500">
            <p>GSTIN: {COMPANY_INFO.gstin}</p>
            <p className="mt-1">Chinnavedampatti, Coimbatore - 641049</p>
          </div>
        </div>
      )}
    </header>
  );
}
