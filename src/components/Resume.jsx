import { useState } from 'react';
import { 
  FileText, Download, GraduationCap, Briefcase, Award, Languages, 
  CheckCircle2, MapPin, Eye, EyeOff
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [showPdfEmbed, setShowPdfEmbed] = useState(false);
  const { language, t } = useLanguage();

  const education = language === 'it' ? [
    {
      degree: 'Laurea Triennale in Informatica e Tecnologie Software',
      institution: "Università degli Studi di Bari 'Aldo Moro' (UNIBA)",
      location: 'Bari, Italia',
      period: '2023 — Presente (Prevista 2026)',
      status: 'In Corso',
      courses: [
        'Algoritmi e Strutture Dati (C/Java Avanzato)',
        'Reti di Calcolatori (Socket POSIX TCP/UDP & Design di Protocolli)',
        'Sistemi Operativi (Processi, Thread, Sincronizzazione & Memoria)',
        'Ingegneria del Software (Design Patterns, Clean Architecture, Testing)',
        'Basi di Dati (Modellazione Relazionale, SQL & Normalizzazione)',
        'Architettura degli Elaboratori (Assembly, Gerarchie di Memoria & HW/SW)',
      ],
      description: 'Percorso universitario focalizzato sulla teoria della computazione, architetture software scalabili, sistemi concorrenti e programmazione di sistema a basso livello in ambiente Unix.',
    },
  ] : [
    {
      degree: 'Bachelor of Science in Computer Science & Software Engineering',
      institution: "University of Bari 'Aldo Moro' (UNIBA)",
      location: 'Bari, Italy',
      period: '2023 — Present (Expected 2026)',
      status: 'In Progress',
      courses: [
        'Algorithms & Data Structures (Advanced C/Java)',
        'Computer Networks (POSIX TCP/UDP Sockets & Protocol Design)',
        'Operating Systems (Processes, Threads, Synchronization & Memory)',
        'Software Engineering (Design Patterns, Clean Architecture, Testing)',
        'Database Management Systems (Relational Modeling, SQL & Normalization)',
        'Computer Architecture (Hardware-Software Interface, Assembly & Memory Hierarchy)',
      ],
      description: 'Undergraduate studies emphasizing computational theory, software design patterns, concurrent systems, and hands-on system programming in Unix environments.',
    },
  ];

  const experienceAndMilestones = language === 'it' ? [
    {
      role: 'Sviluppatore Full-Stack & Manutentore',
      entity: 'Piattaforma EnjoyourCoffee',
      location: 'Remoto / Bari, Italia',
      period: '2024 — Presente',
      points: [
        'Progettazione e deploy di un e-commerce di produzione per transazioni e ordini in tempo reale.',
        'Hardening di sicurezza web contro vulnerabilità OWASP: query parametrizzate, token CSRF e rotazione sessioni sicure.',
        'Ottimizzazione delle performance mobile e dello stato del carrello per ridurre gli abbandoni durante il checkout.',
      ],
    },
    {
      role: 'Programmatore di Sistema & Ricerca Reti Distribuite',
      entity: 'Progetti Ingegneristici Accademici (UNIBA)',
      location: 'Bari, Italia',
      period: '2023 — Presente',
      points: [
        'Sviluppo di una suite di telemetria multi-thread in C con socket POSIX non bloccanti e multiplexing I/O.',
        'Creazione di UniPlan, scheduler accademico combinatorio basato su grafi DAG per propedeuticità e risolutore CSP.',
        'Implementazione gestionale desktop in C con strutture dati lineari dinamiche e zero memory leak verificati su Valgrind.',
      ],
    },
  ] : [
    {
      role: 'Full-Stack Software Developer & Maintainer',
      entity: 'EnjoyourCoffee Platform',
      location: 'Remote / Bari, Italy',
      period: '2024 — Present',
      points: [
        'Architected and deployed a production-grade e-commerce application processing live transactions.',
        'Hardened web security against OWASP vulnerabilities with parameterized queries, CSRF guards, and secure session rotation.',
        'Streamlined mobile responsive performance and checkout state management, reducing friction during purchase flows.',
      ],
    },
    {
      role: 'Systems Programmer & Distributed Systems Researcher',
      entity: 'Academic Engineering Projects (UNIBA)',
      location: 'Bari, Italy',
      period: '2023 — Present',
      points: [
        'Engineered a multi-threaded telemetry suite in C using POSIX non-blocking sockets and I/O multiplexing.',
        'Built UniPlan, a combinatorial academic study scheduler utilizing DAG prerequisite modeling and CSP constraint solvers.',
        'Designed high-integrity inventory software in C with dynamic linear linked lists and zero Valgrind memory leaks.',
      ],
    },
  ];

  const competencies = [
    {
      category: language === 'it' ? 'Sistemi a Basso Livello & C' : 'Low-Level Systems & Programming',
      skills: ['C (C99/C11)', 'POSIX Sockets', 'Multithreading (pthreads)', 'Dynamic Memory Allocation', 'Valgrind Profiling', 'I/O Multiplexing', 'Linux / Unix CLI'],
    },
    {
      category: language === 'it' ? 'Tecnologie Backend & Web' : 'Backend & Web Technologies',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'Node.js', 'Fastify', 'React 18 / 19', 'Prisma ORM', 'RESTful API Architecture', 'Zod Validation'],
    },
    {
      category: language === 'it' ? 'Database & Modellazione Dati' : 'Database & Data Modeling',
      skills: ['PostgreSQL', 'Relational Schema Design', 'Query Optimization', 'Transactions & ACID', 'Prisma Schema Migrations'],
    },
    {
      category: language === 'it' ? 'DevOps, Testing & Strumenti' : 'DevOps, Testing & Tooling',
      skills: ['Git & GitHub Workflows', 'Vitest / Unit Testing', 'Docker & Compose', 'Doxygen Documentation', 'Vite Bundler', 'Tailwind CSS', 'CI/CD Basics'],
    },
  ];

  const certificationsAndLanguages = [
    {
      title: language === 'it' ? 'Lingue' : 'Languages',
      items: [
        { name: language === 'it' ? 'Italiano' : 'Italian', level: language === 'it' ? 'Madrelingua' : 'Native proficiency' },
        { name: language === 'it' ? 'Inglese' : 'English', level: language === 'it' ? 'Competenza Professionale Operativa (B2/C1)' : 'Professional Working Proficiency (B2/C1)' },
      ],
    },
    {
      title: language === 'it' ? 'Percorso & Traguardi Accademici' : 'Academic Honors & Focus',
      items: [
        { 
          name: language === 'it' ? 'Laboratorio di Reti di Calcolatori' : 'Computer Networks Laboratory', 
          level: language === 'it' ? 'Valutazione massima (Architettura C Multi-Protocollo)' : 'Top Evaluation (Multi-Protocol C Architecture)' 
        },
        { 
          name: language === 'it' ? 'Laboratorio di Ingegneria del Software' : 'Software Engineering Project Lab', 
          level: language === 'it' ? 'Focus su Clean Architecture & TDD' : 'Focus on Clean Architecture & Test-Driven Development' 
        },
      ],
    },
  ];

  return (
    <section id="resume" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-zinc-800 text-xs font-mono text-zinc-400 mb-3">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.cv.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            {language === 'it' ? 'Formazione, Esperienze & Competenze' : 'Education, Experience & Skills'}
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
            {t.cv.description}
          </p>
        </div>

        {/* Action Buttons: Single Static PDF Asset + Toggle Embed */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Primary CTA: Single Static PDF Download */}
          <a
            href="/Marco_Di_Palma_CV.pdf"
            download="Marco_Di_Palma_CV.pdf"
            aria-label="Download Marco Di Palma CV in PDF format"
            className="group inline-flex items-center gap-2.5 bg-white text-black hover:bg-zinc-200 px-5 py-3 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <Download className="w-4 h-4 text-emerald-600 group-hover:translate-y-0.5 transition-transform" />
            <span>{t.cv.cvButton}</span>
          </a>

          {/* Toggle PDF Embed Viewer */}
          <button
            type="button"
            onClick={() => setShowPdfEmbed(!showPdfEmbed)}
            aria-label={showPdfEmbed ? t.cv.hideDoc : t.cv.previewDoc}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-zinc-700 bg-surface/80 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all text-sm font-medium focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {showPdfEmbed ? (
              <>
                <EyeOff className="w-4 h-4" />
                <span>{t.cv.hideDoc}</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>{t.cv.previewDoc}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Optional Embedded PDF Viewer (Single Static Asset) */}
      <AnimatePresence>
        {showPdfEmbed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-12 overflow-hidden"
          >
            <div className="p-1 rounded-3xl bg-surface border border-zinc-700 shadow-2xl">
              <div className="flex items-center justify-between px-6 py-3 border-b border-zinc-800 bg-[#0d0d11] rounded-t-[calc(1.5rem-4px)]">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Marco_Di_Palma_CV.pdf (Document Viewer)</span>
                </div>
                <a
                  href="/Marco_Di_Palma_CV.pdf"
                  download="Marco_Di_Palma_CV.pdf"
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  {t.cv.cvButton}
                </a>
              </div>
              <div className="bg-[#18181b] p-2 rounded-b-[calc(1.5rem-4px)]">
                <object
                  data="/Marco_Di_Palma_CV.pdf"
                  type="application/pdf"
                  className="w-full h-[650px] rounded-xl border border-zinc-800"
                >
                  <div className="p-8 text-center text-zinc-300 flex flex-col items-center justify-center gap-4 h-full">
                    <p>PDF preview is not supported directly in your browser.</p>
                    <a
                      href="/Marco_Di_Palma_CV.pdf"
                      download="Marco_Di_Palma_CV.pdf"
                      className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl font-medium text-sm"
                    >
                      <Download className="w-4 h-4" />
                      {t.cv.cvButton}
                    </a>
                  </div>
                </object>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Tabs Header */}
      <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-surface/70 border border-zinc-800/80 rounded-2xl w-fit">
        <button
          onClick={() => setActiveTab('education')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeTab === 'education'
              ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/60'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          <span>{t.cv.educationTab}</span>
        </button>

        <button
          onClick={() => setActiveTab('competencies')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeTab === 'competencies'
              ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/60'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Award className="w-4 h-4 text-blue-400" />
          <span>{t.cv.competenciesTab}</span>
        </button>

        <button
          onClick={() => setActiveTab('experience')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeTab === 'experience'
              ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/60'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Briefcase className="w-4 h-4 text-purple-400" />
          <span>{t.cv.experienceTab}</span>
        </button>

        <button
          onClick={() => setActiveTab('languages')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            activeTab === 'languages'
              ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/60'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Languages className="w-4 h-4 text-amber-400" />
          <span>{t.cv.languagesTab}</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="p-1 rounded-3xl bg-surface/60 border border-zinc-800/80 shadow-bezel">
        <div className="p-6 sm:p-8 rounded-[calc(1.5rem-2px)] bg-[#0d0d11]">
          {/* 1. Education Tab */}
          {activeTab === 'education' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {education.map((item, idx) => (
                <div key={idx} className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-zinc-800/60">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.degree}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-zinc-400 mt-1 font-medium">
                        <span className="text-emerald-400">{item.institution}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:self-start">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        {item.status}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                      {language === 'it' ? 'Corsi Fondamentali & Laboratori Accademici:' : 'Core Academic Coursework & Labs:'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {item.courses.map((course, cIdx) => (
                        <div 
                          key={cIdx} 
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-surface/70 border border-zinc-800/70 text-xs sm:text-sm text-zinc-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* 2. Technical Competencies Tab */}
          {activeTab === 'competencies' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {competencies.map((comp, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-surface/60 border border-zinc-800/80">
                  <h4 className="text-sm font-semibold text-white mb-3 font-mono tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    {comp.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {comp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono hover:border-zinc-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* 3. Experience Tab */}
          {activeTab === 'experience' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {experienceAndMilestones.map((exp, idx) => (
                <div key={idx} className="space-y-3 pb-6 border-b border-zinc-800/60 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-emerald-400 mt-0.5">
                        {exp.entity} • <span className="text-zinc-400">{exp.location}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-3">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          {/* 4. Languages & Certifications Tab */}
          {activeTab === 'languages' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {certificationsAndLanguages.map((section, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-surface/60 border border-zinc-800/80 space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    {section.title}
                  </h4>
                  <div className="space-y-3">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800">
                        <div className="text-sm font-semibold text-zinc-200">
                          {item.name}
                        </div>
                        <div className="text-xs text-zinc-400 mt-0.5">
                          {item.level}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;
