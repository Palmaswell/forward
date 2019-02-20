import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';
// import { Color } from './colors';
import { Size } from './size';
import * as Type from '../types';

export interface ItemListProps {
  type: Type.ColorList;
  isActive: boolean;
}

const StyledItemList = styled.ul`
  display: flex;
  list-style: none;
`;

const generateItemStyles = (props: ItemListProps): SerializedStyles => {
  switch(props.type) {
    case Type.ColorList.secondary:
      return css`
        margin: 0;
      `;
    case Type.ColorList.primary:
    default:
      return css`
        margin: 0 ${Size.XS}px;
        &:hover {
          background-color
        }
      `;
  }
};




export const ItemList: React.SFC<void> = ({ children }): JSX.Element => (
  <StyledItemList>{children}</StyledItemList>
);

// export const Item: React.SFC<void> = ({ children }): JSX.Element => ()
