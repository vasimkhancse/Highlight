import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import InstrumentsPage from './pages/InstrumentsPage';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import './App.css';

// Auto scroll to top or target hash on route changes
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const navOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
        
        {/* Helper to reset scroll on route transition */}
        <ScrollToTop />

        {/* Top Fixed Navigation */}
        <Navbar />

        {/* Application Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/instruments" element={<InstrumentsPage />} />
          <Route path="/instruments-and-gauges" element={<InstrumentsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Floating Action Button for WhatsApp */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
          <a
            href="https://wa.me/917010707542?text=Hello%20Highlight%20Engineering%20Technology,%20I%20have%20an%20urgent%20machining%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
            aria-label="Chat on WhatsApp"
          >
            {/* Real WhatsApp Vector SVG */}
            <svg
              viewBox="0 0 32 32"
              className="w-7 h-7 fill-current drop-shadow-sm"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.766.804 5.342 2.19 7.514L2.054 29.24a1 1 0 001.218 1.218l5.86-2.128A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm7.644 19.38c-.32.902-1.59 1.66-2.584 1.874-.682.146-1.572.264-4.57-1.002-3.834-1.618-6.3-5.502-6.492-5.758-.186-.256-1.542-2.054-1.542-3.916 0-1.862.974-2.778 1.32-3.13.344-.352.754-.44 1.006-.44.254 0 .508.002.73.014.236.01.55-.09.86.654.32.77 1.09 2.664 1.186 2.858.096.196.16.424.032.68-.128.256-.192.416-.384.64-.192.224-.404.5-.578.672-.192.192-.394.4-.17.784.224.384.996 1.644 2.14 2.664 1.472 1.31 2.714 1.716 3.098 1.908.384.192.608.16.832-.096.224-.256.96-1.12 1.216-1.504.256-.384.512-.32.86-.192.352.128 2.234 1.054 2.618 1.246.384.192.64.288.736.448.096.16.096.93-.224 1.832z" />
            </svg>
            <span className="sr-only">Chat on WhatsApp</span>

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-slate-700">
              Chat on WhatsApp
            </span>
          </a>
        </div>

      </div>
    </BrowserRouter>
  );
}
