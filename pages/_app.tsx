import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';

import {
  BuiltInConsumer,
  BuiltInProvider,
  ColorManagerProvider,
} from '../context';
import { ColorExtendedProps } from '../color';
import { HashTbl } from '../types';

export default function ForwardApp({ Component, pageProps }): JSX.Element {
  return (
    <BuiltInProvider>
      <BuiltInConsumer>
        {(builtInCtx: HashTbl<ColorExtendedProps>) => (
          <ThemeProvider theme={builtInCtx}>
            <ColorManagerProvider>
              <Component {...pageProps} />
            </ColorManagerProvider>
          </ThemeProvider>
        )}
      </BuiltInConsumer>
    </BuiltInProvider>
  );
}
