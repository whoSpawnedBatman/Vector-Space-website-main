import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction?: (action: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectAction,
}) => {
  if (!isOpen) return null;

  const handleLinkClick = (name: string) => {
    if (onSelectAction) onSelectAction(name);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className="fixed inset-0 z-40 bg-[#050B1E]/95 backdrop-blur-2xl text-white pt-28 pb-16 px-6 sm:px-10 lg:px-16 overflow-y-auto animate-in fade-in duration-300"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pt-4">
        {/* Navigation Columns (5 cols) */}
        <div className="md:col-span-5 grid grid-cols-3 gap-6 sm:gap-8">
          {/* Platform */}
          <div>
            <h4 className="font-mono text-xs text-white/50 uppercase tracking-widest mb-6">
              Platform
            </h4>
            <ul className="space-y-4">
              {['Ballance* Home', 'Company', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item)}
                    className="text-left font-normal text-base sm:text-lg text-white/90 hover:text-white transition-colors cursor-pointer group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono text-xs text-white/50 uppercase tracking-widest mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleLinkClick('Blog')}
                  className="text-left font-normal text-base sm:text-lg text-white/90 hover:text-white transition-colors cursor-pointer group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Blog</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('Careers')}
                  className="text-left font-normal text-base sm:text-lg text-white/90 hover:text-white transition-colors cursor-pointer group flex flex-col sm:flex-row sm:items-center gap-1.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Careers</span>
                  <span className="font-mono text-[10px] tracking-wider px-1.5 py-0.5 rounded bg-white/10 text-white/70">
                    WE ARE HIRING!
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('Customer Stories')}
                  className="text-left font-normal text-base sm:text-lg text-white/90 hover:text-white transition-colors cursor-pointer group flex items-center"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Customer Stories
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-xs text-white/50 uppercase tracking-widest mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {['Cookie Policy', 'Terms & Conditions', 'Privacy Policy', '404'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleLinkClick(item)}
                    className="text-left font-normal text-base sm:text-lg text-white/90 hover:text-white transition-colors cursor-pointer group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured Blog Posts (7 cols) */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div
            onClick={() => handleLinkClick('Designing cards that people actually use')}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded bg-[#10172D] mb-4 border border-white/10">
              <img
                src="https://framerusercontent.com/images/mdmrUi06cr9lMzUxKfXbfWorg.png?width=3641&height=2048"
                alt="Designing cards that people actually use"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium tracking-tight text-white/95 group-hover:text-white transition-colors leading-snug">
                Designing cards that people actually use
              </h3>
              <ArrowUpRight
                size={18}
                className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
              />
            </div>
            <span className="font-mono text-xs text-white/40 tracking-wider uppercase mt-2">
              PRODUCT
            </span>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => handleLinkClick('Reducing friction in business spending')}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded bg-[#10172D] mb-4 border border-white/10">
              <img
                src="https://framerusercontent.com/images/xFUlLWSdna5etFgvfAD27DvvQ.jpg?width=6123&height=4082"
                alt="Reducing friction in business spending"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium tracking-tight text-white/95 group-hover:text-white transition-colors leading-snug">
                Reducing friction in business spending
              </h3>
              <ArrowUpRight
                size={18}
                className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
              />
            </div>
            <span className="font-mono text-xs text-white/40 tracking-wider uppercase mt-2">
              OPERATIONS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
