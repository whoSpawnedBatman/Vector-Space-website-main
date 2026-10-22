import React, { useState } from 'react';
import { RollButton } from './RollButton';
import { TranslationDictionary } from '../utils/i18n';

interface WhoProps {
  onOpenDemo: () => void;
  t?: TranslationDictionary['whoFor'];
}

export const WhoItIsBuiltFor: React.FC<WhoProps> = ({ onOpenDemo, t }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tag = t?.tag || 'ENGINEERED FOR SCALE & RIGOUR';
  const title = t?.title || 'Who We Build For';
  const subtitle =
    t?.subtitle ||
    'Vector Space partners with forward-thinking organisations that need dependable IT architecture, intelligent automation, and long-term technical clarity.';
  const cta = t?.cta || 'START A CONVERSATION';

  const tabs = [
    {
      id: 'finance',
      tabName: t?.tabs.finance.tab || 'ENTERPRISE IT',
      heading: t?.tabs.finance.heading || 'Mission-critical systems built to last',
      description:
        t?.tabs.finance.desc ||
        'We engineer secure, compliant, and observable IT infrastructure that eliminates downtime, modernizes legacy bottlenecks, and protects data integrity.',
      image:
        'https://framerusercontent.com/images/HTHMXqJ1BOJIT1QD7yRnwyb2OU.jpg?width=1000&height=700',
      alt: 'Enterprise engineering team reviewing architecture',
    },
    {
      id: 'operations',
      tabName: t?.tabs.operations.tab || 'AI & PRODUCT TEAMS',
      heading: t?.tabs.operations.heading || 'Intelligent automation grounded in reality',
      description:
        t?.tabs.operations.desc ||
        'From specialized LLM integrations to high-throughput data processing pipelines, we take AI beyond proof-of-concept into reliable day-to-day operations.',
      image:
        'https://framerusercontent.com/images/5TuC8dag5g29D54MoXnUDLODdm4.jpg?width=1000&height=700',
      alt: 'Product team testing machine learning models',
    },
    {
      id: 'growing',
      tabName: t?.tabs.growing.tab || 'HIGH-GROWTH TECH',
      heading: t?.tabs.growing.heading || 'Architectures engineered for scale',
      description:
        t?.tabs.growing.desc ||
        'When rapid expansion challenges your software foundation, we deliver structured engineering that supports velocity without sacrificing system health.',
      image:
        'https://framerusercontent.com/images/OnT1fUCQdan90tc3Balfx9F7RI.jpg?width=1000&height=700',
      alt: 'Fast growing engineering team collaborating',
    },
    {
      id: 'founders',
      tabName: t?.tabs.founders.tab || 'R&D & INNOVATORS',
      heading: t?.tabs.founders.heading || 'Disciplined exploration of what is next',
      description:
        t?.tabs.founders.desc ||
        'We help ambitious technical leaders investigate complex questions, validate experimental prototypes, and turn research into production-grade reality.',
      image:
        'https://framerusercontent.com/images/5exrwTUKDpScrCcdckQ2bW20Q.jpg?width=1000&height=700',
      alt: 'R&D leaders exploring computational research',
    },
  ];

  const currentTab = tabs[activeTab];

  return (
    <section className="bg-[#0A0D14] text-white py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-white leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/70 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Interactive Tabs Container */}
        <div className="border border-white/15 rounded-sm bg-[#0C0F17] overflow-hidden shadow-2xl">
          {/* Tab Navigation Headers */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/15 bg-[#0C0F17]">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative py-4 px-3 sm:px-6 text-left font-mono text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 cursor-pointer border-r last:border-r-0 border-white/10 flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-[#F0EFE9] text-[#111317] font-semibold'
                      : 'text-white/60 hover:text-white bg-[#0C0F17]'
                  }`}
                >
                  <span
                    className={`w-[2px] h-3 inline-block transition-colors shrink-0 ${
                      isActive ? 'bg-[#111317]' : 'bg-transparent'
                    }`}
                  />
                  <span className="truncate">{tab.tabName}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Area: 50/50 split with flush image on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14 min-h-[420px] sm:min-h-[500px]">
              <div className="space-y-6 max-w-lg">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-white leading-snug">
                  {currentTab.heading}
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed font-normal">
                  {currentTab.description}
                </p>
              </div>
              <div className="pt-8">
                <RollButton
                  variant="primary"
                  size="md"
                  onClick={onOpenDemo}
                  aria-label={cta}
                  className="rounded-sm bg-[#FF3E24] hover:bg-[#e6351d] text-white font-mono text-xs tracking-wider uppercase px-6 py-3 border-0 shadow-lg shadow-[#FF3E24]/20"
                >
                  {cta}
                </RollButton>
              </div>
            </div>

            {/* Right Column: High-Res Photo flush with card edges */}
            <div className="relative w-full h-[360px] sm:h-[460px] lg:h-auto min-h-full border-t lg:border-t-0 lg:border-l border-white/15 overflow-hidden">
              <img
                key={currentTab.id}
                src={currentTab.image}
                alt={currentTab.alt}
                className="w-full h-full object-cover animate-in fade-in duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
