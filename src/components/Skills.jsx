import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { SectionHeading } from './ui';

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-content mx-auto px-8">
        <SectionHeading title="Technical skills" />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="border-border bg-surface duration-200 hover:-translate-y-1 shadow-xl group rounded-2xl border border-slate-200/80 bg-white/80 p-5"
            >
              <h3 className="mb-4 font-display text-lg font-semibold text-ink">{group.category}</h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={`${group.category}-${skill.name}`}
                      className="flex min-h-[50px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50/80 px-2 py-2 text-center transition-colors duration-200"
                    >
                      <div
                        className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/90 shadow-inner shadow-slate-200/60"
                        style={{ color: skill.color || '#1f2937' }}
                      >
                        {typeof Icon === 'function' && Icon.name === '' ? (
                          <Icon />
                        ) : (
                          <Icon size={20} />
                        )}
                      </div>
                      <span className="text-xs font-medium text-slate-700">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}