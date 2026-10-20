import React, { useState } from 'react';
import { newsAndEvents } from '../data/departmentData';
import { NewsEvent } from '../types';
import { Calendar, MapPin, ArrowRight, X, Bell, CheckCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const NewsEventsSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<NewsEvent | null>(null);
  const [registeredItem, setRegisteredItem] = useState<string | null>(null);
  const [studentRegName, setStudentRegName] = useState('');
  const [studentRegEmail, setStudentRegEmail] = useState('');
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentRegName || !studentRegEmail) return;
    setIsSuccessModal(true);
    setRegisteredItem(activeItem?.title || null);
    setStudentRegName('');
    setStudentRegEmail('');
  };

  return (
    <section id="news" className="py-24 lg:py-32 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3D91] bg-white border border-blue-200/90 rounded-full px-4 py-1.5 shadow-2xs mb-3.5">
                <Bell className="w-3.5 h-3.5" />
                <span>Campus Notices & Events</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B3D91] tracking-tight">
                Latest News & Department Events
              </h2>
              <p className="text-base text-slate-600 font-body max-w-2xl mt-2 leading-relaxed">
                Stay updated with academic admission schedules, national tech symposiums, hackathons, and departmental announcements at GCWUS.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {newsAndEvents.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={80 + idx * 70}>
              <div
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between h-full academic-card group"
              >
                <div>
                  {/* Clean Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3.5">
                    <span className="text-[#0B3D91] font-bold">{item.category}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-[#0B3D91] transition-colors mb-3 line-clamp-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed mb-4 line-clamp-3">
                    {item.summary}
                  </p>

                  {item.location && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveItem(item)}
                    type="button"
                    className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B3D91] hover:text-[#072c6e] cursor-pointer"
                  >
                    <span>{item.registrationOpen ? 'Register / View' : 'Read Notice'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6] group-hover/link:translate-x-1 transition-transform" />
                  </button>
                  {item.registrationOpen && (
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60 animate-pulse">
                      Open
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* News Details & Registration Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setActiveItem(null);
                setIsSuccessModal(false);
              }}
              type="button"
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccessModal ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">Registration Recorded</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Your RSVP for <strong>{registeredItem}</strong> has been logged for this session (Preview Mode). For official badge issuance and physical hall entry, visit the Department Coordinator Office on Katchehry Road, Sialkot.
                </p>
                <button
                  onClick={() => {
                    setIsSuccessModal(false);
                    setActiveItem(null);
                  }}
                  type="button"
                  className="px-6 py-2.5 rounded-xl bg-[#0B3D91] text-white text-sm font-semibold hover:bg-[#072c6e] cursor-pointer active:scale-95 transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0B3D91] uppercase tracking-wider mb-2">
                  <span>{activeItem.category}</span>
                  <span>·</span>
                  <span>{activeItem.date}</span>
                </div>

                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 mb-3.5 leading-snug">
                  {activeItem.title}
                </h3>

                {activeItem.location && (
                  <div className="flex items-center gap-2 text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <MapPin className="w-4 h-4 text-[#0B3D91] shrink-0" />
                    <span>Venue: {activeItem.location}</span>
                  </div>
                )}

                <div className="text-sm text-slate-600 leading-relaxed font-body mb-6">
                  {activeItem.content}
                </div>

                {activeItem.registrationOpen ? (
                  <form onSubmit={handleRegister} className="border-t border-slate-100 pt-5 space-y-3.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Reserve Seat / RSVP (Free for GCWUS Scholars)
                    </h4>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={studentRegName}
                        onChange={(e) => setStudentRegName(e.target.value)}
                        className="w-full text-xs sm:text-sm p-3 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Student / Institutional Email"
                        value={studentRegEmail}
                        onChange={(e) => setStudentRegEmail(e.target.value)}
                        className="w-full text-xs sm:text-sm p-3 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div className="flex items-center justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setActiveItem(null)}
                        className="px-4 py-2 text-xs sm:text-sm text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-[#0B3D91] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#072c6e] cursor-pointer active:scale-95 transition-all"
                      >
                        Confirm Attendance
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="border-t border-slate-100 pt-4 text-right">
                    <button
                      type="button"
                      onClick={() => setActiveItem(null)}
                      className="px-5 py-2.5 bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl hover:bg-slate-200 cursor-pointer"
                    >
                      Close Notice
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
