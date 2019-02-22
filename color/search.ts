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
export function quickSearch(
  arr: Type.Color[],
  el: Type.Color,
  val: Type.A11yRatio,
  type: Type.Search,
  lo: number,
  hi: number): number | null {
  const mid = Math.floor((lo + hi) / 2);
  const prev = mid - 1;
  const next = mid + 1;
  const midRatio = contrastRatio(arr[mid].rgb, el.rgb);
  if (lo < hi) {
    switch (type) {
      case Type.Search.backward:
        if (midRatio > val) {
          if (next <= arr.length - 1) {
            return contrastRatio(arr[next].rgb, el.rgb) < val
              ? mid
              : quickSearch(arr, el, val, type, mid, hi);
          }
        }
        else if (midRatio < val) {
          if (prev >= 0) {
            return contrastRatio(arr[prev].rgb, el.rgb) > val
              ? prev
              : quickSearch(arr, el, val, type, lo, mid);
          }
        }
        else {
          return mid;
        }
      case Type.Search.forward:
      default:
        if (midRatio > val) {
          if (prev >= 0) {
            return contrastRatio(arr[prev].rgb, el.rgb) < val
              ? mid
              : quickSearch(arr, el, val, type, lo, mid);
          }
        }
        else if (midRatio < val) {
          if (next <= arr.length - 1) {
            return contrastRatio(arr[next].rgb, el.rgb) > val
              ? next
              : quickSearch(arr, el, val, type, mid, hi);
          }
        }
        else {
          return mid;
        }
    }
  }
  return null;
};

export function search(
  arr:  Type.Color[],
  el: Type.Color,
  val: Type.A11yRatio,
  type?: Type.Search): number | null {

  return quickSearch(arr, el, val, type || Type.Search.forward, 0, arr.length);
};
