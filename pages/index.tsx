import { Consumer, CtxProvider } from '../context';
import { css, Global } from '@emotion/core';
import * as React from 'react';
import Head from 'next/head';
import * as Component from '../components';
import * as Container from '../container';
import * as Type from '../types';
import * as Color from '../color';

const IndexPage: React.SFC = (): JSX.Element => {
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
    <Consumer>{
      ({ model }: CtxProvider) => {
        console.log(model.colors[0].name);
        return (
          <Container.ColorList colors={model.colors} />
        )
      }
    }</Consumer>
    </>
  );
}

export default IndexPage;
