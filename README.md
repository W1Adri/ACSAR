# ACSAR — lloc web

Web pública de l'**Associació de Comunicacions Satel·litals Avançades i Resilients** i de la
seva missió **CLAU** (CubeSat Làser per a Aplicacions Ultrasegures).

Lloc estàtic fet amb [Astro](https://astro.build) i [Tailwind CSS](https://tailwindcss.com),
sense backend. Tres idiomes: català (per defecte), castellà i anglès.

---

## Executar en local

Cal Node 20 o superior (hi ha un `.nvmrc` amb la versió 24).

```bash
npm install          # només la primera vegada
npm run dev          # servidor de desenvolupament a http://localhost:4321
```

Altres ordres:

```bash
npm run build        # genera el lloc a dist/
npm run preview      # serveix dist/ per comprovar el resultat real
```

---

## Editar els textos

**Tot el contingut de la portada viu en tres fitxers JSON**, un per idioma:

```
src/i18n/ca.json     català   (idioma per defecte)
src/i18n/es.json     castellà
src/i18n/en.json     anglès
```

Els tres tenen exactament les mateixes claus. Si n'afegeixes una, afegeix-la als tres fitxers
o la pàgina fallarà en construir-se. Per comprovar-ho:

```bash
node -e "const f=l=>require('./src/i18n/'+l+'.json');const k=o=>{const r=[];(function w(v,p){v&&typeof v==='object'&&!Array.isArray(v)?Object.keys(v).forEach(x=>w(v[x],p?p+'.'+x:x)):r.push(p)})(o,'');return r.sort()};const [a,b,c]=['ca','es','en'].map(l=>k(f(l)));console.log(JSON.stringify(a)===JSON.stringify(b)&&JSON.stringify(a)===JSON.stringify(c)?'OK: les claus coincideixen':'ERROR: les claus NO coincideixen')"
```

Algunes claus accepten HTML (`h2`, amb `<br>` per partir els titulars). La resta és text pla.

**Les pàgines legals** són Markdown, una per idioma:

```
src/pages/avis-legal.md          src/pages/privacitat.md          (ca)
src/pages/es/aviso-legal.md      src/pages/es/privacidad.md       (es)
src/pages/en/legal-notice.md     src/pages/en/privacy.md          (en)
```

El text entre `cometes invertides` es pinta en daurat: és la convenció per marcar els buits
pendents (NIF, denominació legal, terminis…).

**Altres valors** (adreça de correu, endpoint del formulari, data del rellotge de missió)
són a `src/config.ts`.

### Formulari de contacte

El formulari està preparat per a [Formspree](https://formspree.io) i no necessita servidor.
Crea un formulari al seu panell i posa l'endpoint a `.env`:

```bash
cp .env.example .env
# edita .env:  PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

Mentre no hi sigui, el formulari mostra `[ENDPOINT_FORMSPREE]` com a destinació i no envia res.

---

## Estructura

```
src/
  components/      una secció de la portada per fitxer
  layouts/         Base (capçalera, peu, SEO), Home, Legal
  i18n/            traduccions + rutes equivalents de cada idioma
  pages/           rutes: / · /es/ · /en/ + pàgines legals + 404
  styles/global.css  tokens de disseny i estils propis
  config.ts        correu, endpoint del formulari, rellotge
public/            imatges, favicons, og.png, robots.txt, CNAME
deploy/            configuració d'exemple per a nginx
```

L'animació del hero (limbe terrestre, llums de ciutat, satèl·lit i enllaç òptic) es dibuixa
amb canvas 2D dins de `src/components/Hero.astro`. No hi ha cap imatge externa ni de tercers.

---

## Desplegament a GitHub Pages

El repositori ja porta el workflow `.github/workflows/deploy.yml`. Només cal fer-ho una vegada:

1. **Settings → Pages → Source: GitHub Actions.**
2. **Settings → Secrets and variables → Actions → Variables**: crea
   `PUBLIC_FORMSPREE_ENDPOINT` amb l'endpoint del formulari.
3. Fes push a `main`. El workflow construeix el lloc i el publica.

El domini `acsar.tech` surt de `public/CNAME`, que es copia a `dist/` en cada construcció.
A la configuració DNS del domini hi han d'apuntar els registres de GitHub Pages
(`185.199.108–111.153` per a l'arrel, i un CNAME `www` cap a `<usuari>.github.io`).

> Mentre Pages estigui servint des de la branca, el lloc antic (`index.html` i `assets/` a
> l'arrel) continua en línia. Un cop activades les Actions es poden esborrar, igual que la
> carpeta `preview/`, que només conté la maqueta de disseny prèvia.

---

## Desplegament en un servidor propi amb nginx

```bash
npm ci
npm run build                                   # genera dist/
rsync -av --delete dist/ usuari@servidor:/var/www/acsar/
```

Al servidor:

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/acsar
sudo ln -s /etc/nginx/sites-available/acsar /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d acsar.tech -d www.acsar.tech    # certificat TLS
```

`deploy/nginx.conf` ja porta redirecció a HTTPS, `try_files` per a les rutes amb carpeta,
caché immutable per a `/_astro/`, gzip i capçaleres de seguretat (inclosa una CSP que permet
Google Fonts i Formspree: cal actualitzar-la si s'afegeixen altres serveis).

---

## Accessibilitat i rendiment

- Contrastos per sobre d'AA (text 17,9:1; daurat 10,4:1 sobre el fons).
- Navegació completa per teclat, enllaç de salt al contingut i focus sempre visible.
- Tota l'animació es desactiva amb `prefers-reduced-motion`.
- Sense galetes ni analítica. L'única connexió externa és a Google Fonts; si es vol eliminar,
  cal autoallotjar les tipografies i actualitzar la política de privacitat.

---

## Pendent

Els buits de contingut estan marcats entre claudàtors al codi. Per llistar-los:

```bash
grep -rn "\[.*\]" src/i18n/*.json src/pages/*.md src/pages/*/*.md | grep -v "^.*\[\]"
grep -rn "TODO" src
```
