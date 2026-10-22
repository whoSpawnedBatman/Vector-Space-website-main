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

  // Card order and photos
  const defaultStories = [
    {
      metric: '99.98%',
      subtitle: 'uptime across critical services',
      tags: ['Cloud', 'Infrastructure'],
      company: 'Enterprise Logistics Group',
      image: '/assets/stories/story-1-600.webp',
      srcSet: '/assets/stories/story-1-300.webp 300w, /assets/stories/story-1-600.webp 600w',
      quote: 'VSD brought the technical rigour and architectural clarity our systems desperately needed.',
    },
    {
      metric: '65%',
      subtitle: 'reduction in manual data triage',
      tags: ['AI Solutions', 'Automation'],
      company: 'Nexus Analytics',
      image: '/assets/stories/story-2-600.webp',
      srcSet: '/assets/stories/story-2-300.webp 300w, /assets/stories/story-2-600.webp 600w',
      quote: 'Their AI pipelines delivered measurable accuracy from day one without over-promising.',
    },
    {
      metric: '4x',
      subtitle: 'throughput capacity expansion',
      tags: ['Distributed Systems', 'IT'],
      company: 'Apex Core Networks',
      image: '/assets/stories/story-3-600.webp',
      srcSet: '/assets/stories/story-3-300.webp 300w, /assets/stories/story-3-600.webp 600w',
      quote: 'Disciplined engineering, clear communication, and seamless zero-downtime execution.',
    },
    {
      metric: '< 15ms',
      subtitle: 'pipeline processing latency',
      tags: ['Data Engineering', 'Real-time'],
      company: 'Strata Tech Labs',
      image: '/assets/stories/story-4-600.webp',
      srcSet: '/assets/stories/story-4-300.webp 300w, /assets/stories/story-4-600.webp 600w',
      quote: 'VSD solved our high-volume bottleneck where three other vendors failed.',
    },
    {
      metric: '100%',
      subtitle: 'compliance across audit frameworks',
      tags: ['Security', 'Governance'],
      company: 'Horizon Health Data',
      image: '/assets/stories/story-5-600.webp',
      srcSet: '/assets/stories/story-5-300.webp 300w, /assets/stories/story-5-600.webp 600w',
      quote: 'Clear thinking, meticulous documentation, and dependable system security.',
    },
  ];

  const stories = t?.items
    ? t.items.map((item, idx) => ({
        ...item,
        image: defaultStories[idx % defaultStories.length].image,
        srcSet: defaultStories[idx % defaultStories.length].srcSet,
      }))
    : defaultStories;

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

    // Only do scroll math while the marquee is near the viewport
    let isVisible = false;
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? false;
        const el = trackRef.current;
        if (!el) return;
        // Only promote the wide track to its own GPU layer while on screen
        el.style.willChange = isVisible ? 'transform' : 'auto';
        if (!isVisible) el.style.transform = 'none';
      },
      { rootMargin: '200px' }
    );
    visibilityObserver.observe(section);

    let lastScroll = window.scrollY;
    let pendingScroll = window.scrollY;
    let currentX = 0;
    let rafId = 0;

    const render = () => {
      if (!trackRef.current) return;
      const delta = pendingScroll - lastScroll;
      lastScroll = pendingScroll;

      // Scroll speed factor
      currentX += delta * 0.75;

      const setWidth = setWidthRef.current || stories.length * 320;
      const wrappedX = ((currentX % setWidth) + setWidth) % setWidth;
      currentX = wrappedX;

      trackRef.current.style.transform = `translate3d(${-wrappedX}px, 0, 0)`;
    };

    const onScrollUpdate = (scrollY: number) => {
      if (!isVisible) {
        lastScroll = scrollY;
        return;
      }
      pendingScroll = scrollY;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        render();
      });
    };

    // Attach to Lenis
    let unsubscribeLenis: (() => void) | null = null;

    const attachLenis = (lenis: any) => {
      if (!lenis || unsubscribeLenis) return;
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
    const handleLenisReady = (e: any) => {
      attachLenis(e.detail || (window as any).__lenis);
    };
    if (globalLenis) {
      attachLenis(globalLenis);
    } else {
      window.addEventListener('lenis-ready', handleLenisReady);
    }

    // Native scroll fallback
    const onNativeScroll = () => {
      if (unsubscribeLenis) return;
      onScrollUpdate(window.scrollY);
    };
    window.addEventListener('scroll', onNativeScroll, { passive: true });

    return () => {
      visibilityObserver.disconnect();
      window.removeEventListener('resize', measureSetWidth);
      window.removeEventListener('scroll', onNativeScroll);
      window.removeEventListener('lenis-ready', handleLenisReady);
      if (rafId) cancelAnimationFrame(rafId);
      if (unsubscribeLenis) unsubscribeLenis();
    };
  }, [stories.length]);

  return (
    <section
      id="stories"
      ref={sectionRef}
      className="bg-[#F9F9F7] text-[#111317] py-24 sm:py-32 overflow-hidden border-b border-[#111317]/10 scroll-mt-20"
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
              className="group relative w-[260px] sm:w-[300px] h-[310px] sm:h-[350px] rounded-sm overflow-hidden flex flex-col justify-between p-6 sm:p-7 cursor-pointer shrink-0 border border-black/10 shadow-sm"
            >
              {/* Card Photo Background using optimized img element */}
              <img
                src={story.image}
                srcSet={story.srcSet}
                sizes="(max-width: 640px) 260px, 300px"
                width={600}
                height={900}
                alt={story.company}
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
                decoding="async"
                draggable={false}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 pointer-events-none" />

              {/* Card Content Top: Number and Subtitle */}
              <div className="relative z-10 pointer-events-none">
                <div className="font-sans text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-white leading-none mb-2">
                  {story.metric}
                </div>
                <p className="text-xs sm:text-[13px] font-normal text-white/85 leading-snug">
                  {story.subtitle}
                </p>
              </div>

              {/* Card Tags Bottom */}
              <div className="relative z-10 flex flex-wrap gap-1.5 pointer-events-none">
                {story.tags.map((tagItem, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 bg-black/70 text-white/90 border border-white/20 rounded-sm"
                  >
                    {tagItem}
                  </span>
                ))}
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
