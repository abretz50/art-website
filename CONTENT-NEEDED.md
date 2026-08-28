# Content Needed From Arturo

Placeholder/mockup copy has been removed from the live pages. This tracks what's
still needed from Art to finish out each section for real.

## 8/27/26 homepage pass

- [ ] The YouTube, Instagram, MusicSpoke, LinkedIn, and Facebook icons on the
      homepage are hand-drawn generic glyphs (play button, camera, music note, "in"
      badge, "f" circle) built in plain SVG — not the official brand logos, since
      those aren't on hand. If official logo files are ever provided, they're a
      straightforward swap in `index.html`'s "Important Links" section.
- [x] Clean URLs fixed sitewide — the Home link no longer resolves to
      `.../index.html`; it now points at the folder root everywhere. Also added a
      small script (`scripts/includes.js`) that rewrites the visible URL if a page
      is ever reached directly via a `/index.html` link (bookmark, typed URL,
      shared link) — it still loads that file, but the address bar cleans up to
      the folder path right after.

## 8/27/26 redesign pass

Converted the site to a dark brown/near-black theme (matching the welcome video's
palette) with light-brown/cream text, added hero background photos to most inner
pages, removed the repeated "Composer Website" eyebrow and the "Browse the Music" /
"Contact" hero buttons from every inner page (Contact now lives in the shared
footer instead), and rewrote copy on the Press Kit, Contact, Poetry (all 3 pages),
Vocal Demos, Artist CV, and Biography pages per direct feedback. Poetry's "Intro to
My Poetry" page is now "My Poetry" — an overview hub linking into Poetry Demos and
Little Book of Spells, which remain their own pages in the nav.

## Received

- [x] Welcome/preshow video (`assets/video/welcome.mp4`, ~37s, with poster
      `welcome-cover.jpg`) — now plays as a skippable intro overlay on the homepage.
- [ ] The delivery also included a raw WAV audio stem (`assets/video/welcome.wav`).
      The MP4 already has its own synced audio track, so the WAV isn't used anywhere
      on the site yet — check with Art whether it has another intended use (e.g. a
      standalone ambient audio player) or if it can be dropped.

## Photos

Received a batch of 21 photos (headshots, opera/performance shots, choir photos,
synagogue/Torah photos, and "Peace of Art" brand assets) and placed them across the
site — see `assets/photos/`:

- [x] Professional headshot — `headshot.jpg`, used on the homepage Overview card.
      The PoA logo was also set as the site favicon (`favicon.ico`).
- [x] A "composing" photo — now `piano-composing-color.jpg` (a proper studio/concert-hall
      shot, replacing the old blurry phone photo `piano.jpg`), used in the homepage
      Creative Overview grid.
- [x] A "singing" / performing photo — opera scenes used on the homepage and the
      Vocal Demos page (`opera-1.jpg` through `opera-5.jpg`).
- [x] Bio page portrait — `torah.jpg` (Art holding the Torah), used on the Biography page.
- [x] Event/performance photos for Press Kit & Events — `kimmel-center.jpg` and
      `disney-hall.jpg`.
- [x] Literal "writing/journaling" photo received (batch from 8/11/26 shoot) — the
      homepage's third Creative Overview tile ("Poet") now uses `poet-journal-writing.jpg`
      (Art actively writing in a leather journal outdoors), replacing the old
      `candid-outdoors-1.jpg` stand-in. A second journal shot, `poetry-journal-thoughtful.jpg`,
      was also added as the hero image on the Poetry intro page (which had no photo before).
- [x] Cover art for *My Little Book of Spells, Prayers, and Thoughts* — sourced
      directly from the Amazon listing already linked on the site and saved as
      `book-cover-little-book.jpg`. Now used on the homepage's "Poetry Book" card
      and as the lead image on the Little Book page.
- [ ] Score excerpt images (or PDFs) for finished works, starting with *Disquieted Prayers*.
      **Note:** the 8/11/26 batch includes close-up manuscript photos (`manuscript-score-1.jpg`,
      `manuscript-score-rose-1.jpg`, `manuscript-score-rose-2.jpg`) but the visible title is
      "Rose" (setting the "Es ist ein Ros entsprungen" chorale melody with English text) —
      this does not match *Disquieted Prayers* (a Psalm 146 setting for soprano/SATB/piano
      per the catalog page). Left unused pending confirmation from Art on what piece this is
      and whether/where it should be credited.

### New photos received (8/11/26 shoot) — awaiting Art's picks

A full professional photoshoot batch (42 photos) was dropped in and is now sitting in
`assets/photos/` with descriptive filenames, but only a few were wired into pages (see
above) since the rest are near-duplicate options that come down to Art's taste rather than
an obvious content gap:

- **Studio headshots** — `headshot-studio-1.jpg` through `-4.jpg` (colorful geometric
  backdrop) and `headshot-studio-plain-1.jpg` / `-plain-2.jpg` (plain gray wall). All are
  higher-resolution than the current `headshot.jpg`. Worth asking Art if he wants to swap
  the primary homepage headshot for one of these.
