import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';

import NotionService from 'service/notion-service';

import {
  Banner, Footer, Lists, Menu, Posts, Recents,
} from 'components';

export const getStaticProps: GetStaticProps = async () => {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts();

  return {
    props: {
      posts,
    },
  };
};

export default function Home(
  { posts }: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const title = 'Movie Time';
  const description = 'Welcome to Movie Time.';

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" title="description" content={description} />
        <meta name="og:title" title="og:title" content={title} />
        <meta name="og:description" title="og:description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Menu />
        <Banner id="home" />
        <Recents posts={posts} />
        <Posts id="posts" posts={posts} />
        <Lists id="lists" posts={posts} />
        <Footer />
      </main>
    </>
  );
}
