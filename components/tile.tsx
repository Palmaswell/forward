import styled from '@emotion/styled';
import * as Type from '../types';

export interface TileProps {
  color: Type.RGB;
}

interface StyledTileProps {
  color: Type.RGB;
}

const StyledTile = styled.div`
  background-color: ${(props: StyledTileProps) => `rgb(${props.color.join()})`};
`

export const Tile: React.SFC<TileProps> = ({ children, color }): JSX.Element => (
  <StyledTile color={color}>
    { children }
  </StyledTile>
)
