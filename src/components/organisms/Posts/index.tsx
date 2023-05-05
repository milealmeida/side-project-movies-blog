import { Post } from '../../atoms/Post';
import { content } from './content';
import { Section, Box, Title } from './styles';

type Props = {
  id: string;
};

export function Posts({ id }: Props) {
  return (
    <Section id={id}>
      <Title>Posts</Title>

      <Box>
        {content.map((item) => (
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
}
