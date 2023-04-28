import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  background-color: #474a51;
  padding: 4rem;

  @media (max-width: 800px) {
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
  display: flex;
  margin-inline: auto;
  gap: 4rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Card = styled.div<{bg: string}>`
  background: url(${({bg}) => bg}) no-repeat center;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25rem 4rem 4rem;
  cursor: pointer;
`;

export const CardTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  margin-block: 2rem;
  height: 5rem;
`;