// Generates the new Convertra icon: dark graphite square,
// grey audio waveform (left) -> green dotted arrow (right).
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const GREEN = '#8BE06A';

// --- waveform bars (left) ---
const barW = 30;
const barX = [150, 196, 242, 288, 334, 380, 426];
const barH = [130, 230, 330, 430, 330, 220, 150];
let bars = '';
barX.forEach((x, i) => {
  const h = barH[i];
  bars += `<rect x="${x - barW / 2}" y="${512 - h / 2}" width="${barW}" height="${h}" rx="${barW / 2}" fill="url(#wave)" opacity="0.95"/>`;
});

// --- green connector dash (center-left of arrow) ---
let dash = `<rect x="474" y="498" width="46" height="28" rx="14" fill="${GREEN}"/>`;

// --- green dotted right-arrow (dot-matrix triangle) ---
const r = 15;
const sx = 44, sy = 44;
const cols = [
  { x: 556, n: 7 },
  { x: 600, n: 7 },
  { x: 644, n: 5 },
  { x: 688, n: 3 },
  { x: 732, n: 1 },
];
let dots = '';
for (const c of cols) {
  for (let k = 0; k < c.n; k++) {
    const y = 512 + (k - (c.n - 1) / 2) * sy;
    dots += `<circle cx="${c.x}" cy="${y}" r="${r}" fill="${GREEN}"/>`;
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#212226"/>
      <stop offset="0.5" stop-color="#141518"/>
      <stop offset="1" stop-color="#0a0b0d"/>
    </linearGradient>
    <linearGradient id="wave" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#c2c6ca"/>
    </linearGradient>
    <filter id="gg" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="${GREEN}" flood-opacity="0.45"/>
    </filter>
  </defs>
  <rect width="1024" height="1024" rx="230" ry="230" fill="url(#bg)"/>
  <rect x="3" y="3" width="1018" height="1018" rx="228" ry="228" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="3"/>
  <g>${bars}</g>
  <g filter="url(#gg)">${dash}${dots}</g>
</svg>`;

writeFileSync(new URL('./newicon.svg', import.meta.url), svg);

// favicon.svg for the site
writeFileSync('/Users/hamidkazimov/Documents/ChatGPT/convertra-site/public/favicon.svg', svg);

// rasterize targets
const buf = Buffer.from(svg);
const targets = [
  ['/Users/hamidkazimov/Documents/ChatGPT/конвертра/Resources/AppIcon.png', 2048],
  ['/Users/hamidkazimov/Documents/ChatGPT/convertra-site/public/favicon-16.png', 16],
  ['/Users/hamidkazimov/Documents/ChatGPT/convertra-site/public/favicon-32.png', 32],
  ['/Users/hamidkazimov/Documents/ChatGPT/convertra-site/public/apple-touch-icon.png', 180],
  ['/Users/hamidkazimov/Documents/ChatGPT/convertra-site/public/icon-192.png', 192],
  ['/Users/hamidkazimov/Documents/ChatGPT/convertra-site/public/icon-512.png', 512],
  ['/tmp/newicon-preview.png', 320],
];
for (const [f, s] of targets) {
  await sharp(buf, { density: 600 }).resize(s, s).png().toFile(f);
  console.log('wrote', f, s);
}
