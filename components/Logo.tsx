
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="sai.png" 
      alt="Sai Indian Cuisine" 
      className={`${className} object-contain`}
      onError={(e) => {
        // Fallback to assets folder if it's not in the root
        const target = e.target as HTMLImageElement;
        if (!target.src.includes('assets/')) {
          target.src = 'assets/sai.png';
        }
      }}
    />
  );
};