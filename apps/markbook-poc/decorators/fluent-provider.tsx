import * as React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

/**
 * Global decorator: themes every story with the FluentUI web light theme.
 * Markbook applies decorators outer-to-inner, so this wraps each mounted
 * story the same way FluentUI's Storybook `.storybook/preview` decorator does.
 */
export default function FluentProviderDecorator({ children }: { children: React.ReactNode }): React.ReactElement {
  return <FluentProvider theme={webLightTheme}>{children}</FluentProvider>;
}
