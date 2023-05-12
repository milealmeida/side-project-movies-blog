import Link from 'next/link';

import { BadgeProps } from 'utils/getFormattedBadge';

import { Post } from '../../atoms/Post';

import { content } from './content';

import { Section, Box, Title } from './styles';

type Props = {
  id: string;
};

export function Posts({ id }: Props) {
  return (
    <Section id={id}>
      <Title>Posts</Title>

      <Box>
        {content.map((item) => (
          <Link href={`post/${item.slug}`}>
            <Post
              key={item.id}
              src={item.image}
              alt={item.alt}
              badge={item.badge as BadgeProps}
              title={item.title}
              author={item.author}
            />
          </Link>
        ))}
      </Box>
    </Section>
  );
}
