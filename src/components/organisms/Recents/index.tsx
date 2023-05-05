import { Badge } from '../../atoms/Badge';
import { Author } from '../../atoms/Author';

import {
  Box, Card, Cards, Section, Title, Wrapper,
} from './styles';
import { content } from './content';

export function Recents() {
  return (
    <Section>
      <Wrapper>
        <Cards>
          {content.map((item) => (
            <Card key={item.id} bg={item.image}>
              <Badge type={item.badge} />

              <Box>
                <Title>{item.title}</Title>
                <Author
                  src={item.author.image}
                  name={item.author.name}
                  date={item.author.date}
                />
              </Box>
            </Card>
          ))}
        </Cards>
      </Wrapper>
    </Section>
  );
}
