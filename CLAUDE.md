# CLAUDE.md — Marwari Horses Website Design Mockups

## Purpose

This repo holds **visual design mockups** for the Marwari Horses website. The goal is to
produce page designs that the client can open in a browser, review, and approve before
any production build begins. Nothing here is production code.

Agency: Web Spider Solutions (info@webspidersolutions.com)
Client: Marwari Horses (details in `docs/client-brief.md` once received)

The deliverable at every stage is **something the client can look at**, not something
a developer can deploy. Optimize for visual fidelity, fast iteration, and easy review.

## What this project is NOT

- Not a Next.js / React / framework app. Do not scaffold one.
- No build step, no bundler, no package manager unless explicitly asked.
- No backend, auth, database, CMS, or real forms. Forms are visual only.
- No SEO work, analytics, or deployment pipelines. Those belong to the production phase.
- Do not install Vercel, npm packages, or create `package.json` without being asked.

## Tech approach

Mockups are **static HTML + CSS**, one self-contained file per page, viewable by
double-clicking the file or via the review index. Rationale: the client needs zero
tooling to open them, and revisions are fast.

- Plain HTML5 + one `assets/css/styles.css` per version folder holding the design system
  (tokens, type, components) and page styles.
- Fonts: **Poppins for headings, Inter for everything else.** No third font, ever. Load both from
  Google Fonts via `<link>`. A Google Maps `<iframe>` embed is allowed for the contact map
  (farm pin: https://maps.app.goo.gl/YDshWHbJhmQ6qsRx9). No other external scripts or stylesheets.
- Minimal vanilla JS only for things the client must see to understand the design
  (mobile nav toggle, hero slider, gallery lightbox, tabs). No frameworks.
- Video: the client's own hero/banner video may be used as a background (muted, looped,
  with a poster image fallback). Store it in `<page>/vN/assets/video/`.
- Images: use real client-supplied photos from `assets/img/` when available. Until then,
  use clearly labelled placeholders (solid blocks with a caption such as
  "Stallion photo – client to supply"). Never use random stock images that imply a
  specific horse or person belongs to the client.
- Every page must render correctly at desktop (1440), tablet (768) and mobile (390)
  widths. The client will open these on a phone.

## Folder layout

Each page gets its own folder, and each design version of that page is a **fully self-contained
folder** with its own assets. The client opens `index.html` inside a version folder and sees
everything; nothing is shared across versions, so an approved version can never be changed by
accident while working on the next one.

```
/
├── CLAUDE.md
├── docs/
│   ├── client-brief.md     # Requirements, brand notes, references the client gave us
│   ├── sitemap.md          # Agreed list of pages and their status
│   └── feedback-log.md     # Dated client feedback and what changed in response
├── home/
│   ├── v1/
│   │   ├── index.html      # The mockup
│   │   ├── README.md       # Version date, status, open questions, images to supply
│   │   ├── screenshots/    # PNG exports at 1440 / 768 / 390 for WhatsApp or email review
│   │   └── assets/
│   │       ├── css/styles.css
│   │       ├── js/main.js
│   │       └── img/        # Logo, photos, grouped in subfolders (hero/, horses/, dogs/ ...)
│   └── v2/                 # Next round, copied from v1 then revised
├── about/
│   └── v1/
└── ...                     # One folder per page in the sitemap
```

Rules:
- A new version starts as a copy of the previous one (`home/v1` → `home/v2`), then gets edited.
  Never edit a version that has already been sent to the client.
- Page folders and version folders are lowercase: `home`, `horse-detail`, `v1`, `v2`.
- Shared client assets (logo, brand photos) may be duplicated across version folders. Disk space
  is cheap; a broken reference in a sent mockup is not.
- `docs/` is created when the first client input or sitemap decision arrives.

## Design system rules

Define everything once in `assets/css/styles.css` as CSS custom properties on `:root`:
colors, font families, type scale, spacing scale, radii, shadows, container width.
Pages consume tokens; they do not invent new hex values or font sizes.

