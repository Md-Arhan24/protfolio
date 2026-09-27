import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isDoneWriting, setIsDoneWriting] = useState(false);
  const [pencilPos, setPencilPos] = useState({ x: 195, y: 268 });
  const [showPencil, setShowPencil] = useState(false);

  const pathRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Accurate cursive calligraphy handwriting stroke path for "Arhan" with flourishes
  const cursivePath = [
    // 1. Entry flourish and Capital 'A'
    "M 195,268",
    "C 188,260 188,250 198,248 C 208,246 210,256 200,265 C 190,274 210,282 250,275",
    "C 300,265 370,180 435,85 C 450,65 465,70 460,95",
    "C 450,150 395,240 365,285 C 350,305 340,295 348,275",
    "C 365,230 410,180 445,185 C 465,188 460,225 435,265",
    "C 420,290 400,295 390,285 C 385,275 395,255 425,230",

    // 2. Connector to 'r' & lowercase 'r'
    "C 445,210 465,195 480,200 C 495,205 485,245 500,265",

    // 3. Connector to 'h' & ascender loop of 'h'
    "C 515,250 545,160 570,85 C 585,60 595,70 585,100",
    "C 565,165 530,250 525,285 C 525,265 545,215 575,195",
    "C 600,180 615,205 605,245 C 600,265 615,275 630,255",

    // 4. Connector to 'a' & oval loop of 'a'
    "C 645,235 660,195 675,190 C 660,190 640,210 640,240",
    "C 640,270 665,278 685,260 C 700,245 705,210 695,190",
    "C 695,215 690,255 700,270 C 710,280 720,270 730,250",

    // 5. Connector to 'n' & two arches of 'n'
    "C 740,230 750,195 765,190 C 765,215 755,255 768,270",
    "C 780,245 795,200 815,195 C 830,195 830,230 820,265",

    // 6. Grand sweeping golden flourish to the right with curl (matches reference image underline!)
    "C 825,275 860,265 910,240 C 950,220 985,220 990,235 C 995,250 970,255 930,265 C 850,285 700,290 550,285"
  ].join(' ');

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${totalLength}`;

    // Initial position
    const startPoint = path.getPointAtLength(0);
    setPencilPos({ x: startPoint.x, y: startPoint.y });
    setShowPencil(true);

    let startTime = null;
    const duration = 2800; // ~2.8 seconds writing time

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateWriting = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawT = Math.min(elapsed / duration, 1);
      const t = easeInOutCubic(rawT);

      const currentLength = t * totalLength;
      path.style.strokeDashoffset = `${totalLength - currentLength}`;

      if (currentLength > 0 && currentLength <= totalLength) {
        const pt = path.getPointAtLength(currentLength);
        setPencilPos({ x: pt.x, y: pt.y });
      }

      if (rawT < 1) {
        animationFrameRef.current = requestAnimationFrame(animateWriting);
      } else {
        // Complete writing
        setIsDoneWriting(true);

        // Keep glowing text visible for a moment, then auto-enter
        setTimeout(() => {
          handleComplete();
        }, 1200);
      }
    };

    // Small delay before pencil starts writing
    const timer = setTimeout(() => {
      animationFrameRef.current = requestAnimationFrame(animateWriting);
    }, 250);

    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, 700);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          onClick={handleComplete}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] cursor-pointer select-none overflow-hidden"
          title="Click anywhere to skip"
        >
          {/* Deep black screen with ambient gold center radiance */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#D4AF37]/10 via-[#F3E5AB]/15 to-transparent blur-[140px] pointer-events-none" />

          {/* SVG Handwriting Canvas */}
          <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center justify-center">
            <svg
              viewBox="140 30 890 310"
              className="w-full h-auto max-h-[55vh] overflow-visible"
            >
              <defs>
                {/* Metallic Gold Gradient for Handwriting matching reference image */}
                <linearGradient id="arhanGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#AA771C" />
                  <stop offset="20%" stopColor="#D4AF37" />
                  <stop offset="45%" stopColor="#FFF2B2" />
                  <stop offset="60%" stopColor="#F5D77F" />
                  <stop offset="85%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#85580F" />
                </linearGradient>

                {/* Pencil Body Metallic Gold Gradient */}
                <linearGradient id="pencilBodyGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7A5200" />
                  <stop offset="30%" stopColor="#F5D77F" />
                  <stop offset="55%" stopColor="#D4AF37" />
                  <stop offset="85%" stopColor="#B8860B" />
                  <stop offset="100%" stopColor="#664408" />
                </linearGradient>

                {/* Pencil Sharpened Wood Gradient */}
                <linearGradient id="pencilWood" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C49B58" />
                  <stop offset="50%" stopColor="#F3D59B" />
                  <stop offset="100%" stopColor="#B58947" />
                </linearGradient>

                {/* Golden Glow Filter */}
                <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur1" />
                  <feGaussianBlur stdDeviation="14" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Underlying Glow Stroke Path */}
              <path
                d={cursivePath}
                fill="none"
                stroke="url(#arhanGoldGrad)"
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={isDoneWriting ? 0.6 : 0.3}
                filter="url(#goldGlow)"
              />

              {/* 2. Main Cursive Handwriting Stroke written by Pencil */}
              <path
                ref={pathRef}
                d={cursivePath}
                fill="none"
                stroke="url(#arhanGoldGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-300"
                style={{
                  filter: isDoneWriting 
                    ? 'drop-shadow(0 0 12px rgba(243, 229, 171, 0.95)) drop-shadow(0 0 25px rgba(212, 175, 55, 0.8))'
                    : 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))'
                }}
              />

              {/* 3. The Physical Pencil writing "Arhan" */}
              {showPencil && (
                <g
                  transform={`translate(${pencilPos.x}, ${pencilPos.y})`}
                  style={{
                    opacity: isDoneWriting ? 0 : 1,
                    transform: isDoneWriting
                      ? `translate(${pencilPos.x - 20}px, ${pencilPos.y - 70}px) scale(0.85)`
                      : `translate(${pencilPos.x}px, ${pencilPos.y}px)`,
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                    pointerEvents: 'none',
                  }}
                >
                  {/* Pencil tilted at authentic 38° writing angle */}
                  <g transform="rotate(-38)">
                    {/* Graphite / Lead Tip at precisely (0,0) */}
                    <polygon
                      points="0,0 -3.5,-12 3.5,-12"
                      fill="#1E1E1E"
                      stroke="#85580F"
                      strokeWidth="0.5"
                    />

                    {/* Sharpened Wood Cone */}
                    <polygon
                      points="-3.5,-12 3.5,-12 6.5,-34 -6.5,-34"
                      fill="url(#pencilWood)"
                      stroke="#7A5200"
                      strokeWidth="0.5"
                    />
                    {/* Wood core shadow lines */}
                    <polygon
                      points="-1.5,-12 1.5,-12 2,-34 -2,-34"
                      fill="#C99E5C"
                    />

                    {/* Pencil Hexagonal Body (Luxury Golden Finish) */}
                    <polygon
                      points="-6.5,-34 6.5,-34 6.5,-155 -6.5,-155"
                      fill="url(#pencilBodyGold)"
                      stroke="#573B00"
                      strokeWidth="0.6"
                    />

                    {/* Longitudinal Highlight Facet */}
                    <line
                      x1="-2"
                      y1="-34"
                      x2="-2"
                      y2="-155"
                      stroke="#FFF0AA"
                      strokeWidth="0.9"
                      opacity="0.75"
                    />
                    {/* Longitudinal Shadow Facet */}
                    <line
                      x1="2.5"
                      y1="-34"
                      x2="2.5"
                      y2="-155"
                      stroke="#573B00"
                      strokeWidth="0.8"
                      opacity="0.7"
                    />

                    {/* Gold Embossed Pencil Brand Mark */}
                    <text
                      x="-95"
                      y="1.8"
                      transform="rotate(-90)"
                      fontSize="7.5"
                      fontFamily="'Cinzel', serif"
                      fontWeight="bold"
                      fill="#3B2600"
                      opacity="0.85"
                      letterSpacing="2.5"
                    >
                      ARHAN
                    </text>

                    {/* Metal Ferrule Ring */}
                    <rect
                      x="-7"
                      y="-170"
                      width="14"
                      height="15"
                      fill="#D4AF37"
                      rx="1"
                      stroke="#FFEAA7"
                      strokeWidth="0.6"
                    />
                    <line x1="-7" y1="-165" x2="7" y2="-165" stroke="#FFEAA7" strokeWidth="0.6" />
                    <line x1="-7" y1="-160" x2="7" y2="-160" stroke="#573B00" strokeWidth="0.6" />

                    {/* Eraser End Cap (Matte Black with Gold Trim) */}
                    <rect
                      x="-6"
                      y="-188"
                      width="12"
                      height="18"
                      rx="2.5"
                      fill="#141414"
                      stroke="#D4AF37"
                      strokeWidth="0.6"
                    />
                  </g>

                  {/* Golden Sparkle / Particle Burst at the contact lead tip */}
                  <g>
                    <circle cx="0" cy="0" r="3.5" fill="#FFFDF0" filter="drop-shadow(0 0 8px #FFD700)" />
                    <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
                    {/* Dynamic starburst flare */}
                    <path
                      d="M 0,-10 L 1.8,-2.5 L 10,0 L 1.8,2.5 L 0,10 L -1.8,2.5 L -10,0 L -1.8,-2.5 Z"
                      fill="#FFF5C2"
                      opacity="0.85"
                    />
                  </g>
                </g>
              )}
            </svg>

            {/* Subtitle & Monogram flourish fading in upon completion */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isDoneWriting ? 1 : 0, y: isDoneWriting ? 0 : 10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-2 flex flex-col items-center"
            >
              <div className="flex items-center gap-3 text-[#D4AF37]/70">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <span className="text-xs tracking-[0.35em] uppercase font-mono font-medium text-[#E5C158]">
                  Portfolio
                </span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>
            </motion.div>
          </div>

          {/* Skip hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="absolute bottom-6 flex items-center gap-2 text-[11px] tracking-widest uppercase text-neutral-400 hover:text-[#D4AF37] transition-colors"
          >
            <span>Click anywhere to skip</span>
            <span className="text-[#D4AF37]">→</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
