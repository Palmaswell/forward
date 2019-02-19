import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';
import * as Type from '../types';
import { Color } from './colors';
import { Size } from './size';

export interface CardProps {
  copy: string;
  tile: JSX.Element;
  type: Type.ColorTile;
}

interface StyledCardProps {
  type: Type.ColorTile;
}

interface StyledCaptionProps {
  type: Type.ColorTile;
}

const generateCardStyles = (type: Type.ColorTile): SerializedStyles => {
  switch(type) {
    case Type.ColorTile.secondary:
      return css``;
    case Type.ColorTile.primary:
    default:
      const [r, g, b] = Color.black;
      return css`
        box-shadow: 0 2px 4px rgb(${r}, ${g}, ${b});
      `;
  };
};

const StyledCard = styled.figure`${(props: StyledCardProps) => generateCardStyles(props.type)}`;

const generateCaptionStyles = (type: Type.ColorTile): SerializedStyles => {
  switch(type) {
    case Type.ColorTile.secondary:
      return css`
        padding: ${Size.M}px ${Size.S}px;
        font-size: 16px;
      `;
    case Type.ColorTile.primary:
    default:
      const [r, g, b] = Color.white
      return css`
        padding: ${Size.S}px ${Size.M}px;
        font-size: 28px;
        background-color: rgb(${r} ${g}, ${b});
      `;
  }
};

const StyledCaption = styled.figcaption`${(props: StyledCaptionProps) => generateCaptionStyles(props.type)}`;

export const Card: React.SFC<CardProps> = ({ copy, tile, type }): JSX.Element => {
  const cardType = type || Type.ColorTile.primary;
  return(
    <StyledCard type={cardType}>
      {tile}
      <StyledCaption type={cardType}>
        {copy}
      </StyledCaption>
    </StyledCard>
  );
};
