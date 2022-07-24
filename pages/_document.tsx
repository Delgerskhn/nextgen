import { ColorModeScript } from "@ui/index";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="referrer" content="origin" />
          <meta name="application-name" content={APP_NAME} />
          <meta name="robots" content="index, follow" />
          <meta property="fb:app_id" content="{FB_ID}" />

          <link rel="shortcut icon" href="/favicon/favicon.png" />
          <meta name="msapplication-TileColor" content="#111827" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#111827" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
