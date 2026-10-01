import React, { useState, useEffect } from 'react';

/**
 * Centered Industrial Precision Page Loader for Highlight Engineering Technology
 * Featuring a Realistic Chrome Vanadium Combination Spanner executing precision torque tightening strokes
 * with specular chrome sweeps, calibration dial, and authentic machine shop aesthetics.
 */
export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Smooth progress counter simulation for initial page assets loading
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const diff = Math.random() * 25 + 15;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    // After loading completes, initiate smooth fade out
    const timer = setTimeout(() => {
      setIsFading(true);
      const exitTimer = setTimeout(() => {
        setLoading(false);
      }, 500); // 500ms fade transition
      return () => clearTimeout(exitTimer);
    }, 1400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  // Listen to hash changes (for in-page section navigation clicks)
  useEffect(() => {
    const handleHashChange = () => {
      setLoading(true);
      setIsFading(false);
      setProgress(40);
      const timer = setTimeout(() => {
        setProgress(100);
        setIsFading(true);
        setTimeout(() => setLoading(false), 400);
      }, 600);
      return () => clearTimeout(timer);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (!loading) return null;

  return (
    <>
      <style>{`
        @keyframes spannerTorque {
          0% { transform: rotate(0deg); }
          30% { transform: rotate(-22deg); }
          55% { transform: rotate(4deg); }
          75% { transform: rotate(-12deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes boltPulse {
          0%, 100% { transform: scale(1); }
          35% { transform: scale(0.97) rotate(-3deg); }
          60% { transform: scale(1.04) rotate(2deg); }
        }

        @keyframes chromeSweep {
          0% { transform: translateY(-20px) rotate(25deg); opacity: 0; }
          30% { opacity: 0.85; }
          70% { opacity: 0.85; }
          100% { transform: translateY(60px) rotate(25deg); opacity: 0; }
        }

        @keyframes sparkFlicker {
          0%, 100% { opacity: 0; transform: scale(0.6); }
          45% { opacity: 0.2; transform: scale(0.8); }
          55% { opacity: 1; transform: scale(1.4); }
          65% { opacity: 0.2; transform: scale(0.8); }
        }

        .spanner-torque-motion {
          transform-origin: 60px 30px;
          animation: spannerTorque 1.8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
        }

        .bolt-tighten-pulse {
          transform-origin: 60px 30px;
          animation: boltPulse 1.8s ease-in-out infinite;
        }

        .chrome-glint-sweep {
          animation: chromeSweep 2.2s ease-in-out infinite;
        }

        .torque-spark {
          animation: sparkFlicker 1.8s ease-in-out infinite;
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 backdrop-blur-md transition-all duration-500 select-none ${
          isFading ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100 scale-100'
        }`}
        role="status"
        aria-label="Loading Highlight Engineering Technology..."
      >
        <div className="relative flex flex-col items-center justify-center p-8 bg-slate-900/90 rounded-3xl shadow-2xl border border-amber-500/20 max-w-[320px] w-full mx-4 backdrop-blur-xl">
          
          {/* Subtle Glow Ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-amber-500/20 blur-xl opacity-75"></div>

          {/* Main Animation Stage */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            
            {/* Outer Precision Calibrated Dial */}
            <div
              className="absolute inset-0 rounded-full border border-dashed border-slate-700 animate-spin"
              style={{ animationDuration: '10s' }}
            ></div>
            <div
              className="absolute inset-1.5 rounded-full border-2 border-transparent border-t-amber-500 border-r-amber-500/40 animate-spin"
              style={{ animationDuration: '1.8s' }}
            ></div>
            
            {/* Subtle Radial Amber Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent blur-md"></div>

            {/* Precision Chrome Spanner & Bolt SVG */}
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              <defs>
                {/* Ultra-Realistic Chrome Mirror Gradient */}
                <linearGradient id="realMirrorChrome" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="15%" stopColor="#F1F5F9" />
                  <stop offset="32%" stopColor="#94A3B8" />
                  <stop offset="48%" stopColor="#475569" />
                  <stop offset="50%" stopColor="#0F172A" />
                  <stop offset="52%" stopColor="#475569" />
                  <stop offset="70%" stopColor="#E2E8F0" />
                  <stop offset="85%" stopColor="#CBD5E1" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>

                {/* Recessed Handle Satin Industrial Finish */}
                <linearGradient id="handleRecess" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0F172A" />
                  <stop offset="25%" stopColor="#1E293B" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="75%" stopColor="#1E293B" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>

                {/* Edge Specular Polish Gradient */}
                <linearGradient id="specularEdge" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#CBD5E1" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
                </linearGradient>

                {/* Stainless Steel Hex Bolt Gradients */}
                <linearGradient id="hexFacetLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F8FAFC" />
                  <stop offset="100%" stopColor="#94A3B8" />
                </linearGradient>
                <linearGradient id="hexFacetMid" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#CBD5E1" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>
                <linearGradient id="hexFacetDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#64748B" />
                  <stop offset="100%" stopColor="#1E293B" />
                </linearGradient>

                {/* Dynamic Chrome Sheen Overlay Gradient */}
                <linearGradient id="gleamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>

                {/* Drop Shadow Filter */}
                <filter id="wrenchShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.6" />
                </filter>
              </defs>

              {/* STATIC / INTERACTING HEX BOLT & WASHER (Pivot point at x=60, y=30) */}
              <g className="bolt-tighten-pulse">
                {/* Machined Washer Base */}
                <circle cx="60" cy="30" r="14" fill="#334155" stroke="#1E293B" strokeWidth="0.8" />
                <circle cx="60" cy="30" r="13" fill="url(#hexFacetMid)" stroke="#94A3B8" strokeWidth="0.6" />
                
                {/* 3D Chamfered Hexagonal Bolt Head */}
                <polygon points="60,21 51,25.5 51,34.5 60,30" fill="url(#hexFacetLight)" stroke="#0F172A" strokeWidth="0.4" />
                <polygon points="60,21 69,25.5 69,34.5 60,30" fill="url(#hexFacetMid)" stroke="#0F172A" strokeWidth="0.4" />
                <polygon points="51,34.5 60,39 69,34.5 60,30" fill="url(#hexFacetDark)" stroke="#0F172A" strokeWidth="0.4" />
                
                {/* Central Pilot / Allen Recess with Amber Indicator */}
                <circle cx="60" cy="30" r="3.2" fill="#0F172A" stroke="#475569" strokeWidth="0.5" />
                <circle cx="60" cy="30" r="1.5" fill="#F59E0B" opacity="0.9" />
              </g>

              {/* REAL COMBINATION SPANNER (Rotating on Bolt Pivot at x=60, y=30) */}
              <g className="spanner-torque-motion" filter="url(#wrenchShadow)">
                
                {/* Main Solid Chrome Forged Outer Profile */}
                <path
                  d="
                    M52,24
                    C49,20 49,15 54,12
                    C60,9 69,11 72,17
                    C74,21 73,26 69,29
                    L66,42
                    C65,48 66,74 65,82
                    C68,85 71,90 70,97
                    C69,104 62,109 55,108
                    C48,107 43,101 44,94
                    C45,88 48,84 53,81
                    L52,42
                    C51,34 50,30 48,27
                    Z
                  "
                  fill="url(#realMirrorChrome)"
                  stroke="#0F172A"
                  strokeWidth="0.8"
                />

                {/* Realistic Open-End Wrench Jaws Cutout */}
                <path
                  d="
                    M54,12
                    C56,15 57,21 54,26
                    L61,31
                    L67,23
                    C68,19 66,14 62,11
                    Z
                  "
                  fill="#CBD5E1"
                  opacity="0.95"
                />

                {/* Open-End Inner Gripping Flat Contacts */}
                <line x1="54" y1="26" x2="61" y2="31" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />
                <line x1="61" y1="31" x2="67" y2="23" stroke="#0F172A" strokeWidth="1.2" strokeLinecap="round" />

                {/* Handle I-Beam Recessed Central Panel */}
                <rect
                  x="55.5"
                  y="45"
                  width="7"
                  height="35"
                  rx="2"
                  fill="url(#handleRecess)"
                  stroke="#0F172A"
                  strokeWidth="0.8"
                />

                {/* Embossed Brand Markings on Handle */}
                <g transform="rotate(90, 59, 62.5)">
                  <text
                    x="59"
                    y="63.5"
                    fontSize="4"
                    fontWeight="900"
                    fontFamily="monospace"
                    letterSpacing="0.8"
                    fill="#F59E0B"
                    textAnchor="middle"
                    opacity="0.95"
                  >
                    HET CR-V
                  </text>
                </g>

                {/* Lower Box / Ring End - 12-Point Socket Broach */}
                <circle cx="57" cy="95" r="9.5" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.8" />
                <circle cx="57" cy="95" r="6" fill="#1E293B" stroke="#0F172A" strokeWidth="1.2" />
                
                {/* 12-Point Bi-Hex Teeth Notches */}
                <path
                  d="
                    M57,89.5 L57,100.5
                    M51.5,95 L62.5,95
                    M53.1,91.1 L60.9,98.9
                    M53.1,98.9 L60.9,91.1
                  "
                  stroke="#F59E0B"
                  strokeWidth="0.9"
                  strokeLinecap="round"
                />
                <circle cx="57" cy="95" r="2.5" fill="#0F172A" />

                {/* Specular Chrome Reflection Highlight Bevels */}
                <path
                  d="M54,12 C60,9 68,11 71,16"
                  stroke="url(#specularEdge)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <line x1="64.5" y1="44" x2="63.5" y2="80" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.8" />
                <line x1="53.5" y1="44" x2="54.5" y2="80" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />

                {/* Dynamic Chrome Gleam Sweep Band */}
                <rect
                  className="chrome-glint-sweep"
                  x="45"
                  y="35"
                  width="28"
                  height="8"
                  fill="url(#gleamGradient)"
                />
              </g>

              {/* Torque Contact Micro-Sparks */}
              <circle cx="61" cy="31" r="1.8" fill="#FDE047" className="torque-spark drop-shadow-[0_0_6px_#F59E0B]" />
              <circle cx="54" cy="26" r="1.2" fill="#FFFFFF" className="torque-spark drop-shadow-[0_0_4px_#F59E0B]" />
            </svg>
          </div>

          {/* Precision Branding & Status */}
          <div className="mt-5 flex flex-col items-center text-center">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-black tracking-widest text-slate-100 uppercase font-mono">
                HIGHLIGHT ENGINEERING
              </span>
            </div>
            <span className="text-[10px] font-medium text-amber-400/90 tracking-widest mt-1 uppercase">
              Precision CNC & Machining Solutions
            </span>
          </div>

          {/* Micro Progress Bar */}
          <div className="w-full mt-4 bg-slate-800/80 h-1.5 rounded-full overflow-hidden border border-slate-700/60">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-300 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>

          <div className="mt-2 text-[10px] font-mono text-slate-500 tracking-wider">
            CALIBRATING SYSTEM {Math.round(progress)}%
          </div>

        </div>
      </div>
    </>
  );
}
