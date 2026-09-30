# Instrucciones para Claude Design

Este repositorio es la fuente operativa de la identidad visual de Infinity Diseño y Publicidad.

## Orden obligatorio

Antes de crear cualquier pieza:

1. Lee `DESIGN.md` completo.
2. Si la pieza requiere una idea, guion, calendario o intención comercial, lee `content/README.md`, `content/CONTENT_STRATEGY.md` y `content/FUNNEL.md`.
3. Lee el archivo del canal: `social/CAROUSELS.md` o `social/REELS.md`. Para carruseles, aplica el estilo vigente `social/STYLE_POSTER_EDITORIAL.md` y parte de su implementación de referencia en `entregas/calidad-precio/`.
4. Lee `social/MEDIA_POLICY.md`, `social/COPY_GUIDE.md` y `social/EXPORT_CHECKLIST.md`.
5. Revisa los archivos disponibles en `assets/`. Para carruseles, lee `social/STYLE_POSTER_EDITORIAL.md` y revisa `entregas/calidad-precio/`: es la única referencia de estilo.

## Estrategia antes de diseño

Para cualquier reel o campaña, define primero:

- etapa TOFU, MOFU o BOFU;
- audiencia y problema concreto;
- pilar de contenido;
- hook demostrable;
- estructura narrativa;
- una sola acción final.

Usa `content/VIRAL_HOOKS.md`, `content/AI_VISUAL_HOOKS.md`, `content/REEL_FORMULAS.md`, `content/SCRIPT_TEMPLATE.md`, `content/PRODUCTION_BRIEF.md` y `content/CTA_LIBRARY.md`. No prometas viralidad ni uses clickbait que la pieza no pueda demostrar.

Una imagen generada con Magnific u otra herramienta puede protagonizar el hook cuando aumenta la retención y representa claramente el concepto. En carruseles educativos pueden usarse varias escenas generadas para demostrar problemas diferentes sin señalar clientes reales; no existe un límite fijo de una imagen. Trátalas como metáforas editoriales, no como evidencia de trabajos ejecutados por Infinity. Si no puedes generarlas, entrega los prompts de producción y placeholders explícitos; nunca las reemplaces con formas planas como solución final.

## Reglas no negociables

- Usa Poppins y los colores definidos en `tokens/`.
- Usa un SVG real de `assets/brand/`; nunca escribas “infinity” para simular el logotipo.
- Usa fotografía real de `assets/photography/` cuando represente correctamente el tema.
- No inventes clientes, obras, testimonios, cifras, certificaciones ni resultados.
- No presentes un trabajo real de Infinity como ejemplo de un error. Para explicar errores, usa encuadres anónimos, diagramas sobre una composición genérica o un placeholder claramente rotulado.
- Si falta una imagen necesaria, coloca un bloque `IMAGEN PENDIENTE: [descripción exacta]` y repórtalo. No sustituyas la imagen con círculos, rectángulos decorativos o falsos mockups.
- Todo carrusel usa **únicamente** el estilo Póster Editorial (`social/STYLE_POSTER_EDITORIAL.md`), aprobado con el carrusel «Lo barato se nota» (`entregas/calidad-precio/`). No uses otro estilo aunque no se mencione en el pedido. No copies sus textos ni repitas la misma grilla: mantén el sistema y cambia el contenido.
- `assets/references/carousel-approved/` es un archivo histórico. No lo uses como referencia de estilo.
- La identidad admite fondos claros y oscuros. No conviertas todas las piezas en una interfaz negra.
- Una pieza social debe sentirse diseñada para Instagram, no como una presentación corporativa o dashboard.
- No agregues reglas, guías, paneles de edición ni controles dentro de la exportación.
- No uses contador de slides («01 / 08») ni paginación en píldora. La continuidad la dan el logo, el pie editorial y los índices temáticos.

## Flujo de trabajo

Cuando el usuario pida una propuesta final, entrega el diseño final directamente. No detengas el trabajo para pedir aprobación del copy, salvo que falte información esencial.

Cuando el usuario pida un reel con modelo, entrega antes de producir: etapa del embudo, concepto, hook, guion hablado, acciones de la modelo, lista de B-roll, textos en pantalla, CTA, caption y portada. Después aplica las reglas visuales de `social/REELS.md`.

Antes de exportar, verifica visualmente cada cuadro al 100%:

- jerarquía y legibilidad;
- recortes de fotografía;
- logo correcto para el fondo;
- márgenes seguros;
- ausencia de texto desbordado;
- continuidad narrativa;
- cada archivo con las dimensiones correctas.

## Entrega

- Carrusel: un PNG individual por slide, 1080 × 1350 px, y un PDF multipágina opcional. Nunca un solo PDF vertical con todos los slides apilados.
- Reel: video 1080 × 1920 px más portada PNG; entrega también el storyboard si se solicitó.
- Nombres: `tema-01-hook.png`, `tema-02-...png`; para reels `tema-reel-v01.mp4`.

