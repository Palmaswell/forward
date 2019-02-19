import styled from '@emotion/styled';
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

const StyledTile = styled.div`
  width: 100%;
  height: ${(props: StyledTileProps) =>
    props.type === Type.ColorTile.primary
      ? '425px'
      : '133px'
  };
  color: ${(props: StyledTileProps) => {
    const [r, g, b] = props.copyColor;
    return `rgb(${r}, ${g}, ${b})`;
  }};
  font-size: ${(props: StyledTileProps) =>
    props.type === Type.ColorTile.primary
      ? '140px'
      : '80px'
  };
  text-align: center;
  vertical-align: center;
  background-color: ${(props: StyledTileProps) => {
    const [r, g, b] = props.bgColor;
    return `rgb(${r}, ${g}, ${b})`;
  }};
`;

export const Tile: React.SFC<TileProps> = ({ copy, bgColor, copyColor, type }): JSX.Element => (
  <StyledTile
    copyColor={copyColor}
    bgColor={bgColor}
    type={type || Type.ColorTile.primary}>
    { copy }
  </StyledTile>
);
