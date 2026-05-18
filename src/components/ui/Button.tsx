import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'dark' }) => {
  const isLight = variant === 'light';
  
  return (
    <button
      className={`
        relative px-8 py-3 rounded-full border transition-all duration-300 group
        flex items-center gap-4
        ${isLight 
          ? 'border-ouma-dark text-ouma-dark hover:bg-ouma-dark hover:text-ouma-light' 
          : 'border-ouma-light text-ouma-light hover:bg-ouma-light hover:text-ouma-dark'}
        ${className}
      `}
    >
      <span className="text-xs">*</span>
      <span className="font-sans italic text-lg transform group-hover:scale-105 transition-transform duration-300 font-medium">
        {children}
      </span>
      <span className="text-xs">*</span>
    </button>
  );
};
