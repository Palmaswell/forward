import * as React from 'react';
import * as Color from '../color';
import * as HashTbl from '../hash-table';

const builtinPalette = Array.from(Color.palette);
Color.sort(builtinPalette, Color.luminance);
const builtInContext = HashTbl.create(builtinPalette.length);
builtinPalette.forEach(c => builtInContext.set(Color.createColor(c)));

export const BuiltInCtx = React.createContext(builtInContext);
export const BuiltInConsumer = BuiltInCtx.Consumer;
BuiltInCtx.displayName = 'BuiltInCtx'

export function BuiltInProvider(props): JSX.Element {
  return (
    <BuiltInCtx.Provider value={builtInContext}>
      {props.children}
    </BuiltInCtx.Provider>
  )
};
