import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

const title = style({
  fontSize: vars.font.headingL,
  fontWeight: 700,
});

const question = style({
  margin: '1.5rem 0 2rem',
  fontSize: vars.font.bodyL,
  fontWeight: 600,
  whiteSpace: 'pre-wrap',
  lineHeight: '1.5',
});

const stepButton = style({
  marginTop: '2rem',
  width: '4rem',
  height: '2.944rem',
  borderRadius: '0.5rem',
  fontWeight: '700',
  letterSpacing: '1px',
  background: vars.color.darkGreen,
  color: vars.color.pureWhite,
});

const error = style({
  position: 'absolute',
  font: vars.font.bodyS,
  color: 'red',
  bottom: '5rem',
  fontWeight: 500,
});

const styles = { title, question, stepButton, error };

export default styles;
