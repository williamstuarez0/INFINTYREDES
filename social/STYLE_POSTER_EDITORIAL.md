# Estilo vigente de carruseles: Póster Editorial

Aprobado por el cliente en septiembre de 2026 con el carrusel «Lo barato se nota» (`entregas/calidad-precio/`). Es el **único estilo** para los carruseles de Instagram de Infinity: se aplica siempre, aunque el pedido no lo mencione. Reemplaza la plantilla anterior de «foto arriba + bloque negro abajo + contador», que se sentía repetida de una publicación a otra.

Implementación de referencia: `entregas/calidad-precio/src/carrusel.html`. Para una pieza nueva, duplica esa carpeta y cambia el contenido, no el sistema.

## Idea central

Cada slide se diseña como un **póster de producto** y no como una tarjeta de presentación. Un objeto protagonista (recortado o a pantalla completa), tipografía enorme y un solo mensaje. La serie se sostiene por la marca (logo, Poppins, gradiente, papel y noche), no por repetir la misma grilla.

Inspiración aprobada: pósters gastronómicos con el producto recortado delante de una palabra gigante, comparaciones ✕ / ✓ con tarjetas flotantes y CTA sobre vidrio esmerilado.

## Marco común (en todas las slides)

- **Logo SVG** arriba a la izquierda (`top 64px`, `left 72px`, `210px` de ancho). La variante depende del fondo: `gradient-positive` sobre papel, `gradient-negative` sobre noche y `white` sobre fotografía.
- **Etiqueta superior derecha** en mayúsculas con tracking amplio (22px, SemiBold): el tema o un índice temático (`01 · Material`, `02 · Estructura`…).
- **Pie editorial:** `@infinitymanta` a la izquierda y `DESLIZA ⟶` a la derecha. En el CTA, el pie es la web.
- **Prohibido el contador «01 / 08»** o cualquier paginación tipo píldora.
- **Tag de sección** sobre el titular: una línea corta con gradiente y una etiqueta en mayúsculas («— HAZ LA CUENTA»).

## Tipografía

- Titular principal: Poppins ExtraBold, 80–150px, `letter-spacing: -0.045em`, `line-height: .9–.96`.
- Palabra clave en **gradiente** (verde → cyan) como remate: «dos veces.», «descuentos.», «Compara lo que dura.». Una sola por slide.
- Palabra gigante de fondo: 600px o más, ExtraBold, en gradiente, parcialmente tapada por el objeto protagonista («SOL», «×2»).
- Cuerpo: 32–35px Regular; nunca menos de 30px.
- Etiquetas: 22–26px SemiBold, mayúsculas, tracking 0.14–0.2em.

## Superficies

Alternar papel `#F4F3EE`, noche `#0A0D0F` y fotografía a pantalla completa. Nunca dos slides oscuras seguidas si se puede evitar. El gradiente es firma: se usa en palabras clave, badges ✓, botón CTA y la palabra gigante, nunca como fondo completo.

## Familias de composición del estilo

Usar al menos cinco en una serie de ocho. Ninguna se repite dos veces seguidas.

1. **Hook póster (papel):** titular gigante arriba en dos líneas, remate en gradiente y objeto protagonista abajo, fundido con la superficie (máscara degradada arriba y `mix-blend-mode: multiply`). Marcas flotantes ✓ / ✕ con píldoras blancas («Día 1» / «Meses después»).
2. **Palabra gigante + recorte (noche):** una palabra enorme en gradiente detrás de un objeto recortado, rotado de −5 a −8° y con sombra profunda. El titular abajo, sobre un degradado a negro.
3. **Foto completa + titular:** imagen a sangre y una veladura de papel en la zona superior para el titular. La etiqueta del problema va en una píldora negra.
4. **Comparación con deslizador:** dos mitades a sangre (✕ a la izquierda y ✓ a la derecha), línea blanca central y perilla circular con flechas «‹ ›». Las etiquetas de cada lado van en píldoras. El texto va en un bloque inferior.
5. **Objeto diseñado:** un objeto cotidiano construido en CSS que explica una idea (ticket con borde dentado, rotado −4°, con sombra). Se acompaña de la palabra o cifra gigante detrás. No debe ser un rectángulo decorativo: tiene que contar algo por sí mismo.
6. **Checklist + protagonista (noche):** lista numerada con números en gradiente y separadores finos. Un producto real recortado sale por la esquina inferior derecha, con un halo cyan–verde. Incluye «Guárdalo…» con icono de marcador.
7. **Collage de evidencia (papel):** foto principal del proyecto real en tarjeta redondeada (rotada 2–3°) con una píldora «Proyecto Infinity · Cliente». Se acompaña de 2 polaroids de proceso rotadas, con índice en gradiente y leyenda.
8. **CTA de vidrio:** foto real a sangre y panel de vidrio esmerilado (`backdrop-filter: blur(28px)`, borde blanco al 35 %, radio 40px). Dentro va el titular blanco con el remate en gradiente, una línea de acción y un botón en gradiente con el icono de WhatsApp y el número.

