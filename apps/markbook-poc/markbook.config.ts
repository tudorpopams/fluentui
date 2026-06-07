import { defineConfig } from '@markbook/core';
import { reactAdapter } from '@markbook/adapter-react/config';

/**
 * Markbook config for the FluentUI POC.
 *
 * The `fluent-provider` decorator wraps every mounted story in a
 * `<FluentProvider theme={webLightTheme}>`, mirroring what FluentUI's
 * Storybook setup does with a global decorator — so the existing stories
 * render themed without any modification.
 */
export default defineConfig({
  title: 'FluentUI \u00d7 Markbook',
  description: 'Proof of concept: FluentUI v9 react-components stories rendered with Markbook instead of Storybook.',
  contentDir: 'pages',
  adapter: reactAdapter({
    decorators: ['./decorators/fluent-provider.tsx'],
  }),
  // "Open in playground" buttons on every story. FluentUI ships on npm, so the
  // generated sandboxes resolve the imports without any extra wiring.
  playground: {
    providers: ['codesandbox', 'stackblitz'],
    dependencies: {
      '@fluentui/react-components': 'latest',
      '@fluentui/react-icons': 'latest',
      react: 'latest',
      'react-dom': 'latest',
    },
  },
});
