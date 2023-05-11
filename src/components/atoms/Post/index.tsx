import { BadgeProps } from 'utils/getFormattedBadge';
import { getShortTitle } from 'utils/getShortTitle';
import { Author } from '../Author';
import { Badge } from '../Badge';

import {
  Container, Image, Box, Title,
} from './styles';

type Props = {
  src: string;
  alt: string;
  title: string;
  badge: BadgeProps;
  author: {
    name: string;
    image: string;
    date: string;
  }
};

export function Post({
  src,
  alt,
  title,
  badge,
  author,
}: Props) {
  return (
    <Container>
      <Image
        src={src}
        alt={alt}
      />

      <Box>
        <Badge type={badge} />
        <Title>{getShortTitle(title)}</Title>
        <Author
          black
          date={author.date}
          name={author.name}
          src={author.image}
        />
      </Box>
    </Container>
  );
}
