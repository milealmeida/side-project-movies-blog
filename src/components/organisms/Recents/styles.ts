import styled from 'styled-components';

export const Section = styled.section`
  position: absolute;
  top: 45rem;
  width: 100%;

  @media (max-width: 800px) {
    padding-inline: 2rem;
    top: 40rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  margin-inline: auto;
`;

export const Cards = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div<{bg: string}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10rem;
  background: url(${({ bg }) => bg}) no-repeat center;
  background-size: cover;
  max-width: 40rem;
  width: 100%;
  padding: 2rem 4rem 4rem;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    padding: 2rem;
    gap: 4rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  height: 9rem;

  @media (max-width: 800px) {
    font-size: 2rem;
    height: 5rem;
  }
`;
