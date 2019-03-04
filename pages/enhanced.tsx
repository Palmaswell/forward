import Head from 'next/head';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import * as Component from '../components';
// import * as Container from '../container';
import * as Type from '../types';
import { ColorContext, ColorCtxProvider } from '../color-context';

export const Enhanced = () => {
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
          width={45}
          bgColor={Model.colorTbl.get('Blue Nights').toRGB()}>
          <Component.Link href="/"> back</Component.Link>
          <Component.Card
            type={Type.ColorTile.primary}
            name={Model.colorTbl.get('Black').name}
            rgb={Model.colorTbl.get('Black').toRGB()}
            hex={`${Model.colorTbl.get('Black').toHEX()}`}
            onClick={() => console.log(test)}>
            <Component.Tile
            type={Type.ColorTile.primary}
            bgColor={Model.colorTbl.get('Black').toRGB()}
            copyColor={Model.colorTbl.get('Black').rgb}
            copy="Aa"/>
          </Component.Card>
        </Component.LayoutItem>
        <Component.LayoutItem
          type={Type.Layout.custom}
          width={55}
          bgColor={Model.colorTbl.get('Isabelline').toRGB()}>
          <Component.TopBar>
            <Component.Headline
              order={Type.HeadlineOrder.h3}
              tag={Type.HeadlineOrder.h1}>
              Match Overview
            </Component.Headline>
          </Component.TopBar>
          <Component.Layer>
            <Component.Title
              prefix="AAA"
              copy="Perfect match 🎉" />
          </Component.Layer>
          <Component.Layer>
            <Component.Title
              prefix="AA"
              copy="Works well" />
          </Component.Layer>
        </Component.LayoutItem>
      </Component.Layout>

    </ThemeProvider>
    </>
  );
}

export default Enhanced;
