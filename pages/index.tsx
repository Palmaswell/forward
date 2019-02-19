import * as React from 'react';
import * as Container from '../container';
// import * as Component from '../components';

export default class IndexPage extends React.Component {

  public render(): JSX.Element {
    return(
      <>
      <h1>A web app will be soon here</h1>
      <Container.Upload />
      </>
    )
  }
}
