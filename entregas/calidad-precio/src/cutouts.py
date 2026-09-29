"""Recorta el fondo de las imágenes generadas que funcionan como objeto protagonista."""
from pathlib import Path
from PIL import Image, ImageOps
from rembg import remove, new_session

GEN = Path(__file__).parent / "gen"
session = new_session("isnet-general-use")
for name in ["sol-panel"]:
    im = ImageOps.exif_transpose(Image.open(GEN / f"{name}.jpg")).convert("RGB")
    out = remove(im, session=session)
    out.crop(out.getbbox()).save(GEN / f"{name}-cut.png")
    print(name, out.size)
