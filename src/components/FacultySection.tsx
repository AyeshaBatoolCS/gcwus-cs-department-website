import React, { useState } from 'react';
import { facultyMembers } from '../data/facultyData';
import { FacultyMember } from '../types';
import { Mail, Clock, BookOpen, Search, UserCheck, Award, GraduationCap, ExternalLink, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SafeImage } from './SafeImage';

export const FacultySection: React.FC = () => {
  const [facultyList] = useState<FacultyMember[]>(facultyMembers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('All');
  const [activeModalMember, setActiveModalMember] = useState<FacultyMember | null>(null);

  const designations = ['All', 'Chairperson', 'Assistant Professors', 'Lecturers'];

  const filteredFaculty = facultyList.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.specialization.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      member.qualification.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedDesignation === 'All') return true;
    if (selectedDesignation === 'Chairperson') return member.designation.includes('Chairperson');
    if (selectedDesignation === 'Assistant Professors') return member.designation.includes('Assistant Professor');
    if (selectedDesignation === 'Lecturers') return member.designation.includes('Lecturer');

    return true;
  });

  return (
    <section id="faculty" className="py-24 lg:py-32 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3D91] bg-white border border-blue-200/90 rounded-full px-4 py-1.5 shadow-2xs mb-3.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Computer Science Faculty</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B3D91] tracking-tight">
                Our Faculty Members
              </h2>
              <p className="text-base text-slate-600 font-body max-w-2xl mt-2 leading-relaxed">
                Explore faculty profiles and areas of academic expertise. Please confirm profile details against the university’s current official directory.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              {/* Search Input */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by name, HPC, AI, PhD..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm pl-9 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] shadow-2xs"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl overflow-x-auto border border-slate-200/60">
                {designations.map((des) => (
                  <button
                    key={des}
                    onClick={() => setSelectedDesignation(des)}
                    type="button"
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                      selectedDesignation === des
                        ? 'bg-white text-[#0B3D91] shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {des}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Directory Notice with Official Link */}
        <ScrollReveal direction="up" delay={100}>
          <div className="mb-8 p-4 rounded-xl bg-white border border-blue-200/80 shadow-2xs flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
            <span className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>Faculty information:</strong> Please confirm profiles, designations, and qualifications against the{' '}
                <a
                  href="https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/faculty-members/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0B3D91] underline font-semibold inline-flex items-center gap-1"
                >
                  GCWUS Official CS Faculty Page <ExternalLink className="w-3 h-3" />
                </a>.
              </span>
            </span>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Showing {filteredFaculty.length} of {facultyList.length} faculty scholars
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredFaculty.map((member, idx) => {
            const initials = member.name
              .replace(/^(Dr\.|Mr\.|Ms\.)\s*/, '')
              .split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('');

            return (
              <ScrollReveal key={member.id} direction="up" delay={80 + (idx % 3) * 80}>
                <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col justify-between h-full academic-card group">
                  <div>
                    {/* Top Portrait & Verified Badge */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 mb-5 border border-slate-100 shadow-2xs">
                      <SafeImage
                        src={member.photoPath || `/images/teacher-${idx + 1}.jpg`}
                        fallbackType="faculty"
                        initials={initials}
                        name={member.name}
                        designation={member.designation}
                        alt={`${member.name} portrait photograph`}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />

                      {/* Top Verification Overlay */}
                      <div className="absolute top-2.5 right-2.5 flex flex-col gap-1 items-end">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 backdrop-blur-xs text-emerald-300 text-[10px] font-bold border border-emerald-400/40 shadow-xs">
                          <UserCheck className="w-3 h-3" />
                          <span>Faculty Profile</span>
                        </span>
                        {member.hecApprovedSupervisor && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-950/80 backdrop-blur-xs text-amber-300 text-[9px] font-bold border border-amber-400/40 shadow-xs">
                            <Award className="w-2.5 h-2.5" />
                            <span>HEC PhD Supervisor</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Faculty Title & Designation */}
                    <div className="mb-3.5">
                      <h3 className="font-heading font-extrabold text-lg text-slate-900 group-hover:text-[#0B3D91] transition-colors line-clamp-1">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-[#0B3D91] mt-0.5 line-clamp-1">
                        {member.designation}
                      </p>
                    </div>

                    {/* Qualification */}
                    <div className="text-xs text-slate-600 mb-4 pb-3.5 border-b border-slate-100">
                      <div className="flex items-start gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="font-medium text-slate-700 leading-snug line-clamp-2">
                          {member.qualification}
                        </span>
                      </div>
                    </div>

                    {/* Research Specializations */}
                    <div className="mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Research & Expertise
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.specialization.slice(0, 3).map((spec, i) => (
                          <span
                            key={i}
                            className="text-[11px] px-2.5 py-1 bg-blue-50/70 border border-blue-100 text-[#0B3D91] rounded-md font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                        {member.specialization.length > 3 && (
                          <span className="text-[10px] px-1.5 py-1 text-slate-400 font-medium">
                            +{member.specialization.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Contact Snippet */}
                    <div className="text-xs text-slate-600 space-y-1.5 mb-5 bg-slate-50/80 p-3 rounded-xl border border-slate-100 font-mono">
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:text-[#0B3D91] truncate underline-offset-2 hover:underline text-[11px]"
                        >
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 font-sans">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{member.officeHours}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-2 border-t border-slate-100">
                    <button
                      onClick={() => setActiveModalMember(member)}
                      type="button"
                      className="w-full text-center text-xs font-semibold text-[#0B3D91] hover:text-[#072c6e] py-2 rounded-xl hover:bg-blue-50/80 transition-colors cursor-pointer active:scale-98"
                    >
                      View Academic Profile & Courses →
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Faculty Modal */}
      {activeModalMember && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalMember(null);
          }}
          className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-24 sm:pt-28 md:pt-32 pb-8 bg-slate-950/70 backdrop-blur-xs overflow-y-auto overscroll-contain"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-9 shadow-2xl border border-slate-200 mt-2 mb-4 max-h-[calc(100vh-9rem)] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalMember(null)}
              type="button"
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Close profile"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            <div className="flex items-center gap-4 mb-6 pb-5 border-b border-slate-100">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-900 shrink-0 shadow-md border border-slate-200">
                <SafeImage
                  src={activeModalMember.photoPath || '/images/teacher-1.jpg'}
                  fallbackType="faculty"
                  initials={activeModalMember.name.replace(/^(Dr\.|Mr\.|Ms\.)\s*/, '').slice(0, 2).toUpperCase()}
                  name={activeModalMember.name}
                  designation={activeModalMember.designation}
                  alt={activeModalMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 truncate">
                    {activeModalMember.name}
                  </h3>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    Faculty
                  </span>
                </div>
                <p className="text-sm font-bold text-[#0B3D91] mt-0.5">{activeModalMember.designation}</p>
                <p className="text-xs text-slate-600 font-medium mt-0.5 leading-snug">{activeModalMember.qualification}</p>
              </div>
            </div>

            <div className="space-y-5 mb-6 text-xs sm:text-sm">
              <div>
                <h4 className="font-heading text-sm font-bold tracking-tight text-[#0B3D91] mb-2 flex items-center gap-1.5">
                  <span>Academic Biography</span>
                </h4>
                <p className="text-slate-700 leading-relaxed font-body text-xs sm:text-sm">
                  {activeModalMember.bio}
                </p>
              </div>

              <div>
                <h4 className="font-heading text-sm font-bold tracking-tight text-[#0B3D91] mb-2">
                  Research Specializations
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalMember.specialization.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-blue-50 text-[#0B3D91] rounded-lg font-medium border border-blue-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2">
                  Courses Instructed This Session
                </h4>
                <div className="space-y-1.5">
                  {activeModalMember.taughtCourses.map((c, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60"
                    >
                      <BookOpen className="w-4 h-4 text-[#0B3D91]" />
                      <span className="font-medium">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3.5 border-t border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Office Consulting Hours:</span>
                  <span className="font-bold text-slate-800">{activeModalMember.officeHours}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Official Email:</span>
                  <a
                    href={`mailto:${activeModalMember.email}`}
                    className="font-bold text-[#0B3D91] hover:underline font-mono"
                  >
                    {activeModalMember.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <a
                href={activeModalMember.profileUrl || 'https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/faculty-members/'}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#0B3D91] hover:underline font-semibold inline-flex items-center gap-1.5"
              >
                <span>Faculty Profile Directory Entry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setActiveModalMember(null)}
                type="button"
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer active:scale-95"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
