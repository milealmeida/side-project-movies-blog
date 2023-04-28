import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  padding-block: 10rem;
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
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;

  strong {
    margin-left: 1rem;
  }
`;