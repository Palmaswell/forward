import uuid from 'uuid/v4';
import * as React from 'react';
import * as Color from 'a11y-colors/lib';
import * as Component from '../components';
import * as Type from '../types';

export interface ColorListProps {
  cardName: string;
  cardRGBString: string;
  cardHEXString: string;
  cardCopy: string;
  tileRGBString: string;
  tileLuminance: number;
  colorContext?: Color.ColorManagerContext;
  colors?: any[];
  type?: Type.ColorList;
  handleClick?: React.MouseEventHandler<HTMLElement>;
}

export const ColorList: React.FunctionComponent<ColorListProps> = (
  props
): JSX.Element => {
  // const { Model } = React.useContext(ColorContext) as ColorCtxProvider;
  const type = props.type || Type.ColorList.primary;

  // const handleClick = (colorContext, color): void => {
  //   colorContext.setActiveColor(color);
  //   if (type === Type.ColorList.primary) {
  //     Router.push({
  //       pathname: "/enhanced"
  //     });
  //   }
  // };

  // const handleRatioLabel = (colorContext): void => {
  //   const aaa = colorContext.getActiveColor().getAAA();
  //   if (aaa.length > 0) {
  //     aaa.forEach(c => {

  //     });
  //   }
  //   if (Model.activeColor.aaa.length > 0) {
  //     Model.activeColor.aaa.forEach(
  //       (color: Type.Color) =>
  //         (color.ratio = Color.contrastRatio(Model.activeColor.rgb, color.rgb))
  //     );
  //   }
  //   if (Model.activeColor.aaa.length > 0) {
  //     Model.activeColor.aa.forEach(
  //       (color: Type.Color) =>
  //         (color.ratio = Color.contrastRatio(Model.activeColor.rgb, color.rgb))
  //     );
  //   }
  // };
  return (
    <Component.ItemList type={type}>
      {props.colors.map(() => {
        return (
          <Component.Item key={uuid()} isActive={false}>
            <Component.Card
              type={Type.ColorTile.secondary}
              name={props.cardName}
              rgb={props.cardRGBString}
              hex={props.cardHEXString}
              onClick={props.handleClick}>
              <Component.Tile
                type={Type.ColorTile.secondary}
                bgColor={props.tileRGBString}
                luminance={props.tileLuminance}
                copy={props.cardCopy}
              />
            </Component.Card>
          </Component.Item>
        );
      })}
    </Component.ItemList>
  );
};
