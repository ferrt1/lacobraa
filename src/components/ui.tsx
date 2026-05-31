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
