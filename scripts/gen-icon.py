# -*- coding: utf-8 -*-
"""Vyrobí ikonu webu. Firma nemá logo, značkou je iniciála na signální červené."""
import os
from PIL import Image, ImageDraw, ImageFont

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))

SIGNAL = (168, 47, 38)
FONTS = [r"C:\Windows\Fonts\segoeuib.ttf", r"C:\Windows\Fonts\arialbd.ttf"]


def font(size):
    for p in FONTS:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


def make(size, path, letter="C"):
    im = Image.new("RGB", (size, size), SIGNAL)
    d = ImageDraw.Draw(im)
    f = font(int(size * 0.62))
    box = d.textbbox((0, 0), letter, font=f)
    x = (size - (box[2] - box[0])) / 2 - box[0]
    y = (size - (box[3] - box[1])) / 2 - box[1]
    d.text((x, y), letter, font=f, fill="white")
    # Spodní bílá linka, stejný prvek jako podtržení v navigaci
    bar = max(2, size // 16)
    d.rectangle([0, size - bar, size, size], fill="white")
    im.save(path)
    print("napsano", path, im.size)


make(512, "app/icon.png")
make(180, "app/apple-icon.png")
