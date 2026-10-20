import React, { useState } from 'react';
import { academicPrograms } from '../data/programsData';
import { Program } from '../types';
import { Clock, BookOpen, ArrowRight, X, Sparkles, GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ProgramsSectionProps {
  onApplyForProgram: (program: Program) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onApplyForProgram }) => {
  const [selectedDegreeType, setSelectedDegreeType] = useState<string>('All');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const filteredPrograms =
    selectedDegreeType === 'All'
      ? academicPrograms
      : academicPrograms.filter((p) => p.degreeType === selectedDegreeType);

  return (
    <section id="programs" className="py-24 lg:py-32 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3D91] bg-blue-50 border border-blue-200/90 rounded-full px-4 py-1.5 mb-3.5 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified GCWUS Academic Degree Programs</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B3D91] tracking-tight">
                Academic Programs Offered
              </h2>
              <p className="text-base text-slate-600 font-body max-w-2xl mt-2 leading-relaxed">
                HEC-recognized computing curricula: BS Computer Science (140 Cr. Hrs), BS Information Technology (138 Cr. Hrs), BS Software Engineering, MS CS, and PhD Computer Science.
              </p>
            </div>

            {/* Filter Segmented Control */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start md:self-auto overflow-x-auto max-w-full border border-slate-200/60">
              {['All', 'Undergraduate', 'Postgraduate', 'Doctoral'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedDegreeType(tab)}
                  type="button"
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                    selectedDegreeType === tab
                      ? 'bg-white text-[#0B3D91] shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((program, idx) => (
            <ScrollReveal key={program.id} direction="up" delay={100 + idx * 75}>
              <div className="flex flex-col justify-between h-full bg-[#F8FAFF] rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-7 sm:p-9 academic-card group">
                <div>
                  {/* Clean Unboxed Metadata Header */}
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 font-medium mb-3.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-[#0B3D91]">{program.degreeType}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="flex items-center gap-1 text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{program.duration}</span>
                      </span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="font-semibold text-slate-800">{program.creditHours} Credit Hours</span>
                    </div>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded text-[11px] border border-emerald-200/60 shrink-0">
                      Admissions Open
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 group-hover:text-[#0B3D91] transition-colors mb-3">
                    {program.title}
                  </h3>

                  {/* Program Overview */}
                  <p className="text-sm text-slate-600 font-body leading-relaxed mb-5">
                    {program.overview}
                  </p>

                  {/* Eligibility Note */}
                  <div className="bg-white rounded-xl p-4 border border-slate-200/90 mb-4 text-xs text-slate-700 shadow-2xs group-hover:border-blue-200 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900">Eligibility Criteria:</span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                        Official Requirement
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{program.eligibility}</p>
                  </div>

                  {/* Pre-Medical / Special Notes Pill */}
                  {program.specialNotes && (
                    <div className="mb-5 px-3 py-2 rounded-lg bg-blue-50/70 border border-blue-100 text-[11px] text-[#0B3D91] flex items-center gap-2 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{program.specialNotes}</span>
                    </div>
                  )}

                  {/* Key Courses Highlights */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Core Subject Highlights
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {program.keyCourses.slice(0, 4).map((course, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium group-hover:border-blue-100 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                      {program.keyCourses.length > 4 && (
                        <span className="text-xs px-2.5 py-1 text-slate-500 font-medium">
                          +{program.keyCourses.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProgram(program)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B3D91] hover:text-[#072c6e] hover:underline cursor-pointer py-1"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Curriculum & Details</span>
                  </button>

                  <button
                    onClick={() => onApplyForProgram(program)}
                    type="button"
                    className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B3D91] hover:bg-[#072c6e] active:scale-95 text-white text-xs sm:text-sm font-semibold shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      {activeModalProgram && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalProgram(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-9 shadow-2xl border border-slate-200 my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProgram(null)}
              type="button"
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close details modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0B3D91] uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>
                {activeModalProgram.degreeType} Program · {activeModalProgram.accreditation}
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-4">
              {activeModalProgram.title}
            </h3>

            <div className="flex flex-wrap gap-6 text-xs sm:text-sm text-slate-600 mb-6 pb-4 border-b border-slate-100">
              <div>
                <span className="text-slate-400 block text-xs">Degree Duration:</span>
                <span className="font-bold text-slate-900">{activeModalProgram.duration}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Total Credit Hours:</span>
                <span className="font-bold text-[#0B3D91]">{activeModalProgram.creditHours} Credits</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Intake Cycles:</span>
                <span className="font-bold text-slate-900">{activeModalProgram.intakeSeason}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs">Official Recognition:</span>
                <span className="font-bold text-emerald-700">HEC & NCEAC</span>
              </div>
            </div>

            <div className="space-y-6 mb-8 text-xs sm:text-sm">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Program Overview
                </h4>
                <p className="text-slate-600 leading-relaxed font-body">
                  {activeModalProgram.overview}
                </p>
              </div>

              <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100">
                <h4 className="text-xs font-bold text-[#0B3D91] mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                  <span>Verified Admission Criteria</span>
                </h4>
                <p className="text-slate-700 leading-relaxed">{activeModalProgram.eligibility}</p>
                {activeModalProgram.specialNotes && (
                  <p className="text-amber-800 text-[11px] font-semibold mt-2 pt-2 border-t border-blue-200/60">
                    Important: {activeModalProgram.specialNotes}
                  </p>
                )}
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Key Curriculum Subjects
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProgram.keyCourses.map((c, i) => (
                    <div
                      key={i}
                      className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/70 text-slate-700 font-medium text-xs flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Career Prospects & Graduate Pathways
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProgram.careerProspects.map((cp, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold"
                    >
                      {cp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveModalProgram(null)}
                type="button"
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer active:scale-95"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveModalProgram(null);
                  onApplyForProgram(activeModalProgram);
                }}
                type="button"
                className="px-6 py-2.5 rounded-xl bg-[#0B3D91] hover:bg-[#072c6e] text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors cursor-pointer active:scale-95"
              >
                Apply for {activeModalProgram.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
