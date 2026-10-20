import React from 'react';
import { ArrowRight, Users, Play, ShieldCheck, Terminal, Award, Sparkles, Building2, MapPin } from 'lucide-react';
import { departmentImages } from '../data/departmentData';
import { FloatingCodeSymbols } from './FloatingCodeSymbols';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onExplorePrograms: () => void;
  onMeetFaculty?: () => void;
  onWatchVideo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExplorePrograms, 
  onMeetFaculty,
  onWatchVideo 
}) => {

  const handleMeetFacultyClick = () => {
    if (onMeetFaculty) {
      onMeetFaculty();
    } else {
      const el = document.getElementById('faculty');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#071F4A] text-white"
      aria-label="Welcome to GCWUS Computer Science Department"
    >
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {/* Real Campus Image Layer with subtle Ken Burns zoom effect */}
        <img
          src={departmentImages.campusBuilding}
          alt="Campus building photograph placeholder"
          className="w-full h-full object-cover object-center animate-ken-burns scale-100 will-change-transform"
        />

        {/* 
          Sophisticated Multi-Layer Navy Overlay:
          1. Brand navy gradient from #071F4A / #0B3D91 (solid enough for high WCAG AAA contrast,
             yet translucent enough to clearly showcase the campus architecture, windows, and facade).
          2. Vignette shadow at edges and bottom transition into the page content.
        */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#071F4A]/92 via-[#0B3D91]/80 to-[#071F4A]/88 mix-blend-multiply" 
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#071F4A] via-transparent to-[#071F4A]/50" 
          aria-hidden="true" 
        />

        {/* Subtle Tech Cyber Grid Pattern on top of photograph for CS identity */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Subtle Animated Floating Technology Graphics / Code Symbols */}
      <FloatingCodeSymbols variant="hero" />

      {/* Main Hero Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* Main Heading: Welcome to Computer Science Department */}
          <ScrollReveal direction="up" delay={120}>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md text-balance">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-amber-200">
                Computer Science
              </span>{' '}
              Department
            </h1>
          </ScrollReveal>

          {/* Subtitle: Empowering Minds Through Technology, Creativity, and Innovation. */}
          <ScrollReveal direction="up" delay={240}>
            <p className="font-heading text-lg sm:text-2xl md:text-2.5xl font-medium text-amber-300/95 tracking-normal max-w-3xl mb-8 leading-snug drop-shadow-sm">
              Empowering Minds Through Technology, Creativity, and Innovation.
            </p>
          </ScrollReveal>

          {/* Supplementary Descriptive Context */}
          <ScrollReveal direction="up" delay={300}>
            <p className="text-sm sm:text-base md:text-lg text-slate-200/90 leading-relaxed max-w-2xl mb-10 font-body drop-shadow-xs">
              Pioneering high-impact computational education, artificial intelligence, and software engineering. Preparing Pakistan's next generation of female technologists, researchers, and global industry leaders.
            </p>
          </ScrollReveal>

          {/* Primary & Secondary Action Buttons */}
          <ScrollReveal direction="up" delay={360}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
              {/* Primary Button: Explore Programs */}
              <button
                onClick={onExplorePrograms}
                type="button"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:scale-95 text-[#071F4A] font-heading font-bold text-base shadow-xl hover:shadow-2xl hover:shadow-amber-400/25 transition-all duration-200 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4 text-[#071F4A] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Button: Meet Our Faculty */}
              <button
                onClick={handleMeetFacultyClick}
                type="button"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/25 backdrop-blur-md font-heading font-semibold text-base shadow-lg hover:border-white/40 transition-all duration-200 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
              >
                <Users className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
                <span>Meet Our Faculty</span>
              </button>

              {/* Optional Video Tour Quick Trigger if provided */}
              {onWatchVideo && (
                <button
                  onClick={onWatchVideo}
                  type="button"
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-blue-950/60 hover:bg-blue-900/80 active:scale-95 text-blue-200 hover:text-white border border-blue-400/30 backdrop-blur-md font-body text-sm font-medium transition-all duration-200 cursor-pointer"
                  title="Watch Department Video Tour"
                  aria-label="Watch Video Tour"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-amber-300" />
                  <span>Watch Video</span>
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Academic Trust Badges / Quick Highlights */}
          <ScrollReveal direction="up" delay={420}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/15 w-full max-w-2xl text-xs sm:text-sm text-blue-100/90">
              <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xs py-2.5 px-3 rounded-lg border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-white">HEC & NCEAC Accredited</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xs py-2.5 px-3 rounded-lg border border-white/10">
                <Terminal className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-medium text-white">6 Smart Computing Labs</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xs py-2.5 px-3 rounded-lg border border-white/10 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium text-white">Doctoral Mentorship</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* Bottom Architectural Curve / Gradient Transition to Next Section */}
      <div 
        className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-[#F8FAFF] to-transparent pointer-events-none z-10" 
        aria-hidden="true" 
      />
    </section>
  );
};
