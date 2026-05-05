import type * as React from 'react';

/**
 * `contain: layout` makes the demo box a containing block for absolute /
 * positioned descendants, so the flipping demos overflow against this box
 * instead of the viewport.
 */
export const demoBoxStyle: React.CSSProperties = {
  contain: 'layout',
};
