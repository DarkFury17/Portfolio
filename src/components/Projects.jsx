import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.4 } 
  }
};

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const { language, t } = useLanguage();

  const projects = [
    { 
      id: '01', 
      title: t.projects.weatherStation.title, 
      domain: language === 'it' ? 'Architettura Reti & Sistemi' : 'Systems & Network Architecture',
      category: 'systems',
      architecture: t.projects.weatherStation.desc,
      keyDecisions: t.projects.weatherStation.highlights,
      badges: ['C (C99)', 'POSIX Sockets', 'TCP / UDP', 'Multithreading', 'I/O Multiplexing', 'Distributed Systems'],
      liveLink: null,
      liveLabel: language === 'it' ? 'Architettura Headless' : 'Headless Architecture',
      githubUrl: 'https://github.com/DarkFury17/weather-station-networking-suite',
    },
    { 
      id: '02', 
      title: t.projects.uniplan.title, 
      domain: language === 'it' ? 'Ottimizzazione Algoritmica & Full-Stack' : 'Algorithmic Optimization & Full-Stack',
      category: 'fullstack',
      architecture: t.projects.uniplan.desc,
      keyDecisions: t.projects.uniplan.highlights,
      badges: ['TypeScript', 'Fastify 5', 'React', 'Prisma ORM', 'Zod', 'Vitest (52 Tests)', 'RFC 5545 iCal'],
      liveLink: 'https://uni-plan-mocha.vercel.app/',
      liveLabel: language === 'it' ? 'Live Demo' : 'Live Demo',
      githubUrl: 'https://github.com/DarkFury17/UniPlan',
    },
    { 
      id: '03', 
      title: t.projects.enjoyourcoffee.title, 
      domain: language === 'it' ? 'E-Commerce Full-Stack & Sicurezza' : 'Full-Stack E-Commerce & Security',
      category: 'fullstack',
      architecture: t.projects.enjoyourcoffee.desc,
      keyDecisions: t.projects.enjoyourcoffee.highlights,
      badges: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'OWASP Hardening', 'REST API', 'Payment Flow'],
      liveLink: 'https://enjoyourcoffee.it',
      liveLabel: language === 'it' ? 'Piattaforma Live' : 'Live Platform',
      githubUrl: 'https://github.com/DarkFury17/EnjoyourCoffee.git',
    },
    { 
      id: '04', 
      title: t.projects.petshop.title, 
      domain: language === 'it' ? 'Software di Sistema & Algoritmi' : 'Systems Software & Algorithms',
      category: 'systems',
      architecture: t.projects.petshop.desc,
      keyDecisions: t.projects.petshop.highlights,
      badges: ['C Programming', 'Dynamic Data Structures', 'Valgrind', 'Memory Management', 'File I/O', 'Doxygen'],
      liveLink: null,
      liveLabel: language === 'it' ? 'Sistema Desktop / CLI' : 'CLI / Desktop System',
      githubUrl: 'https://github.com/DarkFury17/Pet-Shop-Management-System',
    },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-12 sm:py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 pb-6 border-b border-zinc-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-zinc-800 text-xs font-mono text-zinc-400 mb-3">
            <Code className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'it' ? 'Progetti Ingegneristici' : 'Featured Engineering'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            {t.projects.title}
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filters with smooth mobile scroll */}
        <div className="flex items-center gap-1.5 sm:gap-2 p-1 bg-surface border border-zinc-800 rounded-xl text-xs font-medium w-full sm:w-auto overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg transition-all ${
              selectedFilter === 'all' 
                ? 'bg-zinc-800 text-white shadow-sm' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {t.projects.allFilter} ({projects.length})
          </button>
          <button
            onClick={() => setSelectedFilter('systems')}
            className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg transition-all ${
              selectedFilter === 'systems' 
                ? 'bg-zinc-800 text-white shadow-sm' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {t.projects.systemsFilter}
          </button>
          <button
            onClick={() => setSelectedFilter('fullstack')}
            className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-lg transition-all ${
              selectedFilter === 'fullstack' 
                ? 'bg-zinc-800 text-white shadow-sm' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {t.projects.webFilter}
          </button>
        </div>
      </div>

      {/* Projects Grid: 2-Column Responsive Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((proj, idx) => (
          <motion.article 
            key={proj.id} 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: idx * 0.08 }}
            className="group relative p-1 sm:p-1.5 rounded-2xl sm:rounded-3xl bg-surface/70 border border-zinc-800/90 hover:border-zinc-600 transition-all duration-300 shadow-bezel hover:shadow-bezel-hover flex flex-col"
          >
            {/* Inner Core Container */}
            <div className="p-5 sm:p-8 rounded-[calc(1rem-1px)] sm:rounded-[calc(1.5rem-2px)] bg-[#0d0d11] flex flex-col justify-between h-full border border-white/5">
              <div>
                {/* Header: ID, Domain, Live Tag */}
                <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap min-w-0">
                    <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                      SYS-{proj.id}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      {proj.domain}
                    </span>
                  </div>

                  {proj.liveLink ? (
                    <a
                      href={proj.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors shrink-0"
                      title={proj.liveLabel}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{proj.liveLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-mono shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                      <span>{proj.liveLabel}</span>
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-tight group-hover:text-zinc-100 transition-colors">
                  {proj.title}
                </h3>

                {/* Architecture & Engineering Problem */}
                <div className="space-y-3 mb-5 sm:mb-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      {t.projects.problemArch}
                    </h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {proj.architecture}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      {t.projects.implementation}
                    </h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {proj.keyDecisions}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6 sm:mb-8">
                  {proj.badges.map((badge, bIdx) => (
                    <span 
                      key={bIdx} 
                      className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 bg-zinc-900 text-zinc-300 text-[11px] sm:text-xs font-mono rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dual CTA Links */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2 sm:gap-3">
                {/* Source Code CTA */}
                <a 
                  href={proj.githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${proj.title} on GitHub`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-3 sm:px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm border border-zinc-700 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{t.projects.sourceCode}</span>
                </a>

                {/* Live Demo or Architecture Notes CTA */}
                {proj.liveLink ? (
                  <a 
                    href={proj.liveLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Open live deployment for ${proj.title}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-black hover:bg-zinc-200 px-3 sm:px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span>{t.projects.liveDemo}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                ) : (
                  <a 
                    href={proj.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-zinc-900 text-zinc-400 hover:text-zinc-200 px-3 sm:px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm border border-zinc-800 transition-all focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span>{t.projects.archDocs}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
