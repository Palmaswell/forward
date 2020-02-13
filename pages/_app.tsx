import App from 'next/app';
import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';

import {
  BuiltInConsumer,
  BuiltInProvider,
  ColorManagerProvider,
} from '../context';
import { ColorExtendedProps } from '../color';
import { HashTbl } from '../types';

export default class ForwardApp extends App {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
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
}
