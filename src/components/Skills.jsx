import { 
  Terminal, Server, Database, Layout, 
  Network, GitBranch, Binary 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.3 } 
  }
};

const Skills = () => {
  const { language, t } = useLanguage();

  const skillsConfig = [
    { 
      id: '01',
      name: language === 'it' ? 'Sistemi & C a Basso Livello' : 'Systems & Low-Level C', 
      desc: language === 'it' 
        ? 'Programmazione di sistema C99/C11, socket POSIX, gestione manuale della memoria dinamica, sanitizzazione leak con Valgrind e aritmetica dei puntatori.'
        : 'C99/C11 systems programming, POSIX sockets, manual dynamic memory management, Valgrind leak sanitization, and pointer arithmetic.',
      icon: Terminal, 
      tags: ['C99 / C11', 'POSIX', 'Valgrind', 'Memory Safety']
    },
    { 
      id: '02',
      name: language === 'it' ? 'Protocolli di Rete & Concorrenza' : 'Network Protocols & Concurrency', 
      desc: language === 'it'
        ? 'Architetture socket con datagrammi UDP non bloccanti e streaming affidabile TCP. Sincronizzazione multi-thread client-server.'
        : 'Socket architecture utilizing non-blocking UDP datagrams and reliable TCP streaming. Multithreaded client-server synchronization.',
      icon: Network, 
      tags: ['TCP / UDP', 'POSIX Threads', 'I/O Multiplexing', 'RFC 5545']
    },
    { 
      id: '03',
      name: language === 'it' ? 'Ingegneria Backend & API' : 'Backend & API Engineering', 
      desc: language === 'it'
        ? 'Microservizi e REST API ad alto throughput con TypeScript, Node.js e Fastify. Validazione schemi rigorosa con Zod e Clean Architecture.'
        : 'High-throughput microservices and REST APIs with TypeScript, Node.js, and Fastify. Strict schema validation with Zod and Clean Architecture.',
      icon: Server, 
      tags: ['TypeScript', 'Fastify', 'Node.js', 'Clean Architecture']
    },
    { 
      id: '04',
      name: language === 'it' ? 'Architettura Basi di Dati' : 'Database Architecture', 
      desc: language === 'it'
        ? 'Modellazione relazionale di schemi, strategie di indicizzazione, normalizzazione dei dati e query type-safe con Prisma e PostgreSQL.'
        : 'Relational database schema modeling, indexing strategies, data normalization, and type-safe database queries via Prisma and PostgreSQL.',
      icon: Database, 
      tags: ['PostgreSQL', 'Prisma ORM', 'Schema Design', 'ACID']
    },
    { 
      id: '05',
      name: language === 'it' ? 'Sistemi Frontend & UI' : 'Frontend Systems & UI', 
      desc: language === 'it'
        ? 'Architettura a componenti React, primitive di gestione dello stato, alberi DOM accessibili, animazioni fluide con Framer Motion e Tailwind CSS.'
        : 'Component architecture in React, state management primitives, accessible DOM trees, Framer Motion choreography, and responsive Tailwind CSS.',
      icon: Layout, 
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    { 
      id: '06',
      name: language === 'it' ? 'Verifica del Software & Tooling' : 'Verification & Toolchain', 
      desc: language === 'it'
        ? 'Sviluppo guidato dai test con Vitest (52+ asserzioni automatizzate), containerizzazione Docker, workflow Git e documentazione Doxygen.'
        : 'Test-driven design with Vitest (52+ automated assertions), Docker containerization, Git branching workflows, and automated Doxygen docs.',
      icon: GitBranch, 
      tags: ['Vitest', 'Docker', 'Git', 'Doxygen']
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 scroll-mt-24 border-t border-zinc-800/80">
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-zinc-800 text-xs font-mono text-zinc-400 mb-3">
          <Binary className="w-3.5 h-3.5 text-emerald-400" />
          <span>{language === 'it' ? 'Competenze Cardine' : 'Core Capabilities'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          {t.skills.title}
        </h2>
        <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
          {t.skills.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {skillsConfig.map((skill, idx) => {
          const IconComponent = skill.icon;
          return (
            <motion.div 
              key={skill.id} 
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: idx * 0.05 }}
              className="group relative p-1 rounded-2xl bg-surface/50 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div className="p-5 sm:p-6 rounded-[calc(1rem-1px)] bg-[#0d0d11] flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 bg-zinc-900 rounded-xl text-emerald-400 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-zinc-400 font-mono text-xs font-semibold">
                      SYS-{skill.id}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-zinc-100 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {skill.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                  {skill.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
