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
      degree: 'Laurea Triennale in Informatica e Tecnologie per la Produzione del Software',
      institution: "Università degli Studi di Bari 'Aldo Moro' (UNIBA)",
      location: 'Bari, Italia',
      period: '2024 — In corso',
      status: 'In Corso',
      courses: [
        'Sviluppo Software e Metodologie di Progettazione',
        'Linguaggi di Programmazione & Strutture Dati',
        'Basi di Dati e Modellazione Relazionale',
        'Architetture Software e Sistemi Web',
      ],
      description: 'Corso di laurea triennale focalizzato sulla progettazione del software, sviluppo web moderno, basi di dati, metodologie di produzione software ed etica ingegneristica.',
    },
    {
      degree: 'Diploma di Liceo Scientifico (Scienze Applicate)',
      institution: 'Liceo Scientifico (Scienze Applicate)',
      location: 'Bitetto, Italia',
      period: '2018 — 2023',
      status: 'Completato',
      courses: [
        'Fondamenti di Informatica e Logica Computazionale',
        'Matematica Avanzata e Fisica',
        'Scienze Applicate e Attività di Laboratorio Sperimentale',
      ],
      description: 'Formazione scientifica orientata al ragionamento logico, problem solving analitico e all’utilizzo delle nuove tecnologie applicate.',
    },
  ] : [
    {
      degree: 'Bachelor Degree in Computer Science and Software Production Technologies',
      institution: "University of Bari 'Aldo Moro' (UNIBA)",
      location: 'Bari, Italy',
      period: '2024 — Present',
      status: 'In Progress',
      courses: [
        'Software Engineering & System Design Methodologies',
        'Programming Languages & Data Structures',
        'Relational Databases & Data Modeling',
        'Modern Web Architectures & Operating Systems',
      ],
      description: 'Undergraduate degree program emphasizing software engineering principles, modern web application development, data architectures, and disciplined software development practices.',
    },
    {
      degree: 'Scientific High School Diploma (Applied Sciences)',
      institution: 'Liceo Scientifico (Applied Sciences)',
      location: 'Bitetto, Italy',
      period: '2018 — 2023',
      status: 'Completed',
      courses: [
        'Foundations of Computer Science & Algorithmic Logic',
        'Advanced Mathematics & Physics',
        'Experimental Science & Laboratory Methodologies',
      ],
      description: 'Solid scientific and technical foundation focused on analytical problem solving, logical reasoning, and modern technologies.',
    },
  ];

  const experienceAndMilestones = language === 'it' ? [
    {
      role: 'Rider Portapizze',
      entity: 'Al Vecchio Posto',
      location: 'Palo del Colle (BA), Italia',
      period: '08/2024 — 09/2024',
      points: [
        'Consegna puntuale di ordini a domicilio, garantendo cortesia, precisione e massima professionalità verso i clienti.',
        'Gestione autonoma degli incassi e quadratura di cassa al momento della consegna.',
      ],
    },
    {
      role: 'Operatore Call Center',
      entity: 'GierreContact',
      location: 'Napoli / Remoto, Italia',
      period: '03/2024 — 06/2024',
      points: [
        'Gestione delle relazioni commerciali e negoziazione telefonica secondo elevati standard aziendali.',
        'Utilizzo continuativo di strumenti CRM per l’aggiornamento anagrafico e il tracciamento dei lead.',
        'Raggiungimento costante dei target individuali e di squadra su volumi e tassi di conversione.',
      ],
    },
    {
      role: 'Magazziniere',
      entity: 'DigiSolution',
      location: 'Modugno (BA), Italia',
      period: '04/2023 — 08/2023',
      points: [
        'Ricezione, verifica di conformità e smistamento rapido della merce in entrata.',
        'Organizzazione del magazzino con catalogazione e sistemazione logica delle scorte.',
        'Collaborazione attiva con il team logistico per ottimizzare i flussi e le tempistiche di carico/scarico.',
      ],
    },
    {
      role: 'Assistente Bagnante Piscina',
      entity: 'Masseria Vero',
      location: 'Palo del Colle / Bari, Italia',
      period: '06/2022 — 09/2022',
      points: [
        'Utilizzo delle attrezzature tecniche per il soccorso in acqua e supporto alle funzioni vitali tramite defibrillatore (DAE).',
        'Esecuzione di protocolli di primo soccorso in caso di emergenze e situazioni critiche.',
        'Sorveglianza continua e regolamentazione della sicurezza dell’attività balneare.',
      ],
    },
    {
      role: 'Barista & Servizio al Tavolo',
      entity: 'Masseria Vero',
      location: 'Palo del Colle / Bari, Italia',
      period: 'Stagionale',
      points: [
        'Gestione di caffetteria, prima colazione, preparazione e servizio piatti freddi/caldi e aperitivi al banco e al tavolo.',
        'Ricezione forniture e assistenza operativa allo scarico merci.',
        'Gestione della cassa con elaborazione del conto e quadratura dei pagamenti.',
      ],
    },
  ] : [
    {
      role: 'Delivery Courier / Rider',
      entity: 'Al Vecchio Posto',
      location: 'Palo del Colle (BA), Italy',
      period: '08/2024 — 09/2024',
      points: [
        'Punctual on-demand home food deliveries maintaining high standards of customer courtesy and precision.',
        'Handled order payments, cash transactions, and delivery reconciliations reliably.',
      ],
    },
    {
      role: 'Contact Center Representative',
      entity: 'GierreContact',
      location: 'Napoli / Remote, Italy',
      period: '03/2024 — 06/2024',
      points: [
        'Managed customer communications and commercial outreach following defined company standards.',
        'Continuous use of enterprise CRM tools for lead tracking, customer qualification, and database records.',
        'Consistently achieved individual and team performance KPIs in volume and conversion rates.',
      ],
    },
    {
      role: 'Warehouse Assistant',
      entity: 'DigiSolution',
      location: 'Modugno (BA), Italy',
      period: '04/2023 — 08/2023',
      points: [
        'Inbound cargo reception, physical inspection, and shipment sorting.',
        'Warehouse space organization, cataloging, inventory placement, and stock tracking.',
        'Collaborated closely with logistics personnel to streamline loading and dispatch workflows.',
      ],
    },
    {
      role: 'Certified Lifeguard (Pool & Marine)',
      entity: 'Masseria Vero',
      location: 'Palo del Colle / Bari, Italy',
      period: '06/2022 — 09/2022',
      points: [
        'Operated aquatic emergency rescue equipment and supported basic life support using AED (DAE).',
        'Executed first-aid response procedures during emergency conditions.',
        'Maintained active visual surveillance and enforced pool safety standards.',
      ],
    },
    {
      role: 'Barista & Front-of-House Service',
      entity: 'Masseria Vero',
      location: 'Palo del Colle / Bari, Italy',
      period: 'Seasonal',
      points: [
        'Prepared espresso drinks, breakfast services, cold/hot dishes, and table service in high-turnover settings.',
        'Managed goods reception and assisted with stock replenishment.',
        'Operated POS till, billing calculations, and financial reconciliation.',
      ],
    },
  ];

  const competencies = [
    {
      category: language === 'it' ? 'Linguaggi & Frontend' : 'Languages & Frontend',
      skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      category: language === 'it' ? 'Backend & Dati' : 'Backend & Data',
      skills: ['Node.js', 'Fastify', 'PHP', 'SQL', 'PostgreSQL', 'SQLite', 'REST API'],
    },
    {
      category: language === 'it' ? 'Strumenti & Ambienti' : 'Tools & Environments',
      skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'npm / Vite'],
    },
    {
      category: language === 'it' ? 'Soft Skill' : 'Soft Skills',
      skills: [
        language === 'it' ? 'Problem solving pratico' : 'Practical Problem Solving',
        language === 'it' ? 'Orientamento al risultato' : 'Result-oriented',
        language === 'it' ? 'Collaborazione in team' : 'Team Collaboration',
        language === 'it' ? 'Comunicazione efficace' : 'Effective Communication',
        language === 'it' ? 'Gestione del tempo e scadenze' : 'Time & Deadline Management',
        language === 'it' ? 'Flessibilità e resilienza allo stress' : 'Stress Resilience & Flexibility',
      ],
    },
  ];

  const certificationsAndLanguages = [
    {
      title: language === 'it' ? 'Lingue' : 'Languages',
      items: [
        { name: language === 'it' ? 'Italiano' : 'Italian', level: language === 'it' ? 'Madrelingua' : 'Native speaker' },
        { name: language === 'it' ? 'Inglese' : 'English', level: language === 'it' ? 'Intermedio' : 'Intermediate' },
      ],
    },
    {
      title: language === 'it' ? 'Patenti & Informazioni' : 'Driver Licenses & Details',
      items: [
        { 
          name: language === 'it' ? 'Patenti di Guida' : 'Driver Licenses', 
          level: language === 'it' ? 'Categorie B - A1 (Automunito)' : 'Categories B - A1 (Vehicle Owner)' 
        },
        { 
          name: language === 'it' ? 'Residenza / Domicilio' : 'Location', 
          level: language === 'it' ? 'Palo del Colle (Bari), Italia' : 'Palo del Colle (Bari), Italy' 
        },
      ],
    },
  ];

  return (
    <section id="resume" className="py-12 sm:py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 pb-6 border-b border-zinc-800/80">
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
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
          {/* Primary CTA: Single Static PDF Download */}
          <a
            href="/Marco_Di_Palma_CV.pdf"
            download="Marco_Di_Palma_CV.pdf"
            aria-label="Download Marco Di Palma CV in PDF format"
            className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 bg-white text-black hover:bg-zinc-200 px-4 sm:px-5 py-3 rounded-xl font-semibold text-sm transition-all shadow-md active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-500 whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-emerald-600 group-hover:translate-y-0.5 transition-transform" />
            <span>{t.cv.cvButton}</span>
          </a>

          {/* Toggle PDF Embed Viewer */}
          <button
            type="button"
            onClick={() => setShowPdfEmbed(!showPdfEmbed)}
            aria-label={showPdfEmbed ? t.cv.hideDoc : t.cv.previewDoc}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-3 rounded-xl border border-zinc-700 bg-surface/80 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all text-sm font-medium focus-visible:ring-2 focus-visible:ring-emerald-500 whitespace-nowrap"
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
            className="mb-8 sm:mb-12 overflow-hidden"
          >
            <div className="p-1 rounded-2xl sm:rounded-3xl bg-surface border border-zinc-700 shadow-2xl">
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-zinc-800 bg-[#0d0d11] rounded-t-[calc(1rem-2px)] sm:rounded-t-[calc(1.5rem-4px)]">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span className="truncate">Marco_Di_Palma_CV.pdf (Document Viewer)</span>
                </div>
                <a
                  href="/Marco_Di_Palma_CV.pdf"
                  download="Marco_Di_Palma_CV.pdf"
                  className="text-xs font-medium text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.cv.cvButton}</span>
                </a>
              </div>
              <div className="bg-[#18181b] p-1.5 sm:p-2 rounded-b-[calc(1rem-2px)] sm:rounded-b-[calc(1.5rem-4px)]">
                <object
                  data="/Marco_Di_Palma_CV.pdf"
                  type="application/pdf"
                  className="w-full h-[450px] sm:h-[650px] rounded-xl border border-zinc-800"
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
      <div className="w-full sm:w-fit flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 mb-6 sm:mb-8 p-1 sm:p-1.5 bg-surface/70 border border-zinc-800/80 rounded-2xl">
        <button
          onClick={() => setActiveTab('education')}
          className={`shrink-0 whitespace-nowrap flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
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
          className={`shrink-0 whitespace-nowrap flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
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
          className={`shrink-0 whitespace-nowrap flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
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
          className={`shrink-0 whitespace-nowrap flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
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
      <div className="p-1 rounded-2xl sm:rounded-3xl bg-surface/60 border border-zinc-800/80 shadow-bezel">
        <div className="p-4 sm:p-8 rounded-[calc(1rem-1px)] sm:rounded-[calc(1.5rem-2px)] bg-[#0d0d11]">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5">
                      {item.courses.map((course, cIdx) => (
                        <div 
                          key={cIdx} 
                          className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-surface/70 border border-zinc-800/70 text-xs sm:text-sm text-zinc-300"
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
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            >
              {competencies.map((comp, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-surface/60 border border-zinc-800/80">
                  <h4 className="text-sm font-semibold text-white mb-3 font-mono tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    {comp.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {comp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono hover:border-zinc-600 transition-colors"
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
