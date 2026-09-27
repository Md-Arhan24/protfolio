import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user already saw the intro in this session
    const hasSeenIntro = sessionStorage.getItem('arhan_portfolio_intro_seen');
    if (hasSeenIntro) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Auto complete after ~2.8 seconds
    const timer = setTimeout(() => {
      handleComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem('arhan_portfolio_intro_seen', 'true');
    setIsVisible(false);
    setTimeout(() => {
      onComplete?.();
    }, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            opacity: 0, 
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          onClick={handleComplete}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] cursor-pointer select-none overflow-hidden"
          title="Click anywhere to skip"
        >
          {/* Subtle gold ambient glow in center */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[130px] pointer-events-none" />

          {/* Golden animated border lines top & bottom */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />

          {/* Central Name Animation */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Elegant Monogram / Crest Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 flex items-center gap-3 text-[#D4AF37]/60"
            >
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
              <span className="text-[11px] tracking-[0.35em] uppercase font-sans font-medium text-[#E5C158]/80">
                Portfolio
              </span>
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
            </motion.div>

            {/* Handwriting cursive name: Arhan */}
            <div className="relative py-2 px-6">
              {/* SVG Handwriting path representation + cursive text with gold gradient & glow */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-cursive text-7xl sm:text-8xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#AA771C] via-[#F3E5AB] via-[#D4AF37] to-[#AA771C] tracking-wide filter drop-shadow-[0_4px_25px_rgba(212,175,55,0.45)]"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Arhan
              </motion.h1>

              {/* Shimmer sweep effect */}
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '200%' }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
              />
            </div>

            {/* Underline calligraphy flourish */}
            <motion.svg
              width="240"
              height="20"
              viewBox="0 0 240 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1"
            >
              <motion.path
                d="M5 10 C 60 18, 180 2, 235 10"
                stroke="url(#goldGradientLine)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="goldGradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#85580F" stopOpacity="0" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#85580F" stopOpacity="0" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-4 text-xs font-light text-[#D4AF37]/80 tracking-[0.25em] uppercase"
            >
              Full Stack & AI Engineer
            </motion.p>
          </div>

          {/* Skip cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="absolute bottom-8 flex items-center gap-2 text-[11px] tracking-widest uppercase text-neutral-400 hover:text-[#D4AF37] transition-colors"
          >
            <span>Click anywhere to enter</span>
            <span className="text-[#D4AF37]">→</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
