import React, { useState } from 'react';
import { ArrowRight, MapPin, Mail, MessageCircle, Phone, X, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 120, damping: 20, duration: 0.4 } 
  },
};

const buttonHover = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 10 },
};

const Hero = () => {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isWaModalOpen, setIsWaModalOpen] = useState(false);

  return (
    <section id="hero" className="min-h-[75vh] flex flex-col justify-center relative">
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-zinc-900/40 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs text-zinc-400 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for new opportunities
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
            Marco Di Palma
          </h1>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-300 mb-6 leading-[1.1]">
          Software Engineer. <br className="hidden sm:block" />
          <span className="text-zinc-500">Creating precise and scalable web experiences.</span>
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
          Computer Science student at the <span className="text-zinc-200 font-medium">University of Bari 'Aldo Moro'</span>. 
          Passionate about hardware and software optimization, with a special focus on web development and new technologies.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center gap-5 mt-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <motion.a 
               href="#projects" 
               whileHover={buttonHover}
               whileTap={{ scale: 0.95 }}
               className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md font-medium transition-colors hover:bg-zinc-200 text-sm">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-out" />
            </motion.a>
            
            <motion.a 
               href="https://github.com/DarkFury17" 
               target="_blank" rel="noopener noreferrer"
               whileHover={buttonHover}
               whileTap={{ scale: 0.95 }}
               className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-zinc-700 bg-transparent text-zinc-300 font-medium transition-colors hover:bg-zinc-800 hover:border-zinc-500 hover:text-white text-sm">
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>

            <motion.a 
               href="https://www.linkedin.com/in/dipalmamarco/" 
               target="_blank" rel="noopener noreferrer"
               whileHover={buttonHover}
               whileTap={{ scale: 0.95 }}
               className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-zinc-700 bg-transparent text-zinc-300 font-medium transition-colors hover:bg-zinc-800 hover:border-zinc-500 hover:text-blue-400 text-sm">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
          </div>

          <div className="hidden md:block w-px h-8 bg-zinc-800"></div>

          <div className="flex items-center gap-3">
            <motion.button 
               onClick={() => setIsEmailModalOpen(true)}
               whileHover={buttonHover}
               whileTap={{ scale: 0.95 }}
               className="p-3 bg-surface border border-border rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-500 transition-colors shadow-sm cursor-pointer"
               title="Email">
              <Mail className="w-4 h-4" />
            </motion.button>
            <motion.button 
               onClick={() => setIsWaModalOpen(true)}
               whileHover={buttonHover}
               whileTap={{ scale: 0.95 }}
               className="p-3 bg-surface border border-border rounded-md text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 hover:border-zinc-500 transition-colors shadow-sm cursor-pointer"
               title="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </motion.button>
            <motion.button 
               onClick={() => setIsPhoneModalOpen(true)}
               whileHover={buttonHover}
               whileTap={{ scale: 0.95 }}
               className="p-3 bg-surface border border-border rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-500 transition-colors shadow-sm cursor-pointer"
               title="Call">
              <Phone className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      {/* Phone Confirmation Modal */}
      {isPhoneModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsPhoneModalOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-sm bg-surface border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Confirm Call</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Do you want to start a call to <strong>Marco Di Palma</strong> at the number <span className="text-zinc-300 font-mono">+39 324 801 8615</span>?
              </p>
              
              <div className="flex gap-3 w-full">
                <button 
                  onClick={() => setIsPhoneModalOpen(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-border text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <a 
                  href="tel:+393248018615"
                  onClick={() => setIsPhoneModalOpen(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors text-sm font-medium text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Email Confirmation Modal */}
      {isEmailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsEmailModalOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-sm bg-surface border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Send Email</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Do you want to send an email to <span className="text-zinc-300 font-mono">mdipalma62@gmail.com</span>?
              </p>
              
              <div className="flex gap-3 w-full">
                <button 
                  onClick={() => setIsEmailModalOpen(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-border text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <a 
                  href="mailto:mdipalma62@gmail.com"
                  onClick={() => setIsEmailModalOpen(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors text-sm font-medium text-center"
                >
                  Send
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Confirmation Modal */}
      {isWaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsWaModalOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-sm bg-surface border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Open WhatsApp</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Do you want to open a chat on WhatsApp with <span className="text-zinc-300 font-mono">+39 324 801 8615</span>?
              </p>
              
              <div className="flex gap-3 w-full">
                <button 
                  onClick={() => setIsWaModalOpen(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-border text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <a 
                  href="https://wa.me/393248018615"
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setIsWaModalOpen(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors text-sm font-medium text-center"
                >
                  Open Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