- **Piano / composing** — `piano-composing-color.jpg` (homepage), `piano-dramatic-lowangle.jpg`
  (Instrumental Catalog), `piano-practice-portrait-1.jpg` (Artist CV), and
  `piano-practice-portrait-2.jpg` + `piano-candid-laughing-1.jpg` (Vocal Demos gallery)
  are now in use. Still unused: `piano-bw-1.jpg`, `piano-bw-closeup.jpg`,
  `piano-bw-lowangle.jpg`, `piano-motion-blur-bw.jpg`, `piano-composing-candid-1.jpg`,
  `piano-candid-laughing-2.jpg`, `piano-practice-candid-1.jpg`, `piano-practice-portrait-3.jpg`
  — alternates if a different mood/page wants another piano photo.
- **Window-seat / contemplative series** — `window-seat-side-1.jpg`, `-full-1.jpg`,
  `-writing-1.jpg`, `-contemplative-1.jpg`, `-writing-2.jpg`. Still unused.
- **Outdoor reading/writing series** — now used: `reading-park-bench-1.jpg` / `-2.jpg`,
  `reading-binder-outdoors-2.jpg` (Poetry Demos gallery), `journal-writing-rock-2.jpg`
  and `reading-stone-wall.jpg` (Little Book page), plus the two used earlier
  (`poet-journal-writing.jpg`, `poetry-journal-thoughtful.jpg`). Still unused:
  `reading-bench-1.jpg` / `-2.jpg`, `reading-binder-outdoors-1.jpg` / `-3.jpg`,
  `journal-writing-rock-1.jpg` / `-3.jpg`, `candid-portrait-water.jpg` — candidates for
  the Biography page or wherever else needs filling out later.

Unused spares still sitting in `assets/photos/` in case they're useful later:
`headshot-alt.jpg`, `headshot-casual.jpg`, `candid-outdoors-1.jpg`, `candid-outdoors-2.jpg`,
`church-choir-closeup.jpg`, `tallit-selfie.jpg`, `poa-banner.jpg` (used once on the
homepage already, but only the one placement), `piano.jpg` (superseded, kept for reference),
and the full list of unused photos from the 8/11/26 batch noted above.

### New brand assets found in the 8/27/26 Drive export — needs Art's decision

