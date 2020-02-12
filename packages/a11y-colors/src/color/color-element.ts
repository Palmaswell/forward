import tinyColor from 'tinycolor2';
import * as Color from '.';
import { A11yRatio, ColorProps, RGB, Search } from './types';

export interface ColorElementContext {
  getName(): string;
  getAA(): ColorProps[];
  getAAA(): ColorProps[];
  getLuminance(): number;
  getRGB(): RGB;
  getRGBString(): string;
  getHEXString(): string;
  getHSLString(): string;
  getRGBAString(alpha: number): string;
  setAA(colors: ColorProps[], dir: Search): void;
  setAAA(colors: ColorProps[], dir: Search): void;
}

export function createElement(rgb: RGB, name: string): ColorElementContext {
  const internalRGB = rgb;
  const internalName = name;
  let aa: ColorProps[] | [];
  let aaa: ColorProps[] | [];
  const handleSlice = (
    colors: ColorProps[],
    idx: number,
    dir: Search
  ): ColorProps[] => {
    switch (dir) {
      case Search.lower:
        return JSON.parse(JSON.stringify(colors.slice(idx, colors.length)));
      case Search.upper:
        return JSON.parse(JSON.stringify(colors.slice(0, idx + 1)));
    }
  };
  const setEnhancedContrast = (
    colors: ColorProps[],
    ratio: A11yRatio,
    dir: Search
  ) => {
    if (!Array.isArray(colors)) {
      return;
    }
    const idx: number | [] = Color.search(
      colors,
      { rgb: rgb, name: name },
      ratio,
      dir
    );
    switch (ratio) {
      case A11yRatio.aa:
        Array.isArray(idx) ? (aa = idx) : (aa = handleSlice(colors, idx, dir));
        break;
      case A11yRatio.aaa:
        Array.isArray(idx)
          ? (aaa = idx)
          : (aaa = handleSlice(colors, idx, dir));
        break;
    }
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
    getLuminance() {
      return Color.luminance(internalRGB);
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
    setAA(colors, dir) {
      setEnhancedContrast(colors, A11yRatio.aa, dir);
    },
    setAAA(colors, dir) {
      setEnhancedContrast(colors, A11yRatio.aaa, dir);
    },
  };
}
