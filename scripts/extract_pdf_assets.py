from __future__ import annotations

import argparse
from io import BytesIO
from pathlib import Path

from PIL import Image
from pypdf import PdfReader


ASSETS = {
    (1, "X0.jp2"): "services/ai-agent.webp",
    (2, "X2.jpg"): "services/automation.webp",
    (3, "X6.jpg"): "services/lms.webp",
    (3, "X7.jpg"): "services/product.webp",
    (4, "X9.jpg"): "cases/foodtech.webp",
    (5, "X11.jpg"): "cases/consultant.webp",
    (6, "X13.jpg"): "cases/sales-analytics.webp",
    (7, "X15.jpg"): "cases/legacy.webp",
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Extract and optimize Synapt case visuals from the supplied PDF."
    )
    parser.add_argument("source", type=Path, help="Path to AI-разработка.pdf")
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("public/assets"),
        help="Destination asset directory",
    )
    return parser.parse_args()


def save_webp(data: bytes, destination: Path) -> None:
    with Image.open(BytesIO(data)) as image:
        image.load()
        if image.mode not in {"RGB", "RGBA"}:
            image = image.convert("RGB")
        image.thumbnail((2400, 2400), Image.Resampling.LANCZOS)
        destination.parent.mkdir(parents=True, exist_ok=True)
        image.save(destination, "WEBP", quality=86, method=6)


def main() -> None:
    args = parse_args()
    reader = PdfReader(args.source)

    for page_index, page in enumerate(reader.pages):
        for pdf_image in page.images:
            output_name = ASSETS.get((page_index, pdf_image.name))
            if output_name is None:
                continue
            destination = args.output / output_name
            save_webp(pdf_image.data, destination)
            print(f"Created {destination}")


if __name__ == "__main__":
    main()
