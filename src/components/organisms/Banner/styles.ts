import styled from 'styled-components';

export const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60rem;
  z-index: -1;

  @media (max-width: 800px) {
    padding-inline: 2rem;
  }
`;

export const Background = styled.div<{bg: string}>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: url(${({bg}) => bg}) no-repeat center;
  background-size: cover;
  opacity: 0.9;
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  margin: 12rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  max-width: 50rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 4rem;
  text-transform: capitalize;
  padding-left: 1rem;

  @media (max-width: 800px) {
    max-width: 30rem;
    font-size: 3rem;
  }
`;