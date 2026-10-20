import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  textColor?: string;
  iconOnly?: boolean;
  text?: string;
}

export const BallanceAsterisk: React.FC<{ size?: number; className?: string }> = ({
  size = 24,
  className = '',
}) => {
  return (
    <span
      style={{ width: size, height: size }}
      className={`inline-flex items-center justify-center shrink-0 overflow-hidden ${className}`}
    >
      <img
        src="/assets/aistudio/VectorSpace_28a3d75c.png"
        alt="Vector Space Emblem"
        className="h-[115%] w-auto max-w-none object-contain select-none pointer-events-none"
      />
    </span>
  );
};

export const BallanceLogo: React.FC<LogoProps> = ({
  className = '',
  size = 28,
  textColor = 'text-white',
  iconOnly = false,
  text = 'Vector Space Dynamics',
}) => {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-2 tracking-tight transition-opacity hover:opacity-85 ${textColor} ${className}`}
      aria-label={`${text} Home`}
    >
      <span
        style={{ width: size, height: size + 4 }}
        className="inline-flex items-center justify-center shrink-0 overflow-hidden"
      >
        <img
          src="/assets/aistudio/VectorSpace_28a3d75c.png"
          alt={`${text} Logo`}
          className="h-[115%] w-auto max-w-none object-contain select-none"
        />
      </span>
      {!iconOnly && (
        <span className="font-medium text-lg tracking-[-0.03em]">{text}</span>
      )}
    </a>
  );
};
