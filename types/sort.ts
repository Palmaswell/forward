import { Color } from './color';

export interface ColorSwapProps {
  a: Color[];
  lo: number;
  hi: number;
}

export interface QuickSortProps {
  a: number[];
  lo: number;
  hi: number;
}

export interface PartitionProps {
  a: number[];
  lo: number;
  hi: number;
  p: number;
}
