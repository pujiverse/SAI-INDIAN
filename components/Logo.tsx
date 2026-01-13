
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className={className}>
      <g transform="translate(150, 150)">
        <path fill="#008a45" d="M0 -140 L15 -15 L140 0 L15 15 L0 140 L-15 15 L-140 0 L-15 -15 Z"/>
        <path fill="#008a45" d="M-90 -90 L0 -15 L90 -90 L15 0 L90 90 L0 15 L-90 90 L-15 0 Z" opacity="0.8"/>
      </g>
      
      <circle cx="150" cy="150" r="85" fill="white" stroke="#008a45" strokeWidth="2"/>
      
      <g transform="translate(150, 175)">
        <path fill="#e31e24" d="M-50 0 C-50 30 50 30 50 0 L-50 0 Z"/>
        <path fill="#e31e24" d="M-55 -3 L55 -3 L50 3 L-50 3 Z"/>
        <path fill="#f9b71e" d="M-25 -20 C-35 -35 -15 -35 -5 -15 L-10 -5 Z"/>
      </g>
      
      <text x="150" y="145" textAnchor="middle" fill="#f9b71e" fontFamily="'Playfair Display', serif" fontWeight="bold" fontSize="34">Sai's</text>
      
      <text x="150" y="275" textAnchor="middle" fill="#e31e24" fontFamily="'Playfair Display', serif" fontWeight="bold" fontSize="22" letterSpacing="1">SAI INDIAN CUISINE</text>
    </svg>
  );
};
