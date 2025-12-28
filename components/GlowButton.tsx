
import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  disabled?: boolean;
  // Added type prop to support 'button', 'submit', and 'reset' types for form usage
  type?: 'button' | 'submit' | 'reset';
}

const GlowButton: React.FC<GlowButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  disabled = false,
  // Defaulting to 'button' to maintain standard button behavior unless specified otherwise
  type = 'button'
}) => {
  const baseStyles = "px-6 py-3 rounded-sm font-mono text-sm tracking-widest transition-all duration-300 relative overflow-hidden group";
  const variants = {
    primary: "bg-neon text-black font-bold hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]",
    outline: "border border-neon text-neon hover:bg-neon hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
  };

  return (
    <button
      // Fix: Pass the type prop to the HTML button element
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed grayscale' : ''} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
    </button>
  );
};

export default GlowButton;
