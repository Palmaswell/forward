import * as Type from '../types';
 export function toRGBString(sRGB: Type.RGB): string | null {
   const [r, g, b] = sRGB;
   return sRGB.length === 3
    ? `rgb(${r}, ${g}, ${b})`
    : null;
 };