The same export (`Arts Website 2.0-20260827T220443Z-1-001\...\Photos-Headshots\Logos
and Banners\`) included what looks like a second, hand-drawn logo pass — a different
style from the typographic "PoA" monogram currently used as the site favicon and on
`poa-banner.jpg`. Copied in but **not** swapped into any live page since changing the
site's brand mark is Art's call, not a content-gap fix:

- [ ] `poa-logo-alt-1.jpg` / `poa-logo-alt-2.jpg` — hand-drawn sunflower/lotus mark
      with "PEACE of ART" lettered inside, two near-identical variants.
- [ ] `poa-banner-alt.jpg` — a softer banner design (pale cloud background, the
      hand-drawn logo above, Art's signature, and a row of symbols: treble clef,
      menorah, peace sign, and two others) — quite different in tone from the current
      bold-text `poa-banner.jpg`.
- [ ] `headshot-suspenders.jpg` (from "Suspenders Headshot.JPG" in the same export's
      "Older Photos" folder) — a casual selfie, different from the current
      professional `headshot.jpg` and from the existing `headshot-alt.jpg` /
      `headshot-casual.jpg` spares.

Ask Art whether any of these should replace the current logo/banner/headshot, or if
they're outtakes.

### Not imported (redundant with the edited photos already in use)

The Drive export also included the full unedited source material behind the 8/11/26
shoot — 40 straight-from-camera JPGs (`Photos to edit from Aug 11`, several ~9-11MB
each) and the corresponding Sony `.ARW` raw camera files (`ARW Files` folders across
the export). These are the pre-retouch originals of the same shots already imported
as the finished `ATM*` → descriptive-name JPGs, so they weren't copied in — flagging
their existence in case a different crop/edit is ever wanted straight from the
originals (they're still sitting in the Downloads export, not in this repo).

## Music Catalog

- [ ] Any finished or in-progress works beyond *Disquieted Prayers*? Need title, year,
      instrumentation, duration, text source, and status for each.
- [ ] Perusal score and recording for *Disquieted Prayers* — when will these be ready to link?
- [ ] Purchase/licensing links for any works that are available now
- [ ] Anything for the Instrumental catalog or Full Works List (both are currently empty
      pending real entries)

## Vocal Demos & Composition Demos

All 7 videos previously listed as "need to be found/uploaded" turned up in the
8/27/26 Google Drive export (`Arts Website 2.0-...` folders) and have now been
located. 3 were small enough to self-host directly in the repo (following the
precedent already set by `welcome.mp4` at 46.8MB) and are now playing live on the
site with no YouTube dependency:

- [x] `voice/index.html` — "Choral Vocal Demo" card now plays
      `assets/video/choral-vocal-demo.mp4` (70.7MB, source: "Art Tapia-Minchez
      Choral Vocal Demo.mp4").
- [x] `catalog/choral/index.html` — "Birkat Shalom" card now plays
      `assets/video/birkat-shalom-kcvitas-2026.mp4` (5.3MB, the KCVitas Premiere 2026
      performance).
- [x] `catalog/choral/index.html` — "Cuando El Rey Nimrod" card now plays
      `assets/video/cuando-el-rey-nimrod-kcvitas-2026.mp4` (6.3MB, KCVitas Premiere 2026).
- [x] `catalog/choral/index.html` — "What Remains" card now plays
      `assets/video/what-remains-cai-performance.mov` (98.7MB, CAI performance
      recording). This one's right at the edge of what's reasonable to self-host —
      see note below.

**Why not self-host all of them on GitHub?** (asked directly — answering here so
it doesn't get re-litigated): GitHub hard-blocks any single pushed file over
100MB without Git LFS. "Losing My Mind" (382MB), "Mi Chamocha" (234MB), and
"Birkat Shalom Youtube Video" (116.6MB) all exceed that outright — they cannot be
pushed as plain git blobs, full stop. "What Remains" (98.7MB, embedded above) is
just under the hard limit but well past GitHub's *recommended* 50MB — the 70.7MB
choral vocal demo already triggered a size warning on push — and this site has no
CDN behind it, so a ~100MB video served directly means a slow load for visitors.
Git LFS was considered as the "make it all self-hosted" option, but it comes with
its own storage/bandwidth quota (1GB/month free, then a paid data pack) once these
file sizes are in play — real ongoing cost/maintenance for no benefit over YouTube,
which is free, made for exactly this, and already the established plan. Net: self-
host stayed reserved for anything that comfortably clears the 100MB hard limit;
everything else is still headed to YouTube.

Still pending YouTube upload — exact source locations, for whoever has
`@Peace_of_Art2024` channel access:
- [ ] **Vocal Demos page** — "Losing My Mind" (382MB) and "Mi Chamocha" (234MB), both
      in `Arts Website 2.0-20260827T220443Z-1-004\...\Vocal Demos\`.
- [ ] **Choral Catalog page** — "Birkat Shalom Youtube Video.mp4" (116.6MB, a second
      recording of the piece already partly represented by the KCVitas clip above),
      in `Arts Website 2.0-20260827T220443Z-1-001\...\Score Demos (Videos, Midi,
      Recordings)\Live Recordings\`.
- [ ] Once uploaded, swap the relevant `<video>` tag for a YouTube `<iframe>` embed
      (the `.video-slot` container CSS already supports either).
- [ ] "What Remains" and "Birkat Shalom" / "Cuando El Rey Nimrod" look like they may
      be original compositions (unlike "Losing My Mind," a Sondheim song) — confirm
      year, instrumentation, duration, and text source for each so the catalog
      entries can be filled in properly instead of just title + video.

**Bonus, unused:** the same export also included a MIDI mockup recording,
"Birkat Shalom" for Acapella Choir (Midi Demo).mov (78.2MB, in the same "Score
Demos" folder under "Midi Recordings"), and a very large separate file directly in
the Downloads folder, `2026-03-07 Choir Concert -HD 1080p-002.mov` (2.68GB) — likely
full/raw footage from the concert the KCVitas Premiere clips came from. Neither was
used; ask Art whether the MIDI demo should be added anywhere, and what the full
concert video is for (it's too large to be a website asset as-is).

## Artist CV

- [ ] Does Art have an existing CV/resume to upload as a PDF, or should we build a
      formatted timeline from his performance history (roles, ensembles, dates)?

## Poetry

- [ ] A short poetry statement — voice, themes, and influences — for the Poetry intro page
- [ ] Which lines/excerpts to feature as "Selected lines"
- [ ] Any recordings (audio or video) of poetry readings for the Poetry Demos page
- [ ] Excerpts from *My Little Book of Spells, Prayers, and Thoughts* to feature on its page

## Press Kit & Events

- [ ] Any upcoming performances or events to list
- [ ] An approved short/long press bio and any existing press coverage links
- [ ] Any additional interview/spotlight content beyond the current Shabbat Spotlight quotes

## Contact Form

- [x] Wired to `arttapiaminchez.composer@gmail.com`. On submit, JS in
      `scripts/includes.js` builds a `mailto:` link from the form fields (name,
      email, inquiry type, subject, message) and opens it — this requires the
      visitor to have a mail client configured, which is the standard limitation
      of a `mailto:`-based form on a static site with no backend. If real inbox-style
      submissions (no mail client popup) are wanted instead, Art would need to sign
      up for a free form service himself (e.g. Formspree or Netlify Forms — account
      creation isn't something that can be done on his behalf) and send over the
      resulting form endpoint URL to swap in.

## General

- [ ] Confirm current bio details are still accurate (ensemble memberships, Judaism
      conversion status, school/program status, etc.) since some of this may change over time
- [ ] Any additional social/professional links to add beyond YouTube, Instagram,
      MusicSpoke, the Amazon book page, LinkedIn, and Facebook
