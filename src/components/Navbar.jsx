import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Skills', href: '#skills' },
    { label: 'Setup', href: '#build' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none">
      <nav 
        aria-label="Main Navigation"
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-300 pointer-events-auto ${
          scrolled 
            ? 'glass-panel shadow-2xl py-3 px-5 border border-white/10' 
            : 'bg-surface/80 backdrop-blur-md py-3.5 px-6 border border-zinc-800/80 shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 text-zinc-100 font-semibold tracking-tight hover:text-white transition-colors group focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-xs font-mono font-bold text-white shadow-inner group-hover:border-zinc-500 transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight leading-none text-zinc-100">
                Marco Di Palma
              </span>
              <span className="text-[10px] font-mono text-zinc-400 leading-tight mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="px-3.5 py-1.5 rounded-lg hover:text-zinc-100 hover:bg-white/5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action: Download CV & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a 
              href="/Marco_Di_Palma_CV.pdf"
              download="Marco_Di_Palma_CV.pdf"
              aria-label="Download Marco Di Palma CV in PDF format"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-200 bg-zinc-900 border border-zinc-700/80 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume PDF</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button 
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
              className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pointer-events-auto max-w-6xl mx-auto mt-2 rounded-2xl glass-panel border border-white/10 p-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-3 mt-1 border-t border-zinc-800/80 flex flex-col gap-3">
                <a 
                  href="/Marco_Di_Palma_CV.pdf"
                  download="Marco_Di_Palma_CV.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download Resume (PDF)
                </a>

                <div className="flex items-center justify-center gap-4 pt-2 text-zinc-400">
                  <a 
                    href="https://github.com/DarkFury17" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/dipalmamarco/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
