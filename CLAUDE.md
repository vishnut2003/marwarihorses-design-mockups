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

- Plain HTML5 + a shared `assets/css/styles.css` for the design system (tokens, type,
  components). Page-specific overrides may live in a `<style>` block in that page.
- Google Fonts via `<link>` is allowed. No other external scripts or stylesheets.
- Minimal vanilla JS only for things the client must see to understand the design
  (mobile nav toggle, hero slider, gallery lightbox, tabs). No frameworks.
- Images: use real client-supplied photos from `assets/img/` when available. Until then,
  use clearly labelled placeholders (solid blocks with a caption such as
  "Stallion photo – client to supply"). Never use random stock images that imply a
  specific horse or person belongs to the client.
- Every page must render correctly at desktop (1440), tablet (768) and mobile (390)
  widths. The client will open these on a phone.

## Folder layout

```
/
├── CLAUDE.md
├── index.html              # Review hub: links to every mockup + version/status
├── assets/
│   ├── css/styles.css      # Shared design tokens + components
│   ├── js/                 # Small vanilla scripts shared across pages
│   └── img/                # Client-supplied logos, photos, icons
├── pages/
│   ├── home.html
│   ├── about.html
│   ├── horses.html         # Listing / stud / sale page
│   ├── horse-detail.html   # Single horse profile template
│   ├── gallery.html
│   ├── contact.html
│   └── ...                 # One file per page in the sitemap
├── versions/               # Frozen copies of what was sent to the client, e.g. v1/, v2/
├── docs/
│   ├── client-brief.md     # Requirements, brand notes, references the client gave us
│   ├── sitemap.md          # Agreed list of pages and their status
│   └── feedback-log.md     # Dated client feedback and what changed in response
└── exports/                # PNG/PDF exports of pages for WhatsApp/email review
```

Create folders only when a file goes into them. Keep page filenames lowercase-kebab-case.

## Design system rules

Define everything once in `assets/css/styles.css` as CSS custom properties on `:root`:
colors, font families, type scale, spacing scale, radii, shadows, container width.
Pages consume tokens; they do not invent new hex values or font sizes.

Brand direction (update when the client confirms):
- Subject: Marwari horses, a Rajasthani breed known for inward-curving ears. The
  design should feel premium, heritage-rich and trustworthy, not generic equestrian.
- Palette starting point: warm earth tones (sand, terracotta, deep brown) with a
  royal accent (deep maroon or gold). Confirm against the client's logo before locking.
- Typography: a distinguished serif for headings, a clean sans for body.
- Imagery: large, full-bleed photography. The horses are the hero of every page.

Accessibility baseline even in mockups: readable contrast, visible focus states on
interactive demos, alt text on real images. The client may test with a screen reader
later and the mockup should not need redesigning.

## Workflow for a new page

1. Check `docs/sitemap.md` for the page's scope and any notes. If the page is not
   listed, add it with status `draft`.
2. Build the page in `pages/<name>.html` using existing tokens and components. Reuse
   header, footer and nav markup from `home.html` exactly; do not fork them.
3. Open it and check all three breakpoints. Screenshot if asked.
4. Add or update the card for it in `index.html` with status and date.
5. Do NOT copy into `versions/` yet. That happens only at a client send.

## Workflow for a client review round

1. Freeze: copy the current `index.html`, `pages/` and `assets/` into
   `versions/vN/` where N is the next integer. Never edit files inside `versions/`.
2. Export PNGs of each page at desktop and mobile width into `exports/vN/` if the
   client reviews over WhatsApp or email rather than opening HTML.
3. Update `index.html` to show "Sent to client: vN, <date>".
4. After feedback arrives, record it verbatim with the date in `docs/feedback-log.md`,
   then list the concrete changes made under it. Work on `pages/`, not on `versions/`.

Status vocabulary used in `index.html` and `docs/sitemap.md`:
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
- Listed in `index.html` and `docs/sitemap.md` with the right status.
