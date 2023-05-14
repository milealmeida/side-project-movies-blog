import { getShortTitle } from 'utils/getShortTitle';
import { BadgeProps } from 'utils/getFormattedBadge';
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
          ))}
        </Badges>

        <Title>{getShortTitle(title)}</Title>
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
