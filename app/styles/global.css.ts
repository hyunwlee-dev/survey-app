import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';
import $breakpoints from './utils';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  fontSize: '16px',
  letterSpacing: '-0.25px',
  padding: '0',
  margin: '0',
});

globalStyle('html, body', {
  width: '100%',
  height: '100%',
  padding: '0',
  margin: '0',
});

globalStyle('body', {
  width: '100vw',
  height: '100dvh',
  background: vars.color.lightGreen,
  position: 'relative',
  overflowX: 'hidden',
});

globalStyle('body::before', {
  position: 'absolute',
  content: '',
  top: 0,
  left: 0,
  width: '100%',
  height: '232px',
  background:
    "url('/images/background-pattern-mobile.svg') no-repeat center / cover",
  zIndex: '-100',
  '@media': {
    [$breakpoints.tablet]: {
      height: '320px',
      background:
        "url('/images/background-pattern-desktop.svg') no-repeat center / cover",
    },
  },
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('li', {
  listStyle: 'none',
});

globalStyle('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

globalStyle('input[type="text"]', {
  width: '100%',
  height: '2.5rem',
  textIndent: '0.889rem',
  borderRadius: '8px',
  border: `1px solid ${vars.color.lightGray}`,
});
