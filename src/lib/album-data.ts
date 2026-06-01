// Datos MOCK del álbum de figuritas — Mundial 2026.
// Planteles plausibles (nombres reales para que el pitch se vea creíble).
// Sin fotos: la figurita se arma con bandera + iniciales + número + posición.
// Los códigos coinciden con FLAGS/TEAMS (src/components/ui.tsx, src/lib/fixture-data.ts).

export type Pos = "ARQ" | "DEF" | "MED" | "DEL";
export type Player = { n: number; name: string; pos: Pos };
export type Squad = { code: string; name: string; group: string; players: Player[] };

export const SQUADS: Squad[] = [
  {
    code: "ar", name: "Argentina", group: "A",
    players: [
      { n: 1, name: "D. Martínez", pos: "ARQ" },
      { n: 23, name: "G. Rulli", pos: "ARQ" },
      { n: 4, name: "G. Montiel", pos: "DEF" },
      { n: 13, name: "C. Romero", pos: "DEF" },
      { n: 19, name: "N. Otamendi", pos: "DEF" },
      { n: 3, name: "N. Tagliafico", pos: "DEF" },
      { n: 26, name: "N. Molina", pos: "DEF" },
      { n: 7, name: "R. De Paul", pos: "MED" },
      { n: 20, name: "A. Mac Allister", pos: "MED" },
      { n: 5, name: "E. Fernández", pos: "MED" },
      { n: 24, name: "E. Barco", pos: "MED" },
      { n: 10, name: "L. Messi", pos: "DEL" },
      { n: 9, name: "J. Álvarez", pos: "DEL" },
      { n: 11, name: "Á. Di María", pos: "DEL" },
      { n: 22, name: "L. Martínez", pos: "DEL" },
    ],
  },
  {
    code: "br", name: "Brasil", group: "B",
    players: [
      { n: 1, name: "Alisson", pos: "ARQ" },
      { n: 12, name: "Ederson", pos: "ARQ" },
      { n: 2, name: "Danilo", pos: "DEF" },
      { n: 3, name: "Marquinhos", pos: "DEF" },
      { n: 4, name: "É. Militão", pos: "DEF" },
      { n: 6, name: "Wendell", pos: "DEF" },
      { n: 14, name: "Beraldo", pos: "DEF" },
      { n: 5, name: "Casemiro", pos: "MED" },
      { n: 8, name: "B. Guimarães", pos: "MED" },
      { n: 15, name: "João Gomes", pos: "MED" },
      { n: 7, name: "Vinícius Jr.", pos: "DEL" },
      { n: 10, name: "Rodrygo", pos: "DEL" },
      { n: 9, name: "Endrick", pos: "DEL" },
      { n: 11, name: "Raphinha", pos: "DEL" },
      { n: 20, name: "Savinho", pos: "DEL" },
    ],
  },
  {
    code: "fr", name: "Francia", group: "C",
    players: [
      { n: 1, name: "M. Maignan", pos: "ARQ" },
      { n: 16, name: "B. Samba", pos: "ARQ" },
      { n: 5, name: "J. Koundé", pos: "DEF" },
      { n: 4, name: "D. Upamecano", pos: "DEF" },
      { n: 22, name: "T. Hernández", pos: "DEF" },
      { n: 3, name: "W. Saliba", pos: "DEF" },
      { n: 24, name: "I. Konaté", pos: "DEF" },
      { n: 8, name: "A. Tchouaméni", pos: "MED" },
      { n: 14, name: "A. Rabiot", pos: "MED" },
      { n: 6, name: "E. Camavinga", pos: "MED" },
      { n: 10, name: "K. Mbappé", pos: "DEL" },
      { n: 7, name: "A. Griezmann", pos: "DEL" },
      { n: 11, name: "O. Dembélé", pos: "DEL" },
      { n: 9, name: "M. Thuram", pos: "DEL" },
    ],
  },
  {
    code: "es", name: "España", group: "D",
    players: [
      { n: 1, name: "U. Simón", pos: "ARQ" },
      { n: 23, name: "D. Raya", pos: "ARQ" },
      { n: 2, name: "D. Carvajal", pos: "DEF" },
      { n: 14, name: "A. Laporte", pos: "DEF" },
      { n: 4, name: "Le Normand", pos: "DEF" },
      { n: 18, name: "M. Cucurella", pos: "DEF" },
      { n: 5, name: "Rodri", pos: "MED" },
      { n: 8, name: "F. Ruiz", pos: "MED" },
      { n: 6, name: "M. Merino", pos: "MED" },
      { n: 26, name: "Pedri", pos: "MED" },
      { n: 7, name: "Á. Morata", pos: "DEL" },
      { n: 19, name: "L. Yamal", pos: "DEL" },
      { n: 11, name: "N. Williams", pos: "DEL" },
      { n: 9, name: "Joselu", pos: "DEL" },
    ],
  },
  {
    code: "pt", name: "Portugal", group: "E",
    players: [
      { n: 1, name: "D. Costa", pos: "ARQ" },
      { n: 22, name: "Rui Patrício", pos: "ARQ" },
      { n: 2, name: "N. Semedo", pos: "DEF" },
      { n: 3, name: "Pepe", pos: "DEF" },
      { n: 4, name: "Rúben Dias", pos: "DEF" },
      { n: 20, name: "J. Cancelo", pos: "DEF" },
      { n: 19, name: "Nuno Mendes", pos: "DEF" },
      { n: 8, name: "B. Fernandes", pos: "MED" },
      { n: 6, name: "J. Palhinha", pos: "MED" },
      { n: 16, name: "Vitinha", pos: "MED" },
      { n: 10, name: "B. Silva", pos: "MED" },
      { n: 7, name: "C. Ronaldo", pos: "DEL" },
      { n: 11, name: "J. Félix", pos: "DEL" },
      { n: 21, name: "D. Jota", pos: "DEL" },
      { n: 26, name: "F. Conceição", pos: "DEL" },
    ],
  },
  {
    code: "nl", name: "P. Bajos", group: "F",
    players: [
      { n: 1, name: "B. Verbruggen", pos: "ARQ" },
      { n: 13, name: "J. Bijlow", pos: "ARQ" },
      { n: 4, name: "V. van Dijk", pos: "DEF" },
      { n: 3, name: "M. de Ligt", pos: "DEF" },
      { n: 5, name: "N. Aké", pos: "DEF" },
      { n: 22, name: "D. Dumfries", pos: "DEF" },
      { n: 2, name: "J. Timber", pos: "DEF" },
      { n: 21, name: "F. de Jong", pos: "MED" },
      { n: 8, name: "T. Koopmeiners", pos: "MED" },
      { n: 14, name: "T. Reijnders", pos: "MED" },
      { n: 10, name: "M. Depay", pos: "DEL" },
      { n: 11, name: "C. Gakpo", pos: "DEL" },
      { n: 7, name: "X. Simons", pos: "DEL" },
      { n: 9, name: "W. Weghorst", pos: "DEL" },
    ],
  },
  {
    code: "uy", name: "Uruguay", group: "G",
    players: [
      { n: 1, name: "S. Rochet", pos: "ARQ" },
      { n: 23, name: "F. Cáceres", pos: "ARQ" },
      { n: 2, name: "J. Giménez", pos: "DEF" },
      { n: 3, name: "R. Araújo", pos: "DEF" },
      { n: 17, name: "M. Olivera", pos: "DEF" },
      { n: 22, name: "M. Viña", pos: "DEF" },
      { n: 5, name: "M. Ugarte", pos: "MED" },
      { n: 6, name: "R. Bentancur", pos: "MED" },
      { n: 10, name: "G. De Arrascaeta", pos: "MED" },
      { n: 15, name: "F. Valverde", pos: "MED" },
      { n: 7, name: "N. de la Cruz", pos: "MED" },
      { n: 9, name: "D. Núñez", pos: "DEL" },
      { n: 11, name: "F. Pellistri", pos: "DEL" },
      { n: 21, name: "M. Maxi Araújo", pos: "DEL" },
    ],
  },
  {
    code: "mx", name: "México", group: "H",
    players: [
      { n: 1, name: "G. Ochoa", pos: "ARQ" },
      { n: 13, name: "L. Malagón", pos: "ARQ" },
      { n: 2, name: "J. Sánchez", pos: "DEF" },
      { n: 3, name: "C. Montes", pos: "DEF" },
      { n: 15, name: "H. Moreno", pos: "DEF" },
      { n: 23, name: "J. Gallardo", pos: "DEF" },
      { n: 4, name: "E. Álvarez", pos: "MED" },
      { n: 8, name: "C. Rodríguez", pos: "MED" },
      { n: 16, name: "H. Herrera", pos: "MED" },
      { n: 11, name: "S. Giménez", pos: "DEL" },
      { n: 22, name: "H. Lozano", pos: "DEL" },
      { n: 9, name: "R. Jiménez", pos: "DEL" },
    ],
  },
];

