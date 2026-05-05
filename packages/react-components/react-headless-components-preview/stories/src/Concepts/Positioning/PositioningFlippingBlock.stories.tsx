import * as React from 'react';
import { demoBoxStyle } from './demoBox';
import { InlineAnchored } from './InlineAnchored';

import descriptionMd from './PositioningFlippingBlockDescription.md';
import styles from './positioning.module.css';

export const FlippingBlock = (): React.ReactNode => (
  <div className={styles.pageGap4}>
    <div className={styles.responsiveGrid}>
      <div className={styles.demoBox} style={demoBoxStyle}>
        <InlineAnchored
          positioning={{ position: 'above' }}
          surfaceClassName={`${styles.surface} ${styles.surfaceFlip} ${styles.flipDemo}`}
          trigger={
            <button
              className={`${styles.trigger} ${styles.triggerSmall}`}
              style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)' }}
            >
              trigger near top
            </button>
          }
        >
          <strong>Requested:</strong> above → flips below
        </InlineAnchored>
      </div>

      <div className={styles.demoBox} style={demoBoxStyle}>
        <InlineAnchored
          positioning={{ position: 'below' }}
          surfaceClassName={`${styles.surface} ${styles.surfaceFlip} ${styles.flipDemo}`}
          trigger={
            <button
              className={`${styles.trigger} ${styles.triggerSmall}`}
              style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)' }}
            >
              trigger near bottom
            </button>
          }
        >
          <strong>Requested:</strong> below → flips above
        </InlineAnchored>
      </div>
    </div>
  </div>
);

FlippingBlock.parameters = {
  docs: {
    description: {
      story: descriptionMd,
    },
  },
};