Brand direction (updated 2026-10-30 after client feedback):
- Subject: Marwari horses, a Rajasthani breed known for inward-curving ears. The
  design must feel premium and restrained. The client rejected home v1 (dark brown,
  gold borders, badges, card grids) as "not premium".
- Reference the client supplied: https://coolmore.com/en/ireland/. Follow its pattern:
  one premium black canvas with per-section shade variants, white text, muted tan accent,
  pill buttons, circular prev/next controls with counters, hairlines, oversized light
  display type, minimal "MENU" header, location-led footer. Home v2 is the model.
- Palette: premium black family (#070708 to #151517, see home/v2 tokens) with tan accent.
  The client explicitly rejected dark blue; never use navy. No gold borders, glows,
  badges or boxed cards.
- Typography: Poppins (headings, Light 300 at display sizes; 400–500 for small headings)
  and Inter (body, UI, tracked small-caps labels). Client instruction, not a suggestion.
- Imagery: large, full-bleed photography. The horses are the hero of every page.

Accessibility baseline even in mockups: readable contrast, visible focus states on
interactive demos, alt text on real images. The client may test with a screen reader
later and the mockup should not need redesigning.

## Workflow for a new page or version

1. Check `docs/sitemap.md` for the page's scope and any notes. If the page is not
   listed, add it with status `draft`.
2. For a first version, copy the design system (`assets/css/styles.css`) and the header, footer
   and nav markup from the latest approved version of the home page, so every page matches.
   For a revision, copy the whole previous version folder to `vN+1` and edit there.
3. Build in `<page>/vN/index.html`. Keep all images inside `<page>/vN/assets/img/`.
4. Open it and check all three breakpoints. Screenshot into `<page>/vN/screenshots/` if asked.
5. Write or update `<page>/vN/README.md`: date, status, what changed, open questions.

## Workflow for a client review round

1. Make sure the version folder's README says `sent-to-client` with the date. From this point
   the folder is frozen.
2. Export PNGs at desktop and mobile width into `<page>/vN/screenshots/` if the client reviews
   over WhatsApp or email rather than opening HTML.
3. After feedback arrives, record it verbatim with the date in `docs/feedback-log.md`,
   then list the concrete changes made under it. Make the changes in a new version folder.

Status vocabulary used in each version README and `docs/sitemap.md`:
`draft` → `internal-review` → `sent-to-client` → `revisions` → `approved`.
An `approved` page is locked. Changes to it require an explicit client request, which
must be logged in `feedback-log.md` first.

## Working with the client's feedback

- Treat client wording as the source of truth. If feedback is ambiguous ("make it pop"),
  implement the most likely reading, note the assumption in `feedback-log.md`, and
  offer one alternative rather than asking many questions.
- Preserve approved decisions. Do not restyle a header the client already approved
  while fixing an unrelated page.
- Keep a running list of open questions for the client at the bottom of
  `docs/client-brief.md`. Batch them; do not scatter questions across files.

## Conventions

- Language: UK/Indian English in UI copy ("colour", "enquiry"). Confirm with client.
- Placeholder copy should be plausible and on-topic for a Marwari horse farm/stud,
  not lorem ipsum, so the client can judge the layout with realistic text lengths.
- Phone numbers, emails, addresses: use obvious dummies (e.g. +91 98765 43210,
  info@example.com) until the client supplies real ones.
- Currency in INR (₹) unless told otherwise.
- Dates in `index.html` and logs: `YYYY-MM-DD`.
- No git commits unless asked. If a repo is initialised later, commit per review
  round with the message `vN sent to client` or `vN revisions`.

## Quick checks before saying a page is done

- Opens directly from the file system with no console errors.
- Header/footer/nav identical to the other pages.
- Looks correct at 1440 / 768 / 390 px.
- No lorem ipsum, no unlabelled placeholder images.
- Has a README in its version folder and is listed in `docs/sitemap.md` with the right status.
