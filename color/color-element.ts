import * as Type from '../types';
export interface ColorElementContext {
  rgb: Type.RGB;
  name?: string;
  aa?: ColorElementContext[];
  aaa?: ColorElementContext[];
}

export function createElement(rgb: Type.RGB, name: string) {
  const aa = [];
  const aaa = [];
  return {
    rgb,
    name,
    aa,
    aaa
  }
}
