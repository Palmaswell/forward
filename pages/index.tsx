import * as React from 'react';
import * as Container from '../container';

export default class IndexPage extends React.Component {
  static async getInitialProps({ ctx }) {
    console.log(ctx, '*********');
    return {};
  }

  public render(): JSX.Element {
    return(
      <>
      <h1>A web app will be soon here</h1>
        <Container.Upload />
      </>
    )
  }
}
