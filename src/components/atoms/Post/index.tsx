import Image from 'next/image';

import { Author } from '../Author';
import { Badge } from '../Badge';

import { Container, ImageContainer, Box, Title } from './styles';

export const Post = () => (
  <Container>
    <ImageContainer>
      <Image
        src="/img/bg.jpg"
        alt="Alt cinema"
        fill
        style={{ objectFit: 'cover' }}
      />
    </ImageContainer>

    <Box>
      <Badge />
      <Title>every photographer needs time to shoot this photo</Title>
      <Author black />
    </Box>
  </Container>
);