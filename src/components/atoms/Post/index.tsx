import Image from 'next/image';

import { Author } from '../Author';
import { Badge } from '../Badge';

import { Container, Box, Title } from './styles';

export const Post = () => (
  <Container>
    <Image src="/img/bg.jpg" alt="Alt cinema" width={150} height={150} />

    <Box>
      <Badge />
      <Title>every photographer needs time to shoot this photo</Title>
      <Author black />
    </Box>
  </Container>
);