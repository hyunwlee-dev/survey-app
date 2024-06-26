import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

const wrapper = style({
  display: 'flex',
  flexFlow: 'row-reverse nowrap',
  justifyContent: 'space-between',
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

const styles = { wrapper, stepButton };

export default styles;
