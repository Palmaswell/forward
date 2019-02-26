import * as React from 'react';
import * as Color from '../color';
import * as Hashtbl from '../hash-table';
import * as Type from '../types';

export function sanitizeColors(colors: Type.Color[]): Type.HashTbl {
  Color.sort(colors, Color.luminance);
  const enhancedColors = JSON.parse(JSON.stringify(colors));
  const colorTbl = Hashtbl.create(enhancedColors.length);

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
      colorTbl.set(enhancedColors[i]);
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
      colorTbl.set(enhancedColors[i]);
    }
  }
  return colorTbl;
};

export function ColorList(): JSX.Element {
  const [count, setCount] = React.useState(0);
  const colorTbl = sanitizeColors(Color.palette);

  return (
    <>
    <h1>Hello everyone 👋</h1>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    </>
  );
}
