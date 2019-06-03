import * as Type from '../types';
import * as Util from '../utils';
import { ColorExtendedProps } from '../color';
export interface ComputeHashProps {
  s: string;
  l: number;
  t?: number;
  i?: number;
}

export interface HashTbl<T> {
  bucketArray: T[] | undefined[];
  set(item: T): void;
  get(name: string): T | undefined;
  delete(name: T): void;
}

export interface Node {
  next: Node | null;
  value?: Type.colorEnhanced;
}

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
 * @param { Type.colorEnhanced } v
*/
export function createNode(value?: any): Type.Node {
  return {
    value,
    next: null
  }
}

/**
 * @name create
 * @param { number } s
*/
export function create(s: number): Type.HashTbl<ColorExtendedProps> {
  const bucket = new Array(s);
  return {
    bucketArray: bucket,
    set(item) {
      const key = computeHash({ s: item.name, l: bucket.length });

      const node = createNode(item);
      if (!bucket[key]) {
        bucket[key] = node;
        return;
      }
      const findBucket = (curr: Type.Node, next: Type.Node): Type.Node => {
        if (next) {
          return findBucket(next, next.next);
        }
        return curr;
      }
      const freeBucket = findBucket(bucket[key], bucket[key].next);
      freeBucket.next = node;
    },
    get(name) {
      const key = computeHash({ s: name, l: bucket.length });
      if (!bucket[key]) {
        return;
      }
      if (bucket[key].name === name) {
        return bucket[key].value;
      }
      const findItem = (curr: Type.Node, next: Type.Node, name: string) => {
        if (curr.value.name === name) {
          return curr.value;
        }
        return findItem(next, next.next, name);
      }
      return findItem(bucket[key], bucket[key].next, name);
    },
    delete(item) {
      const key = computeHash({s: item.name, l: bucket.length});
      if (!bucket[key]) {
        return;
      }
      if (bucket[key].value === item) {
        bucket[key] = bucket[key].next;
      }
      else if (bucket[key].next) {
        return bucket[key].next.value === item
          ? bucket[key].next = bucket[key].next.next
          : this.delete(item, bucket[key].next.next);
      }
    }
  };
}
