#!/usr/bin/env bash
# =============================================================================
# Font subsetting
# =============================================================================
# Produces the WOFF2 files served from static/fonts/.
#
# Source variable fonts are downloaded from the Google Fonts repository (OFL).
# Each is instanced at the specific weights the design uses, subset to the
# Latin character set, and compressed to WOFF2.
#
# This is a BUILD-TIME / one-off tool. It is not run during `npm run build`.
# Re-run it only when changing the type stack or the character set.
#
# Requirements:
#   python3 -m venv /tmp/fontenv
#   /tmp/fontenv/bin/pip install fonttools brotli
#
# Usage:
#   ./scripts/subset-fonts.sh
# =============================================================================

set -euo pipefail

PYTHON="${PYTHON:-/tmp/fontenv/bin/python}"
OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/static/fonts"
WORK_DIR="$(mktemp -d)"

# Latin subset: basic Latin, Latin-1 supplement, and the punctuation the site
# actually uses (curly quotes, em/en dashes, ellipsis, bullet, middot).
UNICODES="U+0020-007E,U+00A0-00FF,U+2013-2014,U+2018-2019,U+201C-201D,U+2022,U+2026,U+00B7,U+2019"

echo "==> Working in $WORK_DIR"
echo "==> Output to $OUT_DIR"

# --- Fetch sources -----------------------------------------------------------
echo "==> Fetching source fonts"
curl -sL -o "$WORK_DIR/playfair.ttf" \
  "https://github.com/google/fonts/raw/main/ofl/playfairdisplay/PlayfairDisplay%5Bwght%5D.ttf"
curl -sL -o "$WORK_DIR/inter.ttf" \
  "https://github.com/google/fonts/raw/main/ofl/inter/Inter%5Bopsz%2Cwght%5D.ttf"

# --- Instance + subset + compress --------------------------------------------
# Playfair Display: display face, only 600 and 700 are used.
for wght in 600 700; do
  echo "==> Playfair Display $wght"
  "$PYTHON" -m fontTools.varLib.instancer \
    "$WORK_DIR/playfair.ttf" wght="$wght" \
    -o "$WORK_DIR/playfair-$wght.ttf" >/dev/null

  "$PYTHON" -m fontTools.subset \
    "$WORK_DIR/playfair-$wght.ttf" \
    --unicodes="$UNICODES" \
    --layout-features='kern,liga,calt' \
    --flavor=woff2 \
    --output-file="$OUT_DIR/playfair-display-$wght.woff2"
done

# Inter: body face. 400/500/600. The opsz axis is pinned to the text optical
# size (14) since the site is text-first.
for wght in 400 500 600; do
  echo "==> Inter $wght"
  "$PYTHON" -m fontTools.varLib.instancer \
    "$WORK_DIR/inter.ttf" wght="$wght" opsz=14 \
    -o "$WORK_DIR/inter-$wght.ttf" >/dev/null

  "$PYTHON" -m fontTools.subset \
    "$WORK_DIR/inter-$wght.ttf" \
    --unicodes="$UNICODES" \
    --layout-features='kern,liga,calt,tnum' \
    --flavor=woff2 \
    --output-file="$OUT_DIR/inter-$wght.woff2"
done

rm -rf "$WORK_DIR"

echo
echo "==> Done. Output:"
ls -lh "$OUT_DIR"/*.woff2
