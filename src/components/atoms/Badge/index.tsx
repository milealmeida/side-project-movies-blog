import { BadgeProps, getFormattedBadge } from 'utils/getFormattedBadge';
import { Wrapper } from './styles';

type Props = {
  type: BadgeProps
};

export function Badge({ type }: Props) {
  const { name, color } = getFormattedBadge(type);

  return (
    <Wrapper color={color}>
      {name}
    </Wrapper>
  );
}
