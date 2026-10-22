import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const xSetCursor = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3.out' });
    const ySetCursor = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3.out' });
    const xSetDot = gsap.quickTo(dot, 'x', { duration: 0.05, ease: 'none' });
    const ySetDot = gsap.quickTo(dot, 'y', { duration: 0.05, ease: 'none' });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      xSetCursor(mouse.x);
      ySetCursor(mouse.y);
      xSetDot(mouse.x);
      ySetDot(mouse.y);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('button, a, [role="button"], .interactive-hover');
      if (interactive) {
        gsap.to(cursor, { scale: 2.2, borderColor: '#FF3E24', backgroundColor: 'rgba(255, 62, 36, 0.1)', duration: 0.2 });
      } else {
        gsap.to(cursor, { scale: 1, borderColor: 'rgba(255, 255, 255, 0.4)', backgroundColor: 'transparent', duration: 0.2 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-white/40 pointer-events-none transition-colors duration-150 will-change-transform"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#FF3E24] pointer-events-none will-change-transform"
      />
    </div>
  );
};
