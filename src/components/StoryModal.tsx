import React from 'react';
import { X, ArrowRight, Building2, TrendingUp, ShieldCheck } from 'lucide-react';
import { RollButton } from './RollButton';

interface StoryModalProps {
  title: string | null;
  onClose: () => void;
  onOpenDemo: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  title,
  onClose,
  onOpenDemo,
}) => {
  if (!title) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Customer Case Study"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#0D121F] border border-white/20 rounded-xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close story modal"
          className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF3E24] uppercase tracking-wider">
            <Building2 size={14} />
            <span>Customer Case Study</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight leading-snug">
            {title}
          </h2>

          <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-emerald-400 shrink-0" size={20} />
              <div>
                <p className="font-mono text-xs text-white/50 uppercase">Impact</p>
                <p className="font-medium text-sm text-white">Measurable efficiency gain</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-400 shrink-0" size={20} />
              <div>
                <p className="font-mono text-xs text-white/50 uppercase">Security</p>
                <p className="font-medium text-sm text-white">Full SOC II compliance</p>
              </div>
            </div>
          </div>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            By consolidating multi-entity spending, corporate cards, and vendor subscriptions into Ballance, teams eliminate reconciliation delays and prevent surprise budget overruns. Real-time controls empower employees while keeping finance leaders confident.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <RollButton
              variant="primary"
              size="md"
              icon={<ArrowRight size={14} />}
              onClick={() => {
                onClose();
                onOpenDemo();
              }}
            >
              REQUEST A SIMILAR DEMO
            </RollButton>

            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