// Selecciones todavía "no lanzadas" en la colección (figuritas próximamente).
// Códigos del Mundial 2026 que existen en FLAGS pero aún sin plantel cargado.
export const COMING_SOON: { code: string; name: string }[] = [
  { code: "de", name: "Alemania" },
  { code: "us", name: "EE.UU." },
  { code: "co", name: "Colombia" },
  { code: "hr", name: "Croacia" },
  { code: "ca", name: "Canadá" },
  { code: "jp", name: "Japón" },
];

export type Figu = { key: string; code: string; team: string; n: number; name: string; pos: Pos };

// Lista plana de TODAS las figuritas (para packs y progreso).
export const ALL_FIGUS: Figu[] = SQUADS.flatMap((s) =>
  s.players.map((p) => ({
    key: `${s.code}-${p.n}`,
    code: s.code,
    team: s.name,
    n: p.n,
    name: p.name,
    pos: p.pos,
  }))
);

// Estado inicial de la colección (mock): ~55% pegadas, determinista para no romper SSR.
// Hash simple sobre la key → owned si cae bajo el umbral.
export function initialOwned(): Record<string, boolean> {
  const owned: Record<string, boolean> = {};
  for (const f of ALL_FIGUS) {
    let h = 0;
    for (let i = 0; i < f.key.length; i++) h = (h * 31 + f.key.charCodeAt(i)) >>> 0;
    owned[f.key] = h % 100 < 55;
  }
  return owned;
}
