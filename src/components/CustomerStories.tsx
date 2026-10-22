import React, { useRef, useEffect } from 'react';
import { TranslationDictionary } from '../utils/i18n';

interface StoryModalProps {
  onSelectStory?: (title: string) => void;
  t?: TranslationDictionary['stories'];
}

export const CustomerStories: React.FC<StoryModalProps> = ({ onSelectStory, t }) => {
  const title = t?.title || 'Our Track Record';
  const mainQuote =
    t?.mainQuote ||
    '“We build practical technology solutions for complex problems and keep exploring what comes next.”';
  const author = t?.author || 'Aman MB , Founder , CEO Vector Space Dynamics';

  // Card order
  const defaultStories = [
    {
      metric: '99.98%',
      subtitle: 'uptime across critical services',
      tags: ['Cloud', 'Infrastructure'],
      company: 'Enterprise Logistics Group',
      quote: 'VSD brought the technical rigour and architectural clarity our systems desperately needed.',
    },
    {
      metric: '65%',
      subtitle: 'reduction in manual data triage',
      tags: ['AI Solutions', 'Automation'],
      company: 'Nexus Analytics',
      quote: 'Their AI pipelines delivered measurable accuracy from day one without over-promising.',
    },
    {
      metric: '4x',
      subtitle: 'throughput capacity expansion',
      tags: ['Distributed Systems', 'IT'],
      company: 'Apex Core Networks',
      quote: 'Disciplined engineering, clear communication, and seamless zero-downtime execution.',
    },
    {
      metric: '< 15ms',
      subtitle: 'pipeline processing latency',
      tags: ['Data Engineering', 'Real-time'],
      company: 'Strata Tech Labs',
      quote: 'VSD solved our high-volume bottleneck where three other vendors failed.',
    },
    {
      metric: '100%',
      subtitle: 'compliance across audit frameworks',
      tags: ['Security', 'Governance'],
      company: 'Horizon Health Data',
      quote: 'Clear thinking, meticulous documentation, and dependable system security.',
    },
  ];

  const stories = t?.items || defaultStories;

  // 3 identical sets for seamless continuous wrap without edge artifacts
  const marqueeItems = [...stories, ...stories, ...stories];

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    // Measure exact width of 1 set of items
    const measureSetWidth = () => {
      if (track.children.length > stories.length) {
        const first = track.children[0] as HTMLElement;
        const nextSetFirst = track.children[stories.length] as HTMLElement;
        if (first && nextSetFirst) {
          const calculatedWidth = nextSetFirst.offsetLeft - first.offsetLeft;
          if (calculatedWidth > 0) {
            setWidthRef.current = calculatedWidth;
            return;
          }
        }
      }
      setWidthRef.current = stories.length * 320;
    };

    measureSetWidth();
    window.addEventListener('resize', measureSetWidth, { passive: true });

    // Track scroll position
    let lastScroll = window.scrollY;
    let currentX = 0;

    const onScrollUpdate = (scrollY: number) => {
      if (!trackRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Skip transform calculations if section is far outside the viewport
      if (rect.top > window.innerHeight + 300 || rect.bottom < -300) {
        lastScroll = scrollY;
        return;
      }

      const delta = scrollY - lastScroll;
      lastScroll = scrollY;

      // Scroll speed factor
      currentX += delta * 0.75;

      const setWidth = setWidthRef.current || stories.length * 320;
      const wrappedX = ((currentX % setWidth) + setWidth) % setWidth;

      trackRef.current.style.transform = `translate3d(${-wrappedX}px, 0, 0)`;
    };

    // Attach to Lenis
    let unsubscribeLenis: (() => void) | null = null;
    let hasLenis = false;

    const attachLenis = (lenis: any) => {
      if (!lenis || unsubscribeLenis) return;
      hasLenis = true;
      const onLenisScroll = (e: any) => {
        const scrollY = typeof e.scroll === 'number' ? e.scroll : window.scrollY;
        onScrollUpdate(scrollY);
      };
      lenis.on('scroll', onLenisScroll);
      unsubscribeLenis = () => {
        lenis.off('scroll', onLenisScroll);
      };
    };

    const globalLenis = (window as any).__lenis;
    if (globalLenis) {
      attachLenis(globalLenis);
    } else {
      const handleLenisReady = (e: any) => {
        attachLenis(e.detail || (window as any).__lenis);
      };
      window.addEventListener('lenis-ready', handleLenisReady);
    }

    // Native scroll fallback
    const onNativeScroll = () => {
      if (hasLenis) return;
      onScrollUpdate(window.scrollY);
    };
    window.addEventListener('scroll', onNativeScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', measureSetWidth);
      window.removeEventListener('scroll', onNativeScroll);
      if (unsubscribeLenis) unsubscribeLenis();
    };
  }, [stories.length]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F9F9F7] text-[#111317] py-24 sm:py-32 overflow-hidden border-b border-[#111317]/10"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 mb-14 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-normal tracking-[-0.03em] text-[#111317] leading-tight">
          {title}
        </h2>
      </div>

      {/* Lenis Scroll-Driven Cards Track */}
      <div className="relative w-full overflow-hidden select-none py-4">
        <div
          ref={trackRef}
          className="marquee-track flex gap-4 sm:gap-5 shrink-0 items-center select-none"
        >
          {marqueeItems.map((story, idx) => (
            <div
              key={idx}
              onClick={() => onSelectStory && onSelectStory(`${story.company}: ${story.subtitle}`)}
              className="group relative w-[260px] sm:w-[300px] h-[310px] sm:h-[350px] rounded-sm overflow-hidden flex flex-col justify-between p-6 sm:p-7 cursor-pointer shrink-0 border border-[#111317]/15 bg-[#0C0F17] hover:border-[#FF3E24]/50 shadow-md transition-all duration-300"
            >
              {/* Card Content Top: Number and Subtitle */}
              <div className="relative z-10 pointer-events-none">
                <div className="font-sans text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-white leading-none mb-2">
                  {story.metric}
                </div>
                <p className="text-xs sm:text-[13px] font-normal text-white/80 leading-snug">
                  {story.subtitle}
                </p>
              </div>

              {/* Card Company & Quote Preview */}
              <div className="relative z-10 pointer-events-none">
                <p className="text-xs text-white/60 italic leading-relaxed line-clamp-3 mb-4">
                  "{story.quote}"
                </p>
                <div className="text-[11px] font-mono text-white/90 uppercase tracking-wider mb-3">
                  {story.company}
                </div>
                {/* Card Tags Bottom */}
                <div className="flex flex-wrap gap-1.5">
                  {story.tags.map((tagItem, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 bg-white/10 text-white/90 border border-white/10 rounded-sm"
                    >
                      {tagItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Heroic Quote Box with 5 Stars and Centered Attribution */}
      <div className="max-w-3xl mx-auto px-6 mt-16 sm:mt-20 text-center">
        {/* 5 Subtle Stars */}
        <div className="flex justify-center items-center gap-1.5 text-neutral-400 text-xs sm:text-sm mb-6 select-none">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        {/* Signature Quote */}
        <blockquote className="text-2xl sm:text-3xl md:text-[34px] font-normal tracking-tight text-[#111317] leading-[1.25]">
          {mainQuote}
        </blockquote>

        {/* Founder Attribution */}
        {author.includes('Aman MB') ? (
          <div className="mt-7 flex flex-col items-center gap-1 font-mono uppercase">
            <span className="text-[13px] sm:text-[14px] font-bold text-[#111317] tracking-[0.16em]">
              Aman MB
            </span>
            <span className="text-[10.5px] sm:text-[11.5px] text-[#111317]/65 tracking-[0.18em]">
              Founder, CEO · Vector Space Dynamics
            </span>
          </div>
        ) : (
          <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[#111317]/60">
            {author}
          </div>
        )}
      </div>
    </section>
  );
};
