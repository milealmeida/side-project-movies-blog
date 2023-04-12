import Head from 'next/head';

import { Banner, Menu, Recents } from 'components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Popcorn Time</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />
        <Banner />
        <Recents />
      </main>
    </>
  );
}
