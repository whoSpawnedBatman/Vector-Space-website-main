import React from 'react';
import { VectorSpaceLogo } from './VectorSpaceLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Command } from 'lucide-react';
import { Language } from '../utils/i18n';

interface NavbarProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  menuLabel?: string;
  closeLabel?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  onToggleMenu,
  currentLanguage,
  onLanguageChange,
  menuLabel = 'MENU',
  closeLabel = 'CLOSE',
}) => {
  const currentActionLabel = isMenuOpen ? closeLabel : menuLabel;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 px-6 sm:px-10 lg:px-12 py-5 sm:py-6 flex items-center justify-between pointer-events-none">
      {/* Left Header Logo */}
      <div className="pointer-events-auto">
        <VectorSpaceLogo textColor="text-white" size={26} nameVariant="full" />
      </div>

      {/* Right Header Navigation Controls: Language Switcher + Menu Button */}
      <div className="flex items-center gap-2.5">
        <LanguageSwitcher
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />

        <button
          onClick={onToggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? closeLabel : menuLabel}
          className="pointer-events-auto group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#0E1528]/80 hover:bg-[#182342] text-white/90 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer"
        >
          <Command size={13} className="text-white/70" />
          <span className="relative overflow-hidden h-[1.2em] inline-block leading-tight">
            <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
              <span className="block">{currentActionLabel}</span>
              <span className="block select-none" aria-hidden="true">
                {currentActionLabel}
              </span>
            </span>
          </span>
        </button>
      </div>
    </header>
  );
};
