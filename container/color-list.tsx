import * as React from 'react';
import * as Color from '../color';
import * as Type from '../types';

export function sanitizeColors(colors: Type.Color[]): void | Type.EnhancedColor {
  Color.quickSort(
    colors,
    0,
    Color.palette.length - 1,
    Color.luminance
  );
  const colorTable = colors.map((c, i) => {
    const boo = Color.search(
      Type.A11yRatio.aaa,
      c,
      colors,
      0,
      colors.length - 1
    );
    console.log(boo, i, c, '*********');
  });

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
