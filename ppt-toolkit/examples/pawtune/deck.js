// PAWTUNE product-introduction deck — the reference example for ppt-toolkit.
// A deck module exports buildDeck(api); the toolkit engines turn it into a
// .pptx and matching HTML previews. Copy this file as a starting point.
//
// Coordinates are in inches on a 10" x 5.625" (16:9) slide.
// Colors are 6-char hex WITHOUT a leading "#". Fonts are family names that must
// be installed for faithful rendering (see assets/fonts + ppt-toolkit/README).

const C = {
  BG: "F5F0E5", PANEL: "EDE4D3", DARK: "2E251B", INK: "33291E", MUT: "8A7B66",
  CARD: "FCFAF4", COG: "A96B3C", COGD: "8C5730", WAVE: "9A968B", CREAMD: "F1E9DA",
  TINTC: "EFE1CF", SUBD: "C9BCA6", SUBD2: "B6A88F",
};
const HEAD = "Fraunces";        // brand serif (assets/fonts/Fraunces.ttf, OFL)
const BODY = "Hanken Grotesk";  // brand sans  (assets/fonts/HankenGrotesk.ttf, OFL)

// --- composite icons (built from api primitives) ---
function icoPaw(a, cx, cy) { a.paw(cx, cy, 0.62, C.COGD); }
function icoSticks(a, cx, cy) {
  a.roundRect(cx - 0.40, cy - 0.045, 0.80, 0.09, { fill: C.COGD, radius: 0.045, rotate: 32 });
  a.roundRect(cx - 0.40, cy - 0.045, 0.80, 0.09, { fill: C.COGD, radius: 0.045, rotate: -32 });
  a.oval(cx + 0.27, cy - 0.31, 0.13, 0.13, { fill: C.COG });
  a.oval(cx - 0.40, cy - 0.31, 0.13, 0.13, { fill: C.COG });
}
function icoCanvas(a, cx, cy) {
  a.roundRect(cx - 0.34, cy - 0.34, 0.68, 0.68, { fill: "E7DAC2", radius: 0.08, lineColor: C.COGD, lineWidth: 1.25, dash: "dash" });
  a.tri(cx + 0.04, cy + 0.04, 0.30, 0.30, { fill: C.COGD, rotate: 180 });
}
function icoEars(a, cx, cy) {
  a.tri(cx - 0.36, cy - 0.34, 0.30, 0.34, { fill: C.COGD });
  a.tri(cx + 0.06, cy - 0.34, 0.30, 0.34, { fill: C.COGD });
  a.oval(cx - 0.33, cy - 0.06, 0.66, 0.46, { fill: C.COG });
}
function eyebrow(a, text, x, y, color = C.COG, w = 6) {
  a.text(text.toUpperCase(), { x, y, w, h: 0.3, font: BODY, size: 11.5, bold: true, color, charSpacing: 3, align: "left" });
}
function footer(a) {
  a.wave(0.5, 5.33, 0.9, 0.16, C.MUT, { n: 16, barW: 0.016, transparency: 20 });
  a.text("PAWTUNE", { x: 1.5, y: 5.18, w: 3, h: 0.3, font: HEAD, size: 10, bold: true, color: C.MUT, charSpacing: 2, valign: "middle" });
  a.text("Jenny’s Creative Lab", { x: 6.5, y: 5.18, w: 3, h: 0.3, font: BODY, size: 9.5, color: C.MUT, align: "right", valign: "middle" });
}

