// Datos MOCK para el maquetado. Cuando exista backend, esto se reemplaza
// por llamadas reales (fixture vía API de fútbol, ranking/sorteos vía DB).

export const MUNDIAL = {
  inicio: "2026-06-11T00:00:00-03:00",
  rotulo: "MUNDIAL 2026",
  fechas: "11 JUN — 19 JUL",
  sede: "EE.UU. · México · Canadá",
};

export const HERO = {
  kicker: "KICK · LA BANDA DE LA COBRA · 2026",
  sub: "Predicciones en vivo, 40 PlayStations en sorteo y el fixture de los 48. Metele al Mundial con la banda — y que el chat lo decida.",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "/", icon: "home" },
  { label: "Predicciones", href: "/predicciones", icon: "target" },
  { label: "Sorteos", href: "/sorteos", icon: "gift" },
  { label: "Fixture", href: "/fixture", icon: "calendar" },
  { label: "Ranking", href: "/ranking", icon: "chart" },
  { label: "Mi perfil", href: "/perfil", icon: "user" },
] as const;

export const ABOUT = {
  label: "QUÉ ES ESTO",
  // Las palabras entre [corchetes] se resaltan en el acento.
  texto:
    "La casa de la banda para vivir el [Mundial 2026]. Predecí los partidos, ganá una de las [40 PlayStations] que sortea La Cobra y competí con toda la comunidad por el primer puesto del [ranking].",
};

export const STATS = [
  { label: "Jugadores en la banda", value: "0", hint: "sumando puntos" },
  { label: "Líder de predicciones", value: "—", hint: "sin actividad todavía" },
  { label: "Predicciones jugadas", value: "0", hint: "por la comunidad" },
  { label: "Plays sorteadas", value: "0/40", hint: "una por día del Mundial" },
];

export const FEATURES = [
  {
    n: "01",
    titulo: "Predicciones",
    desc: "Predecí los partidos del Mundial. Si la pegás, sumás puntos y escalás en el ranking.",
    href: "/predicciones",
  },
  {
    n: "02",
    titulo: "Sorteos",
    desc: "40 PlayStations, una por cada día del Mundial. Participás escribiendo la palabra clave en el chat de Kick.",
    href: "/sorteos",
  },
  {
    n: "03",
    titulo: "Fixture",
    desc: "Todos los partidos, grupos y la llave de eliminatorias. Seguí el Mundial sin perderte nada.",
    href: "/fixture",
  },
  {
    n: "04",
    titulo: "Ranking",
    desc: "El leaderboard de la comunidad. Los que más la pegan y los más activos del chat, arriba de todo.",
    href: "/ranking",
  },
];

// Banderines del Mundial: cada uno con los colores REALES de su bandera
// (dibujada en CSS). Prioridad a países de habla hispana + anfitriones + grandes.
// `bg` es el fondo del banderín. Se reemplaza por los 48 clasificados finales.
type Banderin = { pais: string; bg: string };

export const BANDERINES: Banderin[] = [
  { pais: "Argentina", bg: "linear-gradient(#74acdf 0 38%,#fff 38% 62%,#74acdf 62%)" },
  { pais: "España", bg: "linear-gradient(#c60b1e 0 25%,#ffc400 25% 75%,#c60b1e 75%)" },
  { pais: "México", bg: "linear-gradient(90deg,#006847 0 33%,#fff 33% 66%,#ce1126 66%)" },
  { pais: "Uruguay", bg: "linear-gradient(#fff 0 50%,#7aa9dd 50%)" },
  { pais: "Colombia", bg: "linear-gradient(#fcd116 0 50%,#003893 50% 75%,#ce1126 75%)" },
  { pais: "Chile", bg: "linear-gradient(135deg,#0039a6 0 22%,transparent 22%),linear-gradient(#fff 0 50%,#d52b1e 50%)" },
  { pais: "Perú", bg: "linear-gradient(90deg,#d91023 0 33%,#fff 33% 66%,#d91023 66%)" },
  { pais: "Ecuador", bg: "linear-gradient(#ffd100 0 50%,#0072c6 50% 75%,#ef3340 75%)" },
  { pais: "Paraguay", bg: "linear-gradient(#d52b1e 0 33%,#fff 33% 66%,#0038a8 66%)" },
  { pais: "Bolivia", bg: "linear-gradient(#d52b1e 0 33%,#f9e300 33% 66%,#007934 66%)" },
  { pais: "Venezuela", bg: "linear-gradient(#ffcc00 0 33%,#00247d 33% 66%,#cf142b 66%)" },
  { pais: "Estados Unidos", bg: "linear-gradient(135deg,#3c3b6e 0 38%,transparent 38%),repeating-linear-gradient(#b22234 0 14.3%,#fff 14.3% 28.6%)" },
  { pais: "Canadá", bg: "linear-gradient(90deg,#d52b1e 0 25%,#fff 25% 75%,#d52b1e 75%)" },
  { pais: "Brasil", bg: "radial-gradient(circle at 50% 50%,#002776 0 24%,transparent 24%),linear-gradient(#009c3b 0 0)" },
  { pais: "Francia", bg: "linear-gradient(90deg,#0055a4 0 33%,#fff 33% 66%,#ef4135 66%)" },
  { pais: "Inglaterra", bg: "linear-gradient(#cf142b 0 0) center/100% 26% no-repeat,linear-gradient(#cf142b 0 0) center/26% 100% no-repeat,#fff" },
  { pais: "Alemania", bg: "linear-gradient(#000 0 33%,#dd0000 33% 66%,#ffce00 66%)" },
  { pais: "Portugal", bg: "linear-gradient(90deg,#006600 0 40%,#ff0000 40%)" },
];

export const SPONSOR_OFICIAL = "Tu sponsor acá";
