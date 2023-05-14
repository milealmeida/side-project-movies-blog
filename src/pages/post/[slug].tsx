import { GetStaticProps, InferGetStaticPropsType } from 'next';

import NotionService from 'service/notion-service';

import { PostTemplate } from 'components';

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();

  const slug = context.params?.slug ?? '';

  const content = await notionService.getSingleBlogPost(slug);

  if (!content) {
    throw new Error('Ops! Something is wrong');
  }

  return {
    props: {
      markdown: content.markdown,
      post: content.post,
    },
  };
};

export async function getStaticPaths() {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();

  const paths = posts.map((post) => `/post/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
}

function Post({ markdown, post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PostTemplate post={post} content={markdown.parent} />
  );
}

export default Post;
