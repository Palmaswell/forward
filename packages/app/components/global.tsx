import { css, SerializedStyles } from '@emotion/core';
import { getFont } from './font';

export const getGlobalStyles = (): SerializedStyles => css`
  body {
    margin: 0;
    min-height: 100%;
    ${getFont()}
  }
`
