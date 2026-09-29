# Carrusel — Lo barato se nota (calidad vs. precio)

## Estrategia

- **Etapa:** TOFU → MOFU (cierre BOFU suave).
- **Audiencia:** dueños de negocio en Manta que están por cotizar un letrero y comparan solo por precio.
- **Pilar:** Antes de producir / Solución correcta.
- **Hook:** «Lo barato se nota. Solo que no el primer día.»
- **Estructura:** tensión → sol → salitre → noche → la cuenta real → checklist guardable → evidencia Infinity → CTA.
- **Acción final única:** escribir `CALIDAD` por WhatsApp.
- **Matiz obligatorio:** «No todo lo económico es malo. Lo caro es no saber qué estás pagando.» No se ataca a otros proveedores ni se inventan duraciones, cifras o certificaciones.

## Slides

| # | Archivo | Superficie | Recurso |
|---|---|---|---|
| 01 | `calidad-01-hook.png` | papel | Imagen generada: el mismo objeto nuevo / deteriorado |
| 02 | `calidad-02-sol.png` | noche | Tipografía gigante «SOL» + panel decolorado generado |
| 03 | `calidad-03-salitre.png` | foto completa | Óxido generado (genérico, sin marca) |
| 04 | `calidad-04-noche.png` | noche | Comparación: caja de luz generada ✕ / Pool Wings real ✓ |
| 05 | `calidad-05-cuenta.png` | papel | Ticket «pagaste dos veces» + ×2 gigante |
| 06 | `calidad-06-checklist.png` | noche | Checklist + letra corpórea real recortada (Cedepa) |
| 07 | `calidad-07-infinity.png` | papel | Proceso y resultado real: Miwis Ice Cream |
| 08 | `calidad-08-cta.png` | foto + vidrio | Neón real «Fuego Sabor» + panel de vidrio esmerilado |

Sin contador «01 / 08». La continuidad la dan el logo, el pie editorial y el índice temático (01 · Material, 02 · Estructura, 03 · Iluminación).

## Caption sugerido

> El primer día todos los letreros se ven iguales. La diferencia aparece después: con el sol, con el salitre y de noche.
>
> No todo lo económico es malo. Lo caro es no saber qué estás pagando. Antes de elegir por precio, pregunta por el material, si está hecho para exterior, qué LED usa, cómo se instala y qué cubre la garantía.
>
> Escribe CALIDAD por WhatsApp (+593 96 918 4321) y te explicamos qué incluye tu cotización.
>
> #Manta #Letreros #Publicidad #Emprendedores #Ecuador

## Imágenes generadas (Canva AI)

Generadas sin texto, logos ni marcas; representan conceptos genéricos, no trabajos de Infinity ni clientes reales.

| Archivo local | Canva media ID | Uso |
|---|---|---|
| `src/gen/hook-split.jpg` | `MAHWin3Fi6E` | Slide 01 |
| `src/gen/sol-panel.jpg` | `MAHWiowXSjE` | Slide 02 (se recorta con `src/cutouts.py`) |
| `src/gen/salitre-oxido.jpg` | `MAHWiqLbsf4` | Slide 03 |
| `src/gen/noche-lightbox.jpg` | `MAHWijvFqPA` | Slide 04 |

**Estado:** los archivos actuales son miniaturas (≈160 px) porque este entorno no puede descargar desde canva.com. Las slides 01–04 muestran una franja amarilla «VISTA PREVIA» mientras la imagen sea de baja resolución; desaparece sola al reemplazarla.

Para cerrar la versión final:

1. Descarga cada imagen desde Canva (Uploads / Generadas) en máxima resolución.
2. Reemplaza el archivo con el mismo nombre en `src/gen/`.
3. Ejecuta `python3 src/cutouts.py` y `node src/render.js`.

### Prompts (por si se regeneran en Magnific)

- **Hook (4:5):** fotografía de producto en estudio, fondo papel cálido #F4F3EE. Un letrero 3D de acrílico con forma de ola abstracta (sin letras ni logo), dividido verticalmente: mitad izquierda nueva (cyan y verde brillantes, bordes limpios); mitad derecha el mismo objeto tras años de sol y salitre (colores lavados, acrílico amarillento, vinil despegado, grietas, óxido saliendo de los tornillos). Espacio libre arriba para el titular.
- **Sol (4:5):** sobre fondo negro, un panel impreso para exterior con formas geométricas abstractas (sin texto), fuertemente decolorado por el sol, esquinas despegadas, luz dura y cálida desde arriba a la derecha, objeto aislado.
- **Salitre (4:5):** macro de una fachada blanca con un soporte metálico y tornillos oxidados por el salitre, chorreaduras de óxido sobre la pared, luz de día, pared limpia en la parte superior para el titular.
- **Noche (4:5):** caja de luz genérica de noche sobre muro oscuro, cara blanca con una ola abstracta azul-verde (sin texto). Iluminación defectuosa: tercio izquierdo apagado, puntos LED visibles al centro, lado derecho tenue. Cielo oscuro arriba para el titular.

## Fotografías reales usadas

- `IMAGENES/` — Miwis Ice Cream: fachada terminada, impresión en plotter, pintura.
- `assets/photography/letreros-corporeos-3.jpeg` — letra corpórea (recortada).
- `assets/photography/letreros-corporeos-2.jpeg` — Pool Wings retroiluminado.
- `assets/photography/neon-2.jpeg` — neón «Fuego Sabor».

Todas aparecen solo como evidencia positiva. **Confirmar con Miwis Ice Cream que autoriza publicar y etiquetar su local.**

## Edición

El diseño vive en `src/carrusel.html` (Poppins local, tokens de marca, SVG oficiales). `src/render.js` exporta cada `<section class="slide">` a PNG 1080 × 1350 con Chromium (`playwright-core`).
