import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';

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
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, user-scalable=no" />
          <title>Forwart - color contrast accessibility checker</title>
          <meta name="description" content="" />
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
