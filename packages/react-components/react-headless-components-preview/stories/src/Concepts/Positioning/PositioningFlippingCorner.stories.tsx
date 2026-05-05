import * as React from 'react';
import { demoBoxStyle } from './demoBox';
import { InlineAnchored } from './InlineAnchored';

import descriptionMd from './PositioningFlippingCornerDescription.md';
import styles from './positioning.module.css';

export const FlippingCorner = (): React.ReactNode => (
  <div className={styles.pageGap4}>
    <div className={styles.responsiveGrid}>
      <div className={styles.demoBox} style={demoBoxStyle}>
        <InlineAnchored
          positioning={{ position: 'above', align: 'end' }}
          surfaceClassName={`${styles.surface} ${styles.surfaceFlipLarge} ${styles.flipDemo}`}
          trigger={
            <button
              className={`${styles.trigger} ${styles.triggerSmall}`}
              style={{ position: 'absolute', top: 12, left: 12 }}
            >
              top-left · requested above-end
            </button>
          }
        >
          <strong>Requested:</strong> above-end → below-start
        </InlineAnchored>
      </div>

      <div className={styles.demoBox} style={demoBoxStyle}>
        <InlineAnchored
          positioning={{ position: 'above', align: 'start' }}
          surfaceClassName={`${styles.surface} ${styles.surfaceFlipLarge} ${styles.flipDemo}`}
          trigger={
            <button
              className={`${styles.trigger} ${styles.triggerSmall}`}
              style={{ position: 'absolute', top: 12, right: 12 }}
            >
              top-right · requested above-start
            </button>
          }
        >
          <strong>Requested:</strong> above-start → below-end
        </InlineAnchored>
      </div>

      <div className={styles.demoBox} style={demoBoxStyle}>
        <InlineAnchored
          positioning={{ position: 'below', align: 'end' }}
          surfaceClassName={`${styles.surface} ${styles.surfaceFlipLarge} ${styles.flipDemo}`}
          trigger={
            <button
              className={`${styles.trigger} ${styles.triggerSmall}`}
              style={{ position: 'absolute', bottom: 12, left: 12 }}
            >
              bottom-left · requested below-end
            </button>
          }
        >
          <strong>Requested:</strong> below-end → above-start
        </InlineAnchored>
      </div>

      <div className={styles.demoBox} style={demoBoxStyle}>
        <InlineAnchored
          positioning={{ position: 'below', align: 'start' }}
          surfaceClassName={`${styles.surface} ${styles.surfaceFlipLarge} ${styles.flipDemo}`}
          trigger={
            <button
              className={`${styles.trigger} ${styles.triggerSmall}`}
              style={{ position: 'absolute', bottom: 12, right: 12 }}
            >
              bottom-right · requested below-start
            </button>
          }
        >
          <strong>Requested:</strong> below-start → above-end
        </InlineAnchored>
      </div>
    </div>
  </div>
);

FlippingCorner.parameters = {
  docs: {
    description: {
      story: descriptionMd,
    },
  },
};
