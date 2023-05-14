import Link from 'next/link';

import { Badge, Author } from 'components';

import { getShortTitle } from 'utils/getShortTitle';

import { BlogPost } from 'types';

import { BadgeProps } from 'utils/getFormattedBadge';
import {
  Badges,
  Card, CardTitle, Cards, Section, Title,
} from './styles';

type Props = {
  id: string;
  posts: BlogPost[];
};

export function Lists({ id, posts }: Props) {
  return (
    <Section id={id}>
      <Title>Lists</Title>

      <Cards>
        {posts.map((item) => (
          <Link href={`post/${item.slug}`}>
            <Card key={item.id} bg={item.cover}>
              <Badges>
                {item.tags.map((badge) => (
                  <Badge
                    key={badge.id}
                    type={badge.name as BadgeProps}
                  />
                ))}
              </Badges>

              <CardTitle>{getShortTitle(item.title)}</CardTitle>
              <Author
                date={item.date}
                name={item.author.name}
                src={item.author.avatar_url}
              />
            </Card>
          </Link>
        )).slice(3, 6)}
      </Cards>
    </Section>
  );
}
