import React from 'react';
import { TranslationDictionary } from '../utils/i18n';

export interface WhatVectorSpaceDoesProps {
  t?: TranslationDictionary['whatDoes'];
}

export const WhatVectorSpaceDoes: React.FC<WhatVectorSpaceDoesProps> = ({ t }) => {
  const title = t?.title || 'What Vector Space Does';
  const subtitle =
    t?.subtitle ||
    'We develop useful technology, solve complex technical problems, and build robust software infrastructure that enables modern businesses to operate with precision.';

  const cards = [
    {
      label: t?.cards.individuals.title || 'ARTIFICIAL INTELLIGENCE & ML',
      image: '/assets/what/what-1-600.webp',
      srcSet: '/assets/what/what-1-300.webp 300w, /assets/what/what-1-600.webp 439w',
      width: 439,
      height: 560,
      alt: 'Hand drawn sketch of person with laptop and coffee',
      desc:
        t?.cards.individuals.desc ||
        'Purpose-built intelligent models, retrieval pipelines, and automation systems engineered for operational accuracy.',
    },
    {
      label: t?.cards.growingTeams.title || 'CLOUD & IT INFRASTRUCTURE',
      image: '/assets/what/what-2-600.webp',
      srcSet: '/assets/what/what-2-300.webp 300w, /assets/what/what-2-600.webp 600w',
      width: 600,
      height: 510,
      alt: 'Hand drawn sketch of person riding a rocket ship',
      desc:
        t?.cards.growingTeams.desc ||
        'High-availability architecture, resilient backends, and enterprise systems that scale without technical debt.',
    },
    {
      label: t?.cards.financeOps.title || 'APPLIED RESEARCH & R&D',
      image: '/assets/what/what-3-600.webp',
      srcSet: '/assets/what/what-3-300.webp 300w, /assets/what/what-3-600.webp 394w',
      width: 394,
      height: 560,
      alt: 'Hand drawn sketch of person putting together puzzle pieces',
      desc:
        t?.cards.financeOps.desc ||
        'Disciplined exploration of cutting-edge algorithms, simulation frameworks, and boundary-pushing engineering.',
    },
  ];

  return (
    <section id="capabilities" className="bg-[#F9F9F7] text-[#111317] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-[#111317] leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#111317]/70 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 3 Sketch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-[#F0EFE9] border border-[#111317]/10 rounded-sm p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#111317]/25 hover:-translate-y-1 cursor-pointer"
            >
              {/* Card Tag Top or Bottom */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#111317]/80">
                  {card.label}
                </span>
              </div>

              {/* Hand Drawn Illustration */}
              <div className="relative aspect-square w-full flex items-center justify-center overflow-hidden my-4">
                <img
                  src={card.image}
                  srcSet={card.srcSet}
                  sizes="(max-width: 768px) 90vw, 350px"
                  width={card.width}
                  height={card.height}
                  alt={card.alt}
                  className="max-h-full max-w-full object-contain filter contrast-125 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Card bottom text */}
              <p className="text-xs sm:text-sm text-[#111317]/60 leading-normal mt-4">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
