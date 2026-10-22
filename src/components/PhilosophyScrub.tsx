import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PhilosophyScrubProps {
  quote?: string;
  subtext?: string;
}

export const PhilosophyScrub: React.FC<PhilosophyScrubProps> = ({
  quote = "WE DO NOT BUILD SOFTWARE TO PATCH LEGACY SYSTEMS. WE ENGINEER AUTONOMOUS PLATFORMS, PLANETARY INFRASTRUCTURE, AND GROUNDED INTELLIGENCE DESIGNED TO SCALE INTO THE FUTURE.",
  subtext = "Vector Space Dynamics bridges raw computational physics and production realities. Every architecture we deploy is engineered with mathematical rigor, zero-downtime resilience, and autonomous adaptability.",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;

    const ctx = gsap.context(() => {
      const words = textEl.querySelectorAll('.scrub-word');
      const subwords = subtextRef.current?.querySelectorAll('.sub-word') || [];

      // Main scrub timeline pinned for intense editorial focus
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=160%',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // 1. Badge slides in
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, ease: 'none', duration: 0.1 }
      );

      // 2. Primary quote illuminates word-by-word
      tl.fromTo(
        words,
        {
          opacity: 0.12,
          filter: 'blur(6px)',
          y: 8,
          color: '#4A5568',
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          color: '#FFFFFF',
          stagger: 0.04,
          ease: 'power2.out',
          duration: 0.8,
        },
        0.05
      );

      // 3. Subtext softly fades in with lag
      if (subwords.length > 0) {
        tl.fromTo(
          subwords,
          { opacity: 0.1, y: 4 },
          {
            opacity: 0.8,
            y: 0,
            stagger: 0.02,
            ease: 'power1.out',
            duration: 0.4,
          },
          0.5
        );
      }
    }, container);

    return () => ctx.revert();
  }, [quote, subtext]);

  const words = quote.split(' ');
  const subwords = subtext.split(' ');

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#030611] text-white flex flex-col justify-center items-center px-6 sm:px-12 lg:px-24 overflow-hidden border-t border-b border-white/5"
    >
      {/* Background ambient telemetry glow & grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#FF3E24]/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Top HUD Tag */}
        <div
          ref={badgeRef}
          className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#FF3E24] mb-8 uppercase"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#FF3E24] animate-pulse" />
          <span>[02 // CORE ETHOS]</span>
          <span className="text-white/30">— SPACE &amp; COMPUTATION</span>
        </div>

        {/* Massive Editorial Quote */}
        <h2
          ref={textRef}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-[350] tracking-[-0.035em] leading-[1.2] text-left select-none"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="scrub-word inline-block mr-[0.28em] will-change-[opacity,transform,filter]"
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Secondary Subtext Paragraph */}
        <p
          ref={subtextRef}
          className="mt-10 sm:mt-14 max-w-2xl text-base sm:text-lg font-normal text-white/60 leading-relaxed font-sans"
        >
          {subwords.map((sub, i) => (
            <span key={i} className="sub-word inline-block mr-[0.25em] will-change-[opacity,transform]">
              {sub}
            </span>
          ))}
        </p>

        {/* Bottom Technical Telemetry Bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between font-mono text-[11px] tracking-wider text-white/40 uppercase">
          <div>LATENCY TOLERANCE: ZERO-BUDGET</div>
          <div className="hidden sm:block">SYSTEM SPEC: DISTRIBUTED NEURAL COGNITION</div>
          <div className="text-[#FF3E24]/80">SCROLL TO ADVANCE SEQUENCE ↓</div>
        </div>
      </div>
    </section>
  );
};
