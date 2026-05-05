import * as React from 'react';
import { demoBoxStyle } from './demoBox';
import { InlineAnchored } from './InlineAnchored';

import descriptionMd from './PositioningFlippingInlineDescription.md';
import styles from './positioning.module.css';

export const FlippingInline = (): React.ReactNode => (
  <div className={styles.pageGap4}>
    <div className={styles.responsiveGrid}>
      <div className={styles.demoBox} style={demoBoxStyle}>
        <InlineAnchored
          positioning={{ position: 'before' }}
          surfaceClassName={`${styles.surface} ${styles.surfaceFlip} ${styles.flipDemo}`}
          trigger={
            <button
              className={`${styles.trigger} ${styles.triggerSmall}`}
              style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}
            >
              trigger on left
            </button>
          }
        >
          <strong>Requested:</strong> before → flips after
        </InlineAnchored>
      </div>

      <div className={styles.demoBox} style={demoBoxStyle}>
        <InlineAnchored
          positioning={{ position: 'after' }}
          surfaceClassName={`${styles.surface} ${styles.surfaceFlip} ${styles.flipDemo}`}
          trigger={
            <button
              className={`${styles.trigger} ${styles.triggerSmall}`}
              style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)' }}
            >
              trigger on right
            </button>
          }
        >
          <strong>Requested:</strong> after → flips before
        </InlineAnchored>
      </div>
    </div>
  </div>
);

FlippingInline.parameters = {
  docs: {
    description: {
      story: descriptionMd,
    },
  },
};
