import styled from 'styled-components';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
`;

export const Desktop = styled.div`
  padding: 2rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Mobile = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7.5rem;
  padding-inline: 2rem;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 120rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: auto;

  a {
    color: ${({ theme }) => theme.colors.white};
    transition: all 300ms ease-in-out;
    text-shadow: 0.4rem 0.3rem 0.5rem rgba(0,0,0,0.9);

    &:hover {
      transform: scale(1.125);
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  font-size: 2rem;

  @media (max-width: 800px) {
    background-color: ${({ theme }) => theme.colors.gray[700]};
    transition: all 400ms ease-in-out;
    position: absolute;
    top: -20rem;
    z-index: -1;
    flex-direction: column;
    align-items: center;
    padding-block: 4rem;
    width: 100%;

    &.active {
      top: 5rem;
      left: 0;
    }
  }
`;
