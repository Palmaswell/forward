import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/css';
import { Transition } from 'react-transition-group';
import * as Type from '../types';

export interface TransitionLayerProps {
  isTransitioning: boolean;
  state: Type.TransitionStatus;
}

interface StyledTransitionLayer {
  state: Type.TransitionStatus;
}

const generateTrasition = (state: Type.TransitionStatus): SerializedStyles  => {
  switch (state) {
    case Type.TransitionStatus.entering:
    case Type.TransitionStatus.exiting:
      return css`
        transform: translate3d(-100vw, 0, 0);
      `;
    case Type.TransitionStatus.entered:
    case Type.TransitionStatus.exited:
    default:
      return css`
        transform: translate3d(0, 0, 0);
      `;
  }
};


const StyledTransition = styled.div`
  transition: transform ease;
  transition-duration: .333s;
  ${(props: StyledTransitionLayer) => generateTrasition(props.state)}
`;


export const TransitionLayer: React.SFC<TransitionLayerProps> = (props): JSX.Element => {
  return (
    <Transition
      in={props.state}
      timeout={0}>
      {status => (
        <StyledTransition
        state={status}>
        {props.children}
        </StyledTransition>
      )}
    </Transition>
  );
}
