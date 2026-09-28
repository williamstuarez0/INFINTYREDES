# Auditoría y decisiones

## Qué falló en el sistema anterior

1. Trató la identidad como un tema oscuro de interfaz, aunque la marca real alterna claros, negros, fotografía y grandes gestos editoriales.
2. No integró correctamente el SVG disponible y terminó sustituyendo el logo por texto.
3. El template de carrusel redujo los slides centrales a tipografía y formas planas, perdiendo la evidencia fotográfica.
4. Escaló los diseños para una vista previa y apiló todos los slides en una sola página, lo que contaminó la exportación.
5. No existía un sistema específico para reels.
6. La regla de “no mostrar clientes como errores” no venía acompañada de una alternativa visual viable.

## Qué aportó el prompt al problema

El prompt pedía fotografías reales, imágenes generadas y ejemplos de errores al mismo tiempo, pero el entorno informó que no podía generar imágenes. Sin una regla de fallback, rellenó con figuras planas. El prompt también pidió “la misma dirección visual” sin definir una referencia mínima de calidad dentro del repositorio.

## Decisiones de v2

- El carrusel aprobado queda incorporado como referencia visible.
- Se separan identidad, carruseles, reels, copy, medios y exportación.
- Si falta una imagen, se entrega un placeholder descriptivo; no se finge una solución final.
- Las fotografías reales se usan como evidencia positiva. Los errores se representan con material anónimo o diagramas editoriales neutros.
- La exportación final siempre conserva las dimensiones nativas y separa los archivos.
- El sistema deja de ser “dark only” y adopta la alternancia claro/oscuro de la marca actual.

