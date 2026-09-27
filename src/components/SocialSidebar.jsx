import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function SocialSidebar() {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/Md-Arhan24',
      icon: <GithubIcon className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohammedarhanahmed/',
      icon: <LinkedinIcon className="w-5 h-5" />,
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/mohammed_arhan001/',
      icon: <LeetCodeIcon className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:arhanmohammed001@gmail.com',
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* Left fixed social column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed left-6 bottom-0 z-40 hidden xl:flex flex-col items-center gap-5"
      >
        <div className="flex flex-col items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-[#6B6B65] hover:text-[#D4AF37] hover:-translate-y-1 transition-all duration-200 p-2 rounded-lg hover:bg-[#D4AF37]/10"
            >
              {social.icon}
            </a>
          ))}
        </div>
        {/* Subtle vertical gold rule */}
        <div className="w-[1.5px] h-24 bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
      </motion.div>

      {/* Right fixed email column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed right-6 bottom-0 z-40 hidden xl:flex flex-col items-center gap-6"
      >
        <a
          href="mailto:arhanmohammed001@gmail.com"
          className="text-xs font-mono tracking-widest text-[#6B6B65] hover:text-[#D4AF37] hover:-translate-y-1 transition-all duration-200 py-2 [writing-mode:vertical-rl]"
        >
          arhanmohammed001@gmail.com
        </a>
        <div className="w-[1.5px] h-24 bg-gradient-to-b from-[#D4AF37]/60 to-transparent" />
      </motion.div>
    </>
  );
}
