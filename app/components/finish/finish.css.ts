import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

const homeLink = style({
  marginTop: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '2.944rem',
  borderRadius: '0.5rem',
  fontWeight: '700',
  letterSpacing: '1px',
  background: vars.color.darkGreen,
  color: vars.color.pureWhite,
});

const styles = { homeLink };

export default styles;
