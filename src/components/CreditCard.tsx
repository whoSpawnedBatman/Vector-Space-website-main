import React, { useState, useRef } from 'react';
import { Wifi } from 'lucide-react';
import { BallanceAsterisk } from './BallanceLogo';
import { calculateCardTilt } from '../utils/calculator';

export const CreditCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    const { rotateX, rotateY } = calculateCardTilt(normX, normY, 14);
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className="relative [perspective:1000px] flex justify-center items-center select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) ${
            isHovered ? 'scale3d(1.04, 1.04, 1.04)' : 'scale3d(1, 1, 1)'
          }`,
          transition: isHovered
            ? 'transform 0.1s ease-out'
            : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="w-[300px] sm:w-[350px] md:w-[410px] aspect-[1.586/1] rounded-2xl p-6 sm:p-7 relative overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/25 shadow-2xl shadow-[#020E3A]/80 transition-shadow duration-300"
      >
        {/* Specular dynamic reflection gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 transition-opacity"
          style={{
            background: `radial-gradient(circle at ${50 + tilt.rotateY * 3}% ${
              50 - tilt.rotateX * 3
            }%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 60%, transparent 80%)`,
          }}
        />

        {/* Subtle holographic grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

        {/* Card Header */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="font-sans font-medium text-white/95 text-base sm:text-lg tracking-tight">
            Travel Élite
          </span>
          <BallanceAsterisk size={20} className="text-white/80" />
        </div>

        {/* Card Middle: EMV Chip & World logo */}
        <div className="relative z-10 mt-6 sm:mt-8 flex items-center gap-4">
          {/* Chip */}
          <div className="w-11 h-8 rounded-md bg-gradient-to-br from-amber-200/80 via-yellow-400/70 to-amber-600/80 p-0.5 border border-white/30 shadow-inner flex flex-col justify-between">
            <div className="w-full h-full rounded-[3px] border border-black/20 flex items-center justify-center relative overflow-hidden">
              <div className="w-full h-[1px] bg-black/20 absolute" />
              <div className="h-full w-[1px] bg-black/20 absolute" />
              <div className="w-4 h-4 rounded-full border border-black/20" />
            </div>
          </div>

          <span className="font-mono text-xs tracking-wider text-white/80 lowercase">world</span>
        </div>

        {/* Card Footer: Contactless waves */}
        <div className="relative z-10 mt-auto pt-6 sm:pt-8 flex items-center justify-end">
          <Wifi size={22} className="text-white/80 rotate-90" />
        </div>
      </div>
    </div>
  );
};
