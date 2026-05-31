# LA COBRA · Mundial 2026

Maqueta (solo front) del sitio de comunidad de **La Cobra** para el Mundial 2026:
predicciones, sorteos (40 plays), fixture y ranking de la banda.

> Sitio de fans, no oficial. Por ahora es un **maquetado para mostrar** — sin backend.
> Todos los datos son mock (`src/lib/data.ts`).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- Fuentes: **Anton** (display) + **Inter** (texto) vía `next/font`

## Identidad visual

- Base azul medianoche, acento **celeste** (Argentina) + **dorado** (sol de Mayo).
- Nav arriba (no sidebar), tipografía deportiva condensada, rayas tipo camiseta y textura de grano.
- A propósito **distinto** a las plantillas "dark + verde neón + sidebar" que circulan.

## Correr en local

```bash
pnpm install
pnpm dev
# http://localhost:3000
```

## Estructura

```
src/
  app/            layout, página de inicio, estilos globales
  components/     Nav, Hero, Countdown, StatsStrip, FeatureCards,
                  UpcomingMatches, SorteoBand, SponsorsMarquee, Footer
  lib/data.ts     datos mock (fixture, stats, features, sponsors)
```

## Pendiente / a repartir

- [ ] Página **Fixture** completa (grupos + llave eliminatoria)
- [ ] Página **Predicciones** (interactiva)
- [ ] Página **Ranking / Leaderboard**
- [ ] Login real con Kick + backend (cuando el proyecto avance)
