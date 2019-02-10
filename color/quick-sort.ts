/**
 * Quicksort, also known as   partition-exchange sort,   uses these steps.
 * Choose any element of the array to be the pivot.
 * Divide all other elements (except the pivot) into two partitions.
 * All elements less than the pivot must be in the first partition.
 * All elements greater than the pivot must be in the second partition.
 * Use recursion to sort both partitions.
 * Join the first sorted partition, the pivot, and the second sorted partition.
 *
 * Average time of   O(n log n)
*/

/** A better quicksort algorithm works in place,
 * by swapping elements within the array,
 * to avoid the memory allocation of more arrays.
 */

export interface QuickSortProps {
  a: number[]
  lo: number;
  hi: number;
}

/**
 * @name quickSort
 * @param { array } a
 * @param { number } low
 * @param { number } high
*/
export function quickSort({ a, lo, hi}: QuickSortProps): void {
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
    quickSort({a, lo, hi: j});
    quickSort({a, lo: i, hi});
  }
}

// export function partition({a}): number {

// }


/**
 * @name partition
 * @callback predicate
 * @param { array } a
 * @param { predicate } p
 * @param { number } low
 * @param { number } high
*/




/**
 * @name swap
 * @param { array } a
 * @param { number } low
 * @param { number } high
 * @description swaps two values in an array
 */
export function swap(a: number[], low, high): number[] {
  [a[low], a[high]] = [a[high], a[low]];
  return a;
}

