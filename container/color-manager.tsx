import * as React from 'react';
import * as Color from '../color';
import { jsx } from '@emotion/core';

const colorManagerContext = Color.createManager();
const ColorManagerCtx = React.createContext(colorManagerContext);
export const ColorManagerConsumer = ColorManagerCtx.Consumer;

export type ColorMangerProps = React.PropsWithChildren<{}>

export function ColorManager<ColorMangerProps>(props): JSX.Element {
  return (
    <ColorManagerCtx.Provider value={colorManagerContext}>
      {props.children}
    </ColorManagerCtx.Provider>
  );
};



