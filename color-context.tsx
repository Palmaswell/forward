import * as React from 'react';
import * as Color from './color';
import * as Type from './types';

export interface ColorModel {
  colors: Type.EnhancedColor[];
  activeColor: Type.EnhancedColor | {};
  setActiveColor: (color: Type.EnhancedColor) => void;
}

export interface ColorCtxProvider {
  Model: ColorModel;
}

export function sanitizeColors(colors: Type.Color[]): Type.EnhancedColor[] {
  Color.sort(colors, Color.luminance);
  const enhancedColors = JSON.parse(JSON.stringify(colors));

  for(let i = colors.length - 1; i >= 0; i--) {
    if (i >= (colors.length - 1) / 2) {
      const aaaResult = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aaa,
        Type.Search.upper
      );
      const aaResult = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aa,
        Type.Search.upper
      );
      enhancedColors[i].aaa = Array.isArray(aaaResult)
        ? aaaResult
        : JSON.parse(JSON.stringify(colors.slice(0, aaaResult + 1)));
      enhancedColors[i].aa = Array.isArray(aaResult)
        ? aaResult
        : JSON.parse(JSON.stringify(colors.slice(0, aaResult + 1)));
    }
    else {
      const aaaResult = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aaa
      );
      const aaResult = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aa,
      );
      enhancedColors[i].aaa = Array.isArray(aaaResult)
      ? aaaResult
      : JSON.parse(JSON.stringify(colors.slice(-aaaResult)));
      enhancedColors[i].aa = Array.isArray(aaResult)
      ? aaResult
      : JSON.parse(JSON.stringify(colors.slice(-aaResult)));
    }
  }
  return enhancedColors;
};

export const ColorContext = React.createContext({});

export function ColorContextProvider(props): JSX.Element {
  const [activeColor, setActiveColor] = React.useState({});
  return (
    <ColorContext.Provider value={{
      Model: {
        colors: sanitizeColors(Color.palette),
        activeColor,
        setActiveColor
      }
    }}>
      {props.children}
    </ColorContext.Provider>
  );
};
