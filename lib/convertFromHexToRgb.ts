import { Rgb } from '~/types/types';

export const hexToRgb = (hex: string) => {
  hex = hex.replace(/^#/, '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char.repeat(2))
      .join('');
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  if (r && g && b) return { r, g, b } as Rgb;
  else return null;
};
