import styled from '@emotion/styled';
// import { css } from '@emotion/core';
// import { SerializedStyles } from '@emotion/css';
// import { Transition } from 'react-transition-group';
import { Card } from './card';
import { Tile } from './tile';
import * as Type from '../types';

export interface LoadingProps {
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

export interface StyledLoadingProps {
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

const StyledLoading = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  height: 0;
  background-color: ${(props: StyledLoadingProps) => props.theme.get('Lynx White').toRGB()};
`;

export const Loading: React.SFC<LoadingProps> = (props): JSX.Element => {
  return (
    <StyledLoading>
      <Card
        type={Type.ColorTile.primary}
        name={props.theme.get('Fluorescent Red').name}
        rgb={props.theme.get('Fluorescent Red').toRGB()}
        hex={`${props.theme.get('Fluorescent Red').toHEX()}`}>
          <Tile
          type={Type.ColorTile.primary}
          bgColor={props.theme.get('Fluorescent Red').toRGB()}
          luminance={props.theme.get('Fluorescent Red').getLuminance()}
          copy="Aa"/>
      </Card>
    </StyledLoading>
  );
}
