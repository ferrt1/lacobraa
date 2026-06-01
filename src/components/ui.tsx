// Banderas (colores reales) como fills CSS + íconos hechos a mano.
// Portado 1:1 del export de Claude Design.

export const FLAGS: Record<string, { n: string; bg: string }> = {
  ar: { n: "Argentina", bg: "linear-gradient(180deg,#75AADB 0 35%,#fff 35% 65%,#75AADB 65%)" },
  es: { n: "España", bg: "linear-gradient(180deg,#AA151B 0 27%,#F1BF00 27% 73%,#AA151B 73%)" },
  mx: { n: "México", bg: "linear-gradient(90deg,#006847 0 33%,#fff 33% 66%,#CE1126 66%)" },
  uy: { n: "Uruguay", bg: "linear-gradient(180deg,#fff 0 55%,#7B9FD6 55%)" },
  co: { n: "Colombia", bg: "linear-gradient(180deg,#FCD116 0 50%,#003893 50% 75%,#CE1126 75%)" },
  cl: { n: "Chile", bg: "linear-gradient(180deg,#fff 0 50%,#D52B1E 50%)" },
  pe: { n: "Perú", bg: "linear-gradient(90deg,#D91023 0 33%,#fff 33% 66%,#D91023 66%)" },
  br: { n: "Brasil", bg: "linear-gradient(135deg,#009C3B 0 34%,#FEDF00 34% 66%,#009C3B 66%)" },
  fr: { n: "Francia", bg: "linear-gradient(90deg,#0055A4 0 33%,#fff 33% 66%,#EF4135 66%)" },
  de: { n: "Alemania", bg: "linear-gradient(180deg,#111 0 33%,#DD0000 33% 66%,#FFCE00 66%)" },
  nl: { n: "P. Bajos", bg: "linear-gradient(180deg,#AE1C28 0 33%,#fff 33% 66%,#21468B 66%)" },
  pt: { n: "Portugal", bg: "linear-gradient(90deg,#006600 0 40%,#FF0000 40%)" },
  hr: { n: "Croacia", bg: "linear-gradient(180deg,#FF0000 0 33%,#fff 33% 66%,#171796 66%)" },
  jp: { n: "Japón", bg: "radial-gradient(circle at 50% 50%,#BC002D 0 30%,#fff 30%)" },
  us: { n: "EE.UU.", bg: "repeating-linear-gradient(180deg,#B22234 0 14%,#fff 14% 28%)" },
  ca: { n: "Canadá", bg: "linear-gradient(90deg,#FF0000 0 28%,#fff 28% 72%,#FF0000 72%)" },
  en: { n: "Inglaterra", bg: "linear-gradient(90deg,#fff 0 44%,#CE1124 44% 56%,#fff 56%)" },
  dk: { n: "Dinamarca", bg: "linear-gradient(90deg,#C8102E 0 36%,#fff 36% 44%,#C8102E 44%)" },
  se: { n: "Suecia", bg: "linear-gradient(90deg,#006AA7 0 40%,#FECC02 40% 50%,#006AA7 50%)" },
  no: { n: "Noruega", bg: "linear-gradient(90deg,#EF2B2D 0 36%,#002868 36% 48%,#EF2B2D 48%)" },
  pl: { n: "Polonia", bg: "linear-gradient(180deg,#fff 0 50%,#DC143C 50%)" },
  rs: { n: "Serbia", bg: "linear-gradient(180deg,#C6363C 0 33%,#0C4076 33% 66%,#fff 66%)" },
  ch: { n: "Suiza", bg: "#D52B1E" },
  at: { n: "Austria", bg: "linear-gradient(180deg,#ED2939 0 33%,#fff 33% 66%,#ED2939 66%)" },
  be: { n: "Bélgica", bg: "linear-gradient(90deg,#000 0 33%,#FAE042 33% 66%,#ED2939 66%)" },
  it: { n: "Italia", bg: "linear-gradient(90deg,#009246 0 33%,#fff 33% 66%,#CE2B37 66%)" },
  tr: { n: "Turquía", bg: "#E30A17" },
  ua: { n: "Ucrania", bg: "linear-gradient(180deg,#005BBB 0 50%,#FFD500 50%)" },
  cz: { n: "Chequia", bg: "linear-gradient(180deg,#fff 0 50%,#D7141A 50%)" },
  ro: { n: "Rumania", bg: "linear-gradient(90deg,#002B7F 0 33%,#FCD116 33% 66%,#CE1126 66%)" },
  kr: { n: "Corea del Sur", bg: "linear-gradient(180deg,#fff 0 30%,#CD2E3A 30% 50%,#0047A0 50% 70%,#fff 70%)" },
  au: { n: "Australia", bg: "#00008B" },
  sa: { n: "Arabia Saudita", bg: "#006C35" },
  ir: { n: "Irán", bg: "linear-gradient(180deg,#239F40 0 33%,#fff 33% 66%,#DA0000 66%)" },
  ma: { n: "Marruecos", bg: "#C1272D" },
  sn: { n: "Senegal", bg: "linear-gradient(90deg,#00853F 0 33%,#FDEF42 33% 66%,#E31B23 66%)" },
  ng: { n: "Nigeria", bg: "linear-gradient(90deg,#008751 0 33%,#fff 33% 66%,#008751 66%)" },
  cm: { n: "Camerún", bg: "linear-gradient(90deg,#007A5E 0 33%,#CE1126 33% 66%,#FCD116 66%)" },
  gh: { n: "Ghana", bg: "linear-gradient(180deg,#EF2B2D 0 33%,#FCD116 33% 66%,#006B3F 66%)" },
  eg: { n: "Egipto", bg: "linear-gradient(180deg,#CE1126 0 33%,#fff 33% 66%,#000 66%)" },
  ec: { n: "Ecuador", bg: "linear-gradient(180deg,#FFD100 0 50%,#0072C6 50% 75%,#EF3340 75%)" },
  py: { n: "Paraguay", bg: "linear-gradient(180deg,#D52B1E 0 33%,#fff 33% 66%,#0038A8 66%)" },
  jm: { n: "Jamaica", bg: "linear-gradient(135deg,#009B3A 0 25%,#FED100 25% 50%,#000 50% 75%,#FED100 75%)" },
  cr: { n: "Costa Rica", bg: "linear-gradient(180deg,#002B7F 0 20%,#fff 20% 30%,#CE1126 30% 70%,#fff 70% 80%,#002B7F 80%)" },
  hn: { n: "Honduras", bg: "linear-gradient(180deg,#0073CF 0 33%,#fff 33% 66%,#0073CF 66%)" },
  nz: { n: "Nueva Zelanda", bg: "#00247D" },
  tn: { n: "Túnez", bg: "#E70013" },
  dz: { n: "Argelia", bg: "linear-gradient(90deg,#006233 0 50%,#fff 50%)" },
};

