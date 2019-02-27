import styled from '@emotion/styled';
import { Color } from './colors';
import { Size } from './size';
import * as Util from '../utils';

const StyledTopBar = styled.header`
  padding-bottom: ${Size.S}px;
  border-bottom: 1px solid ${Util.toRGBString(Color.cityLights)};
  margin-bottom: ${Size.S}px;
`;

export const TopBar: React.SFC = (props): JSX.Element => <StyledTopBar>{props.children}</StyledTopBar>;
