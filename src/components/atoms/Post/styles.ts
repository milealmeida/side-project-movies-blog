import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 50rem;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 13rem;
  height: 100%;

  @media (max-width: 800px) {
    width: 100%;
    height: 15rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-transform: capitalize;
`;
