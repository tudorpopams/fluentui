# `@fluentui/markbook-poc`

A proof of concept that renders **FluentUI v9 `react-components` stories with
[Markbook](https://github.com/doidor/markbook) instead of Storybook.**

The markdown pages under `pages/` mount the _unmodified_ Storybook CSF story
files straight out of each component's `stories/` package (e.g.
`packages/react-components/react-button/stories/src/Button/*.stories.tsx`) using
Markbook's `:::story` / `:::stories` directives. A single decorator
(`decorators/fluent-provider.tsx`) wraps every story in
`<FluentProvider theme={webLightTheme}>`, mirroring FluentUI's Storybook global
decorator.

Storybook is left fully in place — this is an additive, side-by-side demo.

## Why the vendored tarballs?

Markbook is not published to npm yet, so the four `@markbook/*` packages are
vendored as `pnpm pack` tarballs under `vendor/` and referenced via `file:` in
`package.json`. Because this package is a Yarn **workspace member**, those deps
hoist alongside FluentUI's React 19, guaranteeing a single React instance (no
duplicate-React "invalid hook call").

To refresh the tarballs from a local Markbook checkout:

```bash
cd <markbook-repo>
for p in adapter-shared core adapter-react cli; do
  (cd packages/$p && pnpm pack --pack-destination <this-dir>/vendor)
done
```

## Running it

From the **repo root** (so Yarn wires up the workspace):

```bash
yarn install --ignore-engines          # picks up this package's file: deps

# then, from this folder:
cd apps/markbook-poc
yarn build                              # static build -> dist/
yarn preview                            # serve dist/ locally
# or
yarn dev                                # Vite-backed dev server with hot reload
```

> Prereq: the `@fluentui/react-components` graph must be built once so its
> `lib/` exists — `yarn nx build react-components` from the repo root.

## Adding more components

Copy a page like `pages/button.md` and point the `:::stories` `src` at any other
component's story files under `packages/react-components/<component>/stories/src/`.
Avoid the `index.stories.tsx` aggregator files — they import `.md`/`.mdx`
description files that this minimal Markbook setup doesn't process; reference the
leaf `*.stories.tsx` files instead.
