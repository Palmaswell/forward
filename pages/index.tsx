import { ColorContext, ColorCtxProvider } from '../color-context';
import { css, Global } from '@emotion/core';
import * as React from 'react';
import Head from 'next/head';
import * as Component from '../components';
import * as Container from '../container';
import * as Type from '../types';
import * as Color from '../color';

export default (): JSX.Element => {
  const { Model } = React.useContext(ColorContext) as ColorCtxProvider;
  return (
    <>
    <Global
    styles={css`
      body {
        padding: ${Component.Size.L}px ${Component.Size.XL}px;
        margin: 0;
        min-height: 100%;
        background-color: ${Color.toRGBString(Component.Color.white)};
        ${Component.getFont()}
      }
    `}
    />
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
    <Component.TopBar>
      <Component.Headline
        order={Type.HeadlineOrder.h2}
        tag={Type.HeadlineOrder.h1}>
        Color contrast accessibility checker
      </Component.Headline>
    </Component.TopBar>
    <Container.ColorList colors={Model.colors} />
    </>
  );
}
