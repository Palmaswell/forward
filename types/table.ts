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
  delete(name: string): void;
}
