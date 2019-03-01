import { colorEnhanced } from './color';

export interface ComputeHashProps {
  s: string;
  l: number;
  t?: number;
  i?: number;
}

export interface HashTbl {
  bucketArray: colorEnhanced[] | undefined[];
  set(item: colorEnhanced): void;
  get(name: string): colorEnhanced | undefined;
  delete(name: colorEnhanced): void;
}

export interface Node {
  next: colorEnhanced | null;
  value?: colorEnhanced;
}
