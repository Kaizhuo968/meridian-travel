# Contributing

This repository is worked on by multiple contributors — humans and AI agents alike.
Follow the conventions below so everyone stays in sync.

## Workflow (PR-based)

1. **Never commit directly to `main`.** Create a branch first:
   `git checkout -b feat/short-description` (or `fix/…`, `content/…`, `i18n/…`, `chore/…`).
2. Make your change locally and preview it in a browser.
3. Commit with a clear message (see below).
4. Push the branch and open a **Pull Request** against `main`.
5. Get at least one approval, then merge (squash merge preferred).

## Branch naming

| Prefix | Use for |
|--------|---------|
| `feat/` | new feature or section |
| `fix/` | bug fix |
| `content/` | copy, cards, plans, services |
| `i18n/` | translations |
| `chore/` | tooling, housekeeping |

AI agents should use the `agent/<tool>/<topic>` namespace (see `AGENTS.md`).

## Commit messages

`type(scope): summary` — for example:

- `content(cards): add performance feature card`
- `fix(lang): persist language selection on reload`
- `i18n(ja): translate services section`
- `feat(ui): add social media link block`

## i18n rules

- Whenever you touch a translatable string, update **all 7 languages** in `i18n.js`.
- Keys must stay **identical** across every language object.
- Keep dynamic list content (cards, plans, services, …) in `i18n.js` — never hard-code it in `index.html`.
- If a new language is right-to-left, add it to `RTL_LANGS` in `i18n.js`.

## Content rules

- This project is a **generic template** — do not frame it for a specific industry or product.
- Keep copy brand-neutral until real brand details are ready.
- No `lorem ipsum` or placeholder text in merged PRs.

## Multi-agent collaboration (Codex / Claude / AntiGravity / …)

Several AI agents may work on this repo at the same time. To avoid stepping on each other:

1. **Read [`AGENTS.md`](./AGENTS.md) before writing anything.**
2. **One branch per agent per task:** `agent/<tool>/<topic>` (e.g. `agent/codex/i18n-check`).
3. **Work in your own directory.** Separate machines → separate clones. Same machine →
   use `git worktree add ../mt-<tool> -b agent/<tool>/<topic> origin/main`.
4. **Never push to `main`.** Always open a PR; CI + 1 approval are required before merge.
5. **Squash-merge** to keep `main` history linear and easy to review.

### Automated review gate (CI)

Every PR runs the `validate` job (`.github/workflows/ci.yml`):

- `node --check` on `i18n.js` and `script.js` (JavaScript syntax)
- `node scripts/check.mjs` — verifies **all 7 languages share the same keys**,
  arrays match, no empty strings, and every `data-i18n` key in `index.html` resolves.

Run it locally before pushing:

```bash
node --check i18n.js && node --check script.js
node scripts/check.mjs
```

## Secrets

- **Never commit tokens, keys or `.env` files.** `.gitignore` already covers the common ones.
- Use a personal access token **only locally** for pushing — never paste it into a file, commit or PR.
