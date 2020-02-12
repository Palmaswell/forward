import styled from '@emotion/styled';
import { css } from '@emotion/core';
import * as Type from '../types';
import { Size } from './size';

interface TopBarProps {
  type?: Type.Topbar;
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

const StyledTopBar = styled.header`
  padding-bottom: ${Size.S}px;
   ${(props: TopBarProps) =>  {
    switch(props.type) {
      case Type.Topbar.secondary:
        return css``
      case Type.Topbar.primary:
      default:
        return css`
          border-bottom: 1px solid ${props.theme.get('City Lights').toRGB()};
        `;
    }
  }};
  margin-bottom: ${Size.S}px;
`;

export const TopBar: React.SFC<TopBarProps> = (props): JSX.Element => <StyledTopBar type={props.type}>{props.children}</StyledTopBar>;
