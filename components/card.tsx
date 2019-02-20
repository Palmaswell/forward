import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';
import { Color } from './colors';
import { Size } from './size';
import * as Type from '../types';
import * as Util from '../utils';

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
      return css`
        box-shadow: 0 2px 4px ${Util.toRGBString(Color.black)};
      `;
  };
};

const StyledCard = styled.figure`
  padding: 0;
  margin: 0;
  ${(props: StyledCardProps) => generateCardStyles(props.type)}
`;

const generateCaptionStyles = (type: Type.ColorTile): SerializedStyles => {
  switch(type) {
    case Type.ColorTile.secondary:
      return css`
        color: ${Util.toRGBString(Color.white)};
        padding: ${Size.M}px 0;
        font-size: 16px;
      `;
    case Type.ColorTile.primary:
    default:
      return css`
        padding: ${Size.S}px ${Size.M}px ${Size.M}px;
        font-size: 28px;
        background-color: ${Util.toRGBString(Color.white)};
      `;
  }
};

const StyledCaption = styled.figcaption`${(props: StyledCaptionProps) => generateCaptionStyles(props.type)}`;

const StyledSubline = styled.span`
  display: block;
  margin-top: 14px;
  font-size: 14px;
  color: ${(props: StyledCaptionProps) => props.type === Type.ColorTile.primary
    ? Util.toRGBString(Color.draculaOrchid)
    : Util.toRGBString(Color.cityLights)
  };
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
