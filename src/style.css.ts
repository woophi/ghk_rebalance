import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});
const banner = style({
  padding: '1rem',
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  backgroundColor: '#2637580F',
  width: '100%',
});

const bannersWrap = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
const connect = style({
  width: '23px',
  height: '4px',
  backgroundColor: '#2637580F',
});

const shapeContainer = style({
  position: 'relative',
  marginLeft: 'auto',
  width: '41px',
  height: '40px',
});
const shapeBg = style({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
});
const shapeText = style({
  position: 'absolute',
  zIndex: 2,
  top: 13,
  left: 12,
});
const rowText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const bannerImg = style({
  borderRadius: '1rem',
  overflow: 'hidden',
});

export const appSt = {
  container,
  banner,
  bannersWrap,
  connect,
  shapeContainer,
  rowText,
  shapeBg,
  shapeText,
  bannerImg,
};
