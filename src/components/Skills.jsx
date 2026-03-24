import React from 'react';
import { default as BaseCode } from 'lucide-react/dist/esm/icons/code-2';
import { Database, Layout, Server, Terminal, Cpu } from 'lucide-react';

const Skills = () => {
  const skillsConfig = [
    { name: 'Frontend React', desc: 'Building dynamic user interfaces and component libraries.', icon: <Layout />, id: '01' },
    { name: 'Backend Logic', desc: 'Robust server-side architectures and API design.', icon: <Server />, id: '02' },
    { name: 'Database Arch', desc: 'Relational and NoSQL database modeling.', icon: <Database />, id: '03' },
    { name: 'Optimization', desc: 'Performance tuning and scalability improvements.', icon: <Cpu />, id: '04' },
    { name: 'Clean Code', desc: 'Adhering to SOLID principles and readable maintainable patterns.', icon: <BaseCode />, id: '05' },
    { name: 'CLI Tools & DevOps', desc: 'Scripting, modern deployment pipelines, toolchains.', icon: <Terminal />, id: '06' },
  ];

  return (
    <section id="skills" className="py-12 border-t border-border mt-24 pt-24">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Technical Expertise</h2>
        <p className="text-zinc-400">Core competencies and functional areas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl mt-8 overflow-hidden">
        {skillsConfig.map((skill) => (
          <div 
            key={skill.id} 
            className="group relative bg-background p-8 transition-colors duration-500 hover:bg-surface"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 bg-zinc-900 rounded-md text-zinc-400 group-hover:text-white group-hover:bg-zinc-800 transition-colors duration-300">
                {React.cloneElement(skill.icon, { className: 'w-6 h-6' })}
              </div>
              <div className="text-zinc-600 font-mono text-xs font-medium">
                0{skill.id}
              </div>
            </div>
            
            <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
              {skill.name}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
