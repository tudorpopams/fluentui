---
title: Overview
order: 0
---

# FluentUI rendered with Markbook

A proof of concept showing **FluentUI v9 `react-components` stories mounted with
[Markbook](https://github.com/doidor/markbook) instead of Storybook.**

Every story on the following pages is the _unmodified_ Storybook CSF file from the
component's `stories/` package — referenced straight out of
`packages/react-components/<component>/stories/src/...` via Markbook's `:::story`
directive. A single Markbook decorator wraps each story in
`<FluentProvider theme={webLightTheme}>`, exactly like FluentUI's Storybook
`preview` decorator does.

## Pages

- [Button](./button.html)
- [Spinner](./spinner.html)
- [Counter Badge](./badge.html)
- [Card](./card.html)
- [Dialog](./dialog.html)

## How it works

```ts
// markbook.config.ts
import { defineConfig } from '@markbook/core';
import { reactAdapter } from '@markbook/adapter-react/config';

export default defineConfig({
  contentDir: 'pages',
  adapter: reactAdapter({ decorators: ['./decorators/fluent-provider.tsx'] }),
  playground: { providers: ['codesandbox', 'stackblitz'] },
});
```

```md
:::story{src=../../../packages/react-components/react-button/stories/src/Button/ButtonDefault.stories.tsx export=Default}
:::
```
