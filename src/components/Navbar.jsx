import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

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
            ? 'bg-[#FDFDFB]/90 dark:bg-[#080807]/90 backdrop-blur-md border-b border-[#D4AF37]/20 dark:border-[#D4AF37]/30 shadow-[0_4px_20px_-5px_rgba(212,175,55,0.08)] dark:shadow-[0_4px_20px_-5px_rgba(212,175,55,0.2)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-[#141413] dark:text-[#F5F5F0]"
          >
            <span
              className="font-cursive text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#AA771C] group-hover:scale-105 transition-transform"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Arhan
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          </a>

          {/* Desktop Nav Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-8">
            <nav>
              <ul className="flex items-center gap-7 text-sm font-medium">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={`relative py-1 transition-colors duration-200 flex items-center gap-1.5 ${
                          isActive
                            ? 'text-[#996515] dark:text-[#F3E5AB] font-semibold'
                            : 'text-[#5A5A54] dark:text-[#C5C5BC] hover:text-[#141413] dark:hover:text-white'
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
            </nav>

            {/* Theme Toggle Switch (Desktop) */}
            <button
              onClick={toggleTheme}
              aria-label={`Toggle theme (Currently ${theme === 'dark' ? 'Black + Golden' : 'White + Golden'})`}
              className="relative inline-flex items-center h-8 w-15 rounded-full border border-[#D4AF37]/50 dark:border-[#D4AF37]/60 bg-[#F4EEDF] dark:bg-[#181815] p-1 transition-colors duration-300 cursor-pointer shadow-inner"
              title={theme === 'dark' ? 'Switch to White + Golden' : 'Switch to Black + Golden'}
            >
              {/* Sun & Moon Icons inside track */}
              <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] pointer-events-none select-none">
                <Sun className="w-3.5 h-3.5 text-[#996515]" />
                <Moon className="w-3.5 h-3.5 text-[#F3E5AB]" />
              </div>

              {/* Slider Knob */}
              <motion.div
                animate={{ x: theme === 'dark' ? 28 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md relative z-10 transition-colors ${
                  theme === 'dark'
                    ? 'bg-gradient-to-tr from-[#996515] via-[#D4AF37] to-[#F3E5AB] text-[#0A0A09] shadow-[0_0_12px_rgba(212,175,55,0.7)]'
                    : 'bg-white text-[#996515] border border-[#D4AF37]/40 shadow-xs'
                }`}
              >
                {theme === 'dark' ? (
                  <Moon className="w-3 h-3 text-[#0A0A09] fill-[#0A0A09]" />
                ) : (
                  <Sun className="w-3 h-3 text-[#996515]" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Theme Toggle Button for Mobile Header */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="relative inline-flex items-center h-7 w-13 rounded-full border border-[#D4AF37]/50 dark:border-[#D4AF37]/60 bg-[#F4EEDF] dark:bg-[#181815] p-0.5 cursor-pointer shadow-inner"
            >
              <motion.div
                animate={{ x: theme === 'dark' ? 24 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md ${
                  theme === 'dark'
                    ? 'bg-gradient-to-tr from-[#996515] to-[#F3E5AB] text-black shadow-[0_0_8px_rgba(212,175,55,0.6)]'
                    : 'bg-white text-[#996515] border border-[#D4AF37]/30'
                }`}
              >
                {theme === 'dark' ? (
                  <Moon className="w-2.5 h-2.5 text-black fill-black" />
                ) : (
                  <Sun className="w-2.5 h-2.5 text-[#996515]" />
                )}
              </motion.div>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-[#141413] dark:text-[#F5F5F0] hover:text-[#D4AF37] focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
            className="fixed inset-x-0 top-[68px] z-30 md:hidden bg-[#FDFDFB]/95 dark:bg-[#0E0E0D]/95 backdrop-blur-xl border-b border-[#D4AF37]/30 shadow-xl px-6 py-8"
          >
            <nav className="flex flex-col gap-6">
              {/* Theme status & toggle row in mobile menu */}
              <div className="flex items-center justify-between py-2 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-sm font-medium text-[#5A5A54] dark:text-[#C5C5BC]">
                  Theme: {theme === 'dark' ? 'Black + Golden' : 'White + Golden'}
                </span>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1 text-xs font-semibold rounded-full border border-[#D4AF37] text-[#996515] dark:text-[#F3E5AB] bg-[#D4AF37]/10"
                >
                  Switch Theme
                </button>
              </div>

              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-[#2A2A26] dark:text-[#E8E6DF] hover:text-[#996515] dark:hover:text-[#F3E5AB] border-b border-neutral-100 dark:border-neutral-800/80 pb-3"
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
