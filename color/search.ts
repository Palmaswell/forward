import * as Type from '../types';
import * as Color from './';
/**
 * @name search
 * @description binary search that finds the position
 * of a target value within a sorted array
 * @param { number } ratio
 * @param { array } arr
 * @param { number } lo
 * @param { number } hi
 */

 export function search(props: Type.SearchProps): number | null {
  const mid = Math.floor((props.lo + props.hi) / 2);
  const elLux = Color.luminance(props.el.rgb);

  const cr = Color.contrastRatio(props.arr[mid].rgb, props.el.rgb);
  if (Math.round(cr) === props.ratio) {
    return mid;
  }
  if (props.lo < props.hi) {
    if (cr < props.ratio) {
      elLux <= 0.5
        ? props.lo++
        : props.lo--;
    }
    else if (cr > props.ratio) {
      elLux <= 0.5
        ? props.hi--
        : props.hi++;
    }
    return search(props);
  }
 }
