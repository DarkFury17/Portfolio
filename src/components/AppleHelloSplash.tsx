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
      // Ignore sessionStorage errors
    }
    document.body.style.overflow = '';
    onComplete();
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    setIsClosing(true);
    setTimeout(handleFinish, 300);
  }, [handleFinish]);

  useEffect(() => {
    // Blocco scroll durante l'animazione dello splash screen
    document.body.style.overflow = 'hidden';

    const timerExit = setTimeout(() => setIsClosing(true), 2400);
    const timerComplete = setTimeout(() => handleFinish(), 3000);

    return () => {
      clearTimeout(timerExit);
      clearTimeout(timerComplete);
      document.body.style.overflow = '';
    };
  }, [handleFinish]);

  return (
    <aside
      aria-label="Schermata di caricamento"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0e1117] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isClosing ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative w-full max-w-[550px] px-8 flex items-center justify-center">
        <svg
          viewBox="0 0 1000 450"
          className="w-full h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.18)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Path vettoriale calligrafico del logo Apple Hello */}
          <path
            d="M 125 305 C 160 275 195 240 215 190 C 235 140 220 100 195 105 C 170 110 160 145 155 185 L 140 320 C 140 320 190 245 235 245 C 280 245 270 310 270 310 C 290 270 330 250 365 255 C 405 260 395 305 355 315 C 325 322 305 300 320 275 C 335 250 375 255 390 270 C 405 285 410 310 410 310 L 440 135 L 415 315 L 485 135 L 460 315 C 480 275 515 255 550 255 C 595 255 605 295 570 325 C 530 355 500 310 525 275 C 545 245 590 255 615 275 C 640 295 640 320 625 330 C 605 340 580 320 590 295 C 600 270 635 260 670 260"
            stroke="#ffffff"
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 2600,
              strokeDashoffset: 2600,
              animation: 'drawAppleHello 2s cubic-bezier(0.45, 0, 0.2, 1) forwards',
            }}
          />
        </svg>

        <button
          type="button"
          onClick={handleSkip}
          aria-label="Skip intro animation"
          className="absolute -bottom-12 text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer px-4 py-2 rounded focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          Skip
        </button>
      </div>

      <style>{`
        @keyframes drawAppleHello {
          0% {
            stroke-dashoffset: 2600;
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
