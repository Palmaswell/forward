import { ColorEnhanced, ColorExtendedProps } from '../color/types';

export interface ComputeHashProps {
  s: string;
  l: number;
  t?: number;
  i?: number;
}

export interface HashTbl<T> {
  bucketArray?: T[] | [];
  set(item: T): void;
  get(name: string): T | undefined;
  delete(item: T): void;
}

export interface Node {
  next: Node | null;
  value?: ColorEnhanced;
}

export interface CreateHashFactory {
  mapImpl: (s: number) => HashTbl<ColorExtendedProps>;
}
