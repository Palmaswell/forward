import { ComputeHashProps, HashTbl } from '../types';
import { findPrime } from '../../utils';
import { ColorEnhanced, ColorExtendedProps } from '../../color/types';

export interface Node {
  next: Node | null;
  value?: ColorEnhanced;
}

/**
 * @name computeHash
 * @param { string } string
 * @param { number } length
 * @param { number } index
*/
export function computeHash({s, l, t = 0, i = 0}: ComputeHashProps): number {
  if (i < s.length) {
    return computeHash({s, l: findPrime(l), t: t + s.charCodeAt(i), i: i + 1});
  }
  return t % l;
}
/**
 * @name createNode
 * @param { colorEnhanced } v
*/
export function createNode(value?: any): Node {
  return {
    value,
    next: null
  }
}

/**
 * @name create
 * @param { number } s
*/
export function create(s: number): HashTbl<ColorExtendedProps> {
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
      const findBucket = (curr: Node, next: Node): Node => {
        if (next) {
          return findBucket(next, next.next as any);
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
      const findItem = (curr: Node, next: Node, name: string) => {
        if (curr.value && curr.value.name === name) {
          return curr.value;
        }
        //@ts-ignore
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
          : this.delete(item);
      }
    }
  };
}
