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
  const src =
    variant === 'primary'
      ? '/assets/vsd-symbol-primary.png'
      : variant === 'dark'
      ? '/assets/vsd-symbol-dark.png'
      : '/assets/vsd-symbol-white.png';

  return (
    <img
      src={src}
      alt="Vector Space Dynamics Symbol"
      style={{ height: `${size}px`, width: 'auto' }}
      className={`shrink-0 object-contain select-none pointer-events-none ${className}`}
      loading="eager"
    />
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
