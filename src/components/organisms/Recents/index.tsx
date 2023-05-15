import Link from 'next/link';

import { BlogPost } from 'types';

import { BadgeProps } from 'utils/getFormattedBadge';
import { getFormattedCapitalizeName, getShortTitle } from 'utils';

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
          {posts.map((post) => {
            const postTitleFormatted = getShortTitle(getFormattedCapitalizeName(
              post.title.toLowerCase(),
            ));

            return (
              (
                <Link href={`/post/${post.slug}`}>
                  <Card key={post.id} bg={post.cover}>
                    <Badges>
                      {post.tags.map((badge) => (
                        <Badge
                          key={badge.id}
                          type={badge.name as BadgeProps}
                        />
                      )).slice(0, 2)}
                    </Badges>

                    <Box>
                      <Title>
                        {postTitleFormatted}
                      </Title>
                      <Author
                        src={post.author.avatar_url}
                        name={post.author.name}
                        date={post.date}
                      />
                    </Box>
                  </Card>
                </Link>
              )
            );
          }).slice(0, 3)}
        </Cards>
      </Wrapper>
    </Section>
  );
}
