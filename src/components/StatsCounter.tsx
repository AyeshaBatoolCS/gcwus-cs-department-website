import React, { useEffect, useState, useRef } from 'react';
import { departmentStats } from '../data/departmentData';
import { Users, GraduationCap, Award, BookCheck, Edit3, CheckCircle } from 'lucide-react';
import { StatItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const StatsCounter: React.FC = () => {
  const [stats, setStats] = useState<StatItem[]>(departmentStats);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    students: 0,
    faculty: 0,
    programs: 0,
    placement: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentElem = containerRef.current;
    if (currentElem) observer.observe(currentElem);

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1600; // ms
    const steps = 36;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = Math.min(stepCount / steps, 1);
      // Ease out cubic: 1 - (1 - t)^3
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts({
        students: Math.round(stats[0].targetNumber * eased),
        faculty: Math.round(stats[1].targetNumber * eased),
        programs: Math.round(stats[2].targetNumber * eased),
        placement: Math.round(stats[3].targetNumber * eased),
      });

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [stats, hasAnimated]);

  const handleUpdateStat = (id: string, newTarget: number) => {
    setStats((prev) =>
      prev.map((item) => (item.id === id ? { ...item, targetNumber: newTarget } : item))
    );
  };

  const getStatIcon = (id: string) => {
    switch (id) {
      case 'students':
        return <Users className="w-5 h-5 text-[#3B82F6]" />;
      case 'faculty':
        return <Award className="w-5 h-5 text-[#0B3D91]" />;
      case 'programs':
        return <GraduationCap className="w-5 h-5 text-emerald-600" />;
      case 'placement':
        return <BookCheck className="w-5 h-5 text-amber-500" />;
      default:
        return <Award className="w-5 h-5 text-[#0B3D91]" />;
    }
  };

  return (
    <section ref={containerRef} className="relative z-10 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal direction="up" delay={100}>
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-8">
          {/* Subtle Institutional Bar */}
          <div className="flex flex-wrap items-center justify-between pb-5 border-b border-slate-100 mb-6 gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B3D91]"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Department At A Glance · Official GCWUS Academic Benchmarks
              </span>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-[#0B3D91] transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-100 cursor-pointer"
              title="Toggle data editor for institutional statistics"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Save Benchmarks' : 'Customize Metrics'}</span>
            </button>
          </div>

          {/* 4 KPIs with refined card hover physics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={stat.id}
                className="flex flex-col p-5 rounded-xl bg-[#F8FAFF] hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 border border-slate-100 academic-card group"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div className="flex items-center justify-between mb-3.5">
                  <div className="p-2.5 rounded-xl bg-white shadow-2xs border border-slate-200/60 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                    {getStatIcon(stat.id)}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>

                {isEditing ? (
                  <div className="mb-3">
                    <label className="text-xs text-slate-500 block mb-1">Target Value</label>
                    <input
                      type="number"
                      value={stat.targetNumber}
                      onChange={(e) => handleUpdateStat(stat.id, Number(e.target.value))}
                      className="w-full text-base font-bold p-1.5 bg-white border border-blue-400 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                ) : (
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B3D91] tabular-nums tracking-tight mb-1.5 group-hover:text-[#3B82F6] transition-colors">
                    {counts[stat.id] || 0}
                    <span className="text-[#3B82F6] ml-0.5 group-hover:text-amber-500 transition-colors">{stat.suffix}</span>
                  </div>
                )}

                <div className="font-heading font-semibold text-sm sm:text-base text-slate-900 mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 font-body leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
