import * as Type from '../types';
/**
 * @name computeHash
 * @param { string } string
 * @param { number } length
 * @param { number } index
*/
export function computeHash({s, l, t, i}: Type.ComputeHashProps): number {
  if (i < s.length) {
    return computeHash({s, l, t: t + s.charCodeAt(i), i: i + 1});
  }
  else {
    console.log(t % l, 'this is t');
    return t % l;
  }
}
