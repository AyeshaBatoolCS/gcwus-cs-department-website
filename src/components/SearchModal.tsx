import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, User, FlaskConical, Calendar, ArrowRight } from 'lucide-react';
import { academicPrograms, facultyMembers, researchAreas, newsAndEvents } from '../data/departmentData';
import { Program, FacultyMember, ResearchArea, NewsEvent } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgram?: (program: Program) => void;
  onSelectFaculty?: (faculty: FacultyMember) => void;
  onSelectResearch?: (research: ResearchArea) => void;
  onSelectNews?: (news: NewsEvent) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProgram,
  onSelectFaculty,
  onSelectResearch,
  onSelectNews,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const term = searchTerm.toLowerCase().trim();

  const matchedPrograms = academicPrograms.filter(
    (p) =>
      p.title.toLowerCase().includes(term) ||
      p.degreeType.toLowerCase().includes(term) ||
      p.overview.toLowerCase().includes(term)
  );

  const matchedFaculty = facultyMembers.filter(
    (f) =>
      f.name.toLowerCase().includes(term) ||
      f.specialization.some((s) => s.toLowerCase().includes(term)) ||
      f.designation.toLowerCase().includes(term)
  );

  const matchedResearch = researchAreas.filter(
    (r) =>
      r.title.toLowerCase().includes(term) ||
      r.category.toLowerCase().includes(term) ||
      r.description.toLowerCase().includes(term)
  );

  const matchedNews = newsAndEvents.filter(
    (n) => n.title.toLowerCase().includes(term) || n.summary.toLowerCase().includes(term)
  );

  const totalResults =
    (term ? matchedPrograms.length : 0) +
    (term ? matchedFaculty.length : 0) +
    (term ? matchedResearch.length : 0) +
    (term ? matchedNews.length : 0);

  const handleProgramClick = (p: Program) => {
    onClose();
    if (onSelectProgram) {
      onSelectProgram(p);
    } else {
      const el = document.getElementById('programs');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFacultyClick = (f: FacultyMember) => {
    onClose();
    if (onSelectFaculty) {
      onSelectFaculty(f);
    } else {
      const el = document.getElementById('faculty');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResearchClick = (r: ResearchArea) => {
    onClose();
    if (onSelectResearch) {
      onSelectResearch(r);
    } else {
      const el = document.getElementById('research');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsClick = (n: NewsEvent) => {
    onClose();
    if (onSelectNews) {
      onSelectNews(n);
    } else {
      const el = document.getElementById('news');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-950/65 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Search Department Portal"
    >
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3.5 p-4 sm:p-5 border-b border-slate-200">
          <Search className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search degrees, faculty, research labs, events... (e.g. BS CS, HPC, Dr. Usman)"
            className="w-full text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
          />
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 cursor-pointer"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-5 space-y-6">
          {!searchTerm ? (
            <div className="py-8 text-center text-slate-500 text-xs sm:text-sm">
              <p className="font-bold text-slate-800 text-base mb-1">Quick Search Department</p>
              <p className="text-slate-400 max-w-md mx-auto">
                Type keywords like "BS CS", "BS IT", "High-Performance Computing", "Dr. Usman Ashraf", or "Admissions".
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {['BS Computer Science', 'BS Information Technology', 'Dr. M. Usman Ashraf', 'High-Performance Computing', 'Fall Admissions'].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setSearchTerm(chip)}
                    className="px-3.5 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-[#0B3D91] rounded-full text-xs font-semibold text-slate-600 transition-colors cursor-pointer border border-slate-200/60"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-slate-500 text-sm">
              No results found for "<span className="font-semibold text-slate-700">{searchTerm}</span>". Try searching for "programs", "faculty", or "admissions".
            </div>
          ) : (
            <>
              {/* Programs */}
              {matchedPrograms.length > 0 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#0B3D91]" />
                    <span>Academic Programs ({matchedPrograms.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedPrograms.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleProgramClick(p)}
                        className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/70 text-xs sm:text-sm text-slate-800 transition-colors group border border-transparent hover:border-blue-100 cursor-pointer"
                      >
                        <div>
                          <div className="font-bold group-hover:text-[#0B3D91]">{p.title}</div>
                          <div className="text-xs text-slate-500">{p.duration} · {p.degreeType} · {p.creditHours} Cr. Hrs</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0B3D91]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty */}
              {matchedFaculty.length > 0 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#0B3D91]" />
                    <span>Faculty Directory ({matchedFaculty.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedFaculty.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => handleFacultyClick(f)}
                        className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/70 text-xs sm:text-sm text-slate-800 transition-colors group border border-transparent hover:border-blue-100 cursor-pointer"
                      >
                        <div>
                          <div className="font-bold group-hover:text-[#0B3D91]">{f.name}</div>
                          <div className="text-xs text-slate-500">{f.designation} · {f.specialization.join(', ')}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0B3D91]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Research */}
              {matchedResearch.length > 0 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <FlaskConical className="w-3.5 h-3.5 text-[#0B3D91]" />
                    <span>Research Clusters ({matchedResearch.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedResearch.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => handleResearchClick(r)}
                        className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/70 text-xs sm:text-sm text-slate-800 transition-colors group border border-transparent hover:border-blue-100 cursor-pointer"
                      >
                        <div>
                          <div className="font-bold group-hover:text-[#0B3D91]">{r.title}</div>
                          <div className="text-xs text-slate-500">{r.category} · Lead: {r.leadFaculty}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0B3D91]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* News */}
              {matchedNews.length > 0 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#0B3D91]" />
                    <span>Notices & Events ({matchedNews.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedNews.map((n) => (
                      <button
                        key={n.id}
                        type="button"
                        onClick={() => handleNewsClick(n)}
                        className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/70 text-xs sm:text-sm text-slate-800 transition-colors group border border-transparent hover:border-blue-100 cursor-pointer"
                      >
                        <div>
                          <div className="font-bold group-hover:text-[#0B3D91]">{n.title}</div>
                          <div className="text-xs text-slate-500">{n.date} · {n.category}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0B3D91]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Info */}
        <div className="bg-slate-50 p-3.5 border-t border-slate-200 text-xs text-slate-400 flex items-center justify-between">
          <span>Press ESC to exit</span>
          <span className="font-medium text-slate-500">GCWUS Computer Science Department</span>
        </div>
      </div>
    </div>
  );
};
