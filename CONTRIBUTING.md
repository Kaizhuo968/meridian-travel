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
| `content/` | copy, destinations, itineraries |
| `i18n/` | translations |
| `chore/` | tooling, housekeeping |

## Commit messages

`type(scope): summary` — for example:

- `content(cards): add Tibet region`
- `fix(lang): persist language selection on reload`
- `i18n(ja): translate services section`

## i18n rules

- Whenever you touch a translatable string, update **all 5 languages** in `i18n.js`.
- Keys must stay **identical** across every language object.
- Keep dynamic list content (cards, journeys, services, …) in `i18n.js` — never hard-code it in `index.html`.

## Content rules

- Audience = **international travelers to China**.
- Preserve the **leisure vs. business (MICE)** split in copy and CTAs.
- No `lorem ipsum` or placeholder text in merged PRs.

## Secrets

- **Never commit tokens, keys or `.env` files.** `.gitignore` already covers the common ones.
- Use a personal access token **only locally** for pushing — never paste it into a file, commit or PR.
