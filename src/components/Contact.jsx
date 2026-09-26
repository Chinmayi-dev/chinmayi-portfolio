import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal, SectionHeading } from './ui';

export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          title="Let's Connect"
        />
        
        <p className="text-lg text-muted px-28 leading-relaxed text-center mb-10">
          I’m open to new opportunities, meaningful work, and collaborative ideas where I can contribute, learn, and build practical solutions. If you’d like to connect or discuss an opportunity, feel free to reach out.
        </p>
        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-border bg-surface text-sm text-ink transition-all duration-200 hover:-translate-y-1 shadow-lg hover:border-accent/50 hover:text-accent"          
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={profile.linkedin}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-border bg-surface text-sm text-ink transition-all duration-200 hover:-translate-y-1 shadow-lg hover:border-accent/50 hover:text-accent"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={profile.github}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-border bg-surface text-sm text-ink transition-all duration-200 hover:-translate-y-1 shadow-lg hover:border-accent/50 hover:text-accent"
          >
            <Github size={16} /> GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}