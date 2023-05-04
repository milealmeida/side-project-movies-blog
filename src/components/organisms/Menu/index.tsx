import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Logo } from 'components/atoms/Logo';

import { Desktop, Header, Mobile, Nav, Wrapper, Box } from './styles';

export const Menu = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(item => !item)
  };

  const handleClose = () => {
    setActive(false)
  };

  return (
    <Header>
      <Desktop>
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
      </Desktop>
  
      <Mobile>
        <Wrapper>
          <Box>
            <Link href='/'>
              <Logo />
            </Link>
  
            <Image
              onClick={handleClick}
              src='/img/svg/menu.svg'
              alt='Icon Menu'
              width={35}
              height={35}
            />
          </Box>
  
          <Nav className={active ? 'active' : ''}>
            <Link href="/" onClick={handleClose}>Home</Link>
            <Link href="#posts" onClick={handleClose}>Posts</Link>
            <Link href="#lists" onClick={handleClose}>Lists</Link>
          </Nav>
        </Wrapper>
      </Mobile>
    </Header>
  );
}