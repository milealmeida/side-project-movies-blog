import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 2rem 1rem;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;

  a {
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.125);
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  font-size: 2rem;
`;