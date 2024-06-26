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

const optionList = style({
  marginTop: '2rem',
  display: 'flex',
  flexFlow: 'column nowrap',
  rowGap: '1rem',
});

const option = style({
  width: '100%',
  height: '2.5rem',
  border: `1px solid ${vars.color.lightGray}`,
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  textIndent: '0.889rem',
  cursor: 'pointer',
});

const srOnly = style({
  overflow: 'hidden',
  position: 'absolute',
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'circle(0)',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  whiteSpace: 'nowrap',
});

const button = style({
  width: '100%',
  textAlign: 'start',
  textIndent: '0.889rem',
});

const checkedOption = style({
  border: `2px solid ${vars.color.primary}`,
  background: vars.color.lightGreen,
});

const error = style({
  position: 'absolute',
  font: vars.font.bodyS,
  color: 'red',
  bottom: '5rem',
  fontWeight: 500,
});

const styles = {
  title,
  question,
  optionList,
  option,
  srOnly,
  button,
  checkedOption,
  error,
};

export default styles;
