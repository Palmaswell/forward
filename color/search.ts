import * as Type from '../types';
import { contrastRatio } from './color';
/**
 * @name search
 * @description binary search that finds the position
 * of a target value within a sorted array
 * @param { array } arr
 * @param { Color } el
 * @param { number } val
 * @param { string } type
 * @param { number } lo
 * @param { number } hi
 */

interface QuickSearch {
  rgb: Type.RGB;
}

export function binarySearch<T extends QuickSearch>(
  arr: Array<T>,
  el: T,
  val: number,
  lo: number,
  hi: number,
  type: Type.Search): number | [] {
  const mid = Math.floor((lo + hi) / 2);
  if (contrastRatio(arr[mid].rgb, el.rgb) === val) {
    return mid;
  }
  if (type === Type.Search.upper) {
    return high(arr, el, val, 0, arr.length);
  }
  return low(arr, el, val, 0, arr.length);
}

export function low<T extends QuickSearch>(
  arr: Array<T>,
  el: T,
  val: number,
  lo: number,
  hi: number): number | [] {
    const mid = Math.floor((lo + hi) / 2);
    const currentRatio = contrastRatio(arr[mid].rgb, el.rgb);
    if (currentRatio > val && mid - 1 >= 0) {
      return contrastRatio(arr[mid - 1].rgb, el.rgb) < val
        ? mid
        : low(arr, el, val, lo, mid);
    }

    if (currentRatio < val && mid + 1 < arr.length) {
      return contrastRatio(arr[mid + 1].rgb, el.rgb) > val
        ? mid + 1
        : low(arr, el, val, mid, hi);
    }
    return [];
}

export function high<T extends QuickSearch>(
  arr: Array<T>,
  el: T,
  val: number,
  lo: number,
  hi: number): number | [] {
  const mid = Math.floor((lo + hi) / 2);
  const currentRatio = contrastRatio(arr[mid].rgb, el.rgb);
  if (currentRatio > val && mid + 1 < arr.length) {
    return contrastRatio(arr[mid + 1].rgb, el.rgb) < val
      ? mid
      : high(arr, el, val, mid, hi);
  }
  if (currentRatio < val && mid - 1 >= 0) {
    return contrastRatio(arr[mid - 1].rgb, el.rgb) > val
      ? mid - 1
      : high(arr, el, val, lo, mid);
  }
  return [];
}

export function search(
  arr:  Type.Color[],
  el: Type.Color,
  val: Type.A11yRatio,
  type?: Type.Search): number | [] {
  const defaultType = type || Type.Search.lower;
  return binarySearch(arr, el, val, 0, arr.length, defaultType);
};
