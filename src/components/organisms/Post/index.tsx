import ReactMarkdown from 'react-markdown';

import {
  Menu, Author, Badge, Footer,
} from 'components';

import {
  Container, Content, Divider, Title, Wrapper,
} from './styles';

type Props = {
  post: any;
  content: any;
}

export function PostTemplate({ post, content }: Props) {
  return (
    <Container>
      <Wrapper>
        <Menu />

        <Divider />

        <Badge type="movies" />
        <Title>{post.title}</Title>
        <Author
          name="Milena Almeida"
          src="https://github.com/milealmeida.png"
          date="May 10, 2023"
        />

        <Content>
          <ReactMarkdown>{content}</ReactMarkdown>
        </Content>
        <Footer />
      </Wrapper>
    </Container>
  );
}
