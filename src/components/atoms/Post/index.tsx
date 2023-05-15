import { BadgeProps } from 'utils/getFormattedBadge';
import { getFormattedCapitalizeName, getShortTitle } from 'utils';

import { Author } from '../Author';
import { Badge } from '../Badge';

import {
  Container, Image, Box, Title, Badges,
} from './styles';

type Props = {
  src: string;
  title: string;
  badges: {
    id: string;
    name: string;
  }[];
  date: string;
  author: {
    name: string;
    avatar_url: string;
  }
};

export function Post({
  src,
  title,
  badges,
  author,
  date,
}: Props) {
  const postTitleFormatted = getShortTitle(getFormattedCapitalizeName(
    title.toLowerCase(),
  ));

  return (
    <Container>
      <Image src={src} />

      <Box>
        <Badges>
          {badges.map((badge) => (
            <Badge
              key={badge.id}
              type={badge.name as BadgeProps}
            />
          )).slice(0, 2)}
        </Badges>

        <Title>{postTitleFormatted}</Title>
        <Author
          black
          date={date}
          name={author.name}
          src={author.avatar_url}
        />
      </Box>
    </Container>
  );
}
