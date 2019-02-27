import * as React from 'react';
import * as Component from '../components';
import * as Type from '../types';
import * as Util from '../utils';
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
                rgb={Util.toRGBString(color.rgb)}
                hex={tinyColor(Util.toRGBString(color.rgb)).toHex()}>
              <Component.Tile
                type={Type.ColorTile.secondary}
                bgColor={color.rgb}
                copyColor={color.aaa.length > 0 ? color.aaa[0].rgb : props.colors[0].rgb}
                copy="Aa"/>
              </Component.Card>
            </Component.Item>
          )
        })
      }
    </Component.ItemList>
  );
}
