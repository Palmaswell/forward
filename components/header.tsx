import Head from 'next/head';
import { Global } from '@emotion/core';
import { getGlobalStyles } from './global';

export interface HeaderProps {
  title: string;
  description: string;
}

export const Header: React.FunctionComponent<HeaderProps> = (props): JSX.Element => (
  <>
    <Global styles={getGlobalStyles()} />
      <Head>
        <title>{props.title}</title>
        <meta
          name="description"
          content={props.description}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="preload"
          as="font"
          href="https://fonts.googleapis.com/css?family=Halant|Nunito+Sans"
        />
      </Head>
  </>
)
