import * as Type from '../../../app/types';
/**
 * @name quickSort
 * @param { array } arr
 * @param { number } lo
 * @param { number } hi
 * @param { luminanceCallBack } cb
 * @description Quicksort is a fast sorting algorithm
 * that takes the dived and conquer approach to sorting list.
 *
 * Running time is an important thing to consider when selecting
 * a sorting algorithm since efficiency is often thought on terms
 * of speed (runtime).
 *
 * Best case run time O(n log n)
 * Avarage case run time O(n log n)
 * Worst case run time O(n_2)
*/


/**
 * A better quicksort algorithms works in place,
 * by swapping elements within the array,
 * to avoid the memory allocation of more arrays.
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
      swap(arr, lo, hi);
      return partition(arr, lo + 1, hi - 1, pivot, cb);
    }
  }
  return { lo, hi };
}

/**
 * @name swap
 * @param { array } a
 * @param { number } low
 * @param { number } high
 * @description swaps two values in an array
 */
export const swap = (a: Type.Color[] | number[], low: number, high: number): void => {
  [a[low], a[high]] = [a[high], a[low]];
}
