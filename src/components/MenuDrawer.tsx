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
              {['Vector Space', 'Capabilities', 'Principles', 'Contact Us'].map((item) => (
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
            onClick={() => handleLinkClick('Engineering AI architectures for enterprise operations')}
            className="group cursor-pointer flex flex-col justify-between p-6 rounded bg-[#10172D]/60 border border-white/10 hover:border-white/25 hover:bg-[#10172D] transition-all min-h-[160px]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base sm:text-lg font-medium tracking-tight text-white/95 group-hover:text-white transition-colors leading-snug">
                Engineering AI architectures for enterprise operations
              </h3>
              <ArrowUpRight
                size={18}
                className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
              />
            </div>
            <span className="font-mono text-[11px] text-[#FF3E24] tracking-wider uppercase mt-4">
              ARTIFICIAL INTELLIGENCE
            </span>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => handleLinkClick('High-availability cloud systems beyond traditional infrastructure')}
            className="group cursor-pointer flex flex-col justify-between p-6 rounded bg-[#10172D]/60 border border-white/10 hover:border-white/25 hover:bg-[#10172D] transition-all min-h-[160px]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base sm:text-lg font-medium tracking-tight text-white/95 group-hover:text-white transition-colors leading-snug">
                High-availability cloud systems beyond traditional infrastructure
              </h3>
              <ArrowUpRight
                size={18}
                className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
              />
            </div>
            <span className="font-mono text-[11px] text-[#FF3E24] tracking-wider uppercase mt-4">
              SYSTEMS ARCHITECTURE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
