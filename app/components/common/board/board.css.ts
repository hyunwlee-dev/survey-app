import { style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/theme.css';

const board = style({});
const heading = style({
  fontSize: vars.font.headingXL,
});
const sub = style({
  fontSize: vars.font.headingL,
});

const styles = { board, heading, sub };

export default styles;
