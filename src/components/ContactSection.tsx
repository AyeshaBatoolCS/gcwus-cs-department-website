import React, { useState } from 'react';
import { officialContactInfo } from '../data/departmentData';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, ExternalLink, Copy, Check, Info } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'BS Computer Science',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      errs.name = 'Please provide a valid full name (at least 3 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errs.phone = 'Please provide a valid contact phone number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide an inquiry message of at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        const generatedTicket = `GCWUS-CS-${Math.floor(100000 + Math.random() * 900000)}`;
        setTicketId(generatedTicket);
        setSubmittedData({ ...formData });
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: 'BS Computer Science',
          message: '',
        });
      }, 500);
    }
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const text = `Inquiry Reference: ${ticketId}\nName: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nProgram: ${submittedData.program}\nMessage: ${submittedData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getMailtoLink = () => {
    if (!submittedData) return `mailto:${officialContactInfo.email}`;
    const subject = encodeURIComponent(`[Inquiry ${ticketId}] ${submittedData.program} - ${submittedData.name}`);
    const body = encodeURIComponent(
      `Dear GCWUS Computer Science Department,\n\nI am submitting an academic inquiry.\n\nReference ID: ${ticketId}\nApplicant Name: ${submittedData.name}\nPhone: ${submittedData.phone}\nEmail: ${submittedData.email}\nProgram: ${submittedData.program}\n\nMessage:\n${submittedData.message}\n\nThank you,\n${submittedData.name}`
    );
    return `mailto:${officialContactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0B3D91] bg-blue-50 border border-blue-200/90 rounded-full px-4 py-1.5 shadow-2xs mb-3.5">
              <span>Official Communications</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B3D91] tracking-tight mb-4">
              Connect with the CS Department
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
              Have questions regarding degree admissions, transfer credits, research partnerships, or faculty consultations? Submit your inquiry or reach our department office.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Official Contact Directory & Campus Location */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right" delay={120}>
              <div className="bg-[#F8FAFF] rounded-2xl p-7 sm:p-9 border border-slate-200/90 shadow-xs space-y-6 hover:shadow-md hover:border-blue-300 transition-all duration-300">
                <h3 className="font-heading font-bold text-xl text-slate-900 border-b border-slate-200/80 pb-4">
                  Department Office & Helplines
                </h3>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 text-[#0B3D91] shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Campus Location</h4>
                    <p className="text-sm font-bold text-slate-800 mt-1">{officialContactInfo.department}</p>
                    <p className="text-xs text-slate-600 mt-0.5">{officialContactInfo.university}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{officialContactInfo.address}</p>
                  </div>
                </div>

                {/* Phone Lines */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 text-[#0B3D91] shrink-0 mt-0.5 shadow-2xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Helplines</h4>
                    <p className="text-xs sm:text-sm text-slate-800 font-bold mt-1">
                      General: <a href={`tel:${officialContactInfo.phonePrimary}`} className="hover:text-[#0B3D91] transition-colors">{officialContactInfo.phonePrimary}</a>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                      Admissions Desk: <a href={`tel:${officialContactInfo.phoneAdmissions}`} className="hover:text-[#0B3D91] transition-colors">{officialContactInfo.phoneAdmissions}</a>
                    </p>
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 text-[#0B3D91] shrink-0 mt-0.5 shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Inquiries</h4>
                    <p className="text-xs sm:text-sm text-slate-800 mt-1">
                      Academic Inquiries:{' '}
                      <a href={`mailto:${officialContactInfo.email}`} className="font-bold text-[#0B3D91] hover:underline">
                        {officialContactInfo.email}
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Admissions Desk:{' '}
                      <a href={`mailto:${officialContactInfo.admissionsEmail}`} className="font-bold text-[#0B3D91] hover:underline">
                        {officialContactInfo.admissionsEmail}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 text-[#0B3D91] shrink-0 mt-0.5 shadow-2xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Visiting Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-800 mt-1 font-semibold">
                      {officialContactInfo.officeHours}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Closed on Saturdays, Sundays, and public holidays</p>
                  </div>
                </div>
              </div>

              {/* Map Preview Card */}
              <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-slate-200/90 shadow-2xs flex items-center justify-between mt-6 hover:shadow-xs hover:border-blue-200 transition-all">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Campus Location</h4>
                  <p className="text-xs text-slate-700 mt-1 font-medium">Imam Bibi Campus, Amanabad Road, Sialkot</p>
                </div>
                <a
                  href="https://maps.google.com/?q=GCWUS+Imam+Bibi+Campus+Amanabad+Road+Sialkot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-[#0B3D91] hover:bg-slate-50 shadow-2xs transition-colors cursor-pointer active:scale-95"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={180}>
              <div className="bg-white rounded-2xl p-7 sm:p-10 border border-slate-200/90 shadow-md hover:shadow-lg transition-shadow">
                {isSubmitted && submittedData ? (
                  <div className="py-4">
                    <div className="flex items-center gap-3.5 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 mb-6">
                      <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                      <div>
                        <h4 className="font-heading font-bold text-base">Inquiry Validated & Logged (Preview Mode)</h4>
                        <p className="text-xs text-emerald-800">
                          Your inquiry form inputs have been verified and recorded locally under Ticket ID: <strong>{ticketId}</strong>.
                        </p>
                      </div>
                    </div>

                    {/* Notice about backend connection */}
                    <div className="flex items-start gap-2.5 p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900 mb-6">
                      <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div className="leading-relaxed">
                        <strong>Notice:</strong> This is a static frontend deployment without an active SMTP server. To ensure the department receives your message immediately, use the pre-filled direct email button below or email <strong>cs@gcwus.edu.pk</strong>.
                      </div>
                    </div>

                    {/* Submitted Summary */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 mb-6 space-y-2 text-xs text-slate-700">
                      <div><strong>Full Name:</strong> {submittedData.name}</div>
                      <div><strong>Email:</strong> {submittedData.email}</div>
                      <div><strong>Phone:</strong> {submittedData.phone}</div>
                      <div><strong>Program:</strong> {submittedData.program}</div>
                      <div><strong>Message:</strong> <span className="italic">{submittedData.message}</span></div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={getMailtoLink()}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B3D91] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#072c6e] shadow-xs active:scale-95 transition-all cursor-pointer"
                      >
                        <Mail className="w-4 h-4 text-amber-300" />
                        <span>Open in Email App</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl hover:bg-slate-50 shadow-2xs active:scale-95 transition-all cursor-pointer"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                        <span>{copied ? 'Copied to Clipboard' : 'Copy Details'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setSubmittedData(null);
                        }}
                        className="px-4 py-2.5 text-xs sm:text-sm text-slate-500 hover:text-slate-800 font-medium"
                      >
                        Submit Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                        Send Departmental Inquiry
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 font-body">
                        Fill out the form below. Real-time validated submission with direct email dispatch options.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="contact-name">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          placeholder="e.g. Ayesha Batool"
                          className={`w-full text-xs sm:text-sm px-4 py-3 rounded-xl border ${
                            errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                          } focus:outline-hidden focus:border-[#0B3D91] focus:bg-white transition-colors`}
                        />
                        {errors.name && (
                          <p className="flex items-center gap-1 text-[11px] text-rose-600 mt-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="contact-email">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="student@example.com"
                          className={`w-full text-xs sm:text-sm px-4 py-3 rounded-xl border ${
                            errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                          } focus:outline-hidden focus:border-[#0B3D91] focus:bg-white transition-colors`}
                        />
                        {errors.email && (
                          <p className="flex items-center gap-1 text-[11px] text-rose-600 mt-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="contact-phone">
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: '' });
                          }}
                          placeholder="+92 300 1234567"
                          className={`w-full text-xs sm:text-sm px-4 py-3 rounded-xl border ${
                            errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                          } focus:outline-hidden focus:border-[#0B3D91] focus:bg-white transition-colors`}
                        />
                        {errors.phone && (
                          <p className="flex items-center gap-1 text-[11px] text-rose-600 mt-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Program Interest */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="contact-program">
                          Program of Interest
                        </label>
                        <select
                          id="contact-program"
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:outline-hidden focus:border-[#0B3D91] focus:bg-white cursor-pointer"
                        >
                          <option value="BS Computer Science">BS Computer Science (140 Cr. Hrs)</option>
                          <option value="BS Information Technology">BS Information Technology (138 Cr. Hrs)</option>
                          <option value="BS Software Engineering">BS Software Engineering (136 Cr. Hrs)</option>
                          <option value="MS Computer Science">MS Computer Science (30 Cr. Hrs)</option>
                          <option value="PhD Computer Science">PhD Computer Science (48 Cr. Hrs)</option>
                          <option value="General Department Inquiry">General Department Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5" htmlFor="contact-message">
                        Your Inquiry / Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder="Please describe your question regarding admission, eligibility, documents, or faculty research..."
                        className={`w-full text-xs sm:text-sm px-4 py-3 rounded-xl border ${
                          errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 bg-slate-50/50'
                        } focus:outline-hidden focus:border-[#0B3D91] focus:bg-white transition-colors`}
                      />
                      {errors.message && (
                        <p className="flex items-center gap-1 text-[11px] text-rose-600 mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#0B3D91] hover:bg-[#072c6e] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer disabled:opacity-60 active:scale-95"
                      >
                        {isSubmitting ? (
                          <span>Validating Form...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                            <span>Submit Official Inquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
