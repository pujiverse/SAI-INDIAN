
import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Sai Indian Cuisine Logo Component
 * 
 * Optimized for a transparent PNG (assets/sai.png).
 * Tries several path variations to ensure compatibility across different environments.
 */
export const Logo: React.FC<LogoProps> = ({ className }) => {
  const paths = [
    "assets/sai.png",
    "/assets/sai.png",
    "./assets/sai.png",
    "sai.png",
    "/sai.png",
    "assets/logo.svg",
    "logo.svg"
  ];

  const [pathIndex, setPathIndex] = useState(0);
  const [isBroken, setIsBroken] = useState(false);

  const handleError = () => {
    if (pathIndex < paths.length - 1) {
      console.log(`Failed to load ${paths[pathIndex]}, trying ${paths[pathIndex + 1]}`);
      setPathIndex(prev => prev + 1);
    } else {
      console.error("All logo paths failed.");
      setIsBroken(true);
    }
  };

  if (isBroken) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="flex flex-col items-center justify-center">
          <span className="font-serif font-bold text-white text-3xl md:text-4xl drop-shadow-lg leading-none">SAI</span>
          <span className="text-[8px] md:text-[10px] font-bold text-sai-green tracking-[0.3em] mt-1 bg-white/90 px-2 py-0.5 rounded shadow-sm">INDIAN CUISINE</span>
        </div>
      </div>
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
