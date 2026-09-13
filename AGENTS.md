# AGENTS.md — working rules for AI agents

This repository is edited by **multiple AI agents at once** (Codex, Claude, AntiGravity, …)
and by humans. Follow these rules so nobody clobbers anybody else's work.

> If you are an agent: read this file **top to bottom before writing any code.**

## The golden rules

1. **Never commit or push directly to `main`.** `main` is protected — a Pull Request plus
   one approval and a green CI run are required.
2. **One task = one branch = one PR.** Keep branches and PRs small and single-purpose.
3. **Work in your own copy.** Use a separate clone or a `git worktree` (see below).
   Never share a working directory with another agent.
4. **Start from the latest `main`.** `git fetch origin && git checkout -b <branch> origin/main`.
5. **Stay in scope.** Do not reformat or "fix" files unrelated to your task.
6. **i18n is all-or-nothing.** If you touch user-facing copy, update **all 5 languages**
   in `i18n.js`. CI enforces key parity across languages.
7. **No secrets.** Never commit tokens, API keys or `.env` files.
8. **Green before review.** Run the checks locally and make sure CI passes.

## Branch naming

```
agent/<tool>/<topic>
```

Examples: `agent/codex/i18n-check`, `agent/claude/booking-form`, `agent/antigravity/hero-redesign`.
This keeps each agent's branches in their own namespace and makes the author obvious.

## Workflow

```bash
git fetch origin
git checkout -b agent/<tool>/<topic> origin/main

# ... make your changes ...

node --check i18n.js && node --check script.js   # syntax sanity
node scripts/check.mjs                            # i18n + HTML integrity

git add -A
git commit -m "type(scope): summary"
git push -u origin agent/<tool>/<topic>
# open a PR against main → wait for CI + 1 approval → squash-merge
```

## Avoiding interference (concurrency)

- **Different machines:** each agent simply clones the repo. Nothing is shared → no clashes.
- **Same machine:** give each agent its **own directory** using `git worktree`:

  ```bash
  git worktree add ../mt-codex   -b agent/codex/topic        origin/main
  git worktree add ../mt-claude  -b agent/claude/topic       origin/main
  git worktree add ../mt-antigrav -b agent/antigravity/topic origin/main
  ```

  Never run two agents in the same folder.

- **Claim your area first** (see the ownership map). If two tasks genuinely need the same
  file, sequence them (one waits) or split the work by section.

## Ownership map (suggested)

| Area | File(s) | Notes |
|------|---------|-------|
| App logic / i18n engine | `script.js` | one agent at a time |
| Translations | `i18n.js` | coordinate — conflicts here are common |
| Markup / structure | `index.html` | edit `data-i18n` hooks carefully |
| Styling | `styles.css` | design tokens live in `:root` |

Announce what you are taking in the PR description / linked Issue so two agents don't
grab the same file.


## Definition of done

- [ ] CI green (`validate`)
- [ ] 1 approval on the PR
- [ ] i18n keys in sync across all languages
- [ ] Previewed locally
