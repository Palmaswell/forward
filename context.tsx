import * as React from 'react';
import * as Color from './color';
import * as Type from './types';

export interface ModelProps {
  colors: Type.EnhancedColor[]
}

export interface CtxProvider {
  model: ModelProps;
}

export function sanitizeColors(colors: Type.Color[]): Type.EnhancedColor[] {
  Color.sort(colors, Color.luminance);
  const enhancedColors = JSON.parse(JSON.stringify(colors));

  for(let i = colors.length - 1; i >= 0; i--) {
    if (i >= (colors.length - 1) / 2) {
      const aaaIndex = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aaa,
        Type.Search.backward
      );
      const aaIndex = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aa,
        Type.Search.backward
      );
      enhancedColors[i].aaa = aaaIndex === null
      ? []
      : JSON.parse(JSON.stringify(colors.slice(0, aaaIndex + 1)));
      enhancedColors[i].aa = aaIndex === null
      ? []
      : JSON.parse(JSON.stringify(colors.slice(0, aaIndex + 1)));
    }
    else {
      const aaaIndex = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aaa
      );
      const aaIndex = Color.search(
        colors,
        colors[i],
        Type.A11yRatio.aa,
      );
      enhancedColors[i].aaa = aaaIndex === null
      ? []
      : JSON.parse(JSON.stringify(colors.slice(-aaaIndex)));
      enhancedColors[i].aa = aaIndex === null
      ? []
      : JSON.parse(JSON.stringify(colors.slice(-aaIndex)));
    }
  }
  return enhancedColors;
};

export const ColorContext = React.createContext({});

export function Provider(props): JSX.Element {
  return (
    <ColorContext.Provider value={{
      model: {
        colors: sanitizeColors(Color.palette)
      }
    }}>
      {props.children}
    </ColorContext.Provider>
  );
};

export const Consumer = ColorContext.Consumer;
