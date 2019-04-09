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

function lowerSearch<T extends QuickSearch>(
  arr: Array<T>,
  el: T,
  val: number,
  lo: number,
  hi: number): number | [] {
  const mid = Math.floor((lo + hi) / 2);
  const midRatio = contrastRatio(arr[mid].rgb, el.rgb);

  if (midRatio === val) {
    return mid;
  }
  if (midRatio > val && mid - 1 >= 0) {
    return contrastRatio(arr[mid - 1].rgb, el.rgb) < val
      ? mid
      : lowerSearch(arr, el, val, lo, mid);
  }

  if (midRatio < val && mid + 1 < arr.length) {
    return contrastRatio(arr[mid + 1].rgb, el.rgb) > val
      ? mid + 1
      : lowerSearch(arr, el, val, mid, hi);
  }
  return [];
};

function upperSearch<T extends QuickSearch>(
  arr: Array<T>,
  el: T,
  val: number,
  lo: number,
  hi: number): number | [] {
  const mid = Math.floor((lo + hi) / 2);
  const midRatio = contrastRatio(arr[mid].rgb, el.rgb);

  if (midRatio === val) {
    return mid;
  }

  if (midRatio > val && mid + 1 < arr.length) {
    return contrastRatio(arr[mid + 1].rgb, el.rgb) < val
      ? mid
      : upperSearch(arr, el, val, mid, hi);
  }
  if (midRatio < val && mid - 1 >= 0) {
    return contrastRatio(arr[mid - 1].rgb, el.rgb) > val
      ? mid - 1
      : upperSearch(arr, el, val, lo, mid);
  }
  return [];
}

export function search(
  arr:  Type.Color[],
  el: Type.Color,
  val: Type.A11yRatio,
  type?: Type.Search): number | [] {
  if (type === Type.Search.upper) {
    return upperSearch(arr, el, val, 0, arr.length);
  }
  return lowerSearch(arr, el, val, 0, arr.length);
};
