import React from 'react';

export const Tech3DGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}>
      {/* 3D Isometric Technological Unit rendered via SVG for zero performance overhead */}
      <svg
        viewBox="0 0 400 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[380px] drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="planeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B3D91" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#071F4A" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="planeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <linearGradient id="glowGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>

          <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0B3D91" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Ambient Ground Grid Shadow in Isometric Projection */}
        <ellipse cx="200" cy="300" rx="140" ry="40" fill="#0B3D91" fillOpacity="0.08" filter="blur(16px)" />

        {/* Layer 1: Base Computing Motherboard / Chassis */}
        <g transform="translate(0, 40)">
          {/* Base bottom slab */}
          <polygon points="200,160 330,225 200,290 70,225" fill="#0A2559" stroke="#1E40AF" strokeWidth="1.5" />
          <polygon points="70,225 200,290 200,305 70,240" fill="#07193B" />
          <polygon points="200,290 330,225 330,240 200,305" fill="#04122E" />

          {/* Trace Circuits on Base */}
          <path d="M120,200 L160,220 L180,210" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          <path d="M280,200 L240,220 L220,210" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
          <circle cx="180" cy="210" r="3" fill="#FBBF24" />
          <circle cx="220" cy="210" r="3" fill="#38BDF8" />
        </g>

        {/* Layer 2: Intermediate Floating Processing Matrix (Neural Tensor Tier) */}
        <g transform="translate(0, 10)">
          <polygon
            points="200,110 310,165 200,220 90,165"
            fill="url(#planeGrad1)"
            stroke="#3B82F6"
            strokeWidth="2"
            filter="url(#shadowFilter)"
          />
          <polygon points="90,165 200,220 200,230 90,175" fill="#06183B" />
          <polygon points="200,220 310,165 310,175 200,230" fill="#04122C" />

          {/* Inner Chip Grid Cells */}
          <polygon points="200,135 250,160 200,185 150,160" fill="#0E387A" stroke="#60A5FA" strokeWidth="1" />
          <polygon points="200,145 230,160 200,175 170,160" fill="url(#goldGrad)" opacity="0.9" />
        </g>

        {/* Layer 3: Top Core 3D Processing Unit (AI Core Voxel) */}
        <g transform="translate(0, -25)">
          {/* Vertical Glowing Light Pillar */}
          <polygon points="175,75 225,75 225,180 175,180" fill="url(#glowGrad)" opacity="0.4" />

          {/* Isometric Floating Core Cube */}
          {/* Top Face */}
          <polygon points="200,45 250,70 200,95 150,70" fill="url(#planeGrad2)" stroke="#93C5FD" strokeWidth="1.5" />
          {/* Left Face */}
          <polygon points="150,70 200,95 200,140 150,115" fill="#1E40AF" stroke="#60A5FA" strokeWidth="1" />
          {/* Right Face */}
          <polygon points="200,95 250,70 250,115 200,140" fill="#1D4ED8" stroke="#60A5FA" strokeWidth="1" />

          {/* Core Symbol Emitting Light */}
          <circle cx="200" cy="70" r="6" fill="#FBBF24" />
          <path d="M195,70 L205,70 M200,65 L200,75" stroke="#FFFFFF" strokeWidth="1.5" />
        </g>

        {/* Small Floating Isometric Data Cubes */}
        {/* Cube 1 (Left Top) */}
        <g transform="translate(-40, 20)">
          <polygon points="100,60 120,70 100,80 80,70" fill="#3B82F6" stroke="#93C5FD" strokeWidth="1" />
          <polygon points="80,70 100,80 100,95 80,85" fill="#1D4ED8" />
          <polygon points="100,80 120,70 120,85 100,95" fill="#1E3A8A" />
        </g>

        {/* Cube 2 (Right Mid) */}
        <g transform="translate(50, 45)">
          <polygon points="280,90 300,100 280,110 260,100" fill="url(#goldGrad)" stroke="#FEF08A" strokeWidth="1" />
          <polygon points="260,100 280,110 280,125 260,115" fill="#D97706" />
          <polygon points="280,110 300,100 300,115 280,125" fill="#B45309" />
        </g>

        {/* Cube 3 (Bottom Center Floating) */}
        <g transform="translate(10, 80)">
          <polygon points="190,170 205,178 190,186 175,178" fill="#10B981" stroke="#6EE7B7" strokeWidth="1" />
          <polygon points="175,178 190,186 190,198 175,190" fill="#059669" />
          <polygon points="190,186 205,178 205,190 190,198" fill="#047857" />
        </g>

        {/* Dynamic Data Rays connecting planes */}
        <line x1="150" y1="115" x2="150" y2="160" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
        <line x1="250" y1="115" x2="250" y2="160" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
        <line x1="200" y1="140" x2="200" y2="185" stroke="#FBBF24" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
      </svg>
    </div>
  );
};
