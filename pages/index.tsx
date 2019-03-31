import Head from 'next/head';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import * as Component from '../components';
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
          type={Type.Layout.custom}
          width={40}
          bgColor={Model.colorTbl.get('Blue Nights').toRGB()}>
          <Component.Headline
            color={Model.colorTbl.get('Lynx White').toRGB()}
            order={Type.HeadlineOrder.h1}
            tag={Type.HeadlineOrder.h1}
            type={Type.Headline.secondary}>
              Design UI's for everyone
          </Component.Headline>
          <Component.Copy
            color={Model.colorTbl.get('Lynx White').toRGB()}
            tag={Type.CopyTag.p}>
            The design needs to meet color contrast requirements for people with vision or color perception deficiencies.
          </Component.Copy>
          <Component.Link href="/list">Use default palette ></Component.Link>
        </Component.LayoutItem>
        <Component.LayoutItem
          type={Type.Layout.custom}
          width={60}
          bgColor={Model.colorTbl.get('Blue Nights').toRGB()}>
          <Component.Card
            type={Type.ColorTile.primary}
            name={Model.colorTbl.get('Fluorescent Red').name}
            rgb={Model.colorTbl.get('Fluorescent Red').toRGB()}
            hex={`${Model.colorTbl.get('Fluorescent Red').toHEX()}`}>
            <Component.Tile
            type={Type.ColorTile.primary}
            bgColor={Model.colorTbl.get('Fluorescent Red').toRGB()}
            luminance={Model.colorTbl.get('Fluorescent Red').getLuminance()}
            copy="Aa"/>
          </Component.Card>
        </Component.LayoutItem>
      </Component.Layout>
    </ThemeProvider>
    </>
  );
}
