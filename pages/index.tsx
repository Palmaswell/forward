import Head from 'next/head';
import Link from 'next/link';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import * as Component from '../components';
import * as Container from '../container';
import * as Type from '../types';
import { ColorContext, ColorCtxProvider } from '../color-context';


export default (): JSX.Element => {
  const { Model } = React.useContext(ColorContext) as ColorCtxProvider;
  return (
    <>
    <Global styles={Component.getGlobalStyles()}/>
    <Head>
    <title>Forward - color contrast accessibility checker</title>
    <meta name="description" content="Forward - color contrast accessibility checker" />
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <link
      rel="preload"
      as="font"
      href="https://fonts.googleapis.com/css?family=Halant|Nunito+Sans" />
    </Head>
    <ThemeProvider theme={Model.colorTbl}>
      <Component.Layout>
        <Component.LayoutItem
          bgColor={Model.colorTbl.get('White').toRGB()}>
            <Link href="enhanced">
              <a>test enhanced</a>
            </Link>
            <Component.TopBar>
              <Component.Headline
                order={Type.HeadlineOrder.h2}
                tag={Type.HeadlineOrder.h1}>
                Color contrast accessibility checker
              </Component.Headline>
            </Component.TopBar>
            <Container.ColorList colors={Model.colors} />

        </Component.LayoutItem>
      </Component.Layout>
    </ThemeProvider>
    </>
  );
}
