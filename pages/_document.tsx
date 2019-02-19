import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import { css, Global } from '@emotion/core';
import * as Component from '../components';

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
            background-color: #1E1E1E;
            ${Component.getFont()}
          }
        `}
        />
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <title>Forward - color contrast accessibility checker</title>
          <meta name="description" content="Forward - color contrast accessibility checker" />
          <link
            rel="preload"
            as="font"
            href="https://fonts.googleapis.com/css?family=Halant|Nunito+Sans" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
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
