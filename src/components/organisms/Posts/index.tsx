import { title } from 'process';
import { Post } from '../../atoms/Post';
import { content } from './content';
import { Section, Box, Title } from './styles';

type Props = {
  id: string;
};

export const Posts = ({ id }: Props) => (
  <Section id={id}>
    <Title>Nossas Postagens</Title>

    <Box>
      {content.map(item => (
        <Post
          key={item.id}
          src={item.image}
          alt={item.alt}
          badge={item.badge}
          title={item.title}
          author={item.author}
        />
      ))}
    </Box>
  </Section>
);