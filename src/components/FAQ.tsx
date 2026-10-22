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

  const tag = t?.tag || 'QUESTIONS & CLARITY';
  const title = t?.title || 'Frequently Asked Questions.';
  const subtitle =
    t?.subtitle ||
    'Clear answers about our technology stack, engagement model, AI capabilities, and long-term vision.';

  const defaultCol1 = [
    {
      q: 'What does Vector Space do today?',
      a: 'We are a technology-driven organisation delivering practical IT solutions, custom software architecture, cloud engineering, and applied artificial intelligence for businesses solving complex problems.',
    },
    {
      q: 'What is your approach to AI development?',
      a: 'We focus on intelligent solutions grounded in reality. Rather than generic wrappers, we design domain-specific models, deterministic retrieval pipelines, and robust evaluation systems.',
    },
    {
      q: 'How does VSD work with client teams?',
      a: 'We partner directly with technical leaders and stakeholders to diagnose core bottlenecks, architect modular solutions, and execute with disciplined engineering standards.',
    },
    {
      q: 'Can you modernize existing legacy systems?',
      a: 'Yes. We specialize in non-destructive incremental refactoring, API abstraction layers, and cloud migrations designed to maintain business continuity throughout.',
    },
  ];

  const defaultCol2 = [
    {
      q: 'What is VSD’s long-term vision in space & scientific research?',
      a: 'While our current business focuses on high-impact enterprise IT and AI solutions, our long-term roadmap expands into autonomous navigation systems, orbital computation, and scientific exploration.',
    },
    {
      q: 'What industries do you currently serve?',
      a: 'We work across enterprise software, data-intensive logistics, finance infrastructure, health data systems, and emerging technology ventures.',
    },
    {
      q: 'What technology stacks and cloud providers do you support?',
      a: 'We build platform-agnostic architectures across AWS, GCP, Azure, and on-premises environments, emphasizing modern typed languages, containerization, and automated CI/CD.',
    },
    {
      q: 'How do we start a collaboration or project?',
      a: 'Reach out through our consultation form. We will schedule a technical discovery session to understand your architecture, goals, and delivery timeline.',
    },
  ];

  const col1 = t?.col1 || defaultCol1;
  const col2 = t?.col2 || defaultCol2;

  return (
    <section id="faq" className="bg-[#F9F9F7] text-[#111317] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-[#111317]/10 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Left-Aligned Header */}

        {/* Left-Aligned Header */}
        <div className="text-left max-w-2xl mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-[#111317] leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#111317]/70 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 2 Columns of Minimalist Bordered Accordions (Exact match to screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 items-start">
          {/* Column 1 */}
          <div>
            {col1.map((item, idx) => {
              const key = `col1-${idx}`;
              const isOpen = !!openIndices[key];
              return (
                <div key={key} className="border-b border-[#111317]/15">
                  <button
                    onClick={() => toggleItem(key)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span className="font-sans text-base sm:text-[17px] font-normal text-[#111317]">
                      {item.q}
                    </span>
                    <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-[3px] border border-[#111317]/20 flex items-center justify-center text-[#111317]/60 hover:border-[#111317]/40 transition-colors">
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#FF3E24]' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 text-sm sm:text-base text-[#111317]/70 leading-relaxed font-normal animate-in fade-in duration-200">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div>
            {col2.map((item, idx) => {
              const key = `col2-${idx}`;
              const isOpen = !!openIndices[key];
              return (
                <div key={key} className="border-b border-[#111317]/15">
                  <button
                    onClick={() => toggleItem(key)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-5 sm:py-6 flex items-center justify-between gap-4 cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span className="font-sans text-base sm:text-[17px] font-normal text-[#111317]">
                      {item.q}
                    </span>
                    <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-[3px] border border-[#111317]/20 flex items-center justify-center text-[#111317]/60 hover:border-[#111317]/40 transition-colors">
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#FF3E24]' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 text-sm sm:text-base text-[#111317]/70 leading-relaxed font-normal animate-in fade-in duration-200">
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
