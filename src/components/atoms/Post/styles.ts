import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 50rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-transform: capitalize;
`;