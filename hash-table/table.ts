import * as Type from '../types';
import * as Util from '../utils';
/**
 * @name computeHash
 * @param { string } string
 * @param { number } length
 * @param { number } index
*/
export function computeHash({s, l, t = 0, i = 0}: Type.ComputeHashProps): number {
  const h = Util.findPrime(l);
  if (i < s.length) {
    return computeHash({s, l: h, t: t + s.charCodeAt(i), i: i + 1});
  }
  return t % h;
}
