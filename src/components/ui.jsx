import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mb-12 max-w-xl">
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">{eyebrow}</p>
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink tracking-tight">{title}</h2>
      {description && <p className="mt-3 text-muted leading-relaxed">{description}</p>}
    </Reveal>
  );
}