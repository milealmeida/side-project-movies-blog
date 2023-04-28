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
  width: 100%;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 4rem;
  margin-block: 4rem;
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
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
  }
  
  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.4rem;
  }
`;