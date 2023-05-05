import { Wrapper } from './styles';

type Props = {
  type: string
};

export function Badge({ type }: Props) {
  return (
    <Wrapper>
      {type}
    </Wrapper>
  );
}