## Recursos visuales

- **Problemas o errores:** imágenes generadas genéricas, sin texto ni marcas. Se generan con Canva AI (conector de Canva) o con Magnific, según `content/AI_VISUAL_HOOKS.md`.
- **Solución y evidencia:** fotografía real de Infinity. Los recortes de productos reales se hacen con `rembg` (modelo `isnet-general-use`) y se colocan de modo que el borde cortado salga del cuadro.
- **Detalles de interfaz permitidos:** badges ✓ (gradiente) y ✕ (negro con borde blanco), píldoras, perilla de comparación e icono de guardar. Nada de paneles, reglas ni aspecto de dashboard.

## Flujo de producción

1. Estrategia y guion según `content/` (etapa, hook, una sola acción).
2. Duplicar `entregas/calidad-precio/` como `entregas/<tema>/` y editar `src/carrusel.html`.
3. Colocar imágenes generadas en `src/gen/` y fotos reales en `src/img/`. `src/cutouts.py` recorta los objetos protagonistas.
4. `node src/render.js`: exporta cada `<section class="slide">` como PNG 1080 × 1350 (necesita `playwright-core` y Chromium).
5. Si alguna imagen generada sigue en baja resolución (<800px), la slide muestra automáticamente la franja «VISTA PREVIA». No se publica hasta reemplazarla.
6. Revisar cada PNG al 100 % con `social/EXPORT_CHECKLIST.md`.

## Cómo se decide el tema (antes de diseñar)

1. Proponer 3–4 temas con etapa del embudo, hook y por qué puede circular. El cliente elige; si da «carta libre», enfocar la idea en una tensión verdadera y demostrable.
2. Buscar un ángulo local y visual: «El sol de Manta no hace descuentos», «El salitre tampoco negocia». Lo local y lo verdadero se comparte más que lo genérico.
3. Incluir siempre un matiz honesto («No todo lo económico es malo…») y nunca atacar a otros proveedores ni inventar cifras o duraciones.

## Imágenes generadas con Canva AI

- Se generan con la herramienta `generate-image` del conector de Canva (proporción `PORTRAIT_4_5`), con prompts sin texto, logos ni marcas. Quedan guardadas en la cuenta de Canva del cliente con su media ID.
- Este entorno solo recibe miniaturas (~160 px); canva.com está bloqueado por la red. En local, las slides con miniaturas muestran la franja «VISTA PREVIA». Las versiones finales se arman dentro de Canva con la imagen en alta resolución (ver abajo).
- Para usar un objeto generado como recorte dentro de Canva: `remove-background` sobre su media ID.

## Recortes de fotos reales

- `rembg` con `isnet-general-use` (mejor que `u2net` para objetos). Endurecer la transparencia (alfa `(a−0.2)/0.5`) para evitar zonas turbias.
- Nunca dejar un borde recto de recorte dentro del cuadro: el objeto sale por un borde del slide o se funde con un degradado de transparencia.
- Si el objeto choca con el texto (p. ej. una escalera), fundir la parte superior a transparente **dentro del PNG** (no con `mask-image`), así funciona igual en Canva.
- Etiquetar las fotos de proyectos reales con una píldora «Proceso Infinity · Cliente» o «Proyecto Infinity · Cliente».

## Entrega en Canva

Los PNG se publican en GitHub (rama del trabajo) y Canva los importa desde `raw.githubusercontent.com` (`upload-asset-from-url`); los HTML se importan vía `raw.githack.com/<owner>/<repo>/<commit>/…` (`import-design-from-url`). Se entregan dos diseños:

1. **Versión exacta** (`canva/import.html`): cada página es el PNG final; en las slides con imágenes generadas se exporta la capa de diseño con huecos transparentes (`render-capas.js`, `?capa=top|bottom`) y debajo se coloca la imagen de alta resolución de Canva (`insert_fill` + `layer_element` al fondo). Idéntica al diseño; textos no editables.
2. **Versión editable** (`src/carrusel-editable.html`): textos editables en Poppins. El importador de Canva no soporta `gap`, `backdrop-filter` ni `mask-image`: usar márgenes, panel oscuro translúcido en el CTA y fundidos incorporados en los PNG. Después de importar: reemplazar miniaturas por las imágenes de alta resolución (`update_fill`), separar el tag de su línea (texto a `left: 128`) y revisar píldoras con icono.

Reglas: mostrar vista previa y pedir aprobación antes de guardar (`commit`); si el cliente ya editó una página en Canva, no sobrescribirla sin preguntar.

## Qué mantener fresco entre publicaciones

El estilo es un sistema, no una plantilla fija. En cada carrusel nuevo:

- cambia la palabra gigante, el objeto protagonista y el objeto diseñado (ticket, etiqueta, regla, cinta de medir, recibo, sobre…);
- cambia el orden de las familias y qué superficie abre la serie;
- conserva el marco común, la tipografía, el gradiente como remate y el CTA de vidrio.
