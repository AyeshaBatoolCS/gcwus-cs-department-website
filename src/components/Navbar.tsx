import React, { useState } from 'react';
import { Search, Menu, X, ArrowRight, Phone, Mail, Award, ShieldCheck } from 'lucide-react';
import { officialContactInfo } from '../data/departmentData';
import { SafeImage } from './SafeImage';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenApply }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Research', href: '#research' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'News', href: '#news' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Academic Ribbon */}
      <div className="bg-[#0B3D91] text-white text-xs py-2 px-4 sm:px-6 border-b border-blue-900/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-blue-100 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Admissions Open Fall 2026</span>
            </span>
            <span className="hidden sm:inline-block text-blue-300/40">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-blue-200">
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{officialContactInfo.phonePrimary}</span>
            </span>
            <span className="hidden md:inline-block text-blue-300/40">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-blue-200">
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              <span>{officialContactInfo.email}</span>
            </span>
          </div>

          <div className="flex items-center gap-3.5 text-[11px] sm:text-xs text-blue-100">
            <span className="hidden lg:flex items-center gap-1.5 text-blue-200">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>HEC & NCEAC Aligned</span>
            </span>
            <span className="text-amber-300 font-semibold tracking-wide flex items-center gap-1">
              <span>Imam Bibi Campus, Amanabad Road</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Navigation (Strict Top Bar Contract: 3 zones separated by gap-8) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Zone with real logo support and fallback */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B3D91] rounded-xl p-1 shrink-0"
            aria-label="Government College Women University Sialkot Computer Science Department Home"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-xs group-hover:shadow-md transition-shadow">
              <SafeImage
                src="/images/university-logo.png"
                fallbackType="logo"
                alt="Government College Women University Sialkot Official Logo"
                className="w-12 h-12 rounded-xl object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-[#0B3D91] tracking-tight leading-none">
                  GCWUS
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200/60">
                  EST. 1951
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase mt-1 whitespace-nowrap">
                Department of Computer Science
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap hover:text-[#0B3D91] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0B3D91] hover:after:w-full after:transition-all tracking-normal font-sans"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Live Search */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#0B3D91] bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200 rounded-xl transition-all cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B3D91]"
              title="Search website (Ctrl+K)"
              aria-label="Search department website"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>Search</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-white rounded border border-slate-200 shadow-2xs">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onOpenSearch}
              type="button"
              className="sm:hidden p-2 text-slate-600 hover:text-[#0B3D91] hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenApply}
              type="button"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0B3D91] hover:bg-[#082e70] active:scale-98 rounded-xl shadow-sm hover:shadow-md transition-all whitespace-nowrap cursor-pointer border border-[#0B3D91] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B3D91]"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-slate-700 hover:text-[#0B3D91] hover:bg-slate-100 rounded-xl focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-4 pb-7 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-[#0B3D91] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <Search className="w-4 h-4 text-slate-500" />
                <span>Search Department Portal</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B3D91] text-white text-sm font-semibold shadow-sm"
              >
                <span>Apply for Admissions Fall 2026</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
