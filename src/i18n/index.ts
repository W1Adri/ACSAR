import ca from './ca.json';
import es from './es.json';
import en from './en.json';

export const languages = { ca: 'CA', es: 'ES', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ca';

const dict = { ca, es, en } as const;

/** Textos d'una llengua. Tot el contingut viu a src/i18n/<lang>.json */
export function t(lang: Lang) {
  return dict[lang];
}

/** Rutes equivalents de cada pàgina en cada llengua (selector d'idioma + hreflang). */
export const routes = {
  home:    { ca: '/',            es: '/es/',             en: '/en/' },
  legal:   { ca: '/avis-legal/', es: '/es/aviso-legal/', en: '/en/legal-notice/' },
  privacy: { ca: '/privacitat/', es: '/es/privacidad/',  en: '/en/privacy/' },
} as const;

export type PageKey = keyof typeof routes;

/** Codi hreflang complet per a cada llengua. */
export const hreflang: Record<Lang, string> = { ca: 'ca-ES', es: 'es-ES', en: 'en' };
