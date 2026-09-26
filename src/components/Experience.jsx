import { experience } from '../data/portfolio';
import { Reveal, SectionHeading } from './ui';

export default function Experience() {
  return (
    <section id="experience" className="py-14">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading title="Where I've worked" />

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <Reveal key={exp.role} delay={0.05 * i}>
              <div className="h-full p-10 rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 shadow-xl">
                <div className="font-mono text-xs text-muted">
                  <p>{exp.duration}</p>
                  <p className="my-1 text-accent">{exp.location}</p>
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-ink">{exp.role}</h3>
                  <p className="text-md text-muted mt-0.5">{exp.org}</p>
                  <p className="mt-2 text-md text-ink/80 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}