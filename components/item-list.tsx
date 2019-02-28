import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';
import { Breakpoint } from './breakpoint';
import { Size } from './size';
import * as Component from './colors';
import * as Type from '../types';
import * as Color from '../color';

export interface ItemListProps {
  isActive: boolean;
  type?: Type.ColorList;
}

interface StyledItemListProps {
  type?: Type.ColorList;
}

const StyledItemList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${(props: StyledItemListProps) =>
    props.type === Type.ColorList.primary
      ? ''
      : `${Size.XL}px`
  };
  justify-items: center;
  align-items: center;
  list-style: none;
  padding-left: 0;
  margin: 0;
  @media (min-width: ${Breakpoint.M}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${Breakpoint.L}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: ${Breakpoint.XL}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const generateItemStyles = (props: ItemListProps): SerializedStyles => {
  switch(props.type) {
    case Type.ColorList.secondary:
      return css``;
    case Type.ColorList.primary:
    default:
      return css`
        background-color: ${props.isActive
          ? Color.toRGBString(Component.Color.lynxWhite)
          : 'transparent;'
        };
        &:hover {
          background-color: ${Color.toRGBString(Component.Color.lynxWhite)};
          transition: background 333ms ease-out;
        }
      `;
  }
};

const StyledItem = styled.li`
  box-sizing: border-box;
  justify-self: stretch;
  padding: ${Size.S}px;
  ${(props: ItemListProps) => generateItemStyles(props)}
`;

export const ItemList: React.SFC<StyledItemListProps> = ({ children, type }): JSX.Element => (
  <StyledItemList
  type={type || Type.ColorList.primary}
  >
    {children}
  </StyledItemList>
);

export const Item: React.SFC<ItemListProps> = ({ children, isActive, type }): JSX.Element => (
  <StyledItem
    isActive={isActive}
    type={type || Type.ColorList.primary}>
    {children}
  </StyledItem>
);
