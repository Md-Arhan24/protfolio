import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, CheckCircle, ExternalLink, Trophy, Star } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      type: 'coding',
      title: 'LeetCode Milestone',
      bigStat: '400+',
      statLabel: 'Algorithmic Problems Solved',
      badge: 'Data Structures & Algorithms',
      description:
        'Demonstrated strong problem-solving mastery in dynamic programming, graphs, trees, arrays, and complex system optimization.',
      linkText: 'View LeetCode Profile',
      linkUrl: 'https://leetcode.com/u/mohammed_arhan001/',
      statsBreakdown: [
        { label: 'Easy', count: '140+', color: '#00B8A3' },
        { label: 'Medium', count: '220+', color: '#FFC01E' },
        { label: 'Hard', count: '40+', color: '#FF375F' },
      ],
      icon: (
        <svg className="w-8 h-8 fill-current text-[#D4AF37]" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
    },
    {
      type: 'certification',
      title: 'Microsoft Azure Certification',
      bigStat: 'Verified',
      statLabel: 'Full Stack Development Workshop',
      badge: 'Cloud Architecture & Services',
      description:
        'Completed specialized workshop on modern cloud-native architectures, containerization, enterprise web hosting, and Azure cloud integration.',
      linkText: 'Credential Verified',
      linkUrl: '#',
      statsBreakdown: [
        { label: 'Cloud', count: 'Azure' },
        { label: 'Services', count: 'App Srv / SQL' },
        { label: 'Status', count: 'Certified' },
      ],
      icon: <Award className="w-8 h-8 text-[#D4AF37]" />,
    },
    {
      type: 'academic',
      title: 'Academic Excellence',
      bigStat: '9.2',
      statLabel: 'Top Tier CGPA Distinction',
      badge: 'Computer Science Honors',
      description:
        'Maintained a stellar 9.2 CGPA at SBTET and 9.1 CGPA at GRIET, consistently excelling in computer science foundations and practical software labs.',
      linkText: 'Academic Record',
      linkUrl: '#about',
      statsBreakdown: [
        { label: 'SBTET', count: '9.2 CGPA' },
        { label: 'GRIET', count: '9.1 CGPA' },
        { label: 'Tier', count: 'Top 5%' },
      ],
      icon: <Trophy className="w-8 h-8 text-[#D4AF37]" />,
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-base text-[#D4AF37] font-semibold">04.</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413]">
          Honors & Achievements
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent max-w-md ml-4" />
      </div>
      <p className="text-[#686861] text-base mb-12 max-w-xl">
        Milestones that reflect rigorous problem-solving discipline, continuous skill acquisition, and technical commitment.
      </p>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#D4AF37]/35 shadow-[0_4px_25px_rgba(212,175,55,0.08)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.22)] hover:border-[#D4AF37] transition-all duration-300 relative overflow-hidden group"
          >
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#AA771C]" />

            <div>
              {/* Header Icon & Tag */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-[#FFFDF7] border border-[#D4AF37]/40 shadow-xs group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#996515] font-semibold bg-[#D4AF37]/15 px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>

              {/* Big Stat Display */}
              <div className="mb-2">
                <span className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#AA771C]">
                  {item.bigStat}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#141413] mb-3">
                {item.statLabel}
              </h3>
              <p className="text-xs sm:text-sm text-[#5B5B54] leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Mini Stats Breakdown */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-[#FBF9F2] border border-[#D4AF37]/20 mb-6 text-center">
                {item.statsBreakdown.map((s, sIdx) => (
                  <div key={sIdx} className="flex flex-col">
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: s.color || '#996515' }}
                    >
                      {s.count}
                    </span>
                    <span className="text-[10px] text-[#7A7A73]">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
              <a
                href={item.linkUrl}
                target={item.linkUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#996515] hover:text-[#141413] transition-colors group-hover:underline underline-offset-4"
              >
                <span>{item.linkText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
