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
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          observer.disconnect(); // stop watching once triggered
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []); // run once on mount only

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
    <div ref={containerRef} className="flex flex-col items-center text-center">
      <div className="font-sans text-5xl sm:text-6xl lg:text-[68px] font-normal tracking-[-0.04em] text-white leading-none mb-3">
        {prefix}
        {currentValue}
        {suffix}
      </div>
      <p className="text-white/80 text-xs sm:text-sm leading-snug font-normal max-w-[220px]">
        {labelTop} {labelBottom}
      </p>
    </div>
  );
};

export const StatsCounter: React.FC<StatsCounterProps> = ({ t }) => {
  const stat1 = t?.stat1 || {
    top: 'production system reliability',
    bottom: 'across mission-critical deployments',
  };
  const stat2 = t?.stat2 || {
    top: 'faster time to deployment',
    bottom: 'with modular architecture & AI pipelines',
  };
  const stat3 = t?.stat3 || {
    top: 'reduction in infrastructure friction',
    bottom: 'through disciplined automation & monitoring',
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
      <StatItem
        endValue={99}
        suffix=".9%"
        labelTop={stat1.top}
        labelBottom={stat1.bottom}
      />
      <StatItem
        endValue={4}
        suffix="x"
        labelTop={stat2.top}
        labelBottom={stat2.bottom}
      />
      <StatItem
        endValue={65}
        suffix="%"
        labelTop={stat3.top}
        labelBottom={stat3.bottom}
      />
    </div>
  );
};
