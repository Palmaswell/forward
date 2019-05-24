import Head from 'next/head';
import { ColorContext, ColorCtxProvider } from '../container/provider';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import * as Component from '../components';
import * as Container from '../container';
import * as Type from '../types';
import { ColorExtendedProps } from '../color';

export default class extends React.Component {
  public state = {
    isTransitioning: false
  };

  public componentDidMount(): void {
    this.setState({ ...this.state, isTransitioning: true });
  }

  public componentWillUnmount(): void {
    this.setState({ ...this.state, isTransitioning: false });
  }

  public render(): JSX.Element {
    return (
      <>
        <Global styles={Component.getGlobalStyles()} />
        <Head>
          <title>Forward - color contrast accessibility checker</title>
          <meta
            name="description"
            content="Forward - color contrast accessibility checker"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
          <link
            rel="preload"
            as="font"
            href="https://fonts.googleapis.com/css?family=Halant|Nunito+Sans"
          />
        </Head>
        <Container.BuiltInConsumer>
          {(builtInCtx: Type.HashTbl<ColorExtendedProps>) => {
            return (
              <ThemeProvider theme={builtInCtx}>
                <Component.Layout>
                  <Component.LayoutItem
                    bgColor={builtInCtx.get("Lynx White").toRGB()}
                  >
                    <Component.Space
                      size={[
                        Component.Size.M,
                        Component.Size.L,
                        0,
                        Component.Size.L
                      ]}
                    >
                      <Component.TopBar>
                        <Component.Space size={[0, 0, 0, Component.Size.XS]}>
                          <Component.Headline
                            order={Type.HeadlineOrder.h2}
                            tag={Type.HeadlineOrder.h1}
                          >
                            Color contrast accessibility checker
                          </Component.Headline>
                        </Component.Space>
                      </Component.TopBar>
                    </Component.Space>
                    <Component.Space size={[0, Component.Size.L]}>
                      <Container.ColorManagerConsumer>
                        {(ctx) => {
                          console.log(ctx.getElements().map(c => c.getAA()))
                          return <Container.ColorList colorContext={ctx} />
                        }}
                      </Container.ColorManagerConsumer>
                    </Component.Space>
                  </Component.LayoutItem>
                </Component.Layout>
                <Component.TransitionLayer
                  theme={builtInCtx}
                  transition={this.state.isTransitioning}
                />
              </ThemeProvider>
            );
          }}
        </Container.BuiltInConsumer>
      </>
    );
  }
}
