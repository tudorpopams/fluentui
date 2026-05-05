import * as React from 'react';
import type { PositioningProps } from '@fluentui/react-headless-components-preview/positioning';

import { InlineAnchored } from './InlineAnchored';
import styles from './positioning.module.css';

const cells: Array<{
  label: string;
  position: NonNullable<PositioningProps['position']>;
  align: NonNullable<PositioningProps['align']>;
  gridClass: string;
}> = [
  { label: 'above-start', position: 'above', align: 'start', gridClass: styles.gridCell1_1 },
  { label: 'above', position: 'above', align: 'center', gridClass: styles.gridCell1_2 },
  { label: 'above-end', position: 'above', align: 'end', gridClass: styles.gridCell1_3 },
  { label: 'before-top', position: 'before', align: 'start', gridClass: styles.gridCell2_1 },
  { label: 'before', position: 'before', align: 'center', gridClass: styles.gridCell3_1 },
  { label: 'before-bottom', position: 'before', align: 'end', gridClass: styles.gridCell4_1 },
  { label: 'after-top', position: 'after', align: 'start', gridClass: styles.gridCell2_3 },
  { label: 'after', position: 'after', align: 'center', gridClass: styles.gridCell3_3 },
  { label: 'after-bottom', position: 'after', align: 'end', gridClass: styles.gridCell4_3 },
  { label: 'below-start', position: 'below', align: 'start', gridClass: styles.gridCell5_1 },
  { label: 'below', position: 'below', align: 'center', gridClass: styles.gridCell5_2 },
  { label: 'below-end', position: 'below', align: 'end', gridClass: styles.gridCell5_3 },
];

/*
 * Renders all 12 anchored surfaces at once via `InlineAnchored` (which uses
 * `usePositioning` directly, not `popover="auto"`) so the demo shows every
 * requested position side-by-side without any click-to-open and without the
 * top-layer flip quirks that fight `position-area` in a constrained canvas.
 */
export const ShorthandPositions = (): React.ReactNode => (
  <div className={styles.outer}>
    <div className={styles.gridWrapper}>
      {cells.map(cell => (
        <div key={cell.label} className={cell.gridClass}>
          <InlineAnchored
            positioning={{ position: cell.position, align: cell.align, pinned: true }}
            surfaceClassName={`${styles.surface} ${styles.surfaceCell}`}
            trigger={<button className={`${styles.trigger} ${styles.triggerCompact}`}>{cell.label}</button>}
          >
            Container
          </InlineAnchored>
        </div>
      ))}
    </div>
  </div>
);
