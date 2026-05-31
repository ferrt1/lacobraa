# CLAUDE.md — Contexto del proyecto

> Este archivo lo lee Claude automáticamente. Reglas y contexto para no repetir errores.

## Qué es
Maqueta **solo front** del sitio de comunidad del streamer **La Cobra** para el **Mundial 2026**
(predicciones, sorteos de 40 plays, fixture, ranking). Es un **pitch para mostrarle** — todavía
no hay backend ni se deploya nada de back. Datos mock en `src/lib/data.ts`.

Proyecto **separado** de `agusbob` (otro streamer, casino, otro repo/VPS). No mezclar.

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4.
- Fuentes vía `next/font`. Tokens de color y utilidades en `src/app/globals.css`.
- Repo: `github.com/ferrt1/lacobraa` (el repo es `lacobraa`, la carpeta `lacobraaa`).
- Local: `pnpm install && pnpm dev` → localhost:3000. `pnpm build` para verificar.

## Reglas de trabajo
- **NO pushear hasta que Fer verifique en su pantalla.** Él prueba con `pnpm dev` y avisa.
- **No verificar UI con screenshots headless** — se ven mal; Fer mira en su device real.
- Trabaja con un amigo (**Nahu**): se dividen por páginas. Componentes base reutilizables en `src/components`.

## Coordinación de equipo (2 personas, mismo repo)
- **Fer** mantiene `docs/claude-fer.md` (lo lee Nahu). **Nahu** mantiene `docs/claude-nahu.md` (lo lee Fer).
- Según con quién estés trabajando, **leé el archivo del otro** para tener contexto y **actualizá el propio**
  cuando se avanza. Si sos el Claude de Nahu: leé `claude-fer.md`. Si sos el de Fer: leé `claude-nahu.md`.
- Reparto actual: Fer+Claude = home + sistema de diseño; Nahu = página `/fixture`.

## Arquitectura
- **Multipágina** con **sidebar izquierdo persistente** (estilo Forg1). El sidebar y el `<main>`
  viven en `src/app/layout.tsx` → toda página nueva (`src/app/<ruta>/page.tsx`) hereda el sidebar.
- Rutas: `/` (home), `/predicciones`, `/sorteos`, `/fixture`, `/ranking`, `/perfil`.
- Home = hero + stats + `› QUÉ ES ESTO` + `› QUÉ PODÉS HACER` (lista numerada) + sorteo + footer.

## Diseño — la lección clave (importante)
Fer rechazó 2 versiones por **"muy IA"**. El error fue **exceso de decoración** (banderines+papelitos+
glows+gradientes+emojis+cards redondeadas todo junto). **La cura es la RESTRICCIÓN**, al estilo Forg1:
- Minimal y firme: negro/azul profundo, **mucho aire**, UN acento (celeste), tipografía grande.
- Líneas finas con etiquetas `› TEXTO`, listas numeradas, flechas. Sin glows, sin gradientes de relleno.
- **Sin emojis en botones/CTAs.** Sin marquees de texto falso. Sin confeti.
- Para que NO parezca IA hace falta una **imagen real** en el hero (foto de La Cobra / estadio / trofeo)
  — hay un slot comentado en `Hero.tsx`. Pedírsela a Fer.
- Banderines: OK pero finos y con los **países reales del Mundial 2026**.
- El celeste/azul SÍ va (color de La Cobra). Acento secundario sol de mayo, muy puntual.

Ver `docs/claude-fer.md` para estructura y repartija.
