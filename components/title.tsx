import styled from '@emotion/styled';
import * as Type from '../types';
import { Size } from './size';
import { getFont } from './font';

export interface TitleProps {
  copy: string;
  prefix: string;
}

interface StyledProps {
  theme?:Type.HashTbl<Type.colorEnhanced>;
}

const StyledTitle = styled.strong`
  display: block;
  margin: 0 0 ${Size.XS}px;
  font-weight: normal;
  color: ${(props: StyledProps) => props.theme.get('American River').toRGB()};
  ${getFont()};
`;

const StyledPrefix = styled.span`
  color: ${(props: StyledProps) => props.theme.get('Soothing Breeze').toRGB()};
  font-family: inherit;
`;

export const Title: React.SFC<TitleProps> = (props): JSX.Element => (
  <StyledTitle>
    {props.prefix &&
      <StyledPrefix>{props.prefix} </StyledPrefix>
    }
    {props.copy}
  </StyledTitle>
);
