
import React from 'react';

interface ActionCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ href, icon, title, description, colorClass }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center p-4 rounded-2xl shadow-sm border border-gray-100 bg-white transition-all hover:shadow-md active:scale-95 ${colorClass}`}
    >
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-opacity-10 text-xl mr-4">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-gray-800 text-lg leading-tight">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </a>
  );
};

export default ActionCard;
