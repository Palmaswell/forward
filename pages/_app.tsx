import App, { Container } from 'next/app';
import * as React from 'react';
import { BuiltInProvider, ColorContextProvider } from '../container';

export default class ForwardApp extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ColorContextProvider>
          <BuiltInProvider>
            <Component {...pageProps} />
          </BuiltInProvider>
        </ColorContextProvider>
      </Container>
    );
  }
}
