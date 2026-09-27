import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Server, 
  Database, 
  Cloud, 
  Brain, 
  CheckCircle2, 
  Quote, 
  Calendar,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SiLangchaincorporate } from "react-icons/si";
import { SiOllama } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function AboutSection() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');

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

  const skillCategories = [
    {
      name: 'AI / ML',
      icon: <Brain className="w-4 h-4 text-[#D4AF37]" />,
      skills: [<SiLangchaincorporate/>, <SiOllama/>, <SiHuggingface/>, <SiTensorflow/>, 'LangChain', 'Ollama', 'Guardrails', 'RAG', 'Hugging Face', 'TensorFlow', 'PyTorch', 'NLP'],
    },
    {
      name: 'Languages',
      icon: <Code className="w-4 h-4 text-[#996515]" />,
      skills: [<FaJava/>,<FaPython/>,<IoLogoJavascript/>,<BiLogoTypescript/>],
    },
    {
      name: 'Frontend',
      icon: <Sparkles className="w-4 h-4 text-[#C9A227]" />,
      skills: [<FaReact/>, <RiNextjsFill/>, 'JavaScript', <FaHtml5/>, 'CSS3',<RiTailwindCssFill/>, <FaBootstrap/>],
    },
    {
      name: 'Backend',
      icon: <Server className="w-4 h-4 text-[#996515]" />,
      skills: [<FaNodeJs/>, <SiExpress/>, 'LangChain.js', <RiSupabaseFill/>, 'RESTful APIs'],
    },
    {
      name: 'Databases',
      icon: <Database className="w-4 h-4 text-[#AA771C]" />,
      skills: [<SiMongodb/>, 'PostgreSQL', <SiMysql/>, 'Redis'],
    },
    {
      name: 'Cloud & DevOps',
      icon: <Cloud className="w-4 h-4 text-[#85580F]" />,
      skills: [<IoLogoDocker/>, 'CI/CD Pipelines', <FaGitAlt/>, <FaGithub/>,'Vercel Deployment'],
    },
  ];

  const filteredCategories = activeSkillCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.name === activeSkillCategory);

  return (
    <section id="about" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413]">
          About Me
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent max-w-md ml-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Narrative Bio & Vision Quote */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-[#52524B] text-base sm:text-lg leading-relaxed">
          <p>
            I'm a <span className="text-[#141413] font-semibold">Computer Science undergraduate</span> and <span className="text-[#141413] font-semibold">Full Stack Developer</span> with a strong interest in AI engineering. I genuinely enjoy turning abstract ideas into real-world projects that solve meaningful problems and make technology practical and intuitive.
          </p>

          <p>
            I build full-stack applications with the modern MERN stack — <strong className="text-[#141413] font-medium">MongoDB, Express.js, React, and Node.js</strong> — with hands-on experience in robust authentication, CRUD architectures, high-performance APIs, and cloud deployments. In tandem, I integrate intelligent LLM workflows using <strong className="text-[#141413] font-medium">Ollama, LangChain.js, and RAG pipelines</strong>.
          </p>

          {/* Luxury Vision Callout Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="my-3 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FFFDF9] to-[#FBF8EF] border border-[#D4AF37]/40 shadow-[0_8px_30px_rgba(212,175,55,0.12)] relative overflow-hidden"
          >
            <div className="absolute -top-3 -right-3 text-[#D4AF37]/15">
              <Quote className="w-24 h-24 rotate-12" />
            </div>
            <div className="relative z-10 flex flex-col">
              <span className="text-xs uppercase font-mono tracking-widest text-[#996515] font-semibold mb-2">
                Core Engineering Vision
              </span>
              <p className="text-xl sm:text-2xl font-display font-medium text-[#141413] italic leading-snug">
                "Building intelligent, human-centered software — one real problem at a time."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Education Cards & Quick Snapshot */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="text-xl font-bold text-[#141413]">Education</h3>
          </div>

          <div className="flex flex-col gap-4">
            {educationList.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="p-5 rounded-xl bg-white border border-[#D4AF37]/30 shadow-sm hover:shadow-[0_8px_25px_rgba(212,175,55,0.18)] hover:border-[#D4AF37] transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-bold text-[#141413] text-base">
                    {edu.institution}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#996515] font-mono text-xs font-semibold whitespace-nowrap">
                    {edu.score}
                  </span>
                </div>
                <p className="text-sm font-medium text-[#575750] mb-2">
                  {edu.degree}
                </p>
                <div className="flex items-center justify-between text-xs text-[#8A8A82] mb-3">
                  <span>{edu.duration}</span>
                  <span className="text-[#996515] font-medium">{edu.status}</span>
                </div>
                <ul className="space-y-1 text-xs text-[#6B6B63] border-t border-neutral-100 pt-2.5">
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
          <div className="mt-2 p-5 rounded-xl bg-gradient-to-r from-[#141413] to-[#252520] text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-2xl" />
            <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-semibold mb-3">
              Developer Profile Snapshot
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-extrabold text-[#F3E5AB]">9.2 / 10</p>
                <p className="text-xs text-neutral-400">Academic Merit</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#F3E5AB]">400+</p>
                <p className="text-xs text-neutral-400">LeetCode Solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline Section */}
      <div id="experience" className="mt-24 scroll-mt-24">
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141413]">
            Work Experience
          </h3>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent max-w-sm ml-4" />
        </div>

        <div className="space-y-8">
          {workExperience.map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D4AF37]/35 shadow-[0_4px_25px_rgba(212,175,55,0.08)] hover:shadow-[0_10px_35px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-[#141413] flex items-center gap-2">
                    <span>{exp.role}</span>
                    <span className="text-[#D4AF37]">@</span>
                    <span className="text-[#996515] underline decoration-[#D4AF37]/40 underline-offset-4">{exp.company}</span>
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-[#7B7B73] mt-1 font-mono">
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
                <span className="inline-block self-start sm:self-auto px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#996515] text-xs font-semibold uppercase tracking-wider">
                  {exp.type}
                </span>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6 text-sm sm:text-base text-[#575750]">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-md bg-[#FBF9F2] text-[#996515] text-xs font-mono font-medium border border-[#D4AF37]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Grid Section */}
      <div className="mt-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#996515] font-semibold">
              Technical Arsenal
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141413] mt-1">
              Skills & Technologies
            </h3>
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-sm hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)] hover:border-[#D4AF37] transition-all"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-neutral-100">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h4 className="font-bold text-base text-[#141413]">{cat.name}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#FCFBF7] text-[#44443E] border border-neutral-200/80 hover:border-[#D4AF37] hover:text-[#996515] hover:bg-[#FFFDF5] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
