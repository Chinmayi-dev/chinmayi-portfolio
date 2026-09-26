import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Brain, Database, Layers3, Braces } from 'lucide-react';
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
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[10px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative min-h-screen max-w-content mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0, top: ready ? '18%' : '50%' }}
          transition={{ duration: 0.9, ease }}
          className="absolute left-[-1%] lg:left-[4%] w-[580px] z-20"
        >
          <h2 className="font-display px-2 pt-10 text-3xl md:text-3xl text-muted">Hello, I'm</h2>
          <h1 className="font-display text-6xl md:text-7xl mt-2 font-semibold tracking-tight text-ink">
            {profile.name}
          </h1>

          <AnimatePresence>
            {ready && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mt-7 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Open to opportunities
                </div>
                <h2 className="mt-5 font-display text-xl md:text-2xl text-muted">{profile.role}</h2>
                <p className="mt-4 max-w-md text-muted leading-relaxed">{profile.intro}</p>
                <div className="mt-8 flex gap-4">
                  <a href="#projects" className="px-5 py-2.5 rounded-full bg-accent text-bg text-sm font-medium hover:-translate-y-1 transition">
                    View Projects
                  </a>
                  <a href="#contact" className="px-5 py-2.5 rounded-full bg-accent text-bg text-sm font-medium hover:-translate-y-1 transition">
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
              className="absolute right-[24%] py-14 top-24 -translate-y-1/2 w-[300px]"
            >
              <img src={profile.photo} alt={profile.name} className="w-full drop-shadow-2xl" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {ready && (
            <motion.div
              initial="hidden"
              animate="show"
              className="absolute right-[6%] pt-10 top-1/2 -translate-y-1/2 w-[340px] h-[500px] grid gap-5"
            >
              {cards.map(({ title, text, icon: Icon }, i) => (
                <div key={title} className={i === 1 ? 'translate-x-20' : ''}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: 90 },
                      show: { opacity: 1, x: 0, transition: { delay: 0.15 + i * 0.12, duration: 0.65, ease } },
                    }}
                    whileHover={{ x: -6, scale: 1.02 }}
                    className="rounded-3xl border border-border bg-surface px-6 py-5 shadow-xl"
                  >
                    <Icon size={27} className="text-accent mb-3" />
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