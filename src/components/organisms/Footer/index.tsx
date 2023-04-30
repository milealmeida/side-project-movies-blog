import Link from 'next/link';

import { Logo } from 'components/atoms/Logo';

import { Container, Copyright, Wrapper, Box } from './styles';

export const Footer = () => (
  <Container>
    <Wrapper>
      <Link href='/'>
        <Logo />
      </Link>

      <Box>
        <Link href="/">Home</Link>
        <Link href="#posts">Postagens</Link>
        <Link href="#lists">Listas</Link>
      </Box>

      <Copyright>
        <p>Copyright© 2023 Popcorn Time.</p>
        <strong>Todos os direitos reservados.</strong>
      </Copyright>
    </Wrapper>
  </Container>
);