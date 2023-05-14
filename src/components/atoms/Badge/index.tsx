// import { BadgeProps, getFormattedBadge } from 'utils/getFormattedBadge';
import { Wrapper } from './styles';

type Props = {
  name: string;
  color: string;
};

export function Badge({ name, color }: Props) {
  // const { name } = getFormattedBadge(type);

  return (
    <Wrapper color={color}>
      {name}
    </Wrapper>
  );
}
