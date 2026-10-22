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
      desc:
        t?.cards.individuals.desc ||
        'Purpose-built intelligent models, retrieval pipelines, and automation systems engineered for operational accuracy.',
    },
    {
      label: t?.cards.growingTeams.title || 'CLOUD & IT INFRASTRUCTURE',
      desc:
        t?.cards.growingTeams.desc ||
        'High-availability architecture, resilient backends, and enterprise systems that scale without technical debt.',
    },
    {
      label: t?.cards.financeOps.title || 'APPLIED RESEARCH & R&D',
      desc:
        t?.cards.financeOps.desc ||
        'Disciplined exploration of cutting-edge algorithms, simulation frameworks, and boundary-pushing engineering.',
    },
  ];

  return (
    <section className="bg-[#F9F9F7] text-[#111317] py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
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
              className="group relative bg-[#F0EFE9] border border-[#111317]/10 rounded-sm p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#111317]/25 hover:-translate-y-1 cursor-pointer min-h-[220px]"
            >
              {/* Card Tag Top */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#111317]/80">
                  {card.label}
                </span>
              </div>

              {/* Card text */}
              <p className="text-xs sm:text-sm text-[#111317]/70 leading-relaxed mt-2">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
