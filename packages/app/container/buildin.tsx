import * as React from 'react';
import * as Color from 'a11y-colors/lib';
import * as HashTbl from 'a11y-colors/lib';

const builtinPalette = Array.from(Color.palette);
Color.sort(builtinPalette, Color.luminance);
const builtInContext = HashTbl.create(builtinPalette.length);
builtinPalette.forEach(c => builtInContext.set(Color.createColor(c)));

export const BuiltInCtx = React.createContext(builtInContext);
export const BuiltInConsumer = BuiltInCtx.Consumer;

export function BuiltInProvider(props: {children: React.ReactChildren}) {
  return (
    <BuiltInCtx.Provider value={builtInContext}>
      {props.children}
    </BuiltInCtx.Provider>
  )
};
