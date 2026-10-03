import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Building2, 
  Gauge, 
  Play, 
  Pause,
  Download
} from 'lucide-react';
import { HOME_BANNERS } from '../data/companyData';
import { Link, useNavigate } from 'react-router-dom';

export default function HomeBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const navigate = useNavigate();

  const SLIDE_DURATION = 2000; // 6 seconds per slide

  // Handle slide progress and autoplay
  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    const progressStep = (stepMs / SLIDE_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % HOME_BANNERS.length);
          return 0;
        }
        return prev + progressStep;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, currentIndex]);

  const handleSelectSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? HOME_BANNERS.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HOME_BANNERS.length);
    setProgress(0);
  };

  const currentBanner = HOME_BANNERS[currentIndex];

  const getSlideIcon = (id) => {
    switch (id) {
      case 'about-us':
        return <Building2 className="w-4 h-4 text-amber-400" />;
      case 'instruments-and-gauges':
        return <Gauge className="w-4 h-4 text-emerald-400" />;
      case 'explore-machinery':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-amber-400" />;
    }
  };

  const handleCtaClick = (e, cta) => {
    if (cta.isInternalPage) {
      // Let React Router handle internal routing
      return;
    }
    if (cta.href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(cta.href);
      if (el) {
        const offset = 80;
        const topPos = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative bg-slate-950 pt-24 pb-8 overflow-hidden border-b border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       

        {/* Main Banner Hero Card */}
        <div 
          className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/90 group min-h-[460px] sm:min-h-[500px] flex items-center"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Background Banner Image with Smooth Fade */}
          <div className="absolute inset-0 z-0">
            {HOME_BANNERS.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
                style={{ transitionProperty: 'opacity, transform' }}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
                />
                {/* Multi-stage High-Contrast Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30 sm:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
              </div>
            ))}
          </div>

          {/* Banner Content Container */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-2xl text-left space-y-5">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 backdrop-blur-md text-amber-400 text-xs sm:text-sm font-semibold tracking-wide shadow-lg">
              {getSlideIcon(currentBanner.id)}
              <span>{currentBanner.tag}</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.15] drop-shadow-md">
              {currentBanner.title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium drop-shadow max-w-xl">
              {currentBanner.subtitle}
            </p>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {currentBanner.highlights.map((h, i) => (
                <div 
                  key={i} 
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-xs font-mono text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {currentBanner.primaryCta.isInternalPage ? (
                <Link
                  to={currentBanner.primaryCta.href}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all uppercase tracking-wider cursor-pointer"
                >
                  <span>{currentBanner.primaryCta.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <a
                  href={currentBanner.primaryCta.href}
                  onClick={(e) => handleCtaClick(e, currentBanner.primaryCta)}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5 transition-all uppercase tracking-wider cursor-pointer"
                >
                  <span>{currentBanner.primaryCta.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}

              {currentBanner.secondaryCta && (
                currentBanner.secondaryCta.isDownload ? (
                  <a
                    href={currentBanner.secondaryCta.href}
                    download="Highlight-Engineering-Technology-Profile.pdf"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/60 backdrop-blur-md font-bold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>{currentBanner.secondaryCta.text}</span>
                  </a>
                ) : (
                  <a
                    href={currentBanner.secondaryCta.href}
                    onClick={(e) => handleCtaClick(e, currentBanner.secondaryCta)}
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/60 backdrop-blur-md font-bold text-xs sm:text-sm transition-all cursor-pointer"
                  >
                    <span>{currentBanner.secondaryCta.text}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )
              )}
            </div>

          </div>

          

          {/* Slide Progress Bar at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800/80 z-20">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>

       

      </div>

    </section>
  );
}
