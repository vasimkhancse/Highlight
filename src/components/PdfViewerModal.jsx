import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Maximize2, 
  FileText,
  Layers,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { PDF_PAGES, COMPANY_INFO } from '../data/companyData';

export default function PdfViewerModal({ isOpen, onClose, initialPage = 1 }) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setCurrentPage(initialPage);
    setZoomLevel(1);
  }, [initialPage, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentPage < PDF_PAGES.length) setCurrentPage(p => p + 1);
      if (e.key === 'ArrowLeft' && currentPage > 1) setCurrentPage(p => p - 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage, onClose]);

  if (!isOpen) return null;

  const currentSlide = PDF_PAGES[currentPage - 1];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-lg flex flex-col justify-between p-2 sm:p-4 animate-in fade-in duration-200">
      
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-2xl p-3 sm:px-6 shadow-xl">
        
        {/* Left: Document Info */}
        <div className="flex items-center space-x-3 text-left">
          <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
            <FileText className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white font-heading truncate max-w-[200px] sm:max-w-md">
              Highlight Engineering Technology - Company Profile
            </h3>
            <span className="text-[11px] font-mono text-slate-400">
              Page {currentPage} of {PDF_PAGES.length}: <strong className="text-amber-300">{currentSlide.title}</strong>
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center space-x-1 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setZoomLevel(z => Math.max(0.8, z - 0.2))}
              className="p-1 text-slate-400 hover:text-white"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400 px-1">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setZoomLevel(z => Math.min(1.8, z + 0.2))}
              className="p-1 text-slate-400 hover:text-white"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Download Original PDF Button */}
          <a
            href="/Highlight-Engineering-Technology-Profile.pdf"
            download="Highlight-Engineering-Technology-Profile.pdf"
            className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download PDF</span>
          </a>

          {/* Close Modal */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Close (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Main Slide Viewer Canvas */}
      <div className="relative flex-1 my-3 flex items-center justify-center overflow-hidden">
        
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className={`absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-slate-900/90 border border-slate-700 text-white shadow-2xl transition-all ${
            currentPage === 1 
              ? 'opacity-30 cursor-not-allowed' 
              : 'hover:bg-amber-500 hover:text-slate-950 hover:scale-110 cursor-pointer'
          }`}
          title="Previous Page"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* High Resolution Page Render */}
        <div 
          className="max-h-full max-w-full flex items-center justify-center p-2 transition-transform duration-200"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <div className="relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src={currentSlide.image}
              alt={`Page ${currentPage} - ${currentSlide.title}`}
              className="max-h-[68vh] sm:max-h-[72vh] w-auto object-contain select-none"
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(p => Math.min(PDF_PAGES.length, p + 1))}
          disabled={currentPage === PDF_PAGES.length}
          className={`absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-slate-900/90 border border-slate-700 text-white shadow-2xl transition-all ${
            currentPage === PDF_PAGES.length 
              ? 'opacity-30 cursor-not-allowed' 
              : 'hover:bg-amber-500 hover:text-slate-950 hover:scale-110 cursor-pointer'
          }`}
          title="Next Page"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-2.5 shadow-xl">
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 overflow-x-auto py-1 scrollbar-thin">
          {PDF_PAGES.map((page) => (
            <button
              key={page.pageNumber}
              onClick={() => setCurrentPage(page.pageNumber)}
              className={`relative rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                currentPage === page.pageNumber
                  ? 'border-amber-500 ring-2 ring-amber-500/40 scale-105'
                  : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
              }`}
            >
              <img
                src={page.image}
                alt={`Page ${page.pageNumber}`}
                className="w-14 sm:w-20 h-9 sm:h-12 object-cover"
              />
              <span className="absolute bottom-0 inset-x-0 bg-slate-950/80 text-[9px] font-mono text-center text-slate-200">
                {page.pageNumber}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
