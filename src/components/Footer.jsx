import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 sm:mt-20 border-t border-zinc-800/80 bg-[#09090c] text-zinc-400 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-mono font-bold text-white">
                M
              </div>
              <span className="text-base font-semibold text-white tracking-tight">
                Marco Di Palma
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              {language === 'it' 
                ? 'Software Engineer & Studente di Informatica presso l’Università degli Studi di Bari. Focalizzato su sistemi distribuiti, reti a basso livello e software full-stack.'
                : 'Software Engineer & Computer Science Student at University of Bari. Focused on distributed systems, low-level networking, and secure full-stack software.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-medium">
            <a href="#hero" className="hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a>
            <a href="#resume" className="hover:text-white transition-colors">{t.nav.cv}</a>
            <a href="#skills" className="hover:text-white transition-colors">{t.nav.skills}</a>
            <a href="#build" className="hover:text-white transition-colors">{t.nav.setup}</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/DarkFury17" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-surface border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dipalmamarco/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-surface border border-zinc-800 text-zinc-400 hover:text-blue-400 hover:border-zinc-600 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:mdipalma62@gmail.com"
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-surface border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all ml-1 sm:ml-2"
              title={language === 'it' ? 'Torna all’inizio' : 'Back to Top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-6 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Marco Di Palma. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{language === 'it' ? 'Build di Produzione • Ospitato su Netlify' : 'Production Build • Hosted on Netlify'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
