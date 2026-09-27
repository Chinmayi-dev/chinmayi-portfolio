import { about, whatIBuild, profile, education } from '../data/portfolio';
import { Reveal, SectionHeading } from './ui';

export default function About() {
  const latestEducation = education[0];

  return (
    <section id="about" className="py-14 pt-20">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading title="A quick introduction" />

        <div className="grid md:grid-cols-[1fr_260px] gap-10 items-start">
          <Reveal delay={0.05}>
            <div className="text-ink/90 leading-relaxed text-lg">
              {about.split('\n\n').map((paragraph, index) => (
                <p key={index} className={index > 0 ? 'mt-5' : ''}>
                  {paragraph}
                </p>
              ))}
          </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface h-full p-5 space-y-6 rounded-2xl border border-border transition-all duration-200 hover:-translate-y-1 shadow-xl">
              <div>
                <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-1">Location</p>
                <p className="text-sm text-ink/90">{profile.location}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-1">Education</p>
                <p className="text-sm text-ink/90">{latestEducation.degree}</p>
                <p className="text-xs text-muted mt-0.5">{latestEducation.duration} · {latestEducation.cgpa}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-1">Focus</p>
                <p className="text-sm text-ink/90">Software Development · AI/ML · Data Science</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}