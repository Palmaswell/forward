import * as React from 'react';
import * as Color from '../color';
import * as Type from '../types';

export function sanitizeColors(colors: Type.Color[]): void | Type.EnhancedColor {
  Color.sort(colors, Color.luminance);
  for(let i = colors.length - 1; i >= 0; i--) {
    if (i >= (colors.length - 1) / 2) {
      (colors[i] as Type.EnhancedColor).aaa = colors.slice(
        Color.search(
          colors,
          colors[i],
          Type.A11yRatio.aaa,
          Type.Search.backward
        )
      );
      (colors[i] as Type.EnhancedColor).aa = colors.slice(
        Color.search(
          colors,
          colors[i],
          Type.A11yRatio.aa,
          Type.Search.backward
        )
      )
    }
    else if (i <= (colors.length - 1) / 2) {
      (colors[i] as Type.EnhancedColor).aaa = colors.slice(
        Color.search(
          colors,
          colors[i],
          Type.A11yRatio.aaa
        )
      );
      (colors[i] as Type.EnhancedColor).aa = colors.slice(
        Color.search(
          colors,
          colors[i],
          Type.A11yRatio.aa
        )
      )
    }
  }
}


export function ColorList(): JSX.Element {
  const [count, setCount] = React.useState(0);
  sanitizeColors(Color.palette);

  return (
    <>
    <h1>Hello everyone 👋</h1>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
    </>
  );
}
