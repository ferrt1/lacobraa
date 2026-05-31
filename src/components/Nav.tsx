import { NAV_LINKS } from "@/lib/data";
import CobraMark from "./CobraMark";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-midnight/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#inicio" className="group flex items-center gap-2.5">
          <CobraMark className="h-8 w-8 text-celeste transition-colors group-hover:text-sol" />
          <span className="font-display text-2xl leading-none tracking-wide text-ink">
            LA<span className="text-celeste">COBRA</span>
          </span>
        </a>

        {/* Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-dim transition-colors hover:bg-white/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Kick */}
        <a
          href="#"
          className="flex items-center gap-2 rounded-full bg-celeste px-4 py-2 text-sm font-bold text-midnight transition-transform hover:scale-[1.03] active:scale-95"
        >
          <span className="hidden sm:inline">Conectar con</span> Kick
        </a>
      </div>
    </header>
  );
}
