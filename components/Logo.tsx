
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Sai Indian Cuisine Logo Component
 * 
 * Features a traditional Indian aesthetic fallback including:
 * - Mandala/Rangoli inspired geometric patterns
 * - Saffron, Gold, and Deep Red color palette
 * - Ornate flourishes
 */
export const Logo: React.FC<LogoProps> = ({ className }) => {
  const paths = [
    "assets/sai.png",
    "./assets/sai.png",
    "assets/logo.svg",
    "./assets/logo.svg",
    "sai.png",
    "logo.svg"
  ];

  const [pathIndex, setPathIndex] = useState(0);
  const [isBroken, setIsBroken] = useState(false);

  const handleError = () => {
    if (pathIndex < paths.length - 1) {
      setPathIndex(prev => prev + 1);
    } else {
      setIsBroken(true);
    }
  };

  // Traditional Indian Style SVG Fallback
  if (isBroken) {
    return (
      <svg className={className} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="saffronGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFCC33" />
            <stop offset="100%" stopColor="#FF9933" />
          </radialGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="0" dy="4" />
            <feComponentTransfer><feFuncA type="linear" slope="0.4"/></feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform="translate(150, 150)" filter="url(#softShadow)">
          {/* Outer Mandala Petals */}
          {[...Array(12)].map((_, i) => (
            <path 
              key={`outer-${i}`}
              d="M0 -140 C20 -120 30 -90 0 -70 C-30 -90 -20 -120 0 -140" 
              fill="url(#saffronGrad)" 
              transform={`rotate(${i * 30})`}
            />
          ))}
          
          {/* Middle Decorative Ring */}
          <circle r="95" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 8" />
          
          {/* Inner Mandala Petals (Deep Red) */}
          {[...Array(12)].map((_, i) => (
            <path 
              key={`inner-${i}`}
              d="M0 -85 C15 -75 15 -55 0 -45 C-15 -55 -15 -75 0 -85" 
              fill="#e31e24" 
              transform={`rotate(${i * 30 + 15})`}
            />
          ))}

          {/* Central Disc */}
          <circle r="65" fill="white" stroke="#D4AF37" strokeWidth="3" />
          
          {/* Traditional Pattern Dots */}
          {[...Array(24)].map((_, i) => (
            <circle 
              key={`dot-${i}`}
              cx="0" cy="-75" r="2" 
              fill="#D4AF37" 
              transform={`rotate(${i * 15})`} 
            />
          ))}

          {/* Handi/Pot Icon in center */}
          <g transform="translate(0, 15)">
            <path d="M-25 0 C-25 20 25 20 25 0 L-25 0 Z" fill="#e31e24" />
            <path d="M-28 -3 L28 -3 L25 2 L-25 2 Z" fill="#e31e24" />
            <path d="M-10 -15 C-15 -25 -5 -25 -2 -10 L-5 -2 Z" fill="#f9b71e" />
          </g>

          {/* Text branding inside circle */}
          <text 
            y="-5" 
            textAnchor="middle" 
            fill="#f9b71e" 
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 'bold' }} 
            fontSize="26"
          >
            Sai's
          </text>
        </g>
        
        {/* Main Brand Text below mandala */}
        <text 
          x="150" 
          y="285" 
          textAnchor="middle" 
          fill="#e31e24" 
          style={{ fontFamily: 'Playfair Display, serif', fontWeight: 'bold' }} 
          fontSize="20" 
          letterSpacing="2"
        >
          SAI INDIAN CUISINE
        </text>
      </svg>
    );
  }

  return (
    <img 
      src={paths[pathIndex]} 
      alt="Sai Indian Cuisine Logo" 
      className={`${className} object-contain`}
      style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}
      loading="eager"
      onError={handleError}
    />
  );
};
