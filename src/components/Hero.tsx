import React from 'react';
import { Command } from 'lucide-react';
import { RollButton } from './RollButton';
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
}) => {
  const title = t?.title || 'Practical technology solutions today. Ambitious questions for tomorrow.';
  const subtitle =
    t?.subtitle ||
    'We build practical technology and AI solutions for complex problems—and keep exploring what comes next. Grounded engineering designed to scale your operations.';
  const seeInAction = t?.seeInAction || 'EXPLORE SOLUTIONS';
  const requestDemo = t?.requestDemo || 'SCHEDULE CONSULTATION';

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-32 sm:pt-40 flex flex-col justify-between overflow-hidden bg-black">
      {/* Hero Earth Wallpaper Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/hero-earth.webp"
          alt="Vector Space Dynamics Earth Wallpaper"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Subtle cinematic gradient vignette for text legibility and smooth depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />
      </div>

      {/* Top Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center my-auto py-12">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-[350] tracking-[-0.05em] text-white leading-[1.1] max-w-4xl mx-auto text-center mb-5 drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-[18px] font-[450] text-white/85 max-w-[560px] mx-auto text-center leading-[1.35] tracking-[-0.036em] mb-7 drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
          {subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <RollButton
            variant="secondary"
            size="md"
            onClick={onOpenVideo}
            aria-label={seeInAction}
            className="rounded-sm h-[42px] px-6 text-[13px] bg-[#161D32]/80 backdrop-blur-md border border-white/15 hover:bg-[#1E2742]"
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

      {/* Flawless bottom transition from Earth wallpaper black into off-white (#F9F9F7) */}
      <div
        className="w-full h-36 sm:h-52 relative z-10 pointer-events-none mt-auto"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            #000000 15%,
            #020A21 28%,
            #071125 42%,
            #121C30 56%,
            #263043 68%,
            #454E5F 78%,
            #727988 86%,
            #A5AAB4 92%,
            #D2D5DA 96%,
            #F3F4F7 98.5%,
            #F9F9F7 100%
          )`,
        }}
      />
    </section>
  );
};

