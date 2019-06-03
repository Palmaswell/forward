import * as Color from './';
import { ColorProps, Search, } from './color';
import { createElement, ColorElementContext } from './color-element';

export interface ColorManagerContext {
  addElements(colors: ColorProps[]): void;
  getActiveColor(): ColorElementContext;
  getElements(): ColorElementContext[];
  removeElements(colors: ColorElementContext[]): void;
  setActiveColor(color: ColorElementContext);
}

export function createManager(): ColorManagerContext {
  const colors = [];
  let activeColor;
  return {
    addElements(cols) {
      if (cols.length < 1 ) {
        return;
      }
      const newColors = Array.from(cols);
      Color.sort(newColors, Color.luminance);
      newColors.forEach((c, i: number) => {
        const color = createElement(c.rgb, c.name);
        if (i >= (newColors.length - 1) / 2) {
          color.setAA(newColors, Search.upper);
          color.setAAA(newColors, Search.upper);
        } else {
          color.setAA(newColors, Search.lower);
          color.setAAA(newColors, Search.lower);
        }
        colors.push(color);
        if (i === 0) {
          activeColor = color;
        }
      });
    },
    getActiveColor() {
      return activeColor;
    },
    getElements() {
      return colors;
    },
    removeElements() {
      if (colors.length < 1) {
        return;
      }
      colors.splice(0);
    },
    setActiveColor(color) {
      if (colors.length < 1) {
        return;
      }
      activeColor = colors.find(c => c.getName() === color.getName());
    }
  }
}
