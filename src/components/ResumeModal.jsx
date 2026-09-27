import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileDown, ExternalLink, GraduationCap, Briefcase, Code, Award, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    // Triggers download of resume.pdf
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Arhan_Ahmed_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#FDFDFB] dark:bg-[#121210] rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-[#141413] via-[#22221E] to-[#141413] dark:from-[#080807] dark:via-[#141412] dark:to-[#080807] text-white flex items-center justify-between border-b border-[#D4AF37]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <FileDown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>Arhan Ahmed</span>
                    <span className="text-[#D4AF37] text-sm font-normal">| Curriculum Vitae</span>
                  </h3>
                  <p className="text-xs text-neutral-300">
                    Full-Stack Developer & Aspiring AI Engineer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#996515] to-[#D4AF37] rounded-lg shadow-sm hover:brightness-110"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={onClose}
                  aria-label="Close resume modal"
                  className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#4A4A43] dark:text-[#C5C5BC]">
              {/* Top Contact Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#F8F6ED] dark:bg-[#1C1C18] border border-[#D4AF37]/25 text-xs text-[#141413] dark:text-[#E8E6DF]">
                <span>📍 Hyderabad, India</span>
                <span className="text-[#996515] dark:text-[#F3E5AB] font-mono">arhanmohammed001@gmail.com</span>
                <span>+91 7799859383</span>
                <span className="text-[#996515] dark:text-[#F3E5AB] font-mono">github.com/Md-Arhan24</span>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#996515] dark:text-[#E5C158] font-bold mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                  <span>Education</span>
                </h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white dark:bg-[#181815] border border-neutral-200 dark:border-neutral-800">
                    <div className="flex justify-between items-start">
                      <div>
                        <strong className="text-[#141413] dark:text-[#F5F5F0]">GRIET, Hyderabad</strong>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">B.Tech in Computer Science and Engineering</p>
                      </div>
                      <span className="text-xs font-bold text-[#996515] dark:text-[#F3E5AB] bg-[#D4AF37]/15 px-2.5 py-1 rounded-full">
                        CGPA 9.1 / 10 • Exp. Jul 2028
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-[#181815] border border-neutral-200 dark:border-neutral-800">
                    <div className="flex justify-between items-start">
                      <div>
                        <strong className="text-[#141413] dark:text-[#F5F5F0]">SBTET, Hyderabad</strong>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">Diploma in Computer Science</p>
                      </div>
                      <span className="text-xs font-bold text-[#996515] dark:text-[#F3E5AB] bg-[#D4AF37]/15 px-2.5 py-1 rounded-full">
                        CGPA 9.2 / 10 • May 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#996515] dark:text-[#E5C158] font-bold mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                  <span>Work Experience</span>
                </h4>
                <div className="p-4 rounded-xl bg-white dark:bg-[#181815] border border-neutral-200 dark:border-neutral-800 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <strong className="text-[#141413]">Frontend AI Engineering Intern</strong>
                      <p className="text-xs text-[#996515] font-semibold">FlyRank • Remote</p>
                    </div>
                    <span className="text-xs font-mono text-neutral-500">Jun 2026 – Oct 2026</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#55554E] pt-2">
                    <li>Delivered capstone project applying AI and prompt engineering to real production workflows.</li>
                    <li>Designed & refined LLM prompts and token optimization strategies, reducing API cost & latency.</li>
                    <li>Contributed UI/UX improvements directly to the live production FlyRank website.</li>
                  </ul>
                </div>
              </div>

              {/* Core Projects */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#996515] font-bold mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-[#D4AF37]" />
                  <span>Key Software Projects</span>
                </h4>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-neutral-200">
                    <div className="flex justify-between">
                      <strong className="text-[#141413]">Cloud Video Conferencing Platform</strong>
                      <span className="text-xs font-mono text-[#996515]">WebRTC • React • Node • MongoDB</span>
                    </div>
                    <p className="text-xs text-[#55554E] mt-1">
                      Cut transmission latency 40%, sustained 1,500+ kbps per stream, scaled to 50+ concurrent participants under 150ms.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-neutral-200">
                    <div className="flex justify-between">
                      <strong className="text-[#141413]">BecomeBest: Full-Stack AI Roadmap Planner</strong>
                      <span className="text-xs font-mono text-[#996515]">React • Node • Express • MongoDB</span>
                    </div>
                    <p className="text-xs text-[#55554E] mt-1">
                      1,000+ daily active users within 6 months, 0 downtime, 35% DB query improvement via MongoDB indexing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Skills & Achievements */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#996515] font-bold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>Key Skills & Honors</span>
                </h4>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2 text-xs">
                  <p>
                    <strong className="text-[#141413]">LeetCode:</strong> 400+ problems solved across data structures & algorithms.
                  </p>
                  <p>
                    <strong className="text-[#141413]">Certification:</strong> Microsoft Azure Workshop on Full Stack Development.
                  </p>
                  <p>
                    <strong className="text-[#141413]">Tech Stack:</strong> React, Next.js, Node.js, Express, MongoDB, TypeScript, Python, Java, Docker, LangChain, Ollama, RAG.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#F8F6ED] border-t border-[#D4AF37]/20 flex items-center justify-between">
              <span className="text-xs text-[#7A7A73]">
                Ready to review full PDF copy or print
              </span>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#996515] to-[#D4AF37] rounded-xl shadow-md hover:brightness-105"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
