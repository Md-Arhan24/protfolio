import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Briefcase } from 'lucide-react';
import OrbitScene from './OrbitScene';

export default function Hero({ onOpenResume }) {
  // Typewriter effect state
  const phrases = [
    'Full Stack Developer',
    'AI Engineer',
    'Computer Science Undergrad',
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleType = () => {
      const fullText = phrases[phraseIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed, phrases]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 sm:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col items-start z-10 w-full"
        >
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 dark:bg-[#D4AF37]/15 border border-[#D4AF37]/30 dark:border-[#D4AF37]/40 text-xs font-medium text-[#996515] dark:text-[#F3E5AB] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
            </span>
            <span>Available for Full-time & Internship Roles</span>
          </div>

          {/* Subheading intro */}
          <p className="font-display text-xs sm:text-sm tracking-[0.25em] text-[#996515] dark:text-[#E5C158] uppercase font-semibold mb-2">
            Hi, my name is
          </p>

          {/* Big Name Heading */}
          <h1 className="font-luxury-serif text-5xl sm:text-7xl md:text-8xl font-normal sm:font-medium tracking-tight text-[#141413] dark:text-[#F7F7F2] leading-none mb-3">
            Arhan Ahmed<span className="text-[#D4AF37]">.</span>
          </h1>

          {/* Animated Typewriter Title */}
          <div className="min-h-[3rem] sm:min-h-[3.5rem] flex items-center mb-4">
            <h2 className="font-luxury-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#55554F] dark:text-[#C5C5BC] flex items-center flex-wrap">
              <span>I am a&nbsp;</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#AA771C] dark:from-[#F3E5AB] dark:via-[#D4AF37] dark:to-[#E5C158] font-medium italic underline decoration-[#D4AF37]/40 underline-offset-8">
                {currentText}
              </span>
              <span className="w-[2px] h-7 sm:h-9 bg-[#D4AF37] ml-1.5 animate-pulse inline-block" />
            </h2>
          </div>

          {/* One-line Hook */}
          <p className="text-lg sm:text-xl text-[#5A5A53] dark:text-[#A8A89F] max-w-xl font-normal leading-relaxed mb-8">
            Turning ideas into <span className="font-luxury-serif italic text-xl sm:text-2xl text-[#141413] dark:text-[#F7F7F2] font-medium">real-world software</span> that people actually use — fusing full-stack craft with cutting-edge AI engineering.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            {/* View Projects Primary Button */}
            <a
              href="#projects"
              className="relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#996515] via-[#C9A227] to-[#AA771C] rounded-lg shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group overflow-hidden w-full sm:w-auto text-center"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Metadata quick tags */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#7B7B73] dark:text-[#8E8E85] pt-4 border-t border-[#D4AF37]/20 dark:border-[#D4AF37]/30 w-full">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Intern @ FlyRank</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[#996515] dark:text-[#F3E5AB]">
              <span>400+ LeetCode Solved</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Orbit Graphic - HIDDEN on mobile view (<md), ONLY visible in tablet (md) and laptop/desktop (lg+) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:flex lg:col-span-5 justify-center items-center"
        >
          <OrbitScene />
        </motion.div>
      </div>
    </section>
  );
}
