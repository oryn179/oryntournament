
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`glassmorphism p-6 relative group transition-all duration-500 hover:border-neon/40 hover:shadow-[0_0_25px_rgba(57,255,20,0.1)] ${className}`}>
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon opacity-40"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon opacity-40"></div>
      
      {title && (
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-neon font-mono text-sm tracking-tighter uppercase font-bold">{title}</h3>
          <div className="h-px bg-neon/20 flex-grow ml-4"></div>
        </div>
      )}
      
      {children}
    </div>
  );
};

export default GlassCard;
