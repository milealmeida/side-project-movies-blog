import { Badge } from '../../atoms/Badge';
import { Author } from '../../atoms/Author';

import { Box, Card, Cards, Section, Title, Wrapper } from './styles';
import { content } from './content';

export const Recents = () => (
  <Section>
    <Wrapper>
      <Cards>
        {content.map(item => (
          <Card key={item.id} bg={item.image}>
            <Badge />

            <Box>
              <Title>{item.title}</Title>
              <Author />
            </Box>
          </Card>
        ))}
      </Cards>
    </Wrapper>
  </Section>
);