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
  const key = variant === 'primary' ? 'primary' : variant === 'dark' ? 'dark' : 'white';

  return (
    <img
      src={`/assets/brand/vsd-symbol-${key}-128.webp`}
      srcSet={`/assets/brand/vsd-symbol-${key}-64.webp 64w, /assets/brand/vsd-symbol-${key}-128.webp 128w`}
      sizes={`${size}px`}
      width={size}
      height={size}
      alt="Vector Space Dynamics Symbol"
      style={{ height: `${size}px`, width: `${size}px` }}
      className={`shrink-0 object-contain select-none pointer-events-none ${className}`}
      loading="eager"
      decoding="async"
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
  nameVariant = 'full',
  href = '#',
}) => {
  const renderText = () => {
    if (text) {
      return <span>{text}</span>;
    }
    if (nameVariant === 'short') {
      return <span>Vector Space</span>;
    }
    return <span>Vector Space Dynamics</span>;
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 sm:gap-3 tracking-tight transition-opacity hover:opacity-85 ${textColor} ${className}`}
      aria-label="Vector Space Dynamics Home"
    >
      <VectorSpaceSymbol size={size} variant={variant} />
      {!iconOnly && (
        <span className="font-sans font-medium text-[13.5px] sm:text-[15px] tracking-[-0.015em] leading-none select-none whitespace-nowrap">
          {renderText()}
        </span>
      )}
    </a>
  );
};

// Aliases
export const VSDLogo = VectorSpaceLogo;
export const VSDSymbol = VectorSpaceSymbol;
