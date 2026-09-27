import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Brain, Database, Layers3 } from 'lucide-react';
import { profile } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1];

const cards = [
  { title: 'AI / ML', text: 'TensorFlow · PyTorch · OpenCV', icon: Brain },
  { title: 'Data-Driven Systems', text: 'PySpark · Pandas · NumPy', icon: Database },
  { title: 'Full-Stack Applications', text: 'React · Flask · FastAPI · SQL', icon: Layers3 },
];

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="absolute -bottom-24 -right-24 w-[420px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto min-h-screen w-full max-w-content px-5 pb-16 pt-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0, top: ready ? '18%' : '50%' }}
          transition={{ duration: 0.9, ease }}
          className="relative z-20 w-full md:absolute md:left-[-1%] md:w-[580px] md:pt-10"
        >
          <h2 className="px-2 pt-0 font-display text-2xl text-muted md:pt-10 md:text-3xl">Hello, I'm</h2>
          <h1 className="mt-2 max-w-full break-words font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <AnimatePresence>
            {ready && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease }}
              >
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent md:mt-7">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                  Open to opportunities
                </div>
                <h2 className="mt-5 font-display text-lg text-muted md:text-xl lg:text-2xl">{profile.role}</h2>
                <p className="mt-4 max-w-full text-sm leading-relaxed text-muted md:max-w-md md:text-base">{profile.intro}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-row md:gap-4">
                  <a href="#projects" className="rounded-full bg-accent px-5 py-2.5 text-center text-sm font-medium text-bg transition hover:-translate-y-1 sm:w-auto md:px-5 md:py-2.5">
                    View Projects
                  </a>
                  <a href="#contact" className="rounded-full bg-accent px-5 py-2.5 text-center text-sm font-medium text-bg transition hover:-translate-y-1 sm:w-auto md:px-5 md:py-2.5">
                    Contact Me
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {!ready && (
            <motion.div
              initial={{ opacity: 0, x: 120, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.96 }}
              transition={{ duration: 0.9, ease }}
              className="relative mt-8 flex justify-center md:absolute md:right-[24%] md:top-24 md:w-[300px] md:-translate-y-1/2 md:justify-start"
            >
              <img src={profile.photo} alt={profile.name} className="w-full max-w-[220px] drop-shadow-2xl md:max-w-none md:w-[300px]" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {ready && (
            <motion.div
              initial="hidden"
              animate="show"
              className="relative z-10 mt-10 grid w-full max-w-none gap-4 md:absolute md:right-[6%] md:top-1/2 md:h-[500px] md:w-[340px] md:-translate-y-1/2 md:gap-5"
            >
              {cards.map(({ title, text, icon: Icon }, i) => (
                <div key={title} className={i === 1 ? 'md:translate-x-20' : ''}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: 90 },
                      show: { opacity: 1, x: 0, transition: { delay: 0.15 + i * 0.12, duration: 0.65, ease } },
                    }}
                    whileHover={{ x: -6, scale: 1.02 }}
                    className="card-surface w-full rounded-3xl border border-border px-5 py-4 shadow-xl md:px-6 md:py-5"
                  >
                    <Icon size={27} className="mb-3 text-accent" />
                    <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm text-muted">{text}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}