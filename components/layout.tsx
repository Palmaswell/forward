import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';
import { Size } from './size';
import * as Type from '../types';

export interface LayoutItemProps {
  bgColor: string;
  type?: Type.Layout;
  width?: number;
}

interface StyledLayoutItemProps {
  bgColor: string;
  type?: Type.Layout;
  width?: number;
}

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
`;

const generateItemStyles = (props: StyledLayoutItemProps): SerializedStyles => {
  switch(props.type) {
    case Type.Layout.custom:
      return css`
        width: ${props.width}vw;
        padding: ${Size.L}px;
      `;
    case Type.Layout.default:
    default:
      return css`
        width: 100vw;
        padding: ${Size.L}px ${Size.XL}px;
      `;
  }
}

const StyledLayoutItem = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  background-color: ${(props: StyledLayoutItemProps) => props.bgColor};
  ${(props: StyledLayoutItemProps) => generateItemStyles(props)};
`;

export const Layout: React.SFC = (props): JSX.Element => (<StyledLayout>{props.children}</StyledLayout>);

export const LayoutItem: React.SFC<LayoutItemProps> = (props): JSX.Element => {
  const type = props.type || Type.Layout.default;
  return (
    <StyledLayoutItem
      bgColor={props.bgColor}
      type={type}
      width={props.width}>
      {props.children}
    </StyledLayoutItem>
  );
}
