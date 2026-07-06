// engine-html.js — renders a deck (buildDeck(api)) to slide1.html..slideN.html,
// one 960x540 page each (16:9 at 96px/inch). Screenshot these with Chromium for
// visual QA. Uses the SAME `api` primitives as engine-pptx.js so the preview
// matches the .pptx layout. (This environment's LibreOffice cannot render, so
// Chromium screenshots of these files are our QA channel — see ppt-toolkit/README.)
const fs = require("fs");
const path = require("path");

const PX = (v) => v * 96;            // inches -> px
const PT = (v) => v * (96 / 72);     // points -> px
const hex = (c) => "#" + c;
const rgba = (c, tPct) => {
  const a = 1 - (tPct || 0) / 100;
  const r = parseInt(c.slice(0, 2), 16), g = parseInt(c.slice(2, 4), 16), b = parseInt(c.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
};

function renderHtml(buildDeck, outDir = ".") {
  const slides = [];
  let cur = null;
  const push = (s) => cur.parts.push(s);
  const JIT = [0.58, 1.0, 0.74, 0.92, 0.5, 0.86, 1.0, 0.66, 0.95, 0.56, 0.8, 0.7, 0.9, 0.6];

  const api = {
    slide(bg) { cur = { bg, parts: [] }; slides.push(cur); },
    rect(x, y, w, h, o = {}) {
      const st = [`position:absolute`, `left:${PX(x)}px`, `top:${PX(y)}px`, `width:${PX(w)}px`, `height:${PX(h)}px`, `box-sizing:border-box`];
      if (o.fill) st.push(`background:${rgba(o.fill, o.transparency)}`);
      if (o.lineColor) st.push(`border:${PT(o.lineWidth || 1)}px ${o.dash ? "dashed" : "solid"} ${hex(o.lineColor)}`);
      if (o.shadow) st.push(`box-shadow:0 ${PT(3)}px ${PT(9)}px rgba(0,0,0,0.12)`);
      if (o.rotate) st.push(`transform:rotate(${o.rotate}deg)`);
      push(`<div style="${st.join(";")}"></div>`);
    },
    roundRect(x, y, w, h, o = {}) {
      const st = [`position:absolute`, `left:${PX(x)}px`, `top:${PX(y)}px`, `width:${PX(w)}px`, `height:${PX(h)}px`, `box-sizing:border-box`, `border-radius:${PX(o.radius || 0.1)}px`];
      if (o.fill) st.push(`background:${rgba(o.fill, o.transparency)}`);
      if (o.lineColor) st.push(`border:${PT(o.lineWidth || 1)}px ${o.dash ? "dashed" : "solid"} ${hex(o.lineColor)}`);
      if (o.shadow) st.push(`box-shadow:0 ${PT(3)}px ${PT(9)}px rgba(0,0,0,0.12)`);
      if (o.rotate) st.push(`transform:rotate(${o.rotate}deg)`);
      push(`<div style="${st.join(";")}"></div>`);
    },
    oval(x, y, w, h, o = {}) {
      const st = [`position:absolute`, `left:${PX(x)}px`, `top:${PX(y)}px`, `width:${PX(w)}px`, `height:${PX(h)}px`, `box-sizing:border-box`, `border-radius:50%`];
      if (o.fill) st.push(`background:${hex(o.fill)}`);
      if (o.lineColor) st.push(`border:${PT(o.lineWidth || 1)}px solid ${hex(o.lineColor)}`);
      push(`<div style="${st.join(";")}"></div>`);
    },
    tri(x, y, w, h, o = {}) {
      const st = [`position:absolute`, `left:${PX(x)}px`, `top:${PX(y)}px`, `width:0`, `height:0`,
        `border-left:${PX(w) / 2}px solid transparent`, `border-right:${PX(w) / 2}px solid transparent`,
        `border-bottom:${PX(h)}px solid ${hex(o.fill)}`, `transform-origin:center`];
      if (o.rotate) st.push(`transform:rotate(${o.rotate}deg)`);
      push(`<div style="${st.join(";")}"></div>`);
    },
    line(x, y, w, h, o = {}) {
      const vertical = w === 0 || h > w;
      const st = [`position:absolute`, `left:${PX(x)}px`, `top:${PX(y)}px`];
      if (vertical) st.push(`height:${PX(h)}px`, `width:0`, `border-left:${PT(o.width || 1)}px ${o.dash ? "dashed" : "solid"} ${hex(o.color)}`);
      else st.push(`width:${PX(w)}px`, `height:0`, `border-top:${PT(o.width || 1)}px ${o.dash ? "dashed" : "solid"} ${hex(o.color)}`);
      push(`<div style="${st.join(";")}"></div>`);
    },
    wave(x, yMid, w, maxH, color, o = {}) {
      const n = o.n || 46, barW = o.barW || 0.02, op = o.transparency || 0;
      const step = (w - barW) / (n - 1);
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1);
        const env = Math.pow(Math.sin(Math.PI * t), 0.75);
        const bh = Math.max(0.03, maxH * (0.10 + 0.90 * env * JIT[i % JIT.length]));
        push(`<div style="position:absolute;left:${PX(x + i * step)}px;top:${PX(yMid - bh / 2)}px;width:${PX(barW)}px;height:${PX(bh)}px;background:${rgba(color, op)}"></div>`);
      }
    },
    paw(cx, cy, sizeIn, color) {
      const sc = sizeIn / 30, cxL = 11.6, cyL = 14;
      const ov = (lx, ly, rx, ry) => push(
        `<div style="position:absolute;left:${PX(cx + (lx - cxL) * sc - rx * sc)}px;top:${PX(cy + (ly - cyL) * sc - ry * sc)}px;width:${PX(2 * rx * sc)}px;height:${PX(2 * ry * sc)}px;border-radius:50%;background:${hex(color)}"></div>`);
      ov(9, 20, 7.4, 8.6); ov(0, 9, 3.4, 4.2); ov(8, 3.5, 3.4, 4.2); ov(17, 4.5, 3.2, 4.0); ov(23.5, 11, 3.1, 3.9);
    },
    image(p, x, y, w, h) {
      push(`<img src="${p}" style="position:absolute;left:${PX(x)}px;top:${PX(y)}px;width:${PX(w)}px;height:${PX(h)}px;object-fit:contain">`);
    },
    text(runs, o = {}) {
      const vjust = o.valign === "middle" ? "center" : o.valign === "bottom" ? "flex-end" : "flex-start";
      const st = [`position:absolute`, `left:${PX(o.x)}px`, `top:${PX(o.y)}px`, `width:${PX(o.w)}px`, `height:${PX(o.h)}px`,
        `box-sizing:border-box`, `display:flex`, `flex-direction:column`, `justify-content:${vjust}`,
        `font-family:'${o.font}'`, `font-size:${PT(o.size)}px`, `font-weight:${o.bold ? 700 : 400}`,
        `font-style:${o.italic ? "italic" : "normal"}`, `color:${hex(o.color || "000000")}`,
        `text-align:${o.align || "left"}`, `overflow:visible`, `line-height:${o.lh ? o.lh : 1.1}`];
      if (o.charSpacing) st.push(`letter-spacing:${PT(o.charSpacing)}px`);
      let inner;
      if (Array.isArray(runs)) {
        inner = runs.map((r) => {
          const rs = [`color:${hex(r.color || o.color || "000000")}`,
            `font-weight:${(r.bold !== undefined ? r.bold : o.bold) ? 700 : 400}`,
            `font-style:${(r.italic !== undefined ? r.italic : o.italic) ? "italic" : "normal"}`];
          return `<span style="${rs.join(";")}">${r.text}</span>${r.brk ? "<br>" : ""}`;
        }).join("");
      } else { inner = runs; }
      push(`<div style="${st.join(";")}"><div>${inner}</div></div>`);
    },
  };

  buildDeck(api);
  slides.forEach((s, i) => {
    const html = `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0}
html,body{width:960px;height:540px;overflow:hidden}
.slide{position:relative;width:960px;height:540px;background:${hex(s.bg)};overflow:hidden}
</style></head><body><div class="slide">${s.parts.join("\n")}</div></body></html>`;
    fs.writeFileSync(path.join(outDir, `slide${i + 1}.html`), html);
  });
  return slides.length;
}

module.exports = { renderHtml };
