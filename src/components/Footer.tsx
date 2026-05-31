import { NAV_LINKS } from "@/lib/data";
import CobraMark from "./CobraMark";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-midnight">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <CobraMark className="h-7 w-7 text-celeste" />
            <span className="font-display text-xl tracking-wide text-ink">
              LA<span className="text-celeste">COBRA</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-dim">
            La casa de la banda para vivir el Mundial 2026. Sitio de fans, no
            oficial.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-dim">
            Secciones
          </p>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-ink-dim transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-dim">
            Seguí a La Cobra
          </p>
          <ul className="mt-3 space-y-2">
            {["Kick", "YouTube", "Instagram", "X / Twitter"].map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-sm text-ink-dim transition-colors hover:text-celeste"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-ink-dim sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} La Cobra · Hecho por la banda.</span>
          <span>Mundial 2026 · 11 jun — 19 jul</span>
        </div>
      </div>
    </footer>
  );
}
