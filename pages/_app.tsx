import * as React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'emotion-theming';

import {
  BuiltInConsumer,
  BuiltInProvider,
  ColorManagerProvider,
} from '../context';
import { ColorExtendedProps } from '../color';
import { HashTbl } from '../types';
import { AppPropsType } from 'next/dist/next-server/lib/utils';

export default function ForwardApp(props: AppPropsType): JSX.Element {
  const { Component, pageProps } = props;
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

ForwardApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
