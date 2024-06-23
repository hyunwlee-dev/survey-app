import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css';

export const vars = createThemeContract({
  font: {
    bodyS: null,
    bodyM: null,
    bodyL: null,
    headingL: null,
    headingXL: null,
  },
});

createGlobalTheme(':root', vars, {
  font: {
    bodyS: '12px',
    bodyM: '12px',
    bodyL: '14px',
    headingL: '18px',
    headingXL: '28px',
  },
});
