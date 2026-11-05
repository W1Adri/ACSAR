/**
 * Comprova que no queda cap text provisional entre claudàtors al HTML generat.
 * Les pàgines legals estan exemptes: els seus buits depenen del NIF, que encara no existeix.
 *
 *   npm run check:placeholders
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const EXEMPT = ['avis-legal', 'privacitat', 'aviso-legal', 'privacidad', 'legal-notice', 'privacy'];
// [algun text] però no [] ni els claudàtors de codi/JSON que puguin aparèixer en atributs
const PLACEHOLDER = /\[[^\]<>{}[\]]{3,}\]/g;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

/** Text visible: fora d'<script>, <style> i etiquetes. */
function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
}

let failures = 0;
for await (const file of walk(DIST)) {
  const route = relative(DIST, file).split(sep);
  if (route.some((part) => EXEMPT.includes(part))) continue;
  const hits = [...new Set(visibleText(await readFile(file, 'utf8')).match(PLACEHOLDER) ?? [])];
  if (hits.length) {
    failures += hits.length;
    console.error(`✗ ${relative(DIST, file)}`);
    for (const hit of hits) console.error(`    ${hit.trim()}`);
  }
}

if (failures) {
  console.error(`\n${failures} text(s) provisional(s) visible(s) al lloc públic.`);
  process.exit(1);
}
console.log('✓ Cap text provisional visible fora de les pàgines legals.');
