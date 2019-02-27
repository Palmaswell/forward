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
  const prev = mid - 1;
  const next = mid + 1;
  const midRatio = contrastRatio(arr[mid].rgb, el.rgb);
  if (lo < hi) {
    if (midRatio > val && prev >= 0) {
      if (contrastRatio(arr[prev].rgb, el.rgb) < val) {
        return mid;
      }
      return lowerSearch(arr, el, val, lo, mid);
    }
    if (midRatio < val && next < arr.length) {
      if (contrastRatio(arr[next].rgb, el.rgb) > val) {
        return next;
      }
      return lowerSearch(arr, el, val, mid, hi)
    }
    if (mid === val) {
      return mid;
    }
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
  const prev = mid - 1;
  const next = mid + 1;
  const midRatio = contrastRatio(arr[mid].rgb, el.rgb);
  if (lo < hi) {
    if (midRatio > val && next < arr.length) {
      if (contrastRatio(arr[next].rgb, el.rgb) < val) {
        return mid;
      }
      return upperSearch(arr, el, val, mid, hi);
    }
    if (midRatio < val && prev >= 0) {
      if (contrastRatio(arr[prev].rgb, el.rgb) > val) {
        return prev;
      }
      return upperSearch(arr, el, val, lo, mid);
    }
    if (mid === val) {
      return mid;
    }
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
