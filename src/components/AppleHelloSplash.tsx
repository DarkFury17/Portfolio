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
      // Ignore sessionStorage exceptions
    }
    document.body.style.overflow = '';
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Blocco dello scroll durante lo splash screen
    document.body.style.overflow = 'hidden';

    // 2.2s disegno + 0.5s pausa prima di sbloccare il sito
    const exitTimer = setTimeout(() => {
      setIsClosing(true);
    }, 2700);

    const finishTimer = setTimeout(() => {
      handleFinish();
    }, 3400);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = '';
    };
  }, [handleFinish]);

  return (
    <aside
      aria-label="Caricamento"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000] select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isClosing ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="w-full max-w-[620px] px-8 flex items-center justify-center">
        <svg
          viewBox="0 0 1000 420"
          className="w-full h-auto overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Tracciato continuo 1:1 Apple Hello Calligraphy */}
          <path
            d="M 120 282 C 162 250 205 198 226 138 C 238 103 234 72 210 74 C 182 76 168 116 164 162 L 150 292 C 150 292 188 238 238 238 C 285 238 282 288 282 288 C 298 248 338 234 372 238 C 418 244 416 288 382 300 C 342 314 316 286 334 258 C 352 230 398 236 414 254 C 428 270 430 294 430 294 L 466 112 L 436 294 L 512 112 L 482 294 C 504 252 542 234 582 234 C 632 234 642 278 606 310 C 564 346 524 300 554 260 C 576 230 626 238 652 260 C 678 282 678 308 660 320 C 638 332 608 308 620 282 C 632 254 672 244 712 244 C 748 244 778 260 790 270"
            stroke="#ffffff"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 3800,
              strokeDashoffset: 3800,
              animation: 'drawAppleOfficial 2.2s cubic-bezier(0.42, 0, 0.15, 1) forwards',
            }}
          />
        </svg>
      </div>

      <style>{`
        @keyframes drawAppleOfficial {
          0% {
            stroke-dashoffset: 3800;
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
