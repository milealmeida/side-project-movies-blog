import { BadgeProps } from 'utils/getFormattedBadge';

import { getShortTitle } from 'utils/getShortTitle';
import { Badge } from '../../atoms/Badge';
import { Author } from '../../atoms/Author';

import { content } from './content';

import {
  Box, Card, Cards, Section, Title, Wrapper,
} from './styles';

export function Recents() {
  return (
    <Section>
      <Wrapper>
        <Cards>
          {content.map((item) => (
            <Card key={item.id} bg={item.image}>
              <Badge type={item.badge as BadgeProps} />

              <Box>
                <Title>{getShortTitle(item.title)}</Title>
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
