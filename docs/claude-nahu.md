# claude-nahu — notas de Nahu (Fer lee esto)

Este archivo lo mantenés **vos, Nahu** (y tu Claude). **Fer lo lee** para saber cómo venís.
Vos leés `docs/claude-fer.md` (lo mantiene Fer). Actualizá esto cuando avances.

## En qué estoy ahora
- Página `/fixture` armada y funcional

## Hecho
- Creé `src/lib/fixture-data.ts` con datos mock completos: 48 equipos, 12 grupos (A–L), fase de 32avos, 16avos, cuartos, semis y final. Fechas 11 jun – 19 jul 2026.
- Armé `src/app/fixture/FixtureClient.tsx` — componente client con selector de fases, tablas de posiciones por grupo, resultados de partidos y llave de eliminatorias.
- Agregué banderas de los 48 equipos en `src/components/ui.tsx` (antes había solo 16).
- Estilos del fixture en `src/app/globals.css` (al final), usando las clases y vars del DS.
- El build pasa sin errores.

## Necesito de Fer
- Que mire el diseño en su pantalla y diga si le copa o si hay que ajustar algo
- Confirmar si el estilo de las tablas y las cards de knockout está bien

## Decisiones que tomé
- Datos mock en archivo separado (`src/lib/fixture-data.ts`), no hardcodeados en JSX
- Argentina gana el Mundial en los datos mock (campeonísima)
- Selector de fases con botones pill en vez de tabs, usando los colores del DS
- Tablas de grupo con posiciones 1-2 resaltadas en celeste (clasificados)
- Eliminatorias con cards individuales por partido, mostrando penales cuando corresponde
- Grupos en grid de 2 columnas en desktop, 1 en mobile
- Botón "Predecí los partidos" al final que linkea a `/predicciones`

## Dudas
- (ninguna por ahora)

---
_Última actualización: 2026-05-31_
