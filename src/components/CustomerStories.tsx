import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TranslationDictionary } from '../utils/i18n';

interface StoryModalProps {
  onSelectStory?: (title: string) => void;
  t?: TranslationDictionary['stories'];
}

export const CustomerStories: React.FC<StoryModalProps> = ({ onSelectStory, t }) => {
  const tag = t?.tag || 'REAL MESSAGES - REAL FEEDBACK';
  const title = t?.title || 'What They Say About Ballance';
  const mainQuote =
    t?.mainQuote ||
    '“Ballance* understands that good financial tools stay out of the way. They give us confidence without adding complexity.”';
  const author = t?.author || 'HEAD OF FINANCE — SUMMIT FORGE';

  const defaultStories = [
    {
      metric: '88%',
      subtitle: 'increase in speed to market',
      tags: ['B2B', 'Fintech'],
      company: 'Summit Forge',
      quote: 'Ballance understood what our payments architecture needed from day one.',
    },
    {
      metric: '18 hours',
      subtitle: 'saved each month on finance',
      tags: ['Religion', 'Nonprofit'],
      company: 'Grace Stewardship Foundation',
      quote: 'Clear accountability without creating administrative drag for our staff.',
    },
    {
      metric: '10x',
      subtitle: 'faster turnaround time',
      tags: ['Legal', 'Professional Services'],
      company: 'North Valley Legal',
      quote: 'Expense reconciliation used to take days. Now it is practically automated.',
    },
    {
      metric: '46%',
      subtitle: 'decrease in manual reconciliation',
      tags: ['healthcare', 'patient care'],
      company: 'Apex Health Systems',
      quote: 'Sensitive care facilities require strict compliance and immediate clarity.',
    },
    {
      metric: '> 50',
      subtitle: 'vendors managed across collections',
      tags: ['fashion', 'creative retail'],
      company: 'Solace Studio',
      quote: 'Managing global suppliers and seasonal payments without friction.',
    },
  ];

  const stories = t?.items || defaultStories;

  return (
    <section className="bg-[#F9F9F7] text-[#111317] py-24 sm:py-32 overflow-hidden border-b border-[#111317]/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-16">
        {/* Category Tag */}
        <div className="flex justify-center mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#111317]/60 flex items-center gap-2">
            <span className="w-2 h-2 border border-[#111317]/50 inline-block" />
            {tag}
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-[#111317] text-center leading-tight">
          {title}
        </h2>
      </div>

      {/* Customer Metric Cards Carousel */}
      <div className="relative w-full overflow-x-auto no-scrollbar pb-6 px-6 sm:px-10">
        <div className="flex gap-6 max-w-max mx-auto">
          {stories.map((story, idx) => (
            <div
              key={idx}
              onClick={() => onSelectStory && onSelectStory(`${story.company}: ${story.subtitle}`)}
              className="group w-[280px] sm:w-[320px] bg-white border border-[#111317]/10 rounded-sm p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#111317]/25 hover:-translate-y-1 transition-all duration-300 cursor-pointer shrink-0"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-sans text-4xl sm:text-5xl font-normal tracking-[-0.04em] text-[#111317]">
                    {story.metric}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-[#111317]/30 group-hover:text-[#FF3E24] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <p className="text-sm font-medium text-[#111317]/80 leading-snug">
                  {story.subtitle}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#111317]/10 flex flex-wrap gap-2">
                {story.tags.map((tagItem, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[11px] uppercase tracking-wider px-2 py-1 bg-[#F0EFE9] text-[#111317]/70 rounded"
                  >
                    {tagItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Heroic Quote Box */}
      <div className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-[#111317] leading-relaxed">
          {mainQuote}
        </blockquote>
        <div className="mt-6 font-mono text-xs uppercase tracking-widest text-[#111317]/50">
          {author}
        </div>
      </div>
    </section>
  );
};
