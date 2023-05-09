import { BadgeProps, getFormattedBadge } from 'utils/getFormattedBadge';
import { Wrapper } from './styles';

type Props = {
  type: BadgeProps
};

export function Badge({ type }: Props) {
  const { color, title } = getFormattedBadge(type);

  return (
    <Wrapper color={color}>
      {title}
    </Wrapper>
  );
}
