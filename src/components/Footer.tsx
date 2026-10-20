import React from 'react';
import { BallanceLogo, BallanceAsterisk } from './BallanceLogo';
import { TranslationDictionary } from '../utils/i18n';

interface FooterProps {
  onNavigate?: (page: string) => void;
  t?: TranslationDictionary['footer'];
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, t }) => {
  const handleNav = (item: string) => {
    if (onNavigate) onNavigate(item);
  };

  const slogan = t?.slogan || 'Governance, everywhere you spend.';
  const platform = t?.platform || 'Platform';
  const resources = t?.resources || 'Resources';
  const legal = t?.legal || 'Legal';
  const hiringBadge = t?.hiringBadge || 'WE ARE HIRING!';
  const attribution = t?.attribution || 'made with 🍄 by clay studio.';
  const copyright = t?.copyright || '© 2026 Vector Space Technologies, Inc.';

  return (
    <footer className="relative min-h-[520px] overflow-hidden text-white flex flex-col justify-between p-8 sm:p-12 lg:p-16">
      {/* Apples in Basket Background Image with Balanced Darkening */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url('https://framerusercontent.com/images/LO6cf7PuUSbAsswhNPsu0IvAM.jpg?width=4000&height=3000')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/75 backdrop-contrast-110" />
      </div>

      {/* Top Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pt-4">
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col justify-start">
          <BallanceLogo size={24} textColor="text-white" />
          <h3 className="mt-8 text-2xl sm:text-3xl font-normal tracking-tight text-white max-w-xs leading-snug drop-shadow-md">
            {slogan}
          </h3>
        </div>

        {/* Links Columns */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* Platform */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/60 mb-4">
              {platform}
            </h4>
            <ul className="space-y-3">
              {['Ballance* Home', 'Company', 'Pricing', 'Contact Us', '404'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNav(link)}
                    className="text-sm text-white/85 hover:text-white transition-colors cursor-pointer text-left drop-shadow-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/60 mb-4">
              {resources}
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNav('Blog')}
                  className="text-sm text-white/85 hover:text-white transition-colors cursor-pointer drop-shadow-sm"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('Customer Stories')}
                  className="text-sm text-white/85 hover:text-white transition-colors cursor-pointer drop-shadow-sm"
                >
                  Customer Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('Careers')}
                  className="text-sm text-white/85 hover:text-white transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center gap-1.5 drop-shadow-sm"
                >
                  <span>Careers</span>
                  <span className="font-mono text-[9px] uppercase tracking-wider px-1 py-0.5 rounded bg-white/20 text-white font-medium">
                    {hiringBadge}
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/60 mb-4">
              {legal}
            </h4>
            <ul className="space-y-3">
              {['Terms', 'Privacy Policy', 'Cookies'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNav(link)}
                    className="text-sm text-white/85 hover:text-white transition-colors cursor-pointer drop-shadow-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Attribution */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 mt-12 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
        <a
          href="https://x.com/clayxstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>{attribution}</span>
        </a>

        {/* Decorative spinning asterisk */}
        <div className="flex items-center gap-2">
          <BallanceAsterisk size={14} className="text-white/50 animate-spin [animation-duration:12s]" />
          <span>{copyright}</span>
        </div>
      </div>
    </footer>
  );
};
