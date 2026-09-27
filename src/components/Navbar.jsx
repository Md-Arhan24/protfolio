import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky solid background after scrolling past 30px
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scrollspy calculation
      const sections = ['hero', 'about', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFDFB]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-[0_4px_20px_-5px_rgba(212,175,55,0.08)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-[#141413]"
          >
            <span
              className="font-cursive text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#AA771C] group-hover:scale-105 transition-transform"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Arhan
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`relative py-1 transition-colors duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'text-[#996515] font-semibold'
                          : 'text-[#5A5A54] hover:text-[#141413]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#996515] to-[#D4AF37]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Resume Action Button */}
            {/* <button
              onClick={onOpenResume}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#996515] border border-[#D4AF37] rounded-md overflow-hidden group bg-transparent hover:text-white transition-colors duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#996515] to-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <FileDown className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10">Resume</span>
            </button> */}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-[#141413] hover:text-[#D4AF37] focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] z-30 md:hidden bg-[#FDFDFB]/95 backdrop-blur-xl border-b border-[#D4AF37]/30 shadow-xl px-6 py-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-[#2A2A26] hover:text-[#996515] border-b border-neutral-100 pb-3"
                >
                  <span className="text-xs font-mono text-[#D4AF37]">0{idx + 1}.</span>
                  <span>{link.name}</span>
                </a>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenResume?.();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#996515] to-[#D4AF37] rounded-lg shadow-md"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
