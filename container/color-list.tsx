import * as React from 'react';
import * as Color from '../color';
import * as Component from '../components';
import * as Type from '../types';

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

export function ColorList(): JSX.Element {
  const enhancedColors = sanitizeColors(Color.palette);
  return (
    <Component.ItemList>
      {
        enhancedColors.map(color => {
          return (
            <Component.Item isActive={true}>
              <Component.Card
                type={Type.ColorTile.secondary}
                rgb="rgb(255, 255, 255)"
                hex={color.name}>
              <Component.Tile
                type={Type.ColorTile.secondary}
                bgColor={color.rgb}
                copyColor={color.aaa.length > 0 ? color.aaa[0].rgb : enhancedColors[0].rgb}
                copy="Aa"/>
              </Component.Card>
            </Component.Item>
          )
        })
      }
    </Component.ItemList>
  );
}
