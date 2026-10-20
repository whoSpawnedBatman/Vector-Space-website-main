import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { TranslationDictionary } from '../utils/i18n';

interface FAQProps {
  t?: TranslationDictionary['faq'];
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
  // Store open state for each item (allowing multiple open or single)
  const [openIndices, setOpenIndices] = useState<Record<string, boolean>>({
    'col1-0': false,
  });

  const toggleItem = (key: string) => {
    setOpenIndices((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const tag = t?.tag || 'QUESTIONS + ANSWERS';
  const title = t?.title || 'Frequent Questions.';
  const subtitle =
    t?.subtitle ||
    'Common answers to help you understand how Ballance works, what to expect, and how teams use it to manage spending with clarity and confidence.';

  const defaultCol1 = [
    {
      q: 'What is Ballance?',
      a: 'Ballance is a payments platform that helps individuals and businesses manage spending with simple cards, clear controls, and real-time visibility.',
    },
    {
      q: 'What types of cards does Ballance offer?',
      a: 'Ballance provides easy-to-use cards suitable for everyday purchases, subscriptions, and business expenses.',
    },
    {
      q: 'How quickly can cards be issued?',
      a: 'Cards can be created and assigned within minutes, allowing teams to get started without delays.',
    },
    {
      q: 'Can I control how cards are used?',
      a: 'Yes. Spending rules and limits can be set upfront to keep usage clear and consistent.',
    },
  ];

  const defaultCol2 = [
    {
      q: 'What is a corporate card?',
      a: 'A corporate card is a payment card issued to employees or teams for business-related expenses, allowing organisations to manage spending centrally rather than relying on personal cards and reimbursements.',
    },
    {
      q: 'Why switch to a corporate card?',
      a: 'Corporate cards simplify expense management by providing clearer visibility, faster payments, and more control over how company funds are used.',
    },
    {
      q: 'How can I get a corporate card with Ballance?',
      a: 'You can apply through Ballance by setting up an account and completing a short onboarding process. Once approved, cards can be issued to individuals or teams quickly.',
    },
    {
      q: 'Does Ballance support teams?',
      a: 'Ballance is designed to scale, supporting multiple users, roles, and levels of access.',
    },
  ];

  const col1 = t?.col1 || defaultCol1;
  const col2 = t?.col2 || defaultCol2;

  return (
    <section className="bg-[#F9F9F7] text-[#111317] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111317]/10">
      <div className="max-w-6xl mx-auto">
        {/* Category Tag */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#111317]/60 flex items-center gap-2">
            <span className="w-2 h-2 border border-[#111317]/50 inline-block" />
            {tag}
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-[#111317] leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#111317]/70 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 2 Columns of Accordions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Column 1 */}
          <div className="space-y-4">
            {col1.map((item, idx) => {
              const key = `col1-${idx}`;
              const isOpen = !!openIndices[key];
              return (
                <div
                  key={key}
                  className="bg-white border border-[#111317]/10 rounded-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleItem(key)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/50 transition-colors"
                  >
                    <span className="font-sans text-base sm:text-lg font-medium text-[#111317]">
                      {item.q}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#F0EFE9] flex items-center justify-center text-[#111317]/60">
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#FF3E24]' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#111317]/70 leading-relaxed border-t border-[#111317]/5 animate-in fade-in duration-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            {col2.map((item, idx) => {
              const key = `col2-${idx}`;
              const isOpen = !!openIndices[key];
              return (
                <div
                  key={key}
                  className="bg-white border border-[#111317]/10 rounded-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleItem(key)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/50 transition-colors"
                  >
                    <span className="font-sans text-base sm:text-lg font-medium text-[#111317]">
                      {item.q}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#F0EFE9] flex items-center justify-center text-[#111317]/60">
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#FF3E24]' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#111317]/70 leading-relaxed border-t border-[#111317]/5 animate-in fade-in duration-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
