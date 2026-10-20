import React, { useState } from 'react';
import { RollButton } from './RollButton';
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

  const title = t?.title || 'Get Started With Ballance*';
  const subtitle =
    t?.subtitle ||
    'Bring clarity to how your team pays, tracks spending, and stays in control without changing how work gets done.';
  const placeholder = t?.placeholder || "What's your work email?";
  const button = t?.button || 'BOOK A DEMO';
  const successMessage = t?.successMessage || 'Our team will reach out shortly!';

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
    <section className="relative py-28 px-6 sm:px-10 lg:px-16 overflow-hidden bg-gradient-to-r from-[#9ea2a6] via-[#b6bac0] to-[#989ca0] text-[#111317]">
      {/* Subtle satin sheen highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.03em] text-[#111317] leading-tight">
          {title}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#111317]/80 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {isSubmitted ? (
          <div className="mt-10 p-6 bg-white/95 rounded-md border border-white max-w-md mx-auto shadow-xl flex items-center justify-center gap-3 animate-in fade-in zoom-in-95">
            <CheckCircle2 className="text-emerald-600 shrink-0" size={24} />
            <p className="text-sm font-medium text-neutral-800">
              Demo booked for <span className="font-semibold text-black">{email}</span>. {successMessage}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-2 bg-black/15 p-1.5 rounded backdrop-blur-md border border-black/10 shadow-lg"
          >
            <div className="flex-1">
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
                className="w-full h-11 px-4 bg-white/95 text-[#111317] placeholder:text-[#111317]/50 text-sm focus:outline-none focus:ring-1 focus:ring-black rounded-sm border-0 font-sans"
              />
            </div>
            <RollButton
              type="submit"
              variant="dark"
              size="md"
              aria-label={button}
              className="rounded-sm shrink-0 bg-[#16181E] hover:bg-[#20242D] text-white"
            >
              {button}
            </RollButton>
          </form>
        )}

        {error && (
          <p className="mt-3 text-xs text-rose-800 font-medium">
            {error}
          </p>
        )}
      </div>
    </section>
  );
};
