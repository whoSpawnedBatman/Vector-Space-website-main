import React, { useState } from 'react';
import { validateDemoForm } from '../utils/calculator';
import { CheckCircle2 } from 'lucide-react';
import { TranslationDictionary } from '../utils/i18n';

interface GetStartedProps {
  onSuccessDemo?: (email: string) => void;
  t?: TranslationDictionary['getStarted'];
}

export const GetStarted: React.FC<GetStartedProps> = ({ onSuccessDemo, t }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const title = t?.title || 'Engineering Beyond Boundaries';
  const subtitle =
    t?.subtitle ||
    'Building practical solutions today and pursuing ambitious questions for tomorrow. Let’s talk about your next technical challenge.';
  const placeholder = t?.placeholder || 'Enter your business email';
  const button = t?.button || 'GET IN TOUCH';
  const successMessage =
    t?.successMessage || 'Thank you! Our engineering team will be in touch shortly.';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateDemoForm({ workEmail: email });
    if (!result.isValid) {
      setError(result.errors.workEmail || 'Invalid email');
      return;
    }

    setError('');
    setIsSubmitted(true);
    if (onSuccessDemo) onSuccessDemo(email);
  };

  return (
    <section className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden text-white flex flex-col justify-center items-center min-h-[480px] sm:min-h-[540px]">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D14] via-[#050B1E] to-[#0A0D14] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-[46px] lg:text-[48px] font-normal tracking-[-0.02em] text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          {title}
        </h2>

        {/* Subtitle with exact 2-line break */}
        <p className="mt-3.5 text-xs sm:text-[13px] text-white/90 max-w-[460px] mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] font-normal">
          {subtitle}
        </p>

        {isSubmitted ? (
          <div className="mt-8 p-4 bg-white/95 backdrop-blur-md rounded-[2px] border border-white max-w-md mx-auto shadow-2xl flex items-center justify-center gap-3 animate-in fade-in zoom-in-95">
            <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
            <p className="text-xs sm:text-sm font-medium text-neutral-800">
              Demo booked for <span className="font-semibold text-black">{email}</span>. {successMessage}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.35)] w-full max-w-[430px]"
          >
            <div className="relative flex-1">
              <label htmlFor="work-email" className="sr-only">
                {placeholder}
              </label>
              <input
                id="work-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder={placeholder}
                className="w-full h-11 sm:h-12 px-4 bg-black/30 backdrop-blur-sm text-white placeholder:text-white/75 text-xs sm:text-[13px] border border-white border-r-0 rounded-l-[2px] focus:outline-none focus:border-white font-sans transition-colors"
              />
            </div>
            <button
              type="submit"
              aria-label={button}
              className="h-11 sm:h-12 px-5 sm:px-7 bg-white hover:bg-neutral-100 text-[#111317] font-mono text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase rounded-r-[2px] border border-white transition-colors cursor-pointer shrink-0 shadow-md"
            >
              {button}
            </button>
          </form>
        )}

        {error && (
          <p className="mt-3 text-xs text-rose-300 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            {error}
          </p>
        )}
      </div>
    </section>
  );
};
