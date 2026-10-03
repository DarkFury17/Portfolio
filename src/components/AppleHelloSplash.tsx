import React, { useEffect, useState, useCallback } from 'react';

interface AppleHelloSplashProps {
  onComplete: () => void;
}

export const AppleHelloSplash: React.FC<AppleHelloSplashProps> = ({ onComplete }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleFinish = useCallback(() => {
    try {
      sessionStorage.setItem('hasSeenSplash', 'true');
    } catch {
      // Ignore sessionStorage exceptions (e.g. private mode restrictions)
    }
    document.body.style.overflow = '';
    onComplete();
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    setIsClosing(true);
    setTimeout(handleFinish, 300);
  }, [handleFinish]);

  useEffect(() => {
    // Blocco scroll della pagina durante lo splash screen
    document.body.style.overflow = 'hidden';

    // Timer per avviare l'uscita fluida verso l'alto (2.1s disegno + 0.4s pausa)
    const closeTimer = setTimeout(() => {
      setIsClosing(true);
    }, 2500);

    // Timer per smontare il componente al termine della transizione (~0.6s)
    const finishTimer = setTimeout(() => {
      handleFinish();
    }, 3150);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = '';
    };
  }, [handleFinish]);

  return (
    <aside
      aria-label="Schermata di caricamento iniziale"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d1117] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isClosing ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative w-full max-w-md px-6 flex flex-col items-center">
        {/* SVG Hello Apple Style Path */}
        <svg
          viewBox="0 0 600 240"
          className="w-full h-auto stroke-white fill-none drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 60 160 C 50 130 50 80 85 50 C 110 30 130 50 120 90 L 105 180 C 105 180 140 120 165 125 C 190 130 180 180 180 180 C 200 140 230 135 240 155 C 245 165 240 180 230 180 C 215 180 215 155 240 150 C 255 145 270 170 270 180 L 290 60 L 275 180 L 310 60 L 295 180 C 310 140 340 140 350 160 C 355 175 345 185 330 185 C 315 185 315 160 335 150 C 350 140 370 160 375 175 C 380 185 390 185 400 180"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 1800,
              strokeDashoffset: 1800,
              animation: 'drawHello 2.1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            }}
          />
        </svg>

        {/* Pulsante Skip discreto in basso a destra */}
        <button
          type="button"
          onClick={handleSkip}
          aria-label="Skip splash screen"
          className="fixed bottom-6 right-6 z-50 text-xs font-mono text-zinc-400 hover:text-white transition-all uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-md cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          Skip Intro
        </button>
      </div>

      <style>{`
        @keyframes drawHello {
          0% {
            stroke-dashoffset: 1800;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          path {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>
    </aside>
  );
};

export default AppleHelloSplash;
