import React, { useEffect, useState, useRef } from 'react';
import { calculateCounterValue } from '../utils/calculator';
import { TranslationDictionary } from '../utils/i18n';

interface StatsCounterProps {
  t?: TranslationDictionary['stats'];
}

interface StatItemProps {
  endValue: number;
  suffix: string;
  prefix?: string;
  labelTop: string;
  labelBottom: string;
}

const StatItem: React.FC<StatItemProps> = ({
  endValue,
  suffix,
  prefix = '',
  labelTop,
  labelBottom,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check immediate visibility or intersection
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Fallback trigger after 600ms in case observer is delayed
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 600);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp: number | null = null;
    const duration = 1500; // ms

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const val = calculateCounterValue(0, endValue, progress);
      setCurrentValue(val);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasAnimated, endValue]);

  return (
    <div ref={containerRef} className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="font-sans text-5xl sm:text-6xl lg:text-[68px] font-normal tracking-[-0.04em] text-white leading-none mb-3">
        {prefix}
        {currentValue}
        {suffix}
      </div>
      <p className="text-white/85 text-sm sm:text-base leading-snug font-normal">
        {labelTop}
        <br />
        <span className="text-white/65">{labelBottom}</span>
      </p>
    </div>
  );
};

export const StatsCounter: React.FC<StatsCounterProps> = ({ t }) => {
  const stat1 = t?.stat1 || {
    top: 'increase in spending visibility',
    bottom: 'within the first year',
  };
  const stat2 = t?.stat2 || {
    top: 'faster setup time',
    bottom: 'from onboarding to first use',
  };
  const stat3 = t?.stat3 || {
    top: 'reduction in manual follow-ups',
    bottom: 'across payment workflows',
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
      <StatItem
        endValue={82}
        suffix="%"
        labelTop={stat1.top}
        labelBottom={stat1.bottom}
      />
      <StatItem
        endValue={10}
        suffix="x"
        labelTop={stat2.top}
        labelBottom={stat2.bottom}
      />
      <StatItem
        endValue={54}
        suffix="%"
        labelTop={stat3.top}
        labelBottom={stat3.bottom}
      />
    </div>
  );
};
