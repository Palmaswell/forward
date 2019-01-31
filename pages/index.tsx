import * as React from 'react';
import * as Container from '../container';
import * as Utils from '../utils';
import * as Types from '../types';

export default class IndexPage extends React.Component {
  static async getInitialProps( ctx ): Types.File {
    const { file } = ctx.query;
    if (file) {
      return { file };
    } else {
      return {};
    }
  }

  public render(): JSX.Element {
    console.log(this.props.file, '%%%%%%%');
    return(
      <>
      <h1>A web app will be soon here</h1>
        <Container.Upload />
      </>
    )
  }
}
