import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profile } from './data/portfolio';

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion) {
      setShowIntro(false);
      return undefined;
    }

    const introTimer = window.setTimeout(() => setShowIntro(false), 1700);
    return () => window.clearTimeout(introTimer);
  }, [prefersReducedMotion]);

  const introDuration = prefersReducedMotion ? 0 : 0.25;

  return (
    <div className="min-h-screen bg-bg text-ink font-body">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: introDuration, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#081426]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_25%),linear-gradient(125deg,rgba(59,130,246,0.10),transparent_40%),linear-gradient(180deg,#081426_0%,#0b172a_100%)]" />
            <div className="absolute left-[-10%] top-[18%] h-[58%] w-[60%] rotate-[18deg] bg-indigo-500/10 clip-path-[polygon(0_0,100%_12%,82%_100%,0_88%)]" />
            <div className="absolute bottom-[12%] right-[-12%] h-[48%] w-[54%] -rotate-[10deg] bg-blue-500/10 clip-path-[polygon(18%_0,100%_0,100%_100%,0_88%)]" />

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 px-5 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:px-12 md:text-left">
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: 'easeOut' }}
                className="max-w-xl md:ml-16"
              >
                <h1 className="pb-2 font-display text-2xl font-semibold tracking-tight text-slate-400 md:text-3xl lg:text-4xl">
                  Welcome to
                </h1>
                <h1 className="pb-2 font-display text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
                  Chinmayi&apos;s
                </h1>
                <h1 className="font-display text-2xl font-semibold tracking-tight text-slate-400 md:text-3xl lg:text-4xl">
                  Portfolio
                </h1>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 90 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.12, ease: 'easeOut' }}
                className="relative w-full max-w-[260px] md:w-[400px] md:max-w-none"
              >
                <div className="absolute inset-0 rounded-full bg-indigo-400/10 blur-3xl" />
                <img
                  src={profile.photo}
                  alt={profile.name}
                  onError={(event) => {
                    event.currentTarget.src = '/Chinmayi-D-Photo.png';
                  }}
                  className="relative mx-auto w-full md:size-10/12"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={showIntro ? 'pointer-events-none opacity-0' : 'opacity-100'} style={{ transition: prefersReducedMotion ? 'none' : 'opacity 0.45s ease' }}>
        <Navbar />
        <main>
          <div className="portfolio-body">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
