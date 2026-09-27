import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import '../App.css';
import { useNavigate } from "react-router-dom";

export const ShowProject = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: "video-platform",
      imgurl: "/zoom.jpg",
      title: "Cloud Video Conferencing Platform",
      tagline: "Real-Time Multi-User Peer-to-Peer Streaming Architecture",
      category: "Distributed Systems & WebRTC",
      description:
        "A full-stack, cloud-hosted video conferencing platform engineered for high-fidelity multi-user audio and video calls, utilizing WebRTC mesh architecture for peer-to-peer media transmission and Socket.io for ultra-low latency event signaling.",
      tech: ["WebRTC", "Socket.io", "React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Md-Arhan24/video_conference/",
      demo: "https://zoom0.netlify.app/",
    },
    {
      id: "become-best",
      imgurl: "/becomebest.png",
      title: "BecomeBest: Full-Stack AI Roadmap Planner",
      tagline: "Intelligent Goal Deconstruction & Daily Execution Engine",
      category: "AI Application & Productivity",
      description:
        "An AI-driven goal-tracking and personalized roadmap generation platform that breaks long-term technical aspirations into sequenced, actionable daily execution plans with progress analytics.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "AI Prompting",
        "Tailwind CSS",
      ],
      github: "https://github.com/Md-Arhan24/Be-Better",
      demo: "https://becomebest.netlify.app/",
    },
    {
      id: "stock-trading",
      imgurl: "/fintech.jpg",
      title: "Stock Trading Platform (FinTech Inspired)",
      tagline: "High-Frequency Market Streaming & Order Execution",
      category: "FinTech & Real-Time Data",
      description:
        "A high-performance trading dashboard offering live market price streaming, portfolio analytics, and simulated order execution engineered under tight millisecond latency bounds.",
      tech: [
        "React",
        "Node.js",
        "Redis",
        "WebSockets",
        "Chart.js",
        "REST APIs",
      ],
      github: "https://github.com/Md-Arhan24/OnlineTradingPlatform",
      demo: "https://github.com/Md-Arhan24/OnlineTradingPlatform",
    },
    {
      id: "peer-stay",
      imgurl: "/airbnb.jpg",
      title: "PeerStay: Distributed Vacation Rental Marketplace",
      tagline: "End-to-End Home Sharing Ecosystem & Booking Engine",
      category: "Full-Stack Web Applications & Business",
      description:
        "A robust, multi-tenant vacation rental platform featuring dynamic property listings, an interactive geolocation-based search, an end-to-end reservation workflow, and secure multi-party transaction processing.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Stripe API",
      ],
      github: "https://github.com/Md-Arhan24",
      demo: "https://github.com/Md-Arhan24",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Section Heading */}
      <div className="flex items-center gap-4 mb-4">
        <h2 className="font-luxury-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#141413] dark:text-[#F7F7F2]">
          Featured Projects
        </h2>

        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent max-w-md ml-4" />
      </div>

      {/* Responsive Header Row with Paragraph & All Projects Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
        <p className="text-[#686861] dark:text-[#A8A89F] text-base max-w-2xl leading-relaxed">
          A selection of production-grade systems engineered with a strong
          emphasis on performance, scalability, and clean architecture.
        </p>
        <button 
          onClick={() => navigate('/projects')}
          className="self-start sm:self-auto cursor-pointer relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#996515] via-[#C9A227] to-[#AA771C] rounded-lg shadow-[0_4px_20px_rgba(212,175,55,0.35)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group overflow-hidden whitespace-nowrap"
        >
          <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
          <span>All Projects</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Projects Grid: 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col rounded-2xl bg-white dark:bg-[#141412] border border-[#D4AF37]/30 dark:border-[#D4AF37]/40 shadow-[0_4px_25px_rgba(212,175,55,0.06)] dark:shadow-[0_4px_25px_rgba(212,175,55,0.15)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden bg-[#141413]">
              <img
                src={project.imgurl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141413]/70 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 sm:p-7">
              {/* Category */}
              <span className="font-display text-xs uppercase tracking-[0.25em] text-[#996515] dark:text-[#E5C158] font-semibold mb-2">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="font-luxury-serif text-2xl sm:text-3xl font-medium text-[#141413] dark:text-[#F7F7F2] tracking-tight mb-2 group-hover:text-[#996515] dark:group-hover:text-[#F3E5AB] transition-colors">
                {project.title}
              </h3>

              {/* Tagline */}
              <p className="font-luxury-serif italic text-base sm:text-lg font-normal text-[#806B33] dark:text-[#D4AF37] mb-3">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-[#52524B] dark:text-[#A8A89F] leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech / Skills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-[#FBF9F2] dark:bg-[#1C1C18] border border-[#D4AF37]/30 dark:border-[#D4AF37]/40 text-xs font-mono font-medium text-[#4D4D46] dark:text-[#D1D1C7]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#D4AF37]/15 dark:border-[#D4AF37]/25 -mx-1 px-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#141413] dark:text-[#F5F5F0] hover:text-[#996515] dark:hover:text-[#F3E5AB] transition-colors py-1.5 px-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-[#D4AF37] bg-white dark:bg-[#1A1A17] shadow-xs mt-4"
                >
                  <GithubIcon className="w-4 h-4 text-[#996515] dark:text-[#E5C158]" />
                  <span>Code</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-[#996515] to-[#D4AF37] hover:brightness-110 transition-all py-1.5 px-3.5 rounded-lg shadow-xs mt-4"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowProject;
