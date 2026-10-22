import React from 'react';

export interface VectorSpaceLogoProps {
  className?: string;
  size?: number;
  textColor?: string;
  iconOnly?: boolean;
  text?: string;
  variant?: 'white' | 'primary' | 'dark';
  nameVariant?: 'full' | 'short' | 'responsive';
  href?: string;
}

export const VectorSpaceSymbol: React.FC<{
  size?: number;
  className?: string;
  variant?: 'white' | 'primary' | 'dark';
}> = ({ size = 26, className = '', variant = 'white' }) => {
  const color =
    variant === 'primary' ? '#FF3E24' : variant === 'dark' ? '#111317' : '#FFFFFF';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="Vector Space Dynamics Symbol"
    >
      <polygon
        points="12,2 22,20 12,16 2,20"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" fill={color} />
    </svg>
  );
};

export const VectorSpaceLogo: React.FC<VectorSpaceLogoProps> = ({
  className = '',
  size = 26,
  textColor = 'text-white',
  iconOnly = false,
  text,
  variant = 'white',
  nameVariant = 'responsive',
  href = '#',
}) => {
  const renderText = () => {
    if (text) {
      return <span>{text}</span>;
    }
    if (nameVariant === 'short') {
      return <span>VECTOR SPACE</span>;
    }
    if (nameVariant === 'full') {
      return <span>VECTOR SPACE DYNAMICS</span>;
    }
    // Responsive: 'VECTOR SPACE' on compact screens, 'VECTOR SPACE DYNAMICS' on sm+
    return (
      <>
        <span>VECTOR SPACE</span>
        <span className="hidden sm:inline">&nbsp;DYNAMICS</span>
      </>
    );
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 sm:gap-3 tracking-tight transition-opacity hover:opacity-85 ${textColor} ${className}`}
      aria-label="Vector Space Dynamics Home"
    >
      <VectorSpaceSymbol size={size} variant={variant} />
      {!iconOnly && (
        <span className="font-['Michroma',sans-serif] text-[11.5px] sm:text-[13px] uppercase tracking-[0.15em] font-normal leading-tight select-none whitespace-nowrap">
          {renderText()}
        </span>
      )}
    </a>
  );
};

// Aliases
export const VSDLogo = VectorSpaceLogo;
export const VSDSymbol = VectorSpaceSymbol;
