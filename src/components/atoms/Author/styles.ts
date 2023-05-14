import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Box = styled.div<{ black?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.2rem;
  color: ${({ theme, black }) => (black ? theme.colors.black : theme.colors.white)};
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0,0,0,0.6);

  img {
    border-radius: 50%;
  }
`;
