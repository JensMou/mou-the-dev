// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="language" content="english" />
          <meta httpEquiv="content-type" content="text/html" />
          <meta name="author" content="Jens Mou" />
          <meta name="designer" content="Jens Mou" />
          <meta name="publisher" content="Jens Mou" />
          <meta
            name="no-email-collection"
            content="http://www.unspam.com/noemailcollection/"
          />
          <meta
            name="description"
            content="This is the personal page for Jens Mou - A Web Weveloper"
          />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"crossorigin"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <footer>Hello1</footer>
      </Html>
    );
  }
}

export default MyDocument;
