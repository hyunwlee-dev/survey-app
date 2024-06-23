import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  fontSize: '16px',
  padding: '0',
  margin: '0',
});

globalStyle('html, body', {});

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
