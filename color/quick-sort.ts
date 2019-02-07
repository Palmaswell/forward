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

/**
 * @name quickSort
 * @param {array} a
 * @param {low} number
 * @param {high} number
*/
export function quickSort(a: number[], low: number = 0, high: number = a.length - 1): number[] {
  if (low >= high) {
    return a;
  }
  const pivot = a[Math.floor(a.length / 2)];
  return a;
}


/**
 * @name partition
 * @callback predicate
 * @param { array } a
 * @param { predicate } p
 * @param {low} number
 * @param {high} number
 * @param {pivot} number
*/
export function partition(p: (c: any) => boolean, a, low, high, pivot) {
  return a;
}

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
