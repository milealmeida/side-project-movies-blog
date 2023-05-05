import Link from 'next/link';

import { Logo } from 'components/atoms/Logo';

import {
  Container, Copyright, Wrapper, Box,
} from './styles';

export function Footer() {
  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Logo />
        </Link>

        <Box>
          <Link href="/">Home</Link>
          <Link href="#posts">Posts</Link>
          <Link href="#lists">Lists</Link>
        </Box>

        <Copyright>
          <p>Copyright© 2023 Movie Time.</p>
          <strong>All rights reserved.</strong>
        </Copyright>
      </Wrapper>
    </Container>
  );
}
