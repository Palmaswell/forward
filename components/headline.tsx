import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/css';
import { Size } from './size';
import * as Type from '../types';


interface HeadlineProps {
  order: Type.HeadlineOrder;
  tag: Type.HeadlineOrder;
  color?: string;
  type?: Type.Headline;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

interface StyledHeadlineProps {
  order: Type.HeadlineOrder;
  color?: string;
  type?: Type.Headline;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}


const generateHeadlineStyles = (props: StyledHeadlineProps): SerializedStyles => {
  if (props.type === Type.Headline.secondary) {
    return css`
      margin-top: ${Size.L}px;
      font-family: 'Halant';
      color: ${props.color};
    `;
  }
  return css`
    color: ${props.theme.get('American River').toRGB()};
    font-family: 'Nunito Sans', sans-serif;
  `;
}

const StyledHeadline = styled.h1`
  margin: 0;
  font-size: ${(props: StyledHeadlineProps) => {
    switch(props.order) {
      case 'h1':
        return `36px`;
      case 'h2':
        return `28px`;
      case 'h3':
      default:
        return `20px`;
    }
    }
  };
  line-height: 1.2;
  letter-spacing: .5px;
  -webkit-font-smoothing: antialiased;
  ${(props: StyledHeadlineProps) => generateHeadlineStyles(props)};
`;

export const Headline: React.SFC<HeadlineProps> = (props): JSX.Element => {
  const Component = StyledHeadline.withComponent(props.tag);
  return (
    <Component
      order={props.order}
      color={props.color}
      type={props.type || Type.Headline.primary}>
        {props.children}
    </Component>
  )
};
