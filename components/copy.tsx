import styled from '@emotion/styled';
import { Size } from './size';
import * as Type from '../types';

export interface CopyProps {
  tag: Type.CopyTag;
  color?: string;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

export interface StyledCopyProps {
  color: string;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

const StyledCopy = styled.div`
  margin-bottom: ${Size.XL}px;
  color: ${(props: StyledCopyProps) => props.color
    ? props.color
    : props.theme.get('Dracula Orchid').toRGB()
  };
  font-size: ${Size.S}px;
`;


export const Copy: React.SFC<CopyProps> = (props): JSX.Element => {
  const Component = StyledCopy.withComponent(props.tag);
  return (
    <Component
     color={props.color}>
     {props.children}
    </Component>
  )
}
