import { style } from '@vanilla-extract/css';
import $breakpoints from '@styles/utils';

const logo = style({
  position: 'fixed',
  transform: 'scale(0.4)',
  bottom: '0rem',
  right: 0,
  '@media': {
    [$breakpoints.tablet]: {
      bottom: '3.6rem',
      right: '2.8rem',
      transform: 'scale(0.75)',
    },
    [$breakpoints.laptop]: {
      bottom: '5.6rem',
      right: '5.6rem',
      transform: 'scale(1)',
    },
  },
});

const srOnly = style({
  overflow: 'hidden',
  position: 'absolute',
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'circle(0)',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  whiteSpace: 'nowrap',
});

const styles = { logo, srOnly };

export default styles;
