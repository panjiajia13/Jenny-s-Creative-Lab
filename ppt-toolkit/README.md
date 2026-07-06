# ppt-toolkit — make on-brand `.pptx` decks (that actually get QA'd here)

A tiny, dependency-light pipeline for building PowerPoint decks in this repo —
including **turning a Markdown brief into a client-ready deck**. It exists
because the official Anthropic `pptx` skill's render/QA step relies on
LibreOffice, and **LibreOffice is broken in this environment** (see
[Why not the official skill / LibreOffice](#why-not-libreoffice)). This toolkit
uses `pptxgenjs` for the file and the **pre-installed Chromium** for visual QA.

## The idea: one deck module, two renderers

You write **one** deck module that describes every slide via a small drawing
`api`. Two engines consume the same module, so the preview you inspect is a
faithful stand-in for the real `.pptx`:

- `lib/engine-pptx.js` → the real `.pptx` (via `pptxgenjs`)
- `lib/engine-html.js` → `slideN.html` twins → screenshot with Chromium (`lib/screenshot.js`)

```
deck.js  ──►  engine-pptx  ──►  Name.pptx      (deliverable)
   │
   └────────►  engine-html  ──►  slideN.html  ──►  qaN.png   (visual QA)
```

## Quick start

```bash
npm install pptxgenjs           # once (registry.npmjs.org is reachable)
cd ppt-toolkit/examples/pawtune # a folder with deck.js + images/
node ../../render.js ./deck.js "PAWTUNE-Product-Introduction"
# → PAWTUNE-Product-Introduction.pptx, slide1..6.html, qa1..6.png
```

Then **read every `qaN.png`** and fix issues before delivering (overlaps,
overflow, contrast, alignment). Image paths in a deck module resolve relative to
the current directory, so run `render.js` from the deck's folder.

## Writing a deck module

Export `buildDeck(api)`. Coordinates are **inches** on a 10″ × 5.625″ (16:9)
slide. Colors are **6-char hex with no `#`**. See `examples/pawtune/deck.js`.

```js
function buildDeck(a) {
  a.slide("2E251B");                                   // start a slide (bg color)
  a.text("Hello", { x: 0.9, y: 1, w: 6, h: 1,
    font: "Fraunces", size: 40, bold: true, color: "F1E9DA" });
}
module.exports = { buildDeck };
```

### `api` primitives

| Call | Notes |
|------|-------|
| `a.slide(bgHex)` | begin a new slide |
| `a.text(runs, o)` | `runs` = string **or** `[{text, color, bold, italic, brk}]` (`brk` = line break). `o`: `x,y,w,h,font,size,bold,italic,color,align('left'\|'center'\|'right'),valign('top'\|'middle'\|'bottom'),charSpacing(pt),lh(line-height ×)` |
| `a.rect(x,y,w,h,o)` / `a.roundRect(...)` | `o`: `fill, transparency(0-100), lineColor, lineWidth(pt), dash('dash'), radius(in, roundRect), shadow(bool), rotate(deg)` |
| `a.oval(x,y,w,h,o)` | `o`: `fill, lineColor, lineWidth` |
| `a.tri(x,y,w,h,o)` | isosceles triangle (point up); `o`: `fill, rotate` |
| `a.line(x,y,w,h,o)` | `o`: `color, width(pt), dash`. Vertical when `w:0` |
| `a.image(path,x,y,w,h)` | path relative to the run dir; keeps aspect (contain) |
| `a.wave(x,yMid,w,maxH,color,o)` | signature soundwave motif; `o`: `n, barW, transparency` |
| `a.paw(cx,cy,size,color)` | signature paw motif (centered at `cx,cy`) |

## Turning a Markdown file into a deck

When given a `.md`, don't dump bullets onto slides. Do this:

1. **Parse structure.** `#`/`##` headings → slide/section boundaries; lead
   sentence → slide title; bullets/paragraphs → supporting copy. Group into
   ~5–7 slides that each make **one** point.
2. **Sandwich the deck.** Dark cover + dark closing, light content between.
3. **Map content to layouts** — vary them: statement, 2×2 cards, a labelled
   diagram, 3-up scenario cards. One idea per slide.
4. **Keep the brand** (below) unless the brief says otherwise.
5. **Write `deck.js`**, run `render.js`, then **QA every `qaN.png`** and iterate.

## Brand kit (Jenny's Creative Lab / PAWTUNE)

- **Fonts:** `Fraunces` (serif headings) + `Hanken Grotesk` (sans body). TTFs
  live in `assets/fonts/` (OFL, free). Install them so Chromium/PowerPoint
  render faithfully:
  ```bash
  mkdir -p ~/.fonts && cp assets/fonts/*.ttf ~/.fonts/ && fc-cache -f ~/.fonts
  ```
  Recipients without these fonts get a graceful serif/sans substitution. To
  guarantee identical rendering everywhere, embed the fonts in the `.pptx` or
  switch to system fonts (Georgia + Calibri).
- **Palette:** cream `F5F0E5` / panel `EDE4D3` / espresso `2E251B` / ink `33291E`
  / cognac `A96B3C` / deep cognac `8C5730` / soundwave gray `9A968B`.
- **Motifs:** the audio **soundwave** and the **cat paw** — repeat them.

<a name="why-not-libreoffice"></a>
## Why not the official `pptx` skill / LibreOffice

This environment's LibreOffice (24.2) is missing the headless **`svp`** VCL
plugin (only `genlo` is present), so `soffice --headless --convert-to …` fails
to load **any** file ("source file could not be loaded"). The official skill's
`thumbnail.py` / `soffice.py` render path therefore can't produce QA images
here. `pptxgenjs` still writes a perfectly valid `.pptx` — only the *preview*
was blocked — so this toolkit renders previews with Chromium instead. The
`.pptx` files themselves open normally in PowerPoint / WPS / Google Slides.
