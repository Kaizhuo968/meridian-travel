# MERIDIAN — China Travel Website

A static, multilingual marketing website for a China-based inbound travel agency serving
**international travelers**, with two distinct paths: **Leisure Travel** and **Business & MICE**.

> `MERIDIAN` is a **placeholder brand name** — swap it for the real brand when available.

## Highlights

- **Zero build step** — plain HTML, CSS and vanilla JS. Open it and it runs.
- **5 languages** out of the box: English, Español, Deutsch, 日本語, 한국어.
- Clear **leisure vs. business (MICE)** split, encoded in copy and color.
- **China-focused** destinations and sample itineraries.
- Responsive, light and airy layout.
- Inquiry form (front-end demo — wire it to a backend/CRM later).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure, `data-i18n` hooks, dynamic containers |
| `styles.css` | Design system + responsive layout |
| `i18n.js`     | All translations (5 languages) + `LANGS` / `LANG_NAMES` |
| `script.js`   | i18n engine, language switcher, mobile menu, inquiry form |
| `.gitignore`  | Ignore OS / editor / env noise |

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Page sections

1. Nav
2. Hero (dual CTA — leisure / business)
3. **Two ways to travel** — Leisure Travel vs. Business & MICE
4. Destinations — curated regions of China
5. Signature journeys — sample itineraries
6. Services
7. About
8. Contact / inquiry form
9. Footer

## Editing content & adding a language

- **Static strings** — find the element's `data-i18n="a.b.c"` attribute in `index.html`,
  then edit the matching key under `I18N.<lang>.a.b.c` in `i18n.js`.
- **Dynamic lists** — destination cards, journeys, services, about bullets, contact meta
  and trip-type options are rendered by `renderDynamic()` in `script.js` **from `i18n.js`**.
  Edit them in `i18n.js`, **not** in the HTML.
- **Add a language:**
  1. Add its code to `LANGS` and its native name to `LANG_NAMES` in `i18n.js`.
  2. Add a complete object under `I18N` with the **same keys**.
  3. Add `<button data-lang="xx">…</button>` to the `#langPanel` block in `index.html`.

  The switcher, persistence (localStorage) and rendering are automatic.

## Design tokens

Defined as CSS variables in `:root` (`styles.css`): warm paper background, near-black ink,
a **vermilion** accent for leisure and a **jade** accent for business.

## Content rules

- Audience = **international visitors to China** (not domestic).
- Keep the **leisure vs. business** distinction intact in copy and CTAs.
- When adding a language, translate **all** keys — no English fallbacks left in place.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md). Short version: branch → PR → review before merge to `main`.

## Roadmap

- [ ] Replace placeholder brand, contact details and imagery
- [ ] Real inquiry backend (CRM / email)
- [ ] Optional: migrate to a framework (Next.js / Astro) for CMS, SEO and booking
