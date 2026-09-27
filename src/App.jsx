import React, { useState } from 'react';
import Preloader from './components/Preloader';
import CursorSpotlight from './components/CursorSpotlight';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import ShowProject from './components/ShowProject';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FDFDFB] dark:bg-[#0A0A09] text-[#141413] dark:text-[#F5F5F0] selection:bg-[#D4AF37]/30 selection:text-current font-sans antialiased overflow-x-hidden transition-colors duration-300">
      {/* 1. Intro Preloader Animation (plays once per session or skippable) */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* 2. Global Cursor Spotlight Overlay (brittanychiang.com style) */}
      <CursorSpotlight />

      {/* 3. Fixed Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* 4. Fixed Side Socials & Email (Desktop) */}
      <SocialSidebar />

      {/* 5. Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: Hero / Landing */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 2: About Me, Vision, Education, Experience & Skills */}
        <AboutSection />

        {/* Section 3: Featured Projects */}
        <ShowProject/>
        {/* <ProjectsSection /> */}

        {/* Section 4: Achievements & LeetCode */}
        <AchievementsSection />

        {/* Section 5: Contact & Footer */}
        <ContactSection />
      </main>

      {/* 6. Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
