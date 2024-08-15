import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
});

export const btmContent = style({
  padding: 0,
});

export const lrSt = {
  container,
  btmContent,
};
