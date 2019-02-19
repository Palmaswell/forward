import * as React from 'react';
import * as Container from '../container';
import * as Component from '../components';
import * as Color from '../color';
import * as Type from '../types';

export default class IndexPage extends React.Component {

  public render(): JSX.Element {
    return(
      <>
      <h1>A web app will be soon here</h1>
      <Container.Upload />
      <Component.Card
        rgb="rgb(255, 255, 255)"
        hex="#2D3436">
        <Component.Tile
          bgColor={Color.palette[15].rgb}
          copyColor={Color.palette[0].rgb}
          copy="Aa"
         />
      </Component.Card>
      <Component.Card
        type={Type.ColorTile.secondary}
        rgb="rgb(255, 255, 255)"
        hex="#2D3436">
        <Component.Tile
          bgColor={Color.palette[20].rgb}
          copyColor={Color.palette[3].rgb}
          type={Type.ColorTile.secondary}
          copy="Aa"
         />
      </Component.Card>
      </>
    )
  }
}
