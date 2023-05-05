import styled from 'styled-components';

export const Wrapper = styled.div`
  width: fit-content;
  background-color: red;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;
