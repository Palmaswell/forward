import * as Type from '../types';
import * as Util from '../utils';
/**
 * @name quickSort
 * @param { array } a
 * @param { number } low
 * @param { number } high
 * @param { string } key
 * @param { luminanceCallBack } cb
*/
export function quickSort({ a, lo, hi, cb }: Type.QuickColorSortProps): void {
  if (lo < hi) {
    const pivot = cb(a[Math.floor((lo + hi) / 2)].rgb);
    const p = partition({ a, lo, hi, p: pivot, cb});
    quickSort({ a, lo, hi: p.hi, cb});
    quickSort({ a, lo: p.lo, hi, cb });
  }
}

/**
 * @name partition
 * @param { array } a
 * @param { number } lo
 * @param { number } hi
 * @param { number } p
 * @param { luminanceCallBack } cb
*/

export function partition({ a, lo, hi, p, cb }: Type.ColorPartitionProps): { lo: number, hi: number} {
  if (lo <= hi) {
    if (cb(a[lo].rgb) < p) {
      return partition({ a, lo: lo + 1, hi, p, cb});
    }
    else if (cb(a[hi].rgb) > p) {
      return partition({ a, lo, hi: hi - 1, p, cb});
    }
    if (lo <= hi) {
      Util.swap(a, lo, hi);
      return partition({ a, lo: lo + 1, hi: hi - 1, p, cb});
    }
  }
  return { lo, hi };
}
