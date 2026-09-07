# -*- coding: utf-8 -*-
"""Vyrobí náhledový obrázek pro sdílení na sítích, 1200x630."""
import os
from PIL import Image, ImageDraw, ImageFont

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))

SRC = "public/foto/rozvadec-jistice.jpg"
OUT = "public/og.jpg"
W, H = 1200, 630
TINT = (61, 64, 66)

FONTS = [
    r"C:\Windows\Fonts\segoeuib.ttf",
    r"C:\Windows\Fonts\arialbd.ttf",
]
MONO = [
    r"C:\Windows\Fonts\consola.ttf",
    r"C:\Windows\Fonts\cour.ttf",
]


def load(paths, size):
    for p in paths:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


base = Image.open(SRC).convert("RGB")

# Výřez na 1200x630 přes střed
ratio = max(W / base.width, H / base.height)
resized = base.resize((round(base.width * ratio), round(base.height * ratio)))
left = (resized.width - W) // 2
top = (resized.height - H) // 2
canvas = resized.crop((left, top, left + W, top + H))

# Zástin v barvě odvozené z fotografie, stejně jako na webu
scrim = Image.new("RGB", (W, H), TINT)
mask = Image.new("L", (W, H))
md = ImageDraw.Draw(mask)
for x in range(W):
    a = 240 - int(150 * (x / W))
    md.line([(x, 0), (x, H)], fill=max(0, min(255, a)))
canvas = Image.composite(scrim, canvas, mask)

d = ImageDraw.Draw(canvas)
title = load(FONTS, 62)
sub = load(FONTS, 30)
mono = load(MONO, 40)

d.text((72, 150), "Elektroinstalace,", font=title, fill="white")
d.text((72, 224), "hromosvody a revize", font=title, fill="white")
d.text((72, 330), "Miroslav Chobotský, od roku 1995", font=sub, fill=(226, 230, 232))
d.text((72, 372), "Středočeský kraj a Praha", font=sub, fill=(180, 188, 192))

# Telefon na signální červené ploše
d.rectangle([72, 452, 72 + 330, 452 + 74], fill=(168, 47, 38))
d.text((104, 468), "606 145 684", font=mono, fill="white")

canvas.save(OUT, quality=86, optimize=True)
print("napsano", OUT, canvas.size, os.path.getsize(OUT) // 1024, "kB")
