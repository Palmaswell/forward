import tinyColor from 'tinycolor2';
import * as Color from './';
import { A11yRatio, ColorProps, RGB } from './color';

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
  const aa: ColorProps[] | [] = [];
  const aaa: ColorProps[] | [] = [];
  const setEnhancedContrast = (colors: ColorProps[], levelArr, ratio: A11yRatio) => {
    if (!Array.isArray(colors)) {
      return;
    }
    const idx: number | []  = Color.search(
      colors,
      { rgb: internalRGB, name: internalName },
      ratio
    );

    Array.isArray(idx)
      ? levelArr.concat(idx)
      : levelArr.concat(JSON.parse(JSON.stringify(colors.slice(idx))));

  };

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
    getRGBAString(alpha) {
      const color = tinyColor(Color.toRGBString(internalRGB));
      color.setAlpha(alpha);
      return color.toRgbString();
    },
    setAA(colors) {
      setEnhancedContrast(colors, aa, A11yRatio.aa);
    },
    setAAA(colors) {
      setEnhancedContrast(colors, aaa, A11yRatio.aaa);
    }
  }
}
