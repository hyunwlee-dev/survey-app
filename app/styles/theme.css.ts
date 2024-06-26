import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    primary: null,
    pureWhite: null,
    green: null,
    lightGreen: null,
    darkGreen: null,
    lightGray: null,
  },
  font: {
    bodyS: null,
    bodyM: null,
    bodyL: null,
    headingL: null,
    headingXL: null,
    headingXXL: null,
  },
});

createGlobalTheme(':root', vars, {
  color: {
    primary: '#44CFBB',
    pureWhite: '#FFFFFF',
    green: '#3ABFC3',
    lightGreen: '#E6F4F1',
    darkGreen: '#00373D',
    lightGray: '#e0dfe1',
  },
  font: {
    bodyS: '12px',
    bodyM: '12px',
    bodyL: '14px',
    headingL: '16px',
    headingXL: '32px',
    headingXXL: '48px',
  },
});
