// _app.tsx

import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css'; // Example of global styles import

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Maman Toreabev" />
        <meta
          name="description"
          content="This is a description of your website. It should be concise and informative."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
