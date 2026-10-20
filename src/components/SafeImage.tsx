import React, { useState, useEffect } from 'react';
import { GraduationCap, Building, Terminal, UserCheck } from 'lucide-react';

interface SafeImageProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  fallbackType?: 'logo' | 'campus' | 'lab' | 'faculty' | 'generic';
  initials?: string;
  name?: string;
  designation?: string;
  objectFit?: 'cover' | 'contain';
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  fallbackType = 'generic',
  initials = 'CS',
  name,
  designation,
  objectFit = 'cover',
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    if (fallbackType === 'logo') {
      return (
        <div
          className={`flex items-center justify-center bg-gradient-to-br from-[#0B3D91] via-[#093278] to-[#051c44] text-white rounded-xl shadow-md border border-amber-400/40 select-none ${className}`}
          role="img"
          aria-label={alt}
        >
          <div className="flex flex-col items-center justify-center p-1.5 text-center">
            <div className="relative">
              <GraduationCap className="w-6 h-6 text-amber-300 drop-shadow-sm" />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 text-[#0B3D91] text-[8px] font-black flex items-center justify-center">
                W
              </span>
            </div>
            <span className="font-heading font-black text-[10px] tracking-tight text-white mt-0.5">
              GCWUS
            </span>
          </div>
        </div>
      );
    }

    if (fallbackType === 'faculty') {
      return (
        <div
          className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0B3D91] via-[#0D47A1] to-[#1565C0] text-white p-6 relative overflow-hidden select-none ${className}`}
          role="img"
          aria-label={alt}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg mb-3">
            <span className="font-heading font-extrabold text-2xl text-amber-300 tracking-wider">
              {initials}
            </span>
          </div>
          <div className="relative z-10 text-center px-2">
            <div className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-emerald-300 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-400/30 mb-1">
              <UserCheck className="w-3 h-3" />
              <span>Faculty Scholar</span>
            </div>
            {name && <p className="text-xs font-bold text-white line-clamp-1">{name}</p>}
            {designation && <p className="text-[11px] text-blue-200 line-clamp-1">{designation}</p>}
          </div>
        </div>
      );
    }

    if (fallbackType === 'campus') {
      return (
        <div
          className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-[#0B3D91] to-slate-900 text-white p-6 relative select-none ${className}`}
          role="img"
          aria-label={alt}
        >
          <Building className="w-12 h-12 text-amber-300/80 mb-2" />
          <p className="text-sm font-bold text-white text-center">GCWUS Campus</p>
          <p className="text-xs text-blue-200 text-center mt-1">Imam Bibi Campus, Sialkot</p>
        </div>
      );
    }

    if (fallbackType === 'lab') {
      return (
        <div
          className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#071F4A] via-[#0A2E6E] to-[#051C44] text-white p-6 relative select-none ${className}`}
          role="img"
          aria-label={alt}
        >
          <Terminal className="w-12 h-12 text-[#3B82F6] mb-2" />
          <p className="text-sm font-bold text-white text-center">CS Computing Laboratory</p>
          <p className="text-xs text-blue-200 text-center mt-1">Dual-Screen Workstations & GPU Nodes</p>
        </div>
      );
    }

    return (
      <div
        className={`w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-xs p-4 text-center select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <span>Image Unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      className={`transition-opacity duration-300 ${
        objectFit === 'contain' ? 'object-contain' : 'object-cover'
      } ${className}`}
      loading="lazy"
    />
  );
};
