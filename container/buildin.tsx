import * as React from 'react';
import * as Color from '../color';
import * as HashTbl from '../hash-table';

const builtinPalette = Array.from(Color.palette);
Color.sort(builtinPalette, Color.luminance);
const builtInContext = HashTbl.create(builtinPalette.length);
builtinPalette.forEach(c => builtInContext.set(Color.createColor(c)));

export const BuiltInCtx = React.createContext({});
export const BuiltInConsumer = BuiltInCtx.Consumer;

export function BuiltInProvider(props) {
  return (
    <BuiltInCtx.Provider value={builtInContext}>
      {props.children}
    </BuiltInCtx.Provider>
  )
};
