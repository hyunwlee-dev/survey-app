import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  fontSize: '16px',
  letterSpacing: '-0.25px',
  padding: '0',
  margin: '0',
});

globalStyle('html, body', {});

globalStyle('body', {
  background: `linear-gradient(to right, ${vars.color.green} 20%,  ${vars.color.lightGreen})`,
  width: '100%',
  height: '100%',
  maxWidth: '100vw',
  maxHeight: '100vh',
  overflowX: 'hidden',
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
