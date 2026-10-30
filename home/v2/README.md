# Home page — Design v2

**Client:** Jay Stud Farm (marwarihorses.in), Amritsar, Punjab
**Agency:** Web Spider Solutions
**Date:** 2026-10-30
**Status:** draft (not yet sent to client)
**Why a v2:** The client reviewed v1 and said it did not look premium, and supplied
https://coolmore.com/en/ireland/ as the design pattern to follow. See `docs/feedback-log.md`.

## Direction

Follows the Coolmore home page pattern, adapted to Jay Stud Farm's content and brand:

- **Canvas:** premium black. Coolmore's navy is replaced with a warm near-black family (#070708 to #151517), every section on its own shade so the page reads as layered bands. White text, muted tan accent for labels and the primary button. The client asked for black instead of dark blue on 2026-10-30.
- **Type:** Poppins Light for oversized display names and statements (Coolmore uses a serif; the client's font rule is Poppins and Inter only). Inter for body and tracked small-caps labels.
- **Shapes:** pill buttons (tan solid for primary, outlined for secondary), circular prev/next controls with "1 / 6" counters, 1px hairlines. No cards, gradients on text, badges or glows.
- **Header:** minimal, as on the reference. "MENU" hamburger plus location on the left, pill "Enquire" on the right, crest appears centred once the page scrolls. The menu is a left-side panel with numbered items, accordion groups and a pinned Enquire button.

## Sections, top to bottom

1. Full-viewport hero on the client's banner video under a deep black overlay with vignette and slow zoom: tracked "Amritsar · Punjab · Est. 2021" label, centred crest, italic tagline "House of Finest Marwari Horses", tan rule, short paragraph, tan "Explore Horses" and outlined "Plan a Visit" pills. Bottom strip carries a scroll cue, three quick facts and the sound and pause circles.
2. **Our Horses**: label, heading and "View all Horses" pill. Large portrait left inside an offset tan frame with a vertical caption. Right: ghosted index number, oversized horse name, meta, description, a three-column facts strip (type, colour, status), profile pill, then a prev/next row with counter and tan progress bar, and six clickable mini-portraits. Six horses cycle. Below a hairline, six square category tiles with a tan arrow on hover.
3. **About Us**: label, light statement with a tan-highlighted phrase, paragraph, three numbered pillars on hairlines (bloodlines, care, show-ring discipline), founder signature line with "Learn More" pill and "Our History" link. Right: photo inside an offset tan frame with an "Est. 2021" marker, vertical caption and a small offset team photo.
4. **The Farm Film**: 16:9 block showing a still of Sind Baad with a play circle. Clicking plays the client's full farm film in place with sound and no native controls; a thin tan progress line runs along the bottom, clicking again pauses (`assets/video/farm-film.mp4`, 1.4 MB, downloaded from the live site). When it ends the still returns.
5. **In Numbers**: label, heading and intro line, then a six-cell hairline grid (80+ horses, 75+ dogs, 50+ team, 3 first places for Hina, 6 podium finishes, est. 2021). Each cell has an index, oversized count-up figure, tan rule, label and one-line note; a tan line sweeps across the top on hover. Faint "JSF" ghost wordmark behind.
6. **Honours** quote carousel: Hina's record, the Ludhiana GSD wins, and the founder's quote, with counter.
7. **Latest News & Winnings**: three hairline-divided rows of thumbnail, date, title and excerpt.
8. **Also at Jay Stud Farm**: four dog breed portraits with captions and a "View all Dogs" pill.
9. **Keep in Touch**: Hina portrait in an offset tan frame with a caption; heading, copy, three hairline contact routes (WhatsApp, call, visit) with arrows, "Make an Enquiry" pill and a "replies within a day" note.
10. **Visit**: address, phone, email and hours with small-caps labels, WhatsApp and Get Directions pills. The live Google Map on the right is sticky, so it stays in view while the details scroll.
11. Footer: location column, Horses / About Us / Resources link columns, crest and social, legal bar.

The enquiry form from v1 is dropped in favour of WhatsApp and the enquiry CTAs, matching the reference's lighter home page. It can return on the Contact page.

## Images and video

Same client assets as v1, copied into this folder so v2 is self-contained. Same caveats: five photos carry third-party photographer watermarks, award photos are low resolution, and the hero video should be re-encoded for production. New in v2: the "Our Horses" slider uses six full-size horse photos at 4:5, so portrait-oriented originals would improve it.

## Open questions for the client

Unchanged from v1: email domain, horse and dog counts, which horses are for sale, horse types and colours, logo "Est. 2020" vs copy "2021".

New: confirm the six horses to feature in the slider and a sentence for each.

## Checked

- Opens from disk with no console errors (Chrome). Hero video autoplays muted. Sliders and counters work.
- Layout verified at 1440, 768 and 390 px. Screenshots in `screenshots/`.
