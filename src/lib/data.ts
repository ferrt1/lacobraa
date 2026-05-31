// Datos MOCK para el maquetado. Cuando exista backend, esto se reemplaza
// por llamadas reales (fixture vía API de fútbol, ranking/sorteos vía DB).

export const MUNDIAL = {
  inicio: "2026-06-11T00:00:00-03:00",
  rotulo: "MUNDIAL 2026",
  fechas: "11 JUN — 19 JUL",
  sede: "EE.UU. · México · Canadá",
};

export const STATS = [
  { label: "Jugadores en la banda", value: "0", hint: "sumando puntos" },
  { label: "Líder de predicciones", value: "—", hint: "sin actividad todavía" },
  { label: "Predicciones jugadas", value: "0", hint: "por la comunidad" },
  { label: "Plays sorteadas", value: "0/40", hint: "una por día del Mundial" },
];

export type Match = {
  fecha: string;
  hora: string;
  grupo: string;
  local: { nombre: string; flag: string };
  visita: { nombre: string; flag: string };
};

export const PROXIMOS_PARTIDOS: Match[] = [
  {
    fecha: "JUE 11 JUN",
    hora: "21:00",
    grupo: "Grupo A",
    local: { nombre: "México", flag: "🇲🇽" },
    visita: { nombre: "Sudáfrica", flag: "🇿🇦" },
  },
  {
    fecha: "VIE 12 JUN",
    hora: "16:00",
    grupo: "Grupo B",
    local: { nombre: "Canadá", flag: "🇨🇦" },
    visita: { nombre: "Suiza", flag: "🇨🇭" },
  },
  {
    fecha: "SÁB 13 JUN",
    hora: "21:00",
    grupo: "Grupo C",
    local: { nombre: "Argentina", flag: "🇦🇷" },
    visita: { nombre: "Por definir", flag: "🏳️" },
  },
];

export const FEATURES = [
  {
    n: "01",
    titulo: "Predicciones",
    desc: "Predecí los partidos del Mundial, sumá puntos por cada acierto y escalá en el ranking de la banda.",
    cta: "Predecí ahora",
    href: "#predicciones",
  },
  {
    n: "02",
    titulo: "Sorteos",
    desc: "40 PlayStations. Una por cada día del Mundial. Participás escribiendo la palabra clave en el chat de Kick.",
    cta: "Ver sorteos",
    href: "#sorteos",
  },
  {
    n: "03",
    titulo: "Fixture",
    desc: "Todos los partidos, grupos y la llave de eliminatorias. Seguí el Mundial sin perderte nada.",
    cta: "Ver fixture",
    href: "#fixture",
  },
  {
    n: "04",
    titulo: "Ranking",
    desc: "El leaderboard de la comunidad. Los que más la pegan, los más activos del chat, arriba de todo.",
    cta: "Ver ranking",
    href: "#ranking",
  },
];

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Predicciones", href: "#predicciones" },
  { label: "Sorteos", href: "#sorteos" },
  { label: "Fixture", href: "#fixture" },
  { label: "Ranking", href: "#ranking" },
];

export const SPONSORS = [
  "SPONSOR UNO",
  "MARCA DOS",
  "PARTNER TRES",
  "AUSPICIA CUATRO",
  "SPONSOR CINCO",
  "MARCA SEIS",
];
