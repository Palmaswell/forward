import styled from '@emotion/styled';
import { Size } from './size';
import * as Type from '../types';

interface StyledLayerProps {
  theme?: Type.HashTbl;
}

const StyledLayer = styled.section`
  padding: ${Size.S}px 0;
  border-bottom: 1px solid ${(props: StyledLayerProps) => props.theme.get('City Lights').toRGB()};
  &:not(:last-child) {
  }

`;

export const Layer: React.SFC = (props): JSX.Element => (
  <StyledLayer>{props.children}</StyledLayer>
);
