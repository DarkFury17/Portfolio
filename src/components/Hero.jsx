import { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, MessageCircle, Phone, Github, Linkedin, Shield, Terminal, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 120, damping: 20, duration: 0.4 } 
  },
};

const Hero = () => {
  const [modalType, setModalType] = useState(null); // 'phone' | 'email' | 'wa' | null

  // Handle ESC key for modal dismissal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalType(null);
    };
    if (modalType) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalType]);

  return (
    <section id="hero" className="min-h-[82vh] flex flex-col justify-center relative pt-12">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-zinc-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl"
      >
        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/60 text-xs text-zinc-300 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Available for Software Engineering Roles & Internships</span>
        </motion.div>

        {/* Main Name & Title */}
        <motion.div variants={itemVariants} className="mb-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Marco Di Palma
          </h1>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-300 mb-6 leading-[1.15]">
          Software Engineer & <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500">
            Computer Science Student.
          </span>
        </motion.h2>
        
        {/* Technical Value Proposition */}
        <motion.p variants={itemVariants} className="text-base sm:text-lg text-zinc-400 mb-8 max-w-2xl leading-relaxed">
          Undergraduate Computer Science student at the{' '}
          <strong className="text-zinc-200 font-medium">University of Bari &apos;Aldo Moro&apos;</strong>. 
          Specialized in low-level network programming, POSIX concurrent sockets in C, 
          and production-grade full-stack architectures with TypeScript and React.
        </motion.p>

        {/* Key Engineering Pillars / Highlights */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 max-w-2xl">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface/60 border border-zinc-800/80">
            <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <div className="font-semibold text-zinc-200">Systems & C</div>
              <div className="text-zinc-400 text-[11px]">POSIX Sockets & IPC</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface/60 border border-zinc-800/80">
            <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
            <div className="text-xs">
              <div className="font-semibold text-zinc-200">Full-Stack</div>
              <div className="text-zinc-400 text-[11px]">TypeScript & React</div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-3 rounded-xl bg-surface/60 border border-zinc-800/80">
            <Shield className="w-4 h-4 text-purple-400 shrink-0" />
            <div className="text-xs">
              <div className="font-semibold text-zinc-200">Architecture</div>
              <div className="text-zinc-400 text-[11px]">Clean & Secure Code</div>
            </div>
          </div>
        </motion.div>

        {/* CTAs and External Links */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* View Projects CTA */}
            <a 
              href="#projects" 
              className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold text-sm hover:bg-zinc-200 active:scale-95 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-out" />
            </a>
            
            {/* Download CV CTA */}
            <a 
              href="/Marco_Di_Palma_CV.pdf"
              download="Marco_Di_Palma_CV.pdf"
              aria-label="Download Marco Di Palma CV in PDF format"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-700 bg-zinc-900/80 text-zinc-200 font-medium hover:bg-zinc-800 hover:border-zinc-500 hover:text-white active:scale-95 transition-all text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Download CV (PDF)</span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/DarkFury17" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-800 bg-surface/60 text-zinc-300 font-medium hover:bg-zinc-800 hover:text-white transition-all text-sm focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/dipalmamarco/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-800 bg-surface/60 text-zinc-300 font-medium hover:bg-zinc-800 hover:text-blue-400 transition-all text-sm focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          <div className="hidden sm:block w-px h-8 bg-zinc-800 mx-1"></div>

          {/* Quick Contact Micro-Actions */}
          <div className="flex items-center gap-2 pt-2 sm:pt-0">
            <button 
              type="button"
              onClick={() => setModalType('email')}
              className="p-3 bg-surface border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-500"
              title="Send Email"
              aria-label="Send Email to Marco Di Palma"
            >
              <Mail className="w-4 h-4" />
            </button>
            <button 
              type="button"
              onClick={() => setModalType('wa')}
              className="p-3 bg-surface border border-zinc-800 rounded-xl text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 hover:border-zinc-600 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-500"
              title="Chat on WhatsApp"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button 
              type="button"
              onClick={() => setModalType('phone')}
              className="p-3 bg-surface border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-500"
              title="Call"
              aria-label="Call Marco Di Palma"
            >
              <Phone className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Accessible Modals */}
      {modalType && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
            onClick={() => setModalType(null)}
          ></div>
          
          <div className="relative w-full max-w-sm bg-surface border border-zinc-700/80 rounded-2xl shadow-2xl p-6 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {modalType === 'phone' && (
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-4">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Direct Phone Call</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Initiate a phone call to <strong className="text-zinc-200">Marco Di Palma</strong> at <span className="text-zinc-300 font-mono">+39 324 801 8615</span>?
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setModalType(null)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <a 
                    href="tel:+393248018615"
                    onClick={() => setModalType(null)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-colors text-sm font-semibold text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            )}

            {modalType === 'email' && (
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-4">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Send Email</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Open default email client to compose to <span className="text-zinc-200 font-mono text-xs">mdipalma62@gmail.com</span>?
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setModalType(null)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <a 
                    href="mailto:mdipalma62@gmail.com"
                    onClick={() => setModalType(null)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-colors text-sm font-semibold text-center"
                  >
                    Open Mail
                  </a>
                </div>
              </div>
            )}

            {modalType === 'wa' && (
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-4">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">WhatsApp Conversation</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Open a direct WhatsApp chat with <span className="text-zinc-200 font-mono text-xs">+39 324 801 8615</span>?
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setModalType(null)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors text-sm font-medium"
                  >
                    Cancel
                  </button>
                  <a 
                    href="https://wa.me/393248018615"
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setModalType(null)}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-500 text-black hover:bg-emerald-400 transition-colors text-sm font-semibold text-center"
                  >
                    Open Chat
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
