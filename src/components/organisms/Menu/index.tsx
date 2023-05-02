import Link from 'next/link';
import { Header, Nav, Wrapper } from './styles';
import { Logo } from 'components/atoms/Logo';

export const Menu = () => (
  <Header>
    <Wrapper>
      <Link href='/'>
        <Logo />
      </Link>

      <Nav>
        <Link href="/">Home</Link>
        <Link href="#posts">Posts</Link>
        <Link href="#lists">Lists</Link>
      </Nav>
    </Wrapper>
  </Header>
);