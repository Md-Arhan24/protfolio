import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Rocket, GraduationCap, Cpu } from 'lucide-react';

export default function OrbitScene() {
  const containerRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState(null);

  // Orbiting elements configuration
  const orbitItems = [
    {
      id: 'ai',
      label: 'AI & LLMs',
      sub: 'Prompt Eng & RAG',
      icon: <Sparkles className="w-4 h-4 text-[#D4AF37]" />,
      radiusX: 160,
      radiusY: 100,
      speed: 0.0008,
      initialAngle: 0,
      color: '#D4AF37',
    },
    {
      id: 'code',
      label: 'Full-Stack Code',
      sub: 'MERN & Next.js',
      icon: <Code2 className="w-4 h-4 text-[#996515]" />,
      radiusX: 195,
      radiusY: 120,
      speed: -0.0006,
      initialAngle: Math.PI * 0.5,
      color: '#B8860B',
    },
    {
      id: 'build',
      label: 'Production Build',
      sub: 'Real-time & APIs',
      icon: <Rocket className="w-4 h-4 text-[#C9A227]" />,
      radiusX: 130,
      radiusY: 80,
      speed: 0.001,
      initialAngle: Math.PI,
      color: '#D4AF37',
    },
    {
      id: 'learning',
      label: 'Continuous Learning',
      sub: 'working on real world problems',
      icon: <GraduationCap className="w-4 h-4 text-[#996515]" />,
      radiusX: 220,
      radiusY: 135,
      speed: -0.0005,
      initialAngle: Math.PI * 1.5,
      color: '#AA771C',
    },
  ];

  // Subtle 3D tilt tracking
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseOffset({ x: x * 10, y: y * 10 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[500px] h-[440px] sm:h-[480px] flex items-center justify-center select-none"
      style={{
        perspective: '1000px',
      }}
    >
      {/* 3D tilt container */}
      <motion.div
        animate={{
          rotateX: -mouseOffset.y * 1.2,
          rotateY: mouseOffset.x * 1.2,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Ambient Gold Halo */}
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#D4AF37]/15 via-[#F3E5AB]/25 to-transparent blur-3xl pointer-events-none" />

        {/* Orbit Rings (Concentric Gold Ellipses) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="-250 -240 500 480"
        >
          <defs>
            <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#AA771C" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F3E5AB" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#85580F" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Elliptical paths */}
          <ellipse cx="0" cy="0" rx="130" ry="80" fill="none" stroke="url(#orbitGrad1)" strokeWidth="1.2" strokeDasharray="4 5" />
          <ellipse cx="0" cy="0" rx="160" ry="100" fill="none" stroke="url(#orbitGrad2)" strokeWidth="1.2" />
          <ellipse cx="0" cy="0" rx="195" ry="120" fill="none" stroke="url(#orbitGrad1)" strokeWidth="1" strokeDasharray="3 4" />
          <ellipse cx="0" cy="0" rx="220" ry="135" fill="none" stroke="url(#orbitGrad2)" strokeWidth="1.5" strokeOpacity="0.4" />
        </svg>

        {/* Central Core: Arhan / AI Engine Node */}
        <div className="relative z-20 flex flex-col items-center">
          {/* Pulsing ripple rings */}
          <div className="absolute -inset-4 rounded-full border border-[#D4AF37]/30 animate-ping [animation-duration:3s]" />
          <div className="absolute -inset-8 rounded-full border border-[#D4AF37]/15 animate-pulse" />

          {/* Core Sphere */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#FFFDF5] to-[#F5EACB] dark:from-[#1E1E1B] dark:via-[#141412] dark:to-[#0A0A09] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.4)] flex flex-col items-center justify-center text-center p-3 group cursor-pointer transition-transform duration-300 hover:scale-105">
            {/* Core Icon / Monogram */}
            <div className="w-8 h-8 rounded-full bg-[#141413] flex items-center justify-center text-[#D4AF37] shadow-inner mb-1">
              <Cpu className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <span
              className="font-cursive text-xl text-[#996515] dark:text-[#F3E5AB] font-bold leading-tight"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Arhan
            </span>
            <span className="text-[9px] font-mono text-[#7D7D75] dark:text-[#9E9E95] uppercase tracking-wider">
              Core Node
            </span>
          </div>
        </div>

        {/* Orbiting Satellites */}
        {orbitItems.map((item, index) => {
          return (
            <OrbitingSatellite
              key={item.id}
              item={item}
              isHovered={hoveredNode === item.id}
              onHover={() => setHoveredNode(item.id)}
              onLeave={() => setHoveredNode(null)}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

// Subcomponent for individual orbiting node with smooth continuous rotation
function OrbitingSatellite({ item, isHovered, onHover, onLeave }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    let angle = item.initialAngle;

    const animate = () => {
      // Rotate continuously
      angle += item.speed;
      const x = Math.cos(angle) * item.radiusX;
      const y = Math.sin(angle) * item.radiusY;
      setCoords({ x, y });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [item]);

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="absolute z-20 cursor-pointer"
      style={{
        transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
        willChange: 'transform',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        className="flex items-center gap-2 bg-white/95 dark:bg-[#141412]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:border-[#D4AF37] hover:shadow-[0_6px_25px_rgba(212,175,55,0.35)] transition-all"
      >
        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0">
          {item.icon}
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-semibold text-[#141413] dark:text-[#F5F5F0] whitespace-nowrap">
            {item.label}
          </span>
          <span className="text-[9px] text-[#7A7A72] dark:text-[#9E9E95] font-mono whitespace-nowrap hidden sm:inline">
            {item.sub}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
