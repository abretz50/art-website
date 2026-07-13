# Content Needed From Arturo

Placeholder/mockup copy has been removed from the live pages. This tracks what's
still needed from Art to finish out each section for real.

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
- [x] A "composing" photo — `piano.jpg`, used in the homepage Creative Overview grid.
- [x] A "singing" / performing photo — opera scenes used on the homepage and the
      Vocal Demos page (`opera-1.jpg` through `opera-5.jpg`).
- [x] Bio page portrait — `torah.jpg` (Art holding the Torah), used on the Biography page.
- [x] Event/performance photos for Press Kit & Events — `kimmel-center.jpg` and
      `disney-hall.jpg`.
- [ ] Still no literal "writing/journaling" photo — the homepage's third Creative
      Overview tile ("Poet") currently uses a candid outdoor photo (`candid-outdoors-1.jpg`)
      as a stand-in. Swap in a real writing/journaling photo if Art has one.
- [ ] Cover art for *My Little Book of Spells, Prayers, and Thoughts* — still needed.
- [ ] Score excerpt images (or PDFs) for finished works, starting with *Disquieted Prayers*.

Unused spares still sitting in `assets/photos/` in case they're useful later:
`headshot-alt.jpg`, `headshot-casual.jpg`, `candid-outdoors-2.jpg`,
`church-choir-closeup.jpg`, `tallit-selfie.jpg`, `poa-banner.jpg` (used once on the
homepage already, but only the one placement).

## Music Catalog

- [ ] Any finished or in-progress works beyond *Disquieted Prayers*? Need title, year,
      instrumentation, duration, text source, and status for each.
- [ ] Perusal score and recording for *Disquieted Prayers* — when will these be ready to link?
- [ ] Purchase/licensing links for any works that are available now
- [ ] Anything for the Instrumental catalog or Full Works List (both are currently empty
      pending real entries)

## Vocal Demos & Composition Demos

Received 7 video files (~956MB total) — too large to commit to the git repo (4 of
the 7 exceed GitHub's 100MB per-file push limit), so the plan is to host them on
Art's YouTube channel and embed players. Page sections and placeholder video slots
are already built and waiting for real links:

- [ ] **Upload needed** — none of these appear to already be on the
      `@Peace_of_Art2024` channel (checked). Someone with channel access needs to
      upload all 7 and send back the resulting YouTube URLs:
      - Vocal Demos page (`voice/index.html`): "Losing My Mind.MOV", "Mi Chamocha.mov",
        "Art Tapia-Minchez Choral Vocal Demo.mp4"
      - Choral Catalog page (`catalog/choral/index.html`): "What Remains" for SAATBB
        Choir (CAI Performance).mov, "Birkat Shalom Youtube Video.mp4" +
        "Birkat Shalom KCVitas Premiere 2026.mp4" (same piece, two performances),
        "Cuando El Rey Nimrod KCVitas Premiere 2026.mp4"
- [ ] Once uploaded, each placeholder `.video-slot` div needs to be swapped for a
      `<iframe>` embed (see the `<!-- YouTube embed pending upload -->` comments in
      both files for exactly where).
- [ ] "What Remains" and "Birkat Shalom" / "Cuando El Rey Nimrod" look like they may
      be original compositions (unlike "Losing My Mind," a Sondheim song) — confirm
      year, instrumentation, duration, and text source for each so the catalog
      entries can be filled in properly instead of just title + video.

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

- [ ] What email address should contact form submissions go to?
- [ ] Any preference on how it's wired up (a form service like Formspree/Netlify Forms,
      vs. a plain `mailto:` link)? The form UI is in place but not yet connected — see the
      TODO comment in `contact/index.html`.

## General

- [ ] Confirm current bio details are still accurate (ensemble memberships, Judaism
      conversion status, school/program status, etc.) since some of this may change over time
- [ ] Any additional social/professional links to add beyond YouTube, Instagram,
      MusicSpoke, the Amazon book page, LinkedIn, and Facebook
