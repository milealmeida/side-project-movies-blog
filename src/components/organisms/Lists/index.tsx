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
          <Badge type={item.badge} />
          <CardTitle>{item.title}</CardTitle>
          <Author
            date={item.author.date}
            name={item.author.name}
            src={item.author.image}
          />
        </Card>
      ))}
    </Cards>
  </Section>
);