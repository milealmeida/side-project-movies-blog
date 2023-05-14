import Image from 'next/image';
import { FiClock } from 'react-icons/fi';

import { format } from 'date-fns';

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
          src={src ?? '/img/svg/user.svg'}
          alt={`Photo of ${name}`}
          width={25}
          height={25}
          style={{ objectFit: 'cover' }}
        />
        <strong>{name ?? 'Author'}</strong>
      </Box>

      <Box black={black}>
        <FiClock size={15} />
        <strong>{format(new Date(date), 'MMM dd, yyyy')}</strong>
      </Box>
    </Container>
  );
}
