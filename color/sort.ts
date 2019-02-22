import * as Type from '../types';
import * as Util from '../utils';
/**
 * @name quickSort
 * @param { array } arr
 * @param { number } lo
 * @param { number } hi
 * @param { luminanceCallBack } cb
*/
export function quickSort(
  arr: Type.Color[],
  cb: (sRGB: Type.RGB) => number,
  lo: number,
  hi: number
  ): void {
  if (lo < hi) {
    const pivot = cb(arr[Math.floor((lo + hi) / 2)].rgb);
    const p = partition(arr, lo, hi, pivot, cb);
    quickSort(arr, cb, lo, p.hi);
    quickSort(arr, cb, p.lo, hi);
  }
}

export function sort(
  arr: Type.Color[],
  cb: (sRGB: Type.RGB) => number) {
  return quickSort(arr, cb, 0, arr.length - 1);
}

/**
 * @name partition
 * @param { array } arr
 * @param { number } lo
 * @param { number } hi
 * @param { number } pivot
 * @param { luminanceCallBack } cb
*/
export function partition(
  arr: Type.Color[],
  lo: number,
  hi: number,
  pivot: number,
  cb: (sRGB: Type.RGB) => number): { lo: number, hi: number} {
  if (lo <= hi) {
    if (cb(arr[lo].rgb) < pivot) {
      return partition(arr, lo + 1, hi, pivot, cb);
    }
    else if (cb(arr[hi].rgb) > pivot) {
      return partition(arr, lo, hi - 1, pivot, cb);
    }
    if (lo <= hi) {
      Util.swap(arr, lo, hi);
      return partition(arr, lo + 1, hi - 1, pivot, cb);
    }
  }
  return { lo, hi };
}
