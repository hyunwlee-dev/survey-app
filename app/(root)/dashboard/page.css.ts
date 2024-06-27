import { style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/theme.css';
import $breakpoints from '@styles/utils';

const sumChart = style({
  marginTop: '2rem',
  '@media': {
    [$breakpoints.tablet]: {
      marginTop: '4rem',
    },
  },
});

const averageChart = style({
  marginTop: '4rem',
  '@media': {
    [$breakpoints.tablet]: {
      marginTop: '8rem',
    },
  },
});

const standardDeviationChart = style({
  margin: '4rem 0 2rem',
  '@media': {
    [$breakpoints.tablet]: {
      margin: '8rem 0 4rem',
    },
  },
});

const homeLink = style({
  position: 'absolute',
  top: '0.4rem',
  right: '0rem',
  width: '5rem',
  height: '5rem',
  borderRadius: '0.5rem',
  fontWeight: '700',
  letterSpacing: '1px',
  background: vars.color.darkGreen,
  color: vars.color.pureWhite,
  transform: 'scale(0.4)',
  '@media': {
    [$breakpoints.tablet]: {
      transform: 'scale(0.5)',
      top: '0.4rem',
    },
  },
});

const logoutButton = style({
  position: 'absolute',
  top: '3rem',
  right: '0rem',
  width: '5rem',
  height: '5rem',
  borderRadius: '0.5rem',
  fontWeight: '700',
  letterSpacing: '1px',
  background: vars.color.darkGreen,
  transform: 'scale(0.4)',
  '@media': {
    [$breakpoints.tablet]: {
      transform: 'scale(0.5)',
      top: '0.4rem',
      right: '4rem',
    },
  },
});

const styles = {
  sumChart,
  averageChart,
  standardDeviationChart,
  homeLink,
  logoutButton,
};

export default styles;
