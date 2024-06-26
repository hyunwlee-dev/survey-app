import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

const form = style({
  position: 'relative',
});

const select = style({
  width: '100%',
  height: '2.5rem',
  textIndent: '0.889rem',
  borderRadius: '8px',
  border: `1px solid ${vars.color.lightGray}`,
  background: 'transparent',
  cursor: 'pointer',
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

const dashboardLink = style({
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
  bottom: '7.2rem',
  left: '0.2rem',
  font: vars.font.bodyS,
  color: 'red',
  fontWeight: 500,
});

const styles = { form, select, nameInput, surveyButton, dashboardLink, error };

export default styles;
