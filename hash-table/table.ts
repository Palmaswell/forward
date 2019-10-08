import * as Type from '../types';
import * as Util from '../utils';
import { ColorExtendedProps } from '../color';


export interface HashTbl<T> {
  set(item: T): void;
  get(name: string): T | undefined;
  delete(name: T): void;
}


/**
 * @name create
*/
export function create(): Type.HashTbl<ColorExtendedProps> {
  const _map = new Map();
  return {
    set(item) {
      _map.set(item.name, item);
    },
    get(name) {
     return _map.get(name);
    },
    delete(item) {
      _map.delete(item.name);
    }
  };
}
