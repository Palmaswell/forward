import * as Type from '../types'
/**
 * @name Quicksort
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

 /**
 * @name quickSort
 * @param { array } a
 * @param { number } low
 * @param { number } high
*/
export function quickSort({ a, lo, hi }: Type.QuickSortProps): void {
  if (lo < hi) {
    const pivot = a[Math.floor((lo + hi) / 2)]
    const p = partition({a, lo, hi, p: pivot})
    quickSort({a, lo, hi: p.hi});
    quickSort({a, lo: p.lo, hi});
  }
};

export function quickSortImp({ a, lo, hi }: Type.QuickSortProps): void {
  if (lo < hi) {
    const pivot = a[Math.floor((lo + hi) / 2)];
    let i = lo;
    let j = hi;
    while(i <= j) {
      while(a[i] < pivot) {
        i++;
      }
      while(a[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(a, i, j);
        i++;
        j--;
      }
    };
    quickSortImp({a, lo, hi: j});
    quickSortImp({a, lo: i, hi});
  }
};

/**
 * @name partition
 * @param { array } a
 * @param { number } lo
 * @param { number } hi
 * @param { number } p
*/
export function partition({ a, lo, hi, p }: Type.PartitionProps): { lo: number, hi: number} {
  if (lo <= hi) {
    if (a[lo] < p) {
      return partition({
        a,
        lo: lo + 1,
        hi,
        p,
      });
    }
    else if (a[hi] > p) {
      return partition({
        a,
        lo,
        hi: hi - 1,
        p
      })
    }
    if (lo <= hi) {
      swap(a, lo, hi);
      return partition({
        a,
        lo: lo + 1,
        hi: hi - 1,
        p
      })
    }
  }
  return { lo, hi };
};

export function partitionImp({ a, lo, hi, p }: Type.PartitionProps): { lo: number, hi: number} {
  const pivot = p;
  let i = lo;
  let j = hi;
  while(i <= j) {
    while(a[i] < pivot) {
      i++;
    }
    while(a[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(a, i, j);
      i++;
      j--;
    }
  };
  return { lo: i, hi: j};
}

/**
 * @name swap
 * @param { array } a
 * @param { number } low
 * @param { number } high
 * @description swaps two values in an array
 */
export const swap = (a: Type.Color[] | number[], low, high): void => {
  [a[low], a[high]] = [a[high], a[low]];
}

