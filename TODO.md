# TODO — acsar.tech

Tot el que falta per tancar la web. Ordenat pel que bloqueja més.

---

## 1. Bloquejat: ens falten fitxers o dades vostres

### Logos en vector (BLOQUEJAT)
La tasca demanava copiar `brand/acsar-icon.svg`, `brand/acsar-logo.svg` i `brand/clau-logo.svg`.
**Aquests fitxers no són al repositori ni enlloc del sistema.** Només hi ha
`~/Descargas/acsar_simpleLogo.jpeg`, que sembla l'emblema nou amb anell però és un JPEG
amb fons blanc i no inclou ni la icona sola ni la insígnia CLAU.

Mentre no hi siguin, es mantenen els assets actuals:

| On | Què hi ha ara | Què hi ha d'anar |
|---|---|---|
| Capçalera | rombe daurat (CSS) | `acsar-icon.svg`, 28–32 px |
| Peu | `public/img/acsar-phoenix.png` | `acsar-logo.svg`, ~56 px |
| Missió CLAU | `public/img/clau-patch.png` | `clau-logo.svg` |
| Favicon svg/ico + apple-touch-icon | generats del rombe | generats d'`acsar-icon.svg` |
| `public/img/og.png` | usa `clau-patch.png` (emblema antic) | regenerar amb el logo nou |

**Acció:** deixar els tres SVG a `brand/` del repositori i avisar.

### Formulari de contacte
- [ ] Crear el formulari a <https://formspree.io> i copiar l'ID de l'endpoint.
- [ ] Posar-lo a `.env` com a `PUBLIC_FORMSPREE_ID` per a local.
- [ ] Posar-lo a GitHub: *Settings → Secrets and variables → Actions → Variables →
      `PUBLIC_FORMSPREE_ID`*.

Sense ID el formulari no envia: mostra l'avís amb l'adreça de correu com a alternativa.
Tota la resta (enviament sense recarregar, estats, honeypot, assumpte) ja funciona.

### Dades legals
Les pàgines legals porten `noindex` mentre tinguin buits. Buits actuals:

| Fitxer | Buit |
|---|---|
| avís legal + privacitat (ca/es/en) | denominació legal completa de l'associació |
| avís legal + privacitat (ca/es/en) | NIF |
| avís legal (ca/es/en) | registre d'associacions: número i data d'inscripció |
| avís legal + privacitat (ca/es/en) | proveïdor d'allotjament |
| avís legal (ca/es/en) | localitat del fur |
| avís legal (ca/es/en) | llicència dels continguts, si se n'adopta una |
| privacitat (ca/es/en) | delegat de protecció de dades (o constatar que no n'hi ha) |
| privacitat (ca/es/en) | registres d'accés del proveïdor: si en guarda i quant |
| privacitat (ca/es/en) | termini de conservació de les dades del formulari |
| privacitat (ca/es/en) | base de la transferència internacional de Formspree |
| privacitat (ca/es/en) | proveïdor de correu electrònic |
| totes | data de l'última actualització |

- [ ] Omplir-ho tot i **fer revisar els dos documents per algú amb criteri jurídic**.
- [ ] Treure el `noindex` (`src/layouts/Legal.astro`) quan estiguin tancats.

---

## 2. Dades a confirmar

- [ ] **Segment de terra.** Ara la web diu «estació òptica + estació RF (en definició)» i
      l'etiqueta del hero és «ACSAR · Castelldefels». Cal confirmar quina estació òptica
      s'utilitzarà i si l'estació RF serà al campus, i actualitzar la targeta Òrbita.
- [ ] **Universitats.** La xifra «6 universitats» ve de la vostra indicació; confirmeu-la
      abans que sigui pública gaire temps.
- [ ] **Serveis.** Repassar que els sis serveis llistats es poden prestar de debò i amb
      quina capacitat. Falta decidir si s'hi posen terminis o rangs de preu.
- [ ] **Contrapartides de patrocini.** S'ha tret el text provisional de la web; quan es
      defineixin, recuperar-lo a `join.cols[2]` dels tres idiomes.

---

## 3. Revisió periòdica

- [ ] **Frase de «Per què importa»**: «A octubre de 2026, cap CubeSat ha demostrat
      públicament la generació de clau segura en òrbita.»
      **QUBE-II (8U) es va llançar el maig de 2026 amb aquest objectiu.** Si publiquen
      resultats, la frase deixa de ser certa i cal canviar-la, igual que la data.
      *Revisar cada trimestre, i abans de qualsevol nota de premsa.*

---

## 4. Quan hi hagi fotografies

No n'hi ha cap d'utilitzable. Quan es puguin fer:

- [ ] Equip treballant al D7-010, horitzontal, llum lateral, sense posats.
- [ ] Banc òptic o maquinari en primer pla.
- [ ] Foto de grup per a «Qui som».

El CSS de les bandes fotogràfiques a sang es va retirar; es recupera de l'historial de git
(commit de la maqueta `preview/`).

---

## 5. Millores tècniques pendents

- [ ] Autoallotjar les tipografies si es vol eliminar la connexió a Google Fonts (ara està
      declarada a la política de privacitat).
- [ ] Afegir una pàgina o secció d'actualitat quan hi hagi fites noves (training week).
