/** Configuració global del lloc. Edita aquests valors, no els components. */

/** ID del formulari de Formspree (la part final de https://formspree.io/f/XXXXXXXX).
 *  Posa'l a .env com a PUBLIC_FORMSPREE_ID; sense ID el formulari mostra
 *  l'alternativa per correu electrònic en comptes d'enviar. */
export const FORMSPREE_ID: string = import.meta.env.PUBLIC_FORMSPREE_ID ?? '';
export const FORMSPREE_ACTION = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : '';

export const EMAIL = 'acsarteam@gmail.com';

/** Data d'inici de la setmana de formació a l'ESTEC: alimenta el rellotge del menú. */
export const MISSION_CLOCK_TARGET = '2026-11-16T09:00:00Z';
export const MISSION_CLOCK_TAG = 'FYS! DB3';