export function Flag({ code, cls = "flag-sm" }: { code: string; cls?: string }) {
  return <span className={cls} style={{ background: FLAGS[code]?.bg || "#333" }} aria-label={FLAGS[code]?.n} />;
}

export const I = {
  target: () => (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2.2" /><circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2.2" /><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
  ),
  gift: () => (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M4 11.5h16V20a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20v-8.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" /><path d="M3 8h18v3.5H3z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" /><path d="M12 8v13.5" stroke="currentColor" strokeWidth="2.2" /><path d="M12 8S10.5 3 7.8 3.4C5.8 3.7 6 7 8.5 8M12 8s1.5-5 4.2-4.6C18.2 3.7 18 7 15.5 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
  ),
  fixture: () => (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M3 6h7M3 12h7M3 18h7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /><path d="M10 7.5h4v9h4M14 9v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="20" cy="7.5" r="1.6" fill="currentColor" /><circle cx="20" cy="16.5" r="1.6" fill="currentColor" /></svg>
  ),
  rank: () => (
    <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M5 21V11M12 21V4M19 21v-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
  ),
  arrow: () => (
    <svg viewBox="0 0 24 24" fill="none" width="15" height="15"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  kick: () => (
    <svg viewBox="0 0 24 24" width="17" height="17"><path d="M3 3h5v5h2V5.5h2V3h5v6.5h-2V12h2V21h-5v-2.5h-2V16H8v5H3V3Z" fill="currentColor" /></svg>
  ),
  bolt: () => (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" /></svg>
  ),
};
