import * as React from 'react';
import * as Color from './color';
import * as Type from './types';
import * as HashTbl from './hash-table';

export interface ColorCtxProvider {
  Model: Type.ColorModel;
}

const colorTbl = HashTbl.create(Color.palette.length);

function sanitizeColors(colors: Type.Color[]): Type.colorEnhanced[] {
  Color.sort(colors, Color.luminance);
  const enhancedColors = [];

  for(let i = colors.length - 1; i >= 0; i--) {
    if (i >= (colors.length - 1) / 2) {
      const aaaSearch = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aaa,
        Type.Search.upper
      );
      const aaSearch = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aa,
        Type.Search.upper
      );
      const aaaResult = Array.isArray(aaaSearch)
        ? aaaSearch
        : JSON.parse(JSON.stringify(colors.slice(0, aaaSearch + 1)));
      const aaResult = Array.isArray(aaSearch)
        ? aaSearch
        : JSON.parse(JSON.stringify(colors.slice(0, aaSearch + 1)));

      enhancedColors[i] = Color.createEnhanced(
        colors[i],
        aaaResult,
        aaResult
      );
      colorTbl.set(enhancedColors[i]);
    }
    else {
      const aaaSearch = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aaa
      );
      const aaSearch = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aa,
      );
      const aaaResult = Array.isArray(aaaSearch)
        ? aaaSearch
        : JSON.parse(JSON.stringify(colors.slice(aaaSearch, colors.length)));
      const aaResult = Array.isArray(aaSearch)
        ? aaSearch
        : JSON.parse(JSON.stringify(colors.slice(aaSearch, colors.length)));

      enhancedColors[i] = Color.createEnhanced(
        colors[i],
        aaaResult,
        aaResult
      );
      colorTbl.set(enhancedColors[i]);
    }
  }
  return enhancedColors;
};

export const ColorContext = React.createContext({});

export function ColorContextProvider(props): JSX.Element {
  const colors = sanitizeColors(Color.palette);
  const [activeColor, setActiveColor] = React.useState(colors[0]);
  const [contrastRatio, setContrastRatio] = React.useState(0);
  const Model: Type.ColorModel = {
    colors,
    colorTbl,
    activeColor,
    setActiveColor,
  };
  return (
    <ColorContext.Provider value={{ Model }}>
      {props.children}
    </ColorContext.Provider>
  );
};
