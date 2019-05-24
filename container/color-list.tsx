import uuid from "uuid/v4";
import Router from "next/router";
import * as React from 'react';
import * as Color from '../color';
import * as Component from '../components';
import * as Type from '../types';
import { ColorContext, ColorCtxProvider } from './provider';

export interface ColorListProps {
  colorContext?: Color.ColorManagerContext;
  colors?: Type.Color[];
  type?: Type.ColorList;
}

export const ColorList: React.FunctionComponent<ColorListProps> = (
  props
): JSX.Element => {
  const { Model } = React.useContext(ColorContext) as ColorCtxProvider;
  const type = props.type || Type.ColorList.primary;

  const handleClick = (colorContext, color): void => {
    colorContext.setActiveColor(color);
    if (type === Type.ColorList.primary) {
      Router.push({
        pathname: "/enhanced"
      });
    }
  };

  const handleRatioLabel = (colorContext): void => {
    const aaa = colorContext.getActiveColor().getAAA();
    if (aaa.length > 0) {
      aaa.forEach(c => {

      });
    }
    if (Model.activeColor.aaa.length > 0) {
      Model.activeColor.aaa.forEach(
        (color: Type.Color) =>
          (color.ratio = Color.contrastRatio(Model.activeColor.rgb, color.rgb))
      );
    }
    if (Model.activeColor.aaa.length > 0) {
      Model.activeColor.aa.forEach(
        (color: Type.Color) =>
          (color.ratio = Color.contrastRatio(Model.activeColor.rgb, color.rgb))
      );
    }
  };
  const { colorContext } = props;
  return (
    <Component.ItemList type={type}>
      {colorContext.getElements().map(color => {
        return (
          <Component.Item key={uuid()} isActive={false}>
            <Component.Card
              type={Type.ColorTile.secondary}
              name={color.getName()}
              rgb={Color.toRGBString(color.getRGB())}
              hex={`${Color.toHEX(color.getRGB())}`}
              onClick={() => handleClick(colorContext, color)}
            >
              <Component.Tile
                type={Type.ColorTile.secondary}
                bgColor={Color.toRGBString(color.getRGB())}
                luminance={Color.luminance(color.getRGB())}
                copy={"Aa"}
              />
            </Component.Card>
          </Component.Item>
        );
      })}
    </Component.ItemList>
  );
};
