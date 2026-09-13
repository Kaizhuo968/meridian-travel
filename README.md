# MERIDIAN — Multilingual Static Site Template

A static, multilingual landing-page template with **zero build step**. Plain HTML, CSS,
and vanilla JavaScript. Use it as a starting point for any product, brand, or campaign
that needs clean internationalization out of the box.

> `MERIDIAN` is a **placeholder brand name** — swap it for the real brand when available.

## Highlights

- **Zero build step** — open `index.html` and it runs.
- **7 languages** out of the box: English, Español, Deutsch, 日本語, 한국어, العربية, Français.
- **RTL ready** — Arabic switches to right-to-left layout automatically.
- Lightweight i18n engine with `localStorage` persistence.
- Responsive, open layout with design-token-driven theming.
- Contact form starter (front-end demo — wire it to your backend).
- GitHub Actions CI validates i18n parity and JS syntax on every PR.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure, `data-i18n` hooks, dynamic containers |
| `styles.css` | Design system + responsive layout |
| `i18n.js`     | All translations (7 languages) + `LANGS` / `LANG_NAMES` / `RTL_LANGS` |
| `script.js`   | i18n engine, language switcher, mobile menu, contact form |
| `scripts/check.mjs` | Integrity checker: key parity, array lengths, empty strings, HTML refs |
| `.github/workflows/ci.yml` | `validate` job run on PRs |
| `.gitignore`  | Ignore OS / editor / env noise |

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Page sections

1. Nav
2. Hero (dual CTA)
3. Two paths / split CTA
4. Features (card grid)
5. Plans / pricing-style cards
6. Solutions (service list)
7. About
8. Contact / form
9. Footer
10. Social media links (fixed bottom-right, placeholder URLs)

## Editing content & adding a language

- **Static strings** — find the element's `data-i18n="a.b.c"` attribute in `index.html`,
  then edit the matching key under `I18N.<lang>.a.b.c` in `i18n.js`.
- **Dynamic lists** — feature cards, plan cards, service items, about bullets, contact meta,
  and form options are rendered by `renderDynamic()` in `script.js` **from `i18n.js`**.
  Edit them in `i18n.js`, **not** in the HTML.
- **Add a language:**
  1. Add its code to `LANGS` and its native name to `LANG_NAMES` in `i18n.js`.
  2. If it is right-to-left, add the code to `RTL_LANGS` as well.
  3. Add a complete object under `I18N` with the **same keys** as English.
  4. Add `<button data-lang="xx">…</button>` to the `#langPanel` block in `index.html`.

  The switcher, persistence (localStorage), RTL direction, and rendering are automatic.

## Design tokens

Defined as CSS variables in `:root` (`styles.css`): warm paper background, near-black ink,
and an accent color. Edit the tokens to re-theme the whole page.

## Environment variables / secrets

This template **never hardcodes API keys**. Secrets are provided at deploy time
through environment variables and injected into the client as `window.__ENV`.

| Variable | Used for | Exposure |
|----------|----------|----------|
| `PADDLE_API_KEY` | Paddle billing | client-safe (publishable) |
| `OPENAI_API_KEY` | OpenAI | **server-only** |
| `SUPABASE_KEY` | Supabase anon/client key | client-safe (publishable) |
| `STRIPE_SECRET` | Stripe | **server-only** |

**Workflow**

1. Copy `env.example` → `.env` for local experiments (gitignored).
2. In production, set the variables in your platform instead of committing them:
   - **Vercel:** Project Settings → Environment Variables
   - **GitHub Actions:** Repo Settings → Secrets and variables → Actions
3. The build step generates `env.generated.js` from those variables:

   ```bash
   node scripts/build-env.mjs
   ```

   `env.generated.js` is gitignored and exposes the values as `window.__ENV`.
4. `config.js` reads `window.__ENV` into `window.CONFIG` for app code.

> ⚠️ `OPENAI_API_KEY` and `STRIPE_SECRET` are **secret** — never read them in
> browser code. Proxy them through a backend / serverless function.

## Development rules

- This is a **generic template** — keep copy brand-neutral and do not qualify it for a
  specific industry or product.
- When adding or editing translatable strings, update **all 7 languages** in `i18n.js`.
- Run `node scripts/check.mjs` locally before opening a PR.
- Never commit tokens, API keys, or `.env` files.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md). Short version: branch → PR → review before merge to `main`.

## Roadmap

- [ ] Replace placeholder brand, contact details, and social URLs
- [ ] Real contact backend (CRM / email / form service)
- [ ] Optional: migrate to a framework (Next.js / Astro) for routing, CMS, or SSR
