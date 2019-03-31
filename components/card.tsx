import styled from '@emotion/styled';
import tinycolor from 'tinycolor2';
import { css, SerializedStyles } from '@emotion/core';
import { Size } from './size';
import * as Type from '../types';

export interface CardProps {
  rgb: string;
  hex: string;
  name: string;
  type?: Type.ColorTile;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

interface StyledCardProps {
  type: Type.ColorTile;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

interface StyledCaptionProps {
  type: Type.ColorTile;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

const generateCardStyles = (props: StyledCardProps): SerializedStyles => {
  const test = tinycolor(props.theme.get('Black').toRGB());
  test.setAlpha(.5);
  switch(props.type) {
    case Type.ColorTile.secondary:
      return css``;
    case Type.ColorTile.primary:
    default:
      return css`
        box-shadow: 0 2px 4px ${props.theme.get('Black').toRGBA(0.25)},
        0 9px 20px ${props.theme.get('Black').toRGBA(0.10)};
      `;
  };
};

const StyledCard = styled.figure`
  max-width: 500px;
  padding: 0;
  margin: 0 auto;
  font-weight: 600;
  cursor: pointer;
  ${(props: StyledCardProps) => generateCardStyles(props)}
`;

const generateCaptionStyles = (props: StyledCaptionProps): SerializedStyles => {
  switch(props.type) {
    case Type.ColorTile.secondary:
      return css`
        color: ${props.theme.get('Dracula Orchid').toRGB()};
        padding: ${Size.M}px 0;
        font-size: 16px;
      `;
    case Type.ColorTile.primary:
    default:
      return css`
        padding: ${Size.S}px ${Size.M}px ${Size.M}px;
        font-size: 28px;
        background-color: ${props.theme.get('White').toRGB()};
      `;
  }
};

const StyledCaption = styled.figcaption`${(props: StyledCaptionProps) => generateCaptionStyles(props)}`;

const StyledSubline = styled.span`
  display: block;
  margin-top: 14px;
  font-size: 14px;
  color: ${(props: StyledCaptionProps) => props.type === Type.ColorTile.primary
    ? props.theme.get('Dracula Orchid').toRGB()
    : props.theme.get('Blue Nights').toRGB()
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
