import { Badge } from 'components/atoms/Badge';
import { Author } from 'components/atoms/Author';
import { content } from './content';
import {
  Card, CardTitle, Cards, Section, Title,
} from './styles';

type Props = {
  id: string;
};

export function Lists({ id }: Props) {
  return (
    <Section id={id}>
      <Title>Lists</Title>

      <Cards>
        {content.map((item) => (
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
}
