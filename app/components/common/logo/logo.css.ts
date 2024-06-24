import { style } from '@vanilla-extract/css';
import $breakpoints from '@/app/styles/utils';

const logo = style({
  position: 'absolute',
  transform: 'scale(0.4)',
  right: '0',
  bottom: '2.4rem',
  '@media': {
    [$breakpoints.tablet]: {
      bottom: '5.6rem',
      right: '6.563rem',
      transform: 'scale(0.75)',
    },
    [$breakpoints.laptop]: {
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
