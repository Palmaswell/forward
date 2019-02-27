import App, { Container } from 'next/app';
import * as React from 'react';
import { Provider } from '../context';

export default class ForwardApp extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}
