import {type AppType} from 'next/dist/shared/lib/utils';

import '../styles/globals.css';
import Head from 'next/head';

const MyApp: AppType = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Mamma och Pappa 120 år</title>
        <meta
          name="description"
          content="En presentation för Mamma och Pappa på 120-årsdagen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
