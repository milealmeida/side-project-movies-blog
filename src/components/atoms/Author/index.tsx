import Image from 'next/image';
import { FiClock } from 'react-icons/fi';

import { Box, Container } from './styles';

export const Author = () => (
  <Container>
    <Box>
      <Image
        src="https://github.com/milealmeida.png"
        alt="Foto da Milena Almeida"
        width={25}
        height={25}
      />
      <strong>Milena Almeida</strong>
    </Box>

    <Box>
      <FiClock size={15} />
      <strong>20 de abril, 2023</strong>
    </Box>
  </Container>
);