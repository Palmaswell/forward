import uuid from 'uuid/v4';
import * as React from 'react';
import * as Color from '../color';
import * as Type from '../types';
import { ItemList, Item, Card, Tile } from '.';

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
  const type = props.type || Type.ColorList.primary;

  return (
    <ItemList type={type}>
      {props.colors.map(() => {
        return (
          <Item key={uuid()} isActive={false}>
            <Card
              type={Type.ColorTile.secondary}
              name={props.cardName}
              rgb={props.cardRGBString}
              hex={props.cardHEXString}
              onClick={props.handleClick}>
              <Tile
                type={Type.ColorTile.secondary}
                bgColor={props.tileRGBString}
                luminance={props.tileLuminance}
                copy={props.cardCopy}
              />
            </Card>
          </Item>
        );
      })}
    </ItemList>
  );
};
