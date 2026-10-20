import React from 'react';
import { TranslationDictionary } from '../utils/i18n';

interface WhatBallanceDoesProps {
  t?: TranslationDictionary['whatDoes'];
}

export const WhatBallanceDoes: React.FC<WhatBallanceDoesProps> = ({ t }) => {
  const tag = t?.tag || 'BUILT FOR MODERN TEAMS';
  const title = t?.title || 'What Ballance* Does';
  const subtitle =
    t?.subtitle ||
    'Ballance gives individuals and organisations a clear way to manage payments—issuing cards, setting boundaries, and tracking spending in real time without added complexity.';

  const cards = [
    {
      label: t?.cards.individuals.title || 'INDIVIDUALS',
      image:
        'https://framerusercontent.com/images/GbwK5Grd5cWLJuDTgALWacTt5Cs.png?width=439&height=560',
      alt: 'Hand drawn sketch of person with laptop and coffee',
      desc:
        t?.cards.individuals.desc ||
        'Smart virtual and physical cards for personal flexibility and fast expense handling.',
    },
    {
      label: t?.cards.growingTeams.title || 'GROWING TEAMS',
      image:
        'https://framerusercontent.com/images/AzgtOBiCfs2fkWOrNdrTl5JCWI.png?width=1161&height=987',
      alt: 'Hand drawn sketch of person riding a rocket ship',
      desc:
        t?.cards.growingTeams.desc ||
        'Rapid card issuance and automated spend boundaries for high-velocity teams.',
    },
    {
      label: t?.cards.financeOps.title || 'FINANCE OPERATIONS',
      image:
        'https://framerusercontent.com/images/pmxeD64hHKa0fiWWoqiFzgw8SQ.png?width=394&height=560',
      alt: 'Hand drawn sketch of person putting together puzzle pieces',
      desc:
        t?.cards.financeOps.desc ||
        'Centralized controls, vendor management, and real-time reconciliation.',
    },
  ];

  return (
    <section className="bg-[#F9F9F7] text-[#111317] py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Category Tag */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#111317]/60 flex items-center gap-2">
            <span className="w-2 h-2 border border-[#111317]/50 inline-block" />
            {tag}
          </span>
        </div>

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
                <span className="font-mono text-xs font-semibold tracking-wider text-[#111317]/80 flex items-center gap-2">
                  <span className="w-2 h-2 border border-[#111317]/50 inline-block group-hover:bg-[#111317] transition-colors" />
                  {card.label}
                </span>
              </div>

              {/* Hand Drawn Illustration */}
              <div className="relative aspect-square w-full flex items-center justify-center overflow-hidden my-4">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="max-h-full max-w-full object-contain filter contrast-125 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
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
