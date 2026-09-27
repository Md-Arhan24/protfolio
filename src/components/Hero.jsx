import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Sparkles, MapPin, Briefcase } from 'lucide-react';
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
        // Typing characters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting characters
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
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-medium text-[#996515] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
            </span>
            <span>Available for Full-time & Internship Roles</span>
          </div>

          {/* Subheading intro */}
          <p className="font-mono text-sm tracking-widest text-[#996515] uppercase font-semibold mb-2">
            Hi, my name is
          </p>

          {/* Big Name Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#141413] leading-none mb-3">
            Arhan Ahmed<span className="text-[#D4AF37]">.</span>
          </h1>

          {/* Animated Typewriter Title */}
          <div className="h-12 sm:h-14 flex items-center mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#55554F] flex items-center">
              I am a&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#AA771C] font-extrabold underline decoration-[#D4AF37]/40 underline-offset-8">
                {currentText}
              </span>
              <span className="w-[3px] h-7 sm:h-9 bg-[#D4AF37] ml-1.5 animate-pulse" />
            </h2>
          </div>

          {/* One-line Hook */}
          <p className="text-lg sm:text-xl text-[#5A5A53] max-w-xl font-normal leading-relaxed mb-8">
            Turning ideas into <span className="text-[#141413] font-semibold">real-world software</span> that people actually use — fusing full-stack craft with cutting-edge AI engineering.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            {/* View Projects Primary Button */}
            <a
              href="#projects"
              className="relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#996515] via-[#C9A227] to-[#AA771C] rounded-lg shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Metadata quick tags */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#7B7B73] pt-4 border-t border-[#D4AF37]/20 w-full">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Intern @ FlyRank</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[#996515]">
              <span>400+ LeetCode Solved</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Orbit Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <OrbitScene />
        </motion.div>
      </div>
    </section>
  );
}
