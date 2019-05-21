import * as Color from './';
import * as HashTbl from '../hash-table';
import { ColorProps, } from './color';
import { createElement, ColorElementContext } from './color-element';
import * as Type from '../types';

export interface ColorManagerContext {
  addElements(colors: ColorProps[]): void;
  getElements(): ColorElementContext[];
  getTable(): Type.HashTbl<ColorElementContext>;
  createHashTbl(colors: ColorProps[]): void;
}

export function createManager(): ColorManagerContext {
  const colors = [];
  let colorTbl;
  return {
    addElements(cols) {
      if (cols.length < 1 ) {
        return;
      }
      const newColors = Array.from(cols);
      Color.sort(newColors, Color.luminance);
      newColors.forEach((c, i: number) => {
        const color = createElement(c.rgb, c.name);
        // if (i >= (newColors.length - 1) / 2) {
        //   color.setAA()
        // }
        colors.push(color);
      });
    },
    getElements() {
      return colors;
    },
    getTable() {
      return colorTbl;
    },
    createHashTbl(cols) {
      if (cols.length < 1) {
        return;
      }
      colorTbl = HashTbl.create(cols.length);
    }
  }
}
