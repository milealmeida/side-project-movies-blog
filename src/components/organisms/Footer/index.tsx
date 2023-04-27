import { Logo } from 'components/atoms/Logo';
import { Container, Copyright, Wrapper, Box } from './styles';
import Link from 'next/link';

export const Footer = () => (
  <Container>
    <Wrapper>
      <Logo />

      <Box>
        <Link href="/">Home</Link>
        <Link href="#posts">Postagens</Link>
        <Link href="#lists">Listas</Link>
      </Box>

      <Copyright>
        Copyright© 2023 Popcorn Time.
        <strong>Todos os direitos reservados.</strong>
      </Copyright>
    </Wrapper>
  </Container>
);