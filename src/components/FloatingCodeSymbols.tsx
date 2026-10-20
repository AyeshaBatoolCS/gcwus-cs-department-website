import React from 'react';

interface FloatingCodeSymbolsProps {
  variant?: 'hero' | 'research' | 'subtle';
}

export const FloatingCodeSymbols: React.FC<FloatingCodeSymbolsProps> = ({ variant = 'hero' }) => {
  const isHero = variant === 'hero';

  const symbols = [
    { text: '{ }', top: '14%', left: '5%', delay: '0s', size: 'text-sm font-mono', rotate: '-6deg', color: isHero ? 'text-amber-300/80 border-amber-400/20 bg-blue-950/40' : 'text-blue-500/35 border-blue-500/10 bg-white/30' },
    { text: '</>', top: '32%', right: '4%', delay: '1.8s', size: 'text-base font-mono font-bold', rotate: '8deg', color: isHero ? 'text-blue-300/80 border-blue-400/20 bg-blue-950/40' : 'text-indigo-500/30 border-blue-500/10 bg-white/30' },
    { text: '0101', top: '68%', left: '4%', delay: '3.2s', size: 'text-xs font-mono', rotate: '4deg', color: isHero ? 'text-emerald-300/75 border-emerald-400/20 bg-blue-950/40' : 'text-blue-400/30 border-blue-500/10 bg-white/30' },
    { text: 'λ', top: '78%', right: '7%', delay: '2.4s', size: 'text-lg font-serif font-bold', rotate: '-12deg', color: isHero ? 'text-amber-300/80 border-amber-400/20 bg-blue-950/40' : 'text-amber-500/35 border-blue-500/10 bg-white/30' },
    { text: 'import { AI }', top: '20%', left: '18%', delay: '4s', size: 'text-[11px] font-mono', rotate: '-2deg', color: isHero ? 'text-sky-300/75 border-sky-400/20 bg-blue-950/40' : 'text-blue-600/25 border-blue-500/10 bg-white/30' },
    { text: '#include <gcwus>', top: '86%', left: '22%', delay: '1.2s', size: 'text-[11px] font-mono', rotate: '3deg', color: isHero ? 'text-blue-200/70 border-blue-400/20 bg-blue-950/40' : 'text-slate-500/25 border-blue-500/10 bg-white/30' },
    { text: 'async def solve()', top: '18%', right: '16%', delay: '2.8s', size: 'text-[11px] font-mono', rotate: '-4deg', color: isHero ? 'text-indigo-200/75 border-indigo-400/20 bg-blue-950/40' : 'text-indigo-600/25 border-blue-500/10 bg-white/30' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-10" aria-hidden="true">
      {symbols.map((item, idx) => (
        <div
          key={idx}
          className={`absolute ${item.size} ${item.color} font-medium animate-float-slow hidden md:block backdrop-blur-md px-2.5 py-1 rounded-lg border shadow-lg`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
            transform: `rotate(${item.rotate})`,
          }}
        >
          <code>{item.text}</code>
        </div>
      ))}
    </div>
  );
};
