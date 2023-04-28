import styled from 'styled-components';

export const Section = styled.section`
  max-width: 120rem;
  margin: 80rem auto 10rem;

  @media (max-width: 800px) {
    margin-top: 155rem;
    padding-inline: 2rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem 10rem;
  margin-top: 4rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;