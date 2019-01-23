export enum RGBAverage {
  r = 0.2126,
  g = 0.7152,
  b = 0.0722,
}
/**
 * @name luminance
 * @type { number }
 * @description Relative luminance in colorimetric spaces
 * L = 0.2126 * R + 0.7152 * G + 0.0722 * B
 * where R, G and B are defined as:
 * if R sRGB <= 0.03928 then R = R sRGB /12.92 else R = ((R sRGB +0.055)/1.055) ^ 2.4
 * if G sRGB <= 0.03928 then G = G sRGB /12.92 else G = ((G sRGB +0.055)/1.055) ^ 2.4
 * if B sRGB <= 0.03928 then B = B sRGB /12.92 else B = ((B sRGB +0.055)/1.055) ^ 2.4
 *
 */
const avgCond = (n: number): boolean => n <= 0.03928;
const pct = (n: number): number => n / 255;
export function luminance(sRGB: number[]): number {
  const avgComponent = (component: number) => (a: RGBAverage): number => {
    const n = avgCond(pct(component))
        ? pct(component) / 12.92
        : ((pct(component) + 0.055) / 1.055 ) ** 2.4;
    return n * a
  }
  return sRGB.reduce((acc, component, i) => (
    i === 1
      ? avgComponent(acc)(RGBAverage.r) + avgComponent(component)(RGBAverage.g)
      : avgComponent(component)(RGBAverage.b) + acc
  ));
}
/**
 * @name contrastRatio
 * @type { number }
 * @description Calculate the contrast ratio
 * (L1 + 0.05) / (L2 + 0.05)
 */
export function contrast(sRGB: number[], sRGB2: number[]): number {
  return +((luminance(sRGB) + 0.05) / (luminance(sRGB2) + 0.05)).toFixed(2);
}
