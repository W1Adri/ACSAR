/** Configuració global del lloc. Edita aquests valors, no els components. */

/** Endpoint del formulari de contacte (Formspree).
 *  Posa'l a .env com a PUBLIC_FORMSPREE_ENDPOINT per no tocar el codi. */
export const FORMSPREE_ENDPOINT =
  import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? '[ENDPOINT_FORMSPREE]';

export const EMAIL = 'acsarteam@gmail.com';

/** Data d'inici de la setmana de formació a l'ESTEC: alimenta el rellotge del menú. */
export const MISSION_CLOCK_TARGET = '2026-11-16T09:00:00Z';
export const MISSION_CLOCK_TAG = 'FYS! DB3';
