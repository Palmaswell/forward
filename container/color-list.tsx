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
  for(let i = colors.length; i >= 0; i--) {
    // Color.search(Type.A11yRatio.aaa, colors[i], )
    console.log('sorted colors', colors[i], '*****', i);
  }

  // const colorTable = colors.map((color, i) => {
  //   const boo = Color.search(
  //     Type.A11yRatio.aaa,
  //     color,
  //     colors,
  //     0,
  //     colors.length - 1
  //   );
  //   console.log(boo, i, color, '*********');
  // });

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
