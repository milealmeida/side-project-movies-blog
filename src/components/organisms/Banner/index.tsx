import { Background, Section, Title, Wrapper } from './styles';

import { Author } from '../../atoms/Author';
import { Badge } from '../../atoms/Badge';

export const Banner = () => (
  <Section>
    <Background />
    
    <Wrapper>
      <Badge />

      <Title>be inspired with dark photo and colorful indoor style</Title>

      <Author />
    </Wrapper>
  </Section>
);