import tinyColor from 'tinycolor2';
import { Color, ColorEnhanced, YValues, RGB, ColorProps, ColorExtendedProps } from './types'

/**
 * @name luminance
 * @type { number }
 * @description Relative luminance in colorimetric spaces
 * Luminance = R *Yr + G*Yg + B*Yb
 * where R", "G", and "B" refer to the color's RGB values, and Yr, Yg, and Yb
 * are the respective "Y" values from the sRGB color space's
 * Red, Blue, and Green XYZ primaries.
 * if R sRGB <= 0.03928 then R = R sRGB /12.92 else R = ((R sRGB +0.055)/1.055) ^ 2.4
 * if G sRGB <= 0.03928 then G = G sRGB /12.92 else G = ((G sRGB +0.055)/1.055) ^ 2.4
 * if B sRGB <= 0.03928 then B = B sRGB /12.92 else B = ((B sRGB +0.055)/1.055) ^ 2.4
 *
 */
export function calculateRGBEntry(component: number, y: YValues): number {
  const average = component / 255;

  return average <= 0.03928
    ? (average / 12.92) * y
    : ((average + 0.055) / 1.055) ** 2.4 * y;
}

export function luminance(sRGB: RGB): number {
  return (
    calculateRGBEntry(sRGB[0], YValues.r) +
    calculateRGBEntry(sRGB[1], YValues.g) +
    calculateRGBEntry(sRGB[2], YValues.b)
  );
}
/**
 * @name contrastRatio
 * @type { number }
 * @description Calculate the contrast ratio
 * (L1 + 0.05) / (L2 + 0.05)
 */
export function contrastRatio(sRGB: RGB, sRGB2: RGB): number {
  const light = Math.max(luminance(sRGB), luminance(sRGB2));
  const dark = Math.min(luminance(sRGB), luminance(sRGB2));

  return +((light + 0.05) / (dark + 0.05)).toFixed(2);
}

export function toRGBString(sRGB: RGB): string {
  const [r, g, b] = sRGB;
  return sRGB.length === 3 ? `rgb(${r}, ${g}, ${b})` : '';
}

export function toHEX(sRGB: RGB): string {
  return sRGB.length === 3 ? tinyColor(toRGBString(sRGB)).toHexString() : '';
}

/**
 * @name create
 * @description creates a color object containing
 * necessary information to build UI components
 * @param { array } arr
 */
export function createEnhanced(
  rawColor: Color,
  aaa: Color[] | [],
  aa: Color[] | []
): ColorEnhanced {
  const rgb = rawColor.rgb;
  return {
    name: rawColor.name,
    rgb,
    aaa,
    aa,
    getLuminance(): number {
      return luminance(rgb);
    },
    toRGB(): string {
      return toRGBString(rgb);
    },
    toHEX(): string {
      return tinyColor(toRGBString(rgb)).toHexString();
    },
    toHSL(): string {
      return tinyColor(toRGBString(rgb)).toHslString();
    },
    toRGBA(alpha: number): string {
      const color = tinyColor(toRGBString(rgb));
      color.setAlpha(alpha);
      return color.toRgbString();
    },
  };
}

export function createColor(rawColor: ColorProps): ColorExtendedProps {
  const rgb = rawColor.rgb;
  return {
    name: rawColor.name,
    rgb,
    getLuminance(): number {
      return luminance(rgb);
    },
    toRGB(): string {
      return toRGBString(rgb);
    },
    toHEX(): string {
      return tinyColor(toRGBString(rgb)).toHexString();
    },
    toHSL(): string {
      return tinyColor(toRGBString(rgb)).toHslString();
    },
    toRGBA(alpha: number): string {
      const color = tinyColor(toRGBString(rgb));
      color.setAlpha(alpha);
      return color.toRgbString();
    },
  };
}
