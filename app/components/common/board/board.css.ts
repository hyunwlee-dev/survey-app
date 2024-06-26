import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import $breakpoints from '@styles/utils';

const board = style({
  position: 'absolute',
  top: '8.906rem',
  left: '50%',
  transform: 'translateX(-50%)',
  background: vars.color.pureWhite,
  width: '327px',
  borderRadius: '8px',
  padding: '1.5rem',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  '@media': {
    [$breakpoints.tablet]: {
      top: '10.469rem',
      width: '568px',
    },
    [$breakpoints.laptop]: {
      width: '768px',
    },
  },
});

const headingWrapper = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  columnGap: '1rem',
  '@media': {
    [$breakpoints.tablet]: {
      columnGap: '1.25rem',
    },
  },
});

const starIcon = style({
  transform: 'scale(0.7)',
  '@media': {
    [$breakpoints.tablet]: {
      transform: 'scale(1)',
    },
  },
});

const heading = style({
  fontSize: vars.font.headingXL,
  fontWeight: 700,
  '@media': {
    [$breakpoints.tablet]: {
      fontSize: vars.font.headingXXL,
    },
  },
});

const sub = style({
  margin: '1.5rem 0 2rem',
  fontSize: vars.font.headingL,
  fontWeight: 600,
  whiteSpace: 'pre-wrap',
  lineHeight: '1.5',
});

const styles = { board, headingWrapper, starIcon, heading, sub };

export default styles;
