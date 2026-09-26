import { certifications } from '../data/portfolio';
import { Reveal, SectionHeading } from './ui';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-14">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading title="Certifications" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={0.05 * i}>
              <div className="h-full p-8 rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-1 shadow-xl">
                <Award size={18} className="text-accent" />
                <h3 className="font-display font-semibold text-ink text-sm mt-3 leading-snug">{c.title}</h3>
                <p className="text-xs text-muted mt-2 font-mono">{c.org} &middot; {c.date}</p>
                {c.url && (
                  <a href={c.url} className="mt-3 inline-flex items-center gap-1.5 text-xs text-accent hover:opacity-80">
                    View certificate <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}