"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { I } from "./ui";

const EMBLEM = "/emblema-26.png";
const LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Fixture", href: "/fixture" },
  { label: "Sorteos", href: "/sorteos" },
  { label: "Álbum", href: "/album" },
  { label: "Ranking", href: "/ranking" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href !== "#" && (href === "/" ? pathname === "/" : pathname.startsWith(href));
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand" aria-label="La Cobra — inicio">
            <span className="brand-mark"><img src={EMBLEM} alt="" /></span>
            <span className="brand-name">LA <span className="b-cobra">COBRA</span></span>
            <span className="brand-badge">26&apos;</span>
          </Link>
          <nav className="nav-links">
            {LINKS.map((l) => (
              <Link key={l.label} href={l.href} className={"nav-link" + (isActive(l.href) ? " active" : "")}>{l.label}</Link>
            ))}
          </nav>
          <div className="nav-right">
            <a href="#" className="btn btn-ghost">Ranking</a>
            <a href="#" className="btn btn-kick"><I.kick /> Conectar con Kick</a>
            <button className={"hamb" + (menuOpen ? " open" : "")} onClick={() => setMenuOpen((o) => !o)} aria-label="Menú">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={"drawer" + (menuOpen ? " open" : "")}>
        {LINKS.map((l) => (
          <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
        <a href="#" className="btn btn-kick" onClick={() => setMenuOpen(false)}><I.kick /> Conectar con Kick</a>
      </div>
    </>
  );
}
