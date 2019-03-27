import uuid from 'uuid/v4';
import Router from 'next/router'
import * as React from 'react';
import * as Color from '../color';
import * as Component from '../components';
import * as Type from '../types';
import { ColorContext, ColorCtxProvider } from '../color-context';


export interface ColorListProps {
  colors: Type.colorEnhanced[];
  type?: Type.ColorList;
}

export const ColorList:
  React.FunctionComponent<ColorListProps> = (props): JSX.Element => {
  const { Model } = React.useContext(ColorContext) as ColorCtxProvider;
  const type = props.type || Type.ColorList.primary;

  const handleClick = (color: Type.colorEnhanced): void => {
    Model.setActiveColor(Model.colorTbl.get(color.name));

    if (type === Type.ColorList.primary) {
      Router.push({
        pathname: '/enhanced'
      })
    }
  };
  return (
    <Component.ItemList type={type}>
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
                luminance={Color.luminance(color.rgb)}
                copy="Aa"
                />
              </Component.Card>
            </Component.Item>
          )
        })
      }
    </Component.ItemList>
  );
}
