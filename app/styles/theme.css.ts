import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    pureWhite: null,
    green: null,
    lightGreen: null,
  },
  font: {
    bodyS: null,
    bodyM: null,
    bodyL: null,
    headingL: null,
    headingXL: null,
  },
});

createGlobalTheme(':root', vars, {
  color: {
    pureWhite: '#FFFFFF',
    green: '#3ABFC3',
    lightGreen: '#E6F4F1',
  },
  font: {
    bodyS: '12px',
    bodyM: '12px',
    bodyL: '14px',
    headingL: '18px',
    headingXL: '28px',
  },
});
