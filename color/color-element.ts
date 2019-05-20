import tinyColor from 'tinycolor2';
import * as Color from './';
import * as Type from '../types';

export interface ColorElementContext {
  getName(): string;
  getAA(): Type.Color[];
  getAAA(): Type.Color[];
  getRGB(): Type.RGB;
  getRGBString(): string;
  getHEXString(): string;
  getHSLString(): string;
  getRGBAString(alpha: number): string;
  setAA(colors: Type.Color[]): void;
  setAAA(colors: Type.Color[]): void;
}

export function createElement(rgb: Type.RGB, name: string): ColorElementContext {
  const internalRGB = rgb;
  const internalName = name;
  let aa: Type.Color[];
  let aaa: Type.Color[];
  return {
    getName() {
      return internalName;
    },
    getRGB() {
      return internalRGB;
    },
    getAA() {
      return aa;
    },
    getAAA() {
      return aaa;
    },
    getRGBString() {
      return Color.toRGBString(internalRGB);
    },
    getHEXString() {
      return tinyColor(Color.toRGBString(internalRGB)).toHexString();
    },
    getHSLString() {
      return tinyColor(Color.toRGBString(internalRGB)).toHslString();
    },
    getRGBAString(alpha: number) {
      const color = tinyColor(Color.toRGBString(internalRGB));
      color.setAlpha(alpha);
      return color.toRgbString();
    },
    setAA(colors: Type.Color[]) {
      aa = colors;
    },
    setAAA(colors: Type.Color[]) {
      aaa = colors;
    }
  }
}
