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
      // Ignora eccezioni relative al sessionStorage
    }
    document.body.style.overflow = '';
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Blocco dello scroll durante lo splash screen
    document.body.style.overflow = 'hidden';

    // Durata coerente con l'animazione dell'SVG (~2.7s) prima di avviare il fade-out
    const exitTimer = setTimeout(() => {
      setIsClosing(true);
    }, 2750);

    // Smontaggio del componente al completamento della dissolvenza di 700ms
    const finishTimer = setTimeout(() => {
      handleFinish();
    }, 3450);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = '';
    };
  }, [handleFinish]);

  return (
    <aside
      aria-label="Schermata di caricamento"
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center select-none transition-opacity duration-700 ease-in-out ${
        isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-[320px] sm:max-w-[500px] px-6 flex items-center justify-center">
        <object
          type="image/svg+xml"
          data="/hello-apple.svg"
          aria-label="Apple Hello Animation"
          className="w-full max-w-[320px] sm:max-w-[500px] pointer-events-none"
        />
      </div>
    </aside>
  );
};

export default AppleHelloSplash;
