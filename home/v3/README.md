# Home page — Design v3

**Client:** Jay Stud Farm (marwarihorses.in), Amritsar, Punjab
**Agency:** Web Spider Solutions
**Date:** 2026-11-02
**Status:** internal-review
**Theme:** Dark royal heritage. Deep brown and charcoal, gold accents (the v1 design).
**Fonts:** Poppins for headings, Inter for all other text. No other fonts are used.

## Why a v3

After seeing v1 and v2 side by side, the client chose the v1 design and asked for one change:
the hero heading and paragraph from v2 should be used in the v1 hero. v3 is an exact copy of v1
with only that change. See `docs/feedback-log.md` (2026-11-02).

## What changed from v1

- Hero heading: "Guardians of the Marwari Legacy" → "House of Finest **Marwari** Horses".
  Same type style as v1 (Poppins display, "Marwari" in gold italic), kept on two lines.
- Hero paragraph: replaced with the v2 copy, "Breeding Marwari horses of uncommon grace,
  strength and character. Home to more than eighty horses and a growing record of show-ring
  champions."
- Nothing else was touched. Header, stats strip, every section below the hero and all assets are
  identical to v1.

## How to open

Double-click `index.html`. No server or build step needed. Google Fonts load over the internet;
without a connection the page falls back to the system sans.

## What is in this version

Single home page, top to bottom:

1. Top bar with location, hours, phone and social icons
2. Sticky header: fully transparent over the hero, shrinks (84 px to 64 px) and turns solid dark once the page scrolls. Dropdowns on About and Marwari Horses. Under 1024 px a hamburger opens a left-side slide-in menu with gold icon badges, accordion groups with tree-style sub-links, a highlighted current page and an Enquire button pinned to the bottom. Top bar is hidden under 768 px.
3. Hero sized to exactly one viewport (stats strip included) on desktop, with the client's own banner video as background (`assets/video/banner-video.mp4`, 8.5 MB, taken from the live site), a still photo as poster and fallback, and a count-up stats strip (80+ horses, 75+ dogs, 50+ team, est. 2021)
4. About / Our Story with founder signature
5. Why the Marwari (4 editorial cards)
6. Horse categories mosaic (6 tiles)
7. Top Marwari Horses carousel (11 horses from the live site)
8. Legendary Mare Hina feature: layered photos, quick facts, record strip, medal-style show results
9. Our Winnings (3 cards)
10. Our Dogs, compact (4 breeds)
11. Contact details and visual-only enquiry form, with a full-width live Google Map of the farm underneath (standard Google styling, needs internet)
12. Footer and floating WhatsApp button

All copy is realistic and based on the live site. Contact details, address and social links are
the client's real ones. Links to other pages are placeholders (`#`) because those pages are not
designed yet.

## Images

All photos are the client's own, downloaded from marwarihorses.in on 2026-10-30, stored under
`assets/img/`. Nothing is stock.

Images the client should supply or confirm:

- **Hero video:** the live site's banner video is reused as-is. For production it should be
  re-encoded to a smaller web size (target under 3 MB, 1080p, no audio) and a WebM version added.
- **Hero poster:** the Laxmi photo (1600 px) shows before the video loads and under reduced-motion
  settings. A wider landscape shot would suit the poster better.
- **Watermarked photos:** some originals carry third-party photographer watermarks
  ("Indiandiscovery92", "manu sharma", a photographer logo). Confirm usage rights or supply clean
  versions: `categories/milk-teeth-colt.jpg`, `categories/milk-teeth-filly.webp`,
  `categories/two-teeth-colt.webp`, `horses/laxmi.jpg`, `categories/stallion.webp`.
- **Award strip:** the three award photos (540 px) are low resolution. Higher-resolution versions
  are needed for the Winnings cards.
- **Breed photos:** Cane Corso and Old English Mastiff tiles reuse generic puppy photos from the
  home page. Confirm which photo belongs to which breed.
- **Founder photo:** not used in v1/v3. If the client wants a founder portrait in the About section,
  the existing 300 px image is too small.

## Open questions for the client

1. **Email address.** The live site uses `ceo@global-opportunities.net`, which belongs to a
   different business. Should the new site use a jaystudfarm or marwarihorses.in address?
2. **Headline numbers.** Home page says 80+ horses and 75+ dogs; the About page says 55+ and 50+.
   Which is current?
3. **Availability badges.** The carousel shows "Available" and "Sold" tags as a design idea.
   Which horses are actually for sale, and should prices be shown?
4. **Horse details.** Bhim has no type on the live site. Confirm types and colours for each horse
   so the card metadata is accurate.
5. **Dogs weighting.** Dogs are secondary in this design per the brief. Confirm this is acceptable
   given puppy sales are a revenue line.
6. **Logo.** The current logo says "Est. 2020" while all copy says 2021. Which is correct?
7. **Spelling.** "Shephard" on the live site has been corrected to "Shepherd" throughout.

## Checked

- Opens from disk with no console errors (Chromium, 2026-11-02). Hero video autoplays muted.
- New heading and paragraph checked at 1440, 768 and 390 px: two-line heading holds at every
  width, hero plus stats still fit one screen on desktop.
- Screenshots in `screenshots/` (full page and hero at desktop, tablet and mobile), retaken for v3.
- Keyboard navigation and visible focus rings on all controls.
- Respects `prefers-reduced-motion`.

## Not included

Other pages, working form, SEO, deployment.
