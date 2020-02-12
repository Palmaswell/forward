import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { SerializedStyles } from '@emotion/css';
import uuid from 'uuid/v3';
import * as Type from '../types';
import { getFont } from './font';
import { Size } from './size';

export enum ButtonTypes {
  file = 'file'
}

export interface ButtonProps {
  copy: string;
  testId?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface InputButtonProps {
  accept: string;
  type: ButtonTypes;
}

interface StyledButtonProps {
  theme?: Type.HashTbl<Type.colorEnhanced>;
}

const generateBtnStyles = (props: StyledButtonProps): SerializedStyles => css`
  padding: ${Size.XXS + 2}px ${Size.XS}px ${Size.XXS}px;
  background-color: ${props.theme.get('White').toRGB()};
  cursor: pointer;
  ${getFont()}
`;

const StyledInputButton = styled.input`
  position: absolute;
  z-index: -1;
  width: .1px;
  height: .1px;
  border: none;
  overflow: hidden;
  opacity: 0;
`;

const StyledInputLabel = styled.label`
  display: inline-block;
  white-space: nowrap;
  box-shadow: 0 2px 4px ${(props) => props.theme.get('Black').toRGBA(.4)};
  ${(props: StyledButtonProps) => generateBtnStyles(props)}
`;

const StyledButton = styled.button`
  ${(props: StyledButtonProps) => generateBtnStyles(props)}
`;

export const FileButton = (props: ButtonProps & InputButtonProps): JSX.Element => {
  const id = uuid('upload', '1b671a64-40d5-491e-99b0-da01ff1f3341');
  const { accept, copy, type, onChange} = props;
  return (
    <>
      <StyledInputButton
        accept={accept}
        id={id}
        type={type}
        data-testid={props.testId}
        onChange={onChange}
        />
      <StyledInputLabel htmlFor={id}>{copy}</StyledInputLabel>
    </>
  )
};

export const Button = (props: ButtonProps): JSX.Element => (
  <StyledButton data-testid={props.testId} onChange={props.onChange}>
    {props.copy}
  </StyledButton>
);
