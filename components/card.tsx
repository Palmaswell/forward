import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';
import { Size } from './size';
import * as Component from './colors';
import * as Type from '../types';
import * as Color from '../color';

export interface CardProps {
  rgb: string;
  hex: string;
  name: string;
  type?: Type.ColorTile;
  onClick: React.MouseEventHandler<HTMLElement>;
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
        box-shadow: 0 2px 4px ${Color.toRGBString(Component.Color.black)};
      `;
  };
};

const StyledCard = styled.figure`
  padding: 0;
  margin: 0;
  font-weight: 600;
  cursor: pointer;
  ${(props: StyledCardProps) => generateCardStyles(props.type)}
`;

const generateCaptionStyles = (type: Type.ColorTile): SerializedStyles => {
  switch(type) {
    case Type.ColorTile.secondary:
      return css`
        color: ${Color.toRGBString(Component.Color.draculaOrchid)};
        padding: ${Size.M}px 0;
        font-size: 16px;
      `;
    case Type.ColorTile.primary:
    default:
      return css`
        padding: ${Size.S}px ${Size.M}px ${Size.M}px;
        font-size: 28px;
        background-color: ${Color.toRGBString(Component.Color.white)};
      `;
  }
};

const StyledCaption = styled.figcaption`${(props: StyledCaptionProps) => generateCaptionStyles(props.type)}`;

const StyledSubline = styled.span`
  display: block;
  margin-top: 14px;
  font-size: 14px;
  color: ${(props: StyledCaptionProps) => props.type === Type.ColorTile.primary
    ? Color.toRGBString(Component.Color.draculaOrchid)
    : Color.toRGBString(Component.Color.blueNights)
  };
`;

export const Card: React.SFC<CardProps> = (props): JSX.Element => {
  const cardType = props.type || Type.ColorTile.primary;
  return(
    <StyledCard
      onClick={props.onClick}
      type={cardType}>
      {props.children}
      <StyledCaption type={cardType}>
        {props.name}
        <StyledSubline type={cardType}>
          {props.hex}
        </StyledSubline>
        <StyledSubline type={cardType}>
          {props.rgb}
        </StyledSubline>
      </StyledCaption>
    </StyledCard>
  );
};
