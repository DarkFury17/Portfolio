import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import MyBuild from './components/MyBuild';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-zinc-100 bg-background selection:bg-zinc-800 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-24 sm:pt-28 max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-16 sm:space-y-24">
        <Hero />
        <Projects />
        <Resume />
        <Skills />
        <MyBuild />
      </main>

      <Footer />
    </div>
  );
}

export default App;
