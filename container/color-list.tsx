import * as React from 'react';
import * as Component from '../components';
import * as Type from '../types';
import * as Color from '../color';
import tinyColor from 'tinycolor2';

export interface ColorListProps {
  colors: Type.EnhancedColor[];
}

export const ColorList:
  React.FunctionComponent<ColorListProps> = (props): JSX.Element => {
  return (
    <Component.ItemList>
      {
        props.colors.map(color => {
          return (
            <Component.Item isActive={false}>
              <Component.Card
                type={Type.ColorTile.secondary}
                name={color.name}
                rgb={Color.toRGBString(color.rgb)}
                hex={`#${tinyColor(Color.toRGBString(color.rgb)).toHex()}`}
                onClick={(e) => console.log(e, 'in the component')}>
              <Component.Tile
                type={Type.ColorTile.secondary}
                bgColor={color.rgb}
                copyColor={color.aaa.length > 0 ? color.aaa[color.aaa.length - 1].rgb : Component.Color.black}
                copy="Aa"/>
              </Component.Card>
            </Component.Item>
          )
        })
      }
    </Component.ItemList>
  );
}
