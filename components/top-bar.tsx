import styled from '@emotion/styled';
import { Size } from './size';
import * as Component from './colors';
import * as Color from '../color';

const StyledTopBar = styled.header`
  padding-bottom: ${Size.S}px;
  border-bottom: 1px solid ${Color.toRGBString(Component.Color.cityLights)};
  margin-bottom: ${Size.S}px;
`;

export const TopBar: React.SFC = (props): JSX.Element => <StyledTopBar>{props.children}</StyledTopBar>;
