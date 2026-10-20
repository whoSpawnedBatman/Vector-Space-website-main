/**
 * Internationalization utilities for Vector Space
 * Supported languages: English (en) and Español (es)
 */

export type Language = 'en' | 'es';

export interface TranslationDictionary {
  navbar: {
    menu: string;
    close: string;
    language: string;
    english: string;
    spanish: string;
  };
  hero: {
    blogBadge: string;
    title: string;
    subtitle: string;
    seeInAction: string;
    requestDemo: string;
    cardName: string;
  };
  stats: {
    stat1: { top: string; bottom: string };
    stat2: { top: string; bottom: string };
    stat3: { top: string; bottom: string };
  };
  whatDoes: {
    tag: string;
    title: string;
    subtitle: string;
    cards: {
      individuals: { title: string; desc: string };
      growingTeams: { title: string; desc: string };
      financeOps: { title: string; desc: string };
    };
  };
  whoFor: {
    tag: string;
    title: string;
    subtitle: string;
    cta: string;
    tabs: {
      finance: { tab: string; heading: string; desc: string };
      operations: { tab: string; heading: string; desc: string };
      growing: { tab: string; heading: string; desc: string };
      founders: { tab: string; heading: string; desc: string };
    };
  };
  stories: {
    tag: string;
    title: string;
    items: Array<{
      metric: string;
      subtitle: string;
      tags: string[];
      company: string;
      quote: string;
    }>;
    mainQuote: string;
    author: string;
  };
  compliance: {
    tag: string;
    summary: string;
    items: Array<{ title: string; desc: string }>;
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    col1: Array<{ q: string; a: string }>;
    col2: Array<{ q: string; a: string }>;
  };
  getStarted: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    successMessage: string;
  };
  footer: {
    slogan: string;
    platform: string;
    resources: string;
    legal: string;
    hiringBadge: string;
    attribution: string;
    copyright: string;
  };
  modals: {
    demo: {
      tag: string;
      title: string;
      subtitle: string;
      nameLabel: string;
      emailLabel: string;
      companyLabel: string;
      teamSizeLabel: string;
      goalLabel: string;
      submitBtn: string;
      successTitle: string;
      returnBtn: string;
    };
    video: {
      tag: string;
      watchOnYoutube: string;
    };
    story: {
      tag: string;
      impact: string;
      impactDesc: string;
      security: string;
      securityDesc: string;
      body: string;
      cta: string;
      close: string;
    };
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    navbar: {
      menu: 'MENU',
      close: 'CLOSE',
      language: 'Language',
      english: 'English',
      spanish: 'Español',
    },
    hero: {
      blogBadge: 'READ THE BALLANCE* BLOG »',
      title: 'Move payments without friction',
      subtitle:
        'Clear results from teams using Ballance to manage spending, issue cards, and stay in control as they grow. Payments stay simple, visible, and dependable.',
      seeInAction: 'SEE IN ACTION',
      requestDemo: 'REQUEST A DEMO',
      cardName: 'Travel Élite',
    },
    stats: {
      stat1: {
        top: 'increase in spending visibility',
        bottom: 'within the first year',
      },
      stat2: {
        top: 'faster setup time',
        bottom: 'from onboarding to first use',
      },
      stat3: {
        top: 'reduction in manual follow-ups',
        bottom: 'across payment workflows',
      },
    },
    whatDoes: {
      tag: 'BUILT FOR MODERN TEAMS',
      title: 'What Ballance* Does',
      subtitle:
        'Ballance gives individuals and organisations a clear way to manage payments—issuing cards, setting boundaries, and tracking spending in real time without added complexity.',
      cards: {
        individuals: {
          title: 'INDIVIDUALS',
          desc: 'Smart virtual and physical cards for personal flexibility and fast expense handling.',
        },
        growingTeams: {
          title: 'GROWING TEAMS',
          desc: 'Rapid card issuance and automated spend boundaries for high-velocity teams.',
        },
        financeOps: {
          title: 'FINANCE OPERATIONS',
          desc: 'Centralized controls, vendor management, and real-time reconciliation.',
        },
      },
    },
    whoFor: {
      tag: 'FOR MODERN TEAMS MANAGING SPEND',
      title: 'Who Ballance Is Built For',
      subtitle:
        'Ballance supports individuals and organisations that need simple, reliable ways to pay, track spending, and stay in control as operations grow.',
      cta: 'REQUEST A DEMO',
      tabs: {
        finance: {
          tab: 'FINANCE TEAMS',
          heading: 'Trusted by finance leaders',
          desc: 'Ballance brings card activity, bills, and vendor payments into one place, giving finance teams clear visibility, and confidence in how money moves across the organisation.',
        },
        operations: {
          tab: 'OPERATIONS TEAMS',
          heading: 'Built for operational clarity',
          desc: 'From recurring payments to one-off purchases, Ballance helps operations teams manage spend without friction, keeping processes moving while maintaining oversight.',
        },
        growing: {
          tab: 'GROWING COMPANIES',
          heading: 'Designed to scale with you',
          desc: 'As teams expand and spending becomes more distributed, Ballance provides structure without slowing speed—making it easier to manage access, and accountability at every stage.',
        },
        founders: {
          tab: 'FOUNDERS & LEADERS',
          heading: 'Control without micromanagement',
          desc: 'Ballance gives leaders a real-time view of how money is used across teams, enabling informed decisions and financial discipline without getting involved in every transaction.',
        },
      },
    },
    stories: {
      tag: 'REAL MESSAGES - REAL FEEDBACK',
      title: 'What They Say About Ballance',
      items: [
        {
          metric: '88%',
          subtitle: 'increase in speed to market',
          tags: ['B2B', 'Fintech'],
          company: 'Summit Forge',
          quote: 'Ballance understood what our payments architecture needed from day one.',
        },
        {
          metric: '18 hours',
          subtitle: 'saved each month on finance',
          tags: ['Religion', 'Nonprofit'],
          company: 'Grace Stewardship Foundation',
          quote: 'Clear accountability without creating administrative drag for our staff.',
        },
        {
          metric: '10x',
          subtitle: 'faster turnaround time',
          tags: ['Legal', 'Professional Services'],
          company: 'North Valley Legal',
          quote: 'Expense reconciliation used to take days. Now it is practically automated.',
        },
        {
          metric: '46%',
          subtitle: 'decrease in manual reconciliation',
          tags: ['healthcare', 'patient care'],
          company: 'Apex Health Systems',
          quote: 'Sensitive care facilities require strict compliance and immediate clarity.',
        },
        {
          metric: '> 50',
          subtitle: 'vendors managed across collections',
          tags: ['fashion', 'creative retail'],
          company: 'Solace Studio',
          quote: 'Managing global suppliers and seasonal payments without friction.',
        },
      ],
      mainQuote:
        '“Ballance* understands that good financial tools stay out of the way. They give us confidence without adding complexity.”',
      author: 'HEAD OF FINANCE — SUMMIT FORGE',
    },
    compliance: {
      tag: 'CERTIFIED & COMPLIANT',
      summary:
        'Ballance gives teams clear control over how money moves across cards and accounts, making spending visible in real time so decisions stay confident and informed.',
      items: [
        {
          title: 'SOC II',
          desc: 'Our SOC certification confirms that our systems and controls meet strict standards for security, availability, and confidentiality, in operational structures.',
        },
        {
          title: 'ISO 27001',
          desc: 'Certified to ISO 27001, our security practices follow recognised standards for protecting information, and maintaining strong controls.',
        },
        {
          title: 'GDPR',
          desc: 'Personal data is processed in line with GDPR requirements, with clear controls in place to support privacy, and transparency across our systems.',
        },
        {
          title: 'HIPAA',
          desc: 'Our processes are designed to support HIPAA requirements, ensuring sensitive information is handled securely, in accordance with expectations.',
        },
      ],
    },
    faq: {
      tag: 'QUESTIONS + ANSWERS',
      title: 'Frequent Questions.',
      subtitle:
        'Common answers to help you understand how Ballance works, what to expect, and how teams use it to manage spending with clarity and confidence.',
      col1: [
        {
          q: 'What is Ballance?',
          a: 'Ballance is a payments platform that helps individuals and businesses manage spending with simple cards, clear controls, and real-time visibility.',
        },
        {
          q: 'What types of cards does Ballance offer?',
          a: 'Ballance provides easy-to-use cards suitable for everyday purchases, subscriptions, and business expenses.',
        },
        {
          q: 'How quickly can cards be issued?',
          a: 'Cards can be created and assigned within minutes, allowing teams to get started without delays.',
        },
        {
          q: 'Can I control how cards are used?',
          a: 'Yes. Spending rules and limits can be set upfront to keep usage clear and consistent.',
        },
      ],
      col2: [
        {
          q: 'What is a corporate card?',
          a: 'A corporate card is a payment card issued to employees or teams for business-related expenses, allowing organisations to manage spending centrally rather than relying on personal cards and reimbursements.',
        },
        {
          q: 'Why switch to a corporate card?',
          a: 'Corporate cards simplify expense management by providing clearer visibility, faster payments, and more control over how company funds are used.',
        },
        {
          q: 'How can I get a corporate card with Ballance?',
          a: 'You can apply through Ballance by setting up an account and completing a short onboarding process. Once approved, cards can be issued to individuals or teams quickly.',
        },
        {
          q: 'Does Ballance support teams?',
          a: 'Ballance is designed to scale, supporting multiple users, roles, and levels of access.',
        },
      ],
    },
    getStarted: {
      title: 'Get Started With Ballance*',
      subtitle:
        'Bring clarity to how your team pays, tracks spending, and stays in control without changing how work gets done.',
      placeholder: "What's your work email?",
      button: 'BOOK A DEMO',
      successMessage: 'Our team will reach out shortly!',
    },
    footer: {
      slogan: 'Governance, everywhere you spend.',
      platform: 'Platform',
      resources: 'Resources',
      legal: 'Legal',
      hiringBadge: 'WE ARE HIRING!',
      attribution: 'made with 🍄 by clay studio.',
      copyright: '© 2026 Vector Space Technologies, Inc.',
    },
    modals: {
      demo: {
        tag: 'Vector Space Demonstration',
        title: 'Request a Guided Demo',
        subtitle:
          'Discover how Vector Space streamlines card issuance, expense approvals, and real-time payment oversight.',
        nameLabel: 'Full Name *',
        emailLabel: 'Work Email *',
        companyLabel: 'Company',
        teamSizeLabel: 'Team Size',
        goalLabel: 'Primary Goal (Optional)',
        submitBtn: 'SCHEDULE DEMO',
        successTitle: 'Demo Scheduled!',
        returnBtn: 'RETURN TO SITE',
      },
      video: {
        tag: 'Vector Space — Live Product Walkthrough',
        watchOnYoutube: 'WATCH ON YOUTUBE',
      },
      story: {
        tag: 'Customer Case Study',
        impact: 'Impact',
        impactDesc: 'Measurable efficiency gain',
        security: 'Security',
        securityDesc: 'Full SOC II compliance',
        body: 'By consolidating multi-entity spending, corporate cards, and vendor subscriptions into Vector Space, teams eliminate reconciliation delays and prevent surprise budget overruns. Real-time controls empower employees while keeping finance leaders confident.',
        cta: 'REQUEST A SIMILAR DEMO',
        close: 'Close',
      },
    },
  },
  es: {
    navbar: {
      menu: 'MENÚ',
      close: 'CERRAR',
      language: 'Idioma',
      english: 'English',
      spanish: 'Español',
    },
    hero: {
      blogBadge: 'LEER EL BLOG DE BALLANCE* »',
      title: 'Mueve pagos sin fricción',
      subtitle:
        'Resultados claros de equipos que usan Ballance para gestionar gastos, emitir tarjetas y mantener el control a medida que crecen. Los pagos se mantienen simples, visibles y confiables.',
      seeInAction: 'VER EN ACCIÓN',
      requestDemo: 'SOLICITAR DEMO',
      cardName: 'Travel Élite',
    },
    stats: {
      stat1: {
        top: 'aumento en visibilidad de gastos',
        bottom: 'durante el primer año',
      },
      stat2: {
        top: 'tiempo de configuración más veloz',
        bottom: 'desde el registro hasta el primer uso',
      },
      stat3: {
        top: 'reducción en gestiones manuales',
        bottom: 'en todos los flujos de pago',
      },
    },
    whatDoes: {
      tag: 'CREADO PARA EQUIPOS MODERNOS',
      title: 'Lo Que Hace Ballance*',
      subtitle:
        'Ballance ofrece a individuos y organizaciones una forma clara de gestionar pagos: emitiendo tarjetas, definiendo límites y rastreando gastos en tiempo real sin complejidades añadidas.',
      cards: {
        individuals: {
          title: 'INDIVIDUOS',
          desc: 'Tarjetas físicas y virtuales inteligentes para flexibilidad personal y rendición ágil.',
        },
        growingTeams: {
          title: 'EQUIPOS EN CRECIMIENTO',
          desc: 'Emisión inmediata de tarjetas y límites de gasto automatizados para equipos dinámicos.',
        },
        financeOps: {
          title: 'OPERACIONES FINANCIERAS',
          desc: 'Controles centralizados, gestión de proveedores y conciliación instantánea.',
        },
      },
    },
    whoFor: {
      tag: 'PARA EQUIPOS MODERNOS QUE GESTIONAN GASTOS',
      title: 'Para Quién Está Diseñado Ballance',
      subtitle:
        'Ballance acompaña a personas y empresas que buscan métodos simples y confiables para pagar, monitorear gastos y mantener el control mientras sus operaciones se expanden.',
      cta: 'SOLICITAR DEMO',
      tabs: {
        finance: {
          tab: 'EQUIPOS DE FINANZAS',
          heading: 'La elección de líderes financieros',
          desc: 'Ballance unifica transacciones de tarjetas, facturas y pagos a proveedores en un solo panel, otorgando a finanzas visibilidad absoluta y confianza sobre los fondos de la organización.',
        },
        operations: {
          tab: 'EQUIPOS DE OPERACIONES',
          heading: 'Diseñado para claridad operativa',
          desc: 'Desde pagos recurrentes hasta compras puntuales, Ballance agiliza las gestiones sin obstáculos, manteniendo los procesos en marcha con supervisión continua.',
        },
        growing: {
          tab: 'EMPRESAS EN CRECIMIENTO',
          heading: 'Creado para escalar contigo',
          desc: 'A medida que tu equipo crece y el gasto se descentraliza, Ballance aporta orden sin frenar la velocidad: facilitando accesos y responsabilidad en cada etapa.',
        },
        founders: {
          tab: 'FUNDADORES Y LÍDERES',
          heading: 'Control sin microgestión',
          desc: 'Ballance brinda una visión en tiempo real sobre cómo se invierte el dinero, facilitando decisiones fundamentadas y disciplina financiera sin intervenir en cada transacción.',
        },
      },
    },
    stories: {
      tag: 'MENSAJES REALES - EXPERIENCIAS REALES',
      title: 'Lo Que Dicen Sobre Ballance',
      items: [
        {
          metric: '88%',
          subtitle: 'aumento en rapidez de llegada al mercado',
          tags: ['B2B', 'Fintech'],
          company: 'Summit Forge',
          quote: 'Ballance comprendió nuestra arquitectura de pagos desde el primer momento.',
        },
        {
          metric: '18 horas',
          subtitle: 'ahorradas mensualmente en tareas contables',
          tags: ['Religión', 'Sin fines de lucro'],
          company: 'Grace Stewardship Foundation',
          quote: 'Claridad en la rendición de cuentas sin generar sobrecarga administrativa.',
        },
        {
          metric: '10x',
          subtitle: 'mayor velocidad de procesamiento',
          tags: ['Legal', 'Servicios Profesionales'],
          company: 'North Valley Legal',
          quote: 'La conciliación de gastos tomaba días enteros. Ahora fluye automáticamente.',
        },
        {
          metric: '46%',
          subtitle: 'disminución en conciliación manual',
          tags: ['Salud', 'Atención Médica'],
          company: 'Apex Health Systems',
          quote: 'Las clínicas de salud exigen estricto cumplimiento y precisión inmediata.',
        },
        {
          metric: '> 50',
          subtitle: 'proveedores gestionados por colección',
          tags: ['Moda', 'Retail Creativo'],
          company: 'Solace Studio',
          quote: 'Gestionamos proveedores globales y compras de temporada sin fricciones.',
        },
      ],
      mainQuote:
        '“Ballance* entiende que las mejores herramientas financieras son las que no estorban. Nos brindan seguridad sin sumar complejidad.”',
      author: 'DIRECTOR DE FINANZAS — SUMMIT FORGE',
    },
    compliance: {
      tag: 'CERTIFICADO Y EN NORMATIVA',
      summary:
        'Ballance entrega a los equipos control total sobre el flujo de dinero en tarjetas y cuentas, otorgando visibilidad inmediata para decisiones firmes y bien informadas.',
      items: [
        {
          title: 'SOC II',
          desc: 'Nuestra certificación SOC valida que los sistemas cumplen estándares rigurosos de seguridad, disponibilidad y confidencialidad operativa.',
        },
        {
          title: 'ISO 27001',
          desc: 'Certificados bajo ISO 27001, nuestras prácticas de seguridad siguen marcos internacionales para la protección de la información.',
        },
        {
          title: 'GDPR',
          desc: 'Los datos personales se tratan cumpliendo con el GDPR, implementando estrictos controles de privacidad y transparencia.',
        },
        {
          title: 'HIPAA',
          desc: 'Nuestros procesos respaldan los requisitos de HIPAA, asegurando el resguardo de información de salud sensible.',
        },
      ],
    },
    faq: {
      tag: 'PREGUNTAS + RESPUESTAS',
      title: 'Preguntas Frecuentes.',
      subtitle:
        'Respuestas claras para ayudarte a entender cómo opera Ballance, qué beneficios esperar y cómo los equipos simplifican sus finanzas con total seguridad.',
      col1: [
        {
          q: '¿Qué es Ballance?',
          a: 'Ballance es una plataforma de pagos que permite a personas y empresas gestionar sus gastos mediante tarjetas intuitivas, límites claros y visibilidad en tiempo real.',
        },
        {
          q: '¿Qué tipo de tarjetas ofrece Ballance?',
          a: 'Ballance dispone de tarjetas versátiles para compras diarias, suscripciones de software y gastos corporativos.',
        },
        {
          q: '¿Qué tan rápido se pueden emitir las tarjetas?',
          a: 'Las tarjetas pueden crearse y asignarse en cuestión de minutos, permitiendo al equipo comenzar de inmediato.',
        },
        {
          q: '¿Puedo establecer límites de uso en las tarjetas?',
          a: 'Sí. Puedes definir reglas de gasto y límites de presupuesto anticipadamente para garantizar un uso adecuado.',
        },
      ],
      col2: [
        {
          q: '¿Qué es una tarjeta corporativa?',
          a: 'Una tarjeta corporativa se asigna a colaboradores o departamentos para cubrir gastos laborales, centralizando el control en lugar de reembolsar tarjetas personales.',
        },
        {
          q: '¿Por qué optar por una tarjeta corporativa?',
          a: 'Simplifica la administración contable, brinda reportes inmediatos, agiliza desembolsos y previene desvíos de presupuesto.',
        },
        {
          q: '¿Cómo solicito una tarjeta corporativa con Ballance?',
          a: 'Crea tu cuenta en Ballance y completa el breve proceso de registro. Una vez aprobada, podrás emitir tarjetas físicas y virtuales rápidamente.',
        },
        {
          q: '¿Ballance funciona para equipos en crecimiento?',
          a: 'Ballance está diseñado para escalar, con soporte para múltiples usuarios, roles diferenciados y permisos granulares.',
        },
      ],
    },
    getStarted: {
      title: 'Comienza Con Ballance*',
      subtitle:
        'Aporta claridad a cómo tu equipo paga, monitorea gastos y mantiene el control sin alterar su forma de trabajar.',
      placeholder: '¿Cuál es tu correo de trabajo?',
      button: 'RESERVAR DEMO',
      successMessage: '¡Nuestro equipo se comunicará contigo en breve!',
    },
    footer: {
      slogan: 'Gobernanza, en cada lugar donde gastas.',
      platform: 'Plataforma',
      resources: 'Recursos',
      legal: 'Legal',
      hiringBadge: '¡ESTAMOS CONTRATANDO!',
      attribution: 'hecho con 🍄 por clay studio.',
      copyright: '© 2026 Vector Space Technologies, Inc.',
    },
    modals: {
      demo: {
        tag: 'Demostración de Vector Space',
        title: 'Solicita una Demo Guiada',
        subtitle:
          'Descubre cómo Vector Space simplifica la emisión de tarjetas, aprobación de gastos y supervisión de pagos en tiempo real.',
        nameLabel: 'Nombre Completo *',
        emailLabel: 'Correo de Trabajo *',
        companyLabel: 'Empresa',
        teamSizeLabel: 'Tamaño del Equipo',
        goalLabel: 'Objetivo Principal (Opcional)',
        submitBtn: 'AGENDAR DEMO',
        successTitle: '¡Demostración Agendada!',
        returnBtn: 'VOLVER AL SITIO',
      },
      video: {
        tag: 'Vector Space — Recorrido del Producto',
        watchOnYoutube: 'VER EN YOUTUBE',
      },
      story: {
        tag: 'Caso de Éxito de Cliente',
        impact: 'Impacto',
        impactDesc: 'Ganancia medible de eficiencia',
        security: 'Seguridad',
        securityDesc: 'Cumplimiento total SOC II',
        body: 'Al unificar gastos corporativos, tarjetas de empresa y suscripciones en Vector Space, los equipos eliminan demoras en conciliación y evitan sorpresas de presupuesto.',
        cta: 'SOLICITAR DEMO SIMILAR',
        close: 'Cerrar',
      },
    },
  },
};

/**
 * Helper to fetch translation dictionary
 */
export function getTranslations(lang: Language): TranslationDictionary {
  return translations[lang] || translations.en;
}

/**
 * Return language metadata
 */
export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  shortLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', shortLabel: 'EN' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', shortLabel: 'ES' },
];

export function getLanguageOption(code: Language): LanguageOption {
  return (
    SUPPORTED_LANGUAGES.find((opt) => opt.code === code) || SUPPORTED_LANGUAGES[0]
  );
}
