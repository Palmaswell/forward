import * as React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;

  + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: black;
    display: inline-block;
  }
`;

export const Input: React.FunctionComponent = (props): JSX.Element => <StyledInput {...props} />;
