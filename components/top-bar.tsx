import styled from '@emotion/styled';
import * as Type from '../types';
import { Size } from './size';

interface StyledTopBar {
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

const StyledTopBar = styled.header`
  padding-bottom: ${Size.S}px;
  border-bottom: 1px solid ${(props: StyledTopBar) => props.theme.get('City Lights').toRGB()};
  margin-bottom: ${Size.S}px;
`;

export const TopBar: React.SFC = (props): JSX.Element => <StyledTopBar>{props.children}</StyledTopBar>;
