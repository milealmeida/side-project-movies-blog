import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.gray[800]};
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  margin-block: 6rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 4rem;
  margin-block: 4rem;

  @media (max-width: 800px) {
    font-size: 2.6rem;
    margin-block: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-block: 4rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  img {
    width: 100%;
    height: 50rem;
    object-fit: cover;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    text-align: justify;
  }

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.4rem;
    font-style: italic;
  }

  @media (max-width: 1250px) {
    padding-inline: 2rem;
  }
`;
