import React, { useState } from 'react';
import { RollButton } from './RollButton';
import { TranslationDictionary } from '../utils/i18n';

interface WhoProps {
  onOpenDemo: () => void;
  t?: TranslationDictionary['whoFor'];
}

export const WhoItIsBuiltFor: React.FC<WhoProps> = ({ onOpenDemo, t }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tag = t?.tag || 'FOR MODERN TEAMS MANAGING SPEND';
  const title = t?.title || 'Who Ballance Is Built For';
  const subtitle =
    t?.subtitle ||
    'Ballance supports individuals and organisations that need simple, reliable ways to pay, track spending, and stay in control as operations grow.';
  const cta = t?.cta || 'REQUEST A DEMO';

  const tabs = [
    {
      id: 'finance',
      tabName: t?.tabs.finance.tab || 'FINANCE TEAMS',
      heading: t?.tabs.finance.heading || 'Trusted by finance leaders',
      description:
        t?.tabs.finance.desc ||
        'Ballance brings card activity, bills, and vendor payments into one place, giving finance teams clear visibility, and confidence in how money moves across the organisation.',
      image:
        'https://framerusercontent.com/images/HTHMXqJ1BOJIT1QD7yRnwyb2OU.jpg?width=6123&height=4082',
      alt: 'Finance leaders discussing payments and budget control',
    },
    {
      id: 'operations',
      tabName: t?.tabs.operations.tab || 'OPERATIONS TEAMS',
      heading: t?.tabs.operations.heading || 'Built for operational clarity',
      description:
        t?.tabs.operations.desc ||
        'From recurring payments to one-off purchases, Ballance helps operations teams manage spend without friction, keeping processes moving while maintaining oversight.',
      image:
        'https://framerusercontent.com/images/5TuC8dag5g29D54MoXnUDLODdm4.jpg?width=5184&height=3456',
      alt: 'Operations team collaborating on business workflows',
    },
    {
      id: 'growing',
      tabName: t?.tabs.growing.tab || 'GROWING COMPANIES',
      heading: t?.tabs.growing.heading || 'Designed to scale with you',
      description:
        t?.tabs.growing.desc ||
        'As teams expand and spending becomes more distributed, Ballance provides structure without slowing speed—making it easier to manage access, and accountability at every stage.',
      image:
        'https://framerusercontent.com/images/OnT1fUCQdan90tc3Balfx9F7RI.jpg?width=6000&height=9000',
      alt: 'Growing startup team working in an open office',
    },
    {
      id: 'founders',
      tabName: t?.tabs.founders.tab || 'FOUNDERS & LEADERS',
      heading: t?.tabs.founders.heading || 'Control without micromanagement',
      description:
        t?.tabs.founders.desc ||
        'Ballance gives leaders a real-time view of how money is used across teams, enabling informed decisions and financial discipline without getting involved in every transaction.',
      image:
        'https://framerusercontent.com/images/5exrwTUKDpScrCcdckQ2bW20Q.jpg?width=3500&height=4267',
      alt: 'Founder reviewing executive dashboard metrics',
    },
  ];

  const currentTab = tabs[activeTab];

  return (
    <section className="bg-[#0A0D14] text-white py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Category Badge */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-white/50 flex items-center gap-2">
            <span className="w-2 h-2 border border-white/40 inline-block" />
            {tag}
          </span>
        </div>

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
        <div className="border border-white/15 rounded bg-[#10131B] overflow-hidden">
          {/* Tab Navigation Headers */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/15 bg-[#0C0F17]">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative py-4 px-3 sm:px-5 text-left font-mono text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 cursor-pointer border-r last:border-r-0 border-white/10 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#151924] text-white font-semibold'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/[0.02]'
                  }`}
                >
                  <span
                    className={`w-1.5 h-3 inline-block transition-colors ${
                      isActive ? 'bg-[#FF3E24]' : 'bg-transparent'
                    }`}
                  />
                  <span className="truncate">{tab.tabName}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-white leading-snug">
                {currentTab.heading}
              </h3>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed font-normal">
                {currentTab.description}
              </p>
              <div className="pt-4">
                <RollButton
                  variant="primary"
                  size="md"
                  onClick={onOpenDemo}
                  aria-label={cta}
                  className="rounded"
                >
                  {cta}
                </RollButton>
              </div>
            </div>

            {/* Right Column: High-Res Photo with transition */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/15 bg-black/40">
                <img
                  key={currentTab.id}
                  src={currentTab.image}
                  alt={currentTab.alt}
                  className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
