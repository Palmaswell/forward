import * as Type from '../types';
import * as Color from './';
/**
 * @name search
 * @description binary search that finds the position
 * of a target value within a sorted array
 * @param { number } ratio
 * @param { array } arr
 * @param { number } lo
 * @param { number } hi
 */
 export function quickSearch(
   ratio: Type.A11yRatio,
   el: Type.Color,
   arr: Type.Color[],
   lo: number,
   hi: number
 ): number | undefined {
  const mid = Math.floor((lo + hi) / 2);
  const elLux = Color.luminance(el.rgb);

  const cr = Color.contrastRatio(arr[mid].rgb, el.rgb);
  if (Math.round(cr) === ratio) {
    return mid;
  } else {
    if (lo < hi) {
      if (cr < ratio) {
        elLux <= 0.5
          ? lo++
          : lo--;
        return quickSearch(ratio, el, arr, lo, hi);
      }
      else if (cr > ratio) {
        elLux <= 0.5
          ? hi--
          : hi++;
        return quickSearch(ratio, el, arr, lo, hi);
      }
    }
  }
 }

 export function search(
  ratio: Type.A11yRatio,
  el: Type.Color,
  arr: Type.Color[]) {
    return quickSearch(ratio, el, arr, 0, arr.length - 1);
 };
