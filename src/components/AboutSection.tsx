import React from 'react';
import { departmentImages } from '../data/departmentData';
import { officialDepartmentInfo } from '../data/departmentInfo';
import { Target, Compass, Award, CheckCircle2, Building, ShieldCheck, Quote, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SafeImage } from './SafeImage';

export const AboutSection: React.FC = () => {
  const { chairperson } = officialDepartmentInfo;

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3D91] bg-white border border-blue-200/90 rounded-full px-4 py-1.5 shadow-2xs mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>About the Department</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-4.5xl text-[#0B3D91] tracking-tight mb-4">
              Academic Heritage & Innovation
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
              Established in 2013 under the Faculty of Natural Sciences, the Department of Computer Science at Government College Women University Sialkot empowers female scholars with world-class computational education and scientific research.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-Column Layout: Campus Architecture + Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Left Column: Campus Building Image Asset & Accreditation Card */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" delay={150}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/10] bg-slate-900 group">
                <SafeImage
                  src="/images/campus.jpg"
                  fallbackSrc={departmentImages.campusBuilding}
                  fallbackType="campus"
                  alt="Campus building image placeholder; replace with an authentic GCWUS photograph"
                  className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading font-bold text-base text-amber-300">
                      Campus Building
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Accreditation Ribbon */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between gap-4 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Chartered & Accredited</h4>
                    <p className="text-xs text-slate-500">HEC Recognized · NCEAC Aligned Curriculum</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#0B3D91] uppercase tracking-wide px-3 py-1 bg-blue-50 rounded-lg border border-blue-100">
                    Motto: Service, Knowledge, Discipline
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Verified Mission, Vision, and Objectives */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" delay={200}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all academic-card">
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-[#0B3D91]">
                      <Target className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-slate-900">Departmental Mission</h3>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Department Mission
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                  {officialDepartmentInfo.mission}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={280}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all academic-card">
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-[#0B3D91]">
                      <Compass className="w-5 h-5 text-[#0B3D91]" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-slate-900">Our Vision</h3>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Department Mission
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                  {officialDepartmentInfo.vision}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={360}>
              <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all academic-card">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#0B3D91]">
                    <Award className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">Key Academic Pillars</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Established 2013 in Natural Sciences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>140 Cr. Hrs BS-CS & 138 Cr. Hrs BS-IT</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>High-Performance Computing Focus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Industrial Linkage with SCCI</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Chairperson / Head of Department's Welcome Message */}
        <ScrollReveal direction="up" delay={200}>
          <div className="bg-gradient-to-br from-[#0B3D91] via-[#082e70] to-[#051c44] rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden group">
            {/* Subtle Background Watermark Quote */}
            <Quote className="absolute -bottom-8 -right-8 w-60 h-60 text-white/5 pointer-events-none group-hover:scale-105 transition-transform duration-700" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-amber-300 font-semibold mb-3">
                  <Quote className="w-4 h-4" />
                  <span>Chairperson's Welcome Address</span>
                  <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-mono">
                    Verified Source
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-5 leading-snug">
                  "Producing Highly Skilled Women Innovators in Computing & IT"
                </h3>
                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-body mb-8">
                  "{chairperson.welcomeMessage}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10 border-2 border-amber-300 shadow-md shrink-0">
                    <SafeImage
                      src="/images/teacher-1.jpg"
                      fallbackType="faculty"
                      initials="UA"
                      name={chairperson.name}
                      designation={chairperson.designation}
                      alt={`${chairperson.name}, Chairperson`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-bold text-lg text-white">{chairperson.name}</span>
                      <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-400/40">
                        HEC Approved PhD Supervisor
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-blue-200">
                      {chairperson.designation}, Department of Computer Science
                    </div>
                    <div className="text-xs text-amber-300 font-medium mt-0.5">
                      {chairperson.qualification}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/20 text-blue-100 text-xs sm:text-sm space-y-3.5 hover:bg-white/15 transition-colors">
                <div className="flex items-center justify-between text-white font-semibold pb-2 border-b border-white/20">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-amber-300" />
                    <span>Official Profile Highlights</span>
                  </div>
                  <a
                    href="https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-amber-300 hover:underline inline-flex items-center gap-1"
                  >
                    Official Portal <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="leading-relaxed">• {chairperson.formerAffiliation}</p>
                <p className="leading-relaxed">• Research in Exascale Computing, Parallel Systems, and HPC for Deep Learning</p>
                <p className="leading-relaxed">• Official Email: <a href={`mailto:${chairperson.email}`} className="text-amber-300 underline font-mono">{chairperson.email}</a></p>
                <p className="leading-relaxed">• Leading curriculum modernization aligned with HEC and NCEAC standards</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
