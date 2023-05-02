import { Author } from '../Author';
import { Badge } from '../Badge';

import { Container, Image, Box, Title } from './styles';

type Props = {
  src: string;
  alt: string;
  title: string;
  badge: string;
  author: {
    name: string;
    image: string;
    date: string;
  }
};

export const Post = ({
  src,
  alt,
  title,
  badge,
  author,
}: Props) => (
  <Container>
    <Image
      src={src}
      alt={alt}
    />

    <Box>
      <Badge type={badge}/>
      <Title>{title}</Title>
      <Author
        black 
        date={author.date}
        name={author.name}
        src={author.image}
      />
    </Box>
  </Container>
);