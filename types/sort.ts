import { Color, RGB } from './color';
export interface QuickColorSortProps {
  a: Color[];
  lo: number;
  hi: number;
  cb: (sRGB: RGB) => number;
}

export interface ColorPartitionProps {
  a: Color[];
  lo: number;
  hi: number;
  p: number;
  cb: (sRGB: RGB) => number;
}

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
