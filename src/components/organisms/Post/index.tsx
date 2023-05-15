import ReactMarkdown from 'react-markdown';

import {
  Menu, Author, Badge, Footer,
} from 'components';

import { BlogPost } from 'types';

import { getFormattedCapitalizeName } from 'utils';
import { BadgeProps } from 'utils/getFormattedBadge';

import {
  Badges, Container, Content, Description, Divider, Title, Wrapper,
} from './styles';

type Props = {
  post: BlogPost;
  content: string;
}

export function PostTemplate({ post, content }: Props) {
  return (
    <Container>
      <Wrapper>
        <Menu />

        <Divider />

        <Badges>
          {post.tags.map((item) => (
            <Badge
              key={item.id}
              type={item.name as BadgeProps}
            />
          )).slice(0, 2)}
        </Badges>

        <Title>{getFormattedCapitalizeName(post.title.toLowerCase())}</Title>

        <Description>{post.description}</Description>

        <Author
          name={post.author.name}
          src={post.author.avatar_url}
          date={post.date}
        />

        <Content>
          <ReactMarkdown>{content}</ReactMarkdown>
        </Content>
        <Footer />
      </Wrapper>
    </Container>
  );
}
