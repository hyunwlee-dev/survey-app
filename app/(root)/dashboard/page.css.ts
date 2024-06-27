import { style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/theme.css';

const sumChart = style({ marginTop: '4rem' });

const averageChart = style({ marginTop: '8rem' });

const standardDeviationChart = style({ margin: '8rem 0 4rem' });

const homeLink = style({
  position: 'absolute',
  top: '2rem',
  right: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '5rem',
  height: '2.944rem',
  borderRadius: '0.5rem',
  fontWeight: '700',
  letterSpacing: '1px',
  background: vars.color.darkGreen,
  color: vars.color.pureWhite,
});

const styles = {
  sumChart,
  averageChart,
  standardDeviationChart,
  homeLink,
};

export default styles;
