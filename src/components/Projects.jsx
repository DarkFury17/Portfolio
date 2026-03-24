import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.4 } 
  }
};

const Projects = () => {
  const projects = [
    { 
      id: '01', 
      title: 'Enjoy Your Coffee', 
      subtitle: 'E-commerce Live & Full Platform',
      desc: 'Complete and scalable online sales platform, currently being updated. Full management of catalog, orders, and payment systems.',
      badges: ['Web Development', 'E-commerce', 'Live Project'],
      liveLink: 'https://enjoyourcoffee.it',
      repoLink: 'https://github.com/DarkFury17/EnjoyourCoffee.git'
    },
    { 
      id: '02', 
      title: 'Pet Shop Management System', 
      subtitle: 'Academic Project - Computer Science Laboratory',
      desc: 'Management software for the buying, selling, and inventory of a pet supply store. Focus on software architecture and data integrity.',
      badges: ['Software Engineering', 'SQL', 'Java'],
      liveLink: null,
      repoLink: '#'
    },
    { 
      id: '03', 
      title: 'Weather Networking Suite', 
      subtitle: 'Multi-Protocol Network Architecture (TCP/UDP)',
      desc: "A hybrid distributed architecture using TCP and UDP protocols for weather data exchange. The system manages both fast (UDP) and reliable (TCP) transmission between server and client nodes. Developed for the Computer Networks exam at the University of Bari.",
      badges: ['Socket Programming', 'C', 'Distributed Systems'],
      liveLink: null,
      githubLinks: [
        { label: 'View Code', url: 'https://github.com/DarkFury17/weather-station-networking-suite' }
      ]
    },
  ];

  return (
    <section id="projects" className="py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Selected Work</h2>
          <p className="text-zinc-400">Recent projects and ongoing developments.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <motion.div 
            key={proj.id} 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-surface border border-border rounded-xl p-8 flex flex-col justify-between min-h-[420px] transition-colors duration-500 hover:shadow-2xl hover:shadow-white/5 hover:border-zinc-500"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="text-xs font-mono text-zinc-500">
                  {proj.id}
                </div>
                
                <div className="flex items-center gap-2">
                  {!proj.githubLinks && (
                    <a 
                      href={proj.repoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zinc-500 hover:text-white transition-colors" 
                      title="Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-1 tracking-tight">{proj.title}</h3>
              <p className="text-sm font-medium text-zinc-300 mb-4">{proj.subtitle}</p>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {proj.badges.map((badge, idx) => (
                  <span key={idx} className="inline-flex items-center px-2.5 py-1 bg-zinc-800/50 text-zinc-300 text-xs font-medium rounded-md border border-zinc-700/50">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              {proj.liveLink ? (
                <a 
                  href={proj.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 bg-white text-black px-4 py-3 rounded-lg font-medium transition-all hover:bg-zinc-200 active:scale-95 text-sm"
                >
                  Visit Live Site
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : proj.githubLinks ? (
                <div className="flex gap-3">
                  {proj.githubLinks.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-zinc-800 text-zinc-300 px-3 py-3 rounded-lg font-medium border border-zinc-700 hover:bg-zinc-700 hover:text-white transition-all text-sm"
                    >
                      <Github className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <button disabled className="inline-flex items-center justify-center w-full gap-2 bg-zinc-800 text-zinc-500 px-4 py-3 rounded-lg font-medium cursor-not-allowed shadow-none border border-transparent text-sm">
                  Coming soon
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
