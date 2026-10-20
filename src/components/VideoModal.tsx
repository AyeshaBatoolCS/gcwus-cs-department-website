import React, { useState } from 'react';
import { X, Play, Pause, Award, Users, GraduationCap, Video, Volume2, VolumeX, Building, Sparkles } from 'lucide-react';
import { departmentImages } from '../data/departmentData';
import { SafeImage } from './SafeImage';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState<number>(0);

  if (!isOpen) return null;

  const chapters = [
    {
      title: 'GCWUS Imam Bibi Campus & CS Facilities',
      subtitle: 'New campus shift at Amanabad Road: academic blocks, spacious smart labs, and technology wing.',
      duration: '02:40',
      image: '/images/campus.jpg',
      fallbackImage: departmentImages.campusBuilding,
      fallbackType: 'campus' as const,
    },
    {
      title: 'Central Computing & Software Engineering Labs',
      subtitle: 'Core i7 developer stations, dual monitors, high-speed campus intranet, and hands-on coding facilities.',
      duration: '03:15',
      image: '/images/computer-lab.jpg',
      fallbackImage: departmentImages.heroLab,
      fallbackType: 'lab' as const,
    },
    {
      title: 'AI, HPC & Data Science Research Hub',
      subtitle: 'Dedicated GPU clusters, deep neural network training benches, and doctoral thesis workspaces.',
      duration: '02:50',
      image: '/images/research-lab.jpg',
      fallbackImage: departmentImages.researchAi,
      fallbackType: 'lab' as const,
    },
    {
      title: 'Final Year Project (FYP) & Tech Innovation Expo',
      subtitle: 'Female scholars presenting real-world cloud applications, mobile systems, and AI models.',
      duration: '02:18',
      image: '/images/fyp-expo.jpg',
      fallbackImage: departmentImages.fypExhibition,
      fallbackType: 'generic' as const,
    },
  ];

  const current = chapters[activeChapter];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Department and Campus Highlights Video"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-slate-900 rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-800 overflow-hidden text-white my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-30 p-2.5 text-white/80 hover:text-white bg-black/60 hover:bg-black/80 rounded-full transition-colors cursor-pointer"
          aria-label="Close video tour"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Presentation Frame */}
        <div className="relative aspect-[16/9] bg-slate-950 flex items-center justify-center overflow-hidden group">
          <SafeImage
            src={current.image}
            fallbackSrc={current.fallbackImage}
            fallbackType={current.fallbackType}
            alt={current.title}
            className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-105 opacity-80' : 'opacity-65'}`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Interactive Play/Pause Simulation Overlay */}
          <div className="relative z-10 flex flex-col items-center text-center p-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              type="button"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0B3D91] hover:bg-[#072c6e] border-2 border-amber-300 text-amber-300 flex items-center justify-center shadow-xl mb-4 group cursor-pointer hover:scale-110 active:scale-95 transition-all"
              aria-label={isPlaying ? 'Pause tour preview' : 'Play tour preview'}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current text-white" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1 text-white" />
              )}
            </button>

            <span className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-1.5">
              {current.title}
            </span>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md font-body leading-relaxed mb-3">
              {current.subtitle}
            </p>

            {isPlaying && (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-black/50 px-3 py-1 rounded-full border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Streaming Department Tour · 1080p HD</span>
              </div>
            )}
          </div>

          {/* Player Controls Bar at bottom of video */}
          <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-xs text-slate-300 bg-slate-950/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-white cursor-pointer"
                aria-label="Toggle playback"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <span className="font-mono">{isPlaying ? '01:14' : '00:00'} / {current.duration}</span>
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              type="button"
              className="hover:text-white cursor-pointer p-1"
              aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Tour Chapters Navigation Strip */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-amber-400" />
            <span>Select Campus Tour Chapter</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setActiveChapter(idx);
                  setIsPlaying(true);
                }}
                className={`text-left p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
                  activeChapter === idx
                    ? 'bg-[#0B3D91] border-blue-500 text-white shadow-sm'
                    : 'bg-slate-800/80 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="font-bold line-clamp-1 flex items-center justify-between">
                  <span>{ch.title}</span>
                  <span className="text-[10px] opacity-75 font-mono">{ch.duration}</span>
                </div>
                <div className="text-[11px] opacity-80 line-clamp-1 mt-0.5">{ch.subtitle}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Department Highlights Strip */}
        <div className="p-5 bg-slate-950 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-900/60 text-[#3B82F6] border border-blue-800">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block">1,500+ Scholars</span>
              <span className="text-slate-400">Collaborative learning culture</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-900/60 text-amber-400 border border-blue-800">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block">6 High-Tech Labs</span>
              <span className="text-slate-400">Dedicated AI & GPU nodes</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-900/60 text-emerald-400 border border-blue-800">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white block">HEC Recognized</span>
              <span className="text-slate-400">Chartered public university</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
