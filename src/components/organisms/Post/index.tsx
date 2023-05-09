import {
  Menu, Author, Badge, Footer,
} from 'components';

import {
  Container, Content, Divider, Title, Wrapper,
} from './styles';

import { content } from './content';

export function PostTemplate() {
  return (
    <Container>
      <Wrapper>
        <Menu />

        <Divider />

        <Badge type="movies" />
        <Title>{content.title}</Title>
        <Author
          name="Milena Almeida"
          src="https://github.com/milealmeida.png"
          date="May 10, 2023"
        />

        <Content dangerouslySetInnerHTML={{ __html: content.text }} />

        <Footer />
      </Wrapper>
    </Container>
  );
}
