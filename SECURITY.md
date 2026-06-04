# Security Policy

## Reporting a vulnerability

Please **do not open a public issue** for security problems. Email **jawaharnaidu07@gmail.com** with details and steps to reproduce, and I'll respond as soon as I can.

## Secrets

- Credentials belong in a **git-ignored `.env` file** — never committed to the repo.
- No keys or tokens should ever be hardcoded in source.
- If a secret is ever exposed, **rotate it immediately**.
