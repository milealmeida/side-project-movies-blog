import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  padding-block: 10rem;

  @media (max-width: 950px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 1250px) {
    padding-inline: 2rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 120rem;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.white};

  a {
    transition: all 300ms;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 5rem;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 4rem;

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;

    &:hover {
      font-weight: 700;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const Copyright = styled.div`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
  }
`;
