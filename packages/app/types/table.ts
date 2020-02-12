import { colorEnhanced } from './color';
import { ColorExtendedProps } from '../../a11y-colors/src/color';
export interface ComputeHashProps {
  s: string;
  l: number;
  t?: number;
  i?: number;
}

export interface HashTbl<T> {
  set(item: T): void;
  get(name: string): T | undefined;
  delete(item: T): void;
}

export interface Node {
  next: Node | null;
  value?: colorEnhanced;
}

export interface CreateHashFactory {
  mapImpl: (s: number) => HashTbl<ColorExtendedProps>;
}
