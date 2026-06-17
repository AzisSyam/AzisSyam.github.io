import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://AzisSyam.github.io',
  base: '/',
  integrations: [tailwind()],
});
