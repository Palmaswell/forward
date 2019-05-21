import tinyColor from 'tinycolor2';
import * as Color from './';
import { ColorProps, RGB } from './color';

export interface ColorElementContext {
  getName(): string;
  getAA(): ColorProps[];
  getAAA(): ColorProps[];
  getRGB(): RGB;
  getRGBString(): string;
  getHEXString(): string;
  getHSLString(): string;
  getRGBAString(alpha: number): string;
  setAA(colors: ColorProps[]): void;
  setAAA(colors: ColorProps[]): void;
}

export function createElement(rgb: RGB, name: string): ColorElementContext {
  const internalRGB = rgb;
  const internalName = name;
  let aa: ColorProps[];
  let aaa: ColorProps[];
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
    setAA(colors: ColorProps[]) {
      aa = colors;
    },
    setAAA(colors: ColorProps[]) {
      aaa = colors;
    }
  }
}
