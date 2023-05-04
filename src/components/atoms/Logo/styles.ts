import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 800px) {
    font-size: 2.6rem;
  }
`;