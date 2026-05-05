import * as React from 'react';
import { Popover, PopoverTrigger, PopoverSurface } from '@fluentui/react-headless-components-preview/popover';
import type { PositioningProps } from '@fluentui/react-headless-components-preview/positioning';

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

export const ShorthandPositions = (): React.ReactNode => (
  <div className={styles.outer}>
    <div className={styles.gridWrapper}>
      {cells.map(cell => (
        <div key={cell.label} className={cell.gridClass}>
          <Popover positioning={{ position: cell.position, align: cell.align }}>
            <PopoverTrigger>
              <button className={`${styles.trigger} ${styles.triggerCompact}`}>{cell.label}</button>
            </PopoverTrigger>
            <PopoverSurface className={`${styles.surface} ${styles.surfaceCell}`}>Container</PopoverSurface>
          </Popover>
        </div>
      ))}
    </div>
  </div>
);
