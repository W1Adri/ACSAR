# CLAUDE.md — context del projecte

Web pública d'ACSAR i de la missió CLAU. Llegeix això abans de tocar contingut.

## Què és això

- **ACSAR** — Associació de Comunicacions Satel·litals Avançades i Resilients. Associació
  d'estudiants amb seu a l'espai D7-010, edifici D7, Campus del Baix Llobregat
  (Castelldefels). Una cinquantena de persones, comunitat internacional. Funciona també com a
  **empresa júnior**: pot oferir serveis d'enginyeria a empreses.
- **CLAU** — CubeSat Làser per a Aplicacions Ultrasegures. CubeSat 6U amb un canal òptic
  quàntic per a distribució quàntica de claus (QKD, protocol BB84) i un enllaç clàssic per
  radiofreqüència.
- **Estat públic**: preseleccionat per a la Training Week del Design Booster 3 del programa
  Fly Your Satellite! de l'ESA (ESTEC, Noordwijk, 16–20 nov 2026). Decisió final de selecció
  el desembre de 2026.
- **Full de ruta**: experiments de laboratori fins al febrer de 2027 → experiments en espai
  lliure fins a mitjans de 2027 → disseny detallat del satèl·lit des d'inicis de 2027 → el
  Design Booster acaba el juny de 2028.
- **Equip de la missió**: més de 20 estudiants de diverses universitats europees, organitzats
  en 7 subsistemes (EPS, ADCS, OBC, RF, estructura, segment de terra, càrrega útil), amb
  enginyeria concurrent (COMET, de l'ESA) i sprints àgils.
- **Contacte**: acsarteam@gmail.com

## Regles de contingut (obligatòries)

1. **La càrrega útil és confidencial.** El canal quàntic es descriu només a alt nivell. Mai:
   components, proveïdors, esquemes òptics, longituds d'ona, obertures, PIC ni diagrames
   interns.
2. **No llistar partners ni col·laboradors**, no hi ha res signat. **Cap logo de tercers**
   (ESA, UPC, EETAC…).
3. **UPC i EETAC**: usar-ne el nom o el logo requereix permís exprés. Allà on calgui
   esmentar-les, deixa un comentari `TODO` i el text entre claudàtors
   `[pendent de permís]`. Actualment això afecta `about.p1` als tres fitxers d'idioma.
4. **No inventis xifres, noms de persones ni testimonis.** Si falta un dada, posa-hi
   `[què hi va]` entre claudàtors.

## Afirmacions prohibides (són falses o no defensables)

- ❌ «primer CubeSat 6U amb BB84 amb estats esquer» — ho és ROKS.
- ❌ «primer satèl·lit quàntic espanyol» — Lur-1 ja és en òrbita; QKD-GEO/Caramuel i QKD-LEO
  són programes industrials.
- ❌ «no hi ha cap CubeSat quàntic funcionant a Europa» — QUBE-I opera.

## Posicionament permès

- ✅ Primer CubeSat de QKD **liderat per una associació universitària** a l'Estat espanyol.
- ✅ Objectiu obert del sector: **cap CubeSat ha demostrat encara generació de clau segura en
  òrbita**.
- ✅ El **6U com a classe mínima viable** per a aquesta càrrega útil.
- ✅ **Alineat amb l'EuroQCI**, la infraestructura europea de comunicació quàntica.

## Disseny

Estètica futurista i sòbria (referències: Starlink, Vast, K2 Space, Open Cosmos). Fons
blau-negre, text blanc, molt espai negatiu, titulars grans en majúscules amb tracking ampli,
línies fines, rebles tècnics subtils.

- Paleta: `--color-ground #05080F`, `--color-accent #E9B44C` (or de la clau de l'emblema
  CLAU), `--color-ember #FF5A2B` (fènix d'ACSAR, molt puntual), blau acer per a les línies.
  **L'or apareix en una sola cosa per pantalla.**
- Tipografia: Space Grotesk (titulars), Barlow (cos), IBM Plex Mono (dades i etiquetes).
- El hero es dibuixa amb canvas 2D: limbe terrestre nocturn, llums de ciutat agrupades,
  satèl·lit i enllaç òptic cap a l'estació de terra. **Cap imatge d'estoc ni de tercers.**
- Tota animació respecta `prefers-reduced-motion`.
- No hi ha fotografies: l'associació encara no en té d'utilitzables. Quan n'hi hagi, el lloc
  guanyarà molt amb bandes fotogràfiques a sang (equip al laboratori, maquinari, banc òptic).

## Tècnica

Astro + Tailwind CSS, estàtic, sense backend. Contingut a `src/i18n/*.json` (tres idiomes amb
les mateixes claus). Pàgines legals en Markdown. Formulari preparat per a Formspree via
`PUBLIC_FORMSPREE_ENDPOINT`. Vegeu `README.md` per a executar, editar i desplegar.

## Buits oberts

- `[N]` nacionalitats (`about.stats`).
- `[vinculació universitària pendent de permís]` (`about.p1`).
- `[paràmetres orbitals per confirmar]` (`mission.cards`).
- `[per definir]` contrapartides de patrocini (`join.cols`).
- `[ENDPOINT_FORMSPREE]` fins que es creï el formulari.
- Les pàgines legals tenen buits per a denominació legal, NIF, registre, allotjament,
  terminis i fur. **Necessiten revisió jurídica abans de publicar-se.**
