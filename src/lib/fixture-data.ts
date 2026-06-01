// Datos MOCK del fixture — Mundial 2026 (48 equipos, 12 grupos A–L).
// Fechas reales: 11 jun – 19 jul 2026. Resultados inventados para el maquetado.

export type Team = { code: string; name: string };
export type GroupMatch = {
  date: string;
  time: string;
  home: string;
  away: string;
  scoreH: number | null;
  scoreA: number | null;
  city: string;
};
export type GroupStanding = {
  code: string;
  pts: number;
  pj: number;
  pg: number;
  pe: number;
  pp: number;
  gf: number;
  gc: number;
};
export type Group = {
  name: string;
  teams: string[];
  standings: GroupStanding[];
  matches: GroupMatch[];
};

export type KnockoutMatch = {
  id: string;
  round: string;
  home: string;
  away: string;
  scoreH: number | null;
  scoreA: number | null;
  penH?: number;
  penA?: number;
  date: string;
  city: string;
};

export const TEAMS: Record<string, string> = {
  ar: "Argentina",
  br: "Brasil",
  fr: "Francia",
  de: "Alemania",
  es: "España",
  pt: "Portugal",
  nl: "P. Bajos",
  hr: "Croacia",
  us: "EE.UU.",
  mx: "México",
  ca: "Canadá",
  uy: "Uruguay",
  co: "Colombia",
  cl: "Chile",
  pe: "Perú",
  jp: "Japón",
  kr: "Corea del Sur",
  au: "Australia",
  sa: "Arabia Saudita",
  ir: "Irán",
  ma: "Marruecos",
  sn: "Senegal",
  ng: "Nigeria",
  cm: "Camerún",
  gh: "Ghana",
  eg: "Egipto",
  ec: "Ecuador",
  py: "Paraguay",
  en: "Inglaterra",
  dk: "Dinamarca",
  se: "Suecia",
  no: "Noruega",
  pl: "Polonia",
  rs: "Serbia",
  ch: "Suiza",
  at: "Austria",
  be: "Bélgica",
  it: "Italia",
  tr: "Turquía",
  ua: "Ucrania",
  cz: "Chequia",
  ro: "Rumania",
  jm: "Jamaica",
  cr: "Costa Rica",
  hn: "Honduras",
  nz: "Nueva Zelanda",
  tn: "Túnez",
  dz: "Argelia",
};

export const PHASES = [
  { id: "groups", label: "Grupos" },
  { id: "r32", label: "32avos" },
  { id: "r16", label: "16avos" },
  { id: "qf", label: "Cuartos" },
  { id: "sf", label: "Semis" },
  { id: "final", label: "Final" },
] as const;

function standing(code: string, pts: number, pj: number, pg: number, pe: number, pp: number, gf: number, gc: number): GroupStanding {
  return { code, pts, pj, pg, pe, pp, gf, gc };
}

