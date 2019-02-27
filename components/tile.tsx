import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/css';
import * as Type from '../types';

export interface TileProps {
  bgColor: Type.RGB;
  copyColor: Type.RGB;
  copy: string;
  type?: Type.ColorTile;
}

interface StyledTileProps {
  type: Type.ColorTile;
  bgColor: Type.RGB;
  copyColor: Type.RGB;
}

const generateTileStyles = (type: Type.ColorTile): SerializedStyles => {
  switch(type) {
    case Type.ColorTile.secondary:
      return css `
        height: 133px;
        font-size: 80px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .25), 0 7px 20px rgba(0, 0, 0, .10);
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
  position: relative;
  width: 100%;
  color: ${(props: StyledTileProps) => {
    const [r, g, b] = props.copyColor;g
    return `rgb(${r}, ${g}, ${b})`;
  }};
  text-align: center;
  background-color: ${(props: StyledTileProps) => {
    const [r, g, b] = props.bgColor;
    return `rgb(${r}, ${g}, ${b})`;
  }};
  ${(props: StyledTileProps) => generateTileStyles(props.type)}
`;

const StyledCopy = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: currentColor;
  font-family: 'Halant';
  -webkit-font-smoothing: antialiased;
  transform: translateY(-50%);
`;

export const Tile: React.SFC<TileProps> = ({ copy, bgColor, copyColor, type }): JSX.Element => (
  <StyledTile
    copyColor={copyColor}
    bgColor={bgColor}
    type={type || Type.ColorTile.primary}>
    <StyledCopy>{ copy }</StyledCopy>
  </StyledTile>
);
