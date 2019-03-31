import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/css';
import * as Type from '../types';

export interface TileProps {
  bgColor: string;
  copy: string;
  luminance: number;
  type?: Type.ColorTile;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

interface StyledTileProps {
  bgColor: string;
  luminance: number;
  type: Type.ColorTile;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

const generateTileStyles = (type: Type.ColorTile, theme: Type.HashTbl<Type.colorEnhanced>): SerializedStyles => {
  switch(type) {
    case Type.ColorTile.secondary:
      return css `
        height: 133px;
        font-size: 60px;
        box-shadow: 0 2px 4px ${theme.get('Black').toRGBA(.25)}, 0 7px 20px ${theme.get('Black').toRGBA(.10)};
        text-shadow: 1px 1px 1px ${theme.get('Black').toRGBA(.15)};
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
  color: ${(props: StyledTileProps) => props.luminance > 0.3
    ? props.theme.get('Dracula Orchid').toRGB()
    : props.theme.get('Lynx White').toRGB()
  };
  text-align: center;
  background-color: ${(props: StyledTileProps) => props.bgColor};
  ${(props: StyledTileProps) => generateTileStyles(props.type, props.theme)}
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

export const Tile: React.SFC<TileProps> = (props): JSX.Element => (
  <StyledTile
    bgColor={props.bgColor}
    luminance={props.luminance}
    type={props.type || Type.ColorTile.primary}>
    <StyledCopy>{ props.copy }</StyledCopy>
  </StyledTile>
);
