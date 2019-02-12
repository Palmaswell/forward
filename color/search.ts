import * as Type from '../types';
import * as Color from './';
/**
 * @name search
 * @param { number } t
 * @param { array } a
 */

 export function search({ t, e, a, l, h }: Type.SearchProps): number | null {
  const m = Math.floor((l + h) / 2);
  const cr = Color.contrastRatio(a[m].rgb, e.rgb);
  if (Math.round(cr) === t) {
    return m;
  }
  if (l < h) {
    if (cr < t) {
      search({t, e, a, l: l + 1, h});
    }
    else if (cr > t) {
      search({t, e, a, l, h: h - 1});
    }
    return m;
   }
 }
