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

### Formulari de contacte — ELIMINAT
El formulari i Formspree s'han tret del lloc (nov 2026). La secció Contacte ofereix només el
correu (`mailto:`), un botó «Escriu-nos →» i LinkedIn. No cal cap configuració externa.

### Dades legals
Les pàgines legals (avís legal + privacitat, ca/es/en) estan completes a 5 de novembre de 2026,
excepte aquests camps, que **s'han tret del tot** fins que es tinguin:

- [ ] **NIF** de l'associació: afegir-lo a la taula «Titular» de l'avís legal i a
      «Responsable» de la privacitat (tres idiomes).
- [ ] **Registre d'associacions** de la Generalitat: número i data d'inscripció, a l'avís legal.
- [ ] Transferències internacionals (GitHub i Google són dels EUA): valorar si cal esmentar-ne
      la garantia (Marc de privacitat de dades UE-EUA) a la privacitat.
- [ ] Treure el `noindex` (`src/layouts/Legal.astro`) quan hi hagi NIF i registre, i fer
      revisar els documents per algú amb criteri jurídic.

---

## 2. Dades a confirmar

- [ ] **Segment de terra.** Ara la web diu «estació òptica + estació RF (en definició)».
      Cal confirmar quina estació òptica s'utilitzarà i si l'estació RF serà al campus. La targeta Òrbita diu «El segment de
      terra està en definició» i el hero rotula «Estació de terra»; actualitzar-ho quan es concreti.
- [ ] **Nacionalitats.** La web mostra «+6 Nacionalitats» (abans «6 universitats»).
- [x] **UPC i EETAC.** No s'esmenten enlloc del lloc fins que hi hagi permís exprés.
- [ ] **Serveis.** Repassar que els sis serveis llistats es poden prestar de debò i amb
      quina capacitat. Falta decidir si s'hi posen terminis o rangs de preu.
- [ ] **Contrapartides de patrocini.** S'ha tret el text provisional de la web; quan es
      defineixin, recuperar-lo a `join.cols[2]` dels tres idiomes.

---

## 3. Revisió periòdica

- [ ] **Frase de «Per què importa»**: «La generació de clau segura des d'un CubeSat és
      encara un repte obert.» **QUBE-II (8U) es va llançar el maig de 2026 amb aquest
      objectiu.** Si publiquen resultats, cal revisar-la.
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

- [x] Tipografies autoallotjades amb `@fontsource` (nov 2026).
- [ ] Afegir una pàgina o secció d'actualitat quan hi hagi fites noves (training week).
