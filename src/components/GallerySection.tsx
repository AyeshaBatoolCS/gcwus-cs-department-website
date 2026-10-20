import React, { useState, useEffect } from 'react';
import { galleryItems } from '../data/departmentData';
import { GalleryItem } from '../types';
import { Images, Maximize2, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SafeImage } from './SafeImage';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Computing Labs', 'Campus Life', 'FYP Exhibition'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3D91] bg-blue-50 border border-blue-200/90 rounded-full px-4 py-1.5 shadow-2xs mb-3.5">
                <Images className="w-3.5 h-3.5" />
                <span>Campus Photography</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B3D91] tracking-tight">
                Life at GCWUS Computer Science
              </h2>
              <p className="text-base text-slate-600 font-body max-w-2xl mt-2 leading-relaxed">
                Visual glimpses of our computing laboratories, academic campus, student project exhibitions, and technological events in Sialkot.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto self-start md:self-auto border border-slate-200/60">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null);
                  }}
                  type="button"
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                    selectedCategory === cat
                      ? 'bg-white text-[#0B3D91] shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={100 + index * 90}>
              <div
                onClick={() => handleOpenLightbox(index)}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 aspect-[16/10] cursor-pointer academic-card"
              >
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-5 left-5">
                  <span className="text-xs font-semibold text-white/95 bg-slate-900/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                    {item.category}
                  </span>
                </div>

                {/* Maximize Icon */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200">
                  <Maximize2 className="w-5 h-5" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 text-xs text-amber-300 font-medium mb-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6 animate-in fade-in zoom-in-95 duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Lightbox */}
          <button
            onClick={() => setLightboxIndex(null)}
            type="button"
            className="absolute top-5 right-5 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer active:scale-95"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            type="button"
            className="absolute left-5 top-1/2 -translate-y-1/2 z-50 p-3.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full transition-colors hidden sm:block cursor-pointer active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            type="button"
            className="absolute right-5 top-1/2 -translate-y-1/2 z-50 p-3.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 rounded-full transition-colors hidden sm:block cursor-pointer active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
              <SafeImage
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                objectFit="contain"
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Lightbox Details Bar */}
            <div className="w-full mt-4 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
              <div>
                <div className="text-xs font-semibold text-amber-300 mb-0.5">
                  {filteredItems[lightboxIndex].category} · {filteredItems[lightboxIndex].date}
                </div>
                <h4 className="font-heading font-extrabold text-base sm:text-lg text-white">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>
              <div className="text-xs text-slate-400 font-mono whitespace-nowrap bg-white/10 px-3 py-1 rounded-lg">
                {lightboxIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
