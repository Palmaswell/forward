export interface QuickSortProps {
  a: number[];
  lo: number;
  hi: number;
}

export interface QuickSortColorProps {
  a: number[];
  lo: number;
  hi: number;
  key: string;
  cb: (sRGB: number[]) => number;
}

export interface PartitionProps {
  a: number[];
  lo: number;
  hi: number;
  p: number;
}
