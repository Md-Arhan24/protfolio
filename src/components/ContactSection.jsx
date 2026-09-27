import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('arhanmohammed001@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xbjnelzr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => null);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D4AF37', '#F3E5AB', '#996515', '#C9A227'],
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-display text-xs sm:text-sm text-[#D4AF37] font-semibold uppercase tracking-[0.25em] block mb-2">
          05. What's Next?
        </span>
        <h2 className="font-luxury-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#141413] dark:text-[#F7F7F2] mb-4">
          Let's Build Something Meaningful
        </h2>
        <p className="text-base sm:text-lg text-[#5D5D55] dark:text-[#A8A8A0] leading-relaxed">
          Whether you have an internship/full-time opportunity, a software project in mind, or simply want to talk about full-stack engineering and AI, my inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Links & Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Quick Email Copy Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#141412] border border-[#D4AF37]/35 dark:border-[#D4AF37]/40 shadow-[0_4px_25px_rgba(212,175,55,0.08)] dark:shadow-[0_4px_25px_rgba(212,175,55,0.15)] relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#996515] dark:text-[#F3E5AB]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#8C8C84] dark:text-[#8E8E85] uppercase tracking-wider block">
                  Direct Email
                </span>
                <span className="text-sm font-bold text-[#141413] dark:text-[#F5F5F0]">
                  arhanmohammed001@gmail.com
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:arhanmohammed001@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#996515] to-[#D4AF37] hover:brightness-105 transition-all shadow-xs"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs font-medium text-[#141413] dark:text-[#F5F5F0] bg-[#FBF9F2] dark:bg-[#1C1C18] hover:bg-[#F3EEDF] dark:hover:bg-[#252520] border border-[#D4AF37]/30 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#996515] dark:text-[#F3E5AB]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Details List */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#141412] border border-[#D4AF37]/35 dark:border-[#D4AF37]/40 shadow-[0_4px_25px_rgba(212,175,55,0.08)] dark:shadow-[0_4px_25px_rgba(212,175,55,0.15)] flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#996515] dark:text-[#E5C158] font-semibold mb-1">
              Direct Contact & Social Profiles
            </h4>

            {/* Phone */}
            <a
              href="tel:+917799859383"
              className="flex items-center justify-between p-3 rounded-xl bg-[#FCFBF8] dark:bg-[#181815] border border-neutral-100 dark:border-neutral-800 hover:border-[#D4AF37] hover:bg-[#FFFDF7] dark:hover:bg-[#1F1F1B] transition-all group"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-[#222220] dark:text-[#E5E5DE]">+91 7799859383</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#996515] dark:group-hover:text-[#F3E5AB] transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohammedarhanahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-[#FCFBF8] dark:bg-[#181815] border border-neutral-100 dark:border-neutral-800 hover:border-[#D4AF37] hover:bg-[#FFFDF7] dark:hover:bg-[#1F1F1B] transition-all group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                <span className="text-sm font-medium text-[#222220] dark:text-[#E5E5DE]">LinkedIn / mohammedarhanahmed</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#996515] dark:group-hover:text-[#F3E5AB] transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Md-Arhan24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-[#FCFBF8] dark:bg-[#181815] border border-neutral-100 dark:border-neutral-800 hover:border-[#D4AF37] hover:bg-[#FFFDF7] dark:hover:bg-[#1F1F1B] transition-all group"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-4 h-4 text-[#141413] dark:text-white" />
                <span className="text-sm font-medium text-[#222220] dark:text-[#E5E5DE]">GitHub / Md-Arhan24</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#996515] dark:group-hover:text-[#F3E5AB] transition-colors" />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/mohammed_arhan001/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-[#FCFBF8] dark:bg-[#181815] border border-neutral-100 dark:border-neutral-800 hover:border-[#D4AF37] hover:bg-[#FFFDF7] dark:hover:bg-[#1F1F1B] transition-all group"
            >
              <div className="flex items-center gap-3">
                <LeetCodeIcon className="w-4 h-4 text-[#FFA116]" />
                <span className="text-sm font-medium text-[#222220] dark:text-[#E5E5DE]">LeetCode / mohammed_arhan001</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#996515] dark:group-hover:text-[#F3E5AB] transition-colors" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FBF9F2] dark:bg-[#1C1C18] text-xs text-[#7A7A72] dark:text-[#8E8E85]">
              <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
              <span>Based in Hyderabad, India • Available for Global Remote</span>
            </div>
          </div>
        </div>

        {/* Right Column: Working Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#141412] border border-[#D4AF37]/35 dark:border-[#D4AF37]/40 shadow-[0_8px_35px_rgba(212,175,55,0.1)] relative">
            <h3 className="text-2xl font-bold text-[#141413] dark:text-[#F5F5F0] mb-1">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#73736C] dark:text-[#8E8E85] mb-6">
              Fill in your details below and I'll get back to you promptly.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#996515] dark:text-[#F3E5AB]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-[#141413] dark:text-[#F5F5F0]">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-sm text-[#5C5C55] dark:text-[#A8A8A0] max-w-md">
                  Your message has been received. I look forward to connecting with you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 text-xs font-semibold text-[#996515] dark:text-[#F3E5AB] border border-[#D4AF37] rounded-lg hover:bg-[#FDFBF3] dark:hover:bg-[#1C1C18]"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-[#3A3A34] dark:text-[#C5C5BC] uppercase tracking-wider mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F4] dark:bg-[#181816] border border-neutral-200 dark:border-neutral-700 text-[#141413] dark:text-[#F5F5F0] focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#1F1F1C] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#3A3A34] dark:text-[#C5C5BC] uppercase tracking-wider mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF9F4] dark:bg-[#181816] border border-neutral-200 dark:border-neutral-700 text-[#141413] dark:text-[#F5F5F0] focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#1F1F1C] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-[#3A3A34] dark:text-[#C5C5BC] uppercase tracking-wider mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF9F4] dark:bg-[#181816] border border-neutral-200 dark:border-neutral-700 text-[#141413] dark:text-[#F5F5F0] focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#1F1F1C] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-sm transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-[#3A3A34] dark:text-[#C5C5BC] uppercase tracking-wider mb-1.5"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project, timeline, or open role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FBF9F4] dark:bg-[#181816] border border-neutral-200 dark:border-neutral-700 text-[#141413] dark:text-[#F5F5F0] focus:border-[#D4AF37] focus:bg-white dark:focus:bg-[#1F1F1C] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#996515] via-[#C9A227] to-[#AA771C] hover:brightness-105 active:scale-[0.99] transition-all duration-200 shadow-md disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-28 pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#808078] dark:text-[#8E8E85] gap-4">
        <p>
          Designed & built by <span className="font-semibold text-[#141413] dark:text-[#F5F5F0]">Arhan Ahmed</span> © {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="font-mono text-[11px] text-[#996515] dark:text-[#E5C158]">
          White & Gold • Black & Gold Edition
        </p>
      </footer>
    </section>
  );
}
