import {
  Background, Section, Title, Wrapper,
} from './styles';

import { Author } from '../../atoms/Author';
import { Badge } from '../../atoms/Badge';

type Props = {
  id: string;
};

export function Banner({ id }: Props) {
  return (
    <Section id={id}>
      <Background bg="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />

      <Wrapper>
        <Badge type="world" />

        <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit</Title>

        <Author
          name="Milena Almeida"
          date="May 10, 2023"
          src="https://github.com/milealmeida.png"
        />
      </Wrapper>
    </Section>
  );
}
