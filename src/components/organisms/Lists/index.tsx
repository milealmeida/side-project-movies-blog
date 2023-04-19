import { Badge } from 'components/atoms/Badge';
import { content } from './content';
import { Card, CardTitle, Cards, Section, Title } from './styles';
import { Author } from 'components/atoms/Author';

export const Lists = () => (
  <Section>
    <Title>Listas</Title>

    <Cards>
      {content.map(item => (
        <Card key={item.id} bg={item.image}>
          <Badge />
          <CardTitle>{item.title}</CardTitle>
          <Author />
        </Card>
      ))}
    </Cards>
  </Section>
);