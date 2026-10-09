import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import AppleHelloSplash from './components/AppleHelloSplash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import MyBuild from './components/MyBuild';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    try {
      return !sessionStorage.getItem('hasSeenSplash');
    } catch {
      return false;
    }
  });

  return (
    <LanguageProvider>
      <div className="min-h-screen text-zinc-100 bg-background selection:bg-zinc-800 selection:text-white flex flex-col justify-between">
        {showSplash && (
          <AppleHelloSplash onComplete={() => setShowSplash(false)} />
        )}

        <Navbar />

        <main className="pt-20 sm:pt-28 max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-12 sm:space-y-24">
          <Hero />
          <Projects />
          <Resume />
          <Skills />
          <MyBuild />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
