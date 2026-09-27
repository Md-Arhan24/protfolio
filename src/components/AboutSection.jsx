import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  Quote, 
  Calendar,
  MapPin
} from 'lucide-react';

// Official colored icons for skills matching reference images
import { 
  FaJava, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaReact 
} from "react-icons/fa6";
import { IoLogoJavascript, IoLogoDocker } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { 
  SiGo, 
  SiC, 
  SiCplusplus, 
  SiGnubash, 
  SiExpress, 
  SiFastapi, 
  SiDjango, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis, 
  SiNeo4J, 
  SiVercel, 
  SiRender, 
  SiApachekafka, 
  SiDigitalocean,
  SiLangchain,
  SiOllama,
  SiHuggingface,
  SiTensorflow
} from "react-icons/si";
import { RiSupabaseFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

export default function AboutSection() {
  const educationList = [
    {
      institution: 'GRIET, Hyderabad',
      degree: 'B.Tech in Computer Science and Engineering',
      duration: 'Expected Jul 2028',
      score: '9.1 / 10 CGPA',
      status: 'Current Undergrad',
      highlights: ['Focus on AI Systems & Distributed Architectures', 'Dean\'s Honor Roll & Technical Societies'],
    },
    {
      institution: 'SBTET, Hyderabad',
      degree: 'Diploma in Computer Science',
      duration: 'Completed May 2025',
      score: '9.2 / 10 CGPA',
      status: 'First Class Distinction',
      highlights: ['Core Data Structures & Algorithms', 'State-Level Technical Project Exhibitions'],
    },
  ];

  const workExperience = [
    {
      role: 'Frontend AI Engineering Intern',
      company: 'FlyRank',
      period: 'Jun 2026 – Oct 2026',
      location: 'Remote',
      type: 'Internship',
      points: [
        'Delivered a capstone project applying AI and prompt engineering directly to real customer production workflows.',
        'Designed and refined LLM prompts and implemented token optimization strategies, improving output accuracy while significantly reducing API cost and latency.',
        'Contributed critical frontend UI/UX improvements to the live production FlyRank web application.',
        'Strengthened project ownership and technical communication through regular direct stakeholder reviews and sprint updates.',
      ],
      tags: ['LLM Prompts', 'Token Optimization', 'React', 'Production Deployment', 'LangChain.js'],
    },
  ];

  // Horizontal categorized skills matching reference images
  const skillCategories = [
    {
      title: 'PROGRAMMING LANGUAGES',
      skills: [
        { name: 'Python', icon: <FaPython className="w-8 h-8 sm:w-10 sm:h-10 text-[#3776AB]" /> },
        { name: 'Java', icon: <FaJava className="w-8 h-8 sm:w-10 sm:h-10 text-[#EA2D2E]" /> },
        { name: 'Go', icon: <SiGo className="w-8 h-8 sm:w-10 sm:h-10 text-[#00ADD8]" /> },
        { name: 'C', icon: <SiC className="w-8 h-8 sm:w-10 sm:h-10 text-[#659AD2]" /> },
        { name: 'C++', icon: <SiCplusplus className="w-8 h-8 sm:w-10 sm:h-10 text-[#00599C]" /> },
        { name: 'JavaScript', icon: <IoLogoJavascript className="w-8 h-8 sm:w-10 sm:h-10 text-[#F7DF1E]" /> },
        { name: 'TypeScript', icon: <BiLogoTypescript className="w-8 h-8 sm:w-10 sm:h-10 text-[#3178C6]" /> },
        { name: 'Bash', icon: <SiGnubash className="w-8 h-8 sm:w-10 sm:h-10 text-[#4EAA25]" /> },
      ],
    },
    {
      title: 'FRONTEND DEVELOPMENT',
      skills: [
        { name: 'React', icon: <FaReact className="w-8 h-8 sm:w-10 sm:h-10 text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <RiNextjsFill className="w-8 h-8 sm:w-10 sm:h-10 text-[#141413] dark:text-white" /> },
        { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8 sm:w-10 sm:h-10 text-[#E34F26]" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8 sm:w-10 sm:h-10 text-[#1572B6]" /> },
        { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="w-8 h-8 sm:w-10 sm:h-10 text-[#06B6D4]" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="w-8 h-8 sm:w-10 sm:h-10 text-[#7952B3]" /> },
      ],
    },
    {
      title: 'BACKEND DEVELOPMENT',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8 sm:w-10 sm:h-10 text-[#339933]" /> },
        { name: 'Express', icon: <SiExpress className="w-8 h-8 sm:w-10 sm:h-10 text-[#141413] dark:text-white" /> },
        { name: 'FastAPI', icon: <SiFastapi className="w-8 h-8 sm:w-10 sm:h-10 text-[#009688]" /> },
        { name: 'Django', icon: <SiDjango className="w-8 h-8 sm:w-10 sm:h-10 text-[#092E20] dark:text-[#44B78B]" /> },
        { name: 'LangChain', icon: <SiLangchain className="w-8 h-8 sm:w-10 sm:h-10 text-[#1C3C3C] dark:text-[#D4AF37]" /> },
        { name: 'Ollama', icon: <SiOllama className="w-8 h-8 sm:w-10 sm:h-10 text-[#141413] dark:text-white" /> },
      ],
    },
    {
      title: 'DATABASES',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8 sm:w-10 sm:h-10 text-[#4169E1]" /> },
        { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 sm:w-10 sm:h-10 text-[#47A248]" /> },
        { name: 'Supabase', icon: <RiSupabaseFill className="w-8 h-8 sm:w-10 sm:h-10 text-[#3ECF8E]" /> },
        { name: 'Neo4j Aura', icon: <SiNeo4J className="w-8 h-8 sm:w-10 sm:h-10 text-[#008CC1]" /> },
        { name: 'Redis', icon: <SiRedis className="w-8 h-8 sm:w-10 sm:h-10 text-[#DC382D]" /> },
      ],
    },
    {
      title: 'CLOUD & DEVOPS',
      skills: [
        { name: 'Docker', icon: <IoLogoDocker className="w-8 h-8 sm:w-10 sm:h-10 text-[#2496ED]" /> },
        { name: 'Git', icon: <FaGitAlt className="w-8 h-8 sm:w-10 sm:h-10 text-[#F05032]" /> },
        { name: 'GitHub', icon: <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 text-[#181717] dark:text-white" /> },
        { name: 'Vercel', icon: <SiVercel className="w-8 h-8 sm:w-10 sm:h-10 text-[#141413] dark:text-white" /> },
        { name: 'Render', icon: <SiRender className="w-8 h-8 sm:w-10 sm:h-10 text-[#46E3B7]" /> },
        { name: 'Kafka', icon: <SiApachekafka className="w-8 h-8 sm:w-10 sm:h-10 text-[#231F20] dark:text-white" /> },
        { name: 'DigitalOcean', icon: <SiDigitalocean className="w-8 h-8 sm:w-10 sm:h-10 text-[#0080FF]" /> },
      ],
    },
    {
      title: 'AI & MACHINE LEARNING',
      skills: [
        { name: 'LangChain', icon: <SiLangchain className="w-8 h-8 sm:w-10 sm:h-10 text-[#1C3C3C] dark:text-[#D4AF37]" /> },
        { name: 'Ollama', icon: <SiOllama className="w-8 h-8 sm:w-10 sm:h-10 text-[#141413] dark:text-white" /> },
        { name: 'Hugging Face', icon: <SiHuggingface className="w-8 h-8 sm:w-10 sm:h-10 text-[#FFD21E]" /> },
        { name: 'TensorFlow', icon: <SiTensorflow className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF6F00]" /> },
      ],
    },
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-luxury-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#141413] dark:text-[#F7F7F2]">
          About Me
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent max-w-md ml-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Narrative Bio & Vision Quote */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-[#52524B] dark:text-[#C5C5BC] text-base sm:text-lg leading-relaxed">
          <p>
            I'm a <span className="text-[#141413] dark:text-[#F5F5F0] font-semibold">Computer Science undergraduate</span> and <span className="text-[#141413] dark:text-[#F5F5F0] font-semibold">Full Stack Developer</span> with a strong interest in AI engineering. I genuinely enjoy turning abstract ideas into real-world projects that solve meaningful problems and make technology practical and intuitive.
          </p>

          <p>
            I build full-stack applications with the modern MERN stack — <strong className="text-[#141413] dark:text-[#F5F5F0] font-medium">MongoDB, Express.js, React, and Node.js</strong> — with hands-on experience in robust authentication, CRUD architectures, high-performance APIs, and cloud deployments. In tandem, I integrate intelligent LLM workflows using <strong className="text-[#141413] dark:text-[#F5F5F0] font-medium">Ollama, LangChain.js, and RAG pipelines</strong>.
          </p>

          {/* Luxury Vision Callout Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="my-3 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FFFDF9] to-[#FBF8EF] dark:from-[#141412] dark:to-[#1C1C18] border border-[#D4AF37]/40 shadow-[0_8px_30px_rgba(212,175,55,0.12)] relative overflow-hidden"
          >
            <div className="absolute -top-3 -right-3 text-[#D4AF37]/15">
              <Quote className="w-24 h-24 rotate-12" />
            </div>
            <div className="relative z-10 flex flex-col">
              <span className="font-display tracking-[0.25em] text-xs uppercase text-[#996515] dark:text-[#E5C158] font-semibold mb-2">
                Core Engineering Vision
              </span>
              <p className="font-luxury-serif text-2xl sm:text-3xl font-normal text-[#141413] dark:text-[#F7F7F2] italic leading-snug">
                "Building intelligent, human-centered software — one real problem at a time."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Education Cards & Quick Snapshot */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-luxury-serif text-2xl font-normal text-[#141413] dark:text-[#F7F7F2]">Education</h3>
          </div>

          <div className="flex flex-col gap-4">
            {educationList.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="p-5 rounded-xl bg-white dark:bg-[#141412] border border-[#D4AF37]/30 dark:border-[#D4AF37]/40 shadow-sm hover:shadow-[0_8px_25px_rgba(212,175,55,0.18)] hover:border-[#D4AF37] transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-luxury-serif font-medium text-[#141413] dark:text-[#F7F7F2] text-xl">
                    {edu.institution}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#996515] dark:text-[#F3E5AB] font-mono text-xs font-semibold whitespace-nowrap">
                    {edu.score}
                  </span>
                </div>
                <p className="text-sm font-medium text-[#575750] dark:text-[#A8A8A0] mb-2">
                  {edu.degree}
                </p>
                <div className="flex items-center justify-between text-xs text-[#8A8A82] dark:text-[#8E8E85] mb-3">
                  <span>{edu.duration}</span>
                  <span className="text-[#996515] dark:text-[#E5C158] font-medium">{edu.status}</span>
                </div>
                <ul className="space-y-1 text-xs text-[#6B6B63] dark:text-[#A0A096] border-t border-neutral-100 dark:border-neutral-800 pt-2.5">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats Highlight Card */}
          <div className="mt-2 p-5 rounded-xl bg-gradient-to-r from-[#141413] to-[#252520] dark:from-[#0E0E0D] dark:to-[#181815] text-white shadow-lg relative overflow-hidden border border-[#D4AF37]/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl" />
            <h4 className="font-display tracking-[0.25em] text-[11px] text-[#D4AF37] uppercase font-semibold mb-3">
              Developer Profile Snapshot
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-luxury-serif text-3xl font-medium text-[#F3E5AB]">9.2 / 10</p>
                <p className="text-xs text-neutral-400">Academic Merit</p>
              </div>
              <div>
                <p className="font-luxury-serif text-3xl font-medium text-[#F3E5AB]">400+</p>
                <p className="text-xs text-neutral-400">LeetCode Solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline Section */}
      <div id="experience" className="mt-24 scroll-mt-24">
        <div className="flex items-center gap-4 mb-10">
          <h3 className="font-luxury-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#141413] dark:text-[#F7F7F2]">
            Work Experience
          </h3>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent max-w-sm ml-4" />
        </div>

        <div className="space-y-8">
          {workExperience.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#141412] border border-[#D4AF37]/35 dark:border-[#D4AF37]/40 shadow-[0_4px_25px_rgba(212,175,55,0.08)] hover:shadow-[0_10px_35px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="font-luxury-serif text-2xl font-medium text-[#141413] dark:text-[#F7F7F2] flex items-center gap-2">
                    <span>{exp.role}</span>
                    <span className="text-[#D4AF37]">@</span>
                    <span className="text-[#996515] dark:text-[#F3E5AB] underline decoration-[#D4AF37]/40 underline-offset-4">{exp.company}</span>
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-[#7B7B73] dark:text-[#8E8E85] mt-1 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <span className="inline-block self-start sm:self-auto px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#996515] dark:text-[#F3E5AB] text-xs font-semibold uppercase tracking-wider">
                  {exp.type}
                </span>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6 text-sm sm:text-base text-[#575750] dark:text-[#A8A89F]">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-md bg-[#FBF9F2] dark:bg-[#1C1C18] text-[#996515] dark:text-[#E5C158] text-xs font-mono font-medium border border-[#D4AF37]/30 dark:border-[#D4AF37]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Section - Converted to Horizontal Layout with Lift Up Animation (Matching Reference Image) */}
      <div className="mt-24">
        <div className="text-center mb-10">
          <span className="font-display tracking-[0.25em] text-xs uppercase text-[#996515] dark:text-[#E5C158] font-semibold">
            Technical Arsenal
          </span>
          <h3 className="font-luxury-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#141413] dark:text-[#F7F7F2] mt-1">
            Skills & Technologies
          </h3>
        </div>

        {/* Horizontal Category Rows */}
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col items-center">
              {/* Category Divider Header: — NAME — */}
              <div className="flex items-center justify-center gap-4 mb-6 w-full max-w-3xl">
                <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#996515]/30 to-[#996515]/50 dark:via-[#D4AF37]/30 dark:to-[#D4AF37]/60" />
                <h4 className="font-display text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#6B501B] dark:text-[#E5C158] whitespace-nowrap px-2">
                  {category.title}
                </h4>
                <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#996515]/30 to-[#996515]/50 dark:via-[#D4AF37]/30 dark:to-[#D4AF37]/60" />
              </div>

              {/* Horizontal Row of Skill Cards with Lift Up Animation */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-7 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center cursor-pointer select-none"
                  >
                    {/* Square Rounded Card with Lift Up Hover Animation */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#141412] border border-neutral-200/80 dark:border-[#D4AF37]/30 shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 ease-out group-hover:-translate-y-2.5 group-hover:shadow-[0_16px_32px_rgba(212,175,55,0.28)] group-hover:border-[#D4AF37] dark:group-hover:border-[#E5C158] group-hover:ring-2 group-hover:ring-[#D4AF37]/30">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                    </div>

                    {/* Skill Label (Highlights on hover just like reference Python badge) */}
                    <span className="text-xs sm:text-sm font-medium text-[#44443E] dark:text-[#C5C5BC] mt-2 group-hover:text-[#996515] dark:group-hover:text-[#F3E5AB] group-hover:font-semibold transition-colors duration-200 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
