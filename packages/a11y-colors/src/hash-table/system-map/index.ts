import { HashTbl } from '../types';
import { ColorExtendedProps } from '../../color/types';

/**
 * @name create
 * @param { number } s
 */
export function create(): HashTbl<ColorExtendedProps> {
  const map = new Map();
  return {
    set(item) {
      map.set(item.name, item);
    },
    get(name) {
      return map.get(name);
    },
    delete(item) {
      map.delete(item.name);
    },
  };
}
