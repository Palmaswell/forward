import App, { Container } from 'next/app';
import * as React from 'react';
import { BuiltInProvider, ColorManagerProvider } from '../container';

export default class ForwardApp extends App {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <BuiltInProvider>
          <ColorManagerProvider>
            <Component {...pageProps} />
          </ColorManagerProvider>
        </BuiltInProvider>
      </Container>
    );
  }
}
