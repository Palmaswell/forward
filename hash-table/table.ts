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
 * @name createNode
 * @param { Type.EnhancedColor } v
*/
export function createNode(value?: Type.EnhancedColor): Type.Node {
  return {
    value,
    next: null
  }
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
      const node = createNode(item);
      if (this.bucketArray[key]) {
        node.next = item;
      }
      this.bucketArray[key] = node;
    },
    get(item, _curr) {
      const key = computeHash({s: item.name, l: this.bucketArray.length});
      if (!this.bucketArray[key]) {
        return;
      }
      if (this.bucketArray[key].value === item) {
        return this.bucketArray[key].value;
      }
      else if (this.bucketArray[key].next.value === item) {
        return this.bucketArray[key].next.value;
      }
      else {
        return this.get(item, this.bucketArray[key].next.next.value);
      }
    },
    delete(item, _curr) {
      const key = computeHash({s: item.name, l: this.bucketArray.length});
      if (!this.bucketArray[key]) {
        return;
      }
      if (this.bucketArray[key].value === item) {
        this.bucketArray[key] = this.bucketArray[key].next;
      }
      else if (this.bucketArray[key].next) {
        return this.bucketArray[key].next.value === item
          ? this.bucketArray[key].next = this.bucketArray[key].next.next
          : this.delete(item, this.bucketArray[key].next.next);
      }
    }
  };
}
