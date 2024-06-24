import { style } from '@vanilla-extract/css';
import $breakpoints from '@/app/styles/utils';

const container = style({
  margin: '18.5rem auto 0',
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
