import * as Type from '../types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/css';
import { Transition } from 'react-transition-group';
import { ColorExtendedProps } from '../color';
import { Card } from './card';
import { Tile } from './tile';

export interface TransitionLayerProps {
  transition: boolean;
  state?: Type.TransitionStatus;
  theme?: Type.HashTbl<ColorExtendedProps>;
}

interface StyledTransitionLayer {
  state: Type.TransitionStatus;
  theme?: Type.HashTbl<ColorExtendedProps>;
}

const generateTrasition = (state: Type.TransitionStatus): SerializedStyles  => {
  switch(state) {
    case Type.TransitionStatus.entering:
      return css`
        transform: translate3d(0, 0, 0);
      `;
    case Type.TransitionStatus.entered:
    default:
      return css`
        transform: translate3d(0, 100vh, 0);
        transition-delay: 500ms;
      `;
  }
};


const StyledTransition = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  background-color: ${(props: StyledTransitionLayer) => props.theme.get('Celestial Green').toRGBA(.98)};
  transition-timing-function: cubic-bezier(0.950, 0.050, 0.795, 0.035);
  transition-property: transform;
  transition-duration: 500ms;
  pointer-events: none;
  ${(props: StyledTransitionLayer) => generateTrasition(props.state)};
`;

const StyledCard = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
`;

const StyledTile = styled(Tile)`
  height: 300px;
`;

export const TransitionLayer: React.SFC<TransitionLayerProps> = (props): JSX.Element => {
  return (
    <Transition
      in={props.transition}
      timeout={0}>
      {status => {
        return (
          <StyledTransition
            state={status}>
            <StyledCard
              type={Type.ColorTile.primary}
              name=""
              rgb={props.theme.get('Liberty').toRGB()}
              hex={`${props.theme.get('Liberty').toHEX()}`}>
                <StyledTile
                  type={Type.ColorTile.primary}
                  bgColor={props.theme.get('Liberty').toRGB()}
                  luminance={props.theme.get('Liberty').getLuminance()}
                  copy=""/>
            </StyledCard>
          </StyledTransition>
        )}
      }
    </Transition>
  );
}
