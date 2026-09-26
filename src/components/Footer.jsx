import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-content mx-auto px-6 text-center text-xs font-mono text-muted">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}