export const GROUPS: Group[] = [
  {
    name: "A",
    teams: ["us", "nl", "sn", "nz"],
    standings: [
      standing("us", 7, 3, 2, 1, 0, 5, 1),
      standing("nl", 6, 3, 2, 0, 1, 4, 2),
      standing("sn", 3, 3, 1, 0, 2, 2, 4),
      standing("nz", 1, 3, 0, 1, 2, 1, 5),
    ],
    matches: [
      { date: "11 JUN", time: "13:00", home: "us", away: "nz", scoreH: 2, scoreA: 0, city: "Los Ángeles" },
      { date: "11 JUN", time: "16:00", home: "nl", away: "sn", scoreH: 2, scoreA: 1, city: "Chicago" },
      { date: "15 JUN", time: "13:00", home: "us", away: "sn", scoreH: 1, scoreA: 1, city: "Nueva York" },
      { date: "15 JUN", time: "16:00", home: "nl", away: "nz", scoreH: 1, scoreA: 0, city: "Dallas" },
      { date: "19 JUN", time: "16:00", home: "us", away: "nl", scoreH: 2, scoreA: 1, city: "Los Ángeles" },
      { date: "19 JUN", time: "16:00", home: "sn", away: "nz", scoreH: 1, scoreA: 1, city: "Houston" },
    ],
  },
  {
    name: "B",
    teams: ["ar", "eg", "cr", "jm"],
    standings: [
      standing("ar", 9, 3, 3, 0, 0, 7, 1),
      standing("eg", 4, 3, 1, 1, 1, 3, 3),
      standing("cr", 4, 3, 1, 1, 1, 2, 3),
      standing("jm", 0, 3, 0, 0, 3, 1, 6),
    ],
    matches: [
      { date: "12 JUN", time: "13:00", home: "ar", away: "jm", scoreH: 3, scoreA: 0, city: "Miami" },
      { date: "12 JUN", time: "16:00", home: "eg", away: "cr", scoreH: 1, scoreA: 1, city: "Atlanta" },
      { date: "16 JUN", time: "13:00", home: "ar", away: "eg", scoreH: 2, scoreA: 1, city: "Miami" },
      { date: "16 JUN", time: "16:00", home: "cr", away: "jm", scoreH: 1, scoreA: 0, city: "Filadelfia" },
      { date: "20 JUN", time: "16:00", home: "ar", away: "cr", scoreH: 2, scoreA: 0, city: "Houston" },
      { date: "20 JUN", time: "16:00", home: "eg", away: "jm", scoreH: 1, scoreA: 1, city: "Atlanta" },
    ],
  },
  {
    name: "C",
    teams: ["mx", "fr", "dz", "hn"],
    standings: [
      standing("fr", 7, 3, 2, 1, 0, 5, 1),
      standing("mx", 6, 3, 2, 0, 1, 4, 2),
      standing("dz", 4, 3, 1, 1, 1, 3, 4),
      standing("hn", 0, 3, 0, 0, 3, 1, 6),
    ],
    matches: [
      { date: "12 JUN", time: "19:00", home: "mx", away: "hn", scoreH: 2, scoreA: 0, city: "Guadalajara" },
      { date: "12 JUN", time: "22:00", home: "fr", away: "dz", scoreH: 2, scoreA: 1, city: "Nueva York" },
      { date: "16 JUN", time: "19:00", home: "mx", away: "dz", scoreH: 1, scoreA: 0, city: "CDMX" },
      { date: "16 JUN", time: "22:00", home: "fr", away: "hn", scoreH: 2, scoreA: 0, city: "Boston" },
      { date: "20 JUN", time: "22:00", home: "mx", away: "fr", scoreH: 1, scoreA: 1, city: "Monterrey" },
      { date: "20 JUN", time: "22:00", home: "dz", away: "hn", scoreH: 2, scoreA: 1, city: "Kansas City" },
    ],
  },
  {
    name: "D",
    teams: ["en", "dk", "py", "sa"],
    standings: [
      standing("en", 7, 3, 2, 1, 0, 4, 1),
      standing("dk", 5, 3, 1, 2, 0, 3, 2),
      standing("py", 2, 3, 0, 2, 1, 2, 3),
      standing("sa", 1, 3, 0, 1, 2, 1, 4),
    ],
    matches: [
      { date: "13 JUN", time: "13:00", home: "en", away: "sa", scoreH: 2, scoreA: 0, city: "Filadelfia" },
      { date: "13 JUN", time: "16:00", home: "dk", away: "py", scoreH: 1, scoreA: 1, city: "Seattle" },
      { date: "17 JUN", time: "13:00", home: "en", away: "py", scoreH: 1, scoreA: 1, city: "Nashville" },
      { date: "17 JUN", time: "16:00", home: "dk", away: "sa", scoreH: 1, scoreA: 0, city: "Minneapolis" },
      { date: "21 JUN", time: "16:00", home: "en", away: "dk", scoreH: 1, scoreA: 1, city: "Nueva York" },
      { date: "21 JUN", time: "16:00", home: "py", away: "sa", scoreH: 0, scoreA: 1, city: "Denver" },
    ],
  },
  {
    name: "E",
    teams: ["es", "it", "gh", "ro"],
    standings: [
      standing("es", 9, 3, 3, 0, 0, 6, 1),
      standing("it", 6, 3, 2, 0, 1, 4, 2),
      standing("ro", 3, 3, 1, 0, 2, 2, 4),
      standing("gh", 0, 3, 0, 0, 3, 1, 6),
    ],
    matches: [
      { date: "13 JUN", time: "19:00", home: "es", away: "gh", scoreH: 3, scoreA: 0, city: "Miami" },
      { date: "13 JUN", time: "22:00", home: "it", away: "ro", scoreH: 2, scoreA: 1, city: "Boston" },
      { date: "17 JUN", time: "19:00", home: "es", away: "ro", scoreH: 1, scoreA: 0, city: "Atlanta" },
      { date: "17 JUN", time: "22:00", home: "it", away: "gh", scoreH: 1, scoreA: 0, city: "Chicago" },
      { date: "21 JUN", time: "22:00", home: "es", away: "it", scoreH: 2, scoreA: 1, city: "Nueva York" },
      { date: "21 JUN", time: "22:00", home: "ro", away: "gh", scoreH: 1, scoreA: 1, city: "Houston" },
    ],
  },
  {
    name: "F",
    teams: ["br", "pl", "cm", "at"],
    standings: [
      standing("br", 7, 3, 2, 1, 0, 5, 2),
      standing("pl", 5, 3, 1, 2, 0, 3, 2),
      standing("cm", 2, 3, 0, 2, 1, 3, 4),
      standing("at", 1, 3, 0, 1, 2, 2, 5),
    ],
    matches: [
      { date: "14 JUN", time: "13:00", home: "br", away: "at", scoreH: 2, scoreA: 0, city: "Los Ángeles" },
      { date: "14 JUN", time: "16:00", home: "pl", away: "cm", scoreH: 1, scoreA: 1, city: "Seattle" },
      { date: "18 JUN", time: "13:00", home: "br", away: "cm", scoreH: 1, scoreA: 1, city: "Dallas" },
      { date: "18 JUN", time: "16:00", home: "pl", away: "at", scoreH: 1, scoreA: 0, city: "Denver" },
      { date: "22 JUN", time: "16:00", home: "br", away: "pl", scoreH: 2, scoreA: 1, city: "San Francisco" },
      { date: "22 JUN", time: "16:00", home: "cm", away: "at", scoreH: 1, scoreA: 2, city: "Kansas City" },
    ],
  },
  {
    name: "G",
    teams: ["de", "uy", "ng", "cz"],
    standings: [
      standing("de", 7, 3, 2, 1, 0, 5, 2),
      standing("uy", 6, 3, 2, 0, 1, 4, 2),
      standing("ng", 3, 3, 1, 0, 2, 3, 4),
      standing("cz", 1, 3, 0, 1, 2, 2, 6),
    ],
    matches: [
      { date: "14 JUN", time: "19:00", home: "de", away: "cz", scoreH: 3, scoreA: 1, city: "Chicago" },
      { date: "14 JUN", time: "22:00", home: "uy", away: "ng", scoreH: 2, scoreA: 1, city: "Houston" },
      { date: "18 JUN", time: "19:00", home: "de", away: "ng", scoreH: 1, scoreA: 1, city: "Atlanta" },
      { date: "18 JUN", time: "22:00", home: "uy", away: "cz", scoreH: 1, scoreA: 0, city: "Miami" },
      { date: "22 JUN", time: "22:00", home: "de", away: "uy", scoreH: 1, scoreA: 1, city: "Dallas" },
      { date: "22 JUN", time: "22:00", home: "ng", away: "cz", scoreH: 1, scoreA: 1, city: "Nashville" },
    ],
  },
  {
    name: "H",
    teams: ["pt", "co", "tn", "se"],
    standings: [
      standing("pt", 7, 3, 2, 1, 0, 4, 1),
      standing("co", 5, 3, 1, 2, 0, 3, 2),
      standing("tn", 3, 3, 1, 0, 2, 2, 3),
      standing("se", 1, 3, 0, 1, 2, 2, 5),
    ],
    matches: [
      { date: "15 JUN", time: "19:00", home: "pt", away: "se", scoreH: 2, scoreA: 0, city: "Boston" },
      { date: "15 JUN", time: "22:00", home: "co", away: "tn", scoreH: 1, scoreA: 0, city: "Filadelfia" },
      { date: "19 JUN", time: "19:00", home: "pt", away: "tn", scoreH: 1, scoreA: 1, city: "Minneapolis" },
      { date: "19 JUN", time: "22:00", home: "co", away: "se", scoreH: 1, scoreA: 1, city: "Miami" },
      { date: "23 JUN", time: "22:00", home: "pt", away: "co", scoreH: 1, scoreA: 1, city: "Nueva York" },
      { date: "23 JUN", time: "22:00", home: "tn", away: "se", scoreH: 1, scoreA: 1, city: "Denver" },
    ],
  },
  {
    name: "I",
    teams: ["hr", "ma", "ec", "no"],
    standings: [
      standing("hr", 7, 3, 2, 1, 0, 4, 1),
      standing("ma", 6, 3, 2, 0, 1, 3, 2),
      standing("ec", 3, 3, 1, 0, 2, 3, 4),
      standing("no", 1, 3, 0, 1, 2, 1, 4),
    ],
    matches: [
      { date: "11 JUN", time: "19:00", home: "hr", away: "no", scoreH: 2, scoreA: 0, city: "Seattle" },
      { date: "11 JUN", time: "22:00", home: "ma", away: "ec", scoreH: 1, scoreA: 0, city: "Dallas" },
      { date: "15 JUN", time: "19:00", home: "hr", away: "ec", scoreH: 1, scoreA: 1, city: "San Francisco" },
      { date: "15 JUN", time: "22:00", home: "ma", away: "no", scoreH: 1, scoreA: 0, city: "Kansas City" },
      { date: "19 JUN", time: "19:00", home: "hr", away: "ma", scoreH: 1, scoreA: 1, city: "Atlanta" },
      { date: "19 JUN", time: "19:00", home: "ec", away: "no", scoreH: 2, scoreA: 1, city: "Nashville" },
    ],
  },
  {
    name: "J",
    teams: ["jp", "be", "rs", "cl"],
    standings: [
      standing("be", 7, 3, 2, 1, 0, 5, 2),
      standing("jp", 5, 3, 1, 2, 0, 4, 3),
      standing("cl", 3, 3, 1, 0, 2, 3, 4),
      standing("rs", 1, 3, 0, 1, 2, 2, 5),
    ],
    matches: [
      { date: "13 JUN", time: "13:00", home: "jp", away: "cl", scoreH: 2, scoreA: 1, city: "San Francisco" },
      { date: "13 JUN", time: "16:00", home: "be", away: "rs", scoreH: 2, scoreA: 0, city: "Denver" },
      { date: "17 JUN", time: "13:00", home: "jp", away: "rs", scoreH: 1, scoreA: 1, city: "Los Ángeles" },
      { date: "17 JUN", time: "16:00", home: "be", away: "cl", scoreH: 2, scoreA: 1, city: "Houston" },
      { date: "21 JUN", time: "13:00", home: "jp", away: "be", scoreH: 1, scoreA: 1, city: "Chicago" },
      { date: "21 JUN", time: "13:00", home: "cl", away: "rs", scoreH: 1, scoreA: 1, city: "Seattle" },
    ],
  },
  {
    name: "K",
    teams: ["ch", "tr", "ir", "au"],
    standings: [
      standing("ch", 7, 3, 2, 1, 0, 4, 1),
      standing("tr", 5, 3, 1, 2, 0, 3, 2),
      standing("ir", 2, 3, 0, 2, 1, 2, 3),
      standing("au", 1, 3, 0, 1, 2, 2, 5),
    ],
    matches: [
      { date: "14 JUN", time: "13:00", home: "ch", away: "au", scoreH: 2, scoreA: 0, city: "Minneapolis" },
      { date: "14 JUN", time: "16:00", home: "tr", away: "ir", scoreH: 1, scoreA: 1, city: "Nashville" },
      { date: "18 JUN", time: "13:00", home: "ch", away: "ir", scoreH: 1, scoreA: 0, city: "San Francisco" },
      { date: "18 JUN", time: "16:00", home: "tr", away: "au", scoreH: 1, scoreA: 1, city: "Denver" },
      { date: "22 JUN", time: "13:00", home: "ch", away: "tr", scoreH: 1, scoreA: 1, city: "Filadelfia" },
      { date: "22 JUN", time: "13:00", home: "ir", away: "au", scoreH: 1, scoreA: 1, city: "Kansas City" },
    ],
  },
  {
    name: "L",
    teams: ["kr", "ua", "pe", "ca"],
    standings: [
      standing("kr", 6, 3, 2, 0, 1, 4, 2),
      standing("ua", 6, 3, 2, 0, 1, 3, 2),
      standing("pe", 4, 3, 1, 1, 1, 3, 3),
      standing("ca", 1, 3, 0, 1, 2, 2, 5),
    ],
    matches: [
      { date: "12 JUN", time: "13:00", home: "kr", away: "ca", scoreH: 2, scoreA: 0, city: "Vancouver" },
      { date: "12 JUN", time: "16:00", home: "ua", away: "pe", scoreH: 1, scoreA: 0, city: "Monterrey" },
      { date: "16 JUN", time: "13:00", home: "kr", away: "pe", scoreH: 1, scoreA: 1, city: "Toronto" },
      { date: "16 JUN", time: "16:00", home: "ua", away: "ca", scoreH: 1, scoreA: 1, city: "CDMX" },
      { date: "20 JUN", time: "13:00", home: "kr", away: "ua", scoreH: 1, scoreA: 1, city: "Guadalajara" },
      { date: "20 JUN", time: "13:00", home: "pe", away: "ca", scoreH: 2, scoreA: 1, city: "Vancouver" },
    ],
  },
];