function buildDeck(a) {
  // ===== 1 · COVER (dark, product in a cream card) =====
  a.slide(C.DARK);
  a.wave(0.85, 1.18, 2.6, 0.5, C.COG, { n: 40, barW: 0.018, transparency: 25 });
  eyebrow(a, "Product Introduction", 0.9, 1.62, C.COG, 5);
  a.text("PAWTUNE", { x: 0.9, y: 1.92, w: 5.4, h: 0.6, font: HEAD, size: 26, bold: true, color: C.CREAMD, charSpacing: 4 });
  a.text([{ text: "Carry the beat.", color: C.CREAMD, brk: true }, { text: "Carry the cat.", color: C.COG, italic: true }],
    { x: 0.86, y: 2.45, w: 5.6, h: 1.7, font: HEAD, size: 47, bold: true, lh: 0.98 });
  a.text("A canvas tote built where two obsessions meet — live music and cat-parent life.",
    { x: 0.9, y: 4.18, w: 5.3, h: 0.8, font: BODY, size: 14.5, color: C.SUBD, lh: 1.18 });
  a.roundRect(6.62, 0.62, 2.92, 4.4, { fill: C.BG, radius: 0.14, shadow: true });
  const bagH = 3.74, bagW = bagH * 0.578;
  a.image("images/bag.png", 6.62 + (2.92 - bagW) / 2, 0.74, bagW, bagH);
  a.text("No. 01 — The Tote", { x: 6.62, y: 4.55, w: 2.92, h: 0.34, font: BODY, size: 10.5, bold: true, color: C.COGD, align: "center", charSpacing: 1.5 });

  // ===== 2 · THE IDEA =====
  a.slide(C.BG);
  eyebrow(a, "The Idea", 0.9, 0.7);
  a.text([{ text: "Built from a musician’s life — ", color: C.INK }, { text: "not bolted onto one.", color: C.COG, italic: true }],
    { x: 0.86, y: 1.04, w: 8.3, h: 1.2, font: HEAD, size: 33, bold: true, lh: 1.02 });
  a.text("Mass-market bags add a strap and call it functional. PAWTUNE starts from the pick pocket and the stick strap, then works backward to the shape — which is why it doesn’t look, or feel, like anything else on the shelf.",
    { x: 0.9, y: 2.32, w: 8.1, h: 1.0, font: BODY, size: 15, color: C.INK, lh: 1.25 });
  a.roundRect(0.9, 3.5, 1.78, 0.5, { fill: C.PANEL, radius: 0.25 });
  a.text("♪  Live music", { x: 0.9, y: 3.5, w: 1.78, h: 0.5, font: BODY, size: 12.5, bold: true, color: C.COGD, align: "center", valign: "middle" });
  a.roundRect(2.82, 3.5, 1.6, 0.5, { fill: C.PANEL, radius: 0.25 });
  a.paw(3.28, 3.76, 0.34, C.COGD);
  a.text("Cat life", { x: 3.5, y: 3.5, w: 0.86, h: 0.5, font: BODY, size: 12.5, bold: true, color: C.COGD, valign: "middle" });
  a.wave(0.9, 4.62, 8.2, 0.78, C.WAVE, { n: 70, barW: 0.018 });
  footer(a);

  // ===== 3 · SIGNATURE DETAILS (2x2) =====
  a.slide(C.BG);
  eyebrow(a, "Signature Details", 0.9, 0.55);
  a.text("Details only a musician would ask for.", { x: 0.86, y: 0.86, w: 8.4, h: 0.7, font: HEAD, size: 30, bold: true, color: C.INK });
  const cards = [
    { ico: icoPaw, t: "Paw-clasp pick pocket", d: "A paw-shaped snap hides a flat pocket sized for picks — not phones." },
    { ico: icoSticks, t: "Drumstick side strap", d: "An adjustable leather strap cinches your sticks so they stop sliding out mid-load-in." },
    { ico: icoCanvas, t: "16 oz canvas & leather", d: "Substantial-feeling canvas with cognac corners — a full day of gear, no shoulder ache." },
    { ico: icoEars, t: "Cat-ear silhouette", d: "Soft fabric ears and Morandi-toned canvas: an accessory you’d wear gig or no gig." },
  ];
  const cw = 4.05, ch = 1.62, gx = 0.9, gy = 1.78, mx = 0.2, my = 0.22;
  cards.forEach((c, i) => {
    const cx = gx + (i % 2) * (cw + mx), cy = gy + Math.floor(i / 2) * (ch + my);
    a.roundRect(cx, cy, cw, ch, { fill: C.CARD, radius: 0.1, shadow: true });
    a.oval(cx + 0.72 - 0.46, cy + ch / 2 - 0.46, 0.92, 0.92, { fill: C.TINTC });
    c.ico(a, cx + 0.72, cy + ch / 2);
    a.text(c.t, { x: cx + 1.32, y: cy + 0.26, w: cw - 1.5, h: 0.4, font: HEAD, size: 15.5, bold: true, color: C.INK });
    a.text(c.d, { x: cx + 1.32, y: cy + 0.68, w: cw - 1.5, h: 0.82, font: BODY, size: 11.8, color: C.MUT, lh: 1.12 });
  });
  footer(a);

  // ===== 4 · SMART STORAGE =====
  a.slide(C.PANEL);
  eyebrow(a, "Smart Storage", 0.9, 0.78);
  a.text([{ text: "Three lives,", brk: true }, { text: "three compartments." }],
    { x: 0.86, y: 1.12, w: 4.1, h: 1.4, font: HEAD, size: 30, bold: true, color: C.INK, lh: 1.0 });
  a.text("A hidden divider keeps cables and picks away from your wallet and keys — and a third bay stays open for treats, a collar, or whatever your cat insists on bringing along.",
    { x: 0.9, y: 2.92, w: 3.9, h: 1.4, font: BODY, size: 14, color: C.INK, lh: 1.28 });
  const bx = 5.35, by = 1.35, bw = 3.95, bh = 3.05;
  a.roundRect(bx, by, bw, bh, { fill: C.CARD, radius: 0.16, lineColor: C.COG, lineWidth: 1.5, shadow: true });
  const bays = [
    { ico: icoSticks, label: "GEAR", sub: "cables · picks · sticks" },
    { ico: icoCanvas, label: "DAILY", sub: "wallet · keys · phone" },
    { ico: icoPaw, label: "CAT", sub: "treats · collar" },
  ];
  const bayW = bw / 3;
  bays.forEach((b, i) => {
    const cx = bx + bayW * i + bayW / 2;
    if (i > 0) a.line(bx + bayW * i, by + 0.35, 0, bh - 0.7, { color: C.COG, width: 1, dash: "dash" });
    a.oval(cx - 0.43, by + 0.95 - 0.43, 0.86, 0.86, { fill: C.TINTC });
    b.ico(a, cx, by + 0.95);
    a.text(b.label, { x: bx + bayW * i, y: by + 1.5, w: bayW, h: 0.36, font: HEAD, size: 16, bold: true, color: C.INK, align: "center", charSpacing: 1 });
    a.text(b.sub, { x: bx + bayW * i + 0.05, y: by + 1.9, w: bayW - 0.1, h: 0.9, font: BODY, size: 10.5, color: C.MUT, align: "center", lh: 1.15 });
  });
  footer(a);

  // ===== 5 · EVERY SCENE =====
  a.slide(C.BG);
  eyebrow(a, "One bag, every scene", 0.9, 0.62);
  a.text("However the day actually goes.", { x: 0.86, y: 0.94, w: 8.4, h: 0.7, font: HEAD, size: 30, bold: true, color: C.INK });
  const scenes = [
    { label: "Load-in night", d: "Sits by the kit like it was always part of the setup." },
    { label: "Daily errands", d: "Reads intentional on the grocery run, gig or no gig." },
    { label: "Cat-park walk", d: "Holds the treats your cat insists on bringing along." },
  ];
  const scw = 2.66, scgx = 0.9, scgy = 1.95, scmx = 0.27, sch2 = 2.4;
  scenes.forEach((sc, i) => {
    const cx0 = scgx + i * (scw + scmx), ccx = cx0 + scw / 2;
    a.roundRect(cx0, scgy, scw, sch2, { fill: C.CARD, radius: 0.1, shadow: true });
    a.oval(ccx - 0.5, scgy + 0.72 - 0.5, 1.0, 1.0, { fill: C.TINTC });
    a.text(String(i + 1), { x: ccx - 0.5, y: scgy + 0.32, w: 1.0, h: 0.8, font: HEAD, size: 30, bold: true, italic: true, color: C.COG, align: "center", valign: "middle" });
    a.text(sc.label, { x: cx0 + 0.2, y: scgy + 1.32, w: scw - 0.4, h: 0.4, font: HEAD, size: 16.5, bold: true, color: C.INK, align: "center" });
    a.text(sc.d, { x: cx0 + 0.28, y: scgy + 1.74, w: scw - 0.56, h: 0.62, font: BODY, size: 11.5, color: C.MUT, align: "center", lh: 1.15 });
  });
  a.text("Designed to look intentional in all three.", { x: 0.9, y: 4.62, w: 8.2, h: 0.4, font: HEAD, size: 15, italic: true, color: C.COGD, align: "center" });
  footer(a);

  // ===== 6 · CLOSING =====
  a.slide(C.DARK);
  a.wave(3.1, 1.5, 3.8, 0.62, C.COG, { n: 52, barW: 0.018, transparency: 15 });
  a.text("PAWTUNE", { x: 0, y: 2.35, w: 10, h: 0.5, font: HEAD, size: 22, bold: true, color: C.CREAMD, align: "center", charSpacing: 5 });
  a.text([{ text: "Made for cat people ", color: C.CREAMD }, { text: "who make things.", color: C.COG, italic: true }],
    { x: 0.5, y: 2.78, w: 9, h: 0.9, font: HEAD, size: 32, bold: true, align: "center" });
  a.text("Artist edition  ·  No. 01 — The Tote", { x: 0, y: 3.78, w: 10, h: 0.34, font: BODY, size: 12, color: C.SUBD2, align: "center", charSpacing: 1.5 });
  a.text([{ text: "Jenny’s Creative Lab", bold: true, color: C.CREAMD, brk: true }, { text: "panjiajia13@gmail.com", color: C.COG }],
    { x: 0, y: 4.4, w: 10, h: 0.7, font: BODY, size: 13, align: "center", lh: 1.3 });
}

module.exports = { buildDeck, C, HEAD, BODY };
