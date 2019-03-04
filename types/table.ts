import { colorEnhanced } from './color';
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
  value?: colorEnhanced;
}