export const KNOCKOUT: KnockoutMatch[] = [
  // 32avos (top 2 de cada grupo + 8 mejores terceros = 32 equipos)
  { id: "r32-1", round: "r32", home: "us", away: "pe", scoreH: 2, scoreA: 0, date: "25 JUN", city: "Los Ángeles" },
  { id: "r32-2", round: "r32", home: "ar", away: "ro", scoreH: 3, scoreA: 1, date: "25 JUN", city: "Miami" },
  { id: "r32-3", round: "r32", home: "fr", away: "cm", scoreH: 2, scoreA: 0, date: "25 JUN", city: "Nueva York" },
  { id: "r32-4", round: "r32", home: "en", away: "ir", scoreH: 1, scoreA: 0, date: "25 JUN", city: "Filadelfia" },
  { id: "r32-5", round: "r32", home: "es", away: "ec", scoreH: 3, scoreA: 0, date: "26 JUN", city: "Atlanta" },
  { id: "r32-6", round: "r32", home: "br", away: "cl", scoreH: 2, scoreA: 1, date: "26 JUN", city: "Dallas" },
  { id: "r32-7", round: "r32", home: "de", away: "tn", scoreH: 2, scoreA: 0, date: "26 JUN", city: "Chicago" },
  { id: "r32-8", round: "r32", home: "pt", away: "no", scoreH: 3, scoreA: 0, date: "26 JUN", city: "Boston" },
  { id: "r32-9", round: "r32", home: "nl", away: "dz", scoreH: 1, scoreA: 0, date: "27 JUN", city: "Houston" },
  { id: "r32-10", round: "r32", home: "eg", away: "py", scoreH: 0, scoreA: 0, penH: 4, penA: 2, date: "27 JUN", city: "Seattle" },
  { id: "r32-11", round: "r32", home: "mx", away: "ng", scoreH: 2, scoreA: 1, date: "27 JUN", city: "CDMX" },
  { id: "r32-12", round: "r32", home: "dk", away: "au", scoreH: 2, scoreA: 0, date: "27 JUN", city: "Denver" },
  { id: "r32-13", round: "r32", home: "it", away: "cz", scoreH: 1, scoreA: 0, date: "28 JUN", city: "San Francisco" },
  { id: "r32-14", round: "r32", home: "pl", away: "rs", scoreH: 0, scoreA: 1, date: "28 JUN", city: "Nashville" },
  { id: "r32-15", round: "r32", home: "hr", away: "tr", scoreH: 2, scoreA: 1, date: "28 JUN", city: "Kansas City" },
  { id: "r32-16", round: "r32", home: "be", away: "kr", scoreH: 1, scoreA: 2, date: "28 JUN", city: "Minneapolis" },

  // 16avos
  { id: "r16-1", round: "r16", home: "us", away: "eg", scoreH: 2, scoreA: 0, date: "1 JUL", city: "Los Ángeles" },
  { id: "r16-2", round: "r16", home: "ar", away: "nl", scoreH: 2, scoreA: 1, date: "1 JUL", city: "Miami" },
  { id: "r16-3", round: "r16", home: "fr", away: "mx", scoreH: 1, scoreA: 0, date: "1 JUL", city: "Nueva York" },
  { id: "r16-4", round: "r16", home: "en", away: "dk", scoreH: 2, scoreA: 1, date: "1 JUL", city: "Dallas" },
  { id: "r16-5", round: "r16", home: "es", away: "it", scoreH: 2, scoreA: 0, date: "2 JUL", city: "Atlanta" },
  { id: "r16-6", round: "r16", home: "br", away: "rs", scoreH: 3, scoreA: 1, date: "2 JUL", city: "Houston" },
  { id: "r16-7", round: "r16", home: "de", away: "hr", scoreH: 1, scoreA: 1, penH: 5, penA: 3, date: "2 JUL", city: "Chicago" },
  { id: "r16-8", round: "r16", home: "pt", away: "kr", scoreH: 2, scoreA: 0, date: "2 JUL", city: "Boston" },

  // Cuartos
  { id: "qf-1", round: "qf", home: "us", away: "ar", scoreH: 0, scoreA: 2, date: "5 JUL", city: "Dallas" },
  { id: "qf-2", round: "qf", home: "fr", away: "en", scoreH: 2, scoreA: 1, date: "5 JUL", city: "Nueva York" },
  { id: "qf-3", round: "qf", home: "es", away: "br", scoreH: 1, scoreA: 1, penH: 4, penA: 3, date: "6 JUL", city: "Miami" },
  { id: "qf-4", round: "qf", home: "de", away: "pt", scoreH: 2, scoreA: 1, date: "6 JUL", city: "Los Ángeles" },

  // Semis
  { id: "sf-1", round: "sf", home: "ar", away: "fr", scoreH: 2, scoreA: 1, date: "9 JUL", city: "Dallas" },
  { id: "sf-2", round: "sf", home: "es", away: "de", scoreH: 1, scoreA: 0, date: "10 JUL", city: "Nueva York" },

  // Final
  { id: "f", round: "final", home: "ar", away: "es", scoreH: 2, scoreA: 1, date: "19 JUL", city: "Nueva York" },
];
