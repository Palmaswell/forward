import * as React from 'react';
import * as Component from '../components';
import * as Type from '../types';
import { ColorContext } from '../color-context';
import uuid from 'uuid/v4';

export interface ColorListProps {
  colors: Type.colorEnhanced[];
}

export const ColorList:
  React.FunctionComponent<ColorListProps> = (props): JSX.Element => {
  const { Model } = React.useContext(ColorContext);

  const handleClick = (color: Type.colorEnhanced): void => {
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
                rgb={color.toRGB()}
                hex={`${color.toHEX()}`}
                onClick={() => handleClick(color)}>
              <Component.Tile
                type={Type.ColorTile.secondary}
                bgColor={color.toRGB()}
                copyColor={color.aaa.length > 0 ? color.aaa[color.aaa.length - 1].rgb : Model.colorTbl.get('Black').rgb}
                copy="Aa"/>
              </Component.Card>
            </Component.Item>
          )
        })
      }
    </Component.ItemList>
  );
}
