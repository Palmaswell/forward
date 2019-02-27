import * as React from 'react';
import Head from 'next/head';
import * as Container from '../container';
import { Consumer, CtxProvider } from '../context';

const IndexPage: React.SFC<{}> = (): JSX.Element => {
  return (
    <>
    <Head>
    <title>Forward - color contrast accessibility checker</title>
    <meta name="description" content="Forward - color contrast accessibility checker" />
    </Head>
    <h1>Forward - color contrast accessibility checker</h1>
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
