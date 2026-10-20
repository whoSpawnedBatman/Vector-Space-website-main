import React, { useState } from 'react';
import { X, Play, ExternalLink } from 'lucide-react';
import { RollButton } from './RollButton';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [useIframe, setUseIframe] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Ballance Product Demo Video"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-[#0B0F19] rounded-xl overflow-hidden border border-white/20 shadow-2xl">
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#0C101A] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF3E24] inline-block animate-pulse" />
            <span className="font-mono text-xs text-white/90 uppercase tracking-wider">
              Ballance — Live Product Walkthrough
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/watch?v=OnEzp8K7fjU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>YouTube</span>
              <ExternalLink size={12} />
            </a>

            <button
              onClick={onClose}
              aria-label="Close video player"
              className="text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {useIframe ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/OnEzp8K7fjU?autoplay=1&rel=0"
              title="Ballance Demonstration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={() => setUseIframe(false)}
              className="w-full h-full border-0"
            />
          ) : (
            <div className="text-center p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FF3E24]/20 border border-[#FF3E24]/30 flex items-center justify-center mx-auto text-[#FF3E24]">
                <Play size={28} className="translate-x-0.5" />
              </div>
              <h3 className="text-xl font-normal text-white">Ballance Product Overview</h3>
              <p className="text-sm text-white/60 max-w-md mx-auto">
                Watch how fast-growing companies and finance leaders use Ballance to issue cards, automate expense policies, and track operations in real time.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.youtube.com/watch?v=OnEzp8K7fjU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RollButton variant="primary" size="md">
                    WATCH ON YOUTUBE
                  </RollButton>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
