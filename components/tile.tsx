import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/css';
import { Color } from './colors';
import * as Type from '../types';


export interface TileProps {
  bgColor: Type.RGB;
  copyColor: Type.RGB;
  copy: string;
  type: Type.ColorTile;
}

interface StyledTileProps {
  type: Type.ColorTile;
  bgColor: Type.RGB;
  copyColor: Type.RGB;
}

const generateTileStyles = (type: Type.ColorTile): SerializedStyles => {
  switch(type) {
    case Type.ColorTile.secondary:
      const [r, g, b] = Color.black;
      return css `
        height: 133px;
        font-size: 80px;
        box-shadow: 0 2px 4px rgb(${r}, ${g}, ${b});
      `;
    case Type.ColorTile.primary:
    default:
    return css `
      height: 425px;
      font-size: 140px;
    `;
  }
}

const StyledTile = styled.div`
  width: 100%;
  color: ${(props: StyledTileProps) => {
    const [r, g, b] = props.copyColor;g
    return `rgb(${r}, ${g}, ${b})`;
  }};
  text-align: center;
  vertical-align: center;
  background-color: ${(props: StyledTileProps) => {
    const [r, g, b] = props.bgColor;
    return `rgb(${r}, ${g}, ${b})`;
  }};
  ${(props: StyledTileProps) => generateTileStyles(props.type)}
`;

export const Tile: React.SFC<TileProps> = ({ copy, bgColor, copyColor, type }): JSX.Element => (
  <StyledTile
    copyColor={copyColor}
    bgColor={bgColor}
    type={type || Type.ColorTile.primary}>
    { copy }
  </StyledTile>
);
