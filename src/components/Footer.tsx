import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, ShieldCheck } from 'lucide-react';
import { officialContactInfo } from '../data/departmentData';
import { SafeImage } from './SafeImage';

interface FooterProps {
  onOpenApply?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApply }) => {
  return (
    <footer className="bg-[#071F4A] text-slate-300 text-xs sm:text-sm font-body border-t border-blue-900/50">
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          
          {/* Col 1 & 2: Department Identity */}
          <div className="lg:col-span-2 space-y-4.5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-md">
                <SafeImage
                  src="/images/university-logo.png"
                  fallbackType="logo"
                  alt="Government College Women University Sialkot"
                  className="w-12 h-12 rounded-xl object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg sm:text-xl text-white block leading-tight">
                  GCWUS Sialkot
                </span>
                <span className="text-xs text-blue-200 tracking-wide uppercase font-semibold">
                  Department of Computer Science
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-light">
              Established in 2013 under the Faculty of Natural Sciences. Empowering female scholars with world-class computing curricula, high-performance computing research, and leadership in technology. Motto: <em>"Service, Knowledge, Discipline"</em>.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2 font-medium">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{officialContactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{officialContactInfo.phonePrimary} (Admissions: {officialContactInfo.phoneAdmissions})</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${officialContactInfo.email}`} className="hover:text-white transition-colors underline-offset-2 hover:underline">
                  {officialContactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Academic Programs */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-blue-900/70 pb-2.5">
              Degree Programs
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#programs" className="hover:text-white hover:underline transition-colors block text-slate-300">
                  BS Computer Science (140 Cr. Hrs)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white hover:underline transition-colors block text-slate-300">
                  BS Information Technology (138 Cr. Hrs)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white hover:underline transition-colors block text-slate-300">
                  BS Software Engineering (136 Cr. Hrs)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white hover:underline transition-colors block text-slate-300">
                  MS Computer Science (30 Cr. Hrs)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white hover:underline transition-colors block text-slate-300">
                  PhD Computer Science (48 Cr. Hrs)
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenApply}
                  className="text-amber-300 hover:text-amber-200 transition-colors block pt-1 font-semibold cursor-pointer text-left"
                >
                  → Pre-Med Eligibility & Apply Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-blue-900/70 pb-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors block text-slate-300">About Department</a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-white transition-colors block text-slate-300">Faculty Directory</a>
              </li>
              <li>
                <a href="#research" className="hover:text-white transition-colors block text-slate-300">Research & AI Labs</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors block text-slate-300">Campus Photo Gallery</a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition-colors block text-slate-300">News & Tech Events</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors block text-slate-300">Contact & Map</a>
              </li>
            </ul>
          </div>

          {/* Col 5: Institutional Resources */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-b border-blue-900/70 pb-2.5">
              Official Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/faculty-members/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-white transition-colors text-slate-300"
                >
                  <span>Official Faculty Page</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://gcwus.edu.pk/faculties/faculty-of-natural-science/computer-science/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-white transition-colors text-slate-300"
                >
                  <span>Official CS Department Page</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.hec.gov.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-white transition-colors text-slate-300"
                >
                  <span>HEC Pakistan</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://nceac.org.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-white transition-colors text-slate-300"
                >
                  <span>NCEAC Accreditation</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://gcwus.edu.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-white transition-colors text-slate-300"
                >
                  <span>GCWUS Main Website</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Chartered by Government of the Punjab · Recognized by HEC & Accredited by NCEAC</span>
          </div>
          <div>
            &copy; 2026 Department of Computer Science, GCWUS. All official rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};