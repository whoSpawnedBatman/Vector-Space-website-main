import React, { useEffect } from 'react';
import { X, ArrowRight, Building2, TrendingUp, ShieldCheck } from 'lucide-react';
import { RollButton } from './RollButton';
import { TranslationDictionary } from '../utils/i18n';

interface StoryModalProps {
  title: string | null;
  onClose: () => void;
  onOpenDemo: () => void;
  t?: TranslationDictionary['modals']['story'];
}

export const StoryModal: React.FC<StoryModalProps> = ({
  title,
  onClose,
  onOpenDemo,
  t,
}) => {
  // Close on Escape key and prevent background body scrolling while open
  useEffect(() => {
    if (!title) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [title, onClose]);

  if (!title) return null;

  const tag = t?.tag || 'Customer Case Study';
  const impactLabel = t?.impact || 'Impact';
  const impactDesc = t?.impactDesc || 'Measurable system reliability and performance';
  const securityLabel = t?.security || 'Rigour';
  const securityDesc = t?.securityDesc || 'End-to-end security & sound engineering';
  const bodyText = t?.body || 'Vector Space builds practical technology solutions for complex problems—combining sound software engineering, scalable cloud infrastructure, and purposeful AI.';
  const ctaBtn = t?.cta || 'SCHEDULE A CONSULTATION';
  const closeBtn = t?.close || 'Close';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#0D121F] border border-white/20 rounded-xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={closeBtn}
          className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF3E24] uppercase tracking-wider">
            <Building2 size={14} />
            <span>{tag}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight leading-snug">
            {title}
          </h2>

          <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-emerald-400 shrink-0" size={20} />
              <div>
                <p className="font-mono text-xs text-white/50 uppercase">{impactLabel}</p>
                <p className="font-medium text-sm text-white">{impactDesc}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-400 shrink-0" size={20} />
              <div>
                <p className="font-mono text-xs text-white/50 uppercase">{securityLabel}</p>
                <p className="font-medium text-sm text-white">{securityDesc}</p>
              </div>
            </div>
          </div>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            {bodyText}
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
              {ctaBtn}
            </RollButton>

            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              {closeBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
