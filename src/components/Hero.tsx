import React from 'react';
import { Command } from 'lucide-react';
import { RollButton } from './RollButton';
import { CreditCard } from './CreditCard';
import { StatsCounter } from './StatsCounter';
import { TranslationDictionary } from '../utils/i18n';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenVideo: () => void;
  onOpenBlog: () => void;
  t?: TranslationDictionary['hero'];
  statsT?: TranslationDictionary['stats'];
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDemo,
  onOpenVideo,
  onOpenBlog,
  t,
  statsT,
}) => {
  const title = t?.title || 'Move payments without friction';
  const subtitle =
    t?.subtitle ||
    'Clear results from teams using Ballance to manage spending, issue cards, and stay in control as they grow. Payments stay simple, visible, and dependable.';
  const seeInAction = t?.seeInAction || 'SEE IN ACTION';
  const requestDemo = t?.requestDemo || 'REQUEST A DEMO';

  return (
    <section className="relative min-h-screen pt-28 sm:pt-36 pb-20 flex flex-col justify-between overflow-hidden bg-[radial-gradient(ellipse_80%_65%_at_50%_0%,#00031E_0%,#01092F_40%,#031852_75%,#0B3E8E_100%)]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/20 blur-[140px] pointer-events-none rounded-full" />

      {/* Top Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Hero Title: Exact Framer typography */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-[350] tracking-[-0.05em] text-white leading-[1.1] max-w-4xl mx-auto text-center mb-5">
          {title}
        </h1>

        {/* Subtitle: Exact Framer formatting and wrapping */}
        <p className="text-base sm:text-[18px] font-[450] text-white/80 max-w-[560px] mx-auto text-center leading-[1.35] tracking-[-0.036em] mb-7">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <RollButton
            variant="secondary"
            size="md"
            onClick={onOpenVideo}
            aria-label={seeInAction}
            className="rounded-sm h-[42px] px-6 text-[13px] bg-[#161D32] border border-white/10 hover:bg-[#1E2742]"
          >
            {seeInAction}
          </RollButton>

          <RollButton
            variant="primary"
            size="md"
            icon={<Command size={14} className="mr-0.5" />}
            onClick={onOpenDemo}
            aria-label={requestDemo}
            className="rounded-sm h-[42px] px-6 text-[13px] bg-[#FF3E24] hover:bg-[#e6351d] shadow-lg shadow-[#FF3E24]/20 border-0"
          >
            {requestDemo}
          </RollButton>
        </div>
      </div>

      {/* Hero Visual: Woman + Floating Card */}
      <div className="relative mt-6 sm:mt-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        {/* Woman Image */}
        <div className="relative w-full max-w-3xl aspect-[16/11] sm:aspect-[16/10] overflow-hidden flex items-end justify-center">
          <img
            src="https://framerusercontent.com/images/9r5XmI1lXI9KcCeKmM5JkMYgZB8.png?width=1920&height=2107"
            alt="Vector Space modern payments portrait"
            className="w-full h-full object-contain object-bottom pointer-events-none drop-shadow-2xl"
          />

          {/* Floating Credit Card positioned right over hands */}
          <div className="absolute bottom-6 sm:bottom-10 z-20 transition-transform duration-500">
            <CreditCard />
          </div>
        </div>
      </div>

      {/* Key Metrics Counter Section */}
      <div className="relative z-10 w-full mt-10">
        <StatsCounter t={statsT} />
      </div>

      {/* Fixed/Sticky "Made in Framer" Badge in bottom right as shown in screenshot */}
      <div className="fixed bottom-4 right-4 z-40 pointer-events-auto">
        <a
          href="https://framer.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-white text-black shadow-lg hover:shadow-xl hover:scale-105 transition-all text-xs font-medium border border-black/5"
          aria-label="Made in Framer"
        >
          {/* Framer Geometric F logo */}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H16V5.33333H10.6667L5.33333 10.6667H16V16H0L5.33333 10.6667L0 5.33333V0Z" fill="black" />
          </svg>
          <span>Made in Framer</span>
        </a>
      </div>

      {/* Smooth transition to light section */}
      <div className="w-full h-24 bg-gradient-to-b from-transparent to-[#F9F9F7] pointer-events-none absolute bottom-0 left-0 right-0" />
    </section>
  );
};
