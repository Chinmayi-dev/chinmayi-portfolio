import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-ink text-sm md:text-base">
          Chinmayi D
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ink transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden w-9 h-9 grid place-items-center rounded-md border border-border text-ink"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden flex flex-col gap-1 px-6 pb-4 font-mono text-sm text-muted bg-bg border-b border-border"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block py-2 hover:text-ink transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}