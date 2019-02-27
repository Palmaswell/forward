import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import { css, Global } from '@emotion/core';
import * as Component from '../components';
import * as Util from '../utils';

export default class ForwardDocument extends Document {
  private constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  public render(): JSX.Element {
    return (
      <html>
        <Global
        styles={css`
          body {
            padding: ${Component.Size.L}px ${Component.Size.XL}px;
            margin: 0;
            min-height: 100%;
            background-color: ${Util.toRGBString(Component.Color.white)};
            ${Component.getFont()}
          }
        `}
        />
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <link
            rel="preload"
            as="font"
            href="https://fonts.googleapis.com/css?family=Halant|Nunito+Sans" />
        </Head>
        <body>
          <Main>
            <Main />
            <NextScript />
          </Main>
        </body>
      </html>
    )
  }
}

ForwardDocument.getInitialProps = async ({ renderPage }) => {
  const page = await renderPage();
  const styles = extractCritical(page.html);
  return {
    ...page,
    ...styles
  }
}
