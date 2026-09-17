import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-us">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2N2HDG3NTE"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2N2HDG3NTE');
            `,
          }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#46aacf" />
      </Head>
      <body className="min-h-screen bg-primary-700">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
