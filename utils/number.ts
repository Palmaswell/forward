/**
 * @name isPrime
 * @param { number } n
 * @param { number } p
 * @param { number } i
*/
export function isPrime(n: number, p = 2, i = 2): boolean {
  if (i <= n - 2) {
    return isPrime(n, p * (i + 1), i + 1 );
  }
  return p % n !== 0;
};

/**
 * @name findPrime
 * @param { number } n
*/
export function findPrime(n: number): number {
  return isPrime(n) ? n : findPrime(n + 1);
};

/**
 * @name search
 * @description binary search that finds the position
 * of a target value within a sorted array
 * @param { array } arr
 * @param { number } val
 * @param { number } lo
 * @param { number } hi
 */
export function quickSearch(
  arr: number[],
  val: number,
  lo: number,
  hi: number): number | null {
  const mid = Math.floor((lo + hi) / 2);
  if (lo < hi) {
    if (arr[mid] > val) {
      if (arr[mid - 1] < val) {
        return mid;
      } else {
        return quickSearch(arr, val, lo, mid);
      }
    }
    else if (arr[mid] < val) {
      if (arr[mid] + 1 > val) {
        return mid + 1;
      } else {
        return quickSearch(arr, val, mid, hi);
      }
    }
    else {
      return mid;
    }
  }
  return null;
};

export function search(arr: number[], val: number): number | null {
  return quickSearch(arr, val, 0, arr.length);
};
