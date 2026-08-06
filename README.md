# acme-core

A **dummy repository for testing an open-source contribution workflow.** The code is an invented
example app (a tiny policy API). The interesting part is the process: this repo syncs both ways with
a private monorepo via `git subtree`, and outside contributions land here first.

Contributions are welcome as test traffic — see [CONTRIBUTING.md](CONTRIBUTING.md). Short version:
fork, make any small change, `git commit -s`, open a PR with one commit. A maintainer squash-merges
and syncs it onward; you stay credited as the PR author and via a `Co-authored-by` trailer.

## Run it

```sh
pnpm install
pnpm -r run test
node apps/api/src/boot.js
```

A fresh clone installs with a frozen lockfile, builds, tests, and boots — no private dependencies.

## House rules

- Sign off every commit (`git commit -s`) — DCO.
- Do not commit `pnpm-lock.yaml` changes unless the PR intentionally changes dependencies.
- `packages/api-types` is generated (`pnpm --filter @acme/api run codegen`); edit `apps/api` instead.
