import React, { useState } from 'react';
import { researchAreas, departmentImages } from '../data/departmentData';
import { Cpu, ShieldAlert, Globe2, BarChart3, Binary, CheckCircle2, FlaskConical, Users, Award, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(researchAreas[0].id);

  const currentArea = researchAreas.find((r) => r.id === activeTab) || researchAreas[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Artificial Intelligence':
        return <Cpu className="w-5 h-5 text-[#3B82F6]" />;
      case 'Machine Learning':
        return <Binary className="w-5 h-5 text-[#0B3D91]" />;
      case 'Web Development':
        return <Globe2 className="w-5 h-5 text-emerald-600" />;
      case 'Data Science':
        return <BarChart3 className="w-5 h-5 text-amber-500" />;
      case 'Cybersecurity':
        return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      default:
        return <Cpu className="w-5 h-5 text-[#0B3D91]" />;
    }
  };

  return (
    <section id="research" className="py-24 lg:py-32 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3D91] bg-blue-50 border border-blue-200/90 rounded-full px-4 py-1.5 shadow-2xs mb-3.5">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Research & Innovation Clusters</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-4.5xl text-[#0B3D91] tracking-tight mb-4">
              Advancing Breakthroughs in Computing
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
              Our specialized research laboratories tackle pressing challenges in deep neural models, industrial automation for Sialkot’s export manufacturing, and cyber-defense systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Lab Showcase Hero Card with Research Lab Image */}
        <ScrollReveal direction="up" delay={120}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-[#F8FAFF] rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-sm mb-14 hover:shadow-md transition-shadow">
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden shadow-md aspect-[16/10] bg-slate-900 group">
              <img
                src={departmentImages.researchAi}
                alt="Computer science research laboratory image placeholder"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-heading font-bold text-base text-amber-300 block mb-0.5">
                  Research & Innovation
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="inline-block text-xs font-bold text-[#0B3D91] uppercase tracking-wider">
                Research Infrastructure
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#0B3D91] leading-snug">
                High-Performance Computational Research
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-body">
                Equipped with GPU computing nodes, dedicated fiber backbones, and mathematical modeling toolchains. Faculty and postgraduate scholars collaborate with national funding bodies including HEC, IGNITE, and Sialkot Chamber of Commerce & Industry (SCCI).
              </p>
              <div className="grid grid-cols-2 gap-3.5 pt-2 text-xs text-slate-700">
                <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-colors">
                  <span className="text-xl font-extrabold text-[#0B3D91] block tabular-nums">120+</span>
                  <span className="text-slate-500 font-medium">Peer-Reviewed Journal & Conference Papers</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition-colors">
                  <span className="text-xl font-extrabold text-emerald-600 block tabular-nums">15+</span>
                  <span className="text-slate-500 font-medium">Funded Research Grants & Capstones</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Research Area Navigation Tabs */}
        <ScrollReveal direction="up" delay={180}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
            {researchAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setActiveTab(area.id)}
                type="button"
                className={`flex items-center gap-2.5 px-4.5 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                  activeTab === area.id
                    ? 'bg-[#0B3D91] text-white border-[#0B3D91] shadow-md scale-102'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                {getCategoryIcon(area.category)}
                <span>{area.category}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Selected Cluster Details Card */}
        <ScrollReveal direction="up" delay={240}>
          <div className="bg-[#F8FAFF] rounded-2xl border border-slate-200/90 p-7 sm:p-9 shadow-xs hover:border-blue-300 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2">
                  <span>{currentArea.category} Cluster</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#0B3D91] mb-3.5">
                  {currentArea.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body mb-7">
                  {currentArea.description}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-3.5">
                  Active Research Investigations & Projects
                </h4>
                <div className="space-y-3">
                  {currentArea.activeProjects.map((project, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-800 shadow-2xs hover:border-blue-300 hover:shadow-xs transition-all duration-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{project}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-7 rounded-xl border border-slate-200/90 shadow-2xs">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2.5">
                    Cluster Lead Investigator
                  </h4>
                  <div className="flex items-center gap-3.5 p-3.5 bg-blue-50/70 rounded-xl border border-blue-100">
                    <div className="p-2.5 bg-white rounded-lg text-[#0B3D91] shadow-2xs">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{currentArea.leadFaculty}</div>
                      <div className="text-xs text-slate-500">Principal Academic Advisor</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] mb-2.5">
                    Key Technologies & Toolchains
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentArea.toolsUsed.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 bg-slate-100 text-slate-800 font-mono rounded-lg border border-slate-200/70 hover:bg-blue-50 hover:text-[#0B3D91] transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed shadow-2xs">
                  <span className="font-bold block mb-1">Scholarship & Research Assistantships</span>
                  Undergraduate & Graduate scholars can apply for funded lab research assistantships under this cluster during their thesis semesters.
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
