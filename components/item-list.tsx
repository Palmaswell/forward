import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';
import { Breakpoint } from './breakpoint';
import { Size } from './size';
import * as Type from '../types';

export interface ItemListProps {
  isActive: boolean;
  type?: Type.ColorList;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

interface StyledItemListProps {
  type?: Type.ColorList;
}

const generateListStyles = (props: StyledItemListProps): SerializedStyles => {
  switch(props.type) {
    case Type.ColorList.secondary:
      return css`
        @media (min-width: ${Breakpoint.M}) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        @media (min-width: ${Breakpoint.XL}) {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }
      `;
    case Type.ColorList.primary:
    default:
      return css`
        @media (min-width: ${Breakpoint.M}) {
          grid-template-columns: 1fr 1fr;
        }
        @media (min-width: ${Breakpoint.L}) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        @media (min-width: ${Breakpoint.XL}) {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
      `;
  }
}

const StyledItemList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: baseline;
  list-style: none;
  padding-left: 0;
  margin: 0;
  ${(props: StyledItemListProps) => generateListStyles(props)};
`;

const generateItemStyles = (props: ItemListProps): SerializedStyles => {
  switch(props.type) {
    case Type.ColorList.secondary:
      return css``;
    case Type.ColorList.primary:
    default:
      return css`
        background-color: ${props.isActive
          ? props.theme.get('Lynx White').toRGB()
          : 'transparent;'
        };
        &:hover {
          background-color: ${props.theme.get('Lynx White').toRGB()};
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

export const Item: React.SFC<ItemListProps> = (props): JSX.Element => (
  <StyledItem
    isActive={props.isActive}
    type={props.type || Type.ColorList.primary}>
    {props.children}
  </StyledItem>
);
