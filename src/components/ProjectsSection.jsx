import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Video, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Activity,
  Image as ImageIcon
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 'video-platform',
      title: 'Cloud Video Conferencing Platform',
      tagline: 'Real-Time Multi-User Peer-to-Peer Streaming Architecture',
      category: 'Distributed Systems & WebRTC',
      description:
        'A full-stack, cloud-hosted video conferencing platform engineered for high-fidelity multi-user audio and video calls, utilizing WebRTC mesh architecture for peer-to-peer media transmission and Socket.io for ultra-low latency event signaling.',
      metrics: [
        { label: 'Latency Reduction', value: '40%', detail: 'Optimized ICE candidate gathering' },
        { label: 'Stream Bitrate', value: '1,500+ kbps', detail: 'Adaptive bitrate encoding' },
        { label: 'Scale Capacity', value: '50+ Users/Call', detail: '<150ms end-to-end latency' },
        { label: 'Reliability', value: '99.5% Uptime', detail: 'Cloud auto-failover signaling' },
      ],
      tech: ['WebRTC', 'Socket.io', 'React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Md-Arhan24', // [Add GitHub link placeholder]
      demo: 'https://zoom0.netlify.app/',   // [Add live demo link placeholder]
      // [ADD PROJECT GIF/SCREENSHOT HERE]
      // When you have the GIF file, place it in src/assets/ and set gifSrc: '/path-to-gif.gif'
      gifSrc: '/giphy.gif',
      accentColor: '#D4AF37',
      visualType: 'video',
    },
    {
      id: 'become-best',
      title: 'BecomeBest: Full-Stack AI Roadmap Planner',
      tagline: 'Intelligent Goal Deconstruction & Daily Execution Engine',
      category: 'AI Application & Productivity',
      description:
        'An AI-driven goal-tracking and personalized roadmap generation platform that breaks long-term technical aspirations into sequenced, actionable daily execution plans with progress analytics.',
      metrics: [
        { label: 'Active Users', value: '1,000+ DAU', detail: 'Scaled organically in 6 months' },
        { label: 'DB Query Speed', value: '+35% Faster', detail: 'Indexed compound MongoDB queries' },
        { label: 'System Uptime', value: '99.9%', detail: 'Automated health checks & recovery' },
        { label: 'Downtime', value: '0 sec', detail: 'Zero downtime rolling deployments' },
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AI Prompting', 'Tailwind CSS'],
      github: 'https://github.com/Md-Arhan24', // [Add GitHub link placeholder]
      demo: 'https://becomebest.netlify.app/',   // [Add live demo link placeholder]
      // [ADD PROJECT GIF/SCREENSHOT HERE]
      // When you have the GIF file, place it in src/assets/ and set gifSrc: '/path-to-gif.gif'
      gifSrc: '/bebetter.gif',
      accentColor: '#996515',
      visualType: 'roadmap',
    },
    {
      id: 'stock-trading',
      title: 'Stock Trading Platform (FinTech Inspired)',
      tagline: 'High-Frequency Market Streaming & Order Execution',
      category: 'FinTech & Real-Time Data',
      description:
        'A high-performance trading dashboard offering live market price streaming, portfolio analytics, and simulated order execution engineered under tight millisecond latency bounds.',
      metrics: [
        { label: 'Execution Speed', value: '<200ms', detail: 'Instant order book fulfillment' },
        { label: 'Concurrent Users', value: '500+', detail: 'High-throughput WebSockets' },
        { label: 'API Response Time', value: '350ms', detail: 'Reduced from 500ms via Redis' },
        { label: 'Caching Boost', value: '+30% Speed', detail: 'In-memory hot-data caching' },
      ],
      tech: ['React', 'Node.js', 'Redis', 'WebSockets', 'Chart.js', 'REST APIs'],
      github: 'https://github.com/Md-Arhan24/OnlineTradingPlatform', // [Add GitHub link placeholder]
      demo: 'https://github.com/Md-Arhan24/OnlineTradingPlatform',   // [Add live demo link placeholder]
      // [ADD PROJECT GIF/SCREENSHOT HERE]
      // When you have the GIF file, place it in src/assets/ and set gifSrc: '/path-to-gif.gif'
      gifSrc: '/kite3-dashboard.png',
      accentColor: '#C9A227',
      visualType: 'stocks',
    },
    // Append these to your existing projects array in ProjectShowcase.jsx
// Adjust metrics/descriptions/visualType to match your renderer & actual project details.

{
  id: 'peer-stay',
  title: 'PeerStay: Peer-to-Peer Accommodation Platform',
  tagline: 'Real-Time Listings & Booking for Shared Stays',
  category: 'Full-Stack Web Application',
  description:
    'A peer-to-peer stay-sharing platform enabling users to list, discover, and book accommodations directly with hosts, featuring real-time availability, search filters, and a streamlined booking flow.',
  metrics: [
    { label: 'Search Speed', value: '<250ms', detail: 'Indexed location-based queries' },
    { label: 'Listings Supported', value: '500+', detail: 'Dynamic host listing management' },
    { label: 'Booking Success', value: '98%', detail: 'Conflict-free availability checks' },
    { label: 'Mobile Responsive', value: '100%', detail: 'Fully responsive across devices' },
  ],
  tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
  github: 'https://github.com/Md-Arhan24/MyProjects', // [Add GitHub link placeholder]
  demo: 'https://github.com/Md-Arhan24/MyProjects',   // [Add live demo link placeholder]
  // [ADD PROJECT GIF/SCREENSHOT HERE]
  gifSrc: '/peer.gif',
  accentColor: '#B8860B',
  visualType: 'chat', // placeholder — replace with your renderer's supported type
},
{
  id: 'deepthink',
  title: 'DeepThink: AI Conversational Assistant',
  tagline: 'Context-Aware Chat Interface Powered by LLMs',
  category: 'AI Application & NLP',
  description:
    'An AI-powered chatbot application delivering context-aware, multi-turn conversations through a clean chat interface, with conversation history and prompt-engineered response handling.',
  metrics: [
    { label: 'Response Time', value: '<1.2s', detail: 'Streamed token-by-token replies' },
    { label: 'Context Window', value: 'Multi-turn', detail: 'Persistent conversation memory' },
    { label: 'Uptime', value: '99.5%', detail: 'Stable API integration & error handling' },
    { label: 'UI Load Time', value: '<1s', detail: 'Optimized React rendering' },
  ],
  tech: ['React', 'Node.js', 'Express', 'AI Prompting', 'REST APIs'],
  github: 'https://github.com/Md-Arhan24/Ai_chatbot',
  demo: 'https://github.com/Md-Arhan24/Ai_chatbot',
  gifSrc: 'ai_chatbot.gif',
  accentColor: '#A67C00',
  visualType: 'chat',
},
{
  id: 'wall-calendar',
  title: 'Wall Calendar: Digital Scheduling App',
  tagline: 'Interactive Monthly Planner & Event Tracker',
  category: 'Productivity & Scheduling',
  description:
    'A digital wall-calendar application for visualizing monthly schedules, adding and managing events, and tracking daily tasks through an intuitive, grid-based calendar UI.',
  metrics: [
    { label: 'Render Speed', value: '<100ms', detail: 'Fast month/day view switching' },
    { label: 'Event Sync', value: 'Real-Time', detail: 'Instant local state updates' },
    { label: 'UI Components', value: '15+', detail: 'Reusable calendar building blocks' },
    { label: 'Responsive Design', value: '100%', detail: 'Works across all screen sizes' },
  ],
  tech: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
  github: 'https://github.com/Md-Arhan24/WallCalender',
  demo: 'https://tuf0.netlify.app/',
  gifSrc: '/calender.png',
  accentColor: '#8B6914',
  visualType: 'calendar',
},
{
  id: 'cafe-client',
  title: 'Cafe Client: Digital Ordering Interface',
  tagline: 'Menu Browsing & Order Placement for Cafes - One of the Freelance client project',
  category: 'E-Commerce & Food Ordering',
  description:
    'A client-facing web app for browsing cafe menus, customizing orders, and placing them digitally, designed to streamline the in-store and online ordering experience.',
  metrics: [
    { label: 'Page Load', value: '<1.5s', detail: 'Optimized asset loading' },
    { label: 'Menu Items', value: '50+', detail: 'Categorized, filterable catalog' },
    { label: 'Cart Updates', value: 'Instant', detail: 'Real-time cart state management' },
    { label: 'Checkout Flow', value: '3 Steps', detail: 'Simplified order-to-confirm process' },
  ],
  tech: ['React', 'JavaScript', 'CSS3', 'REST APIs'],
  github: 'https://github.com/Md-Arhan24/cafe_client',
  demo: 'https://bamboobuzz.netlify.app/',
  gifSrc: '/cafe.gif',
  accentColor: '#CD9B1D',
  visualType: 'ecommerce',
},
{
  id: 'byte-mentor',
  title: 'Byte Mentor: AI Coding Mentor Platform',
  tagline: 'Personalized Guidance for Learning to Code',
  category: 'AI Application & EdTech',
  description:
    'An upcoming AI-powered coding mentorship platform designed to guide learners through personalized coding challenges, real-time feedback, and structured learning paths.',
  metrics: [
    { label: 'Status', value: 'In Development', detail: 'Coming soon' },
    { label: 'Planned Features', value: 'AI Feedback', detail: 'Real-time code review' },
    { label: 'Target Stack', value: 'MERN + AI', detail: 'Full-stack with LLM integration' },
    { label: 'Launch', value: 'TBD', detail: 'Actively in progress' },
  ],
  tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AI Prompting'],
  github: null, // not yet published
  demo: null,   // coming soon
  gifSrc: '/comming.jpeg',
  accentColor: '#9C7A1E',
  visualType: 'mentor',
},
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 px-6 sm:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Top Navigation Back to Portfolio */}
      <div className="mb-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#996515] dark:text-[#F3E5AB] hover:text-[#141413] dark:hover:text-white transition-colors group px-4 py-2 rounded-xl bg-white dark:bg-[#141412] border border-[#D4AF37]/30 shadow-xs"
        >
          <span className="text-base group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back to Portfolio</span>
        </a>
      </div>

      {/* Section Heading */}
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141413] dark:text-[#F5F5F0]">
          All Projects
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent max-w-md ml-4" />
      </div>
      <p className="text-[#686861] dark:text-[#A8A89F] text-base mb-14 max-w-2xl leading-relaxed">
        A selection of production-grade systems engineered with a strong emphasis on performance, scalability, and clean architecture.
      </p>

      {/* Projects List */}
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative rounded-3xl bg-white dark:bg-[#141412] border border-[#D4AF37]/30 dark:border-[#D4AF37]/40 shadow-[0_4px_25px_rgba(212,175,55,0.06)] dark:shadow-[0_4px_25px_rgba(212,175,55,0.15)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                {/* Media Preview Slot */}
                <div
                  className={`lg:col-span-6 w-full ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-inner bg-gradient-to-br from-[#121212] via-[#1A1A18] to-[#0A0A0A] aspect-video flex flex-col">
                    {/* Browser Bar Mockup */}
                    <div className="h-8 bg-[#222220] border-b border-[#333330] flex items-center justify-between px-4">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400 truncate max-w-[200px]">
                        {project.title.toLowerCase().replace(/[\s:]+/g, '-')}.local
                      </div>
                      <div className="w-8" />
                    </div>

                    {/* Media Display or Interactive Mockup Placeholder */}
                    <div className="relative flex-1 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
                      {project.gifSrc ? (
                        <img
                          src={project.gifSrc}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        /* Simulated live UI animation placeholder until Arhan provides his GIF */
                        <div className="w-full h-full flex flex-col items-center justify-center relative">
                          {/* Animated background grid for tech feel */}
                          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

                          {project.visualType === 'video' && (
                            <div className="relative z-10 flex flex-col items-center">
                              <div className="grid grid-cols-2 gap-2 mb-3">
                                <div className="w-20 sm:w-24 h-14 rounded-lg bg-neutral-800/90 border border-[#D4AF37]/50 flex items-center justify-center">
                                  <Video className="w-5 h-5 text-[#D4AF37] animate-pulse" />
                                </div>
                                <div className="w-20 sm:w-24 h-14 rounded-lg bg-neutral-800/90 border border-neutral-700 flex items-center justify-center">
                                  <span className="text-[10px] font-mono text-neutral-400">Peer 02</span>
                                </div>
                              </div>
                              <span className="text-xs font-mono text-[#D4AF37] flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#27C93F] animate-ping" />
                                WebRTC 50+ Peers Connected
                              </span>
                            </div>
                          )}

                          {project.visualType === 'roadmap' && (
                            <div className="relative z-10 flex flex-col items-center w-full px-6">
                              <div className="w-full max-w-[240px] space-y-2 mb-3">
                                <div className="h-3 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 overflow-hidden">
                                  <div className="h-full bg-gradient-to-r from-[#996515] to-[#D4AF37] w-3/4 animate-pulse" />
                                </div>
                                <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                                  <span>Daily AI Milestones</span>
                                  <span className="text-[#D4AF37]">75% Done</span>
                                </div>
                              </div>
                              <span className="text-xs font-mono text-[#D4AF37] flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                1,000+ Active Users • 0 Downtime
                              </span>
                            </div>
                          )}

                          {project.visualType === 'stocks' && (
                            <div className="relative z-10 flex flex-col items-center">
                              <div className="flex items-end gap-1.5 h-14 mb-3">
                                {[35, 50, 45, 65, 55, 80, 70, 95].map((h, i) => (
                                  <div
                                    key={i}
                                    style={{ height: `${h}%` }}
                                    className={`w-3.5 rounded-t-sm ${
                                      i % 2 === 0 ? 'bg-[#27C93F]' : 'bg-[#D4AF37]'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs font-mono text-[#27C93F] flex items-center gap-1.5">
                                <TrendingUp className="w-3.5 h-3.5" />
                                Redis Stream: &lt;200ms Execution
                              </span>
                            </div>
                          )}

                          {/* Clearly marked badge for Arhan's GIF slot */}
                          <div className="mt-4 px-3 py-1 rounded-full bg-[#141413]/90 border border-[#D4AF37]/60 text-[10px] font-mono text-[#F3E5AB] flex items-center gap-1.5">
                            <ImageIcon className="w-3 h-3 text-[#D4AF37]" />
                            <span>[ADD PROJECT GIF/SCREENSHOT HERE]</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content & Metrics Column */}
                <div
                  className={`lg:col-span-6 flex flex-col ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Category Pill */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#996515] font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#141413] dark:text-[#F5F5F0] tracking-tight mb-2 group-hover:text-[#996515] dark:group-hover:text-[#F3E5AB] transition-colors">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm font-semibold text-[#806B33] dark:text-[#D4AF37] mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#52524B] dark:text-[#A8A8A0] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Impact Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-[#FBF9F2] dark:bg-[#1C1C18] border border-[#D4AF37]/25 dark:border-[#D4AF37]/35">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-base sm:text-lg font-extrabold text-[#141413] dark:text-[#F5F5F0] flex items-center gap-1">
                          <span className="text-[#996515] dark:text-[#E5C158]">{metric.value}</span>
                        </span>
                        <span className="text-xs font-semibold text-[#4E4E47] dark:text-[#D1D1C7]">
                          {metric.label}
                        </span>
                        <span className="text-[10px] text-[#7C7C75] dark:text-[#8E8E85]">
                          {metric.detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-[#1E1E1A] border border-[#D4AF37]/30 dark:border-[#D4AF37]/40 text-xs font-mono font-medium text-[#4D4D46] dark:text-[#D1D1C7]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#141413] dark:text-[#F5F5F0] hover:text-[#996515] dark:hover:text-[#F3E5AB] transition-colors py-1.5 px-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-[#D4AF37] bg-white dark:bg-[#1A1A17] shadow-xs"
                    >
                      <GithubIcon className="w-4 h-4 text-[#996515] dark:text-[#E5C158]" />
                      <span>Source Code</span>
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-[#996515] to-[#D4AF37] hover:brightness-110 transition-all py-1.5 px-3.5 rounded-lg shadow-xs"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
    </section>
  );
}
