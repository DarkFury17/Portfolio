import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const projects = [
    { 
      id: '01', 
      title: 'Weather Station Networking Suite', 
      domain: 'Systems & Network Architecture',
      category: 'systems',
      architecture: 'Engineered a concurrent client-server telemetry suite in pure C using POSIX sockets. Architected a hybrid protocol pipeline: non-blocking UDP datagrams handle high-throughput, low-latency sensor telemetry, while TCP streams provide reliable state synchronization, connection persistence, and control signaling.',
      keyDecisions: 'Non-blocking I/O multiplexing, custom binary packet serialization, POSIX signal handling for graceful shutdown, and zero packet fragmentation across network interfaces.',
      badges: ['C (C99)', 'POSIX Sockets', 'TCP / UDP', 'Multithreading', 'I/O Multiplexing', 'Distributed Systems'],
      liveLink: null,
      liveLabel: 'Headless Architecture',
      githubUrl: 'https://github.com/DarkFury17/weather-station-networking-suite',
    },
    { 
      id: '02', 
      title: 'UniPlan — Academic Exam Scheduler', 
      domain: 'Algorithmic Optimization & Full-Stack',
      category: 'fullstack',
      architecture: 'Full-stack combinatorial scheduling platform modeling university degree requirements as Directed Acyclic Graphs (DAGs) to enforce course prerequisites. Resolves exam date collisions through a Constraint Satisfaction Problem (CSP) solver, computing backward study-load distributions.',
      keyDecisions: 'Decoupled Clean Architecture engine, Zod-validated Fastify REST API, automated RFC 5545 iCalendar streams, and an exhaustive 52-test Vitest test suite.',
      badges: ['TypeScript', 'Fastify 5', 'React', 'Prisma ORM', 'Zod', 'Vitest (52 Tests)', 'RFC 5545 iCal'],
      liveLink: 'https://github.com/DarkFury17/UniPlan',
      liveLabel: 'Repository & Tests',
      githubUrl: 'https://github.com/DarkFury17/UniPlan',
    },
    { 
      id: '03', 
      title: 'EnjoyourCoffee E-Commerce', 
      domain: 'Full-Stack E-Commerce & Security',
      category: 'fullstack',
      architecture: 'Production e-commerce platform designed for resilient commercial operations, live orders, and catalog lifecycle. Built with hardened session persistence, parameterized SQL query structures to prevent injection vectors, and CSRF token defenses.',
      keyDecisions: 'Role-based access control (RBAC), client-side optimistic cart mutations, responsive checkout pipeline with payment gateway integration, and WCAG AA accessibility compliance.',
      badges: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'OWASP Hardening', 'REST API', 'Payment Flow'],
      liveLink: 'https://enjoyourcoffee.it',
      liveLabel: 'Live Platform',
      githubUrl: 'https://github.com/DarkFury17/EnjoyourCoffee.git',
    },
    { 
      id: '04', 
      title: 'Pet Shop Management System', 
      domain: 'Systems Software & Algorithms',
      category: 'systems',
      architecture: 'Desktop inventory and transaction engine implemented in low-level C. Constructs custom dynamic linear data structures (singly and doubly linked lists) to manage product nodes, order pipelines, and stock updates with atomic file serialization.',
      keyDecisions: '100% memory leak elimination verified under Valgrind, robust file-based data persistence with error recovery, and comprehensive API documentation generated via Doxygen.',
      badges: ['C Programming', 'Dynamic Data Structures', 'Valgrind', 'Memory Management', 'File I/O', 'Doxygen'],
      liveLink: null,
      liveLabel: 'CLI / Desktop System',
      githubUrl: 'https://github.com/DarkFury17/Pet-Shop-Management-System',
    },
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6 pb-6 border-b border-zinc-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-zinc-800 text-xs font-mono text-zinc-400 mb-3">
            <Code className="w-3.5 h-3.5 text-emerald-400" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Selected Software Projects
          </h2>
          <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Concrete engineering systems emphasizing low-level networking, algorithmic optimization, 
            robust data structures, and production-grade web security.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 p-1 bg-surface border border-zinc-800 rounded-xl text-xs font-medium self-start sm:self-auto">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedFilter === 'all' 
                ? 'bg-zinc-800 text-white shadow-sm' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            All Work ({projects.length})
          </button>
          <button
            onClick={() => setSelectedFilter('systems')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedFilter === 'systems' 
                ? 'bg-zinc-800 text-white shadow-sm' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Systems & C
          </button>
          <button
            onClick={() => setSelectedFilter('fullstack')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              selectedFilter === 'fullstack' 
                ? 'bg-zinc-800 text-white shadow-sm' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Full-Stack Web
          </button>
        </div>
      </div>

      {/* Projects Grid: 2-Column Responsive Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((proj, idx) => (
          <motion.article 
            key={proj.id} 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: idx * 0.08 }}
            className="group relative p-1.5 rounded-3xl bg-surface/70 border border-zinc-800/90 hover:border-zinc-600 transition-all duration-300 shadow-bezel hover:shadow-bezel-hover flex flex-col"
          >
            {/* Inner Core Container */}
            <div className="p-7 sm:p-8 rounded-[calc(1.5rem-2px)] bg-[#0d0d11] flex flex-col justify-between h-full border border-white/5">
              <div>
                {/* Header: ID, Domain, Live Tag */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
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
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                      title={proj.liveLabel}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{proj.liveLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                      <span>{proj.liveLabel}</span>
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-zinc-100 transition-colors">
                  {proj.title}
                </h3>

                {/* Architecture & Engineering Problem */}
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Problem & Architecture
                    </h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {proj.architecture}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Implementation Highlights
                    </h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {proj.keyDecisions}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {proj.badges.map((badge, bIdx) => (
                    <span 
                      key={bIdx} 
                      className="inline-flex items-center px-2.5 py-1 bg-zinc-900 text-zinc-300 text-xs font-mono rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dual CTA Links */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                {/* Source Code CTA */}
                <a 
                  href={proj.githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${proj.title} on GitHub`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm border border-zinc-700 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>

                {/* Live Demo or Release Notes CTA */}
                {proj.liveLink ? (
                  <a 
                    href={proj.liveLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Open live deployment for ${proj.title}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span>Visit Live</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <a 
                    href={proj.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-900 text-zinc-400 hover:text-zinc-200 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm border border-zinc-800 transition-all focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span>Architecture Docs</span>
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
