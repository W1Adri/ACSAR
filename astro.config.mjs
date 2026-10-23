// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://acsar.tech',
  // Canvia `base` si el lloc no es publica a l'arrel del domini (p. ex. '/ACSAR').
  // base: '/',
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'ca', locales: { ca: 'ca-ES', es: 'es-ES', en: 'en' } } })],
  build: { inlineStylesheets: 'auto' },
  vite: { plugins: [tailwindcss()] },
});
