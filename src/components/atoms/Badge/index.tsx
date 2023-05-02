import { Wrapper } from './styles';

type Props = {
  type: string
};

export const Badge = ({ type }: Props) => (
  <Wrapper>
    {type}
  </Wrapper>
);