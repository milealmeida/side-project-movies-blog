import styled from 'styled-components';

export const Section = styled.section`
  max-width: 120rem;
  margin: 75rem auto 10rem;
  padding-top: 5rem;

  @media (max-width: 800px) {
    margin-top: 120rem;
    padding-inline: 2rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem 10rem;
  margin-top: 4rem;

  @media (max-width: 800px) {
    gap: 8rem;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;

  @media (max-width: 800px) {
    text-align: center;
  }
`;