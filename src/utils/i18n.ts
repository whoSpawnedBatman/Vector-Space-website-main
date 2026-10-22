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
      blogBadge: 'TECHNOLOGY · RESEARCH · EXPLORATION »',
      title: 'Practical technology solutions today. Ambitious questions for tomorrow.',
      subtitle:
        'We build practical technology and AI solutions for complex problems—and keep exploring what comes next. Grounded engineering designed to scale your operations.',
      seeInAction: 'EXPLORE SOLUTIONS',
      requestDemo: 'SCHEDULE CONSULTATION',
      cardName: 'VSD Core',
    },
    stats: {
      stat1: {
        top: 'production system reliability',
        bottom: 'across mission-critical deployments',
      },
      stat2: {
        top: 'faster time to deployment',
        bottom: 'with modular architecture & AI pipelines',
      },
      stat3: {
        top: 'reduction in infrastructure friction',
        bottom: 'through disciplined automation & monitoring',
      },
    },
    whatDoes: {
      tag: 'CORE CAPABILITIES',
      title: 'What Vector Space Does',
      subtitle:
        'We develop useful technology, solve complex technical problems, and build robust software infrastructure that enables modern businesses to operate with precision.',
      cards: {
        individuals: {
          title: 'ARTIFICIAL INTELLIGENCE & ML',
          desc: 'Purpose-built intelligent models, retrieval pipelines, and automation systems engineered for operational accuracy.',
        },
        growingTeams: {
          title: 'CLOUD & IT INFRASTRUCTURE',
          desc: 'High-availability architecture, resilient backends, and enterprise systems that scale without technical debt.',
        },
        financeOps: {
          title: 'APPLIED RESEARCH & R&D',
          desc: 'Disciplined exploration of cutting-edge algorithms, simulation frameworks, and boundary-pushing engineering.',
        },
      },
    },
    whoFor: {
      tag: 'ENGINEERED FOR SCALE & RIGOUR',
      title: 'Who We Build For',
      subtitle:
        'Vector Space partners with forward-thinking organisations that need dependable IT architecture, intelligent automation, and long-term technical clarity.',
      cta: 'START A CONVERSATION',
      tabs: {
        finance: {
          tab: 'ENTERPRISE IT',
          heading: 'Mission-critical systems built to last',
          desc: 'We engineer secure, compliant, and observable IT infrastructure that eliminates downtime, modernizes legacy bottlenecks, and protects data integrity.',
        },
        operations: {
          tab: 'AI & PRODUCT TEAMS',
          heading: 'Intelligent automation grounded in reality',
          desc: 'From specialized LLM integrations to high-throughput data processing pipelines, we take AI beyond proof-of-concept into reliable day-to-day operations.',
        },
        growing: {
          tab: 'HIGH-GROWTH TECH',
          heading: 'Architectures engineered for scale',
          desc: 'When rapid expansion challenges your software foundation, we deliver structured engineering that supports velocity without sacrificing system health.',
        },
        founders: {
          tab: 'R&D & INNOVATORS',
          heading: 'Disciplined exploration of what is next',
          desc: 'We help ambitious technical leaders investigate complex questions, validate experimental prototypes, and turn research into production-grade reality.',
        },
      },
    },
    stories: {
      tag: 'PROVEN OUTCOMES · SOUND ENGINEERING',
      title: 'Our Track Record',
      items: [
        {
          metric: '99.98%',
          subtitle: 'uptime across critical services',
          tags: ['Cloud', 'Infrastructure'],
          company: 'Enterprise Logistics Group',
          quote: 'VSD brought the technical rigour and architectural clarity our systems desperately needed.',
        },
        {
          metric: '65%',
          subtitle: 'reduction in manual data triage',
          tags: ['AI Solutions', 'Automation'],
          company: 'Nexus Analytics',
          quote: 'Their AI pipelines delivered measurable accuracy from day one without over-promising.',
        },
        {
          metric: '4x',
          subtitle: 'throughput capacity expansion',
          tags: ['Distributed Systems', 'IT'],
          company: 'Apex Core Networks',
          quote: 'Disciplined engineering, clear communication, and seamless zero-downtime execution.',
        },
        {
          metric: '< 15ms',
          subtitle: 'pipeline processing latency',
          tags: ['Data Engineering', 'Real-time'],
          company: 'Strata Tech Labs',
          quote: 'VSD solved our high-volume bottleneck where three other vendors failed.',
        },
        {
          metric: '100%',
          subtitle: 'compliance across audit frameworks',
          tags: ['Security', 'Governance'],
          company: 'Horizon Health Data',
          quote: 'Clear thinking, meticulous documentation, and dependable system security.',
        },
      ],
      mainQuote:
        '“We build practical technology solutions for complex problems and keep exploring what comes next.”',
      author: 'Aman MB , Founder , CEO Vector Space Dynamics',
    },
    compliance: {
      tag: 'THE FOUR BRAND PRINCIPLES',
      summary:
        'Every line of code and architecture we deliver is governed by our four foundational pillars: clear thinking, curiosity, continuous iteration, and disciplined exploration.',
      items: [
        {
          title: 'Precision',
          desc: 'We value clear thinking, sound engineering, rigour and meticulous attention to detail in every system.',
        },
        {
          title: 'Curiosity',
          desc: 'We question assumptions, investigate complex problems deeply, and keep learning relentlessly.',
        },
        {
          title: 'Progress',
          desc: 'We build practical solutions, test ideas through rigorous validation, and improve through continuous iteration.',
        },
        {
          title: 'Exploration',
          desc: 'We pursue ambitious questions with discipline and an open mind toward the future of technology and space.',
        },
      ],
    },
    faq: {
      tag: 'QUESTIONS & CLARITY',
      title: 'Frequently Asked Questions.',
      subtitle:
        'Clear answers about our technology stack, engagement model, AI capabilities, and long-term vision.',
      col1: [
        {
          q: 'What does Vector Space do today?',
          a: 'Vector Space delivers practical IT solutions, custom software architecture, cloud engineering, and applied artificial intelligence for businesses solving complex problems.',
        },
        {
          q: 'What is your approach to AI development?',
          a: 'We focus on intelligent solutions grounded in reality. Rather than generic wrappers, we design domain-specific models, deterministic retrieval pipelines, and robust evaluation systems.',
        },
        {
          q: 'How does VSD work with client teams?',
          a: 'We partner directly with technical leaders and stakeholders to diagnose core bottlenecks, architect modular solutions, and execute with disciplined engineering standards.',
        },
        {
          q: 'Can you modernize existing legacy systems?',
          a: 'Yes. We specialize in non-destructive incremental refactoring, API abstraction layers, and cloud migrations designed to maintain business continuity throughout.',
        },
      ],
      col2: [
        {
          q: 'What is VSD’s long-term vision in space & scientific research?',
          a: 'While our current business focuses on high-impact enterprise IT and AI solutions, our long-term roadmap expands into autonomous navigation systems, orbital computation, and scientific exploration.',
        },
        {
          q: 'What industries do you currently serve?',
          a: 'We work across enterprise software, data-intensive logistics, finance infrastructure, health data systems, and emerging technology ventures.',
        },
        {
          q: 'What technology stacks and cloud providers do you support?',
          a: 'We build platform-agnostic architectures across AWS, GCP, Azure, and on-premises environments, emphasizing modern typed languages, containerization, and automated CI/CD.',
        },
        {
          q: 'How do we start a collaboration or project?',
          a: 'Reach out through our consultation form. We will schedule a technical discovery session to understand your architecture, goals, and delivery timeline.',
        },
      ],
    },
    getStarted: {
      title: 'Engineering Beyond Boundaries',
      subtitle:
        'Building practical solutions today and pursuing ambitious questions for tomorrow. Let’s talk about your next technical challenge.',
      placeholder: 'Enter your business email',
      button: 'GET IN TOUCH',
      successMessage: 'Thank you! Our engineering team will be in touch shortly.',
    },
    footer: {
      slogan: 'Engineering beyond boundaries.',
      platform: 'Capabilities',
      resources: 'Organization',
      legal: 'Standards',
      hiringBadge: 'WE ARE HIRING!',
      attribution: 'Vector Space Dynamics',
      copyright: '© 2026 Vector Space Dynamics. All rights reserved.',
    },
    modals: {
      demo: {
        tag: 'Vector Space · Consultation',
        title: 'Schedule a Technical Discovery',
        subtitle:
          'Connect directly with our engineering team to explore custom AI integrations, software architecture, or cloud infrastructure solutions.',
        nameLabel: 'Full Name *',
        emailLabel: 'Work Email *',
        companyLabel: 'Company / Organization',
        teamSizeLabel: 'Team Size',
        goalLabel: 'Tell us about your technical challenge (Optional)',
        submitBtn: 'REQUEST CONSULTATION',
        successTitle: 'Consultation Requested!',
        returnBtn: 'BACK TO WEBSITE',
      },
      video: {
        tag: 'Vector Space — Technology Overview',
        watchOnYoutube: 'VIEW TECHNICAL BRIEF',
      },
      story: {
        tag: 'Case Study · Vector Space',
        impact: 'Impact',
        impactDesc: 'Measurable system reliability and performance',
        security: 'Rigour',
        securityDesc: 'End-to-end security & sound engineering',
        body: 'Vector Space builds practical technology solutions for complex problems—combining sound software engineering, scalable cloud infrastructure, and purposeful AI.',
        cta: 'EXPLORE SIMILAR SOLUTIONS',
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
      blogBadge: 'TECNOLOGÍA · INVESTIGACIÓN · EXPLORACIÓN »',
      title: 'Soluciones tecnológicas prácticas hoy. Preguntas ambiciosas para el mañana.',
      subtitle:
        'Construimos soluciones prácticas de tecnología e inteligencia artificial para problemas complejos, explorando continuamente lo que viene. Ingeniería sólida diseñada para escalar sus operaciones.',
      seeInAction: 'EXPLORAR SOLUCIONES',
      requestDemo: 'AGENDAR CONSULTA',
      cardName: 'VSD Core',
    },
    stats: {
      stat1: {
        top: 'confiabilidad en sistemas de producción',
        bottom: 'en despliegues de misión crítica',
      },
      stat2: {
        top: 'despliegue más rápido',
        bottom: 'con arquitectura modular y flujos de IA',
      },
      stat3: {
        top: 'reducción de fricción en infraestructura',
        bottom: 'mediante automatización y monitoreo disciplinados',
      },
    },
    whatDoes: {
      tag: 'CAPACIDADES PRINCIPALES',
      title: 'Lo Que Hace Vector Space',
      subtitle:
        'Desarrollamos tecnología útil, resolvemos problemas técnicos complejos y construimos infraestructura de software robusta para que las empresas operen con precisión.',
      cards: {
        individuals: {
          title: 'INTELIGENCIA ARTIFICIAL & ML',
          desc: 'Modelos inteligentes diseñados a medida, flujos de recuperación y sistemas de automatización optimizados para la precisión operativa.',
        },
        growingTeams: {
          title: 'INFRAESTRUCTURA CLOUD & TI',
          desc: 'Arquitectura de alta disponibilidad, backends resilientes y sistemas empresariales que escalan sin deuda técnica.',
        },
        financeOps: {
          title: 'INVESTIGACIÓN APLICADA & I+D',
          desc: 'Exploración rigurosa de algoritmos avanzados, entornos de simulación e ingeniería que expande las fronteras.',
        },
      },
    },
    whoFor: {
      tag: 'DISEÑADO PARA ESCALA Y RIGOR',
      title: 'Para Quién Construimos',
      subtitle:
        'Vector Space colabora con organizaciones visionarias que necesitan arquitectura de TI confiable, automatización inteligente y claridad técnica duradera.',
      cta: 'INICIAR CONVERSACIÓN',
      tabs: {
        finance: {
          tab: 'TI EMPRESARIAL',
          heading: 'Sistemas de misión crítica construidos para perdurar',
          desc: 'Diseñamos infraestructura de TI segura, regulada y observable que elimina tiempos de inactividad, moderniza cuellos de botella y salvaguarda la integridad de los datos.',
        },
        operations: {
          tab: 'EQUIPOS DE IA Y PRODUCTO',
          heading: 'Automatización inteligente basada en la realidad',
          desc: 'Desde integraciones especializadas de LLM hasta canalizaciones de datos de alto rendimiento, llevamos la IA más allá del prototipo hacia operaciones diarias confiables.',
        },
        growing: {
          tab: 'TECNOLOGÍA DE ALTO CRECIMIENTO',
          heading: 'Architecturas diseñadas para escalar',
          desc: 'Cuando el rápido crecimiento desafía su infraestructura de software, aportamos ingeniería estructurada para respaldar la velocidad sin sacrificar la salud del sistema.',
        },
        founders: {
          tab: 'I+D E INNOVADORES',
          heading: 'Exploración disciplinada de lo que viene',
          desc: 'Ayudamos a líderes técnicos ambiciosos a investigar preguntas complejas, validar prototipos experimentales y convertir la investigación en producción de primer nivel.',
        },
      },
    },
    stories: {
      tag: 'RESULTADOS COMPROBADOS · INGENIERÍA SÓLIDA',
      title: 'Nuestra Trayectoria',
      items: [
        {
          metric: '99.98%',
          subtitle: 'tiempo de actividad en servicios críticos',
          tags: ['Cloud', 'Infraestructura'],
          company: 'Enterprise Logistics Group',
          quote: 'VSD aportó el rigor técnico y la claridad arquitectónica que nuestros sistemas necesitaban.',
        },
        {
          metric: '65%',
          subtitle: 'reducción en triaje manual de datos',
          tags: ['Soluciones IA', 'Automatización'],
          company: 'Nexus Analytics',
          quote: 'Sus flujos de IA brindaron precisión medible desde el primer día sin promesas infladas.',
        },
        {
          metric: '4x',
          subtitle: 'expansión de capacidad de procesamiento',
          tags: ['Sistemas Distribuidos', 'TI'],
          company: 'Apex Core Networks',
          quote: 'Ingeniería disciplinada, comunicación transparente y ejecución sin interrupciones.',
        },
        {
          metric: '< 15ms',
          subtitle: 'latencia de procesamiento de datos',
          tags: ['Ingeniería de Datos', 'Tiempo Real'],
          company: 'Strata Tech Labs',
          quote: 'VSD resolvió nuestro cuello de botella de alto volumen donde otros proveedores fallaron.',
        },
        {
          metric: '100%',
          subtitle: 'cumplimiento en auditorías de seguridad',
          tags: ['Seguridad', 'Gobernanza'],
          company: 'Horizon Health Data',
          quote: 'Pensamiento claro, documentación meticulosa y seguridad confiable en cada sistema.',
        },
      ],
      mainQuote:
        '“Construimos soluciones tecnológicas prácticas para problemas complejos y seguimos explorando lo que viene a continuación.”',
      author: 'Aman MB , Fundador , CEO Vector Space Dynamics',
    },
    compliance: {
      tag: 'LOS CUATRO PRINCIPIOS DE MARCA',
      summary:
        'Cada línea de código y arquitectura que entregamos está regida por nuestros cuatro pilares fundamentales: pensamiento claro, curiosidad, iteración continua y exploración disciplinada.',
      items: [
        {
          title: 'Precisión',
          desc: 'Valoramos el pensamiento claro, la ingeniería sólida, el rigor y la atención meticulosa al detalle en cada sistema.',
        },
        {
          title: 'Curiosidad',
          desc: 'Cuestionamos suposiciones, investigamos problemas complejos a fondo y aprendemos continuamente sin descanso.',
        },
        {
          title: 'Progreso',
          desc: 'Construimos soluciones prácticas, validamos ideas mediante pruebas rigurosas y mejoramos a través de iteración constante.',
        },
        {
          title: 'Exploración',
          desc: 'Perseguimos preguntas ambiciosas con disciplina y una mentalidad abierta hacia el futuro de la tecnología y el espacio.',
        },
      ],
    },
    faq: {
      tag: 'PREGUNTAS Y CLARIDAD',
      title: 'Preguntas Frecuentes.',
      subtitle:
        'Respuestas claras sobre nuestra tecnología, modelo de colaboración, capacidades de IA y visión a largo plazo.',
      col1: [
        {
          q: '¿Qué hace Vector Space hoy?',
          a: 'Vector Space entrega soluciones prácticas de TI, arquitectura de software personalizada, ingeniería cloud e inteligencia artificial aplicada para empresas que resuelven problemas complejos.',
        },
        {
          q: '¿Cuál es su enfoque para el desarrollo de IA?',
          a: 'Nos enfocamos en soluciones inteligentes con fundamentos reales. En lugar de wrappers genéricos, diseñamos modelos específicos para cada dominio, canalizaciones deterministas de recuperación y sistemas robustos de evaluación.',
        },
        {
          q: '¿Cómo colabora VSD con los equipos clientes?',
          a: 'Colaboramos directamente con líderes técnicos para diagnosticar cuellos de botella clave, diseñar soluciones modulares y ejecutar bajo estándares rigurosos de ingeniería.',
        },
        {
          q: '¿Pueden modernizar sistemas heredados?',
          a: 'Sí. Nos especializamos en refactorización incremental no destructiva, capas de abstracción de API y migraciones cloud para mantener la continuidad operativa.',
        },
      ],
      col2: [
        {
          q: '¿Cuál es la visión de VSD en el espacio e investigación científica?',
          a: 'Aunque nuestro negocio actual se enfoca en soluciones empresariales de TI e IA de alto impacto, nuestra visión a largo plazo abarca navegación autónoma, computación orbital y exploración científica.',
        },
        {
          q: '¿Qué industrias atienden actualmente?',
          a: 'Trabajamos en software empresarial, logística de datos intensivos, infraestructura financiera, sistemas de datos de salud y empresas de tecnología emergente.',
        },
        {
          q: '¿Qué pilas tecnológicas y proveedores cloud soportan?',
          a: 'Diseñamos arquitecturas agnósticas en AWS, GCP, Azure y entornos locales, priorizando lenguajes tipados modernos, contenedores y CI/CD automatizado.',
        },
        {
          q: '¿Cómo iniciamos una colaboración o proyecto?',
          a: 'Contáctenos a través de nuestro formulario de consulta. Coordinaremos una sesión de descubrimiento técnico para entender su arquitectura, objetivos y tiempos de entrega.',
        },
      ],
    },
    getStarted: {
      title: 'Ingeniería Más Allá de las Fronteras',
      subtitle:
        'Construyendo soluciones prácticas hoy y persiguiendo preguntas ambiciosas para mañana. Hablemos sobre su próximo desafío técnico.',
      placeholder: 'Ingrese su correo corporativo',
      button: 'CONTÁCTENOS',
      successMessage: '¡Gracias! Nuestro equipo de ingeniería se pondrá en contacto en breve.',
    },
    footer: {
      slogan: 'Ingeniería más allá de las fronteras.',
      platform: 'Capacidades',
      resources: 'Organización',
      legal: 'Estándares',
      hiringBadge: '¡ESTAMOS CONTRATANDO!',
      attribution: 'Vector Space Dynamics',
      copyright: '© 2026 Vector Space Dynamics. Todos los derechos reservados.',
    },
    modals: {
      demo: {
        tag: 'Vector Space · Consulta',
        title: 'Agendar Sesión de Descubrimiento Técnico',
        subtitle:
          'Conéctese directamente con nuestro equipo de ingeniería para explorar integraciones de IA, arquitectura de software o soluciones de infraestructura cloud.',
        nameLabel: 'Nombre Completo *',
        emailLabel: 'Correo Corporativo *',
        companyLabel: 'Empresa / Organización',
        teamSizeLabel: 'Tamaño del Equipo',
        goalLabel: 'Cuéntenos sobre su desafío técnico (Opcional)',
        submitBtn: 'SOLICITAR CONSULTA',
        successTitle: '¡Consulta Solicitada!',
        returnBtn: 'VOLVER AL SITIO',
      },
      video: {
        tag: 'Vector Space — Resumen Tecnológico',
        watchOnYoutube: 'VER INFORME TÉCNICO',
      },
      story: {
        tag: 'Caso de Estudio · Vector Space',
        impact: 'Impacto',
        impactDesc: 'Confiabilidad y rendimiento del sistema comprobados',
        security: 'Rigor',
        securityDesc: 'Seguridad integral e ingeniería rigurosa',
        body: 'Vector Space construye soluciones tecnológicas prácticas para problemas complejos, combinando sólida ingeniería de software, infraestructura cloud escalable e inteligencia artificial con propósito.',
        cta: 'EXPLORAR SOLUCIONES SIMILARES',
        close: 'Cerrar',
      },
    },
  }
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
