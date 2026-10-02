# Carrusel — Tu logo de WhatsApp no sirve para imprimir

Estilo: Póster Editorial (`social/STYLE_POSTER_EDITORIAL.md`).

## Estrategia

- **Etapa:** TOFU → MOFU.
- **Audiencia:** emprendedores y dueños de negocio que solo tienen su logo como imagen de WhatsApp, captura o foto de perfil.
- **Pilar:** Antes de producir.
- **Hook:** «Tu logo de WhatsApp no sirve para imprimir.»
- **Estructura:** tensión → por qué pasa (compresión) → imagen vs. vector → por qué importa en producción → prueba guardable → solución (redibujar en vector) → evidencia real → CTA.
- **Acción única:** escribir `LOGO` por WhatsApp para revisar el archivo.

## Slides

| # | Archivo | Superficie | Recurso |
|---|---|---|---|
| 01 | `logo-01-hook.png` | papel | Logo genérico «TU MARCA» pixelado gigante + versión nítida «en el celular» |
| 02 | `logo-02-por-que.png` | noche | Burbuja de chat con la imagen comprimida + «JPG» gigante |
| 03 | `logo-03-imagen-vector.png` | papel | Dos lupas: borde pixelado ✕ vs. borde vectorial ✓ |
| 04 | `logo-04-plotter.png` | foto completa | Plotter de corte real de Infinity (`stickers.jpg`) |
| 05 | `logo-05-prueba.png` | papel | Checklist guardable + «400%» gigante |
| 06 | `logo-06-vectorizar.png` | noche | Trazado vectorial con nodos y manejadores sobre el logo pixelado |
| 07 | `logo-07-evidencia.png` | papel | Collage real: stickers troquelados, logo 3D, papelería, promocionales |
| 08 | `logo-08-cta.png` | foto + vidrio | Impresión real de stickers + panel de vidrio |

## Caption sugerido

> Tu logo se ve bien en el celular. El problema aparece cuando lo quieres en un letrero, un sticker o una camiseta.
>
> WhatsApp comprime las imágenes para enviarlas rápido, y al ampliarlas se ven los cuadritos. Para imprimir y cortar en grande se necesita el archivo en vector (AI, SVG, EPS o PDF de diseño).
>
> Haz la prueba: zoom al 400 %. Si ves cuadritos, es una imagen. Y si no tienes el original, tu logo se puede redibujar.
>
> Escribe LOGO por WhatsApp (+593 96 918 4321) y te decimos si tu archivo sirve.
>
> #Manta #Emprendedores #Logo #Imprenta #Ecuador

## Veracidad

- El logo «TU MARCA» es genérico, creado para la demostración; no representa a ningún cliente.
- Afirmaciones técnicas generales y verificables: WhatsApp comprime las fotos al enviarlas; enviar como documento conserva el archivo; una imagen de píxeles pierde definición al ampliarse; el corte sigue contornos vectoriales.
- No se citan cifras, tiempos ni precios. «Se puede redibujar» describe el servicio de vectorización; confirmar que Infinity lo ofrece así antes de publicar.

## Fotografías reales usadas

- `assets/photography/stickers.jpg` (plotter de corte) · `stickers-ig-4.jpg` · `logos-3d.jpg` · `papeleria.jpeg` · `articulos-promocionales.jpeg` · `stickers-ig-5.jpg`.

Todas como evidencia positiva.

## Edición

- `src/carrusel.html`: diseño (Poppins local, tokens, SVG oficiales).
- `src/img/logo-tu-marca.svg`: logo genérico; `src/logo-render.html` lo exporta a `img/logo-hd.png`. Las versiones pixeladas (`logo-pixel.png`, `logo-pixel-alpha.png`) se generan con Pillow (reducción a 52 px + JPEG calidad 30 + ampliación sin suavizado).
- `src/render.js`: exporta cada slide a PNG 1080 × 1350.
