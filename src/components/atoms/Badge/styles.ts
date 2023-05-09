import styled from 'styled-components';

export const Wrapper = styled.div<{color: string}>`
  width: fit-content;
  background-color: ${({ color }) => color};
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;
