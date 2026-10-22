import React from 'react';
import { TranslationDictionary } from '../utils/i18n';

interface ComplianceProps {
  t?: TranslationDictionary['compliance'];
}

export const Compliance: React.FC<ComplianceProps> = ({ t }) => {
  const tag = t?.tag || 'THE FOUR BRAND PRINCIPLES';
  const summary =
    t?.summary ||
    'Every line of code and architecture we deliver is governed by our four foundational pillars: clear thinking, curiosity, continuous iteration, and disciplined exploration.';

  const defaultCertifications = [
    {
      title: 'Precision',
      desc: 'We value clear thinking, sound engineering, rigour and meticulous attention to detail in every system.',
      icon: 'https://framerusercontent.com/images/CAnJ5noRyWD2uzHJILWuQtFKOY8.svg',
      alt: 'Precision emblem',
    },
    {
      title: 'Curiosity',
      desc: 'We question assumptions, investigate complex problems deeply, and keep learning relentlessly.',
      icon: 'https://framerusercontent.com/images/GuuKEsTnWXcAVnuhU2DEpIur8M.svg',
      alt: 'Curiosity emblem',
    },
    {
      title: 'Progress',
      desc: 'We build practical solutions, test ideas through rigorous validation, and improve through continuous iteration.',
      icon: 'https://framerusercontent.com/images/EOSJ9ljHHBOrHVxxOj7jX6Muano.svg',
      alt: 'Progress emblem',
    },
    {
      title: 'Exploration',
      desc: 'We pursue ambitious questions with discipline and an open mind toward the future of technology and space.',
      icon: 'https://framerusercontent.com/images/8sg0e3ydrJwv3hOIdv8SAtp4Ls.svg',
      alt: 'Exploration emblem',
    },
  ];

  const items = t?.items
    ? t.items.map((item, idx) => ({
        ...item,
        icon: defaultCertifications[idx % defaultCertifications.length].icon,
        alt: defaultCertifications[idx % defaultCertifications.length].alt,
      }))
    : defaultCertifications;

  return (
    <section className="bg-[#0A0D14] text-white py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* 4 Cards Grid with Watermark Emblems */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group bg-[#10131B] border border-white/10 rounded-sm p-7 sm:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] hover:border-white/25 transition-all duration-200"
            >
              <div>
                <h3 className="font-mono text-base font-semibold tracking-wider text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {item.desc || (item as any).description}
                </p>
              </div>

              {/* Watermark Emblem at bottom of card */}
              <div className="mt-8 pt-4">
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-12 h-12 object-contain opacity-30 group-hover:opacity-50 transition-opacity duration-300 filter brightness-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer Text */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm sm:text-base font-normal text-white/70 leading-relaxed">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
};
