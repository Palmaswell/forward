import Head from 'next/head';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import * as Component from '../components';
import * as Container from '../container';
import * as Type from '../types';
import { ColorContext, ColorCtxProvider } from '../color-context';

export const Enhanced = () => {
  const { Model } = React.useContext(ColorContext) as ColorCtxProvider;
  const aaaColorList = Model.activeColor.aaa as Type.colorEnhanced[];
  const aaColorList = Model.activeColor.aa as Type.colorEnhanced[];
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
            name={Model.activeColor.name}
            rgb={Model.activeColor.toRGB()}
            hex={`${Model.activeColor.toHEX()}`}>
            <Component.Tile
            type={Type.ColorTile.primary}
            bgColor={Model.activeColor.toRGB()}
            copyColor={Model.activeColor.aaa.length > 0 ? Model.activeColor.aaa[Model.activeColor.aaa.length - 1].rgb : Model.colorTbl.get('Black').rgb}
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
              {
                Model.activeColor.aaa.length > 0
                  ? <Container.ColorList
                      colors={aaaColorList}
                      type={Type.ColorList.secondary} />
                  : <Component.Headline
                      order={Type.HeadlineOrder.h3}
                      tag={Type.HeadlineOrder.h2}>
                        Unfortunately there are no AAA matches
                    </Component.Headline>
              }
          </Component.Layer>
          <Component.Layer>
            <Component.Title
              prefix="AA"
              copy="Works well" />
              {
                Model.activeColor.aaa.length > 0
                  ? <Container.ColorList
                      colors={aaColorList}
                      type={Type.ColorList.secondary}/>
                  : <Component.Headline
                      order={Type.HeadlineOrder.h3}
                      tag={Type.HeadlineOrder.h2}>
                        Unfortunately there are no AA matches
                    </Component.Headline>
              }
          </Component.Layer>
        </Component.LayoutItem>
      </Component.Layout>
    </ThemeProvider>
    </>
  );
}

export default Enhanced;
