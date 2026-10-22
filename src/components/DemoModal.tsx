import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Command } from 'lucide-react';
import { validateDemoForm } from '../utils/calculator';
import { RollButton } from './RollButton';
import { TranslationDictionary } from '../utils/i18n';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
  t?: TranslationDictionary['modals']['demo'];
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  initialEmail = '',
  t,
}) => {
  const [form, setForm] = useState({
    name: '',
    workEmail: initialEmail,
    companyName: '',
    teamSize: '10-50',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on Escape key and prevent background body scrolling while open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSuccess(false);
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tag = t?.tag || 'Vector Space · Consultation';
  const title = t?.title || 'Schedule a Technical Discovery';
  const subtitle =
    t?.subtitle ||
    'Connect directly with our engineering team to explore custom AI integrations, software architecture, or cloud infrastructure solutions.';
  const nameLabel = t?.nameLabel || 'Full Name *';
  const emailLabel = t?.emailLabel || 'Work Email *';
  const companyLabel = t?.companyLabel || 'Company / Organization';
  const teamSizeLabel = t?.teamSizeLabel || 'Team Size';
  const goalLabel = t?.goalLabel || 'Tell us about your technical challenge (Optional)';
  const submitBtn = t?.submitBtn || 'REQUEST CONSULTATION';
  const successTitle = t?.successTitle || 'Consultation Requested!';
  const returnBtn = t?.returnBtn || 'BACK TO WEBSITE';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateDemoForm({
      name: form.name,
      workEmail: form.workEmail,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSuccess(true);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={resetAndClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#0E131F] border border-white/20 rounded-xl p-6 sm:p-8 text-white shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          aria-label="Close demo modal"
          className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-normal tracking-tight">{successTitle}</h3>
            <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
              Thanks <span className="text-white font-medium">{form.name || 'there'}</span>. An invitation and tailored walkthrough link have been sent to{' '}
              <span className="text-white font-mono text-xs underline">{form.workEmail}</span>.
            </p>
            <div className="pt-4">
              <RollButton variant="secondary" onClick={resetAndClose}>
                {returnBtn}
              </RollButton>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#FF3E24] uppercase tracking-wider mb-2">
              <Command size={14} />
              <span>{tag}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-normal tracking-tight mb-2">
              {title}
            </h2>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              {subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
                  {nameLabel}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 rounded text-white text-sm focus:outline-none focus:border-[#FF3E24]"
                />
                {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
                  {emailLabel}
                </label>
                <input
                  type="email"
                  value={form.workEmail}
                  onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 rounded text-white text-sm focus:outline-none focus:border-[#FF3E24]"
                />
                {errors.workEmail && (
                  <p className="text-xs text-rose-400 mt-1">{errors.workEmail}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
                    {companyLabel}
                  </label>
                  <input
                    type="text"
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 rounded text-white text-sm focus:outline-none focus:border-[#FF3E24]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
                    {teamSizeLabel}
                  </label>
                  <select
                    value={form.teamSize}
                    onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0C101B] border border-white/15 rounded text-white text-sm focus:outline-none focus:border-[#FF3E24]"
                  >
                    <option value="1-10">1-10</option>
                    <option value="10-50">10-50</option>
                    <option value="50-250">50-250</option>
                    <option value="250+">250+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 uppercase tracking-wider mb-1.5">
                  {goalLabel}
                </label>
                <textarea
                  rows={2}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="E.g., custom AI model integration, scalable cloud migration, high-throughput pipelines..."
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/15 rounded text-white text-sm focus:outline-none focus:border-[#FF3E24] resize-none"
                />
              </div>

              <div className="pt-2">
                <RollButton
                  type="submit"
                  variant="primary"
                  size="md"
                  className="w-full rounded"
                >
                  {submitBtn}
                </RollButton>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
