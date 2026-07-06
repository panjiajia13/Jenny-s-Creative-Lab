// engine-pptx.js — renders a deck (buildDeck(api)) to a real .pptx via pptxgenjs.
// The `api` primitives are identical to engine-html.js, so an HTML preview built
// from the SAME deck module is a faithful stand-in for the .pptx layout.
//
// Coordinate system: inches on a LAYOUT_16x9 slide (10" x 5.625").
const pptxgen = require("pptxgenjs");

function renderPptx(buildDeck, opts = {}) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = opts.author || "Jenny's Creative Lab";
  pres.title = opts.title || "Presentation";

  const mkShadow = () => ({ type: "outer", color: "000000", blur: 9, offset: 3, angle: 90, opacity: 0.12 });
  const TRI = pres.shapes.TRIANGLE || "triangle";
  const JIT = [0.58, 1.0, 0.74, 0.92, 0.5, 0.86, 1.0, 0.66, 0.95, 0.56, 0.8, 0.7, 0.9, 0.6];
  let slide = null;

  const api = {
    slide(bg) { slide = pres.addSlide(); slide.background = { color: bg }; },
    rect(x, y, w, h, o = {}) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x, y, w, h,
        fill: o.fill ? { color: o.fill, transparency: o.transparency || 0 } : { type: "none" },
        line: o.lineColor ? { color: o.lineColor, width: o.lineWidth || 1, dashType: o.dash } : { type: "none" },
        ...(o.shadow ? { shadow: mkShadow() } : {}), ...(o.rotate ? { rotate: o.rotate } : {}),
      });
    },
    roundRect(x, y, w, h, o = {}) {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y, w, h, rectRadius: o.radius || 0.1,
        fill: o.fill ? { color: o.fill, transparency: o.transparency || 0 } : { type: "none" },
        line: o.lineColor ? { color: o.lineColor, width: o.lineWidth || 1, dashType: o.dash } : { type: "none" },
        ...(o.shadow ? { shadow: mkShadow() } : {}), ...(o.rotate ? { rotate: o.rotate } : {}),
      });
    },
    oval(x, y, w, h, o = {}) {
      slide.addShape(pres.shapes.OVAL, {
        x, y, w, h,
        fill: o.fill ? { color: o.fill } : { type: "none" },
        line: o.lineColor ? { color: o.lineColor, width: o.lineWidth || 1 } : { type: "none" },
      });
    },
    tri(x, y, w, h, o = {}) {
      slide.addShape(TRI, { x, y, w, h, fill: { color: o.fill }, line: { type: "none" }, ...(o.rotate ? { rotate: o.rotate } : {}) });
    },
    line(x, y, w, h, o = {}) {
      slide.addShape(pres.shapes.LINE, { x, y, w, h, line: { color: o.color, width: o.width || 1, dashType: o.dash } });
    },
    wave(x, yMid, w, maxH, color, o = {}) {
      const n = o.n || 46, barW = o.barW || 0.02, op = o.transparency || 0;
      const step = (w - barW) / (n - 1);
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1);
        const env = Math.pow(Math.sin(Math.PI * t), 0.75);
        const bh = Math.max(0.03, maxH * (0.10 + 0.90 * env * JIT[i % JIT.length]));
        slide.addShape(pres.shapes.RECTANGLE, { x: x + i * step, y: yMid - bh / 2, w: barW, h: bh, fill: { color, transparency: op }, line: { type: "none" } });
      }
    },
    paw(cx, cy, sizeIn, color) {
      const sc = sizeIn / 30, cxL = 11.6, cyL = 14;
      const ov = (lx, ly, rx, ry) => slide.addShape(pres.shapes.OVAL, {
        x: cx + (lx - cxL) * sc - rx * sc, y: cy + (ly - cyL) * sc - ry * sc,
        w: 2 * rx * sc, h: 2 * ry * sc, fill: { color }, line: { type: "none" },
      });
      ov(9, 20, 7.4, 8.6); ov(0, 9, 3.4, 4.2); ov(8, 3.5, 3.4, 4.2); ov(17, 4.5, 3.2, 4.0); ov(23.5, 11, 3.1, 3.9);
    },
    image(path, x, y, w, h) { slide.addImage({ path, x, y, w, h }); },
    text(runs, o = {}) {
      const base = { x: o.x, y: o.y, w: o.w, h: o.h, fontFace: o.font, fontSize: o.size, bold: !!o.bold, italic: !!o.italic,
        color: o.color || "000000", align: o.align || "left", valign: o.valign || "top", margin: 0 };
      if (o.charSpacing) base.charSpacing = o.charSpacing;
      if (o.lh) base.lineSpacingMultiple = o.lh;
      if (Array.isArray(runs)) {
        slide.addText(runs.map((r) => ({
          text: r.text,
          options: { bold: r.bold !== undefined ? r.bold : !!o.bold, italic: r.italic !== undefined ? r.italic : !!o.italic,
            color: r.color || o.color || "000000", ...(r.brk ? { breakLine: true } : {}) },
        })), base);
      } else { slide.addText(runs, base); }
    },
  };

  buildDeck(api);
  return pres.writeFile({ fileName: opts.fileName || "deck.pptx" });
}

module.exports = { renderPptx };
