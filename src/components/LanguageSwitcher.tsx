import React, { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Language, SUPPORTED_LANGUAGES } from '../utils/i18n';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const activeOption =
    SUPPORTED_LANGUAGES.find((opt) => opt.code === currentLanguage) ||
    SUPPORTED_LANGUAGES[0];

  const handleSelect = (lang: Language) => {
    onLanguageChange(lang);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left pointer-events-auto">
      {/* Trigger Button: Minimalist text-only "EN" / "ES" without box */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Select language, current: ${activeOption.nativeLabel}`}
        className="inline-flex items-center px-2 py-1.5 text-white/85 hover:text-white font-mono text-xs font-medium uppercase tracking-wider transition-colors duration-200 cursor-pointer"
      >
        <span>{activeOption.shortLabel}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Language selection"
          className="absolute right-0 mt-2 w-32 rounded-md bg-[#0A0E1A]/95 border border-white/15 backdrop-blur-xl shadow-2xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
        >
          {SUPPORTED_LANGUAGES.map((option) => {
            const isSelected = option.code === currentLanguage;
            return (
              <button
                key={option.code}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-left font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-white/10 text-white font-semibold'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{option.nativeLabel}</span>
                {isSelected && <Check size={12} className="text-[#FF3E24]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
