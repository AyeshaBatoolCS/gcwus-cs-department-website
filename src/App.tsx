import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { FacultySection } from './components/FacultySection';
import { ResearchSection } from './components/ResearchSection';
import { NewsEventsSection } from './components/NewsEventsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { SearchModal } from './components/SearchModal';
import { ApplyModal } from './components/ApplyModal';
import { VideoModal } from './components/VideoModal';
import { Program, FacultyMember, ResearchArea, NewsEvent } from './types';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedProgramForApply, setSelectedProgramForApply] = useState<Program | null>(null);

  // Global keyboard shortcut: Cmd+K / Ctrl+K to open Search Modal
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleOpenApply = (program?: Program) => {
    if (program) {
      setSelectedProgramForApply(program);
    } else {
      setSelectedProgramForApply(null);
    }
    setIsApplyOpen(true);
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSelectProgram = (program: Program) => {
    const el = document.getElementById('programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    handleOpenApply(program);
  };

  const handleSearchSelectFaculty = (_faculty: FacultyMember) => {
    const el = document.getElementById('faculty');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSelectResearch = (_research: ResearchArea) => {
    const el = document.getElementById('research');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSelectNews = (_news: NewsEvent) => {
    const el = document.getElementById('news');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFF] text-[#1E293B]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenApply={() => handleOpenApply()}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExplorePrograms={handleExplorePrograms}
          onMeetFaculty={() => {
            const el = document.getElementById('faculty');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onWatchVideo={() => setIsVideoOpen(true)}
        />

        {/* 3. Animated Statistics Counters */}
        <StatsCounter />

        {/* 5. About Department Section */}
        <AboutSection />

        {/* 4. Academic Degree Programs */}
        <ProgramsSection onApplyForProgram={handleOpenApply} />

        {/* 6. Faculty Profiles */}
        <FacultySection />

        {/* 7. Research & Innovation Clusters */}
        <ResearchSection />

        {/* 8. Latest News & Events */}
        <NewsEventsSection />

        {/* 9. Interactive Photo Gallery & Lightbox */}
        <GallerySection />

        {/* 11. Contact Form & Department Directory */}
        <ContactSection />
      </main>

      {/* 12. Professional University Department Footer */}
      <Footer
        onOpenApply={() => handleOpenApply()}
      />

      {/* 10. AI Chatbot / FAQ Interface for Student Questions */}
      <Chatbot onOpenApply={() => handleOpenApply()} />

      {/* Interactive Global Search Modal with search item activation */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProgram={handleSearchSelectProgram}
        onSelectFaculty={handleSearchSelectFaculty}
        onSelectResearch={handleSearchSelectResearch}
        onSelectNews={handleSearchSelectNews}
      />

      {/* Comprehensive Admission & Eligibility Guide Modal */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        selectedProgram={selectedProgramForApply}
      />

      {/* Video Tour Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}
