import { styled } from '../../../../stitches.config';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  display: 'block',
  backgroundColor: '$violet12',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: 'auto', width: 1 },
});

// Exports
export const Separator = StyledSeparator;
