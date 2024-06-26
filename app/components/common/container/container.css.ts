import { style } from '@vanilla-extract/css';
import $breakpoints from '@styles/utils';

const container = style({
  margin: '0 auto',
  background: 'transparent',
  maxWidth: '320px',
  '@media': {
    [$breakpoints.tablet]: {
      maxWidth: '568px',
    },
    [$breakpoints.laptop]: {
      maxWidth: '768px',
    },
  },
});

const styles = { container };

export default styles;
