import { education } from '../data/portfolio';
import { Reveal, SectionHeading } from './ui';

export default function Education() {
  return (
    <section id="education" className="py-14">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading title="Academic background" />

        <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-0 before:top-1 before:bottom-1 before:w-px before:bg-border">
          {education.map((ed, i) => (
            <Reveal key={ed.degree} delay={0.05 * i} className="relative">
              <span className="absolute -left-[28px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
              <div className="card-surface h-full p-8 rounded-2xl border border-border transition-all duration-200 hover:-translate-y-1 shadow-xl">
                <p className="font-mono text-xs text-muted">{ed.duration}</p>
                <h3 className="font-display font-semibold text-ink mt-1">{ed.degree}</h3>
                <p className="text-sm text-muted mt-0.5">{ed.school}</p>
                <p className="text-sm text-accent mt-1 font-mono">{ed.cgpa}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
