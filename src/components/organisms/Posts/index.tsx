import Link from 'next/link';

import { BlogPost } from 'types';
import { Post } from '../../atoms/Post';

import { Section, Box, Title } from './styles';

type Props = {
  id: string;
  posts: BlogPost[]
};

export function Posts({ id, posts }: Props) {
  return (
    <Section id={id}>
      <Title>Posts</Title>

      <Box>
        {posts.map((item) => (
          <Link href={`post/${item.slug}`}>
            <Post
              key={item.id}
              date={item.date}
              src={item.cover}
              badges={item.tags}
              title={item.title}
              author={item.author}
            />
          </Link>
        )).slice(0, 6)}
      </Box>
    </Section>
  );
}
