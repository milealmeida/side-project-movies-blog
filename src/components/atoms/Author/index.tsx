import Image from 'next/image';
import { FiClock } from 'react-icons/fi';

import { Box, Container } from './styles';

type Props = {
  black?: boolean;
  src: string;
  name: string;
  date: string;
};

export function Author({
  black,
  src,
  name,
  date,
}: Props) {
  return (
    <Container>
      <Box black={black}>
        <Image
          src={src}
          alt={`Foto de perfil ${name}`}
          width={25}
          height={25}
        />
        <strong>{name}</strong>
      </Box>

      <Box black={black}>
        <FiClock size={15} />
        <strong>{date}</strong>
      </Box>
    </Container>
  );
}
