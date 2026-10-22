import React, { useRef, useLayoutEffect } from 'react';
import { Command, Compass, Radio } from 'lucide-react';
import { RollButton } from './RollButton';
import { TranslationDictionary } from '../utils/i18n';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  t,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  const title = t?.title || 'Practical technology solutions today. Ambitious questions for tomorrow.';
  const subtitle =
    t?.subtitle ||
    'We build practical technology and AI solutions for complex problems—and keep exploring what comes next. Grounded engineering designed to scale your operations.';
  const seeInAction = t?.seeInAction || 'EXPLORE SOLUTIONS';
  const requestDemo = t?.requestDemo || 'SCHEDULE CONSULTATION';

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // 1. Earth background camera zoom into atmospheric depth
      tl.to(
        bgRef.current,
        {
          scale: 1.25,
          yPercent: 10,
          filter: 'brightness(0.35) contrast(1.2)',
          ease: 'power1.inOut',
        },
        0
      );

      // 2. Hero content peels away into 3D z-space with depth blur
      tl.to(
        contentRef.current,
        {
          scale: 1.15,
          y: -100,
          opacity: 0,
          filter: 'blur(10px)',
          ease: 'power1.in',
        },
        0
      );

      // 3. HUD telemetry fades out smoothly
      tl.to(
        hudRef.current,
        {
          opacity: 0,
          y: -20,
          ease: 'none',
        },
        0.1
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-black select-none"
    >
      {/* Cinematic Earth Wallpaper with GSAP camera zoom */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none overflow-hidden will-change-transform"
      >
        <img
          src="/assets/hero-earth.webp"
          alt="Vector Space Dynamics Earth Horizon"
          width={2048}
          height={1152}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/95 pointer-events-none" />
      </div>

      {/* Floating HUD Telemetry - Top corners */}
      <div
        ref={hudRef}
        className="relative z-20 pt-28 sm:pt-32 px-6 sm:px-12 flex justify-between items-center font-mono text-[11px] tracking-wider text-white/60 pointer-events-none"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3E24] animate-ping" />
          <span className="text-[#FF3E24] font-semibold">VSD // SYSTEM ACTIVE</span>
          <span className="hidden md:inline text-white/30">| LAT 34.0522° N // ORBITAL 51.6°</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-white/50">
          <div className="flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>MESH LATENCY: 12ms</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>DISPATCH: 2026</span>
          </div>
        </div>
      </div>

      {/* Center Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center my-auto py-6 will-change-[transform,opacity,filter]"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 font-mono text-xs tracking-widest text-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF3E24]" />
          <span>DEEP TECH // RESILIENT SYSTEMS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-[350] tracking-[-0.04em] text-white leading-[1.08] max-w-5xl mx-auto text-center mb-6 drop-shadow-[0_4px_40px_rgba(0,0,0,0.9)]">
          {title}
        </h1>

        <p className="text-base sm:text-xl font-normal text-white/85 max-w-[620px] mx-auto text-center leading-[1.4] tracking-[-0.02em] mb-8 drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <RollButton
            variant="secondary"
            size="md"
            onClick={onOpenVideo}
            aria-label={seeInAction}
            className="rounded h-[46px] px-7 text-[13px] bg-[#161D32]/85 backdrop-blur-md border border-white/20 hover:bg-[#1E2742] hover:border-white/40 tracking-wider font-medium"
          >
            {seeInAction}
          </RollButton>

          <RollButton
            variant="primary"
            size="md"
            icon={<Command size={14} className="mr-1 text-white" />}
            onClick={onOpenDemo}
            aria-label={requestDemo}
            className="rounded h-[46px] px-7 text-[13px] bg-[#FF3E24] hover:bg-[#e6351d] shadow-xl shadow-[#FF3E24]/30 border-0 font-medium tracking-wider"
          >
            {requestDemo}
          </RollButton>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-20 pb-8 flex flex-col items-center justify-center font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase pointer-events-none">
        <span>INITIATE DESCENT SEQUENCE</span>
        <div className="mt-2 w-[1px] h-6 bg-gradient-to-b from-[#FF3E24] to-transparent animate-bounce" />
      </div>
    </section>
  );
};
