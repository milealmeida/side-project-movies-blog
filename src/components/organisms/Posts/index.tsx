import { Post } from '../../atoms/Post';
import { Section, Box, Title } from './styles';

export const Posts = () => (
  <Section>
    <Title>Nossas Postagens</Title>

    <Box>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  </Section>
);