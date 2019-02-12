import * as Type from '../types';
export function create(a: Type.Color[]): Type.EnhancedColor[] {
  return a.map((c: Type.Color): Type.EnhancedColor  => {
    (c as Type.EnhancedColor).aa = new Map();
    (c as Type.EnhancedColor).aaa = new Map();
    return c as Type.EnhancedColor;
  });
}
