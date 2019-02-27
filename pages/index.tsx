import * as React from 'react';
import Head from 'next/head';
import * as Component from '../components';
import * as Container from '../container';
import * as Type from '../types';
import { Consumer, CtxProvider } from '../context';

const IndexPage: React.SFC<{}> = (): JSX.Element => {
  return (
    <>
    <Head>
    <title>Forward - color contrast accessibility checker</title>
    <meta name="description" content="Forward - color contrast accessibility checker" />
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
