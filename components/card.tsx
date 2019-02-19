import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';
import * as Type from '../types';
import { Color } from './colors';
import { Size } from './size';

export interface CardProps {
  rgb: string;
  hex: string;
  type?: Type.ColorTile;
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
      const [r1, g1, b1] = Color.white;
      return css`
        color: rgb(${r1}, ${g1}, ${b1});
        padding: ${Size.M}px 0;
        font-size: 16px;
      `;
    case Type.ColorTile.primary:
    default:
      const [r, g, b] = Color.white
      return css`
        padding: ${Size.S}px ${Size.M}px ${Size.M}px;
        font-size: 28px;
        background-color: rgb(${r}, ${g}, ${b});
      `;
  }
};

const StyledCaption = styled.figcaption`${(props: StyledCaptionProps) => generateCaptionStyles(props.type)}`;

const StyledSubline = styled.span`
  display: block;
  margin-top: 14px;
  font-size: 14px;
  color: ${(props: StyledCaptionProps) => {
    if (props.type === Type.ColorTile.primary) {
      const [r, g, b] = Color.draculaOrchid;
      return css`rgb(${r}, ${g}, ${b});`;
    } else {
      const [r, g, b] = Color.cityLights;
      return css`rgb(${r}, ${g}, ${b});`;
    }
  }};
`;

export const Card: React.SFC<CardProps> = ({ children, hex, rgb, type }): JSX.Element => {
  const cardType = type || Type.ColorTile.primary;
  return(
    <StyledCard type={cardType}>
      {children}
      <StyledCaption type={cardType}>
        {hex}
        <StyledSubline type={cardType}>
          {rgb}
        </StyledSubline>
      </StyledCaption>
    </StyledCard>
  );
};
