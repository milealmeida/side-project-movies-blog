import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[450]};
  padding: 12rem 4rem 4rem;

  @media (max-width: 1250px) {
    padding-inline: 2rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 4rem;
`;

export const Cards = styled.div`
  max-width: 120rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-inline: auto;
  gap: 4rem;

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div<{bg: string}>`
  background: url(${({ bg }) => bg}) no-repeat center;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25rem 4rem 4rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    padding:  8rem 2rem 2rem;
  }
`;

export const CardTitle = styled.h2`
  text-shadow: 0.4rem 0.3rem 0.5rem rgba(0,0,0,0.9);
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  margin-block: 2rem;
  height: 5rem;
  text-transform: capitalize;
`;

export const Badges = styled.div`
  display: flex;
  gap: 1rem;
`;
