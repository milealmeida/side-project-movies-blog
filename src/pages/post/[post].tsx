import { Menu, Author, Badge, Footer } from 'components';

import { Container, Content, Divider, Title, Wrapper } from './styles';

import { content } from './content';

export default function Post() {
  return (
    <Container>
      <Wrapper>
        <Menu />

        <Divider />

        <Badge type='Something Cool' />
        <Title>{content.title}</Title>
        <Author
          name='Milena Almeida'
          src='https://github.com/milealmeida.png'
          date='10 de maio, 2023'
        />
        
        <Content dangerouslySetInnerHTML={{ __html: content.text }} />

        <Footer />
      </Wrapper>
    </Container>
  );
}