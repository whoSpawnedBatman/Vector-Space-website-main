import React from 'react';
import { VectorSpaceLogo } from './VectorSpaceLogo';
import { TranslationDictionary } from '../utils/i18n';

interface FooterProps {
  onNavigate?: (page: string) => void;
  t?: TranslationDictionary['footer'];
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, t }) => {
  const handleNav = (item: string) => {
    if (onNavigate) onNavigate(item);
  };

  const slogan = t?.slogan || 'Engineering\nbeyond boundaries.';
  const platform = t?.platform || 'CAPABILITIES';
  const resources = t?.resources || 'ORGANIZATION';
  const legal = t?.legal || 'STANDARDS';
  const hiringBadge = t?.hiringBadge || 'WE ARE HIRING!';
  const attribution = t?.attribution || 'VECTOR SPACE DYNAMICS';

  return (
    <footer className="w-full flex flex-col">
      {/* Top Sketches Banner on Warm Cream Background (Characters sitting on the grass edge) */}
      <div className="w-full bg-[#F9F9F7] pt-8 sm:pt-10 pb-0 flex items-end justify-center overflow-hidden">
        <img
          src="/assets/brand/sketch-banner-1200.webp"
          srcSet="/assets/brand/sketch-banner-600.webp 600w, /assets/brand/sketch-banner-1200.webp 1200w"
          sizes="(max-width: 640px) 600px, 1200px"
          width={1200}
          height={109}
          alt="Vector Space Dynamics sketches banner"
          loading="lazy"
          decoding="async"
          className="h-16 sm:h-20 lg:h-24 w-auto object-contain max-w-full select-none pointer-events-none translate-y-[2px]"
        />
      </div>

      {/* Main Footer with Light Streaks Background Photo */}
      <div className="relative overflow-hidden text-white flex flex-col justify-between min-h-[480px] lg:min-h-[520px] px-6 sm:px-12 lg:px-20 pt-12 sm:pt-16 pb-10 sm:pb-12">
        {/* Light Streaks Background Photo */}
        <img
          src="/assets/brand/light-streaks-1920.webp"
          srcSet="/assets/brand/light-streaks-960.webp 960w, /assets/brand/light-streaks-1920.webp 1024w"
          sizes="100vw"
          width={1024}
          height={683}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ objectPosition: 'center' }}
        />

        {/* Atmospheric Contrast Layer */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />


        {/* Top Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="flex flex-col items-start max-w-xs pt-1 sm:pt-2">
            <VectorSpaceLogo size={24} textColor="text-white" nameVariant="full" />
            <h3 className="mt-5 text-xl sm:text-2xl lg:text-[26px] font-normal tracking-[-0.02em] text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] whitespace-pre-line">
              {slogan}
            </h3>
          </div>

          {/* Right Frosted Glass Navigation Box */}
          <div className="w-full lg:w-auto bg-black/45 backdrop-blur-md border border-white/10 rounded-[4px] grid grid-cols-1 sm:grid-cols-3 overflow-hidden shadow-2xl">
            {/* Platform Column */}
            <div className="p-6 sm:px-8 sm:py-7 border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col min-w-[170px]">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest text-white mb-5">
                {platform}
              </h4>
              <ul className="space-y-3.5">
                {['Vector Space', 'Capabilities', 'Principles', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleNav(link)}
                      className="text-[13px] text-white/75 hover:text-white transition-colors cursor-pointer text-left font-normal"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="p-6 sm:px-8 sm:py-7 border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col min-w-[190px]">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest text-white mb-5">
                {resources}
              </h4>
              <ul className="space-y-3.5">
                <li>
                  <button
                    onClick={() => handleNav('Blog')}
                    className="text-[13px] text-white/75 hover:text-white transition-colors cursor-pointer text-left font-normal"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('Customer Stories')}
                    className="text-[13px] text-white/75 hover:text-white transition-colors cursor-pointer text-left font-normal"
                  >
                    Customer Stories
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav('Careers')}
                    className="text-[13px] text-white/75 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2 text-left font-normal"
                  >
                    <span>Careers</span>
                    <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] bg-white/15 border border-white/10 text-white/90 font-medium">
                      {hiringBadge}
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="p-6 sm:px-8 sm:py-7 flex flex-col min-w-[160px]">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest text-white mb-5">
                {legal}
              </h4>
              <ul className="space-y-3.5">
                {['Terms', 'Privacy Policy', 'Cookies'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleNav(link)}
                      className="text-[13px] text-white/75 hover:text-white transition-colors cursor-pointer text-left font-normal"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 sm:pt-20 flex items-center justify-start">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors drop-shadow"
          >
            {attribution.toUpperCase()}
          </a>
        </div>
      </div>
    </footer>
  );
};
