import { Menu, Author, Badge, Footer } from 'components';

import { Container, Content, Divider, Title, Wrapper } from './styles';

import { content } from './content';

export default function Post() {
  return (
    <Container>
      <Wrapper>
        <Menu />

        <Divider />

        <Badge />
        <Title>{content.title}</Title>
        <Author />
        
        <Content dangerouslySetInnerHTML={{ __html: content.text }} />

        <Footer />
      </Wrapper>
    </Container>
  );
}