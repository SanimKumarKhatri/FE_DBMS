import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { getServerSideToken, getUserScript} from '../lib/auth';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    const userData = getServerSideToken(ctx.req);

    return {
      ...props,
      ...userData,
      styles: React.Children.toArray([props.styles])
    };
  }

  render() {
    const user = {
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
      type: this.props.type
    };
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <script dangerouslySetInnerHTML = {{__html: getUserScript(user) }}/>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;