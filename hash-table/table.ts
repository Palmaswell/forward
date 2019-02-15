import * as Type from '../types';
import * as Util from '../utils';
/**
 * @name computeHash
 * @param { string } string
 * @param { number } length
 * @param { number } index
*/
export function computeHash({s, l, t = 0, i = 0}: Type.ComputeHashProps): number {
  if (i < s.length) {
    return computeHash({s, l: Util.findPrime(l), t: t + s.charCodeAt(i), i: i + 1});
  }
  return t % l;
}
/**
 * @name create
 * @param { number } s
*/
export function create(s: number): Type.HashTbl {
  return {
    bucketArray: new Array(s),
    set(item) {
      const key = computeHash({s: item.name, l: this.bucketArray.length});
      if (this.bucketArray[key]) {
        return;
      }
      this.bucketArray[key] = item;
    },
    get(name) {
      const key = computeHash({s: name, l: this.bucketArray.length});
      return this.bucketArray[key]
        ? this.bucketArray[key]
        : undefined;
    },
    delete(name) {
      const key = computeHash({s: name, l: this.bucketArray.length});
      if (!this.bucketArray[key]) {
        return;
      }
      this.bucketArray[key] = undefined;
    }
  };
}
