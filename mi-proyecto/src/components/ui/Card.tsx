import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-100 p-6 
        ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : 'shadow-sm'} 
        ${className}`}
    >
      {children}
    </div>
  );
};
