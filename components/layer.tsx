import styled from '@emotion/styled';
import { Size } from './size';
import * as Type from '../types';

interface StyledLayerProps {
  theme?: Type.HashTbl;
}

const StyledLayer = styled.section`
  padding: ${Size.S}px ${Size.M}px;
  background-color: ${(props: StyledLayerProps) => props.theme.get('Lynx White').toRGB()};
`;

export const Layer: React.SFC = (props): JSX.Element => (
  <StyledLayer>{props.children}</StyledLayer>
);
