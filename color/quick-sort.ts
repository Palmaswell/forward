import * as Type from '../types';
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
*/
export function quickSort(a: number[]): number[] {
  return a.length > 1 ? (() => {
    const
        h = a[0],
        [less, more] = partition(x => x <= h, a.slice(1));
        console.log(partition(x => x <= h, a.slice(1)));
    return [].concat.apply(
        [], [quickSort(less), h, quickSort(more)]
    );
})() : a;
}

/**
 * @name partition
 * @callback predicate
 * @param { array } a
 * @param { predicate } p
*/
export function partition(p: (n: number) => boolean, a: number[]): any {
  return a.reduce((a, x) =>
  p(x) ? [a[0].concat(x), a[1]] : [a[0], a[1].concat(x)], [
      [],
      []
  ]);

}

