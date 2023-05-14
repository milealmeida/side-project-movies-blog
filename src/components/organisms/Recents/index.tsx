import Link from 'next/link';

import { getShortTitle } from 'utils/getShortTitle';

import { BlogPost } from 'types';

import { Badge } from '../../atoms/Badge';
import { Author } from '../../atoms/Author';

import {
  Badges,
  Box, Card, Cards, Section, Title, Wrapper,
} from './styles';

type Props = {
  posts: BlogPost[]
}

export function Recents({ posts }: Props) {
  return (
    <Section>
      <Wrapper>
        <Cards>
          {posts.map((post) => (
            <Link href={`/post/${post.slug}`}>
              <Card key={post.id} bg={post.cover}>
                <Badges>
                  {post.tags.map((badge) => (
                    <Badge
                      key={badge.id}
                      name={badge.name}
                      color={badge.color}
                    />
                  ))}
                </Badges>

                <Box>
                  <Title>{getShortTitle(post.title)}</Title>
                  <Author
                    src={post.author.avatar_url}
                    name={post.author.name}
                    date={post.date}
                  />
                </Box>
              </Card>
            </Link>
          )).slice(0, 3)}
        </Cards>
      </Wrapper>
    </Section>
  );
}
