import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

const form = style({
  position: 'relative',
});

const nameInput = style({
  margin: '1rem 0 2rem',
});

const surveyButton = style({
  width: '100%',
  height: '2.944rem',
  borderRadius: '0.5rem',
  fontWeight: '700',
  letterSpacing: '1px',
  background: vars.color.darkGreen,
  color: vars.color.pureWhite,
});

const homeLink = style({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '2.944rem',
  borderRadius: '0.5rem',
  fontWeight: '700',
  letterSpacing: '1px',
  background: vars.color.lightGreen,
});

const error = style({
  position: 'absolute',
  bottom: '3.4rem',
  left: '0.2rem',
  font: vars.font.bodyS,
  color: 'red',
  fontWeight: 500,
});

const styles = { form, nameInput, surveyButton, homeLink, error };

export default styles;
