# Jenny's Creative Lab — repo guide for Claude

Portfolio / concept-brand work by Jenny (panjiajia13@gmail.com). Includes the
**PAWTUNE** speculative brand (a canvas tote for cat-owning musicians): landing
page, Instagram assets, and brand kit.

## Making presentations (PPT) — including from a Markdown file

**Use `ppt-toolkit/` (read `ppt-toolkit/README.md` first).** Jenny regularly
asks for client decks, often built from a `.md` brief. The toolkit is the agreed
workflow:

1. Write one deck module (`deck.js`) exporting `buildDeck(api)` — see
   `ppt-toolkit/examples/pawtune/deck.js` as the reference/template.
2. From the deck's folder: `node /…/ppt-toolkit/render.js ./deck.js "Name"`.
   This emits `Name.pptx` **and** Chromium QA screenshots `qa1..N.png`.
3. **Always visually QA every `qaN.png`** (overlaps / overflow / contrast /
   alignment), fix, re-render. The HTML preview and the `.pptx` come from the
   same deck module, so the preview faithfully represents the file.
4. Deliver the `.pptx` (attach) plus a preview image. Keep decks concise
   (~5–7 slides, one idea per slide) unless asked otherwise.

For a `.md` brief: parse headings → slides, lead sentences → titles, bullets →
copy; group into ~5–7 slides; vary layouts; keep the brand kit.

### Environment gotchas (important)
- **LibreOffice is broken here** — it lacks the headless `svp` VCL plugin, so
  `soffice --convert-to` fails on *any* file. Do **not** rely on the official
  `pptx` skill's `soffice.py` / `thumbnail.py` render path or `markitdown`
  thumbnails for QA. Use the toolkit's Chromium screenshots instead.
- **Chromium is pre-installed** under `PLAYWRIGHT_BROWSERS_PATH`
  (`/opt/pw-browsers`); `lib/screenshot.js` finds it automatically. Don't run
  `playwright install`.
- `pptxgenjs` writes valid `.pptx` files that open fine in PowerPoint / WPS /
  Google Slides — only in-container *preview* needed the workaround.
- The proprietary Anthropic `pptx` skill was intentionally **removed** from
  `.claude/skills/` (license + broken render path). Don't re-add it.

## Brand kit (PAWTUNE / Jenny's Creative Lab)
- **Fonts:** `Fraunces` (serif headings) + `Hanken Grotesk` (sans body),
  TTFs in `assets/fonts/` (OFL). Install into `~/.fonts` + `fc-cache` for
  faithful Chromium/LibreOffice rendering.
- **Palette:** cream `F5F0E5`, panel `EDE4D3`, espresso `2E251B`, ink `33291E`,
  cognac `A96B3C` / `8C5730`, soundwave gray `9A968B`.
- **Motifs:** audio **soundwave** + cat **paw** (repeat across a deck).
- Existing brand HTML/PNG assets live in `design/`.
