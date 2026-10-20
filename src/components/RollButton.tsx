import React from 'react';

interface RollButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
}

export const RollButton: React.FC<RollButtonProps> = ({
  children,
  icon,
  variant = 'secondary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}) => {
  const baseClasses =
    'group relative inline-flex items-center justify-center font-mono font-medium uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 h-8 gap-1.5',
    md: 'text-[13px] px-4 py-2.5 h-10 gap-2',
    lg: 'text-sm px-6 py-3.5 h-12 gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[#FF3E24] hover:bg-[#e6351d] text-white shadow-lg shadow-[#FF3E24]/20 border border-transparent',
    secondary:
      'bg-[#10172D] hover:bg-[#182342] text-white border border-white/10 hover:border-white/25',
    dark: 'bg-[#15171E] hover:bg-[#1E222D] text-white border border-white/10',
    outline:
      'bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40',
    ghost: 'bg-transparent text-white/80 hover:text-white',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="relative overflow-hidden h-[1.2em] inline-block leading-tight">
        <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
          <span className="block">{children}</span>
          <span className="block select-none" aria-hidden="true">
            {children}
          </span>
        </span>
      </span>
    </button>
  );
};
