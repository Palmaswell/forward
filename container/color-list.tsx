import * as React from 'react';
import * as Color from '../color';
import * as Component from '../components';
import * as Type from '../types';
import { ColorContext } from '../color-context';
import uuid from 'uuid/v4';

export interface ColorListProps {
  colors: Type.colorEnhanced[];
  type?: Type.ColorList;
}

export const ColorList:
  React.FunctionComponent<ColorListProps> = (props): JSX.Element => {
  const { Model } = React.useContext(ColorContext);

  const handleClick = (color: Type.colorEnhanced): void => {
    Model.setActiveColor(color);
  }
  const handleCopyColor = (color: Type.colorEnhanced): Type.RGB => {
    if (color.aaa && color.aaa.length > 0) {
      const i = Math.floor(color.aaa.length / 2);

      return color.aaa[i].rgb;
    }
    return Model.colorTbl.get('Black').rgb;
  }
  return (
    <Component.ItemList type={props.type}>
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
                hex={`${Color.toHEX(color.rgb)}`}
                onClick={() => handleClick(color)}>
              <Component.Tile
                type={Type.ColorTile.secondary}
                bgColor={Color.toRGBString(color.rgb)}
                copyColor={handleCopyColor(color)}
                copy="Aa"/>
              </Component.Card>
            </Component.Item>
          )
        })
      }
    </Component.ItemList>
  );
}
