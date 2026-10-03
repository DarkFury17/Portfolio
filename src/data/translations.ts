export type Language = 'en' | 'it';

export interface Translations {
  nav: {
    about: string;
    projects: string;
    skills: string;
    cv: string;
    contact: string;
    setup: string;
  };
  hero: {
    greeting: string;
    role: string;
    tagline: string;
    badge: string;
    exploreProjects: string;
    downloadCv: string;
    systemsHighlight: string;
    fullstackHighlight: string;
    architectureHighlight: string;
  };
  projects: {
    title: string;
    subtitle: string;
    liveDemo: string;
    sourceCode: string;
    allFilter: string;
    systemsFilter: string;
    webFilter: string;
    archDocs: string;
    problemArch: string;
    implementation: string;
    weatherStation: {
      title: string;
      desc: string;
      highlights: string;
    };
    enjoyourcoffee: {
      title: string;
      desc: string;
      highlights: string;
    };
    uniplan: {
      title: string;
      desc: string;
      highlights: string;
    };
    petshop: {
      title: string;
      desc: string;
      highlights: string;
    };
  };
  cv: {
    title: string;
    description: string;
    button: string;
    cvButton: string;
    cvNotice: string;
    previewDoc: string;
    hideDoc: string;
    educationTab: string;
    competenciesTab: string;
    experienceTab: string;
    languagesTab: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  setup: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailButton: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      cv: 'CV / Resume',
      contact: 'Contact',
      setup: 'Setup',
    },
    hero: {
      greeting: "Hi, I'm Marco Di Palma",
      role: 'Computer Science Student & Full-Stack Developer',
      tagline: 'Focused on modern web applications, scalable backends, and systems programming.',
      badge: 'Available for Software Engineering Roles & Internships',
      exploreProjects: 'Explore Projects',
      downloadCv: 'Download Resume (IT)',
      systemsHighlight: 'POSIX Sockets & IPC',
      fullstackHighlight: 'TypeScript & React',
      architectureHighlight: 'Clean & Secure Code',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Production-ready applications and software engineering works',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      allFilter: 'All Work',
      systemsFilter: 'Systems & C',
      webFilter: 'Full-Stack Web',
      archDocs: 'Architecture Docs',
      problemArch: 'Problem & Architecture',
      implementation: 'Implementation Highlights',
      weatherStation: {
        title: 'Weather Station Networking Suite',
        desc: 'Multi-threaded TCP/UDP server architecture in C for telemetry ingestion and real-time distribution.',
        highlights: 'Non-blocking I/O multiplexing, custom binary packet serialization, POSIX signal handling.',
      },
      enjoyourcoffee: {
        title: 'EnjoyourCoffee Platform',
        desc: 'E-commerce platform with RBAC authentication, secure sessions, and asset pipeline optimizations.',
        highlights: 'Role-based access control, parameterized queries, CSRF guards, and payment integration.',
      },
      uniplan: {
        title: 'UniPlan Academic Scheduler',
        desc: 'Full-stack study plan application with automated constraint checks and dependency resolution.',
        highlights: 'Decoupled Clean Architecture, Zod-validated Fastify REST API, Vitest (52 tests), RFC 5545 iCal.',
      },
      petshop: {
        title: 'Pet Shop Management System',
        desc: 'Desktop inventory engine in C with custom dynamic linear data structures (linked lists).',
        highlights: '100% memory leak elimination verified under Valgrind, atomic file serialization, Doxygen.',
      },
    },
    cv: {
      title: 'Curriculum Vitae',
      description: 'Review my background, academic path, and technical toolset.',
      button: 'Download Resume (IT)',
      cvButton: 'Download Resume (IT)',
      cvNotice: 'Available in Italian language',
      previewDoc: 'Preview Document',
      hideDoc: 'Hide Document',
      educationTab: 'Education & Coursework',
      competenciesTab: 'Technical Competencies',
      experienceTab: 'Experience & Milestones',
      languagesTab: 'Languages & Honors',
    },
    skills: {
      title: 'Technical Expertise & Tooling',
      subtitle: 'Specialized proficiencies across systems programming, distributed network protocols, and full-stack software development.',
    },
    setup: {
      title: 'Workstation & Local Lab',
      subtitle: 'Beyond software development, I maintain an interest in computer architecture, hardware optimization, and local compilation.',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Open for software engineering opportunities and collaborations.',
      emailButton: 'Send Email',
    },
  },
  it: {
    nav: {
      about: 'Chi Sono',
      projects: 'Progetti',
      skills: 'Competenze',
      cv: 'CV',
      contact: 'Contatti',
      setup: 'Setup',
    },
    hero: {
      greeting: 'Ciao, sono Marco Di Palma',
      role: 'Studente di Informatica & Full-Stack Developer',
      tagline: 'Focalizzato su applicazioni web moderne, backend scalabili e programmazione di sistema.',
      badge: 'Disponibile per Opportunità Software & Stage',
      exploreProjects: 'Esplora i Progetti',
      downloadCv: 'Scarica CV',
      systemsHighlight: 'Socket POSIX & IPC',
      fullstackHighlight: 'TypeScript & React',
      architectureHighlight: 'Codice Pulito & Sicuro',
    },
    projects: {
      title: 'Progetti in Evidenza',
      subtitle: 'Applicazioni complete e progetti di ingegneria del software',
      liveDemo: 'Demo Live',
      sourceCode: 'Codice Sorgente',
      allFilter: 'Tutti i Lavori',
      systemsFilter: 'Sistemi & C',
      webFilter: 'Web Full-Stack',
      archDocs: 'Doc Architettura',
      problemArch: 'Problema & Architettura',
      implementation: 'Dettagli Implementativi',
      weatherStation: {
        title: 'Weather Station Networking Suite',
        desc: 'Architettura server TCP/UDP multi-thread in C per acquisizione e distribuzione telemetria in tempo reale.',
        highlights: 'Multiplexing I/O non bloccante, serializzazione binaria custom e gestione segnali POSIX.',
      },
      enjoyourcoffee: {
        title: 'Piattaforma EnjoyourCoffee',
        desc: 'E-commerce completo con autenticazione RBAC, gestione sessioni sicure e ottimizzazione pipeline asset.',
        highlights: 'Controllo accessi RBAC, query parametrizzate anti-SQLi, token CSRF e integrazione pagamenti.',
      },
      uniplan: {
        title: 'UniPlan Academic Scheduler',
        desc: 'Applicazione full-stack per la pianificazione degli esami con validazione vincoli e risoluzione dipendenze.',
        highlights: 'Clean Architecture disaccoppiata, API Fastify con Zod, Vitest (52 test), standard RFC 5545 iCal.',
      },
      petshop: {
        title: 'Pet Shop Management System',
        desc: 'Software gestionale in C con strutture dati lineari dinamiche (liste collegate) e persistenza file atomica.',
        highlights: 'Zero memory leak verificati tramite Valgrind, persistenza su file e documentazione Doxygen.',
      },
    },
    cv: {
      title: 'Curriculum Vitae',
      description: 'Consulta il mio percorso accademico, le esperienze e le competenze tecniche.',
      button: 'Scarica CV',
      cvButton: 'Scarica CV',
      cvNotice: 'Formato PDF aggiornato',
      previewDoc: 'Anteprima Documento',
      hideDoc: 'Nascondi Documento',
      educationTab: 'Formazione & Corsi',
      competenciesTab: 'Competenze Tecniche',
      experienceTab: 'Esperienze & Traguardi',
      languagesTab: 'Lingue & Riconoscimenti',
    },
    skills: {
      title: 'Competenze Tecniche & Tooling',
      subtitle: 'Competenze specialistiche tra programmazione di sistema, protocolli di rete distribuiti e sviluppo software full-stack.',
    },
    setup: {
      title: 'Workstation & Laboratorio Locale',
      subtitle: 'Oltre allo sviluppo software, curo l’architettura hardware, l’ottimizzazione termica e i benchmark locali.',
    },
    contact: {
      title: 'Contatti',
      subtitle: 'Disponibile per opportunità professionali e collaborazioni tecniche.',
      emailButton: 'Invia Email',
    },
  },
};
