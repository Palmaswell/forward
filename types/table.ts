import { EnhancedColor } from './color';

export interface ComputeHashProps {
  s: string;
  l: number;
  t?: number;
  i?: number;
}

export interface HashTbl {
  bucketArray: EnhancedColor[] | undefined[];
  set(item: EnhancedColor): void;
  get(name: string): EnhancedColor | undefined;
  delete(item: EnhancedColor, _curr?: EnhancedColor | null): void;
}

export interface Node {
  next: EnhancedColor | null;
  value?: EnhancedColor;
}
