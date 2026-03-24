import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import MyBuild from './components/MyBuild';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen text-zinc-100 bg-background selection:bg-zinc-800 pb-20">
      <nav className="fixed w-full z-50 top-0 left-0 glass-panel border-b-0">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-sm font-semibold tracking-wide text-zinc-100">
            Marco Di Palma
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#hero" className="hover:text-zinc-100 transition-colors duration-300">Home</a>
            <a href="#projects" className="hover:text-zinc-100 transition-colors duration-300">Work</a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors duration-300">Skills</a>
            <a href="#build" className="hover:text-zinc-100 transition-colors duration-300">Setup</a>
          </div>
        </div>
      </nav>

      <main className="pt-24 max-w-6xl mx-auto px-6 space-y-32">
        <Hero />
        <Projects />
        <Skills />
        <MyBuild />
      </main>
    </div>
  );
}

export default App;
