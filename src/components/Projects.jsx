import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Github, ArrowRight, X, Bot, ShieldCheck, Leaf, Network, ScanEye } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Reveal, SectionHeading } from './ui';

const icons = { robot: Bot, api: ShieldCheck, leaf: Leaf, neural: Network, defect: ScanEye };

function ProjectModal({ project, onClose }) {
  const d = project.details || {};

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="project-modal-backdrop" onClick={onClose} aria-hidden="true">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-bg/95 px-6 py-5 backdrop-blur-sm md:px-8">
          <h3 id="project-modal-title" className="font-display text-xl font-semibold text-ink">{project.title}</h3>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border text-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            <X size={16} />
          </button>
        </div>

        <div className="project-modal-content">
          {project.workflow && (
            <div className="mb-6 rounded-lg border border-border bg-surface/80 p-4 font-mono text-xs text-muted">
              {project.workflow.map((step, i) => (
                <div key={step}>
                  <span className="text-ink">{step}</span>
                  {i < project.workflow.length - 1 && <div className="my-1 text-accent">↓</div>}
                </div>
              ))}
            </div>
          )}

          <div className="space-y-5">
            {d.problem && (
              <div>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-accent">Problem</p>
                <p className="text-sm leading-relaxed text-ink/85">{d.problem}</p>
              </div>
            )}
            {d.overview && (
              <div>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-accent">Overview</p>
                <p className="text-sm leading-relaxed text-ink/85">{d.overview}</p>
              </div>
            )}
            {d.highlights && (
              <div>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-accent">Key Highlights</p>
                <ul className="space-y-1.5">
                  {d.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm leading-relaxed text-ink/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {d.results && (
              <div>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-accent">Results</p>
                <p className="text-sm leading-relaxed text-ink/85">{d.results}</p>
              </div>
            )}
            {d.future && (
              <div>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-accent">Future Improvements</p>
                <p className="text-sm leading-relaxed text-ink/85">{d.future}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function ProjectCard({ project, onOpen, delay = 0 }) {
  const [imageError, setImageError] = useState(false);
  const Icon = icons[project.art] || Bot;
  const mainStack = project.stack.slice(0, 4);

  return (
    <Reveal delay={delay}>
      <div className="card-surface h-full overflow-hidden rounded-xl border border-border shadow-xl transition-all duration-200 hover:-translate-y-1">
        <div className="relative h-[200px] w-full overflow-hidden rounded-t-xl border-b border-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
          {project.image && !imageError ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
              <div className="flex flex-col items-center gap-3 text-center text-slate-200">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5">
                  <Icon size={22} className="text-accent" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-300">Project</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-display text-base font-semibold text-ink">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {mainStack.map((s) => (
              <span key={s} className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">{s}</span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button onClick={() => onOpen(project)} className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-xs font-medium text-bg transition-opacity hover:opacity-90">
              View Details <ArrowRight size={13} />
            </button>
            {project.github && (
              <a href={project.github} className="inline-flex items-center gap-1.5 text-xs font-mono text-muted transition-colors hover:text-accent">
                <Github size={13} /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-14">
      <div className="max-w-content mx-auto px-8">
        <SectionHeading title="What I've built" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} onOpen={setSelectedProject} delay={0.05 * i} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}