import * as React from 'react';
import * as Component from '../components';
import * as Type from '../types';
import * as Color from '../color';
import { ColorContext, ColorCtxProvider } from '../context';
import tinyColor from 'tinycolor2';
import uuid from 'uuid/v4';

export interface ColorListProps {
  colors: Type.EnhancedColor[];
}

export const ColorList:
  React.FunctionComponent<ColorListProps> = (props): JSX.Element => {
  const { Model } = React.useContext(ColorContext) as ColorCtxProvider;
  console.log(Model.activeColor);
  const handleClick = (color: Type.EnhancedColor): void => {
    Model.setActiveColor(color);
  }
  return (
    <Component.ItemList>
      {
        props.colors.map(color => {
          return (
            <Component.Item
              key={uuid()}
              isActive={false}>
              <Component.Card
                type={Type.ColorTile.secondary}
                name={color.name}
                rgb={Color.toRGBString(color.rgb)}
                hex={`#${tinyColor(Color.toRGBString(color.rgb)).toHex()}`}
                onClick={() => handleClick(color)}>
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
