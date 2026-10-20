import React from 'react';
import { TranslationDictionary } from '../utils/i18n';

interface ComplianceProps {
  t?: TranslationDictionary['compliance'];
}

export const Compliance: React.FC<ComplianceProps> = ({ t }) => {
  const tag = t?.tag || 'CERTIFIED & COMPLIANT';
  const summary =
    t?.summary ||
    'Ballance gives teams clear control over how money moves across cards and accounts, making spending visible in real time so decisions stay confident and informed.';

  const defaultCertifications = [
    {
      title: 'SOC II',
      description:
        'Our SOC certification confirms that our systems and controls meet strict standards for security, availability, and confidentiality, in operational structures.',
    },
    {
      title: 'ISO 27001',
      description:
        'Certified to ISO 27001, our security practices follow recognised standards for protecting information, and maintaining strong controls.',
    },
    {
      title: 'GDPR',
      description:
        'Personal data is processed in line with GDPR requirements, with clear controls in place to support privacy, and transparency across our systems.',
    },
    {
      title: 'HIPAA',
      description:
        'Our processes are designed to support HIPAA requirements, ensuring sensitive information is handled securely, in accordance with expectations.',
    },
  ];

  const certifications = t?.items
    ? t.items.map((i) => ({ title: i.title, description: i.desc }))
    : defaultCertifications;

  return (
    <section className="bg-[#0A0D14] text-white py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Category Tag */}
        <div className="flex justify-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-white/50 flex items-center gap-2">
            <span className="w-2 h-2 border border-white/40 inline-block" />
            {tag}
          </span>
        </div>

        {/* 4 Compliance Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#10131B] border border-white/10 rounded-sm p-7 flex flex-col justify-between hover:border-white/25 transition-colors"
            >
              <div>
                <h3 className="font-mono text-base font-medium tracking-wider text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer Text */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg font-normal text-white/80 leading-relaxed">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
};
