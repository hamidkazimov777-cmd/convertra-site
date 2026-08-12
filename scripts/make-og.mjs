// Generates public/og-image.png (1200x630) from an inline SVG using sharp.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-image.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d0e14"/>
      <stop offset="1" stop-color="#08090c"/>
    </linearGradient>
    <linearGradient id="v" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffbf57"/>
      <stop offset="1" stop-color="#cf7d1c"/>
    </linearGradient>
    <linearGradient id="txt" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#c7c9d9"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="6%" r="60%">
      <stop offset="0" stop-color="#f0a02a" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#f0a02a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g transform="translate(80,80)">
    <rect width="78" height="78" rx="19" fill="url(#v)"/>
    <g fill="none" stroke="#fff" stroke-width="6.4" stroke-linecap="round" stroke-linejoin="round" transform="translate(15,15)">
      <path d="M8 24a16 16 0 0 1 27-11l4 4"/>
      <path d="M39 9v9h-9"/>
      <path d="M40 24a16 16 0 0 1-27 11l-4-4"/>
      <path d="M9 39v-9h9"/>
    </g>
    <text x="100" y="52" font-family="Inter, sans-serif" font-size="34" font-weight="600" fill="#fafafa">Convertra</text>
  </g>
  <text x="80" y="290" font-family="Inter, sans-serif" font-size="72" font-weight="700" fill="url(#txt)" letter-spacing="-3">Convertra AudioCore</text>
  <text x="80" y="360" font-family="Inter, sans-serif" font-size="34" font-weight="500" fill="#a3a4ab">On-device DSP for key, tempo &amp; Camelot detection</text>
  <g font-family="Inter, sans-serif">
    <text x="80" y="500" font-size="60" font-weight="700" fill="#ffbf57">~70%</text>
    <text x="80" y="540" font-size="24" fill="#a3a4ab">Exact Camelot</text>
    <text x="360" y="500" font-size="60" font-weight="700" fill="#8ed86a">~83%</text>
    <text x="360" y="540" font-size="24" fill="#a3a4ab">Harmonic match</text>
    <text x="640" y="500" font-size="60" font-weight="700" fill="#efa831">~82%</text>
    <text x="640" y="540" font-size="24" fill="#a3a4ab">BPM ±0.5</text>
    <text x="900" y="500" font-size="60" font-weight="700" fill="#fafafa">~1s</text>
    <text x="900" y="540" font-size="24" fill="#a3a4ab">Per track</text>
  </g>
  <text x="80" y="600" font-family="Inter, sans-serif" font-size="22" fill="#6e7079">Licensing · White-label · Partnership · Investment · Acquisition</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
