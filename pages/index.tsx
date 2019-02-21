import * as React from 'react';
import Head from 'next/head';
import * as Container from '../container';
import * as Component from '../components';
import * as Color from '../color';
import * as Type from '../types';

export default function IndexPage (): JSX.Element {

  return (
    <>
    <Head>
    <title>Forward - color contrast accessibility checker</title>
    <meta name="description" content="Forward - color contrast accessibility checker" />
    </Head>
    <h1>A web app will be soon here</h1>
    <Container.Upload />
    <Container.ColorList />
    <Component.ItemList>
      <Component.Item isActive={false}>
        <Component.Card
          type={Type.ColorTile.secondary}
          rgb="rgb(255, 255, 255)"
          hex="#2D3436">
        <Component.Tile
          type={Type.ColorTile.secondary}
          bgColor={Color.palette[15].rgb}
          copyColor={Color.palette[0].rgb}
          copy="Aa"/>
        </Component.Card>
      </Component.Item>
      <Component.Item isActive={true}>
        <Component.Card
          type={Type.ColorTile.secondary}
          rgb="rgb(255, 255, 255)"
          hex="#2D3436">
          <Component.Tile
            type={Type.ColorTile.secondary}
            bgColor={Color.palette[20].rgb}
            copyColor={Color.palette[3].rgb}
            copy="Aa"/>
        </Component.Card>
      </Component.Item>
    </Component.ItemList>

    </>
  );
}
