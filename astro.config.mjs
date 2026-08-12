import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public site URL. Override at deploy time with a custom domain if desired.
const SITE = process.env.SITE_URL || 'https://convertra.pages.dev';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  compressHTML: true,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
