import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://SushilSingh333.github.io',
  base: '/astroRohini',
  integrations: [react(), markdoc(), keystatic()],
  output: 'static',
});
